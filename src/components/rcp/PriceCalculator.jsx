import React, { useState } from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { fleetData } from '../../lib/fleetData';

export default function PriceCalculator() {
  const { formatPrice } = useLanguage();
  const [selectedCarId, setSelectedCarId] = useState(fleetData[0].id);
  const [days, setDays] = useState(1);

  const selectedCar = fleetData.find(c => c.id === selectedCarId);
  const basePrice = selectedCar ? selectedCar.priceCOP : 0;
  const total = basePrice * days;

  return (
    <section className="py-16 px-6 md:px-12 max-w-[800px] mx-auto bg-zinc-950 border border-white/5 rounded-xl my-10">
      <div className="text-center mb-8">
        <span className="text-[0.7rem] text-primary uppercase tracking-[4px] font-bold block mb-2">COTIZADOR</span>
        <h2 className="text-xl font-extrabold uppercase tracking-[1px] text-white">CALCULA TU TARIFA EN VIVO</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-[0.7rem] font-bold uppercase tracking-[2px] text-muted-foreground mb-2">Selecciona el Vehículo</label>
          <select value={selectedCarId} onChange={(e) => setSelectedCarId(e.target.value)}
            className="w-full bg-black border border-white/10 px-4 py-3 text-[0.8rem] font-medium text-white rounded focus:outline-none focus:border-primary">
            {fleetData.map(car => (
              <option key={car.id} value={car.id}>{car.name} — ({formatPrice(car.priceCOP)}/Día)</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[0.7rem] font-bold uppercase tracking-[2px] text-muted-foreground mb-2">Días de Alquiler: <span className="text-white font-black">{days}</span></label>
          <input type="range" min="1" max="30" value={days} onChange={(e) => setDays(Number(e.target.value))}
            className="w-full accent-primary bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer" />
        </div>

        <div className="p-6 bg-black border border-white/5 rounded-lg font-mono text-[0.8rem] flex justify-between items-center">
          <span className="text-white font-bold uppercase tracking-[1px]">TOTAL ESTIMADO:</span>
          <span className="text-primary font-black text-lg">{formatPrice(total)}</span>
        </div>
      </div>
    </section>
  );
}
