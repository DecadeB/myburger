import { gallery } from "../data/site.js";
import Reveal from "./ui/Reveal.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";
import { ArrowUpRight } from "./ui/icons.jsx";

export default function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="scroll-mt-24 py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Gallery"
            id="gallery-title"
            title={
              <>
                先看，再吃。
                <span className="block text-cream/40">每一張都是今天的現場。</span>
              </>
            }
          />
          <Reveal
            as="p"
            delay={120}
            className="max-w-sm text-sm leading-relaxed text-cream/50 md:text-right"
          >
            我們不用修圖軟體讓漢堡變大——洋蔥的焦糖色、肉排的脆邊、麵包的裂痕，都來自真實的料理過程。
          </Reveal>
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-5">
          {gallery.map((item, index) => (
            <Reveal
              as="figure"
              key={item.title}
              delay={(index % 3) * 90}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-cream/10 lg:mb-5"
            >
              <img
                src={item.image}
                alt={item.alt}
                width="900"
                height={index % 3 === 0 ? 1200 : 900}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:group-hover:scale-100 ${
                  index % 3 === 0 ? "aspect-[3/4]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                }`}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-gold/85">
                    {item.category}
                  </p>
                  <p className="mt-1.5 font-heading text-sm font-medium text-cream sm:text-base">
                    {item.title}
                  </p>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-cream/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                />
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
