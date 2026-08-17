'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ finishLoading }: { finishLoading: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timeout = setTimeout(() => {
      finishLoading();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [finishLoading]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Image
            src="/NV-image/logo-infoaymane.png"
            alt="InfoAymane Logo"
            width={240}
            height={68}
            priority
            className="w-auto h-12 sm:h-16 object-contain"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 flex items-center font-space-grotesk font-black text-3xl tracking-tight"
        >
          <span className="text-[#0284c7]">INFO</span>
          <span className="text-brand-yellow">AYMANE</span>
        </motion.div>

        {/* Loading progress bar */}
        <motion.div
          className="mt-8 w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-brand-yellow rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
