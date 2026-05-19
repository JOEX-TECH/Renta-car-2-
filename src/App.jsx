import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { LanguageProvider } from '@/lib/LanguageContext';
import Home from '@/pages/Home';

// Componente simple de escape por si entra a una ruta que no existe
const PageNotFound = () => (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-montserrat">
    <h1 className="text-4xl font-black text-primary mb-2">404</h1>
    <p className="text-xs tracking-[2px] uppercase text-zinc-500 mb-6">Página No Encontrada</p>
    <a href="/" className="px-4 py-2 border border-primary text-primary text-[0.7rem] font-bold uppercase tracking-[1px] hover:bg-primary hover:text-black transition-all">
      Volver al Inicio
    </a>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Toaster />
        </Router>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
