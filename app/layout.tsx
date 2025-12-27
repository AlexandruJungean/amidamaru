import type { Metadata } from "next";
import { Bebas_Neue, Rajdhani } from "next/font/google";
import "./globals.css";

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
  title: "AMIDAMARU | Transport Internațional - Arad, România",
  description:
    "S.C. AMIDAMARU S.R.L. - Companie de transport rutier internațional de mărfuri din Arad, România. Flotă modernă, servicii profesionale în toată Europa.",
  keywords:
    "transport, transport internațional, transport mărfuri, Arad, România, camione, logistică, TIR",
  openGraph: {
    title: "AMIDAMARU | Transport Internațional",
    description: "Companie de transport rutier internațional de mărfuri din Arad, România",
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${bebasNeue.variable} ${rajdhani.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
