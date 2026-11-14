import { brand, hours } from "../data/site.js";
import Button from "./ui/Button.jsx";
import Reveal from "./ui/Reveal.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "./ui/icons.jsx";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  brand.mapQuery
)}&z=16&hl=zh-TW&output=embed`;
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  brand.mapQuery
)}`;

export default function Location() {
  return (
    <section
      id="location"
      aria-labelledby="location-title"
      className="scroll-mt-24 py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Find Us"
            id="location-title"
            title="巷子裡，聞到香味就到了。"
          />
          <Reveal
            as="p"
            delay={100}
            className="max-w-sm text-sm leading-relaxed text-cream/50 md:text-right"
          >
            捷運忠孝復興站 3 號出口，步行 6 分鐘。
            <br />
            附近有收費停車場，機車可暫停店門口。
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal
            as="div"
            className="flex flex-col justify-between gap-8 rounded-[1.75rem] border border-cream/10 bg-cream/[0.02] p-7 sm:p-8"
          >
            <div className="space-y-7">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h3 className="font-heading text-sm font-medium text-cream">門市地址</h3>
                  <address className="mt-1.5 not-italic text-sm leading-relaxed text-cream/60">
                    {brand.address}
                  </address>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div className="w-full">
                  <h3 className="font-heading text-sm font-medium text-cream">營業時間</h3>
                  <dl className="mt-2 space-y-1.5">
                    {hours.map((item) => (
                      <div
                        key={item.day}
                        className="flex items-baseline justify-between gap-4 text-sm"
                      >
                        <dt className="text-cream/55">{item.day}</dt>
                        <dd
                          className={
                            item.time === "公休" ? "text-cream/35" : "text-cream/80"
                          }
                        >
                          {item.time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h3 className="font-heading text-sm font-medium text-cream">電話</h3>
                  <a
                    href={brand.phoneHref}
                    className="mt-1.5 block py-1 text-sm text-cream/60 transition-colors duration-300 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                  >
                    {brand.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h3 className="font-heading text-sm font-medium text-cream">外燴洽詢</h3>
                  <a
                    href={`mailto:${brand.email}`}
                    className="mt-1.5 block py-1 text-sm text-cream/60 transition-colors duration-300 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                  >
                    {brand.email}
                  </a>
                </div>
              </div>
            </div>

            <Button
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              className="w-full"
            >
              在 Google 地圖開啟
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span className="sr-only">（另開新視窗）</span>
            </Button>
          </Reveal>

          <Reveal delay={100} className="relative">
            <div className="relative h-full min-h-[22rem] overflow-hidden rounded-[1.75rem] border border-cream/10">
              <iframe
                title="MyBurger 門市位置 Google 地圖"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[22rem] w-full border-0 [filter:invert(0.91)_hue-rotate(180deg)_saturate(0.65)_contrast(0.92)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-cream/10"
              />
              <div className="pointer-events-none absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-ink/80 px-4 py-2 text-[11px] tracking-wide text-cream/75 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                MyBurger · 大安區
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
