import React, { useState } from 'react';
import Navbar from '../components/rcp/Navbar';
import Hero from '../components/rcp/Hero';
import Services from '../components/rcp/Services';
import HowItWorks from '../components/rcp/HowItWorks';
import Fleet from '../components/rcp/Fleet';
import PriceCalculator from '../components/rcp/PriceCalculator';
import VehicleComparator from '../components/rcp/VehicleComparator';
import Promotions from '../components/rcp/Promotions';
import Reviews from '../components/rcp/Reviews';
import ReservationForm from '../components/rcp/ReservationForm';
import FAQ from '../components/rcp/FAQ';
import MapSection from '../components/rcp/MapSection';
import Footer from '../components/rcp/Footer';
import ChatBot from '../components/rcp/ChatBot';
import PaymentModal from '../components/rcp/PaymentModal';
import ContractPreview from '../components/rcp/ContractPreview';
import AdminPanel from '../components/rcp/AdminPanel';
import { fleetData } from '../lib/fleetData';

export default function Home() {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [contractOpen, setContractOpen] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen font-montserrat">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Fleet />
      <Promotions />
      <PriceCalculator />
      <VehicleComparator />
      
      <div className="flex flex-wrap justify-center gap-4 py-8 px-6 bg-black">
        <button onClick={() => setPaymentOpen(true)}
          className="px-6 py-3 border border-accent text-accent text-[0.75rem] font-bold uppercase tracking-[2px] rounded hover:bg-accent hover:text-black transition-all duration-500 cursor-pointer bg-transparent">
          Pre-autorizar Depósito de Garantía
        </button>
        <button onClick={() => setContractOpen(true)}
          className="px-6 py-3 border border-white/20 text-white text-[0.75rem] font-bold uppercase tracking-[2px] rounded hover:bg-white hover:text-black transition-all duration-500 cursor-pointer bg-transparent">
          Vista Previa de Contrato
        </button>
      </div>
   
      <Reviews />
      <ReservationForm />
      <FAQ />
      <MapSection />
      <Footer />
      <ChatBot />
      <AdminPanel />
      
      <PaymentModal isOpen={paymentOpen} onClose={() => setPaymentOpen(false)} />
      <ContractPreview isOpen={contractOpen} onClose={() => setContractOpen(false)} vehicle={fleetData[0]} days={3} clientName="Cliente VIP" />
    </div>
  );
}
