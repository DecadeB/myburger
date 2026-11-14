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
      className="relative scroll-mt-24 overflow-hidden border-y border-cream/10 bg-cream/[0.015] py-24 md:py-32"
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

        <div className="mt-14 grid items-stretch gap-5 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal
              as="article"
              key={plan.id}
              delay={index * 90}
              aria-labelledby={`plan-${plan.id}`}
              className={[
                "group relative flex h-full flex-col rounded-[1.5rem] border p-7 transition-all duration-500 sm:p-8",
                plan.featured
                  ? "border-gold/50 bg-gradient-to-b from-gold/[0.09] via-cream/[0.02] to-transparent shadow-[0_0_70px_-30px_rgba(201,168,76,0.55)]"
                  : "border-cream/10 bg-ink/40 hover:-translate-y-1 hover:border-cream/25 motion-reduce:hover:translate-y-0",
              ].join(" ")}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">
                  最受歡迎
                </span>
              ) : null}

              <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-cream/40">
                {plan.label}
              </p>
              <h3
                id={`plan-${plan.id}`}
                className="mt-3 font-heading text-xl font-semibold tracking-tight text-cream"
              >
                {plan.name}
              </h3>
              <p className="mt-1.5 text-sm text-cream/50">{plan.summary}</p>

              <p className="mt-6 flex items-end gap-2 border-b border-cream/10 pb-6">
                <span className="font-heading text-xs tracking-[0.12em] text-cream/45">NT$</span>
                <span className="font-heading text-4xl font-semibold leading-none tracking-tight text-cream">
                  {plan.price.toLocaleString("en-US")}
                </span>
                <span className="whitespace-nowrap pb-1 text-xs text-cream/45">{plan.unit}</span>              </p>

              <ul className="mt-6 flex-1 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-cream/70">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-gold" : "text-cream/35"}`}
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
          className="mt-8 text-center text-xs leading-relaxed text-cream/35"
        >
          價格皆含稅、無服務費。外燴方案依配送地點另計車馬費；過敏原與食材來源歡迎現場詢問。
        </Reveal>
      </div>
    </section>
  );
}
