import { chromium } from "playwright";

const BASE = process.env.QA_URL ?? "http://127.0.0.1:4173/";
const VIEWPORTS = [
  { name: "mobile-375x812", width: 375, height: 812 },
  { name: "tablet-768x1024", width: 768, height: 1024 },
  { name: "desktop-1280x800", width: 1280, height: 800 },
];

const line = (s) => console.log(s);
const total = { fail: 0, warn: 0 };

const browser = await chromium.launch({ channel: "chrome" });

for (const vp of VIEWPORTS) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await context.newPage();

  const consoleErrors = [];
  const failedResponses = [];
  page.on("console", (m) => { if (m.type() === "error") consoleErrors.push(m.text().slice(0, 180)); });
  page.on("pageerror", (e) => consoleErrors.push("pageerror: " + e.message.slice(0, 180)));
  page.on("response", (r) => { if (r.status() >= 400) failedResponses.push(`${r.status()} ${r.url().slice(0, 110)}`); });

  line(`\n=== ${vp.name} ===`);
  try {
    await page.goto(BASE, { waitUntil: "load", timeout: 60000 });
  } catch (e) {
    line(`FATAL: cannot load page: ${e.message.split("\n")[0]}`);
    total.fail++;
    await context.close();
    continue;
  }

  // scroll through the page to trigger lazy images + reveals
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.8;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  await page.waitForTimeout(1500);

  const ev = (fn, arg) => page.evaluate(fn, arg);

  // ---- 1. broken images ----
  const badImages = await ev(() =>
    [...document.images]
      .filter((i) => i.complete && i.naturalWidth === 0)
      .map((i) => (i.getAttribute("alt") || "no-alt") + " ← " + (i.currentSrc || i.src).slice(0, 90))
  );
  reportLine("Broken images", badImages);

  // ---- 2. horizontal overflow (layout bleed) ----
  const overflow = await ev(() => {
    const vw = document.documentElement.clientWidth;
    const bad = [];
    const skip = (el) =>
      el.closest('[aria-hidden="true"]') ||
      el.closest("header") ||
      el.closest("iframe") ||
      el === document.body;
    document.querySelectorAll("body *").forEach((el) => {
      if (skip(el)) return;
      const cs = getComputedStyle(el);
      if (cs.position === "fixed" || cs.position === "absolute") return;
      const r = el.getBoundingClientRect();
      if (r.width < 2) return;
      if (r.right > vw + 1 || r.left < -1) {
        bad.push(
          `${el.tagName.toLowerCase()}${el.id ? "#" + el.id : ""} [${String(el.className).split(" ").slice(0, 3).join(" ")}] left=${Math.round(r.left)} right=${Math.round(r.right)} vw=${vw}`
        );
      }
    });
    return [...new Set(bad)].slice(0, 12);
  });
  reportLine("Horizontal overflow elements", overflow);

  // ---- 3. clipped / truncated text ----
  const clipped = await ev(() => {
    const out = [];
    document.querySelectorAll("p,a,button,span,h1,h2,h3,li,dt,dd,figcaption").forEach((el) => {
      const cs = getComputedStyle(el);
      if (cs.display === "none" || cs.overflowX === "visible") return;
      if (el.closest("#faq") && el.getAttribute("role") !== "region") {
        // accordion panels intentionally collapse; only flag when expanded
        const region = el.closest('[role="region"]');
        if (region && region.getAttribute("aria-labelledby") && document.getElementById(region.getAttribute("aria-labelledby"))?.getAttribute("aria-expanded") !== "true") return;
      }
      if (el.scrollWidth > el.clientWidth + 3 && el.clientWidth > 10) {
        out.push(`${el.tagName.toLowerCase()} "${(el.textContent || "").trim().slice(0, 28)}" scrollW=${el.scrollWidth} clientW=${el.clientWidth}`);
      }
    });
    return [...new Set(out)].slice(0, 12);
  });
  reportLine("Clipped text (overflow hidden + scrollWidth > clientWidth)", clipped);

  // ---- 4. dead in-page anchors ----
  const deadAnchors = await ev(() =>
    [...new Set([...document.querySelectorAll('a[href^="#"]')]
      .map((a) => a.getAttribute("href"))
      .filter((h) => h && h.length > 1 && !document.getElementById(h.slice(1))))]
  );
  reportLine("Dead anchor links", deadAnchors);

  // ---- 5. too-small tap targets ----
  const smallTargets = await ev(() => {
    const out = [];
    document.querySelectorAll("a,button").forEach((el) => {
      const cs = getComputedStyle(el);
      if (cs.display === "none" || cs.visibility === "hidden") return;
      if (el.classList.contains("sr-only")) return;
      const r = el.getBoundingClientRect();
      if (r.width === 0) return;
      if (r.height < 24 || r.width < 24) {
        out.push(`${el.tagName.toLowerCase()} "${(el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 22)}" ${Math.round(r.width)}x${Math.round(r.height)}`);
      }
    });
    return out.slice(0, 12);
  });
  reportLine("Tap targets < 24px", smallTargets);

  // ---- 6. low-contrast text (WCAG, blended against nearest opaque bg) ----
  const contrast = await ev(() => {
    const parse = (c) => {
      const m = c.match(/rgba?\(([^)]+)\)/);
      if (!m) return null;
      const [r, g, b, a = 1] = m[1].split(",").map((s) => parseFloat(s));
      return { r, g, b, a };
    };
    const blend = (fg, bg) => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a) });
    const lum = (c) => {
      const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
      return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
    };
    const ratio = (a, b) => { const l1 = lum(a), l2 = lum(b); return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05); };
    const bgOf = (el) => {
      let e = el;
      while (e) {
        const c = parse(getComputedStyle(e).backgroundColor);
        if (c && c.a > 0.5) return c;
        e = e.parentElement;
      }
      return { r: 11, g: 11, b: 15, a: 1 };
    };
    const out = new Map();
    document.querySelectorAll("p,a,button,span,h1,h2,h3,small").forEach((el) => {
      const text = (el.textContent || "").trim();
      if (!text || el.children.length > 2) return;
      const cs = getComputedStyle(el);
      if (cs.display === "none" || cs.visibility === "hidden" || parseFloat(cs.opacity) < 0.4) return;
      if (el.closest('[aria-hidden="true"]') || el.closest("iframe")) return;
      if (el.closest("[data-over-photo]")) return; // sits on a photo with a gradient scrim
      const fg = parse(cs.color);
      if (!fg) return;
      const bg = bgOf(el);
      const r = ratio(blend(fg, bg), bg);
      const size = parseFloat(cs.fontSize);
      const bold = parseInt(cs.fontWeight) >= 600;
      const need = size >= 24 || (size >= 18.66 && bold) ? 3 : 4.5;
      if (r < need) {
        const key = cs.color + "|" + text.slice(0, 18);
        if (!out.has(key)) out.set(key, `"${text.slice(0, 26)}" ratio=${r.toFixed(2)} (need ${need}) ${size}px ${cs.color}`);
      }
    });
    return [...out.values()].slice(0, 14);
  });
  reportLine("Low-contrast text", contrast, "warn");

  // ---- 7. interactions ----
  const fa = [];

  const waitSettled = async (sel, timeout = 7000) => {
    await page
      .waitForFunction(
        ([s]) => {
          const el = document.querySelector(s);
          if (!el) return false;
          const top = el.getBoundingClientRect().top;
          return top >= -2 && top <= 300;
        },
        [sel],
        { timeout }
      )
      .catch(() => {});
    await page.waitForTimeout(150);
  };

  try {
    // pause autoplay by hovering the carousel, then reset to slide 1 for determinism
    await page.hover('section#top [role="group"]', { timeout: 3000 });
    await page.click('button[aria-label^="前往第 1 張"]', { timeout: 3000 });
    await page.waitForTimeout(300);

    // 7a. carousel dot -> slide 2 -> its CTA reaches #pricing
    await page.click('button[aria-label^="前往第 2 張"]', { timeout: 3000 });
    await page.waitForTimeout(500);
    const activeSlide = await ev(() => document.querySelector('section#top div[aria-hidden="false"]')?.textContent.includes("每日鮮絞牛肉堡"));
    if (!activeSlide) fa.push("carousel: dot click did not switch to slide 2");
    await page.click('section#top div[aria-hidden="false"] a[href="#pricing"]', { timeout: 3000 });
    await waitSettled("#pricing");
    const heroCta = await ev(() => ({ hash: location.hash, top: Math.round(document.querySelector("#pricing").getBoundingClientRect().top) }));
    if (heroCta.hash !== "#pricing" || heroCta.top > 200) fa.push(`slide CTA 立即訂購/看菜單 → hash=${heroCta.hash} pricing.top=${heroCta.top}`);
    await ev(() => window.scrollTo({ top: 0, behavior: "instant" }));

    // 7b. carousel next arrow -> slide 3 (re-pause autoplay, reset to slide 2 first)
    await page.hover('section#top [role="group"]').catch(() => {});
    await page.click('button[aria-label^="前往第 2 張"]', { timeout: 3000 });
    await page.waitForTimeout(300);
    await page.click('button[aria-label="下一張"]', { timeout: 3000 });
    await page.waitForTimeout(500);
    const slide3 = await ev(() => document.querySelector('section#top div[aria-hidden="false"]')?.textContent.includes("雙人分享餐"));
    if (!slide3) fa.push("carousel: next arrow did not advance to slide 3");

    // 7c. desktop nav links (>=1024 only)
    if (vp.width >= 1024) {
      const navOk = [];
      for (const href of ["#story", "#services", "#pricing", "#gallery", "#faq", "#contact"]) {
        await page.click(`header nav a[href="${href}"]`, { timeout: 3000 });
        await waitSettled(href);
        const r = await ev((h) => ({ hash: location.hash, top: Math.round(document.querySelector(h).getBoundingClientRect().top), headerBottom: Math.round(document.querySelector("header").getBoundingClientRect().bottom) }), href);
        if (r.hash !== href) navOk.push(`${href} hash=${r.hash}`);
        else if (r.top > 250) navOk.push(`${href} landed too low (top=${r.top}, header=${r.headerBottom})`);
      }
      if (navOk.length) fa.push(...navOk);
      else line("  ✓ desktop nav: all 6 links scroll to target");
      await ev(() => window.scrollTo({ top: 0, behavior: "instant" }));
    }

    // 7d. mobile menu (<=1023 only)
    if (vp.width < 1024) {
      const toggle = page.locator('header button[aria-controls="mobile-menu"]');
      await toggle.click();
      await page.waitForTimeout(600);
      let expanded = await toggle.getAttribute("aria-expanded");
      if (expanded !== "true") fa.push(`mobile menu did not open (aria-expanded=${expanded})`);
      // click a link inside the menu
      await page.click('#mobile-menu a[href="#faq"]', { timeout: 3000 });
      await waitSettled("#faq");
      expanded = await toggle.getAttribute("aria-expanded");
      const faqTop = await ev(() => Math.round(document.querySelector("#faq").getBoundingClientRect().top));
      if (expanded !== "false") fa.push(`mobile menu did not close after link click (aria-expanded=${expanded})`);
      if (faqTop > 300) fa.push(`mobile menu link #faq did not navigate (faq.top=${faqTop})`);
      if (!fa.length) line("  ✓ mobile menu: open / navigate / auto-close all work");
      await ev(() => window.scrollTo({ top: 0, behavior: "instant" }));
    }

    // 7e. FAQ accordion: every item toggles, and only one open at a time
    const triggerCount = await ev(() => document.querySelectorAll('button[id^="faq-trigger"]').length);
    // item 0 starts open by default — close everything first so each click means "open"
    const preOpen = await ev(() =>
      [...document.querySelectorAll('button[id^="faq-trigger"]')].findIndex((b) => b.getAttribute("aria-expanded") === "true")
    );
    if (preOpen >= 0) {
      await page.locator('button[id^="faq-trigger"]').nth(preOpen).click();
      await page.waitForTimeout(400);
    }
    let faqBad = null;
    await page.locator('button[id^="faq-trigger"]').first().scrollIntoViewIfNeeded();
    for (let i = 0; i < triggerCount; i++) {
      const t = page.locator('button[id^="faq-trigger"]').nth(i);
      await t.click();
      await page.waitForTimeout(350);
      const states = await ev(() => [...document.querySelectorAll('button[id^="faq-trigger"]')].map((b) => b.getAttribute("aria-expanded")));
      const openCount = states.filter((s) => s === "true").length;
      if (!states[i] || states[i] !== "true") { faqBad = `item ${i} did not open`; break; }
      if (openCount > 1) { faqBad = `item ${i} open but ${openCount} panels open (should be single-open)`; break; }
      if (i === triggerCount - 1) { await t.click(); await page.waitForTimeout(300); }
    }
    if (faqBad) fa.push("FAQ: " + faqBad);
    else line(`  ✓ FAQ: ${triggerCount} items toggle, single-open enforced`);
    await ev(() => window.scrollTo({ top: 0, behavior: "instant" }));

    // 7f. contact form: empty submit -> errors; valid submit -> success
    await page.locator("#contact form").scrollIntoViewIfNeeded();
    await page.click('#contact form button[type="submit"]');
    await page.waitForTimeout(400);
    const errCount = await ev(() => document.querySelectorAll('#contact form [id$="-error"]').length);
    if (errCount < 3) fa.push(`form validation: expected >=3 inline errors on empty submit, got ${errCount}`);
    await page.fill("#contact-name", "測試使用者");
    await page.fill("#contact-email", "test@example.com");
    await page.fill("#contact-message", "想要訂位，六位，靠窗座位，謝謝。");
    await page.check("#contact-consent");
    await page.click('#contact form button[type="submit"]');
    await page.waitForTimeout(1400);
    const success = await ev(() => Boolean(document.querySelector('#contact [role="status"] h3')));
    if (!success) fa.push("form: valid submit did not show success state");
    if (!fa.length) line("  ✓ contact form: validation errors + success flow work");
    // reset for next checks
    await page.reload({ waitUntil: "load" });

    // 7g. every pricing card CTA reaches #contact
    const planCtas = await ev(() => [...document.querySelectorAll("#pricing article a[href='#contact']")].length);
    if (planCtas < 3) fa.push(`pricing: expected 3 plan CTAs, found ${planCtas}`);
  } catch (e) {
    fa.push("interaction error: " + e.message.split("\n")[0].slice(0, 140));
  }
  reportLine("Interaction failures", fa);

  if (consoleErrors.length) reportLine("Console errors", consoleErrors);
  if (failedResponses.length) {
    // transient 5xx from third-party map tiles is external noise, not a site bug
    const externalOnly = failedResponses.every((r) => /google\.com\/maps|gstatic/.test(r) && /^[45]0[0-9]/.test(r));
    reportLine("HTTP >= 400 responses", failedResponses, externalOnly ? "warn" : "fail");
  }

  function reportLine(label, list, severity = "fail") {
    if (!list || list.length === 0) {
      line(`  ✓ ${label}: none`);
      return;
    }
    if (severity === "warn") total.warn += list.length;
    else total.fail += list.length;
    line(`  ✗ ${label}: ${list.length}`);
    for (const item of list) line(`      · ${item}`);
  }

  await context.close();
}

await browser.close();
line(`\n=== SUMMARY: ${total.fail} fail, ${total.warn} warn ===`);
process.exit(0);
