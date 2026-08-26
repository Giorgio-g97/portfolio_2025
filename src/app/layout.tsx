import type React from "react";
import { DM_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import Whatsapp from "@/components/Whatsapp";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-dm-sans" });
export const metadata: Metadata = { title: "Giorgio - Sviluppatore Web Full Stack", description: "Portfolio di Giorgio, Sviluppatore Web Full Stack specializzato in React, Next.js e Node.js" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="it" suppressHydrationWarning className="scroll-smooth"><body className={`${dmSans.className} bg-[#0b1117] text-white`}><Navbar /><main>{children}</main><Toaster /><Footer /><Whatsapp /></body></html>; }
