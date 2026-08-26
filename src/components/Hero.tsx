"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="relative isolate mx-3 mt-3 min-h-[calc(100vh-1.5rem)] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#17252d] px-4 pb-12 pt-28 sm:mx-8 sm:mt-8 sm:min-h-[calc(100vh-2rem)] sm:rounded-[2rem] sm:px-8 sm:pt-32 lg:mx-16">
      <Image src="/mygaia.png" alt="Giorgio" fill priority className="object-cover object-center opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,17,22,0.95)_0%,rgba(12,27,34,0.7)_48%,rgba(11,19,24,0.4)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,13,17,0.95)_0%,transparent_55%,rgba(7,13,17,0.3)_100%)]" />
      <div className="absolute left-1/2 top-1/2 hidden h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bcd1d6]/10 blur-3xl lg:block" />
      <div className="relative mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.7fr] lg:gap-20">
          <div className="max-w-2xl">
            <h1 className="text-hero-responsive text-white animate-fade-in-up">Ciao</h1>
            <p className="mt-5 max-w-xl text-2xl font-medium leading-tight text-white sm:text-3xl lg:text-4xl animate-fade-in-up animation-delay-200">Sono Giorgio, realizzo siti web e web app su misura</p>
            <div className="mt-6 max-w-lg animate-fade-in-up animation-delay-400">
              <h2 className="text-xl font-bold text-white sm:text-2xl">Sviluppatore Web Full Stack</h2>
              <p className="mt-3 text-base leading-relaxed text-white/70 sm:text-lg">Costruisco siti web moderni, performanti e su misura.</p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row animate-fade-in-up animation-delay-600">
              <Button href="#projects" className="w-full border border-white bg-white px-6 text-[#172127] shadow-none hover:bg-[#dbe8eb] hover:text-[#172127] sm:w-auto">Esplora i Progetti</Button>
              <Button href="#contact" variant="outline" className="w-full border-white/40 bg-white/10 px-6 text-white hover:border-white hover:bg-white hover:text-[#172127] sm:w-auto">Contattami</Button>
              <Button className="w-full border border-white/20 bg-white/10 px-6 text-white shadow-none hover:bg-white/20 sm:w-auto"><Link href="https://calendly.com/giorgio-g97/30min" target="_blank">Prenota una Call!</Link></Button>
            </div>
            <div className="mt-9 animate-fade-in-up animation-delay-800"><SocialLinks variant="dark" /></div>
          </div>
          <div className="hidden justify-end lg:flex">
            <div className="glass-panel w-full max-w-sm rounded-[2rem] p-5 shadow-2xl shadow-black/30">
              <div className="mb-12 flex items-center justify-between"><span className="h-2 w-2 rounded-full bg-[#c7d9df]" /><span className="h-9 w-9 rounded-full border border-white/20" /></div>
              <div className="h-36 rounded-[1.5rem] border border-white/10 bg-black/10" />
              <div className="mt-3 grid grid-cols-2 gap-3"><div className="h-20 rounded-2xl border border-white/10 bg-white/10" /><div className="h-20 rounded-2xl border border-white/10 bg-white/10" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
