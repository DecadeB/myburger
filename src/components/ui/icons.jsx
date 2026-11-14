const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

function Svg({ children, className = "h-5 w-5", viewBox = "0 0 24 24", ...rest }) {
  return (
    <svg viewBox={viewBox} className={className} {...base} {...rest}>
      {children}
    </svg>
  );
}

export function ArrowRight({ className }) {
  return (
    <Svg className={className}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </Svg>
  );
}

export function ArrowUpRight({ className }) {
  return (
    <Svg className={className}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Svg>
  );
}

export function Check({ className }) {
  return (
    <Svg className={className}>
      <path d="m4.5 12.5 4.5 4.5L19.5 6.5" />
    </Svg>
  );
}

export function Plus({ className }) {
  return (
    <Svg className={className}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </Svg>
  );
}

export function MapPin({ className }) {
  return (
    <Svg className={className}>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Svg>
  );
}

export function Clock({ className }) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </Svg>
  );
}

export function Phone({ className }) {
  return (
    <Svg className={className}>
      <path d="M6.5 3.5h-2A1.5 1.5 0 0 0 3 5.1C3 13 11 21 18.9 21a1.5 1.5 0 0 0 1.6-1.5v-2a1.5 1.5 0 0 0-1.2-1.5l-2.6-.5a1.5 1.5 0 0 0-1.5.6l-.9 1.2a13.6 13.6 0 0 1-5.1-5.1l1.2-.9a1.5 1.5 0 0 0 .6-1.5l-.5-2.6a1.5 1.5 0 0 0-1.4-1.2Z" />
    </Svg>
  );
}

export function Mail({ className }) {
  return (
    <Svg className={className}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m4 7.5 8 5.5 8-5.5" />
    </Svg>
  );
}

export function ChevronDown({ className }) {
  return (
    <Svg className={className}>
      <path d="m6 9 6 6 6-6" />
    </Svg>
  );
}

export function ChevronLeft({ className }) {
  return (
    <Svg className={className}>
      <path d="m14.5 5.5-7 6.5 7 6.5" />
    </Svg>
  );
}

export function ChevronRight({ className }) {
  return (
    <Svg className={className}>
      <path d="m9.5 5.5 7 6.5-7 6.5" />
    </Svg>
  );
}

export function Menu({ className }) {
  return (
    <Svg className={className}>
      <path d="M4 8h16" />
      <path d="M4 16h16" />
    </Svg>
  );
}

export function Close({ className }) {
  return (
    <Svg className={className}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </Svg>
  );
}

export function Star({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M12 3.6l2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.8-5.1 2.8 1-5.7-4.1-4 5.7-.8L12 3.6Z" />
    </svg>
  );
}

export function BurgerMark({ className = "h-7 w-7" }) {
  return (
    <Svg className={className} viewBox="0 0 32 32" strokeWidth={1.8}>
      <path d="M6 13c0-4 4.5-7 10-7s10 3 10 7" />
      <path d="M5 17.5h22" />
      <path d="M7 21.5c2.5 2.8 6 4 9 4s6.5-1.2 9-4" />
    </Svg>
  );
}
