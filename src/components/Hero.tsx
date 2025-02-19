"use client";
import type React from "react";
import Image from "next/image";
import Button from "./Button";
import SocialLinks from "./SocialLinks";
import { FaCode, FaLaptop, FaMobileAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-20"
      aria-labelledby="hero-title"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full filter blur-3xl"></div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1545184180-25d471fe75eb?q=80&w=1861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <div className="flex justify-center md:justify-start space-x-4 animate-fade-in-up animation-delay-600">
            <Button href="#projects">Esplora i Progetti</Button>
            <Button href="#contact" variant="outline">
              Contattami
            </Button>
          </div>
          <div className="mt-8 animate-fade-in-up animation-delay-800">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
