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
      className="scroll-mt-24 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
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
            className="max-w-xl text-pretty text-[15px] leading-relaxed text-smoke lg:justify-self-end"
          >
            內用，看師傅在你面前把肉排煎出脆邊；外燴，把同樣的香氣帶到你的聚會現場。
            無論哪一種，我們都不預製、不妥協。
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal as="article" key={service.id} delay={index * 100}>
              <div className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-line bg-paper shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-pop motion-reduce:hover:translate-y-0">
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
                  <span className="absolute left-4 top-4 rounded-[4px] bg-ketchup px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    {service.eyebrow}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-xl font-bold tracking-tight text-charcoal md:text-2xl">
                      {service.title}
                    </h3>
                    <span aria-hidden="true" className="font-heading text-sm font-bold tracking-[0.2em] text-ketchup">
                      {service.number}
                    </span>
                  </div>

                  <p className="mt-3 text-pretty text-sm leading-[1.85] text-smoke">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-3 border-t border-line pt-5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-charcoal/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-ketchup" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-6">
                    <a
                      href={service.action.href}
                      className="group/link inline-flex items-center gap-2 py-1.5 -my-1.5 font-heading text-sm font-bold text-ketchup transition-colors duration-200 hover:text-ketchup-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ketchup focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                    >
                      {service.action.label}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                    <Button href="#pricing" variant="outline" size="sm" aria-label={`查看 ${service.title} 的價格`}>
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
