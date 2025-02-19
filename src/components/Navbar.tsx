import type React from "react";
import Link from "next/link";
import {ThemeToggle} from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-background-dark/80 backdrop-filter backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-foreground dark:text-foreground-dark"
        >
          Giorgio
        </Link>
        <div className="flex items-center space-x-6">
          <Link
            href="#skills"
            className="text-foreground/80 dark:text-foreground-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors"
          >
            Competenze
          </Link>
          <Link
            href="#projects"
            className="text-foreground/80 dark:text-foreground-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors"
          >
            Progetti
          </Link>
          <Link
            href="#contact"
            className="text-foreground/80 dark:text-foreground-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors"
          >
            Contatti
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
