'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Only photos from the NV-image folder (5s per slide)
const SLIDESHOW_IMAGES = [
  '/NV-image/digital-marketing-team.png',
  '/NV-image/a-an-energetic-marketing-agency-office-d7aab221-bd1b-4a8f-b8aa-d18f2c312166.jpg',
  '/NV-image/view-messy-office-workspace-with-laptop-device_23-2150282037.avif',
];

const WHATSAPP_URL =
  'https://wa.me/212626720148?text=' +
  encodeURIComponent(
    "Bonjour InfoAymane!\n\nJe suis intéressé(e) par vos services. Pouvez-vous m'aider ? Merci !"
  );

// Each social has its own brand color for the icon circle
const SOCIALS = [
  {
    name: 'WhatsApp',
    href: WHATSAPP_URL,
    // Original WhatsApp green
    color: 'bg-[#25D366]',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/InfoAymane',
    // Original Facebook blue
    color: 'bg-[#1877F2]',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/InfoAymane',
    // Original Instagram gradient (applied via inline style on the wrapper)
    color: 'bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@InfoAymane',
    // Original YouTube red
    color: 'bg-[#FF0000]',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const CIRCULAR_TEXT = 'DEFILEZ POUR EXPLORER · DEFILEZ POUR EXPLORER · DEFILEZ POUR EXPLORER · ';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // 5s per slide as requested
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
  };

  return (
    <section id="accueil" className="relative min-h-screen flex flex-col overflow-hidden mb-12">
      {/* ── Slideshow background ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDESHOW_IMAGES[currentSlide]}
              alt="Réalisations InfoAymane"
              fill
              sizes="100vw"
              priority={currentSlide === 0}
              className="object-cover animate-ken-burns"
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />
      </div>

      {/* ── Slide dots indicator ── */}
      <div className="absolute bottom-28 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDESHOW_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentSlide ? 'w-8 bg-brand-yellow' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Social sidebar – fixed left with original brand colors */}
      <div
        className="hidden sm:flex fixed left-4 top-1/2 -translate-y-1/2 z-30 flex-col gap-3"
        aria-label="Réseaux sociaux"
      >
        {SOCIALS.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className={`w-10 h-10 rounded-full ${s.color} flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200 shadow-md`}
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        {/* Left padding clears social sidebar on desktop; top padding = TickerBanner(41) + Header(80) */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:pl-24 xl:pl-8 pt-[161px] pb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
                Agence Marketing Digital &middot; Maroc
              </span>
            </motion.div>

            {/* H1 – corrected title */}
            <motion.h1
              variants={itemVariants}
              className="font-anton text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] uppercase text-white leading-[0.9] tracking-tight"
            >
              AGENCE DE MARKETING
              <br />
              <span className="text-brand-yellow">DIGITAL AU MAROC</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
            >
              Votre partenaire de confiance pour la création de sites web, le montage vidéo et le
              marketing digital à Casablanca.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-bold bg-brand-yellow text-gray-900 hover:bg-brand-yellow-dark shadow-lg shadow-brand-yellow/30 hover:shadow-brand-yellow/50 transition-all hover:-translate-y-0.5"
              >
                Contactez-nous
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all"
              >
                Voir nos réalisations <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Mobile social icons — original brand colors */}
            <motion.div variants={itemVariants} className="flex sm:hidden gap-3 mt-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={`w-10 h-10 rounded-full ${s.color} flex items-center justify-center hover:scale-110 transition-all shadow-md`}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator – bottom right ── */}
      <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center justify-center">
        <a href="#apropos" className="relative w-[90px] h-[90px] group cursor-pointer block hover:scale-105 transition-transform">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow">
            <defs>
              <path id="scrollCirclePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="fill-white text-[8px] font-bold uppercase tracking-[0.15em] group-hover:fill-brand-yellow transition-colors">
              <textPath href="#scrollCirclePath">{CIRCULAR_TEXT}</textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-brand-yellow transition-colors">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
}
