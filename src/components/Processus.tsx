'use client';

import { motion } from 'framer-motion';

export default function Processus() {
  const steps = [
    {
      num: '1',
      title: 'Contactez-nous sur WhatsApp',
      desc: "Choisissez le service qui vous convient et cliquez Commander. Un message pré-rempli s'ouvre directement sur WhatsApp.",
    },
    {
      num: '2',
      title: 'On discute de votre projet',
      desc: "Notre équipe analyse vos besoins et propose une solution sur mesure. On recueille vos informations, logo, textes et préférences créatives.",
    },
    {
      num: '3',
      title: 'Livraison en 24h chrono',
      desc: "Votre projet est réalisé et livré en moins de 24h avec qualité professionnelle. Révisions illimitées jusqu'à votre satisfaction totale.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section id="processus" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-blue-light text-brand-blue-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Notre Processus
          </div>
          <h2 className="font-space-grotesk text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
            Comment <span className="text-brand-blue">ça marche</span> ?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            En 3 étapes simples, votre projet digital prend vie en moins de 24 heures.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 relative"
        >
          <div className="hidden md:block absolute top-9 left-[calc(33.3%-10px)] right-[calc(33.3%-10px)] h-0.5 bg-gradient-to-r from-brand-blue-light via-brand-blue to-brand-blue-light" />

          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={cardVariants}
              className="text-center relative"
            >
              <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white font-space-grotesk text-2xl font-extrabold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-blue/30 relative z-10">
                {step.num}
              </div>
              <h3 className="font-space-grotesk text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm max-w-xs mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
