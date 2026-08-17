import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, Globe, Clock, MapPin } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/212626720148';
const PHONE = '+212626720148';
const EMAIL = 'infoapymane@gmail.com';
const SITE = 'https://infoaymane.com';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <Link href="#accueil" className="flex items-center gap-3 mb-4">
              <Image
                src="/Agence InfoAymane-images/1wyLi4ksWvR6t3BqYfEXK98npkSo74m2jc1XdjQx.webp"
                alt="InfoAymane"
                width={46}
                height={46}
                className="rounded-full object-cover"
              />
              <span className="font-space-grotesk text-xl font-bold">
                INFO<span className="text-brand-yellow">AYMANE</span>
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-[270px]">
              Agence de marketing digital online au Maroc. Solutions complètes, accessibles et professionnelles pour votre business.
            </p>
            <div className="flex gap-2.5 mt-5 justify-center sm:justify-start">
              <a
                href="https://www.facebook.com/InfoAymane"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/8 flex items-center justify-center text-white hover:bg-brand-blue hover:-translate-y-0.5 transition-all"
                aria-label="Facebook"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/InfoAymane"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/8 flex items-center justify-center text-white hover:bg-brand-blue hover:-translate-y-0.5 transition-all"
                aria-label="Instagram"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/8 flex items-center justify-center text-white hover:bg-brand-blue hover:-translate-y-0.5 transition-all"
                aria-label="WhatsApp"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/38 mb-5">Services</h4>
            <ul className="flex flex-col gap-2.5 items-center sm:items-start">
              {['Design Graphique', 'Social Media', 'Facebook Ads', 'Création Web', 'Cartes de Visite', 'Store E-commerce'].map((s) => (
                <li key={s}>
                  <Link href="#services" className="text-sm text-white/60 hover:text-brand-blue transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/38 mb-5">Navigation</h4>
            <ul className="flex flex-col gap-2.5 items-center sm:items-start">
              <li><Link href="#accueil" className="text-sm text-white/60 hover:text-brand-blue transition-colors">Accueil</Link></li>
              <li><Link href="#services" className="text-sm text-white/60 hover:text-brand-blue transition-colors">Nos Services</Link></li>
              <li><Link href="#processus" className="text-sm text-white/60 hover:text-brand-blue transition-colors">Comment ça marche</Link></li>
              <li><Link href="#apropos" className="text-sm text-white/60 hover:text-brand-blue transition-colors">À propos</Link></li>
              <li><a href={SITE} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-brand-blue transition-colors">Site officiel</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/38 mb-5">Contact</h4>
            <div className="flex flex-col gap-3 items-center sm:items-start">
              <a href={`tel:${PHONE}`} className="flex items-center gap-2.5 text-sm text-white/60 hover:text-brand-blue transition-colors">
                <Phone className="w-4 h-4 shrink-0" /> {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 text-sm text-white/60 hover:text-brand-blue transition-colors">
                <Mail className="w-4 h-4 shrink-0" /> {EMAIL}
              </a>
              <a href={SITE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-white/60 hover:text-brand-blue transition-colors">
                <Globe className="w-4 h-4 shrink-0" /> infoaymane.com
              </a>
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <Clock className="w-4 h-4 shrink-0" /> Lun-Ven, 09h00-18h00
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <MapPin className="w-4 h-4 shrink-0" /> Maroc
              </div>
            </div>
          </div>
        </div>

          <div className="flex flex-col sm:flex-row justify-center items-center pt-7 gap-4">
            <p className="text-xs text-white/32 text-center">
             © 2026{" "}
            <a href={SITE} className="hover:text-brand-blue transition-colors" >
             InfoAymane
                   </a>{" "}
            — Aymane Ait Sidi. Tous droits réservés.
            </p>
          </div>
      </div>
    </footer>
  );
}
