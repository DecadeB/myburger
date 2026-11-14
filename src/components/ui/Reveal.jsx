import useInView from "../../hooks/useInView.js";

/**
 * Fades and lifts its content into place the first time it scrolls into view.
 * The transform is skipped entirely for visitors who prefer reduced motion.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={[
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </Tag>
  );
}
