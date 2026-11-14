import { brand, hours, navLinks, socials } from "../data/site.js";
import Button from "./ui/Button.jsx";
import Reveal from "./ui/Reveal.jsx";
import { ArrowRight, ArrowUpRight, BurgerMark } from "./ui/icons.jsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-cream/10">
      {/* Closing call to action */}
      <div className="relative border-b border-cream/10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[24rem] w-[40rem] -translate-x-1/2 rounded-full bg-gold/[0.09] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:px-10 md:py-28">
          <Reveal
            as="p"
            className="inline-flex items-center gap-2 rounded-full border border-cream/15 px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] text-cream/55"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            Ready when you are
          </Reveal>

          <Reveal
            as="h2"
            delay={60}
            className="mt-6 text-balance font-heading text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl"
          >
            今晚，就吃一份
            <br className="hidden sm:block" />
            對得起自己的漢堡。
          </Reveal>

          <Reveal as="p" delay={120} className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-cream/55 sm:text-base">
            每日鮮絞、現點現煎，賣完為止。內用、外帶與派對外燴，都從同一個煎台開始。
          </Reveal>

          <Reveal delay={180} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#contact" size="lg" className="w-full sm:w-auto">
              立即訂購
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              href={brand.phoneHref}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              致電 {brand.phone}
            </Button>
          </Reveal>

          <Reveal as="p" delay={240} className="mt-6 text-xs text-cream/35">
            外帶自取 9 折 · 平日 11:30 – 17:00 限定
          </Reveal>
        </div>
      </div>

      {/* Site map */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 md:px-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
        <div>
          <a
            href="#top"
            className="inline-flex items-center gap-3 rounded-full text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold">
              <BurgerMark className="h-5 w-5" />
            </span>
            <span className="font-heading text-lg font-semibold tracking-tight">
              MyBurger<span className="text-gold">.</span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/45">
            {brand.tagline}。每日鮮絞牛肉、手工布里歐與真材實料醬汁，2026 年生於台北大安。
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-cream/15 px-4 py-2 text-xs text-cream/60 transition-colors duration-300 hover:border-gold/50 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                {social.label}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                <span className="sr-only">（另開新視窗）</span>
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="頁尾導覽">
          <h3 className="text-[10px] font-medium uppercase tracking-[0.26em] text-cream/35">
            探索
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block py-1 text-sm text-cream/60 transition-colors duration-300 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[10px] font-medium uppercase tracking-[0.26em] text-cream/35">
            造訪
          </h3>
          <address className="mt-4 space-y-2.5 not-italic text-sm leading-relaxed text-cream/60">
            <p>{brand.address}</p>
            <p>
              <a
                href={brand.phoneHref}
                className="inline-block py-1 transition-colors duration-300 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                {brand.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${brand.email}`}
                className="inline-block py-1 transition-colors duration-300 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                {brand.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="text-[10px] font-medium uppercase tracking-[0.26em] text-cream/35">
            營業時間
          </h3>
          <dl className="mt-4 space-y-2.5 text-sm">
            {hours.map((item) => (
              <div key={item.day} className="flex flex-wrap items-baseline justify-between gap-x-4">
                <dt className="text-cream/50">{item.day}</dt>
                <dd className={item.time === "公休" ? "text-cream/30" : "text-cream/70"}>
                  {item.time}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-cream/35 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="#top"
              className="inline-block py-1.5 -my-1.5 transition-colors duration-300 hover:text-cream/70"
            >
              隱私權政策
            </a>
            <a
              href="#top"
              className="inline-block py-1.5 -my-1.5 transition-colors duration-300 hover:text-cream/70"
            >
              服務條款
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 py-1.5 -my-1.5 transition-colors duration-300 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              回到頂端
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
