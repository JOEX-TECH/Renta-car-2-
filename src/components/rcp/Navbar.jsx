import React, { useState } from 'react';
import { useLanguage } from '../../lib/LanguageContext';

const languages = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' }
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const currentLabel = languages.find(l => l.code === lang)?.label || 'Español';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between items-center"
         style={{ background: 'rgba(10,10,10,0.75)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <img src="/logo.jpeg" alt="RENTA CAR PREMIUM" className="h-12 w-auto object-contain" />
      <div className="flex items-center gap-4 md:gap-8">
        <ul className="hidden md:flex gap-6 list-none">
          {[
            { href: '#servicios', label: t.nav.services },
            { href: '#flota', label: t.nav.fleet },
            { href: '#reserva', label: t.nav.bookings }
          ].map(item => (
            <li key={item.href}>
              <a href={item.href} className="text-white/60 hover:text-primary text-[0.75rem] font-semibold uppercase tracking-[2px] transition-all duration-500">{item.label}</a>
            </li>
          ))}
        </ul>
        
        <div className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 px-3 py-1.5 rounded text-[0.7rem] font-bold uppercase tracking-[1.5px] text-white border border-white/5 bg-white/[0.03] hover:border-primary/30 transition-all">
            🌐 <span>{currentLabel}</span>
          </button>
          {dropdownOpen && (
            <div className="absolute top-full right-0 mt-2 min-w-[140px] rounded-md p-2 border border-white/5 bg-zinc-950 shadow-2xl">
              {languages.map(l => (
                <button key={l.code} onClick={() => { setLang(l.code); setDropdownOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[1px] rounded ${lang === l.code ? 'text-primary bg-white/5' : 'text-white/60 hover:text-primary'}`}>
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <a href="#reserva" className="px-4 py-2 border border-primary rounded text-primary text-[0.75rem] font-bold uppercase tracking-[1px] hover:bg-primary hover:text-black transition-all duration-500">
          {t.nav.cta}
        </a>
      </div>
    </nav>
  );
}
