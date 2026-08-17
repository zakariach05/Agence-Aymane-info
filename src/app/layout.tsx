import type { Metadata } from "next";
import { Inter, Space_Grotesk, Anton } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "InfoAymane | Agence Marketing Digital Online",
  description: "Agence de marketing digital au Maroc. Création web, design graphique, publicite en ligne.",
  icons: {
    icon: '/NV-image/logo-infoaymane.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${anton.variable} font-sans antialiased bg-background text-foreground`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
