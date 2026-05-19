import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <img src="/logo.jpeg" alt="RENTA CAR PREMIUM" className="h-9 w-auto object-contain" />
          <p className="text-muted-foreground text-[0.65rem] font-light uppercase tracking-[1px] mt-1">
            © {new Date().getFullYear()} Renta Car Premium. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
