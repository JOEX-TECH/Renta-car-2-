import React from 'react';

export default function Promotions() {
  return (
    <section className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto bg-black">
      <div className="text-center mb-12">
        <span className="text-[0.7rem] text-primary uppercase tracking-[4px] font-bold block mb-3">VIP BENEFITS</span>
        <h2 className="text-2xl font-extrabold uppercase tracking-[1px] text-white">PROMOCIONES EXCLUSIVAS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-white/5 bg-zinc-950 p-8 rounded-lg">
          <span className="text-accent border border-accent/20 bg-accent/5 text-[0.6rem] font-black px-2.5 py-1 rounded uppercase mb-4 inline-block">-10% VIP</span>
          <h3 className="text-white font-bold text-[1rem] uppercase tracking-[0.5px] mb-2">Alquiler Semanal</h3>
          <p className="text-muted-foreground text-[0.8rem] font-light leading-relaxed">Obtén un 10% de descuento automático en alquileres superiores a 7 días corporativos.</p>
        </div>
        <div className="border border-white/5 bg-zinc-950 p-8 rounded-lg">
          <span className="text-accent border border-accent/20 bg-accent/5 text-[0.6rem] font-black px-2.5 py-1 rounded uppercase mb-4 inline-block">FREE</span>
          <h3 className="text-white font-bold text-[1rem] uppercase tracking-[0.5px] mb-2">Entrega en Aeropuerto</h3>
          <p className="text-muted-foreground text-[0.8rem] font-light leading-relaxed">Te entregamos y recogemos el vehículo en el Aeropuerto JMC de Rionegro sin ningún costo.</p>
        </div>
      </div>
    </section>
  );
}
