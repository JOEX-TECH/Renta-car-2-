import React, { useState } from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { fleetData, WHATSAPP_LINK } from '../../lib/fleetData';

export default function ReservationForm() {
  const { t, formatPrice } = useLanguage();
  const [formData, setFormData] = useState({ car: fleetData[0].id, name: '', days: 1 });

  const selectedCar = fleetData.find(c => c.id === formData.car);
  const totalCost = selectedCar ? selectedCar.priceCOP * formData.days : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `👋 ¡Hola! Me gustaría cotizar un vehículo VIP:%0A%0A• *Vehículo:* ${selectedCar?.name}%0A• *Nombre:* ${formData.name}%0A• *Días:* ${formData.days}%0A• *Total Estimado:* ${formatPrice(totalCost)}%0A%0A📌 Quedo atento a la confirmación de disponibilidad comercial.`;
    window.open(`${WHATSAPP_LINK}?text=${text}`, '_blank');
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-[900px] mx-auto" id="reserva">
      <div className="bg-zinc-950 border border-white/5 p-8 md:p-12 rounded-xl relative">
        
        <div className="text-center mb-10">
          <span className="text-[0.7rem] text-primary uppercase tracking-[4px] font-bold block mb-2">{t.form.sub}</span>
          <h2 className="text-2xl font-black uppercase tracking-[1px] text-white">{t.form.title}</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[0.65rem] font-black uppercase tracking-[2px] text-muted-foreground mb-2">Selecciona Flota</label>
              <select value={formData.car} onChange={e => setFormData({...formData, car: e.target.value})}
                className="w-full bg-black border border-white/10 px-4 py-3.5 text-[0.8rem] font-bold uppercase tracking-[1px] text-white rounded focus:outline-none focus:border-primary">
                {fleetData.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[0.65rem] font-black uppercase tracking-[2px] text-muted-foreground mb-2">{t.form.nameLabel}</label>
              <input type="text" required placeholder={t.form.namePlaceholder} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-black border border-white/10 px-4 py-3.5 text-[0.8rem] text-white rounded focus:outline-none focus:border-primary placeholder:text-white/20" />
            </div>
          </div>

          <div>
            <label className="block text-[0.65rem] font-black uppercase tracking-[2px] text-muted-foreground mb-2">{t.form.daysLabel}: <span className="text-primary font-black">{formData.days}</span></label>
            <input type="range" min="1" max="30" value={formData.days} onChange={e => setFormData({...formData, days: Number(e.target.value)})}
              className="w-full accent-primary bg-zinc-900 h-1 rounded-lg cursor-pointer" />
          </div>

          <button type="submit" className="w-full py-4 bg-primary text-black font-black text-[0.75rem] uppercase tracking-[3px] rounded hover:bg-white hover:text-black transition-all cursor-pointer border-none">
            {t.form.btn}
          </button>
        </form>
      </div>
    </section>
  );
}
