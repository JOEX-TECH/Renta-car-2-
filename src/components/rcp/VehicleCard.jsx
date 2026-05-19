import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import VehicleGalleryModal from './VehicleGalleryModal';

export default function VehicleCard({ car }) {
  const { lang, formatPrice, getCurrencyPrice, t } = useLanguage();
  const [galleryOpen, setGalleryOpen] = useState(false);

  const isMaintenance = car.status === 'maintenance';

  return (
    <>
      <div className={`bg-white/[0.02] border border-white/5 rounded-lg overflow-hidden transition-all duration-500 hover:border-primary/30 flex flex-col group relative ${isMaintenance ? 'opacity-40 pointer-events-none grayscale' : ''}`}
           style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
        
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          <span className="bg-black/80 backdrop-blur-md text-white border border-white/10 text-[0.6rem] font-black uppercase tracking-[1.5px] px-3 py-1 rounded">
            {car.categoryLabel[lang] || car.categoryLabel.es}
          </span>
          {car.tag && (
            <span className="bg-accent text-black text-[0.55rem] font-black uppercase tracking-[1.5px] px-2.5 py-0.5 rounded shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              {car.tag}
            </span>
          )}
        </div>

        <div className="w-full h-[240px] overflow-hidden relative group-hover:cursor-pointer" onClick={() => setGalleryOpen(true)}>
          <img src={car.image} alt={car.name} className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-white text-[1.2rem] font-black uppercase tracking-[0.5px] mb-2">{car.name}</h3>
          
          <div className="mb-4">
            <span className="text-primary text-[1.3rem] font-black">{formatPrice(car.priceCOP)}</span>
            <span className="text-muted-foreground text-[0.75rem] font-light"> / {t.priceDay}</span>
            {lang !== 'es' && (
              <div className="text-accent text-[0.75rem] font-semibold mt-0.5 tracking-[0.5px]">
                {getCurrencyPrice(car.priceCOP)}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-y-2 gap-x-4 border-t border-white/5 pt-4 mb-6 text-[0.75rem] text-muted-foreground font-light">
            {car.transmission && <div>🕹️ <span className="font-medium text-white/80">{car.transmission}</span></div>}
            {car.fuel && <div>⛽ <span className="font-medium text-white/80">{car.fuel}</span></div>}
            <div>👥 <span className="font-medium text-white/80">{car.passengers} {lang === 'es' ? 'Pasajeros' : 'Passengers'}</span></div>
            {car.hp && <div>⚡ <span className="font-medium text-white/80">{car.hp}</span></div>}
            {car.engine && <div>🔧 <span className="font-medium text-white/80">{car.engine}</span></div>}
            {car.armor && <div>🛡️ <span className="font-medium text-white/80">{car.armor}</span></div>}
          </div>

          <div className="mt-auto">
            {isMaintenance ? (
              <button disabled className="w-full py-3 bg-white/10 text-white/40 text-[0.7rem] font-black uppercase tracking-[2px] rounded border border-transparent">
                {lang === 'es' ? 'En Taller' : 'In Workshop'}
              </button>
            ) : (
              <a href__="#reserva" className="block w-full py-3 bg-transparent border border-white/10 text-white text-[0.7rem] font-black uppercase tracking-[2px] rounded text-center transition-all duration-500 hover:bg-white hover:text-black hover:border-white">
                {lang === 'es' ? 'Reservar Ahora' : 'Book Now'}
              </a>
            )}
          </div>
        </div>
      </div>

      <VehicleGalleryModal isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} vehicleName={car.name} vehicleImage={car.image} />
    </>
  );
}
