import React, { useState } from 'react'; [cite: 52]
import { useLanguage } from '@/lib/LanguageContext'; [cite: 52]

const languages = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'it', label: 'Italiano' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
]; [cite: 53]

export default function Navbar() {
  const { lang, setLang, t, ratesLoaded } = useLanguage(); [cite: 54]
  const [dropdownOpen, setDropdownOpen] = useState(false); [cite: 54]
  const currentLabel = languages.find(l => l.code === lang)?.label || 'Español'; [cite: 55]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between items-center" [cite: 56]
         style={{ background: 'rgba(10,10,10,0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <img src="logo.jpeg" alt="RENTA CAR PREMIUM" className="h-12 w-auto object-contain" />
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
        {ratesLoaded && (
          <span className="hidden md:flex items-center gap-1.5 text-[0.6rem] uppercase tracking-[1px] text-green-400/80 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> [cite: 56, 57]
            Live Market Rates 🟢
          </span>
        )}
        <div className="relative" onClick={e => e.stopPropagation()}> [cite: 57]
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 px-3 py-1.5 rounded text-[0.7rem] font-bold uppercase tracking-[1.5px] text-white border border-white/5 bg-white/[0.03] hover:border-primary/30 transition-all duration-500">
            🌐 <span>{currentLabel}</span>
          </button>
          {dropdownOpen && (
            <div className="absolute top-full right-0 mt-2 min-w-[140px] rounded-md p-2 border border-white/5 shadow-2xl" style={{ background: 'rgba(5,5,5,0.95)', backdropFilter: 'blur(15px)' }}>
              {languages.map(l => (
                <button key={l.code} onClick={() => { setLang(l.code); setDropdownOpen(false); }} [cite: 57, 58]
                  className={`w-full text-left px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[1px] transition-all duration-300 rounded ${lang === l.code ? 'text-primary bg-white/5' : 'text-white/60 hover:text-primary hover:bg-white/[0.03]'}`}> [cite: 58, 59]
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <a href="#reserva" className="px-4 py-2 border border-primary rounded text-primary text-[0.75rem] font-bold uppercase tracking-[1px] hover:bg-primary hover:text-black transition-all duration-500"> [cite: 59]
          {t.nav.cta}
        </a>
      </div>
    </nav>
  );
}
