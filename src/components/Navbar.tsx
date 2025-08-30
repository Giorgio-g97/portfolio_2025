"use client";
import type React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const navItems = [
    {
      label: "Competenze",
      href: "#skills",
    },
    {
      label: "Progetti",
      href: "#projects",
    },
    {
      label: "Contatti",
      href: "#contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-tertiary">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center h-16 sm:h-20">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_ai.png"
            width={50}
            height={50}
            alt="Giorgio Logo"
            className="rounded-full w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-secondary hover:text-primary transition-colors duration-300 font-medium text-sm tracking-wide"
            >
              {item.label}
            </Link>
          ))}
          <Button className="bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-full font-medium text-sm tracking-wide transition-all duration-300">
            <Link href="https://calendly.com/giorgio-g97/30min" target="_blank">
              Prenota Call
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary hover:bg-tertiary"
              >
                <MdMenu className="text-xl" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white border-l border-tertiary">
              <SheetHeader>
                <SheetTitle className="text-primary text-xl font-bold">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-8 mt-12">
                {navItems.map((item, index) => (
                  <SheetTrigger key={index} asChild>
                    <Link
                      href={item.href}
                      className="text-lg text-secondary hover:text-primary transition-colors font-medium"
                    >
                      {item.label}
                    </Link>
                  </SheetTrigger>
                ))}

                <Button className="bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-full font-medium text-sm tracking-wide transition-all duration-300">
            <Link href="https://calendly.com/giorgio-g97/30min" target="_blank">
              Prenota Call
            </Link>
          </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
