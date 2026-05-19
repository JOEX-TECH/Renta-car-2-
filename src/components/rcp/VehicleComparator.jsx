import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { fleetData } from '@/lib/fleetData';

export default function VehicleComparator() {
  const { formatPrice } = useLanguage();
  const [carId1, setCarId1] = useState(fleetData[0].id);
  const [carId2, setCarId2] = useState(fleetData[1].id);

  const car1 = fleetData.find(c => c.id === carId1);
  const car2 = fleetData.find(c => c.id === carId2);

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto">
      <div className="text-center mb-12">
        <span className="text-[0.7rem] text-primary uppercase tracking-[4px] font-bold block mb-2">COMPARADOR</span>
        <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-[1px] text-white">COMPARA MODELOS VIP</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-white/5 bg-zinc-950/20 p-6 rounded-xl">
        <div className="space-y-4">
          <select value={carId1} onChange={(e) => setCarId1(e.target.value)}
            className="w-full bg-black border border-white/10 px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[1px] text-primary rounded focus:outline-none">
            {fleetData.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          {car1 && (
            <div className="space-y-2 text-[0.8rem] font-mono p-4 bg-black/40 rounded border border-white/5">
              <img src={car1.image} className="w-full h-40 object-cover rounded mb-4" />
              <div className="flex justify-between border-b border-white/5 pb-1"><span className="text-muted-foreground">PRECIO:</span><span className="text-white font-bold">{formatPrice(car1.priceCOP)}</span></div>
              <div className="flex justify-between border-b border-white/5 pb-1"><span className="text-muted-foreground">TRANSMISIÓN:</span><span className="text-white">{car1.transmission}</span></div>
              <div className="flex justify-between border-b border-white/5 pb-1"><span className="text-muted-foreground">COMBUSTIBLE:</span><span className="text-white">{car1.fuel}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">PASAJEROS:</span><span className="text-white">{car1.passengers}</span></div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <select value={carId2} onChange={(e) => setCarId2(e.target.value)}
            className="w-full bg-black border border-white/10 px-4 py-3 text-[0.8rem] font-bold uppercase tracking-[1px] text-accent rounded focus:outline-none">
            {fleetData.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          {car2 && (
            <div className="space-y-2 text-[0.8rem] font-mono p-4 bg-black/40 rounded border border-white/5">
              <img src={car2.image} className="w-full h-40 object-cover rounded mb-4" />
              <div className="flex justify-between border-b border-white/5 pb-1"><span className="text-muted-foreground">PRECIO:</span><span className="text-white font-bold">{formatPrice(car2.priceCOP)}</span></div>
              <div className="flex justify-between border-b border-white/5 pb-1"><span className="text-muted-foreground">TRANSMISIÓN:</span><span className="text-white">{car2.transmission}</span></div>
              <div className="flex justify-between border-b border-white/5 pb-1"><span className="text-muted-foreground">COMBUSTIBLE:</span><span className="text-white">{car2.fuel}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">PASAJEROS:</span><span className="text-white">{car2.passengers}</span></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
