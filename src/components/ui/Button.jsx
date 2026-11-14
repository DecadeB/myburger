const variants = {
  primary:
    "bg-gold text-ink hover:bg-[#d9ba63] hover:shadow-[0_18px_45px_-18px_rgba(201,168,76,0.85)] active:scale-[0.985]",
  outline:
    "border border-cream/25 text-cream hover:border-cream/60 hover:bg-cream/5 active:scale-[0.985]",
  ghost: "text-cream/70 hover:text-cream",
  dark: "bg-ink text-cream hover:bg-ink/85 active:scale-[0.985]",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3.5 text-sm md:text-[15px]",
  lg: "px-8 py-4 text-base",
};

/**
 * Shared call-to-action. Renders an <a> by default, or a <button> with as="button".
 * Hover/press states, focus ring and reduced-motion behaviour are handled here.
 */
export default function Button({
  as = "a",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const Tag = as;

  return (
    <Tag
      className={[
        "group inline-flex items-center justify-center gap-2.5 rounded-full font-heading font-medium leading-none tracking-wide",
        "transition-all duration-300 ease-out motion-reduce:transition-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
        variants[variant],
        sizes[size],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
}
