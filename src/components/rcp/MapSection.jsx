import React from 'react';

export default function MapSection() {
  return (
    <section className="w-full h-[450px] relative border-t border-b border-white/5 bg-zinc-950">
      <iframe 
        title="Luxury Operations Hub Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3687313881454!2d-75.56846152414732!3d6.214940526391483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1zM6KwMDknNTMuOCJOIDc1wrAzMyc1Ny4yIlc!5m2!1ses!2sco"
        className="w-full h-full grayscale opacity-70 filter invert contract-100"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute bottom-6 left-6 md:left-12 bg-black/90 backdrop-blur-md border border-white/10 p-5 rounded max-w-[320px] pointer-events-none">
        <div className="text-[0.6rem] text-primary font-black uppercase tracking-[2px] mb-1">OPERATIONS HUB</div>
        <h4 className="text-white font-bold text-[0.85rem] uppercase tracking-[0.5px] mb-2">EL POBLADO, MEDELLÍN</h4>
        <p className="text-muted-foreground text-[0.7rem] font-light leading-relaxed">
          Atención comercial prioritaria y entregas VIP coordinadas las 24 horas.
        </p>
      </div>
    </section>
  );
}
