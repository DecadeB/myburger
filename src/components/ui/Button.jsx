const variants = {
  /* McDonald's-style primary: yellow surface, black text, sharp 4px radius */
  primary:
    "bg-mustard text-charcoal hover:bg-mustard-soft active:scale-[0.985] disabled:hover:bg-mustard",
  secondary:
    "bg-ketchup text-white hover:bg-ketchup-deep active:scale-[0.985] disabled:hover:bg-ketchup",
  outline:
    "border border-charcoal text-charcoal hover:bg-mist active:scale-[0.985]",
  "outline-light":
    "border border-white/70 text-white hover:bg-white/10 active:scale-[0.985]",
  ghost: "text-ketchup hover:text-ketchup-deep underline-offset-4 hover:underline",
};

const sizes = {
  sm: "h-10 px-6 text-sm",
  md: "h-12 px-8 text-sm md:text-[15px]",
  lg: "h-12 md:h-14 px-8 md:px-10 text-[15px] md:text-base",
};

/**
 * Shared call-to-action. Renders an <a> by default, or a <button> with as="button".
 * Follows the McDonald's HK button spec: 4px radius, 48px height, yellow surface.
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
        "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-[4px] font-heading font-bold leading-none tracking-wide",
        "transition-all duration-200 ease-out motion-reduce:transition-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ketchup focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
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
