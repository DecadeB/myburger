import Reveal from "./Reveal.jsx";

/**
 * Shared section header: eyebrow label, h2 and optional lead paragraph.
 * Keeps heading order and spacing identical across every section.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
  className = "",
}) {
  const centered = align === "center";

  return (
    <div
      className={[
        "flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start",
        className,
      ].join(" ")}
    >
      {eyebrow ? (
        <Reveal
          as="p"
          className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-gold"
        >
          <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
          {eyebrow}
        </Reveal>
      ) : null}

      <Reveal as="h2" delay={60} id={id} className="text-balance font-heading text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Reveal>

      {description ? (
        <Reveal
          as="p"
          delay={120}
          className={[
            "max-w-2xl text-pretty text-[15px] leading-relaxed text-cream/60 sm:text-base",
            centered ? "mx-auto" : "",
          ].join(" ")}
        >
          {description}
        </Reveal>
      ) : null}
    </div>
  );
}
