import React, { useState } from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { WHATSAPP_LINK } from '../../lib/fleetData';

export default function ChatBot() {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '¡Hola! ¿En qué podemos ayudarte hoy con tu alquiler premium?' }
  ]);

  const answers = {
    es: {
      "1": "Nuestra sede principal está en El Poblado, Medellín, y cubrimos entregas directas en el Aeropuerto de Rionegro.",
      "2": "Solicitamos licencia de conducción vigente, documento de identidad o pasaporte, y un depósito de garantía en tarjeta de crédito."
    }
  };

  const handleOption = (key) => {
    const currentAnswers = answers.es;
    const optionText = key === "1" ? "📍 Ubicación" : "📋 Requisitos";
    setMessages(prev => [
      ...prev,
      { sender: 'user', text: optionText },
      { sender: 'bot', text: currentAnswers[key] }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-primary text-black rounded-full flex items-center justify-center text-2xl shadow-2xl cursor-pointer border-none"
          style={{ animation: 'pulse-gold 3s infinite' }}>
          💬
        </button>
      ) : (
        <div className="w-[320px] h-[400px] bg-zinc-950 border border-white/10 rounded-xl flex flex-col overflow-hidden shadow-2xl font-sans">
          <div className="p-4 bg-zinc-900 border-b border-white/5 flex justify-between items-center text-white text-[0.75rem] font-bold">
            <span>AI Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-white/40 cursor-pointer bg-transparent border-none">✕</button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto space-y-3 text-[0.75rem]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-2.5 rounded-lg ${m.sender === 'user' ? 'bg-primary text-black font-semibold' : 'bg-white/5 text-white'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-white/5 bg-black flex flex-col gap-2">
            <div className="flex gap-2">
              <button onClick={() => handleOption("1")} className="text-[0.6rem] bg-zinc-900 border border-white/5 text-white px-2 py-1 rounded cursor-pointer">📍 Ubicación</button>
              <button onClick={() => handleOption("2")} className="text-[0.6rem] bg-zinc-900 border border-white/5 text-white px-2 py-1 rounded cursor-pointer">📋 Requisitos</button>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="block w-full py-2 bg-green-600 text-white font-bold text-[0.65rem] text-center uppercase tracking-[1px] rounded no-underline">
              Contáctanos en WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
