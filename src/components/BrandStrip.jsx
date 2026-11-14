import { marqueeWords } from "../data/site.js";

export default function BrandStrip() {
  return (
    <div className="mt-12 border-y border-line bg-cloud md:mt-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 py-5 text-center sm:justify-between sm:gap-x-6">
          {marqueeWords.map((word, index) => (
            <li key={word} className="flex items-center gap-7">
              <span className="font-heading text-[10px] font-bold uppercase tracking-[0.24em] text-charcoal/60 sm:text-[11px]">
                {word}
              </span>
              {index < marqueeWords.length - 1 ? (
                <span aria-hidden="true" className="hidden h-1.5 w-1.5 rounded-full bg-ketchup sm:block" />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
