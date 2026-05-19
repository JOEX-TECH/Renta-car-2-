import React from 'react'; [cite: 60]
import { useLanguage } from '@/lib/LanguageContext'; [cite: 60]

export default function Hero() {
  const { t } = useLanguage(); [cite: 61]

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center bg-black"> [cite: 62]
      <video autoPlay loop muted playsInline className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-[1]">
        <source src="Video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[2]" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(5,5,5,0.6) 60%, rgba(5,5,5,1) 100%)' }} />
      <div className="relative z-[3] max-w-[1100px] px-6 mt-10">
        <h1 className="text-3xl md:text-[3.5rem] font-black uppercase tracking-[2px] leading-[1.1] mb-5 text-white">
          {t.hero.title} <span className="text-primary" style={{ textShadow: '0 0 30px rgba(255,0,0,0.3)' }}>{t.hero.highlight}</span> {t.hero.suffix}
        </h1>
        <p className="text-[0.9rem] font-normal tracking-[5px] uppercase text-muted-foreground mb-10">{t.hero.subtitle}</p>
        <a href__="#flota" className="inline-block px-8 py-4 text-[0.8rem] font-bold uppercase tracking-[2px] text-white border border-white rounded hover:bg-white hover:text-black transition-all duration-500 hover:-translate-y-0.5">
          {t.hero.btn}
        </a>
      </div>
    </section>
  );
}
