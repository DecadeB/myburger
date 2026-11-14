import { useEffect, useRef, useState } from "react";
import { heroSlides, stats } from "../data/site.js";
import Button from "./ui/Button.jsx";
import Counter from "./ui/Counter.jsx";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "./ui/icons.jsx";

const AUTOPLAY_MS = 6000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!paused.current) setActive((current) => (current + 1) % heroSlides.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, []);

  const slide = heroSlides[active];
  const move = (step) => setActive((current) => (current + step + heroSlides.length) % heroSlides.length);

  return (
    <section id="top" className="pt-28 md:pt-32 lg:pt-36">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        {/* Promo banner carousel */}
        <div
          role="group"
          aria-roledescription="輪播"
          aria-label="最新推薦"
          onMouseEnter={() => { paused.current = true; }}
          onMouseLeave={() => { paused.current = false; }}
          onFocus={() => { paused.current = true; }}
          onBlur={() => { paused.current = false; }}
          className="relative overflow-hidden rounded-[10px] shadow-card"
        >
          <div className="h-[440px] sm:h-[480px] lg:h-[560px]" aria-hidden="true" />

          {heroSlides.map((item, index) => (
            <div
              key={item.id}
              aria-hidden={index !== active}
              inert={index !== active}
              className={[
                "absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:transition-none",
                index === active ? "z-10 opacity-100" : "z-0 opacity-0",
              ].join(" ")}
            >
              <img
                src={item.image}
                alt={index === active ? item.alt : ""}
                width="1600"
                height="900"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                {...(index === 0 ? { fetchPriority: "high" } : {})}
                className="h-full w-full object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

              {index === active ? (
                <div className="absolute inset-0 flex flex-col justify-center gap-4 p-6 sm:p-10 lg:p-14" data-over-photo>
                  <p className="inline-flex w-fit items-center rounded-[4px] bg-mustard px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-charcoal sm:text-[11px]">
                    {item.eyebrow}
                  </p>
                  <h1 className="max-w-xl text-balance font-heading text-3xl font-bold leading-tight tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-[3.4rem]">
                    {item.title}
                  </h1>
                  <p className="max-w-md text-sm leading-relaxed text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.6)] sm:text-base">
                    {item.description}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-3">
                    <Button href={item.cta.href} size="md">
                      {item.cta.label}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                    <span className="inline-flex items-center rounded-[4px] border border-white/40 bg-black/45 px-3.5 py-2.5 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
                      {item.chip}
                    </span>
                  </div>
                </div>
              ) : null}

              <p
                aria-hidden="true"
                className="absolute right-5 top-5 rotate-3 rounded-[10px] bg-mustard px-4 py-2 font-heading text-xl font-bold text-charcoal shadow-pop sm:right-8 sm:top-8 sm:text-2xl"
              >
                {item.price}
              </p>
            </div>
          ))}

          {/* arrows */}
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="上一張"
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-charcoal shadow-card transition-colors duration-200 hover:bg-mustard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ketchup focus-visible:ring-offset-2 sm:left-4"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="下一張"
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-charcoal shadow-card transition-colors duration-200 hover:bg-mustard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ketchup focus-visible:ring-offset-2 sm:right-4"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* dots */}
          <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center gap-1">
            {heroSlides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`前往第 ${index + 1} 張：${item.title}`}
                aria-current={index === active}
                className="group flex h-8 w-8 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard"
              >
                <span
                  aria-hidden="true"
                  className={[
                    "rounded-full transition-all duration-300",
                    index === active ? "h-2.5 w-8 bg-ketchup" : "h-2.5 w-2.5 bg-white/70 group-hover:bg-white",
                  ].join(" ")}
                />
              </button>
            ))}
          </div>
        </div>

        {/* rating proof */}
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 px-1 text-xs text-smoke">
          <span className="flex items-center gap-2">
            <span className="flex items-center gap-0.5 text-mustard" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4" />
              ))}
            </span>
            <span className="font-bold text-charcoal">4.9 / 5</span>
            <span>· 1,200+ 則 Google 評論</span>
          </span>
          <span aria-hidden="true" className="hidden h-3 w-px bg-line sm:block" />
          <span>免服務費 · 價格含稅</span>
        </div>

        {/* stats */}
        <div className="mt-8 grid grid-cols-1 divide-y divide-line overflow-hidden rounded-[10px] border border-line bg-paper shadow-card sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="group px-6 py-6 transition-colors duration-200 hover:bg-mist sm:px-8 sm:py-8">
              <p className="font-heading text-3xl font-bold tracking-tight text-ketchup sm:text-4xl">
                <Counter value={stat.value} decimals={stat.decimals ?? 0} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold text-charcoal">{stat.label}</p>
              <p className="mt-0.5 text-xs text-smoke">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="sr-only">
        MyBurger — Everyday Burger。每日鮮絞牛肉、手工布里歐、真材實料醬汁。台北市大安區復興南路一段 107 巷 5 號。
      </p>
    </section>
  );
}
