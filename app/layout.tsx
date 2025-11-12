import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Barrios Amethysts | Premium Uruguayan Gemstones",
  description: "Handpicked amethysts and agates from the mines of Artigas, Uruguay. Now available in Dubai.",
  keywords: ["amethyst", "agate", "uruguay", "gemstones", "dubai", "artigas", "luxury gemstones"],
  openGraph: {
    title: "Barrios Amethysts | Premium Uruguayan Gemstones",
    description: "Handpicked amethysts and agates from the mines of Artigas, Uruguay. Now available in Dubai.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
