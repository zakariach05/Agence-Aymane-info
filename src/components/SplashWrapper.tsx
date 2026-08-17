'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './SplashScreen';

export default function SplashWrapper({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  // Prevent scrolling while splash is active
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSplash]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen key="splash" finishLoading={() => setShowSplash(false)} />}
      </AnimatePresence>
      <div className={showSplash ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
        {children}
      </div>
    </>
  );
}
