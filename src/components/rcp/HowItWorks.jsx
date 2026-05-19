import React from 'react'; [cite: 67]
import { useLanguage } from '@/lib/LanguageContext'; [cite: 67]

const steps = [
  { icon: '🚗', es: 'Elige tu vehículo', en: 'Choose your vehicle', it: 'Scegli il veicolo', de: 'Fahrzeug wählen', fr: 'Choisissez votre véhicule', desc: { es: 'Explora nuestra flota exclusiva y selecciona el auto de lujo perfecto para tu ocasión.', en: 'Browse our exclusive fleet and select the perfect luxury car for your occasion.', it: 'Sfoglia la nostra flotta exclusiva e scegli l\'auto di lusso perfetta.', de: 'Durchsuche unsere exklusive Flotte und wähle das perfekte Luxusauto.', fr: 'Parcourez notre flotte exclusive et choisissez la voiture de luxe parfaite.' } }, [cite: 68]
  { icon: '📋', es: 'Reserva en minutos', en: 'Book in minutes', it: 'Prenota in minuti', de: 'In Minuten buchen', fr: 'Réservez en minutes', desc: { es: 'Completa el formulario o contáctanos por WhatsApp. Confirmación inmediata 24/7.', en: 'Fill out the form or contact us on WhatsApp. Instant confirmation 24/7.', it: 'Compila il modulo o contattaci su WhatsApp. Conferma immediata 24/7.', de: 'Formular ausfüllen oder per WhatsApp kontaktieren. Sofortige Bestätigung 24/7.', fr: 'Remplissez le formulaire où contactez-nous sur WhatsApp. Confirmation immédiate 24/7.' } }, [cite: 69, 70, 71, 72, 73]
  { icon: '🚀', es: 'Entregamos donde estés', en: 'We deliver to you', it: 'Consegniamo da te', de: 'Wir liefern zu dir', fr: 'Nous livrons chez vous', desc: { es: 'Llevamos tu vehículo al aeropuerto, hotel o cualquier punto de Medellín sin costo adicional.', en: 'We bring your vehicle to the airport, hotel or anywhere in Medellín at no extra charge.', it: 'Portiamo il veicolo all\'aeroporto, hotel o ovunque a Medellín.', de: 'Wir bringen das Fahrzeug zum Flughafen, Hotel oder überall in Medellín.', fr: 'Nous amenons le véhicule à l\'aéroport, l\'hôtel ou n\'importe où à Medellín.' } }, [cite: 74]
  { icon: '✨', es: 'Disfruta sin límites', en: 'Enjoy without limits', it: 'Goditi senza limiti', de: 'Grenzenlos genießen', fr: 'Profitez sans limites', desc: { es: 'Vive la experiencia de conducir el mejor carro de lujo en Medellín con soporte 24/7.', en: 'Experience driving the best luxury car in Medellín with 24/7 support.', it: 'Vivi l\'esperienza di guidare la migliore auto di lusso a Medellín.', de: 'Erlebe das Fahren des besten Luxusautos in Medellín mit 24/7 Support.', fr: 'Vivez l\'expérience de conduire la meilleure voiture de luxe à Medellín.' } } [cite: 75]
];

export default function HowItWorks() {
  const { lang } = useLanguage(); [cite: 76]
  const titles = { es: 'CÓMO FUNCIONA', en: 'HOW IT WORKS', it: 'COME FUNZIONA', de: 'WIE ES FUNKTIONIERT', fr: 'COMMENT ÇA MARCHE' }; [cite: 77]
  const subs = { es: 'PROCESO SIMPLE', en: 'SIMPLE PROCESS', it: 'PROCESSO SEMPLICE', de: 'EINFACHER PROZESS', fr: 'PROCESSUS SIMPLE' }; [cite: 78]

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto"> [cite: 79]
      <div className="text-center mb-16">
        <span className="text-[0.7rem] text-primary uppercase tracking-[4px] font-bold block mb-3">{subs[lang]}</span>
        <h2 className="text-2xl md:text-[2.2rem] font-extrabold uppercase tracking-[1px] text-white">{titles[lang]}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="relative text-center group">
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent z-0" />
            )}
            <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full border border-primary/30 flex items-center justify-center text-2xl bg-black group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(255,0,0,0.2)] transition-all duration-500">
              {step.icon}
            </div>
            <div className="w-6 h-6 mx-auto mb-3 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[0.6rem] font-black text-primary">{i + 1}</div>
            <h3 className="text-white font-bold text-[0.9rem] uppercase tracking-[1px] mb-3">{step[lang] || step.es}</h3> [cite: 80]
            <p className="text-muted-foreground text-[0.8rem] leading-relaxed font-light">{step.desc[lang] || step.desc.es}</p> [cite: 80, 81]
          </div>
        ))}
      </div>
    </section>
  );
}
