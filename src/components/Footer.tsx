import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-primary py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Iniziamo a lavorare insieme
            </h3>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-4">
              Sono sempre aperto a nuove opportunità e collaborazioni interessanti
            </p>
          </div>
          
          <SocialLinks />
          
          <div className="pt-8 border-t border-white/20">
            <p className="text-white/50 text-sm tracking-wide">
              © {new Date().getFullYear()} Giorgio Guadagno. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}