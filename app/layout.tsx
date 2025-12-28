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
  // Basic Meta
  title: {
    default: "AMIDAMARU | Transport Internațional de Mărfuri - Arad, România",
    template: "%s | AMIDAMARU Transport",
  },
  description:
    "S.C. AMIDAMARU S.R.L. - Transport rutier internațional de mărfuri din Arad, România. Flotă modernă Volvo & Iveco, servicii profesionale în toată Europa. ☎️ +40 728 174 730",
  keywords: [
    "transport international",
    "transport marfuri",
    "transport rutier",
    "transport Romania",
    "transport Europa",
    "transport Arad",
    "camione Volvo",
    "camione Iveco",
    "TIR Romania",
    "logistica",
    "freight transport",
    "road transport",
    "FTL transport",
    "LTL transport",
    "grupaj",
    "AMIDAMARU",
    "transport international Romania",
    "spedition",
  ],
  authors: [{ name: "S.C. AMIDAMARU S.R.L." }],
  creator: "S.C. AMIDAMARU S.R.L.",
  publisher: "S.C. AMIDAMARU S.R.L.",
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Manifest (icons are auto-detected from /app folder: favicon.ico, apple-touch-icon.png)
  manifest: "/site.webmanifest",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "ro_RO",
    alternateLocale: ["en_US", "de_DE", "fr_FR", "it_IT", "es_ES"],
    url: "https://amidamaru.ro",
    siteName: "AMIDAMARU Transport",
    title: "AMIDAMARU | Transport Internațional de Mărfuri",
    description:
      "Transport rutier internațional de mărfuri din Arad, România. Flotă modernă, servicii profesionale în toată Europa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AMIDAMARU Transport - Flotă de camioane Volvo",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "AMIDAMARU | Transport Internațional de Mărfuri",
    description:
      "Transport rutier internațional din Arad, România. Flotă modernă Volvo & Iveco.",
    images: ["/og-image.jpg"],
  },

  // Verification (add your codes when you have them)
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },

  // Category
  category: "Transportation",

  // Other
  metadataBase: new URL("https://amidamaru.ro"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "ro": "/ro",
      "de": "/de",
      "fr": "/fr",
      "it": "/it",
      "es": "/es",
    },
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TransportCompany",
  name: "S.C. AMIDAMARU S.R.L.",
  alternateName: "AMIDAMARU Transport",
  description:
    "Transport rutier internațional de mărfuri din Arad, România. Servicii FTL, LTL și express în toată Europa.",
  url: "https://amidamaru.ro",
  logo: "https://amidamaru.ro/logo.png",
  image: "https://amidamaru.ro/og-image.jpg",
  telephone: "+40728174730",
  email: "office@amidamaru.ro",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Str. Centura Nord Km 541+150 (DN 7)",
    addressLocality: "Vladimirescu",
    addressRegion: "Arad",
    postalCode: "310410",
    addressCountry: "RO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.1900349,
    longitude: 21.3746448,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=100054305449281",
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 48.8566,
      longitude: 2.3522,
    },
    geoRadius: "3000",
  },
  serviceType: [
    "International Road Transport",
    "FTL - Full Truck Load",
    "LTL - Less Than Truck Load",
    "Express Delivery",
    "Logistics Solutions",
  ],
  founder: {
    "@type": "Organization",
    name: "S.C. AMIDAMARU S.R.L.",
  },
  foundingDate: "2006",
  taxID: "RO18556425",
  legalName: "S.C. AMIDAMARU S.R.L.",
  naics: "484121",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${bebasNeue.variable} ${rajdhani.variable} antialiased`}>
        <LanguageProvider>
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
