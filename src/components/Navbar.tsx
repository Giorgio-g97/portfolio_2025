"use client";
import type React from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
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
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-background-dark/80 backdrop-filter backdrop-blur-sm">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold text-foreground dark:text-foreground-dark"
          >
            <Image src="/logo_ai.png" width={80} height={80} alt="logo" />
          </Link>
          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((n, i) => (
              <Link
                key={i}
                href={n.href}
                className="text-foreground/80 dark:text-foreground-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navbar */}
          <div className="md:hidden flex items-center space-x-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground dark:text-foreground-dark"
                >
                  <MdMenu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-right text-primary dark:text-primary-dark text-4xl mt-6">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-end space-y-10 mt-6">
                  {navItems.map((n, i) => (
                    <SheetTrigger key={i} asChild>
                      <Link
                        href={n.href}
                        className="text-3xl text-foreground/80 dark:text-foreground-dark/80 hover:text-primary dark:hover:text-primary-dark transition-colors"
                      >
                        {n.label}
                      </Link>
                    </SheetTrigger>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <ThemeToggle />
          </div>
        </nav>
      </header>
    </>
  );
}
