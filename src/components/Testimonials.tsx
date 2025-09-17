"use client";

import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
  result?: string;
};

const testimonials: Testimonial[] = [
  // {
  //   name: "Padre Gianluca",
  //   role: "Parroco",
  //   company: "Parrocchia Sant'Antonio Foggia",
  //   quote:
  //     "In 2 mesi abbiamo aumentato le prenotazioni del 300% grazie al nuovo sito. I clienti ci trovano e prenotano con facilità.",
  //   image: "/window.svg",
  //   result: "+1.000 visualizzazioni in meno di un mese",
  // }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-responsive font-bold text-primary mb-6">
              Cosa dicono i clienti
            </h2>
            <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-4">
              Risultati reali da progetti concreti: performance, chiarezza e
              attenzione al business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 sm:gap-8 lg:gap-12">
            {testimonials.map((t, index) => (
              <div
                key={`${t.name}-${index}`}
                className="bg-tertiary rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {t.image ? (
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  ) : null}
                  <div>
                    <p className="text-primary font-semibold">{t.name}</p>
                    <p className="text-secondary text-sm">
                      {t.role} • {t.company}
                    </p>
                  </div>
                </div>
                <p className="text-secondary leading-relaxed mb-4">
                  “{t.quote}”
                </p>
                {t.result ? (
                  <p className="text-xs font-medium text-secondary/80 bg-white rounded-full inline-block px-3 py-1">
                    {t.result}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
