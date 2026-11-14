import { plans } from "../data/site.js";
import Button from "./ui/Button.jsx";
import Reveal from "./ui/Reveal.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";
import { Check } from "./ui/icons.jsx";

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-24 border-y border-line bg-cloud py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Pricing"
          id="pricing-title"
          align="center"
          title="簡單的價格，不妥協的內容。"
          description="每一份套餐都包含現煎肉排與當日烘焙麵包。價格含稅、免服務費，沒有藏在細節裡的小字。"
          className="mx-auto"
        />

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal
              as="article"
              key={plan.id}
              delay={index * 90}
              aria-labelledby={`plan-${plan.id}`}
              className={[
                "group relative flex h-full flex-col rounded-[10px] border bg-paper p-7 shadow-card transition-all duration-300 sm:p-8",
                plan.featured
                  ? "border-2 border-ketchup"
                  : "border-line hover:-translate-y-1 hover:shadow-pop motion-reduce:hover:translate-y-0",
              ].join(" ")}
            >
              {plan.featured ? (
                <span className="absolute -top-3.5 left-7 inline-flex items-center gap-1.5 rounded-[4px] bg-ketchup px-3 py-1.5 font-heading text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                  最受歡迎
                </span>
              ) : null}

              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-ketchup">
                {plan.label}
              </p>
              <h3
                id={`plan-${plan.id}`}
                className="mt-3 font-heading text-xl font-bold tracking-tight text-charcoal"
              >
                {plan.name}
              </h3>
              <p className="mt-1.5 text-sm text-smoke">{plan.summary}</p>

              <p className="mt-6 flex flex-wrap items-end gap-x-2 gap-y-1 border-b border-line pb-6">
                <span className="font-heading text-xs font-bold tracking-[0.1em] text-smoke">NT$</span>
                <span className="font-heading text-4xl font-bold leading-none tracking-tight text-charcoal">
                  {plan.price.toLocaleString("en-US")}
                </span>
                <span className="whitespace-nowrap pb-1 text-xs text-smoke">{plan.unit}</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/85">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-ketchup" : "text-smoke"}`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={plan.featured ? "primary" : "outline"}
                className="mt-8 w-full"
                aria-label={`${plan.cta}：${plan.name}`}
              >
                {plan.cta}
              </Button>
            </Reveal>
          ))}
        </div>

        <Reveal
          as="p"
          delay={120}
          className="mt-8 text-center text-xs leading-relaxed text-smoke"
        >
          價格皆含稅、無服務費。外燴方案依配送地點另計車馬費；過敏原與食材來源歡迎現場詢問。
        </Reveal>
      </div>
    </section>
  );
}
