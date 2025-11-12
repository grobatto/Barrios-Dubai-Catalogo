'use client';

import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Barrios Amethysts | Premium Uruguayan Gemstones</title>
        <meta name="description" content="Handpicked amethysts and agates from the mines of Artigas, Uruguay. Now available in Dubai." />
        <meta name="keywords" content="amethyst,agate,uruguay,gemstones,dubai,artigas,luxury gemstones" />
        <meta property="og:title" content="Barrios Amethysts | Premium Uruguayan Gemstones" />
        <meta property="og:description" content="Handpicked amethysts and agates from the mines of Artigas, Uruguay. Now available in Dubai." />
        <meta property="og:type" content="website" />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {/* Skip to main content link for keyboard accessibility */}
          <a
            href="#main-content"
            className="absolute -top-full left-0 z-50 bg-primary-600 text-white px-4 py-2 focus:top-0"
            tabIndex={0}
          >
            Skip to main content
          </a>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
