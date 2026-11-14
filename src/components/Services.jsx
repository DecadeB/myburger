import { services } from "../data/site.js";
import Button from "./ui/Button.jsx";
import Reveal from "./ui/Reveal.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";
import { ArrowUpRight, Check } from "./ui/icons.jsx";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="scroll-mt-24 py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Services"
            id="services-title"
            title={
              <>
                兩種方式，
                <br className="hidden sm:block" />
                品嚐同一份堅持。
              </>
            }
          />
          <Reveal
            as="p"
            delay={120}
            className="max-w-xl text-pretty text-[15px] leading-relaxed text-cream/60 lg:justify-self-end"
          >
            內用，看師傅在你面前把肉排煎出脆邊；外燴，把同樣的香氣帶到你的聚會現場。
            無論哪一種，我們都不預製、不妥協。
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal as="article" key={service.id} delay={index * 100}>
              <div className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-cream/10 bg-cream/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-cream/[0.04] hover:shadow-lift motion-reduce:hover:translate-y-0">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    width="1200"
                    height="750"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-7">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.26em] text-gold">
                        {service.eyebrow}
                      </p>
                      <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight text-cream md:text-2xl">
                        {service.title}
                      </h3>
                    </div>
                    <span
                      aria-hidden="true"
                      className="font-heading text-sm tracking-[0.2em] text-cream/25"
                    >
                      {service.number}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p className="text-pretty text-sm leading-[1.85] text-cream/60">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-cream/10 pt-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-cream/75">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex items-center justify-between gap-4">
                    <a
                      href={service.action.href}
                      className="group/link inline-flex items-center gap-2 font-heading text-sm font-medium text-cream transition-colors duration-300 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                    >
                      {service.action.label}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                    <Button
                      href="#pricing"
                      variant="ghost"
                      size="sm"
                      className="px-3 text-xs text-cream/45 hover:text-cream"
                      aria-label={`查看 ${service.title} 的價格`}
                    >
                      查看價格
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
