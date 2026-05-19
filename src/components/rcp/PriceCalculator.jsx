import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { fleetData } from '@/lib/fleetData';

export default function PriceCalculator() {
  const { lang, formatPrice } = useLanguage();
  const [selectedCarId, setSelectedCarId] = useState(fleetData[0].id);
  const [days, setDays] = useState(1);

  const selectedCar = fleetData.find(c => c.id === selectedCarId);
  const basePrice = selectedCar ? selectedCar.priceCOP : 0;
  
  let discount = 0;
  if (days >= 7) discount = 0.10;
  else if (days >= 3) discount = 0.05;

  const total = basePrice * days * (1 - discount);

  return (
    <section className="py-20 px-6 md:px-12 max-w-[800px] mx-auto bg-white/[0.01] border border-white/5 rounded-xl my-10">
      <div className="text-center mb-8">
        <span className="text-[0.7rem] text-primary uppercase tracking-[4px] font-bold block mb-2">COTIZADOR</span>
        <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-[1px] text-white">CALCULA TU TARIFA EN VIVO</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-[0.7rem] font-bold uppercase tracking-[2px] text-muted-foreground mb-2">Selecciona el Vehículo</label>
          <select value={selectedCarId} onChange={(e) => setSelectedCarId(e.target.value)}
            className="w-full bg-black border border-white/10 px-4 py-3 text-[0.8rem] font-medium text-white rounded focus:outline-none focus:border-primary">
            {fleetData.map(car => (
              <option key={car.id} value={car.id}>{car.name} — ({formatPrice(car.priceCOP)}/{lang === 'es'?'Día':'Day'})</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[0.7rem] font-bold uppercase tracking-[2px] text-muted-foreground mb-2">Días de Alquiler: <span className="text-white font-black">{days}</span></label>
          <input type="range" min="1" max="30" value={days} onChange={(e) => setDays(Number(e.target.value))}
            className="w-full accent-primary bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer" />
          <div className="flex justify-between text-[0.65rem] text-muted-foreground font-mono mt-1">
            <span>1 DÍA</span>
            <span>30 DÍAS</span>
          </div>
        </div>

        <div className="p-6 bg-black border border-white/5 rounded-lg space-y-3 font-mono">
          <div className="flex justify-between text-[0.8rem]">
            <span className="text-muted-foreground">PRECIO BASE:</span>
            <span className="text-white font-bold">{formatPrice(basePrice)} x {days}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-[0.8rem] text-green-400">
              <span>DESCUENTO APLICADO:</span>
              <span>-{(discount * 100)}%</span>
            </div>
          )}
          <div className="flex justify-between text-[1.1rem] border-t border-white/5 pt-3 font-sans">
            <span className="text-white font-black uppercase tracking-[1px]">TOTAL ESTIMADO:</span>
            <span className="text-primary font-black">{formatPrice(total)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
