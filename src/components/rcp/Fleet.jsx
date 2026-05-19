import React, { useState } from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { fleetData } from '../../lib/fleetData';
import VehicleCard from './VehicleCard';

export default function Fleet() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filteredFleet = fleetData.filter(car => {
    if (filter === 'all') return true;
    return car.category === filter;
  });

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto" id="flota">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <span className="text-[0.7rem] text-primary uppercase tracking-[4px] font-bold block mb-3">COLECCIÓN</span>
          <h2 className="text-2xl md:text-[2.2rem] font-extrabold uppercase tracking-[1px] text-white">{t.nav.fleet}</h2>
        </div>
        
        <select value={filter} onChange={(e) => setFilter(e.target.value)}
          className="bg-zinc-900 border border-white/10 px-4 py-2.5 text-[0.75rem] font-bold uppercase tracking-[1px] text-white rounded focus:outline-none focus:border-primary">
          <option value="all">🚗 Todos los Modelos</option>
          <option value="exotic">⚡ Deportivos Exóticos</option>
          <option value="suv">⛰️ SUVs Ejecutivas</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFleet.map(car => (
          <div key={car.id} id={car.id}>
            <VehicleCard car={car} />
          </div>
        ))}
      </div>
    </section>
  );
}
