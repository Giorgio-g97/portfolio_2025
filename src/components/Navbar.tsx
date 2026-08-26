"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Competenze", href: "#skills" },
  { label: "Progetti", href: "#projects" },
  { label: "Contatti", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-[#101a20]/40 px-4 py-3 backdrop-blur-md sm:px-6">
        <Link href="/" className="flex items-center gap-3 text-sm font-medium text-white sm:text-base">
          <Image src="/logo_ai.png" width={40} height={40} alt="Giorgio Logo" className="h-8 w-8 rounded-full object-cover sm:h-9 sm:w-9" />
          <span>Giorgio</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white">{item.label}</Link>)}
        </div>
        <div className="hidden lg:block"><Button asChild className="h-10 bg-white px-5 text-[#172127] shadow-none hover:bg-[#dbe8eb] hover:text-[#172127]"><Link href="https://calendly.com/giorgio-g97/30min" target="_blank">Prenota Call</Link></Button></div>
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild><Button variant="ghost" size="icon" className="h-10 w-10 text-white hover:bg-white/10 hover:text-white"><MdMenu className="text-2xl" /></Button></SheetTrigger>
            <SheetContent className="border-white/10 bg-[#101a20] text-white">
              <SheetHeader><SheetTitle className="text-left text-white">Menu</SheetTitle></SheetHeader>
              <div className="mt-12 flex flex-col gap-3">
                {navItems.map((item) => <SheetTrigger key={item.href} asChild><Link href={item.href} className="rounded-xl px-4 py-3 text-lg text-white/70 transition hover:bg-white/10 hover:text-white">{item.label}</Link></SheetTrigger>)}
                <Button asChild className="mt-5 bg-white text-[#172127] hover:bg-[#dbe8eb]"><Link href="https://calendly.com/giorgio-g97/30min" target="_blank">Prenota Call</Link></Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
