"use client";
import Button from "./Button";

type Service = {
  title: string;
  description: string;
  details: string;
};

const services: Service[] = [
  {
    title: "Landing page",
    description: "Pagina singola per promuovere un prodotto o servizio",
    details: "Ideale per campagne e conversioni rapide",
  },
  {
    title: "Sito vetrina",
    description:
      "4–5 pagine. Perfetto per liberi professionisti e attività locali",
    details: "Ristorante, parrucchiere, B&B e realtà locali",
  },
  {
    title: "E‑commerce",
    description: "Piccolo shop con 20–50 prodotti",
    details: "Pagamenti sicuri e gestione ordini semplificata",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-tertiary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-responsive font-bold text-primary mb-6">
              Servizi
            </h2>
            <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-4">
              Soluzioni su misura per far crescere il tuo business online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 mx-4 sm:mx-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-secondary leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-xs sm:text-sm text-secondary/80 leading-relaxed">
                      {service.details}
                    </p>
                  </div>
                  <div>
                    <Button
                      href="#contact"
                      className="bg-primary text-white hover:bg-primary/90 px-6 py-3 rounded-full font-medium tracking-wide transition-all duration-300 text-center w-full"
                    >
                      Contattami
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-secondary text-sm sm:text-base leading-relaxed mt-12 px-4">
            Tutti i pacchetti includono sito responsive, SEO base e assistenza iniziale.
          </p>
        </div>
      </div>
    </section>
  );
}


