'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_BASE = 'https://wa.me/212626720148?text=';

const SERVICES = [
  {
    num: '01',
    title: 'Création de Sites Web',
    desc: 'Nous transformons vos idées en sites web professionnels, rapides et responsive. Landing pages, stores e-commerce et portfolios conçus pour convertir vos visiteurs en clients.',
    price: 'À partir de 1 249 MAD',
    wa: WHATSAPP_BASE + encodeURIComponent("Bonjour InfoAymane!\n\nJe suis intéressé(e) par la Création de Sites Web.\nPouvez-vous me donner plus d'informations ? Merci !"),
  },
  {
    num: '02',
    title: 'Publicité Digitale (ADS)',
    desc: 'Atteignez précisément vos clients cibles sur Facebook, Instagram et TikTok. Campagnes publicitaires optimisées pour maximiser votre retour sur investissement.',
    price: 'À partir de 749 MAD',
    wa: WHATSAPP_BASE + encodeURIComponent("Bonjour InfoAymane!\n\nJe suis intéressé(e) par la Publicité Digitale (ADS).\nPouvez-vous me donner plus d'informations ? Merci !"),
  },
  {
    num: '03',
    title: 'Référencement Naturel (SEO)',
    desc: 'Améliorez votre position sur Google et générez du trafic qualifié durablement. Nous optimisons la structure technique et le contenu de votre site pour vous.',
    price: 'À partir de 599 MAD',
    wa: WHATSAPP_BASE + encodeURIComponent("Bonjour InfoAymane!\n\nJe suis intéressé(e) par le SEO.\nPouvez-vous me donner plus d'informations ? Merci !"),
  },
  {
    num: '04',
    title: 'Design Graphique & Social Media',
    desc: 'Posts professionnels pour réseaux sociaux, cartes de visite, flyers et identité visuelle complète. En arabe, français et anglais — livraison en 24h.',
    price: 'À partir de 149 MAD',
    wa: WHATSAPP_BASE + encodeURIComponent("Bonjour InfoAymane!\n\nJe suis intéressé(e) par le Design Graphique.\nPouvez-vous me donner plus d'informations ? Merci !"),
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-brand-blue-light text-brand-blue-dark border border-brand-blue/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            Nos Services
          </span>
          <h2 className="font-anton text-5xl md:text-7xl lg:text-8xl uppercase text-gray-900 leading-none tracking-tight">
            Ce que nous <br />
            <span className="text-brand-blue">faisons pour vous</span>
          </h2>
        </motion.div>

        {/* ── Accordion cards ── */}
        <div
          className="flex h-[420px] sm:h-[480px] gap-2 sm:gap-3"
          onMouseLeave={() => setActive(0)}
        >
          {SERVICES.map((svc, i) => {
            const isActive = active === i;
            return (
              <div
                key={svc.num}
                onMouseEnter={() => setActive(i)}
                style={{
                  flex: isActive ? '4 0 0%' : '0.35 0 0%',
                  transition: 'flex 0.55s cubic-bezier(0.4,0,0.2,1)',
                }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer border border-gray-100 ${
                  isActive
                    ? 'bg-brand-blue shadow-2xl shadow-brand-blue/30'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                {/* Number badge */}
                <span
                  className={`absolute top-5 right-5 font-serif text-4xl font-black select-none transition-colors duration-300 ${
                    isActive ? 'text-white/80' : 'text-gray-300'
                  }`}
                >
                  {svc.num}
                </span>

                {/* Content — always at bottom-left */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  {/* Title: always visible (clips in narrow cards) */}
                  <h3
                    className={`font-serif uppercase leading-tight whitespace-nowrap transition-colors duration-300 ${
                      isActive
                        ? 'text-white text-3xl sm:text-4xl font-bold whitespace-normal'
                        : 'text-gray-900 text-xl sm:text-2xl font-bold'
                    }`}
                  >
                    {svc.title}
                  </h3>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.35, delay: 0.15 }}
                      >
                        <p className="mt-4 text-sm text-white/90 leading-relaxed max-w-[340px]">
                          {svc.desc}
                        </p>
                        <p className="mt-3 text-xs font-bold text-brand-yellow uppercase tracking-wider">
                          {svc.price}
                        </p>
                        <a
                          href={svc.wa}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 border border-white rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-brand-blue transition-all duration-200"
                        >
                          Commander sur WhatsApp
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Vertical number for collapsed cards */}
                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="font-serif text-[clamp(4rem,10vw,8rem)] text-gray-100 font-medium select-none leading-none opacity-50">
                      {svc.num}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile fallback: vertical cards */}
        <div className="mt-6 flex sm:hidden flex-col gap-4">
          {SERVICES.map((svc) => (
            <div key={svc.num} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <span className="font-space-grotesk text-2xl font-black text-brand-blue">{svc.num}</span>
              <h3 className="font-anton text-2xl uppercase text-gray-900 mt-1">{svc.title}</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">{svc.desc}</p>
              <p className="mt-2 text-xs font-bold text-brand-blue-dark uppercase tracking-wider">{svc.price}</p>
              <a
                href={svc.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex border-2 border-brand-blue rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
              >
                Commander
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
