'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export default function Promo() {
  const orderWhatsApp = () => {
    const msg = "Bonjour InfoAymane!\n\nJe suis intéressé(e) par l'offre promotionnelle -50%.\n\nPouvez-vous me confirmer la disponibilité et me donner plus d'informations ? Merci !";
    window.open(`https://wa.me/212626720148?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-brand-yellow/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="bg-gradient-to-br from-[#0A2540] via-brand-blue-dark to-brand-blue py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="inline-block bg-brand-yellow text-gray-900 px-5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-6 shadow-lg shadow-brand-yellow/30">
            Offre Limitée
          </div>
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Promo Illimitée<br />
            <span className="text-brand-yellow">Jusqu&apos;à -50%</span> sur tous nos services
          </h2>
          <p className="mt-4 text-white/75 text-lg">
            En plus recevez 1 ou 2 services offerts en cadeau. Offre valable 24h seulement !
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              onClick={orderWhatsApp}
              className="rounded-full px-8 py-6 text-base font-bold bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-lg shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all hover:-translate-y-1"
            >
              Profiter de l&apos;offre maintenant
            </Button>
            <a
              href="tel:+212626720148"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-semibold text-white border-2 border-white/40 hover:bg-white/10 hover:border-white transition-all"
            >
              <Phone className="w-5 h-5" />
              +212 6 26 72 01 48
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
