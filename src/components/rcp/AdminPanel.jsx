import React, { useState, useEffect } from 'react';
import { fleetData } from '@/lib/fleetData';

export default function AdminPanel() {
  const [isVisible, setIsVisible] = useState(false);
  const [fleet, setFleet] = useState(fleetData);

  useEffect(() => {
    // Escucha la combinación de teclado secreta: Ctrl + Shift + A
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
        setIsVisible(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleStatus = (id) => {
    setFleet(prev => prev.map(car => {
      if (car.id === id) {
        const nextStatus = car.status === 'available' ? 'maintenance' : 'available';
        car.status = nextStatus;
        
        // Sincroniza dinámicamente con las clases visuales aplicadas en la tarjeta de flota
        const cardElement = document.querySelector(`[id="${id}"]`);
        if (cardElement) {
          if (nextStatus === 'maintenance') {
            cardElement.classList.add('opacity-40', 'pointer-events-none', 'grayscale');
          } else {
            cardElement.classList.remove('opacity-40', 'pointer-events-none', 'grayscale');
          }
        }
      }
      return car;
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-6 z-[200] w-[350px] bg-black/95 backdrop-blur-md border-2 border-primary p-6 rounded-lg shadow-2xl font-mono text-[0.7rem]">
      <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
        <h3 className="text-primary font-black tracking-[1px]">⚡ CONTROL DE ESTADOS DEL TALLER</h3>
        <button onClick={() => setIsVisible(false)} className="text-white hover:text-primary cursor-pointer bg-transparent border-none">✕</button>
      </div>
      <p className="text-muted-foreground mb-4 font-sans leading-relaxed">
        Alterna la disponibilidad inmediata de los vehículos en producción en vivo.
      </p>
      <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
        {fleet.map(car => (
          <div key={car.id} className="flex justify-between items-center bg-zinc-900/60 p-2.5 rounded border border-white/5">
            <span className="text-white font-bold max-w-[60%] truncate">{car.name}</span>
            <button onClick={() => toggleStatus(car.id)}
              className={`px-2 py-1 rounded font-black text-[0.6rem] uppercase tracking-[0.5px] cursor-pointer border-none transition-all ${car.status === 'available' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
              {car.status === 'available' ? '🟢 Disponible' : '🔴 NO DISPONIBLE'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
