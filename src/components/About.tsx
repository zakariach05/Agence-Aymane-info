'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Globe, Gem, Banknote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const mainImageRef = useRef<HTMLDivElement>(null);
  const secondImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (mainImageRef.current) {
        gsap.to(mainImageRef.current, {
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: mainImageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
      if (secondImageRef.current) {
        gsap.to(secondImageRef.current, {
          y: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: secondImageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Service Express 24h',
      desc: 'Livraison garantie en moins de 24h avec qualité professionnelle',
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Multilingue',
      desc: 'Darija, Arabe classique, Français et Anglais',
    },
    {
      icon: <Gem className="w-5 h-5" />,
      title: 'Qualité Premium',
      desc: "Révisions illimitées jusqu'à votre satisfaction totale",
    },
    {
      icon: <Banknote className="w-5 h-5" />,
      title: 'Prix Startup Friendly',
      desc: 'Tarifs accessibles pour startups, PME et entrepreneurs marocains',
    },
  ];

  return (
    <section id="apropos" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div ref={mainImageRef} className="rounded-3xl overflow-hidden shadow-xl shadow-brand-blue/15">
              <Image
                src="/Agence InfoAymane-images/OXi1xoPX10ZCWF29rR1I2Mi0m4OAptURhlHU1jB1.webp"
                alt="Équipe InfoAymane"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div
              ref={secondImageRef}
              className="absolute bottom-[-30px] right-[-24px] w-[175px] rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block"
            >
              <Image
                src="/Agence InfoAymane-images/ARiyWUsGt20G1i1CueIbIjS1YBZpvCagSGWDqvt4.webp"
                alt="Travail en équipe"
                width={175}
                height={155}
                className="w-full h-[155px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-blue-light text-brand-blue-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              À propos
            </div>
            <h2 className="font-space-grotesk text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              InfoAymane,<br />
              <span className="text-brand-blue">votre partenaire</span><br />
              digital de confiance
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Agence InfoAymane Online est spécialisée dans le marketing digital, la création web et la communication visuelle. Nous fournissons des conseils et solutions complètes pour assurer la réussite de votre projet.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {values.map((val) => (
                <div key={val.title} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-lg bg-brand-blue-light flex items-center justify-center text-brand-blue shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{val.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{val.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
