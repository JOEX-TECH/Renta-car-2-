iimport React from 'react';

export default function VehicleGalleryModal({ isOpen, onClose, vehicleName, vehicleImage }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={onClose}>
      <div className="relative max-w-[800px] w-full bg-zinc-950 border border-white/10 rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="p-4 border-b border-white/5 flex justify-between items-center bg-black">
          <h3 className="text-white font-bold text-[0.8rem] uppercase tracking-[1px]">{vehicleName} — HD Gallery</h3>
          <button onClick={onClose} className="text-white/60 hover:text-white text-md cursor-pointer bg-transparent border-none">✕</button>
        </div>
        <div className="p-2 bg-black flex items-center justify-center">
          <img src={vehicleImage} alt={vehicleName} className="max-w-full max-h-[65vh] object-contain rounded" />
        </div>
      </div>
    </div>
  );
}
