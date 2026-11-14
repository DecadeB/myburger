import { useState } from "react";
import { brand, faqs } from "../data/site.js";
import Reveal from "./ui/Reveal.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";
import { ArrowUpRight, Plus } from "./ui/icons.jsx";

function FaqItem({ item, index, open, onToggle }) {
  const panelId = `faq-panel-${index}`;
  const triggerId = `faq-trigger-${index}`;

  return (
    <div className="border-b border-cream/10">
      <h3>
        <button
          type="button"
          id={triggerId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
        >
          <span
            className={`font-heading text-[15px] font-medium transition-colors duration-300 sm:text-base ${
              open ? "text-gold" : "text-cream group-hover:text-cream/80"
            }`}
          >
            {item.q}
          </span>
          <span
            aria-hidden="true"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              open
                ? "rotate-45 border-gold/60 bg-gold/10 text-gold"
                : "border-cream/15 text-cream/50 group-hover:border-cream/35 group-hover:text-cream"
            }`}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-7 pr-10 text-pretty text-sm leading-[1.9] text-cream/60">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="scroll-mt-24 border-y border-cream/10 bg-cream/[0.015] py-24 md:py-32"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="FAQ"
            id="faq-title"
            title={
              <>
                吃得講究，
                <br className="hidden sm:block" />
                也問得清楚。
              </>
            }
            description="關於訂位、食材與外燴，這裡先回答最常被問的幾件事。"
          />

          <Reveal
            as="a"
            href="#contact"
            delay={140}
            className="group mt-8 inline-flex items-center gap-2 py-1.5 -my-1.5 font-heading text-sm text-cream/70 transition-colors duration-300 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
          >
            還有其他問題？直接問我們
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Reveal>

          <Reveal as="p" delay={180} className="mt-3 text-xs text-cream/45">
            或來電{" "}
            <a
              href={brand.phoneHref}
              className="inline-block py-1 -my-1 text-cream/55 transition-colors duration-300 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
            >
              {brand.phone}
            </a>
          </Reveal>
        </div>

        <Reveal as="div" delay={80} className="border-t border-cream/10">
          {faqs.map((item, index) => (
            <FaqItem
              key={item.q}
              item={item}
              index={index}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
