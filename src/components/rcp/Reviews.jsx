import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { reviewsData } from '@/lib/fleetData';

export default function Reviews() {
  const { lang, t } = useLanguage();

  return (
    <section className="py-20 bg-black overflow-hidden border-t border-b border-white/5">
      <div className="text-center mb-12">
        <span className="text-[0.7rem] text-primary uppercase tracking-[4px] font-bold block mb-3">{t.reviews?.sub || 'TESTIMONIOS'}</span>
        <h2 className="text-2xl md:text-[2.2rem] font-extrabold uppercase tracking-[1px] text-white">{t.reviews?.title || 'CLIENTES VIP'}</h2>
      </div>

      <div className="relative flex max-w-[100vw] overflow-hidden pointer-events-none">
        {/* Carrusel con animación CSS infinita */}
        <div className="flex gap-6 animate-[scrollReviews_40s_linear_infinite] whitespace-nowrap min-w-max px-4">
          {[...reviewsData, ...reviewsData, ...reviewsData].map((r, i) => (
            <div key={i} className="inline-block bg-white/[0.01] border border-white/5 p-8 rounded-lg w-[320px] md:w-[400px] whitespace-normal">
              <div className="text-accent text-xl mb-4">★★★★★</div>
              <p className="text-white/80 text-[0.85rem] font-light italic leading-relaxed mb-6">
                "{r.text[lang] || r.text.es}"
              </p>
              <div className="text-primary font-bold text-[0.7rem] uppercase tracking-[2px]">
                {r.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
