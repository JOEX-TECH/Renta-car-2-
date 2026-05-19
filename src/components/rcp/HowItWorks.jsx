import React from 'react';
import { useLanguage } from '../../lib/LanguageContext';

const steps = [
  { icon: '🚗', es: 'Elige tu vehículo', en: 'Choose your vehicle', desc: { es: 'Explora nuestra flota exclusiva y selecciona el auto de lujo perfecto.', en: 'Browse our exclusive fleet and select the perfect luxury car.' } },
  { icon: '📋', es: 'Reserva en minutos', en: 'Book in minutes', desc: { es: 'Completa el formulario comercial de cierre ágil por WhatsApp.', en: 'Fill out our seamless premium WhatsApp checkout workflow.' } },
  { icon: '🚀', es: 'Entrega VIP', en: 'VIP Delivery', desc: { es: 'Despachamos tu auto en El Poblado o directo en el Aeropuerto de Rionegro.', en: 'We dispatch at El Poblado or directly at the Rionegro Airport terminal.' } }
];

export default function HowItWorks() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto bg-black">
      <div className="text-center mb-16">
        <span className="text-[0.7rem] text-primary uppercase tracking-[4px] font-bold block mb-3">PROCESO</span>
        <h2 className="text-2xl md:text-[2.2rem] font-extrabold uppercase tracking-[1px] text-white">CÓMO FUNCIONA EL ALQUILER</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="text-center p-6 border border-white/5 bg-zinc-950 rounded-lg">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-primary/30 flex items-center justify-center text-xl bg-black">
              {step.icon}
            </div>
            <h3 className="text-white font-bold text-[0.9rem] uppercase tracking-[1px] mb-2">{lang === 'es' ? step.es : step.en}</h3>
            <p className="text-muted-foreground text-[0.8rem] font-light leading-relaxed">{lang === 'es' ? step.desc.es : step.desc.en}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
