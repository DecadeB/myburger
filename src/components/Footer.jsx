import { brand, hours, navLinks, socials } from "../data/site.js";
import Button from "./ui/Button.jsx";
import Reveal from "./ui/Reveal.jsx";
import { ArrowRight, ArrowUpRight, BurgerMark } from "./ui/icons.jsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-paper">
      {/* Closing call to action */}
      <div className="border-b border-line bg-cloud">
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:px-10 md:py-24">
          <Reveal
            as="p"
            className="inline-flex items-center gap-2 rounded-[4px] bg-ketchup px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white"
          >
            Ready when you are
          </Reveal>

          <Reveal
            as="h2"
            delay={60}
            className="mt-6 text-balance font-heading text-3xl font-bold leading-[1.15] tracking-tight text-charcoal sm:text-4xl md:text-5xl"
          >
            今晚，就吃一份
            <br className="hidden sm:block" />
            對得起自己的漢堡。
          </Reveal>

          <Reveal as="p" delay={120} className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-smoke sm:text-base">
            每日鮮絞、現點現煎，賣完為止。內用、外帶與派對外燴，都從同一個煎台開始。
          </Reveal>

          <Reveal delay={180} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#contact" size="lg" className="w-full sm:w-auto">
              立即訂購
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
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

          <Reveal as="p" delay={240} className="mt-6 text-xs text-smoke">
            外帶自取 9 折 · 平日 11:30 – 17:00 限定
          </Reveal>
        </div>
      </div>

      {/* Site map */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 md:px-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
        <div>
          <a
            href="#top"
            className="inline-flex items-center gap-3 rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ketchup focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-ketchup text-mustard">
              <BurgerMark className="h-5 w-5" />
            </span>
            <span className="font-heading text-lg font-bold tracking-tight text-charcoal">
              MyBurger<span className="text-ketchup">.</span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-smoke">
            {brand.tagline}。每日鮮絞牛肉、手工布里歐與真材實料醬汁，2026 年生於台北大安。
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-[4px] border border-line px-4 py-2 text-xs font-semibold text-charcoal/75 transition-colors duration-200 hover:border-ketchup hover:text-ketchup focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ketchup focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                {social.label}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                <span className="sr-only">（另開新視窗）</span>
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="頁尾導覽">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.24em] text-ketchup">
            探索
          </h3>
          <ul className="mt-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block py-1.5 text-sm text-charcoal/75 transition-colors duration-200 hover:text-ketchup focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ketchup focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.24em] text-ketchup">
            造訪
          </h3>
          <address className="mt-4 space-y-1 not-italic text-sm leading-relaxed text-charcoal/75">
            <p>{brand.address}</p>
            <p>
              <a
                href={brand.phoneHref}
                className="inline-block py-1 transition-colors duration-200 hover:text-ketchup focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ketchup focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                {brand.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${brand.email}`}
                className="inline-block py-1 transition-colors duration-200 hover:text-ketchup focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ketchup focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                {brand.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.24em] text-ketchup">
            營業時間
          </h3>
          <dl className="mt-4 space-y-1 text-sm">
            {hours.map((item) => (
              <div key={item.day} className="flex flex-wrap items-baseline justify-between gap-x-4 py-1">
                <dt className="text-smoke">{item.day}</dt>
                <dd className={item.time === "公休" ? "text-charcoal/45" : "font-semibold text-charcoal"}>
                  {item.time}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Dark bottom bar, McDonald's HK style */}
      <div className="bg-[#292929]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p className="flex items-center gap-2">
            <BurgerMark className="h-4 w-4 text-mustard" />
            © {year} {brand.name}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="#top" className="inline-block py-1.5 -my-1.5 transition-colors duration-200 hover:text-mustard">
              隱私權政策
            </a>
            <a href="#top" className="inline-block py-1.5 -my-1.5 transition-colors duration-200 hover:text-mustard">
              服務條款
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 py-1.5 -my-1.5 transition-colors duration-200 hover:text-mustard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard focus-visible:ring-offset-2 focus-visible:ring-[#292929]"
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
