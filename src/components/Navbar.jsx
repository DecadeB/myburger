import { useEffect, useState } from "react";
import { navLinks } from "../data/site.js";
import Button from "./ui/Button.jsx";
import { BurgerMark, Close, Menu } from "./ui/icons.jsx";

export default function Navbar() {
  const [condensed, setCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 bg-paper transition-all duration-500 ease-out",
        condensed ? "shadow-card" : "border-b border-line",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 transition-all duration-500 ease-out md:px-10",
          condensed ? "h-16" : "h-20 md:h-24",
        ].join(" ")}
      >
        <a
          href="#top"
          className="group flex items-center gap-3 rounded-[4px] pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ketchup focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          aria-label="MyBurger 回到頁首"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-ketchup text-mustard transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100">
            <BurgerMark className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-bold tracking-tight text-charcoal">
              MyBurger<span className="text-ketchup">.</span>
            </span>
            <span className="mt-1 hidden text-[9px] font-medium uppercase tracking-[0.3em] text-smoke sm:block">
              Everyday Burger
            </span>
          </span>
        </a>

        <nav aria-label="主要導覽" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative py-2 font-heading text-[13px] font-semibold tracking-wide text-charcoal/80 transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-[3px] after:w-0 after:rounded-full after:bg-ketchup after:transition-all after:duration-300 hover:text-ketchup hover:after:w-full focus-visible:text-ketchup focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ketchup focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button href="#contact" size="sm" className="hidden sm:inline-flex">
            立即訂購
          </Button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "關閉選單" : "開啟選單"}
            className="flex h-11 w-11 items-center justify-center rounded-[4px] border border-line text-charcoal transition-colors duration-200 hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ketchup focus-visible:ring-offset-2 focus-visible:ring-offset-paper lg:hidden"
          >
            {menuOpen ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={[
          "overflow-hidden border-t border-line bg-paper transition-all duration-500 ease-out lg:hidden",
          menuOpen ? "max-h-[34rem] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav aria-label="行動版導覽" className="mx-auto max-w-7xl px-6 pb-8 pt-2 md:px-10">
          <ul className="flex flex-col divide-y divide-line">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-4 font-heading text-base font-semibold text-charcoal transition-colors duration-200 hover:text-ketchup focus-visible:outline-none focus-visible:text-ketchup"
                >
                  {link.label}
                  <span className="text-[11px] font-medium tracking-widest text-smoke">
                    0{index + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <Button
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 w-full"
            size="md"
          >
            立即訂購
          </Button>
          <p className="mt-4 text-center text-xs text-smoke">
            台北市大安區 · 11:30 – 21:30（週二公休）
          </p>
        </nav>
      </div>
    </header>
  );
}
