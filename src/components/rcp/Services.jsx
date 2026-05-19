import React from 'react'; [cite: 63]
import { useLanguage } from '@/lib/LanguageContext'; [cite: 63]

export default function Services() {
  const { t } = useLanguage(); [cite: 64]
  const services = [ [cite: 65]
    { icon: '✈️', title: t.services.s1t, desc: t.services.s1d },
    { icon: '🛡️', title: t.services.s2t, desc: t.services.s2d },
    { icon: '🛎️', title: t.services.s3t, desc: t.services.s3d },
  ]; [cite: 65]

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1400px] mx-auto" id="servicios"> [cite: 66]
      <div className="text-center mb-16">
        <span className="text-[0.7rem] text-primary uppercase tracking-[4px] font-bold block mb-3">{t.services.sub}</span>
        <h2 className="text-2xl md:text-[2.2rem] font-extrabold uppercase tracking-[1px] text-white">{t.services.title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-white/[0.02] border border-white/5 p-10 rounded-lg transition-all duration-500 hover:bg-white/[0.04] hover:border-primary/30 hover:-translate-y-1.5">
            <div className="text-3xl text-primary mb-5">{s.icon}</div>
            <h3 className="text-[1.1rem] font-bold mb-3 uppercase tracking-[1px] text-white">{s.title}</h3>
            <p className="text-muted-foreground text-[0.85rem] leading-relaxed font-light">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
