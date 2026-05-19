import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { fleetData } from '@/lib/fleetData';
import VehicleCard from './VehicleCard';

export default function Fleet() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');

  const filteredFleet = fleetData.filter(car => {
    if (filter === 'all') return true;
    return car.category === filter;
  });

  const sortedFleet = [...filteredFleet].sort((a, b) => {
    if (sortOrder === 'low') return a.priceCOP - b.priceCOP;
    if (sortOrder === 'high') return b.priceCOP - a.priceCOP;
    return 0;
  });

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto" id="flota">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <span className="text-[0.7rem] text-primary uppercase tracking-[4px] font-bold block mb-3">{t.fleet.sub}</span>
          <h2 className="text-2xl md:text-[2.2rem] font-extrabold uppercase tracking-[1px] text-white">{t.fleet.title}</h2>
        </div>
        
        <div className="flex flex-wrap gap-4 w-full md:w-auto">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}
            className="bg-white/[0.03] border border-white/10 px-4 py-2.5 text-[0.75rem] font-bold uppercase tracking-[1px] text-white rounded focus:outline-none focus:border-primary transition-all">
            <option value="all">🚗 Todos</option>
            <option value="exotic">⚡ Exóticos</option>
            <option value="suv">⛰️ SUVs</option>
            <option value="sport">🏁 Sedán Sport</option>
          </select>

          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}
            className="bg-white/[0.03] border border-white/10 px-4 py-2.5 text-[0.75rem] font-bold uppercase tracking-[1px] text-white rounded focus:outline-none focus:border-primary transition-all">
            <option value="default">📊 Ordenar por</option>
            <option value="low">📉 Menor a Mayor Precio</option>
            <option value="high">📈 Mayor a Menor Precio</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedFleet.map(car => (
          <VehicleCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}
