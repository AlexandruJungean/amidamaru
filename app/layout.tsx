import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Nunito } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./LanguageContext";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const nunito = Nunito({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

// Viewport configuration (separate from metadata in Next.js 14+)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#D32027",
};

export const metadata: Metadata = {
  // Basic Meta
  title: {
    default: "AMIDAMARU | Transport Internațional Mărfuri - Arad",
    template: "%s | AMIDAMARU Transport",
  },
  description:
    "S.C. AMIDAMARU S.R.L. - Transport rutier internațional de mărfuri din Arad, România. Flotă modernă Volvo, servicii profesionale în Europa. ☎️ +40 728 174 730",
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
  
  // Icons configuration (Apple touch icon, favicons)
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },

  
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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
    canonical: "https://amidamaru.ro/",
    languages: {
      "ro-RO": "https://amidamaru.ro/",
      "en-US": "https://amidamaru.ro/",
      "de-DE": "https://amidamaru.ro/",
      "fr-FR": "https://amidamaru.ro/",
      "it-IT": "https://amidamaru.ro/",
      "es-ES": "https://amidamaru.ro/",
      "cs-CZ": "https://amidamaru.ro/",
      "pl-PL": "https://amidamaru.ro/",
      "hu-HU": "https://amidamaru.ro/",
    },
  },

  // Format detection
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
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
  image: "https://amidamaru.ro/og-image.png",
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
    <html lang="ro">
      <head>
        {/* Charset encoding - fixes SEO warning */}
        <meta charSet="UTF-8" />
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://flagcdn.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${bebasNeue.variable} ${nunito.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
