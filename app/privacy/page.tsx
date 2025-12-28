'use client';

import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
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
          Politica de Confidențialitate
        </h1>
        
        <div className="prose prose-invert prose-zinc max-w-none space-y-8">
          <p className="text-lg text-zinc-600">
            Ultima actualizare: Decembrie 2025
          </p>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-zinc-900">1. Operator de Date</h2>
            <p className="text-zinc-600">
              <strong className="text-zinc-900">S.C. AMIDAMARU S.R.L.</strong>, operator de date cu caracter personal, 
              cu sediul în Str. Centura Nord Km 541+150 (DN 7), Arad, România, înregistrată la Registrul 
              Comerțului sub nr. <strong className="text-zinc-900">J02/623/2006</strong>, cod fiscal <strong className="text-zinc-900">RO18556425</strong>, 
              este responsabilă de prelucrarea datelor dvs. cu caracter personal pe care le colectăm direct de la dvs. sau din alte surse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-zinc-900">2. Date Personale Colectate</h2>
            <p className="text-zinc-600 mb-4">
              Prin intermediul formularului de contact de pe acest website, colectăm următoarele date personale:
            </p>
            <ul className="list-disc list-inside text-zinc-600 space-y-2">
              <li>Nume și prenume</li>
              <li>Adresă de email</li>
              <li>Număr de telefon (opțional)</li>
              <li>Mesajul dvs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-zinc-900">3. Scopul Prelucrării</h2>
            <p className="text-zinc-600">
              Datele personale sunt colectate și prelucrate în scopul:
            </p>
            <ul className="list-disc list-inside text-zinc-600 space-y-2 mt-4">
              <li>Răspunsului la solicitările și întrebările dvs.</li>
              <li>Furnizării de oferte și informații despre serviciile noastre de transport</li>
              <li>Comunicării în legătură cu potențiale colaborări</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-zinc-900">4. Temeiul Legal</h2>
            <p className="text-zinc-600">
              Prelucrarea datelor dvs. personale se bazează pe:
            </p>
            <ul className="list-disc list-inside text-zinc-600 space-y-2 mt-4">
              <li><strong className="text-zinc-900">Consimțământul dvs.</strong> - prin completarea și trimiterea formularului de contact</li>
              <li><strong className="text-zinc-900">Interesul nostru legitim</strong> - de a răspunde solicitărilor și de a dezvolta relații comerciale</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-zinc-900">5. Durata Stocării</h2>
            <p className="text-zinc-600">
              Datele personale sunt păstrate pe o perioadă de maxim 3 ani de la ultima interacțiune, 
              sau până la retragerea consimțământului, în funcție de care eveniment survine primul.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-zinc-900">6. Drepturile Dvs.</h2>
            <p className="text-zinc-600 mb-4">
              În conformitate cu GDPR, aveți următoarele drepturi:
            </p>
            <ul className="list-disc list-inside text-zinc-600 space-y-2">
              <li><strong className="text-zinc-900">Dreptul de acces</strong> - să solicitați informații despre datele prelucrate</li>
              <li><strong className="text-zinc-900">Dreptul la rectificare</strong> - să solicitați corectarea datelor inexacte</li>
              <li><strong className="text-zinc-900">Dreptul la ștergere</strong> - să solicitați ștergerea datelor</li>
              <li><strong className="text-zinc-900">Dreptul la restricționare</strong> - să solicitați limitarea prelucrării</li>
              <li><strong className="text-zinc-900">Dreptul la portabilitate</strong> - să primiți datele într-un format structurat</li>
              <li><strong className="text-zinc-900">Dreptul de opoziție</strong> - să vă opuneți prelucrării</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-zinc-900">7. Terțe Părți</h2>
            <p className="text-zinc-600">
              Nu oferim informații unor părți terțe fără a vă informa în prealabil. 
              Datele pot fi partajate doar cu furnizori de servicii (ex: servicii de email) 
              care respectă cerințele GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-zinc-900">8. Contact</h2>
            <p className="text-zinc-600">
              Pentru exercitarea drepturilor sau întrebări privind prelucrarea datelor, ne puteți contacta:
            </p>
            <ul className="list-none text-zinc-600 space-y-2 mt-4">
              <li><strong className="text-zinc-900">Email:</strong> office@amidamaru.ro</li>
              <li><strong className="text-zinc-900">Telefon:</strong> +40 728 174 730</li>
              <li><strong className="text-zinc-900">Adresă:</strong> Str. Centura Nord Km 541+150 (DN 7), Arad, România</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-zinc-900">9. Autoritatea de Supraveghere</h2>
            <p className="text-zinc-600">
              Aveți dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a 
              Prelucrării Datelor cu Caracter Personal (ANSPDCP) dacă considerați că drepturile 
              dvs. au fost încălcate.
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

