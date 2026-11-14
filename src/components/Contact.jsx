import { useState } from "react";
import { brand } from "../data/site.js";
import Button from "./ui/Button.jsx";
import Reveal from "./ui/Reveal.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";
import { ArrowRight, Check, ChevronDown, Mail, MapPin, Phone } from "./ui/icons.jsx";

const topics = ["內用訂位", "外帶自取", "派對外燴", "企業合作", "其他"];

const initialValues = {
  name: "",
  email: "",
  phone: "",
  topic: "內用訂位",
  people: "2",
  message: "",
  consent: false,
};

const fieldBase =
  "w-full rounded-[4px] border bg-paper px-4 py-3.5 text-sm text-charcoal placeholder:text-charcoal/35 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ketchup/25";

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "請填寫姓名（至少 2 個字）。";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "請輸入有效的電子郵件，例如 name@example.com。";
  if (values.phone.trim() && !/^[0-9+\-\s()]{7,20}$/.test(values.phone.trim()))
    errors.phone = "請輸入有效的電話號碼。";
  if (values.message.trim().length < 10)
    errors.message = "請簡單描述你的需求（至少 10 個字）。";
  if (!values.consent) errors.consent = "請先同意我們使用資料與你聯繫。";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const update = (field) => (event) => {
    const value =
      event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      document.getElementById(`contact-${Object.keys(nextErrors)[0]}`)?.focus();
      return;
    }

    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 900);
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setStatus("idle");
  };

  const inputClass = (field) =>
    `${fieldBase} ${
      errors[field] ? "border-ketchup" : "border-line focus:border-ketchup"
    }`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-24 py-20 md:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Get in Touch"
            id="contact-title"
            title={
              <>
                說說你的計畫，
                <br className="hidden sm:block" />
                我們留一份給你。
              </>
            }
            description="訂位、外帶、派對外燴或企業餐盒，填寫表單或直接來電都可以。工作時段內，我們通常 1 小時內回覆。"
          />

          <Reveal as="div" delay={140} className="mt-10 space-y-4">
            <a
              href={brand.phoneHref}
              className="group flex items-center gap-4 rounded-[10px] border border-line bg-paper px-5 py-4 shadow-card transition-colors duration-200 hover:border-ketchup focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ketchup focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              <Phone className="h-5 w-5 shrink-0 text-ketchup" />
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">
                  Call us
                </span>
                <span className="mt-1 block text-sm font-semibold text-charcoal">
                  {brand.phone}
                </span>
              </span>
            </a>

            <a
              href={`mailto:${brand.email}`}
              className="group flex items-center gap-4 rounded-[10px] border border-line bg-paper px-5 py-4 shadow-card transition-colors duration-200 hover:border-ketchup focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ketchup focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              <Mail className="h-5 w-5 shrink-0 text-ketchup" />
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">
                  Email
                </span>
                <span className="mt-1 block text-sm font-semibold text-charcoal">
                  {brand.email}
                </span>
              </span>
            </a>

            <div className="flex items-start gap-4 rounded-[10px] border border-line bg-paper px-5 py-4 shadow-card">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-ketchup" />
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">
                  Visit
                </span>
                <span className="mt-1 block text-sm font-semibold leading-relaxed text-charcoal">
                  {brand.address}
                </span>
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={80}
          className="rounded-[10px] border border-line bg-paper p-6 shadow-card sm:p-8 md:p-10"
        >
          {status === "success" ? (
            <div role="status" aria-live="polite" className="flex h-full flex-col items-start justify-center py-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ketchup text-white">
                <Check className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight text-charcoal">
                收到了，謝謝你。
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-smoke">
                我們已收到你的需求，會在 1 個工作天內以電話或 Email 與你聯繫。若是當日訂位，建議直接來電 {brand.phone}。
              </p>
              <Button
                as="button"
                type="button"
                variant="outline"
                onClick={resetForm}
                className="mt-8"
              >
                再送出一份需求
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold text-charcoal/75">
                    姓名 <span className="text-ketchup">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="王小明"
                    value={values.name}
                    onChange={update("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={inputClass("name")}
                  />
                  {errors.name ? (
                    <p id="contact-name-error" className="mt-2 text-xs font-semibold text-ketchup">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold text-charcoal/75">
                    Email <span className="text-ketchup">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@example.com"
                    value={values.email}
                    onChange={update("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={inputClass("email")}
                  />
                  {errors.email ? (
                    <p id="contact-email-error" className="mt-2 text-xs font-semibold text-ketchup">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="contact-phone" className="mb-2 block text-xs font-semibold text-charcoal/75">
                    電話 <span className="text-charcoal/40">（選填）</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="0912 345 678"
                    value={values.phone}
                    onChange={update("phone")}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                    className={inputClass("phone")}
                  />
                  {errors.phone ? (
                    <p id="contact-phone-error" className="mt-2 text-xs font-semibold text-ketchup">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="contact-topic" className="mb-2 block text-xs font-semibold text-charcoal/75">
                    需求類型
                  </label>
                  <div className="relative">
                    <select
                      id="contact-topic"
                      name="topic"
                      value={values.topic}
                      onChange={update("topic")}
                      className={`${inputClass("topic")} appearance-none pr-11`}
                    >
                      {topics.map((topic) => (
                        <option key={topic} value={topic} className="bg-paper text-charcoal">
                          {topic}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/50" />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-people" className="mb-2 block text-xs font-semibold text-charcoal/75">
                    人數
                  </label>
                  <input
                    id="contact-people"
                    name="people"
                    type="number"
                    min="1"
                    max="200"
                    inputMode="numeric"
                    value={values.people}
                    onChange={update("people")}
                    className={inputClass("people")}
                  />
                </div>

                <div>
                  <label htmlFor="contact-date" className="mb-2 block text-xs font-semibold text-charcoal/75">
                    希望日期 <span className="text-charcoal/40">（選填）</span>
                  </label>
                  <input
                    id="contact-date"
                    name="date"
                    type="date"
                    className={inputClass("date")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold text-charcoal/75">
                  想告訴我們的事 <span className="text-ketchup">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="例如：10/18 晚上 6 位，想訂靠窗座位；或 30 人企業午餐外送。"
                  value={values.message}
                  onChange={update("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className={`${inputClass("message")} resize-y`}
                />
                {errors.message ? (
                  <p id="contact-message-error" className="mt-2 text-xs font-semibold text-ketchup">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="contact-consent" className="flex items-start gap-3 text-xs leading-relaxed text-smoke">
                  <input
                    id="contact-consent"
                    name="consent"
                    type="checkbox"
                    checked={values.consent}
                    onChange={update("consent")}
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? "contact-consent-error" : undefined}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded-[3px] border-line accent-ketchup focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ketchup focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                  />
                  <span>
                    我同意 MyBurger 依隱私權政策使用上述資料，僅用於回覆此次需求。
                  </span>
                </label>
                {errors.consent ? (
                  <p id="contact-consent-error" className="mt-2 text-xs font-semibold text-ketchup">
                    {errors.consent}
                  </p>
                ) : null}
              </div>

              <Button
                as="button"
                type="submit"
                size="lg"
                className="w-full"
                disabled={status === "submitting"}
                aria-busy={status === "submitting"}
              >
                {status === "submitting" ? "傳送中…" : "送出需求"}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>

              <p className="text-center text-[11px] leading-relaxed text-smoke">
                送出後不會即時保留座位，我們會盡快與你確認。
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
