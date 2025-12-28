export type Language = 'en' | 'ro' | 'de' | 'fr' | 'it' | 'es' | 'cs' | 'pl' | 'hu';

export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const languages: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: 'gb' },
  { code: 'ro', name: 'Romanian', nativeName: 'Română', flag: 'ro' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: 'de' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: 'fr' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: 'it' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: 'es' },
  { code: 'cs', name: 'Czech', nativeName: 'Čeština', flag: 'cz' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: 'pl' },
  { code: 'hu', name: 'Hungarian', nativeName: 'Magyar', flag: 'hu' },
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
    'hero.title': 'YOUR PARTNER IN INTEGRATED LOGISTICS',
    'hero.subtitle': 'Professionalism, quality and reliability in freight transport',
    'hero.description': 'AMIDAMARU is your partner in integrated logistics services with extensive expertise in efficient freight transport. We are your trusted partner offering safety and efficiency in transporting your goods anywhere in Europe.',
    'hero.cta.quote': 'Request Quote',
    'hero.cta.contact': 'Contact Us',
    
    // About Section
    'about.title': 'ABOUT AMIDAMARU',
    'about.subtitle': 'The reliable solution for complete road transport',
    'about.description': 'AMIDAMARU was founded in 2006 and since then we have been providing top quality logistics services for general cargo. We have developed over the years to support a wide range of clients in freight transport throughout Europe. With the support and help of our partners and clients, we increase transport volume every year, responding promptly, seriously and with the highest quality to their requirements and needs.',
    'about.experience': 'Years of Experience',
    'about.countries': 'European Countries',
    'about.trucks': 'Modern Trucks',
    'about.deliveries': 'Successful Deliveries',
    
    // Services Section
    'services.title': 'OUR SERVICES',
    'services.subtitle': 'We understand that our clients have commitments to their own customers. We know the importance of deadlines and strive in every transport to fulfill our commitment to clients, allowing them to meet their own deadlines and contracts.',
    'services.ftl.title': 'Full Truck Load (FTL)',
    'services.ftl.description': 'Complete truck dedicated to your cargo. Ideal for large shipments requiring exclusive transport.',
    'services.ltl.title': 'Less Than Truck Load (LTL)',
    'services.ltl.description': 'Cost-effective solution for smaller shipments. Share truck space and reduce costs.',
    'services.express.title': 'Express Delivery',
    'services.express.description': 'Time-critical shipments delivered with priority. Fast and reliable express transport services.',
    'services.logistics.title': 'Logistics Solutions',
    'services.logistics.description': 'Comprehensive logistics management including distribution planning, route optimization, and supply chain coordination.',
    
    // Fleet Section
    'fleet.title': 'OUR FLEET',
    'fleet.subtitle': 'Modern vehicles for safe and efficient transport',
    'fleet.description': 'Our fleet consists of modern Volvo and Iveco trucks equipped with the latest technology for tracking and temperature control. All vehicles meet Euro 6 emission standards.',
    'fleet.viewMore': 'View More',
    'fleet.viewLess': 'View Less',
    
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
    'contact.info.hours.value': 'Mon - Fri: 09:00 - 17:00 (RO Time)',
    
    // Company Details
    'company.title': 'COMPANY DETAILS',
    'company.name': 'Company Name',
    'company.cui': 'Tax ID (CUI)',
    'company.regcom': 'Trade Register',
    'company.address': 'Registered Address',
    'company.address.value': 'Str. Centura Nord Km 541+150 (DN 7), Arad, Romania',
    
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
    'hero.title': 'PARTENERUL DUMNEAVOASTRĂ ÎN SERVICII LOGISTICE',
    'hero.subtitle': 'Profesionalism, calitate și seriozitate în transportul mărfurilor',
    'hero.description': 'AMIDAMARU este partenerul dumneavoastră în servicii logistice integrate cu o expertiză îndelungată în transportul eficient de mărfuri. Suntem un partener de încredere care vă oferă siguranță și eficiență în transportul mărfurilor dumneavoastră, oriunde în Europa.',
    'hero.cta.quote': 'Cere Ofertă',
    'hero.cta.contact': 'Contactează-ne',
    
    // About Section
    'about.title': 'DESPRE AMIDAMARU',
    'about.subtitle': 'Soluția sigură pentru transporturi rutiere complete',
    'about.description': 'Compania AMIDAMARU a fost fondată în anul 2006 și de atunci oferim servicii logistice de cea mai bună calitate pentru mărfuri generale. Ne-am dezvoltat de-a lungul anilor pentru a sprijini o gamă variată de clienți în transportul mărfurilor, în întreaga Europă. Cu susținerea și ajutorul partenerilor și clienților noștri dezvoltăm în fiecare an volumul de transport, răspundem prompt, serios și cu cea mai bună calitate la cerințele și nevoile acestora.',
    'about.experience': 'Ani de Experiență',
    'about.countries': 'Țări Europene',
    'about.trucks': 'Camioane Moderne',
    'about.deliveries': 'Livrări Reușite',
    
    // Services Section
    'services.title': 'SERVICIILE NOASTRE',
    'services.subtitle': 'Înțelegem că partenerii și clienții noștri au la rândul lor angajamente față de clienții lor. Cunoaștem importanța termenelor și ne propunem în cadrul fiecărui transport să ne îndeplinim angajamentul față de clienți pentru a le permite acestora să își respecte termenele și contractele.',
    'services.ftl.title': 'Transport Complet (FTL)',
    'services.ftl.description': 'Camion complet dedicat mărfii tale. Ideal pentru transporturi mari care necesită transport exclusiv.',
    'services.ltl.title': 'Transport Grupaj (LTL)',
    'services.ltl.description': 'Soluție economică pentru transporturi mai mici. Împarte spațiul camionului și reduce costurile.',
    'services.express.title': 'Livrare Express',
    'services.express.description': 'Transporturi urgente livrate cu prioritate. Servicii de transport express rapide și fiabile.',
    'services.logistics.title': 'Soluții Logistice',
    'services.logistics.description': 'Management logistic complet incluzând planificarea distribuției, optimizarea rutelor și coordonarea lanțului de aprovizionare.',
    
    // Fleet Section
    'fleet.title': 'FLOTA NOASTRĂ',
    'fleet.subtitle': 'Vehicule moderne pentru transport sigur și eficient',
    'fleet.description': 'Flota noastră este formată din camioane moderne Volvo și Iveco echipate cu cele mai noi tehnologii de urmărire și control al temperaturii. Toate vehiculele respectă standardele de emisii Euro 6.',
    'fleet.viewMore': 'Vezi Mai Multe',
    'fleet.viewLess': 'Vezi Mai Puține',
    
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
    'contact.info.hours.value': 'Lun - Vin: 09:00 - 17:00',
    
    // Company Details
    'company.title': 'DETALII COMPANIE',
    'company.name': 'Denumire Firmă',
    'company.cui': 'Cod Fiscal (CUI)',
    'company.regcom': 'Registrul Comerțului',
    'company.address': 'Sediu Social',
    'company.address.value': 'Str. Centura Nord Km 541+150 (DN 7), Arad, România',
    
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
    'hero.title': 'IHR PARTNER FÜR INTEGRIERTE LOGISTIK',
    'hero.subtitle': 'Professionalität, Qualität und Zuverlässigkeit im Gütertransport',
    'hero.description': 'AMIDAMARU ist Ihr Partner für integrierte Logistikdienstleistungen mit langjähriger Expertise im effizienten Gütertransport. Wir sind Ihr vertrauenswürdiger Partner, der Ihnen Sicherheit und Effizienz beim Transport Ihrer Waren überall in Europa bietet.',
    'hero.cta.quote': 'Angebot Anfordern',
    'hero.cta.contact': 'Kontaktieren Sie Uns',
    
    // About Section
    'about.title': 'ÜBER AMIDAMARU',
    'about.subtitle': 'Die zuverlässige Lösung für komplette Straßentransporte',
    'about.description': 'AMIDAMARU wurde 2006 gegründet und bietet seitdem erstklassige Logistikdienstleistungen für allgemeine Güter. Wir haben uns im Laufe der Jahre entwickelt, um eine Vielzahl von Kunden beim Gütertransport in ganz Europa zu unterstützen. Mit der Unterstützung unserer Partner und Kunden steigern wir jedes Jahr das Transportvolumen und reagieren prompt, seriös und mit höchster Qualität auf deren Anforderungen und Bedürfnisse.',
    'about.experience': 'Jahre Erfahrung',
    'about.countries': 'Europäische Länder',
    'about.trucks': 'Moderne LKWs',
    'about.deliveries': 'Erfolgreiche Lieferungen',
    
    // Services Section
    'services.title': 'UNSERE DIENSTLEISTUNGEN',
    'services.subtitle': 'Wir verstehen, dass unsere Kunden Verpflichtungen gegenüber ihren eigenen Kunden haben. Wir kennen die Bedeutung von Fristen und streben bei jedem Transport danach, unsere Verpflichtungen zu erfüllen, damit unsere Kunden ihre eigenen Termine und Verträge einhalten können.',
    'services.ftl.title': 'Komplettladung (FTL)',
    'services.ftl.description': 'Kompletter LKW für Ihre Fracht. Ideal für große Sendungen, die exklusiven Transport erfordern.',
    'services.ltl.title': 'Teilladung (LTL)',
    'services.ltl.description': 'Kostengünstige Lösung für kleinere Sendungen. Teilen Sie den LKW-Raum und reduzieren Sie Kosten.',
    'services.express.title': 'Expresslieferung',
    'services.express.description': 'Zeitkritische Sendungen mit Priorität geliefert. Schnelle und zuverlässige Expresstransportdienste.',
    'services.logistics.title': 'Logistiklösungen',
    'services.logistics.description': 'Umfassendes Logistikmanagement einschließlich Distributionsplanung, Routenoptimierung und Supply-Chain-Koordination.',
    
    // Fleet Section
    'fleet.title': 'UNSERE FLOTTE',
    'fleet.subtitle': 'Moderne Fahrzeuge für sicheren und effizienten Transport',
    'fleet.description': 'Unsere Flotte besteht aus modernen Volvo- und Iveco-LKWs, die mit der neuesten Technologie für Tracking und Temperaturkontrolle ausgestattet sind. Alle Fahrzeuge erfüllen die Euro 6 Emissionsstandards.',
    'fleet.viewMore': 'Mehr Anzeigen',
    'fleet.viewLess': 'Weniger Anzeigen',
    
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
    'contact.info.hours.value': 'Mo - Fr: 09:00 - 17:00 (RO Zeit)',
    
    // Company Details
    'company.title': 'FIRMENDETAILS',
    'company.name': 'Firmenname',
    'company.cui': 'Steuer-ID (CUI)',
    'company.regcom': 'Handelsregister',
    'company.address': 'Firmensitz',
    'company.address.value': 'Str. Centura Nord Km 541+150 (DN 7), Arad, Rumänien',
    
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
    'hero.title': 'VOTRE PARTENAIRE EN LOGISTIQUE INTÉGRÉE',
    'hero.subtitle': 'Professionnalisme, qualité et fiabilité dans le transport de marchandises',
    'hero.description': 'AMIDAMARU est votre partenaire en services logistiques intégrés avec une expertise approfondie dans le transport efficace de marchandises. Nous sommes votre partenaire de confiance offrant sécurité et efficacité dans le transport de vos marchandises partout en Europe.',
    'hero.cta.quote': 'Demander un Devis',
    'hero.cta.contact': 'Nous Contacter',
    
    // About Section
    'about.title': 'À PROPOS D\'AMIDAMARU',
    'about.subtitle': 'La solution fiable pour les transports routiers complets',
    'about.description': 'AMIDAMARU a été fondée en 2006 et depuis lors, nous fournissons des services logistiques de haute qualité pour les marchandises générales. Nous nous sommes développés au fil des années pour accompagner une grande variété de clients dans le transport de marchandises à travers toute l\'Europe. Avec le soutien de nos partenaires et clients, nous augmentons chaque année notre volume de transport, répondant rapidement, sérieusement et avec la meilleure qualité à leurs exigences et besoins.',
    'about.experience': 'Années d\'Expérience',
    'about.countries': 'Pays Européens',
    'about.trucks': 'Camions Modernes',
    'about.deliveries': 'Livraisons Réussies',
    
    // Services Section
    'services.title': 'NOS SERVICES',
    'services.subtitle': 'Nous comprenons que nos clients ont des engagements envers leurs propres clients. Nous connaissons l\'importance des délais et nous nous efforçons dans chaque transport de remplir notre engagement envers nos clients pour leur permettre de respecter leurs propres délais et contrats.',
    'services.ftl.title': 'Chargement Complet (FTL)',
    'services.ftl.description': 'Camion complet dédié à votre cargaison. Idéal pour les gros envois nécessitant un transport exclusif.',
    'services.ltl.title': 'Groupage (LTL)',
    'services.ltl.description': 'Solution économique pour les petits envois. Partagez l\'espace du camion et réduisez les coûts.',
    'services.express.title': 'Livraison Express',
    'services.express.description': 'Envois urgents livrés en priorité. Services de transport express rapides et fiables.',
    'services.logistics.title': 'Solutions Logistiques',
    'services.logistics.description': 'Gestion logistique complète incluant planification de la distribution, optimisation des itinéraires et coordination de la chaîne d\'approvisionnement.',
    
    // Fleet Section
    'fleet.title': 'NOTRE FLOTTE',
    'fleet.subtitle': 'Véhicules modernes pour un transport sûr et efficace',
    'fleet.description': 'Notre flotte se compose de camions Volvo et Iveco modernes équipés des dernières technologies de suivi et de contrôle de température. Tous les véhicules respectent les normes d\'émission Euro 6.',
    'fleet.viewMore': 'Voir Plus',
    'fleet.viewLess': 'Voir Moins',
    
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
    'contact.info.hours.value': 'Lun - Ven: 09h00 - 17h00 (Heure RO)',
    
    // Company Details
    'company.title': 'DÉTAILS DE L\'ENTREPRISE',
    'company.name': 'Nom de l\'Entreprise',
    'company.cui': 'Numéro Fiscal (CUI)',
    'company.regcom': 'Registre du Commerce',
    'company.address': 'Siège Social',
    'company.address.value': 'Str. Centura Nord Km 541+150 (DN 7), Arad, Roumanie',
    
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
    'hero.title': 'IL VOSTRO PARTNER NELLA LOGISTICA INTEGRATA',
    'hero.subtitle': 'Professionalità, qualità e affidabilità nel trasporto merci',
    'hero.description': 'AMIDAMARU è il vostro partner nei servizi logistici integrati con una vasta esperienza nel trasporto efficiente di merci. Siamo il vostro partner di fiducia che offre sicurezza ed efficienza nel trasporto delle vostre merci ovunque in Europa.',
    'hero.cta.quote': 'Richiedi Preventivo',
    'hero.cta.contact': 'Contattaci',
    
    // About Section
    'about.title': 'CHI È AMIDAMARU',
    'about.subtitle': 'La soluzione affidabile per trasporti stradali completi',
    'about.description': 'AMIDAMARU è stata fondata nel 2006 e da allora forniamo servizi logistici di altissima qualità per merci generali. Ci siamo sviluppati nel corso degli anni per supportare una vasta gamma di clienti nel trasporto merci in tutta Europa. Con il supporto dei nostri partner e clienti, aumentiamo ogni anno il volume di trasporto, rispondendo prontamente, seriamente e con la massima qualità alle loro esigenze e necessità.',
    'about.experience': 'Anni di Esperienza',
    'about.countries': 'Paesi Europei',
    'about.trucks': 'Camion Moderni',
    'about.deliveries': 'Consegne Riuscite',
    
    // Services Section
    'services.title': 'I NOSTRI SERVIZI',
    'services.subtitle': 'Comprendiamo che i nostri clienti hanno impegni verso i propri clienti. Conosciamo l\'importanza delle scadenze e ci impegniamo in ogni trasporto a rispettare il nostro impegno verso i clienti per permettere loro di rispettare i propri termini e contratti.',
    'services.ftl.title': 'Carico Completo (FTL)',
    'services.ftl.description': 'Camion completo dedicato al vostro carico. Ideale per grandi spedizioni che richiedono trasporto esclusivo.',
    'services.ltl.title': 'Groupage (LTL)',
    'services.ltl.description': 'Soluzione economica per spedizioni più piccole. Condividete lo spazio del camion e riducete i costi.',
    'services.express.title': 'Consegna Express',
    'services.express.description': 'Spedizioni urgenti consegnate con priorità. Servizi di trasporto espresso veloci e affidabili.',
    'services.logistics.title': 'Soluzioni Logistiche',
    'services.logistics.description': 'Gestione logistica completa inclusa pianificazione della distribuzione, ottimizzazione dei percorsi e coordinamento della supply chain.',
    
    // Fleet Section
    'fleet.title': 'LA NOSTRA FLOTTA',
    'fleet.subtitle': 'Veicoli moderni per un trasporto sicuro ed efficiente',
    'fleet.description': 'La nostra flotta è composta da camion Volvo e Iveco moderni dotati delle ultime tecnologie per il tracking e il controllo della temperatura. Tutti i veicoli rispettano gli standard di emissione Euro 6.',
    'fleet.viewMore': 'Vedi Altro',
    'fleet.viewLess': 'Vedi Meno',
    
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
    'contact.info.hours.value': 'Lun - Ven: 09:00 - 17:00 (Ora RO)',
    
    // Company Details
    'company.title': 'DETTAGLI AZIENDA',
    'company.name': 'Nome Azienda',
    'company.cui': 'Codice Fiscale (CUI)',
    'company.regcom': 'Registro delle Imprese',
    'company.address': 'Sede Legale',
    'company.address.value': 'Str. Centura Nord Km 541+150 (DN 7), Arad, Romania',
    
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
    'hero.title': 'SU SOCIO EN LOGÍSTICA INTEGRADA',
    'hero.subtitle': 'Profesionalismo, calidad y seriedad en el transporte de mercancías',
    'hero.description': 'AMIDAMARU es su socio en servicios logísticos integrados con amplia experiencia en el transporte eficiente de mercancías. Somos su socio de confianza que ofrece seguridad y eficiencia en el transporte de sus mercancías en cualquier lugar de Europa.',
    'hero.cta.quote': 'Solicitar Presupuesto',
    'hero.cta.contact': 'Contáctenos',
    
    // About Section
    'about.title': 'SOBRE AMIDAMARU',
    'about.subtitle': 'La solución segura para transportes por carretera completos',
    'about.description': 'AMIDAMARU fue fundada en 2006 y desde entonces ofrecemos servicios logísticos de la más alta calidad para mercancías generales. Nos hemos desarrollado a lo largo de los años para apoyar a una amplia gama de clientes en el transporte de mercancías en toda Europa. Con el apoyo de nuestros socios y clientes, aumentamos cada año el volumen de transporte, respondiendo de manera rápida, seria y con la mejor calidad a sus requerimientos y necesidades.',
    'about.experience': 'Años de Experiencia',
    'about.countries': 'Países Europeos',
    'about.trucks': 'Camiones Modernos',
    'about.deliveries': 'Entregas Exitosas',
    
    // Services Section
    'services.title': 'NUESTROS SERVICIOS',
    'services.subtitle': 'Entendemos que nuestros clientes tienen compromisos con sus propios clientes. Conocemos la importancia de los plazos y nos esforzamos en cada transporte por cumplir nuestro compromiso con los clientes para permitirles cumplir con sus propios plazos y contratos.',
    'services.ftl.title': 'Carga Completa (FTL)',
    'services.ftl.description': 'Camión completo dedicado a su carga. Ideal para envíos grandes que requieren transporte exclusivo.',
    'services.ltl.title': 'Carga Parcial (LTL)',
    'services.ltl.description': 'Solución económica para envíos más pequeños. Comparta el espacio del camión y reduzca costos.',
    'services.express.title': 'Entrega Express',
    'services.express.description': 'Envíos urgentes entregados con prioridad. Servicios de transporte express rápidos y confiables.',
    'services.logistics.title': 'Soluciones Logísticas',
    'services.logistics.description': 'Gestión logística integral incluyendo planificación de distribución, optimización de rutas y coordinación de la cadena de suministro.',
    
    // Fleet Section
    'fleet.title': 'NUESTRA FLOTA',
    'fleet.subtitle': 'Vehículos modernos para un transporte seguro y eficiente',
    'fleet.description': 'Nuestra flota está compuesta por camiones Volvo e Iveco modernos equipados con la última tecnología para seguimiento y control de temperatura. Todos los vehículos cumplen con los estándares de emisión Euro 6.',
    'fleet.viewMore': 'Ver Más',
    'fleet.viewLess': 'Ver Menos',
    
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
    'contact.info.hours.value': 'Lun - Vie: 09:00 - 17:00 (Hora RO)',
    
    // Company Details
    'company.title': 'DATOS DE LA EMPRESA',
    'company.name': 'Nombre de la Empresa',
    'company.cui': 'ID Fiscal (CUI)',
    'company.regcom': 'Registro Mercantil',
    'company.address': 'Domicilio Social',
    'company.address.value': 'Str. Centura Nord Km 541+150 (DN 7), Arad, Rumania',
    
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
    'hero.title': 'VÁŠ PARTNER V INTEGROVANÉ LOGISTICE',
    'hero.subtitle': 'Profesionalita, kvalita a spolehlivost v přepravě zboží',
    'hero.description': 'AMIDAMARU je váš partner v integrovaných logistických službách s rozsáhlými zkušenostmi v efektivní přepravě zboží. Jsme váš důvěryhodný partner nabízející bezpečnost a efektivitu při přepravě vašeho zboží kdekoli v Evropě.',
    'hero.cta.quote': 'Požádat o Nabídku',
    'hero.cta.contact': 'Kontaktujte Nás',
    
    // About Section
    'about.title': 'O SPOLEČNOSTI AMIDAMARU',
    'about.subtitle': 'Spolehlivé řešení pro kompletní silniční přepravu',
    'about.description': 'AMIDAMARU byla založena v roce 2006 a od té doby poskytujeme logistické služby nejvyšší kvality pro všeobecné zboží. V průběhu let jsme se rozvinuli, abychom podpořili širokou škálu klientů v přepravě zboží po celé Evropě. S podporou našich partnerů a klientů každoročně zvyšujeme objem přepravy a reagujeme rychle, seriózně a s nejvyšší kvalitou na jejich požadavky a potřeby.',
    'about.experience': 'Let Zkušeností',
    'about.countries': 'Evropských Zemí',
    'about.trucks': 'Moderních Kamionů',
    'about.deliveries': 'Úspěšných Dodávek',
    
    // Services Section
    'services.title': 'NAŠE SLUŽBY',
    'services.subtitle': 'Chápeme, že naši klienti mají závazky vůči svým vlastním zákazníkům. Známe důležitost termínů a v každé přepravě se snažíme splnit náš závazek vůči klientům, abychom jim umožnili dodržet jejich vlastní termíny a smlouvy.',
    'services.ftl.title': 'Celokamionová Přeprava (FTL)',
    'services.ftl.description': 'Kompletní kamion věnovaný vašemu nákladu. Ideální pro velké zásilky vyžadující exkluzivní přepravu.',
    'services.ltl.title': 'Částečná Přeprava (LTL)',
    'services.ltl.description': 'Ekonomické řešení pro menší zásilky. Sdílejte prostor kamionu a snižte náklady.',
    'services.express.title': 'Expresní Doručení',
    'services.express.description': 'Časově kritické zásilky doručené s prioritou. Rychlé a spolehlivé expresní dopravní služby.',
    'services.logistics.title': 'Logistická Řešení',
    'services.logistics.description': 'Komplexní logistický management včetně plánování distribuce, optimalizace tras a koordinace dodavatelského řetězce.',
    
    // Fleet Section
    'fleet.title': 'NAŠE FLOTILA',
    'fleet.subtitle': 'Moderní vozidla pro bezpečnou a efektivní přepravu',
    'fleet.description': 'Naše flotila se skládá z moderních kamionů Volvo a Iveco vybavených nejnovějšími technologiemi pro sledování a kontrolu teploty. Všechna vozidla splňují emisní normy Euro 6.',
    'fleet.viewMore': 'Zobrazit Více',
    'fleet.viewLess': 'Zobrazit Méně',
    
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
    'contact.info.hours.value': 'Po - Pá: 09:00 - 17:00 (RO čas)',
    
    // Company Details
    'company.title': 'ÚDAJE O SPOLEČNOSTI',
    'company.name': 'Název Společnosti',
    'company.cui': 'Daňové ID (CUI)',
    'company.regcom': 'Obchodní Rejstřík',
    'company.address': 'Sídlo Společnosti',
    'company.address.value': 'Str. Centura Nord Km 541+150 (DN 7), Arad, Rumunsko',
    
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
    'hero.title': 'TWÓJ PARTNER W ZINTEGROWANEJ LOGISTYCE',
    'hero.subtitle': 'Profesjonalizm, jakość i rzetelność w transporcie towarów',
    'hero.description': 'AMIDAMARU jest Twoim partnerem w zintegrowanych usługach logistycznych z wieloletnim doświadczeniem w efektywnym transporcie towarów. Jesteśmy Twoim zaufanym partnerem oferującym bezpieczeństwo i efektywność w transporcie Twoich towarów w całej Europie.',
    'hero.cta.quote': 'Zapytaj o Ofertę',
    'hero.cta.contact': 'Skontaktuj się',
    
    // About Section
    'about.title': 'O FIRMIE AMIDAMARU',
    'about.subtitle': 'Pewne rozwiązanie dla kompletnych transportów drogowych',
    'about.description': 'AMIDAMARU została założona w 2006 roku i od tego czasu świadczymy usługi logistyczne najwyższej jakości dla ładunków ogólnych. Przez lata rozwijaliśmy się, aby wspierać szeroką gamę klientów w transporcie towarów w całej Europie. Dzięki wsparciu naszych partnerów i klientów co roku zwiększamy wolumen transportu, reagując szybko, poważnie i z najwyższą jakością na ich wymagania i potrzeby.',
    'about.experience': 'Lat Doświadczenia',
    'about.countries': 'Krajów Europejskich',
    'about.trucks': 'Nowoczesnych Ciężarówek',
    'about.deliveries': 'Udanych Dostaw',
    
    // Services Section
    'services.title': 'NASZE USŁUGI',
    'services.subtitle': 'Rozumiemy, że nasi klienci mają zobowiązania wobec swoich własnych klientów. Znamy znaczenie terminów i dążymy w każdym transporcie do wypełnienia naszego zobowiązania wobec klientów, aby umożliwić im dotrzymanie własnych terminów i umów.',
    'services.ftl.title': 'Pełny Ładunek (FTL)',
    'services.ftl.description': 'Cała ciężarówka dedykowana Twojemu ładunkowi. Idealne dla dużych przesyłek wymagających transportu na wyłączność.',
    'services.ltl.title': 'Ładunek Częściowy (LTL)',
    'services.ltl.description': 'Ekonomiczne rozwiązanie dla mniejszych przesyłek. Dziel przestrzeń ciężarówki i obniżaj koszty.',
    'services.express.title': 'Dostawa Ekspresowa',
    'services.express.description': 'Pilne przesyłki dostarczane priorytetowo. Szybkie i niezawodne usługi transportu ekspresowego.',
    'services.logistics.title': 'Rozwiązania Logistyczne',
    'services.logistics.description': 'Kompleksowe zarządzanie logistyką obejmujące planowanie dystrybucji, optymalizację tras i koordynację łańcucha dostaw.',
    
    // Fleet Section
    'fleet.title': 'NASZA FLOTA',
    'fleet.subtitle': 'Nowoczesne pojazdy dla bezpiecznego i wydajnego transportu',
    'fleet.description': 'Nasza flota składa się z nowoczesnych ciężarówek Volvo i Iveco wyposażonych w najnowsze technologie śledzenia i kontroli temperatury. Wszystkie pojazdy spełniają normy emisji Euro 6.',
    'fleet.viewMore': 'Zobacz Więcej',
    'fleet.viewLess': 'Zobacz Mniej',
    
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
    'contact.info.hours.value': 'Pon - Pt: 09:00 - 17:00 (Czas RO)',
    
    // Company Details
    'company.title': 'DANE FIRMY',
    'company.name': 'Nazwa Firmy',
    'company.cui': 'NIP (CUI)',
    'company.regcom': 'Rejestr Handlowy',
    'company.address': 'Siedziba Firmy',
    'company.address.value': 'Str. Centura Nord Km 541+150 (DN 7), Arad, Rumunia',
    
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
    'hero.title': 'PARTNERE AZ INTEGRÁLT LOGISZTIKÁBAN',
    'hero.subtitle': 'Professzionalizmus, minőség és megbízhatóság az áruszállításban',
    'hero.description': 'Az AMIDAMARU az Ön partnere az integrált logisztikai szolgáltatásokban, széleskörű szakértelemmel a hatékony áruszállításban. Megbízható partnerként biztonságot és hatékonyságot kínálunk árui szállításában Európa bármely pontjára.',
    'hero.cta.quote': 'Ajánlatkérés',
    'hero.cta.contact': 'Kapcsolatfelvétel',
    
    // About Section
    'about.title': 'AZ AMIDAMARU-RÓL',
    'about.subtitle': 'Megbízható megoldás a teljes közúti szállításhoz',
    'about.description': 'Az AMIDAMARU 2006-ban alakult, és azóta a legmagasabb minőségű logisztikai szolgáltatásokat nyújtjuk általános áruk szállítására. Az évek során fejlődtünk, hogy az ügyfelek széles körét támogassuk az áruszállításban Európa-szerte. Partnereink és ügyfeleink támogatásával évről évre növeljük a szállítási volument, gyorsan, komolyan és a legmagasabb minőségben reagálva igényeikre és szükségleteikre.',
    'about.experience': 'Év Tapasztalat',
    'about.countries': 'Európai Ország',
    'about.trucks': 'Modern Teherautó',
    'about.deliveries': 'Sikeres Szállítás',
    
    // Services Section
    'services.title': 'SZOLGÁLTATÁSAINK',
    'services.subtitle': 'Megértjük, hogy ügyfeleinknek kötelezettségeik vannak saját ügyfeleik felé. Ismerjük a határidők fontosságát, és minden szállításnál törekszünk kötelezettségeink teljesítésére, hogy ügyfeleink betarthassák saját határideiket és szerződéseiket.',
    'services.ftl.title': 'Teljes Rakományú Szállítás (FTL)',
    'services.ftl.description': 'Teljes teherautó az Ön rakományának. Ideális nagy szállítmányokhoz, amelyek kizárólagos szállítást igényelnek.',
    'services.ltl.title': 'Részrakományos Szállítás (LTL)',
    'services.ltl.description': 'Költséghatékony megoldás kisebb szállítmányokhoz. Ossza meg a teherautó helyét és csökkentse költségeit.',
    'services.express.title': 'Expressz Szállítás',
    'services.express.description': 'Időérzékeny szállítmányok prioritással kézbesítve. Gyors és megbízható expressz szállítási szolgáltatások.',
    'services.logistics.title': 'Logisztikai Megoldások',
    'services.logistics.description': 'Teljes körű logisztikai menedzsment, beleértve a disztribúció tervezését, útvonal optimalizálást és ellátási lánc koordinációt.',
    
    // Fleet Section
    'fleet.title': 'FLOTTÁNK',
    'fleet.subtitle': 'Modern járművek a biztonságos és hatékony szállításért',
    'fleet.description': 'Flottánk modern Volvo és Iveco teherautókból áll, amelyek a legújabb nyomkövetési és hőmérséklet-szabályozási technológiával vannak felszerelve. Minden jármű megfelel az Euro 6 kibocsátási szabványoknak.',
    'fleet.viewMore': 'Több Megtekintése',
    'fleet.viewLess': 'Kevesebb Megtekintése',
    
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
    'contact.info.hours.value': 'H - P: 09:00 - 17:00 (RO idő)',
    
    // Company Details
    'company.title': 'CÉGADATOK',
    'company.name': 'Cégnév',
    'company.cui': 'Adószám (CUI)',
    'company.regcom': 'Cégjegyzékszám',
    'company.address': 'Székhely',
    'company.address.value': 'Str. Centura Nord Km 541+150 (DN 7), Arad, Románia',
    
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

