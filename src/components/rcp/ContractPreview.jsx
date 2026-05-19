import React from 'react';

export default function ContractPreview({ isOpen, onClose, vehicle, days, clientName }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm" onClick={onClose}>
      <div className="relative max-w-[650px] w-full bg-zinc-950 border border-white/10 rounded-lg flex flex-col max-h-[85vh] shadow-2xl" onClick={e => e.stopPropagation()}>
        
        <div className="p-5 border-b border-white/5 flex justify-between items-center bg-zinc-900">
          <h3 className="text-white font-bold text-[0.85rem] uppercase tracking-[1px]">📜 MINUTA CONTRACTUAL PRE-ESTABLECIDA</h3>
          <button onClick={onClose} className="text-white/40 hover:text-white text-lg cursor-pointer bg-transparent border-none">✕</button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 font-mono text-[0.7rem] text-muted-foreground leading-relaxed bg-black/40">
          <p className="text-white font-bold border-b border-white/5 pb-2 uppercase tracking-[0.5px]">CONTRATO DE ALQUILER DE VEHÍCULO AUTOMOTOR</p>
          <p>
            CONTRATANTE: <span className="text-white font-bold uppercase">{clientName}</span><br />
            VEHÍCULO ASIGNADO: <span className="text-white font-bold uppercase">{vehicle?.name || 'Gama Alta'}</span><br />
            VIGENCIA DEL SERVICIO: <span className="text-white font-bold">{days} días comerciales</span>.
          </p>
          <p>
            <span className="text-white font-bold">CLÁUSULA PRIMERA — OBJETO:</span> El presente documento legal certifica la entrega del vehículo en perfectas condiciones técnico-mecánicas para uso exclusivo urbano en el departamento de Antioquia.
          </p>
          <p>
            <span className="text-white font-bold">CLÁUSULA SEGUNDA — DEVOLUCIÓN:</span> El usuario se compromete a retornar el automotor con el mismo nivel de combustible pactado y en la fecha exacta establecida por la gerencia de despachos.
          </p>
          <p>
            <span className="text-white font-bold">SITUACIÓN SUCESIÓN / FIRMAS COMERCIALES:</span><br />
            <span className="text-red-400 font-bold uppercase">⚠️ Eduardo falleció y la firma autorizada es de Carmen cuando salga la respectiva resolución de la sucesión de bienes.</span>
          </p>
        </div>

        <div className="p-4 border-t border-white/5 flex justify-end bg-zinc-900">
          <button onClick={onClose} className="px-6 py-2.5 bg-white text-black font-black text-[0.7rem] uppercase tracking-[1px] rounded hover:bg-primary hover:text-white transition-all cursor-pointer border-none">
            Aceptar Términos Legales
          </button>
        </div>
      </div>
    </div>
  );
}
