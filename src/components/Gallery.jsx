import { gallery } from "../data/site.js";
import Reveal from "./ui/Reveal.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";

export default function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="scroll-mt-24 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Gallery"
            id="gallery-title"
            title={
              <>
                先看，再吃。
                <span className="block text-smoke">每一張都是今天的現場。</span>
              </>
            }
          />
          <Reveal
            as="p"
            delay={120}
            className="max-w-sm text-sm leading-relaxed text-smoke md:text-right"
          >
            我們不用修圖軟體讓漢堡變大——洋蔥的焦糖色、肉排的脆邊、麵包的裂痕，都來自真實的料理過程。
          </Reveal>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((item, index) => (
            <Reveal
              as="figure"
              key={item.title}
              delay={(index % 3) * 90}
              className="group mb-5 break-inside-avoid overflow-hidden rounded-[10px] border border-line bg-paper shadow-card transition-shadow duration-300 hover:shadow-pop"
            >
              <div className="overflow-hidden">
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
              </div>
              <figcaption className="flex items-center justify-between gap-3 border-t border-line px-5 py-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ketchup">
                    {item.category}
                  </p>
                  <p className="mt-1 font-heading text-sm font-bold text-charcoal sm:text-base">
                    {item.title}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-line transition-colors duration-300 group-hover:bg-ketchup"
                />
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
