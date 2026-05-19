import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { WHATSAPP_LINK } from '@/lib/fleetData';

export default function ChatBot() {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: t.chat?.welcome || 'Welcome! How can we assist you today?' }
  ]);

  const answers = {
    es: {
      "1": "Nuestra sede principal de despachos está en El Poblado, Medellín, y cubrimos entregas en el Aeropuerto JMC de Rionegro sin costos ocultos.",
      "2": "Para autos exóticos solicitamos licencia vigente, documento de identidad y un depósito de garantía pre-autorizado en tarjeta de crédito.",
      "3": "Manejamos tarifas full con seguros de cobertura global integrados para tu total tranquilidad corporativa."
    },
    en: {
      "1": "Our dispatch center is located in El Poblado, Medellín, and we offer free deliveries at Rionegro Airport.",
      "2": "For exotic cars we require a valid driver's license, ID or Passport, and a pre-authorized security deposit on a credit card.",
      "3": "We feature comprehensive all-inclusive premium rates with global luxury insurance protection."
    }
  };

  const handleOption = (key) => {
    const currentAnswers = answers[lang] || answers.es;
    const optionText = key === "1" ? "📍 ¿Dónde están ubicados?" : key === "2" ? "📋 Requisitos de alquiler" : "🛡️ ¿Qué seguros incluye?";
    
    setMessages(prev => [
      ...prev,
      { sender: 'user', text: optionText },
      { sender: 'bot', text: currentAnswers[key] }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90] font-sans">
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-primary text-black rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border-none"
          style={{ animation: 'pulse-gold 3s infinite' }}>
          💬
        </button>
      ) : (
        <div className="w-[330px] md:w-[360px] h-[460px] bg-zinc-950 border border-white/10 rounded-xl flex flex-col overflow-hidden shadow-2xl">
          <div className="p-4 bg-zinc-900 border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white text-[0.75rem] font-bold uppercase tracking-[1.5px]">AI Virtual Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white text-[0.8rem] cursor-pointer bg-transparent border-none">✕</button>
          </div>

          <div className="flex-grow p-4 overflow-y-auto space-y-4 max-h-[280px]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-lg text-[0.75rem] leading-relaxed max-w-[85%] ${m.sender === 'user' ? 'bg-primary text-black font-semibold' : 'bg-white/5 text-white/90 font-light'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-white/5 bg-black space-y-2">
            <div className="flex flex-wrap gap-1.5">
              <button onClick={() => handleOption("1")} className="text-[0.6rem] bg-zinc-900 border border-white/5 text-white hover:border-primary/40 px-2 py-1 rounded text-left uppercase font-medium cursor-pointer">📍 Ubicación</button>
              <button onClick={() => handleOption("2")} className="text-[0.6rem] bg-zinc-900 border border-white/5 text-white hover:border-primary/40 px-2 py-1 rounded text-left uppercase font-medium cursor-pointer">📋 Requisitos</button>
              <button onClick={() => handleOption("3")} className="text-[0.6rem] bg-zinc-900 border border-white/5 text-white hover:border-primary/40 px-2 py-1 rounded text-left uppercase font-medium cursor-pointer">🛡️ Seguros</button>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
               className="block w-full py-2.5 bg-green-600 text-white font-bold text-[0.65rem] tracking-[1px] uppercase rounded text-center transition-all hover:bg-green-500 decoration-none no-underline">
              ⚡ Contactar Agente Humano VIP
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
