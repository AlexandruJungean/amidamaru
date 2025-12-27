'use client';

import Image from "next/image";
import Link from "next/link";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="bg-white/95 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Amidamaru Logo"
              width={160}
              height={45}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 font-display tracking-wide">
          Politica de Cookies
        </h1>
        
        <div className="prose prose-invert prose-zinc max-w-none space-y-8">
          <p className="text-lg text-zinc-600">
            Ultima actualizare: Decembrie 2025
          </p>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-zinc-900">1. Ce sunt cookie-urile?</h2>
            <p className="text-zinc-600">
              Cookie-urile sunt fișiere text de mici dimensiuni care sunt stocate pe dispozitivul dvs. 
              (computer, tabletă, telefon mobil) atunci când vizitați un website. Cookie-urile sunt 
              utilizate pe scară largă pentru a face website-urile să funcționeze mai eficient și 
              pentru a furniza informații proprietarilor site-ului.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-zinc-900">2. Cookie-uri utilizate pe acest website</h2>
            
            <div className="space-y-6 mt-4">
              <div className="p-4 bg-zinc-100 rounded-lg border border-zinc-200">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">Cookie-uri esențiale</h3>
                <p className="text-zinc-600 text-sm mb-2">
                  Aceste cookie-uri sunt necesare pentru funcționarea website-ului.
                </p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-2 text-zinc-600">Nume</th>
                      <th className="text-left py-2 text-zinc-600">Scop</th>
                      <th className="text-left py-2 text-zinc-600">Durată</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-600">
                    <tr>
                      <td className="py-2">amidamaru-language</td>
                      <td className="py-2">Stochează preferința de limbă</td>
                      <td className="py-2">Permanent (localStorage)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-zinc-100 rounded-lg border border-zinc-200">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">Cookie-uri terțe părți</h3>
                <p className="text-zinc-600 text-sm mb-2">
                  Următoarele servicii externe pot seta cookie-uri:
                </p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-2 text-zinc-600">Serviciu</th>
                      <th className="text-left py-2 text-zinc-600">Scop</th>
                      <th className="text-left py-2 text-zinc-600">Mai multe informații</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-600">
                    <tr>
                      <td className="py-2">Google Maps</td>
                      <td className="py-2">Afișarea hărții cu locația sediului</td>
                      <td className="py-2">
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#D32027] hover:underline">
                          Politica Google
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">Flagcdn.com</td>
                      <td className="py-2">Afișarea steagurilor pentru selector limbă</td>
                      <td className="py-2">
                        <a href="https://flagcdn.com" target="_blank" rel="noopener noreferrer" className="text-[#D32027] hover:underline">
                          flagcdn.com
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-zinc-900">3. Cum să gestionați cookie-urile</h2>
            <p className="text-zinc-600 mb-4">
              Puteți controla și/sau șterge cookie-urile după preferințe. Puteți șterge toate 
              cookie-urile care sunt deja pe computer și puteți seta majoritatea browserelor 
              să împiedice plasarea acestora.
            </p>
            <p className="text-zinc-600">
              Pentru mai multe informații despre gestionarea cookie-urilor în browser-ul dvs., 
              consultați documentația oficială:
            </p>
            <ul className="list-disc list-inside text-zinc-600 space-y-2 mt-4">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#D32027] hover:underline">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-[#D32027] hover:underline">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-[#D32027] hover:underline">
                  Microsoft Edge
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#D32027] hover:underline">
                  Safari
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-zinc-900">4. Consimțământ</h2>
            <p className="text-zinc-600">
              Prin continuarea navigării pe acest website, sunteți de acord cu utilizarea 
              cookie-urilor conform acestei politici. Dacă nu sunteți de acord, vă rugăm să 
              ajustați setările browser-ului sau să părăsiți website-ul.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-zinc-900">5. Contact</h2>
            <p className="text-zinc-600">
              Pentru întrebări privind utilizarea cookie-urilor, ne puteți contacta:
            </p>
            <ul className="list-none text-zinc-600 space-y-2 mt-4">
              <li><strong className="text-zinc-900">Email:</strong> office@amidamaru.ro</li>
              <li><strong className="text-zinc-900">Telefon:</strong> +40 728 174 730</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-zinc-900">6. Modificări</h2>
            <p className="text-zinc-600">
              Ne rezervăm dreptul de a modifica această politică de cookie-uri în orice moment. 
              Orice modificări vor fi publicate pe această pagină cu data actualizării.
            </p>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-zinc-200">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-[#D32027] hover:text-[#E53935] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Înapoi la pagina principală
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-50 border-t border-zinc-200 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-zinc-500 text-sm">
          © {new Date().getFullYear()} S.C. AMIDAMARU S.R.L. Toate drepturile rezervate.
        </div>
      </footer>
    </main>
  );
}

