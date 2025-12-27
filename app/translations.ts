export type Language = 'en' | 'ro' | 'de' | 'fr' | 'it' | 'es' | 'cs' | 'pl' | 'hu';

export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const languages: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'ro', name: 'Romanian', nativeName: 'Română', flag: '🇷🇴' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'cs', name: 'Czech', nativeName: 'Čeština', flag: '🇨🇿' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
  { code: 'hu', name: 'Hungarian', nativeName: 'Magyar', flag: '🇭🇺' },
];

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.fleet': 'Our Fleet',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'INTERNATIONAL FREIGHT TRANSPORT',
    'hero.subtitle': 'Professional road transport services across Europe',
    'hero.description': 'With a modern fleet and years of experience, we deliver your cargo safely and on time to any destination in Europe.',
    'hero.cta.quote': 'Request Quote',
    'hero.cta.contact': 'Contact Us',
    
    // About Section
    'about.title': 'ABOUT AMIDAMARU',
    'about.subtitle': 'Your trusted partner in international transport',
    'about.description': 'S.C. AMIDAMARU S.R.L. is a professional freight transport company based in Arad, Romania. We specialize in international road transport, offering reliable and efficient logistics solutions across Europe.',
    'about.experience': 'Years of Experience',
    'about.countries': 'European Countries',
    'about.trucks': 'Modern Trucks',
    'about.deliveries': 'Successful Deliveries',
    
    // Services Section
    'services.title': 'OUR SERVICES',
    'services.subtitle': 'Comprehensive transport solutions tailored to your needs',
    'services.ftl.title': 'Full Truck Load (FTL)',
    'services.ftl.description': 'Complete truck dedicated to your cargo. Ideal for large shipments requiring exclusive transport.',
    'services.ltl.title': 'Less Than Truck Load (LTL)',
    'services.ltl.description': 'Cost-effective solution for smaller shipments. Share truck space and reduce costs.',
    'services.express.title': 'Express Delivery',
    'services.express.description': 'Time-critical shipments delivered with priority. Fast and reliable express transport services.',
    'services.logistics.title': 'Logistics Solutions',
    'services.logistics.description': 'End-to-end logistics management including warehousing, distribution, and supply chain optimization.',
    
    // Fleet Section
    'fleet.title': 'OUR FLEET',
    'fleet.subtitle': 'Modern vehicles for safe and efficient transport',
    'fleet.description': 'Our fleet consists of modern Volvo and Iveco trucks equipped with the latest technology for tracking and temperature control. All vehicles meet Euro 6 emission standards.',
    
    // Contact Section
    'contact.title': 'CONTACT US',
    'contact.subtitle': 'Get in touch for a free quote',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Working Hours',
    'contact.info.hours.value': 'Mon - Fri: 8:00 - 18:00',
    
    // Company Details
    'company.title': 'COMPANY DETAILS',
    'company.name': 'Company Name',
    'company.cui': 'Tax ID (CUI)',
    'company.regcom': 'Trade Register',
    'company.address': 'Registered Address',
    'company.address.value': 'Str. Iulia, Nr. 2, Arad, Vladimirescu, Romania',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.cookies': 'Cookie Policy',
    
    // Map
    'map.title': 'FIND US',
    'map.subtitle': 'Visit our headquarters in Arad',
  },
  
  ro: {
    // Navigation
    'nav.home': 'Acasă',
    'nav.about': 'Despre Noi',
    'nav.services': 'Servicii',
    'nav.fleet': 'Flota Noastră',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'TRANSPORT INTERNAȚIONAL DE MĂRFURI',
    'hero.subtitle': 'Servicii profesionale de transport rutier în toată Europa',
    'hero.description': 'Cu o flotă modernă și ani de experiență, livrăm marfa dumneavoastră în siguranță și la timp în orice destinație din Europa.',
    'hero.cta.quote': 'Cere Ofertă',
    'hero.cta.contact': 'Contactează-ne',
    
    // About Section
    'about.title': 'DESPRE AMIDAMARU',
    'about.subtitle': 'Partenerul tău de încredere în transport internațional',
    'about.description': 'S.C. AMIDAMARU S.R.L. este o companie profesională de transport de mărfuri cu sediul în Arad, România. Suntem specializați în transport rutier internațional, oferind soluții logistice fiabile și eficiente în toată Europa.',
    'about.experience': 'Ani de Experiență',
    'about.countries': 'Țări Europene',
    'about.trucks': 'Camioane Moderne',
    'about.deliveries': 'Livrări Reușite',
    
    // Services Section
    'services.title': 'SERVICIILE NOASTRE',
    'services.subtitle': 'Soluții complete de transport adaptate nevoilor tale',
    'services.ftl.title': 'Transport Complet (FTL)',
    'services.ftl.description': 'Camion complet dedicat mărfii tale. Ideal pentru transporturi mari care necesită transport exclusiv.',
    'services.ltl.title': 'Transport Grupaj (LTL)',
    'services.ltl.description': 'Soluție economică pentru transporturi mai mici. Împarte spațiul camionului și reduce costurile.',
    'services.express.title': 'Livrare Express',
    'services.express.description': 'Transporturi urgente livrate cu prioritate. Servicii de transport express rapide și fiabile.',
    'services.logistics.title': 'Soluții Logistice',
    'services.logistics.description': 'Management logistic complet incluzând depozitare, distribuție și optimizarea lanțului de aprovizionare.',
    
    // Fleet Section
    'fleet.title': 'FLOTA NOASTRĂ',
    'fleet.subtitle': 'Vehicule moderne pentru transport sigur și eficient',
    'fleet.description': 'Flota noastră este formată din camioane moderne Volvo și Iveco echipate cu cele mai noi tehnologii de urmărire și control al temperaturii. Toate vehiculele respectă standardele de emisii Euro 6.',
    
    // Contact Section
    'contact.title': 'CONTACTEAZĂ-NE',
    'contact.subtitle': 'Ia legătura cu noi pentru o ofertă gratuită',
    'contact.form.name': 'Numele Tău',
    'contact.form.email': 'Adresa de Email',
    'contact.form.phone': 'Număr de Telefon',
    'contact.form.message': 'Mesajul Tău',
    'contact.form.submit': 'Trimite Mesaj',
    'contact.info.address': 'Adresă',
    'contact.info.phone': 'Telefon',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Program de Lucru',
    'contact.info.hours.value': 'Lun - Vin: 8:00 - 18:00',
    
    // Company Details
    'company.title': 'DETALII COMPANIE',
    'company.name': 'Denumire Firmă',
    'company.cui': 'Cod Fiscal (CUI)',
    'company.regcom': 'Registrul Comerțului',
    'company.address': 'Sediu Social',
    'company.address.value': 'Str. Iulia, Nr. 2, Arad, Comuna Vladimirescu, România',
    
    // Footer
    'footer.rights': 'Toate drepturile rezervate.',
    'footer.privacy': 'Politica de Confidențialitate',
    'footer.terms': 'Termeni și Condiții',
    'footer.cookies': 'Politica de Cookies',
    
    // Map
    'map.title': 'LOCAȚIA NOASTRĂ',
    'map.subtitle': 'Vizitează sediul nostru din Arad',
  },
  
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über Uns',
    'nav.services': 'Dienstleistungen',
    'nav.fleet': 'Unsere Flotte',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'INTERNATIONALER GÜTERTRANSPORT',
    'hero.subtitle': 'Professionelle Straßentransportdienste in ganz Europa',
    'hero.description': 'Mit einer modernen Flotte und jahrelanger Erfahrung liefern wir Ihre Fracht sicher und pünktlich an jeden Ort in Europa.',
    'hero.cta.quote': 'Angebot Anfordern',
    'hero.cta.contact': 'Kontaktieren Sie Uns',
    
    // About Section
    'about.title': 'ÜBER AMIDAMARU',
    'about.subtitle': 'Ihr zuverlässiger Partner im internationalen Transport',
    'about.description': 'S.C. AMIDAMARU S.R.L. ist ein professionelles Gütertransportunternehmen mit Sitz in Arad, Rumänien. Wir sind spezialisiert auf internationalen Straßentransport und bieten zuverlässige und effiziente Logistiklösungen in ganz Europa.',
    'about.experience': 'Jahre Erfahrung',
    'about.countries': 'Europäische Länder',
    'about.trucks': 'Moderne LKWs',
    'about.deliveries': 'Erfolgreiche Lieferungen',
    
    // Services Section
    'services.title': 'UNSERE DIENSTLEISTUNGEN',
    'services.subtitle': 'Umfassende Transportlösungen nach Ihren Bedürfnissen',
    'services.ftl.title': 'Komplettladung (FTL)',
    'services.ftl.description': 'Kompletter LKW für Ihre Fracht. Ideal für große Sendungen, die exklusiven Transport erfordern.',
    'services.ltl.title': 'Teilladung (LTL)',
    'services.ltl.description': 'Kostengünstige Lösung für kleinere Sendungen. Teilen Sie den LKW-Raum und reduzieren Sie Kosten.',
    'services.express.title': 'Expresslieferung',
    'services.express.description': 'Zeitkritische Sendungen mit Priorität geliefert. Schnelle und zuverlässige Expresstransportdienste.',
    'services.logistics.title': 'Logistiklösungen',
    'services.logistics.description': 'End-to-End Logistikmanagement einschließlich Lagerhaltung, Distribution und Supply-Chain-Optimierung.',
    
    // Fleet Section
    'fleet.title': 'UNSERE FLOTTE',
    'fleet.subtitle': 'Moderne Fahrzeuge für sicheren und effizienten Transport',
    'fleet.description': 'Unsere Flotte besteht aus modernen Volvo- und Iveco-LKWs, die mit der neuesten Technologie für Tracking und Temperaturkontrolle ausgestattet sind. Alle Fahrzeuge erfüllen die Euro 6 Emissionsstandards.',
    
    // Contact Section
    'contact.title': 'KONTAKTIEREN SIE UNS',
    'contact.subtitle': 'Kontaktieren Sie uns für ein kostenloses Angebot',
    'contact.form.name': 'Ihr Name',
    'contact.form.email': 'E-Mail-Adresse',
    'contact.form.phone': 'Telefonnummer',
    'contact.form.message': 'Ihre Nachricht',
    'contact.form.submit': 'Nachricht Senden',
    'contact.info.address': 'Adresse',
    'contact.info.phone': 'Telefon',
    'contact.info.email': 'E-Mail',
    'contact.info.hours': 'Öffnungszeiten',
    'contact.info.hours.value': 'Mo - Fr: 8:00 - 18:00',
    
    // Company Details
    'company.title': 'FIRMENDETAILS',
    'company.name': 'Firmenname',
    'company.cui': 'Steuer-ID (CUI)',
    'company.regcom': 'Handelsregister',
    'company.address': 'Firmensitz',
    'company.address.value': 'Str. Iulia, Nr. 2, Arad, Vladimirescu, Rumänien',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutzerklärung',
    'footer.terms': 'AGB',
    'footer.cookies': 'Cookie-Richtlinie',
    
    // Map
    'map.title': 'FINDEN SIE UNS',
    'map.subtitle': 'Besuchen Sie unseren Hauptsitz in Arad',
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.fleet': 'Notre Flotte',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'TRANSPORT INTERNATIONAL DE MARCHANDISES',
    'hero.subtitle': 'Services de transport routier professionnels à travers l\'Europe',
    'hero.description': 'Avec une flotte moderne et des années d\'expérience, nous livrons vos marchandises en toute sécurité et à temps vers toute destination en Europe.',
    'hero.cta.quote': 'Demander un Devis',
    'hero.cta.contact': 'Nous Contacter',
    
    // About Section
    'about.title': 'À PROPOS D\'AMIDAMARU',
    'about.subtitle': 'Votre partenaire de confiance dans le transport international',
    'about.description': 'S.C. AMIDAMARU S.R.L. est une entreprise professionnelle de transport de marchandises basée à Arad, Roumanie. Nous sommes spécialisés dans le transport routier international, offrant des solutions logistiques fiables et efficaces à travers l\'Europe.',
    'about.experience': 'Années d\'Expérience',
    'about.countries': 'Pays Européens',
    'about.trucks': 'Camions Modernes',
    'about.deliveries': 'Livraisons Réussies',
    
    // Services Section
    'services.title': 'NOS SERVICES',
    'services.subtitle': 'Solutions de transport complètes adaptées à vos besoins',
    'services.ftl.title': 'Chargement Complet (FTL)',
    'services.ftl.description': 'Camion complet dédié à votre cargaison. Idéal pour les gros envois nécessitant un transport exclusif.',
    'services.ltl.title': 'Groupage (LTL)',
    'services.ltl.description': 'Solution économique pour les petits envois. Partagez l\'espace du camion et réduisez les coûts.',
    'services.express.title': 'Livraison Express',
    'services.express.description': 'Envois urgents livrés en priorité. Services de transport express rapides et fiables.',
    'services.logistics.title': 'Solutions Logistiques',
    'services.logistics.description': 'Gestion logistique de bout en bout incluant entreposage, distribution et optimisation de la chaîne d\'approvisionnement.',
    
    // Fleet Section
    'fleet.title': 'NOTRE FLOTTE',
    'fleet.subtitle': 'Véhicules modernes pour un transport sûr et efficace',
    'fleet.description': 'Notre flotte se compose de camions Volvo et Iveco modernes équipés des dernières technologies de suivi et de contrôle de température. Tous les véhicules respectent les normes d\'émission Euro 6.',
    
    // Contact Section
    'contact.title': 'CONTACTEZ-NOUS',
    'contact.subtitle': 'Contactez-nous pour un devis gratuit',
    'contact.form.name': 'Votre Nom',
    'contact.form.email': 'Adresse Email',
    'contact.form.phone': 'Numéro de Téléphone',
    'contact.form.message': 'Votre Message',
    'contact.form.submit': 'Envoyer le Message',
    'contact.info.address': 'Adresse',
    'contact.info.phone': 'Téléphone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Heures d\'Ouverture',
    'contact.info.hours.value': 'Lun - Ven: 8h00 - 18h00',
    
    // Company Details
    'company.title': 'DÉTAILS DE L\'ENTREPRISE',
    'company.name': 'Nom de l\'Entreprise',
    'company.cui': 'Numéro Fiscal (CUI)',
    'company.regcom': 'Registre du Commerce',
    'company.address': 'Siège Social',
    'company.address.value': 'Str. Iulia, Nr. 2, Arad, Vladimirescu, Roumanie',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions Générales',
    'footer.cookies': 'Politique de Cookies',
    
    // Map
    'map.title': 'TROUVEZ-NOUS',
    'map.subtitle': 'Visitez notre siège à Arad',
  },
  
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Chi Siamo',
    'nav.services': 'Servizi',
    'nav.fleet': 'La Nostra Flotta',
    'nav.contact': 'Contatti',
    
    // Hero Section
    'hero.title': 'TRASPORTO MERCI INTERNAZIONALE',
    'hero.subtitle': 'Servizi di trasporto su strada professionali in tutta Europa',
    'hero.description': 'Con una flotta moderna e anni di esperienza, consegniamo le vostre merci in sicurezza e puntualmente in qualsiasi destinazione in Europa.',
    'hero.cta.quote': 'Richiedi Preventivo',
    'hero.cta.contact': 'Contattaci',
    
    // About Section
    'about.title': 'CHI È AMIDAMARU',
    'about.subtitle': 'Il vostro partner affidabile nel trasporto internazionale',
    'about.description': 'S.C. AMIDAMARU S.R.L. è un\'azienda professionale di trasporto merci con sede ad Arad, Romania. Siamo specializzati nel trasporto su strada internazionale, offrendo soluzioni logistiche affidabili ed efficienti in tutta Europa.',
    'about.experience': 'Anni di Esperienza',
    'about.countries': 'Paesi Europei',
    'about.trucks': 'Camion Moderni',
    'about.deliveries': 'Consegne Riuscite',
    
    // Services Section
    'services.title': 'I NOSTRI SERVIZI',
    'services.subtitle': 'Soluzioni di trasporto complete su misura per le vostre esigenze',
    'services.ftl.title': 'Carico Completo (FTL)',
    'services.ftl.description': 'Camion completo dedicato al vostro carico. Ideale per grandi spedizioni che richiedono trasporto esclusivo.',
    'services.ltl.title': 'Groupage (LTL)',
    'services.ltl.description': 'Soluzione economica per spedizioni più piccole. Condividete lo spazio del camion e riducete i costi.',
    'services.express.title': 'Consegna Express',
    'services.express.description': 'Spedizioni urgenti consegnate con priorità. Servizi di trasporto espresso veloci e affidabili.',
    'services.logistics.title': 'Soluzioni Logistiche',
    'services.logistics.description': 'Gestione logistica end-to-end incluso magazzinaggio, distribuzione e ottimizzazione della supply chain.',
    
    // Fleet Section
    'fleet.title': 'LA NOSTRA FLOTTA',
    'fleet.subtitle': 'Veicoli moderni per un trasporto sicuro ed efficiente',
    'fleet.description': 'La nostra flotta è composta da camion Volvo e Iveco moderni dotati delle ultime tecnologie per il tracking e il controllo della temperatura. Tutti i veicoli rispettano gli standard di emissione Euro 6.',
    
    // Contact Section
    'contact.title': 'CONTATTACI',
    'contact.subtitle': 'Contattaci per un preventivo gratuito',
    'contact.form.name': 'Il Tuo Nome',
    'contact.form.email': 'Indirizzo Email',
    'contact.form.phone': 'Numero di Telefono',
    'contact.form.message': 'Il Tuo Messaggio',
    'contact.form.submit': 'Invia Messaggio',
    'contact.info.address': 'Indirizzo',
    'contact.info.phone': 'Telefono',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Orari di Apertura',
    'contact.info.hours.value': 'Lun - Ven: 8:00 - 18:00',
    
    // Company Details
    'company.title': 'DETTAGLI AZIENDA',
    'company.name': 'Nome Azienda',
    'company.cui': 'Codice Fiscale (CUI)',
    'company.regcom': 'Registro delle Imprese',
    'company.address': 'Sede Legale',
    'company.address.value': 'Str. Iulia, Nr. 2, Arad, Vladimirescu, Romania',
    
    // Footer
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.privacy': 'Politica sulla Privacy',
    'footer.terms': 'Termini e Condizioni',
    'footer.cookies': 'Politica sui Cookie',
    
    // Map
    'map.title': 'DOVE SIAMO',
    'map.subtitle': 'Visita la nostra sede ad Arad',
  },
  
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.fleet': 'Nuestra Flota',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'TRANSPORTE INTERNACIONAL DE MERCANCÍAS',
    'hero.subtitle': 'Servicios profesionales de transporte por carretera en toda Europa',
    'hero.description': 'Con una flota moderna y años de experiencia, entregamos su carga de forma segura y puntual a cualquier destino en Europa.',
    'hero.cta.quote': 'Solicitar Presupuesto',
    'hero.cta.contact': 'Contáctenos',
    
    // About Section
    'about.title': 'SOBRE AMIDAMARU',
    'about.subtitle': 'Su socio de confianza en transporte internacional',
    'about.description': 'S.C. AMIDAMARU S.R.L. es una empresa profesional de transporte de mercancías con sede en Arad, Rumania. Nos especializamos en transporte por carretera internacional, ofreciendo soluciones logísticas fiables y eficientes en toda Europa.',
    'about.experience': 'Años de Experiencia',
    'about.countries': 'Países Europeos',
    'about.trucks': 'Camiones Modernos',
    'about.deliveries': 'Entregas Exitosas',
    
    // Services Section
    'services.title': 'NUESTROS SERVICIOS',
    'services.subtitle': 'Soluciones de transporte integrales adaptadas a sus necesidades',
    'services.ftl.title': 'Carga Completa (FTL)',
    'services.ftl.description': 'Camión completo dedicado a su carga. Ideal para envíos grandes que requieren transporte exclusivo.',
    'services.ltl.title': 'Carga Parcial (LTL)',
    'services.ltl.description': 'Solución económica para envíos más pequeños. Comparta el espacio del camión y reduzca costos.',
    'services.express.title': 'Entrega Express',
    'services.express.description': 'Envíos urgentes entregados con prioridad. Servicios de transporte express rápidos y confiables.',
    'services.logistics.title': 'Soluciones Logísticas',
    'services.logistics.description': 'Gestión logística integral incluyendo almacenamiento, distribución y optimización de la cadena de suministro.',
    
    // Fleet Section
    'fleet.title': 'NUESTRA FLOTA',
    'fleet.subtitle': 'Vehículos modernos para un transporte seguro y eficiente',
    'fleet.description': 'Nuestra flota está compuesta por camiones Volvo e Iveco modernos equipados con la última tecnología para seguimiento y control de temperatura. Todos los vehículos cumplen con los estándares de emisión Euro 6.',
    
    // Contact Section
    'contact.title': 'CONTÁCTENOS',
    'contact.subtitle': 'Póngase en contacto para un presupuesto gratuito',
    'contact.form.name': 'Su Nombre',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.phone': 'Número de Teléfono',
    'contact.form.message': 'Su Mensaje',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.info.address': 'Dirección',
    'contact.info.phone': 'Teléfono',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Horario de Atención',
    'contact.info.hours.value': 'Lun - Vie: 8:00 - 18:00',
    
    // Company Details
    'company.title': 'DATOS DE LA EMPRESA',
    'company.name': 'Nombre de la Empresa',
    'company.cui': 'ID Fiscal (CUI)',
    'company.regcom': 'Registro Mercantil',
    'company.address': 'Domicilio Social',
    'company.address.value': 'Str. Iulia, Nr. 2, Arad, Vladimirescu, Rumania',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos y Condiciones',
    'footer.cookies': 'Política de Cookies',
    
    // Map
    'map.title': 'ENCUÉNTRENOS',
    'map.subtitle': 'Visite nuestra sede en Arad',
  },
  
  cs: {
    // Navigation
    'nav.home': 'Domů',
    'nav.about': 'O Nás',
    'nav.services': 'Služby',
    'nav.fleet': 'Naše Flotila',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'MEZINÁRODNÍ NÁKLADNÍ DOPRAVA',
    'hero.subtitle': 'Profesionální silniční dopravní služby po celé Evropě',
    'hero.description': 'S moderní flotilou a letitými zkušenostmi dodáváme váš náklad bezpečně a včas na jakékoli místo v Evropě.',
    'hero.cta.quote': 'Požádat o Nabídku',
    'hero.cta.contact': 'Kontaktujte Nás',
    
    // About Section
    'about.title': 'O SPOLEČNOSTI AMIDAMARU',
    'about.subtitle': 'Váš spolehlivý partner v mezinárodní dopravě',
    'about.description': 'S.C. AMIDAMARU S.R.L. je profesionální nákladní dopravní společnost se sídlem v Aradu, Rumunsko. Specializujeme se na mezinárodní silniční dopravu a nabízíme spolehlivá a efektivní logistická řešení po celé Evropě.',
    'about.experience': 'Let Zkušeností',
    'about.countries': 'Evropských Zemí',
    'about.trucks': 'Moderních Kamionů',
    'about.deliveries': 'Úspěšných Dodávek',
    
    // Services Section
    'services.title': 'NAŠE SLUŽBY',
    'services.subtitle': 'Komplexní dopravní řešení přizpůsobená vašim potřebám',
    'services.ftl.title': 'Celokamionová Přeprava (FTL)',
    'services.ftl.description': 'Kompletní kamion věnovaný vašemu nákladu. Ideální pro velké zásilky vyžadující exkluzivní přepravu.',
    'services.ltl.title': 'Částečná Přeprava (LTL)',
    'services.ltl.description': 'Ekonomické řešení pro menší zásilky. Sdílejte prostor kamionu a snižte náklady.',
    'services.express.title': 'Expresní Doručení',
    'services.express.description': 'Časově kritické zásilky doručené s prioritou. Rychlé a spolehlivé expresní dopravní služby.',
    'services.logistics.title': 'Logistická Řešení',
    'services.logistics.description': 'Komplexní logistický management včetně skladování, distribuce a optimalizace dodavatelského řetězce.',
    
    // Fleet Section
    'fleet.title': 'NAŠE FLOTILA',
    'fleet.subtitle': 'Moderní vozidla pro bezpečnou a efektivní přepravu',
    'fleet.description': 'Naše flotila se skládá z moderních kamionů Volvo a Iveco vybavených nejnovějšími technologiemi pro sledování a kontrolu teploty. Všechna vozidla splňují emisní normy Euro 6.',
    
    // Contact Section
    'contact.title': 'KONTAKTUJTE NÁS',
    'contact.subtitle': 'Kontaktujte nás pro bezplatnou nabídku',
    'contact.form.name': 'Vaše Jméno',
    'contact.form.email': 'E-mailová Adresa',
    'contact.form.phone': 'Telefonní Číslo',
    'contact.form.message': 'Vaše Zpráva',
    'contact.form.submit': 'Odeslat Zprávu',
    'contact.info.address': 'Adresa',
    'contact.info.phone': 'Telefon',
    'contact.info.email': 'E-mail',
    'contact.info.hours': 'Otevírací Doba',
    'contact.info.hours.value': 'Po - Pá: 8:00 - 18:00',
    
    // Company Details
    'company.title': 'ÚDAJE O SPOLEČNOSTI',
    'company.name': 'Název Společnosti',
    'company.cui': 'Daňové ID (CUI)',
    'company.regcom': 'Obchodní Rejstřík',
    'company.address': 'Sídlo Společnosti',
    'company.address.value': 'Str. Iulia, Nr. 2, Arad, Vladimirescu, Rumunsko',
    
    // Footer
    'footer.rights': 'Všechna práva vyhrazena.',
    'footer.privacy': 'Zásady Ochrany Soukromí',
    'footer.terms': 'Obchodní Podmínky',
    'footer.cookies': 'Zásady Cookies',
    
    // Map
    'map.title': 'NAJDĚTE NÁS',
    'map.subtitle': 'Navštivte naše sídlo v Aradu',
  },
  
  pl: {
    // Navigation
    'nav.home': 'Strona Główna',
    'nav.about': 'O Nas',
    'nav.services': 'Usługi',
    'nav.fleet': 'Nasza Flota',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'MIĘDZYNARODOWY TRANSPORT TOWAROWY',
    'hero.subtitle': 'Profesjonalne usługi transportu drogowego w całej Europie',
    'hero.description': 'Dzięki nowoczesnej flocie i wieloletniemu doświadczeniu dostarczamy Twój ładunek bezpiecznie i na czas do każdego miejsca w Europie.',
    'hero.cta.quote': 'Zapytaj o Ofertę',
    'hero.cta.contact': 'Skontaktuj się',
    
    // About Section
    'about.title': 'O FIRMIE AMIDAMARU',
    'about.subtitle': 'Twój zaufany partner w transporcie międzynarodowym',
    'about.description': 'S.C. AMIDAMARU S.R.L. to profesjonalna firma transportowa z siedzibą w Arad, Rumunia. Specjalizujemy się w międzynarodowym transporcie drogowym, oferując niezawodne i wydajne rozwiązania logistyczne w całej Europie.',
    'about.experience': 'Lat Doświadczenia',
    'about.countries': 'Krajów Europejskich',
    'about.trucks': 'Nowoczesnych Ciężarówek',
    'about.deliveries': 'Udanych Dostaw',
    
    // Services Section
    'services.title': 'NASZE USŁUGI',
    'services.subtitle': 'Kompleksowe rozwiązania transportowe dostosowane do Twoich potrzeb',
    'services.ftl.title': 'Pełny Ładunek (FTL)',
    'services.ftl.description': 'Cała ciężarówka dedykowana Twojemu ładunkowi. Idealne dla dużych przesyłek wymagających transportu na wyłączność.',
    'services.ltl.title': 'Ładunek Częściowy (LTL)',
    'services.ltl.description': 'Ekonomiczne rozwiązanie dla mniejszych przesyłek. Dziel przestrzeń ciężarówki i obniżaj koszty.',
    'services.express.title': 'Dostawa Ekspresowa',
    'services.express.description': 'Pilne przesyłki dostarczane priorytetowo. Szybkie i niezawodne usługi transportu ekspresowego.',
    'services.logistics.title': 'Rozwiązania Logistyczne',
    'services.logistics.description': 'Kompleksowe zarządzanie logistyką obejmujące magazynowanie, dystrybucję i optymalizację łańcucha dostaw.',
    
    // Fleet Section
    'fleet.title': 'NASZA FLOTA',
    'fleet.subtitle': 'Nowoczesne pojazdy dla bezpiecznego i wydajnego transportu',
    'fleet.description': 'Nasza flota składa się z nowoczesnych ciężarówek Volvo i Iveco wyposażonych w najnowsze technologie śledzenia i kontroli temperatury. Wszystkie pojazdy spełniają normy emisji Euro 6.',
    
    // Contact Section
    'contact.title': 'SKONTAKTUJ SIĘ',
    'contact.subtitle': 'Skontaktuj się z nami w sprawie bezpłatnej wyceny',
    'contact.form.name': 'Twoje Imię',
    'contact.form.email': 'Adres E-mail',
    'contact.form.phone': 'Numer Telefonu',
    'contact.form.message': 'Twoja Wiadomość',
    'contact.form.submit': 'Wyślij Wiadomość',
    'contact.info.address': 'Adres',
    'contact.info.phone': 'Telefon',
    'contact.info.email': 'E-mail',
    'contact.info.hours': 'Godziny Pracy',
    'contact.info.hours.value': 'Pon - Pt: 8:00 - 18:00',
    
    // Company Details
    'company.title': 'DANE FIRMY',
    'company.name': 'Nazwa Firmy',
    'company.cui': 'NIP (CUI)',
    'company.regcom': 'Rejestr Handlowy',
    'company.address': 'Siedziba Firmy',
    'company.address.value': 'Str. Iulia, Nr. 2, Arad, Vladimirescu, Rumunia',
    
    // Footer
    'footer.rights': 'Wszelkie prawa zastrzeżone.',
    'footer.privacy': 'Polityka Prywatności',
    'footer.terms': 'Regulamin',
    'footer.cookies': 'Polityka Cookies',
    
    // Map
    'map.title': 'ZNAJDŹ NAS',
    'map.subtitle': 'Odwiedź naszą siedzibę w Arad',
  },
  
  hu: {
    // Navigation
    'nav.home': 'Főoldal',
    'nav.about': 'Rólunk',
    'nav.services': 'Szolgáltatások',
    'nav.fleet': 'Flottánk',
    'nav.contact': 'Kapcsolat',
    
    // Hero Section
    'hero.title': 'NEMZETKÖZI ÁRUSZÁLLÍTÁS',
    'hero.subtitle': 'Professzionális közúti szállítási szolgáltatások Európa-szerte',
    'hero.description': 'Modern flottával és évek tapasztalatával biztonságosan és időben szállítjuk rakományát Európa bármely pontjára.',
    'hero.cta.quote': 'Ajánlatkérés',
    'hero.cta.contact': 'Kapcsolatfelvétel',
    
    // About Section
    'about.title': 'AZ AMIDAMARU-RÓL',
    'about.subtitle': 'Megbízható partnere a nemzetközi szállításban',
    'about.description': 'Az S.C. AMIDAMARU S.R.L. egy professzionális áruszállító vállalat, amelynek székhelye Arad, Románia. Nemzetközi közúti szállításra specializálódtunk, megbízható és hatékony logisztikai megoldásokat kínálva Európa-szerte.',
    'about.experience': 'Év Tapasztalat',
    'about.countries': 'Európai Ország',
    'about.trucks': 'Modern Teherautó',
    'about.deliveries': 'Sikeres Szállítás',
    
    // Services Section
    'services.title': 'SZOLGÁLTATÁSAINK',
    'services.subtitle': 'Átfogó szállítási megoldások az Ön igényeire szabva',
    'services.ftl.title': 'Teljes Rakományú Szállítás (FTL)',
    'services.ftl.description': 'Teljes teherautó az Ön rakományának. Ideális nagy szállítmányokhoz, amelyek kizárólagos szállítást igényelnek.',
    'services.ltl.title': 'Részrakományos Szállítás (LTL)',
    'services.ltl.description': 'Költséghatékony megoldás kisebb szállítmányokhoz. Ossza meg a teherautó helyét és csökkentse költségeit.',
    'services.express.title': 'Expressz Szállítás',
    'services.express.description': 'Időérzékeny szállítmányok prioritással kézbesítve. Gyors és megbízható expressz szállítási szolgáltatások.',
    'services.logistics.title': 'Logisztikai Megoldások',
    'services.logistics.description': 'Teljes körű logisztikai menedzsment, beleértve a raktározást, elosztást és ellátási lánc optimalizálást.',
    
    // Fleet Section
    'fleet.title': 'FLOTTÁNK',
    'fleet.subtitle': 'Modern járművek a biztonságos és hatékony szállításért',
    'fleet.description': 'Flottánk modern Volvo és Iveco teherautókból áll, amelyek a legújabb nyomkövetési és hőmérséklet-szabályozási technológiával vannak felszerelve. Minden jármű megfelel az Euro 6 kibocsátási szabványoknak.',
    
    // Contact Section
    'contact.title': 'KAPCSOLAT',
    'contact.subtitle': 'Lépjen kapcsolatba velünk ingyenes árajánlatért',
    'contact.form.name': 'Az Ön Neve',
    'contact.form.email': 'E-mail Cím',
    'contact.form.phone': 'Telefonszám',
    'contact.form.message': 'Üzenete',
    'contact.form.submit': 'Üzenet Küldése',
    'contact.info.address': 'Cím',
    'contact.info.phone': 'Telefon',
    'contact.info.email': 'E-mail',
    'contact.info.hours': 'Nyitvatartás',
    'contact.info.hours.value': 'H - P: 8:00 - 18:00',
    
    // Company Details
    'company.title': 'CÉGADATOK',
    'company.name': 'Cégnév',
    'company.cui': 'Adószám (CUI)',
    'company.regcom': 'Cégjegyzékszám',
    'company.address': 'Székhely',
    'company.address.value': 'Str. Iulia, Nr. 2, Arad, Vladimirescu, Románia',
    
    // Footer
    'footer.rights': 'Minden jog fenntartva.',
    'footer.privacy': 'Adatvédelmi Irányelvek',
    'footer.terms': 'Általános Szerződési Feltételek',
    'footer.cookies': 'Cookie Szabályzat',
    
    // Map
    'map.title': 'ELÉRHETŐSÉG',
    'map.subtitle': 'Látogasson el aradi székhelyünkre',
  },
};

export function getTranslation(lang: Language, key: string): string {
  return translations[lang][key] || translations['en'][key] || key;
}

