"use client";
import type React from "react";
import Image from "next/image";
import Button from "./Button";
import SocialLinks from "./SocialLinks";
import { FaCode, FaLaptop, FaMobileAlt } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-32"
      aria-labelledby="hero-title"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full filter blur-3xl"></div>
          <div className="relative">
            <Image
              src="/hero.jpg"
              alt="Giorgio"
              width={400}
              height={400}
              className="object-cover w-80 h-80 rounded-full shadow-lg animate-fade-in mx-auto"
            />
            <FaCode className="absolute top-0 left-0 text-4xl text-primary dark:text-primary-dark animate-bounce" />
            <FaLaptop className="absolute bottom-0 left-24 text-4xl text-secondary dark:text-secondary-dark animate-pulse" />
            <FaMobileAlt className="absolute top-1/4 right-5 text-4xl text-primary dark:text-primary-dark animate-bounce" />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up text-foreground dark:text-foreground-dark"
          >
            Ciao, sono{" "}
            <span className="text-primary dark:text-primary-dark">Giorgio</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/80 dark:text-foreground-dark/80 mb-6 animate-fade-in-up animation-delay-200">
            Sviluppatore Web Full Stack
          </h2>
          <p className="text-lg mb-8 animate-fade-in-up animation-delay-400 text-foreground/70 dark:text-foreground-dark/70">
            Trasformo visioni digitali in realtà tangibili. Con una solida
            esperienza in React, Next.js e Node.js, sono il ponte tra creatività
            e tecnologia che il tuo team sta cercando.
          </p>
          <div className="flex flex-wrap gap-7 justify-center md:justify-start space-x-4 animate-fade-in-up animation-delay-600">
            <Button href="#projects">Esplora i Progetti</Button>
            <Button href="#contact" variant="outline">
              Contattami
            </Button>
            <Link
              className="inline-flex items-center justify-center px-6 py-3 border rounded-full text-sm font-medium transition-all duration-300 bg-transparent text-foreground dark:text-foreground-dark border-current hover:bg-primary/10 dark:hover:bg-primary-dark/10 hover:scale-105"
              href="https://calendly.com/giorgio-g97/30min"
              target="_blank"
            >
              Prenota una call con me!
            </Link>
          </div>
          <div className="mt-8 animate-fade-in-up animation-delay-800">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
