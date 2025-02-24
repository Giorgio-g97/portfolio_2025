import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-background dark:bg-background-dark py-8">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <SocialLinks />
        <p className="mt-4 text-sm text-foreground/70 dark:text-foreground-dark/70">
          © {new Date().getFullYear()} Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
