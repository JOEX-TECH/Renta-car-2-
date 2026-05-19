import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Promotions() {
  const { lang, t } = useLanguage();

  const promoTitles = { es: "PROMOCIONES EXCLUSIVAS", en: "EXCLUSIVE PROMOTIONS", it: "PROMOZIONI ESCLUSIVE", de: "EXKLUSIVE ANGEBOTE", fr: "PROMOTIONS EXCLUSIVES" };
  const promoSubs = { es: "BENEFICIOS VIP", en: "VIP BENEFITS", it: "BENEFICI VIP", de: "VIP-VORTEILE", fr: "AVANTAGES VIP" };

  const promos = [
    { title: { es: "Descuento Semanal", en: "Weekly Discount" }, desc: { es: "Obtén un 10% de descuento automático en alquileres superiores a 7 días.", en: "Get an automatic 10% off on rentals over 7 days." }, badge: "-10% VIP" },
    { title: { es: "Entrega Aeropuerto Gratis", en: "Free Airport Delivery" }, desc: { es: "Te entregamos y recogemos el vehículo en el Aeropuerto de Rionegro sin costo.", en: "We deliver and pick up your vehicle at Rionegro Airport free of charge." }, badge: "FREE" }
  ];

  return (
    <section className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
      <div className="text-center mb-12">
        <span className="text-[0.7rem] text-primary uppercase tracking-[4px] font-bold block mb-3">{promoSubs[lang]}</span>
        <h2 className="text-2xl md:text-[2.2rem] font-extrabold uppercase tracking-[1px] text-white">{promoTitles[lang]}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {promos.map((p, i) => (
          <div key={i} className="border border-white/5 bg-zinc-950/40 p-8 rounded-lg flex justify-between items-start relative overflow-hidden group hover:border-accent/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <span className="text-accent border border-accent/20 bg-accent/5 text-[0.6rem] font-black px-2.5 py-1 rounded uppercase tracking-[1px] inline-block mb-4">
                {p.badge}
              </span>
              <h3 className="text-white font-bold text-[1.1rem] uppercase tracking-[0.5px] mb-2">{p.title[lang] || p.title.es}</h3>
              <p className="text-muted-foreground text-[0.8rem] font-light leading-relaxed max-w-[85%]">{p.desc[lang] || p.desc.es}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
