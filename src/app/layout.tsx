import type React from "react";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import Whatsapp from "@/components/Whatsapp";
import Script from 'next/script';

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans"
});

export const metadata: Metadata = {
  title: "Giorgio - Sviluppatore Web Full Stack",
  description:
    "Portfolio di Giorgio, Sviluppatore Web Full Stack specializzato in React, Next.js e Node.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${dmSans.className} bg-white text-gray-900`}
      >
        {/* <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="ad8eca1d-5bdf-4e2e-b22f-29f1fc42c9de" type="text/javascript"></Script>
        <Script id="CookieDeclaration" src="https://consent.cookiebot.com/ad8eca1d-5bdf-4e2e-b22f-29f1fc42c9de/cd.js" type="text/javascript" async></Script> */}
        <Script type="text/javascript" src="https://embeds.iubenda.com/widgets/47a49fd8-7c0d-45cc-bd2c-f7a8333a0860.js"></Script>
        <Navbar />
        <main>{children}</main>
        <Toaster />
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
