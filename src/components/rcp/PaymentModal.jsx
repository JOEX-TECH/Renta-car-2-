import React, { useState } from 'react';

export default function PaymentModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  if (!isOpen) return null;

  const cryptoAddress = "0x71C7656EC7ab88b098defB751B7401B5f6d1476B";

  const handleCopy = () => {
    navigator.clipboard.writeText(cryptoAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm" onClick={onClose}>
      <div className="relative max-w-[500px] w-full bg-zinc-950 border border-white/10 p-8 rounded-lg shadow-2xl text-center" onClick={e => e.stopPropagation()}>
        <div className="text-accent text-3xl mb-3">🛡️</div>
        <h3 className="text-white font-black text-[1.1rem] uppercase tracking-[1px] mb-2">PRE-AUTORIZACIÓN DE GARANTÍA</h3>
        <p className="text-muted-foreground text-[0.75rem] font-light leading-relaxed mb-6">
          Puedes respaldar tu depósito corporativo mediante pasarela tradicional o transferencia USDT (red ERC-20).
        </p>

        <div className="bg-black border border-white/5 p-4 rounded text-left font-mono text-[0.7rem] mb-6 space-y-2">
          <div className="text-muted-foreground uppercase tracking-[0.5px]">DIRECCIÓN DE COBERTURA USDT:</div>
          <div className="text-white bg-zinc-900 p-2.5 rounded overflow-x-auto break-all select-all border border-white/5 flex justify-between items-center gap-2">
            <span>{cryptoAddress}</span>
            <button onClick={handleCopy} className="text-primary hover:text-white font-bold uppercase text-[0.6rem] tracking-[0.5px] cursor-pointer bg-transparent border-none shrink-0">
              {copied ? 'Copied! ✓' : 'Copy'}
            </button>
          </div>
        </div>

        <button onClick={onClose} className="w-full py-3 bg-white text-black font-black text-[0.7rem] uppercase tracking-[2px] rounded hover:bg-primary hover:text-white transition-all cursor-pointer border-none">
          Cerrar Ventana de Seguridad
        </button>
      </div>
    </div>
  );
}
