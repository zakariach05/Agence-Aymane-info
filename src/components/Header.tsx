'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DialogTitle } from '@/components/ui/dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

// Height of the fixed TickerBanner: py-2.5 (10px top + 10px bottom) + ~20px text = ~41px
const TICKER_H = 41;

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  const orderWhatsApp = () => {
    const msg = "Bonjour InfoAymane!\n\nJe voudrais obtenir des informations sur vos services. Pouvez-vous m'aider ? Merci !";
    window.open(`https://wa.me/212626720148?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <motion.header
      /* Sits directly below the fixed TickerBanner */
      className="fixed left-0 right-0 z-50 transition-all duration-300"
      style={{ top: TICKER_H }}
      animate={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(0,0,0,0)',
        backdropFilter: scrolled ? 'blur(18px)' : 'blur(0px)',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.08)' : '0 0 0 rgba(0,0,0,0)',
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo: real InfoAymane image, no Next.js icon */}
        <Link
          href="#accueil"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Image
            src="/NV-image/logo-infoaymane.png"
            alt="InfoAymane Logo"
            width={160}
            height={45}
            priority
            className="w-auto h-8 sm:h-10 object-contain"
          />
          <span className="font-space-grotesk font-black text-2xl tracking-tight hidden sm:block">
            <span className="text-[#0284c7]">INFO</span>
            <span className="text-brand-yellow">AYMANE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { href: '#accueil', label: 'Accueil' },
            { href: '#services', label: 'Services' },
            { href: '#processus', label: 'Processus' },
            { href: '#apropos', label: 'À propos' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-base font-semibold transition-colors hover:text-brand-yellow"
              style={{ color: scrolled ? '#374151' : 'rgba(255,255,255,0.9)' }}
            >
              {label}
            </Link>
          ))}

          <Button
            onClick={orderWhatsApp}
            className="bg-brand-yellow text-gray-900 rounded-full px-6 shadow-lg shadow-brand-yellow/30 hover:shadow-brand-yellow/50 hover:bg-brand-yellow-dark transition-all hover:-translate-y-0.5 font-bold"
          >
            Contact
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className={scrolled ? 'text-gray-900' : 'text-white'}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              }
            />
            <SheetContent side="right" className="flex flex-col pt-12">
              <VisuallyHidden.Root><DialogTitle>Menu</DialogTitle></VisuallyHidden.Root>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#accueil" className="px-4 py-3 text-lg font-medium rounded-lg hover:bg-brand-blue-light hover:text-brand-blue">Accueil</Link>
                <Link href="#services" className="px-4 py-3 text-lg font-medium rounded-lg hover:bg-brand-blue-light hover:text-brand-blue">Services</Link>
                <Link href="#processus" className="px-4 py-3 text-lg font-medium rounded-lg hover:bg-brand-blue-light hover:text-brand-blue">Processus</Link>
                <Link href="#apropos" className="px-4 py-3 text-lg font-medium rounded-lg hover:bg-brand-blue-light hover:text-brand-blue">À propos</Link>
                <Button onClick={orderWhatsApp} className="mt-4 bg-brand-yellow text-gray-900 rounded-full font-bold">
                  Commander sur WhatsApp
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
