"use client";
import type React from "react";
import Image from "next/image";
import Button from "./Button";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
// import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 order-2 lg:order-1">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-hero-responsive font-bold text-secondary leading-tight animate-fade-in-up">
                Aumento le vendite del tuo{" "}
                <span className="text-primary">business</span> con siti web che
                <span className="text-primary"> convertono</span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-6 animate-fade-in-up animation-delay-400">
              <h2 className="text-xl sm:text-2xl font-bold text-secondary">
                In 30–60 giorni trasformo i tuoi visitatori in clienti paganti
                con landing page, siti vetrina ed e‑commerce ottimizzati a
                performance.
              </h2>
            </div>

            {/* CTA Buttons */}
            <div className="pt-10 flex flex-col items-center sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <div className="flex gap-4">
                <Link href={"#projects"}>
                  <Button
                    variant="outline"
                    className="bg-[#2285ff] text-black hover:bg-primary/90 px-6 sm:px-8 py-3 rounded-full font-extrabold tracking-wide transition-all duration-300 text-center flex"
                  >
                    Esplora i Progetti
                  </Button>
                </Link>
              </div>

              <Link
                href="https://calendly.com/giorgio-g97/30min"
                target="_blank"
              >
                <Button className=" text-black hover:bg-primary/90 px-6 sm:px-8 py-3 rounded-full font-extrabold tracking-wide transition-all duration-300 text-center flex">
                  Prenota una Call
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-tertiary rounded-2xl transform rotate-12 hidden sm:block shadow-lg"></div>
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
