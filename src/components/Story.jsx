import { brand, principles } from "../data/site.js";
import { img } from "../lib/images.js";
import Button from "./ui/Button.jsx";
import Reveal from "./ui/Reveal.jsx";
import { ArrowRight } from "./ui/icons.jsx";

const storyImage = img("photo-1517248135467-4c7edcad34c4", 1100);

export default function Story() {
  return (
    <section
      id="story"
      aria-labelledby="story-title"
      className="relative scroll-mt-24 overflow-hidden border-y border-cream/10 bg-cream/[0.015] py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-24 h-[28rem] w-[28rem] rounded-full bg-gold/[0.07] blur-[130px]"
      />

      <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-20">
        <Reveal className="relative lg:sticky lg:top-28">
          <figure className="relative overflow-hidden rounded-[1.75rem] border border-cream/10">
            <img
              src={storyImage}
              alt="MyBurger 店內空間：深色木質桌椅、暖黃燈光與開放式廚房"
              width="1100"
              height="1375"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03] motion-reduce:hover:scale-100"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/25 to-transparent"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-ink/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-cream/70 backdrop-blur-md">
                <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                Est. 2026 · Da&apos;an, Taipei
              </span>
              <blockquote className="mt-4 font-heading text-xl font-medium leading-snug text-cream md:text-2xl">
                「完美的漢堡，
                <br />
                是時間的總和。」
              </blockquote>
              <p className="mt-2 text-xs text-cream/50">— MyBurger 創辦人</p>
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <Reveal
            as="p"
            className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-gold"
          >
            <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
            Our Story
          </Reveal>

          <Reveal
            as="h2"
            delay={60}
            id="story-title"
            className="mt-4 text-balance font-heading text-3xl font-semibold leading-[1.18] tracking-tight sm:text-4xl lg:text-[2.75rem]"
          >
            我們厭倦了
            <br className="hidden sm:block" />
            千篇一律的速食漢堡。
          </Reveal>

          <div className="mt-6 space-y-4 text-pretty text-[15px] leading-[1.9] text-cream/60">
            <Reveal as="p" delay={120}>
              一切始於對「完美一咬」的執著。2026 年，我們把傳統美式街頭靈魂與職人料理精神放進同一顆麵包裡，開了一間只做一件事的店：把漢堡做好。
            </Reveal>
            <Reveal as="p" delay={160}>
              沒有中央廚房，沒有預製肉排。每天開店前鮮絞牛肉、手工整形，賣完就收。我們相信，速食可以快，但不該廉價。
            </Reveal>
          </div>

          <ol className="mt-10 border-t border-cream/10">
            {principles.map((item, index) => (
              <Reveal
                as="li"
                key={item.number}
                delay={index * 80}
                className="group grid grid-cols-[auto_1fr] gap-x-5 border-b border-cream/10 py-6 sm:gap-x-7"
              >
                <span
                  aria-hidden="true"
                  className="font-heading text-xs tracking-[0.18em] text-gold/70 transition-colors duration-300 group-hover:text-gold"
                >
                  {item.number}
                </span>
                <div>
                  <h3 className="font-heading text-base font-medium text-cream sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.85] text-cream/55">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#pricing" size="lg">
              立即訂購
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <p className="text-xs leading-relaxed text-cream/45">
              今日供應至 21:30
              <span className="mx-2 text-cream/20" aria-hidden="true">
                /
              </span>
              訂位專線{" "}
              <a
                href={brand.phoneHref}
                className="text-cream/70 underline decoration-cream/25 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
              >
                {brand.phone}
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
