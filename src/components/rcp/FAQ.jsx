import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 }
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-[850px] mx-auto">
      <div className="text-center mb-12">
        <span className="text-[0.7rem] text-primary uppercase tracking-[4px] font-bold block mb-3">{t.faq.sub}</span>
        <h2 className="text-2xl md:text-[2.2rem] font-extrabold uppercase tracking-[1px] text-white">{t.faq.title}</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="border border-white/5 bg-zinc-950/20 rounded-lg overflow-hidden transition-all">
              <button onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left text-white font-bold text-[0.85rem] uppercase tracking-[0.5px] cursor-pointer bg-transparent border-none">
                <span>{f.q}</span>
                <span className="text-primary text-lg transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>＋</span>
              </button>
              <div className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[200px] border-t border-white/5' : 'max-h-0'}`}>
                <p className="p-6 text-muted-foreground text-[0.8rem] font-light leading-relaxed bg-black/40">
                  {f.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
