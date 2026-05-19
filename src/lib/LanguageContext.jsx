import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'; [cite: 42]
import { translations } from './translations'; [cite: 42, 43]
const LanguageContext = createContext(); [cite: 43]

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es'); [cite: 44]
  const [rates, setRates] = useState({ USD: null, EUR: null }); [cite: 45]
  const [ratesLoaded, setRatesLoaded] = useState(false); [cite: 45]

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/COP')
      .then(r => r.json())
      .then(data => {
        if (data && data.rates) {
          setRates({ USD: data.rates.USD, EUR: data.rates.EUR });
          setRatesLoaded(true);
        }
      })
      .catch(() => {
        setRates({ USD: 1/4200, EUR: 1/4600 });
        setRatesLoaded(true);
      });
  }, []); [cite: 46]

  const t = translations[lang] || translations.es; [cite: 47]
  const formatPrice = useCallback((copPrice) => {
    if (lang === 'es') return `$${Number(copPrice).toLocaleString('es-CO')}`;
    if (lang === 'en' && rates.USD) {
      const usd = (copPrice * rates.USD).toFixed(0);
      return `U$D ${Number(usd).toLocaleString('en-US')}`;
    }
    if (['it', 'de', 'fr'].includes(lang) && rates.EUR) {
      const eur = (copPrice * rates.EUR).toFixed(0);
      return `€ ${Number(eur).toLocaleString('de-DE')}`;
    }
    return `$${Number(copPrice).toLocaleString('es-CO')}`;
  }, [lang, rates]); [cite: 47]

  const getCurrencyPrice = useCallback((copPrice) => {
    if (lang === 'es') return '';
    if (lang === 'en' && rates.USD) {
      const usd = (copPrice * rates.USD).toFixed(0);
      return `U$D ${Number(usd).toLocaleString('en-US')} / Day`;
    }
    if (['it', 'de', 'fr'].includes(lang) && rates.EUR) {
      const eur = (copPrice * rates.EUR).toFixed(0);
      return `€ ${Number(eur).toLocaleString('de-DE')} ${t.priceDay}`;
    }
    return '';
  }, [lang, rates, t]); [cite: 48]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, rates, ratesLoaded, formatPrice, getCurrencyPrice }}> [cite: 49]
      {children}
    </LanguageContext.Provider>
  );
} [cite: 50]

export function useLanguage() {
  return useContext(LanguageContext);
}
