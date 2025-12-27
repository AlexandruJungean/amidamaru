import type { Metadata } from "next";
import { Bebas_Neue, Rajdhani } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./LanguageContext";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMIDAMARU | International Transport - Arad, Romania",
  description:
    "S.C. AMIDAMARU S.R.L. - International road freight transport company from Arad, Romania. Modern fleet, professional services across Europe.",
  keywords:
    "transport, international transport, freight transport, Arad, Romania, trucks, logistics, TIR, Europe",
  openGraph: {
    title: "AMIDAMARU | International Transport",
    description: "International road freight transport company from Arad, Romania",
    locale: "en_US",
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
      <body className={`${bebasNeue.variable} ${rajdhani.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
