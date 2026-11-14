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
      className="scroll-mt-24 border-y border-line bg-cloud py-20 md:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
        <Reveal className="relative">
          <figure className="relative overflow-hidden rounded-[10px] shadow-card">
            <img
              src={storyImage}
              alt="MyBurger 店內空間：深色木質桌椅、暖黃燈光與開放式廚房"
              width="1100"
              height="1375"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03] motion-reduce:hover:scale-100"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8" data-over-photo>
              <span className="inline-flex items-center gap-2 rounded-[4px] bg-mustard px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-charcoal">
                Est. 2026 · Da&apos;an, Taipei
              </span>
              <blockquote className="mt-4 font-heading text-xl font-bold leading-snug text-white md:text-2xl">
                「完美的漢堡，
                <br />
                是時間的總和。」
              </blockquote>
              <p className="mt-2 text-xs text-white/70">— MyBurger 創辦人</p>
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <Reveal
            as="p"
            className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-ketchup"
          >
            <span aria-hidden="true" className="h-1 w-6 rounded-full bg-ketchup" />
            Our Story
          </Reveal>

          <Reveal
            as="h2"
            delay={60}
            id="story-title"
            className="mt-4 text-balance font-heading text-3xl font-bold leading-[1.18] tracking-tight text-charcoal sm:text-4xl lg:text-[2.75rem]"
          >
            我們厭倦了
            <br className="hidden sm:block" />
            千篇一律的速食漢堡。
          </Reveal>

          <div className="mt-6 space-y-4 text-pretty text-[15px] leading-[1.9] text-smoke">
            <Reveal as="p" delay={120}>
              一切始於對「完美一咬」的執著。2026 年，我們把傳統美式街頭靈魂與職人料理精神放進同一顆麵包裡，開了一間只做一件事的店：把漢堡做好。
            </Reveal>
            <Reveal as="p" delay={160}>
              沒有中央廚房，沒有預製肉排。每天開店前鮮絞牛肉、手工整形，賣完就收。我們相信，速食可以快，但不該廉價。
            </Reveal>
          </div>

          <ol className="mt-10 border-t border-charcoal/15">
            {principles.map((item, index) => (
              <Reveal
                as="li"
                key={item.number}
                delay={index * 80}
                className="group grid grid-cols-[auto_1fr] gap-x-5 border-b border-charcoal/15 py-6 sm:gap-x-7"
              >
                <span
                  aria-hidden="true"
                  className="font-heading text-sm font-bold tracking-[0.14em] text-ketchup"
                >
                  {item.number}
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-charcoal sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.85] text-smoke">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#pricing" size="lg">
              立即訂購
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <p className="text-xs leading-relaxed text-smoke">
              今日供應至 21:30
              <span className="mx-2 text-charcoal/25" aria-hidden="true">
                /
              </span>
              訂位專線{" "}
              <a
                href={brand.phoneHref}
                className="inline-block py-1.5 -my-1.5 font-bold text-ketchup underline decoration-ketchup/30 underline-offset-4 transition-colors hover:text-ketchup-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ketchup focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
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
