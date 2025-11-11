import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barrio Amethysts | Premium Uruguayan Gemstones",
  description: "Handpicked amethysts and agates from the mines of Artigas, Uruguay. Now available in Dubai.",
  keywords: ["amethyst", "agate", "uruguay", "gemstones", "dubai", "artigas", "luxury gemstones"],
  openGraph: {
    title: "Barrio Amethysts | Premium Uruguayan Gemstones",
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
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
