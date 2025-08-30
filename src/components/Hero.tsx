"use client";
import type React from "react";
import Image from "next/image";
import Button from "./Button";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 order-2 lg:order-1">
            {/* Stats */}
            <div className="flex items-center space-x-8 sm:space-x-12 text-sm text-secondary">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">+200</div>
                <div className="tracking-wide text-xs sm:text-sm">Progetti completati</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">+50</div>
                <div className="tracking-wide text-xs sm:text-sm">Clienti soddisfatti</div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-hero-responsive font-bold text-primary leading-tight animate-fade-in-up">
                Ciao
              </h1>
              <p className="text-base sm:text-lg text-secondary leading-relaxed animate-fade-in-up animation-delay-200 max-w-md">
                — Sono Giorgio, un design wizard
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <h2 className="text-xl sm:text-2xl font-bold text-primary">
                Sviluppatore Web Full Stack
              </h2>
              <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-lg">
                Trasformo visioni digitali in realtà tangibili. Con una solida
                esperienza in React, Next.js e Node.js, sono il ponte tra creatività
                e tecnologia che il tuo team sta cercando.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <Button href="#projects" className="bg-primary text-white hover:bg-primary/90 px-6 sm:px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300 text-center">
                Esplora i Progetti
              </Button>
              <Button 
                href="#contact" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300 text-center"
              >
                Contattami
              </Button>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in-up animation-delay-800">
              <SocialLinks />
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up animation-delay-800">
              <div className="text-secondary text-sm tracking-wide">
                Scroll down ↓
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-tertiary rounded-2xl transform rotate-3 hidden sm:block"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-sm sm:max-w-none mx-auto">
                <Image
                  src="/hero.jpg"
                  alt="Giorgio"
                  width={500}
                  height={600}
                  className="object-cover w-full h-[400px] sm:h-[500px] lg:h-[600px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}