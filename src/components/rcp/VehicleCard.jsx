import React, { useState } from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import VehicleGalleryModal from './VehicleGalleryModal';

export default function VehicleCard({ car }) {
  const { lang, formatPrice, getCurrencyPrice } = useLanguage();
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <>
      <div className="bg-zinc-950 border border-white/5 rounded-lg overflow-hidden flex flex-col h-full group relative transition-all duration-300 hover:border-primary/40">
        
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          <span className="bg-black/90 text-white border border-white/10 text-[0.6rem] font-black uppercase tracking-[1.5px] px-3 py-1 rounded">
            {car.categoryLabel[lang] || car.categoryLabel.es}
          </span>
        </div>

        <div className="w-full h-[220px] overflow-hidden relative cursor-pointer" onClick={() => setGalleryOpen(true)}>
          <img src={car.image} alt={car.name} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-102" />
        </div>

        <div className="p-6 flex flex-col flex-grow bg-zinc-950">
          <h3 className="text-white text-[1.1rem] font-black uppercase tracking-[0.5px] mb-2">{car.name}</h3>
          
          <div className="mb-4">
            <span className="text-primary text-[1.25rem] font-black">{formatPrice(car.priceCOP)}</span>
            <span className="text-muted-foreground text-[0.75rem]"> / Día</span>
          </div>

          <div className="grid grid-cols-2 gap-2 border-t border-white/5 pt-4 mb-6 text-[0.75rem] text-muted-foreground font-light">
            <div>🕹️ <span className="font-medium text-white/80">{car.transmission}</span></div>
            <div>⛽ <span className="font-medium text-white/80">{car.fuel}</span></div>
            <div>👥 <span className="font-medium text-white/80">{car.passengers} Pasajeros</span></div>
            <div>⚡ <span className="font-medium text-white/80">{car.hp}</span></div>
          </div>

          <a href="#reserva" className="mt-auto block w-full py-3 bg-transparent border border-white/10 text-white text-[0.7rem] font-black uppercase tracking-[2px] rounded text-center hover:bg-white hover:text-black transition-all">
            Reservar Ahora
          </a>
        </div>
      </div>

      <VehicleGalleryModal isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} vehicleName={car.name} vehicleImage={car.image} />
    </>
  );
}
