import React, { createContext, useContext, useState, useCallback } from 'react';

const LanguageContext = createContext();

// Diccionario integrado para evitar dependencias faltantes
const customTranslations = {
  es: {
    nav: { services: "Servicios", fleet: "Flota", bookings: "Reservas", cta: "Rent Now" },
    hero: { title: "ALQUILER DE AUTOS DE LUXE EN", highlight: "MEDELLÍN", suffix: "", subtitle: "EXPERIENCIAS DE CONDUCCIÓN PREMIUM DE ALTA GAMA", btn: "Ver Flota VIP" },
    services: { sub: "EXCLUSIVIDAD", title: "NUESTROS SERVICIOS VIP", s1t: "Entrega Aeropuerto", s1d: "Despachos directos sin costo en el terminal de Rionegro.", s2t: "Seguridad Máxima", s2d: "Vehículos blindados con esquemas de protección premium.", s3t: "Soporte 24/7", s3d: "Asistencia en ruta y atención bilingüe personalizada." },
    fleet: { sub: "CATÁLOGO", title: "EXPLORA NUESTRA FLOTA" },
    priceDay: "Día",
    form: { sub: "RESERVA", title: "SOLICITA DISPONIBILIDAD", nameLabel: "Nombre Completo", namePlaceholder: "Tu nombre...", daysLabel: "Días comerciales", btn: "Enviar a WhatsApp VIP" },
    faq: { sub: "SOPORTE", title: "PREGUNTAS FRECUENTES", q1: "¿Qué requisitos solicitan?", a1: "Licencia de conducción vigente, documento de identidad/Pasaporte y una tarjeta de crédito para el hold de garantía.", q2: "¿Tienen entregas en el aeropuerto?", a2: "Sí, coordinamos la entrega y recepción directamente en el Aeropuerto José María Córdova de Rionegro.", q3: "¿Cómo funciona el depósito?", a3: "Se realiza un bloqueo temporal preventivo en tu tarjeta que se libera inmediatamente al devolver el auto." }
  },
  en: {
    nav: { services: "Services", fleet: "Fleet", bookings: "Bookings", cta: "Rent Now" },
    hero: { title: "LUXURY CAR RENTAL IN", highlight: "MEDELLIN", suffix: "", subtitle: "HIGH-END PREMIUM DRIVING EXPERIENCES", btn: "View VIP Fleet" },
    services: { sub: "EXCLUSIVITY", title: "OUR VIP SERVICES", s1t: "Airport Delivery", s1d: "Direct drop-offs at Rionegro airport terminals free of charge.", s2t: "Maximum Security", s2d: "Armored vehicles with top-tier security configurations.", s3t: "24/7 Concierge", s3d: "Roadside assistance and personalized bilingual dispatch." },
    fleet: { sub: "CATALOG", title: "EXPLORE OUR FLEET" },
    priceDay: "Day",
    form: { sub: "BOOKING", title: "REQUEST AVAILABILITY", nameLabel: "Full Name", namePlaceholder: "Your name...", daysLabel: "Rental Days", btn: "Send to VIP WhatsApp" },
    faq: { sub: "SUPPORT", title: "FREQUENTLY ASKED QUESTIONS", q1: "What are the rental requirements?", a1: "Valid driver's license, ID or Passport, and a credit card for the security hold.", q2: "Do you deliver to the airport?", a2: "Yes, we handle direct delivery and pick-up at the Rionegro Airport terminal.", q3: "How does the deposit work?", a3: "A temporary authorization hold is placed on your card and fully released upon car return." }
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');

  const t = customTranslations[lang] || customTranslations.es;

  const formatPrice = useCallback((copPrice) => {
    if (lang === 'es') return `$${Number(copPrice).toLocaleString('es-CO')}`;
    const usd = (copPrice / 4000).toFixed(0);
    return `U$D ${Number(usd).toLocaleString('en-US')}`;
  }, [lang]);

  const getCurrencyPrice = useCallback((copPrice) => {
    if (lang === 'es') return '';
    const usd = (copPrice / 4000).toFixed(0);
    return `U$D ${Number(usd).toLocaleString('en-US')} / Day`;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, formatPrice, getCurrencyPrice, ratesLoaded: true }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
