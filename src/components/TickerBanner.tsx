'use client';

import { useState, useEffect } from 'react';

function getCountdown(target: number) {
  const diff = Math.max(0, target - Date.now());
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);
  return { h, m, s };
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function TickerBanner() {
  const [target] = useState(() => Date.now() + 24 * 60 * 60 * 1000);
  const [countdown, setCountdown] = useState(() => getCountdown(target));

  useEffect(() => {
    const id = setInterval(() => setCountdown(getCountdown(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const timer = `${pad(countdown.h)}:${pad(countdown.m)}:${pad(countdown.s)}`;

  const segment = (
    <>
      <span className="text-brand-yellow font-bold">OFFRE LIMITÉE</span>
      <span className="mx-4 text-white/30">|</span>
      <span>-30% SUR TOUS LES SERVICES AUJOURD&apos;HUI</span>
      <span className="mx-4 text-white/30">|</span>
      <span className="font-mono tabular-nums text-brand-yellow font-bold">{timer}</span>
      <span className="mx-6 text-white/40">→</span>
    </>
  );

  return (
    /* Fixed at the very top, navbar will sit just below */
    <div className="fixed top-0 left-0 right-0 bg-black py-2.5 overflow-hidden z-[70]">
      <div className="flex animate-ticker-scroll whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="flex items-center text-xs sm:text-sm text-white/90">
            {segment}
          </span>
        ))}
      </div>
    </div>
  );
}
