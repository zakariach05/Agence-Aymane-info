export default function DiagonalRibbons() {
  const textA = 'PLUS DE 3 ANS D\u2019EXPÉRIENCE \u2192';
  const textB = '\u2190 PLUS DE 200 CLIENTS SATISFAITS';

  const repeat = 8;

  return (
    /* White background with padding creates visible gap between hero and ribbons */
    <section
      className="relative overflow-hidden bg-white py-12"
      aria-hidden="true"
    >
      {/* Ribbon 1 — Yellow band scrolling left → */}
      <div className="relative -rotate-[6deg] scale-x-[1.15] mb-8 overflow-hidden z-10 bg-[#fde047] shadow-xl">
        <div className="flex animate-ribbon-left whitespace-nowrap py-4">
          {[...Array(repeat)].map((_, i) => (
            <span
              key={i}
              className="font-serif text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase tracking-wide text-[#0f172a] px-8 leading-none"
            >
              {textA}
            </span>
          ))}
        </div>
      </div>

      {/* Ribbon 2 — Blue band scrolling right ← */}
      <div className="relative rotate-[6deg] scale-x-[1.15] overflow-hidden -mt-16 bg-[#0284c7] shadow-xl">
        <div className="flex animate-ribbon-right whitespace-nowrap py-4">
          {[...Array(repeat)].map((_, i) => (
            <span
              key={i}
              className="font-serif text-[clamp(1.5rem,4vw,3rem)] font-bold uppercase tracking-wide text-[#fde047] px-8 leading-none"
            >
              {textB}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
