import { brand, stats } from "../data/site.js";
import { img } from "../lib/images.js";
import Button from "./ui/Button.jsx";
import Counter from "./ui/Counter.jsx";
import { ArrowRight, Star } from "./ui/icons.jsx";

const heroImage = img("photo-1607013251379-e6eecfffe234", 1000);

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute -right-24 top-1/3 h-[30rem] w-[30rem] rounded-full bg-cream/5 blur-[140px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-cream/15 bg-cream/[0.03] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.26em] text-cream/60 sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            Taipei · Since 2026
          </p>

          <h1 className="mt-7 font-heading text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-balance sm:text-6xl lg:text-[4.1rem] xl:text-[4.5rem]">
            每日鮮絞，
            <span className="block text-cream/95">只為完美一咬。</span>
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-[15px] leading-[1.9] text-cream/65 sm:text-base">
            嚴選原塊牛肉每日鮮絞，12 小時低溫發酵的手工布里歐，與時間熬成的秘製煙燻醬。
            一份漢堡，三段職人堅持——2026 年，我們重新定義你對漢堡的想像。
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button href="#pricing" size="lg" className="w-full sm:w-auto">
              立即訂購
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href="#services" variant="outline" size="lg" className="w-full sm:w-auto">
              探索服務
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-cream/50">
            <span className="flex items-center gap-2">
              <span className="flex items-center gap-0.5 text-gold" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-3.5 w-3.5" />
                ))}
              </span>
              <span className="text-cream/70">4.9 / 5</span>
              <span className="hidden sm:inline">· 1,200+ 則 Google 評論</span>
            </span>
            <span aria-hidden="true" className="hidden h-3 w-px bg-cream/20 sm:block" />
            <span>免服務費 · 價格含稅</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <figure className="relative overflow-hidden rounded-[2rem] border border-cream/10 shadow-lift">
            <img
              src={heroImage}
              alt="MyBurger 雙層起司牛肉堡，夾著焦糖洋蔥與融化起司"
              width="1000"
              height="1250"
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-80"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-cream/10"
            />

            <span className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-ink/60 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.18em] text-cream/75 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold motion-reduce:animate-none" />
              現點現煎 · 約 8 分鐘
            </span>

            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-gold">Today&apos;s Special</p>
                <p className="mt-1.5 font-heading text-lg font-medium text-cream sm:text-xl">
                  煙燻焦糖培根堡
                </p>
                <p className="mt-1 text-xs text-cream/55">每日限量 40 份 · 售完為止</p>
              </div>
              <p className="shrink-0 font-heading text-xl text-gold sm:text-2xl">
                NT$ 320
              </p>
            </figcaption>
          </figure>

          <div className="absolute -left-3 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-cream/10 bg-ink/80 px-4 py-3 text-center backdrop-blur-md xl:block">
            <p className="font-heading text-2xl font-semibold text-cream">18</p>
            <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-cream/45">Seats</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-7xl px-6 md:mt-20 md:px-10">
        <div className="grid grid-cols-1 divide-y divide-cream/10 border-y border-cream/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col gap-1 px-0 py-6 transition-colors duration-300 sm:px-8 sm:py-8 first:sm:pl-0 last:sm:pr-0"
            >
              <p className="font-heading text-3xl font-semibold tracking-tight text-cream transition-colors duration-300 group-hover:text-gold sm:text-4xl">
                <Counter
                  value={stat.value}
                  decimals={stat.decimals ?? 0}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-2 text-sm text-cream/70">{stat.label}</p>
              <p className="mt-0.5 text-xs text-cream/35">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="sr-only">
        {brand.name} — {brand.tagline}。{brand.address}。
      </p>
    </section>
  );
}
