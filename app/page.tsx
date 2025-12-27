'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";

// Navigation Component
function Navigation() {
  const { t, language, setLanguage, languages, currentLanguageInfo } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#services', label: t('nav.services') },
    { href: '#fleet', label: t('nav.fleet') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-zinc-200' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Amidamaru Logo"
              width={180}
              height={50}
              className="h-8 md:h-12 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-base font-medium uppercase tracking-wide transition-colors relative py-2 hover:text-[#D32027] ${
                  isScrolled ? 'text-zinc-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors border ${
                  isScrolled 
                    ? 'bg-zinc-100 border-zinc-200 text-zinc-900' 
                    : 'bg-white/10 border-white/20 text-white backdrop-blur-sm'
                }`}
              >
                <img 
                  src={`https://flagcdn.com/w40/${currentLanguageInfo.flag}.png`}
                  srcSet={`https://flagcdn.com/w80/${currentLanguageInfo.flag}.png 2x`}
                  alt={currentLanguageInfo.name}
                  className="w-6 h-auto rounded-sm"
                />
                <span className="text-sm font-medium">{currentLanguageInfo.code.toUpperCase()}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-zinc-200 rounded-lg shadow-xl overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-zinc-100 transition-colors ${
                        language === lang.code ? 'bg-[#D32027]/20 text-[#D32027]' : ''
                      }`}
                    >
                      <img 
                        src={`https://flagcdn.com/w40/${lang.flag}.png`}
                        srcSet={`https://flagcdn.com/w80/${lang.flag}.png 2x`}
                        alt={lang.name}
                        className="w-6 h-auto rounded-sm"
                      />
                      <span className="font-medium">{lang.nativeName}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <a href="#contact" className="btn-primary text-sm py-3 px-6">
              {t('hero.cta.quote')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Mobile Language Switcher */}
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={`flex items-center gap-1 px-2 py-1 rounded ${
                isScrolled ? 'bg-zinc-100' : 'bg-white/10 backdrop-blur-sm'
              }`}
            >
              <img 
                src={`https://flagcdn.com/w40/${currentLanguageInfo.flag}.png`}
                srcSet={`https://flagcdn.com/w80/${currentLanguageInfo.flag}.png 2x`}
                alt={currentLanguageInfo.name}
                className="w-6 h-auto rounded-sm"
              />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-zinc-900' : 'text-white'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Language Dropdown */}
        {isLangMenuOpen && (
          <div className="lg:hidden absolute right-4 mt-2 w-48 bg-white border border-zinc-200 rounded-lg shadow-xl overflow-hidden z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsLangMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-zinc-100 transition-colors ${
                  language === lang.code ? 'bg-[#D32027]/20 text-[#D32027]' : ''
                }`}
              >
                <img 
                  src={`https://flagcdn.com/w40/${lang.flag}.png`}
                  srcSet={`https://flagcdn.com/w80/${lang.flag}.png 2x`}
                  alt={lang.name}
                  className="w-6 h-auto rounded-sm"
                />
                <span className="font-medium">{lang.nativeName}</span>
              </button>
            ))}
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-zinc-200">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 text-lg font-medium hover:bg-zinc-100 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mt-4 btn-primary text-center"
              >
                {t('hero.cta.quote')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/IMG_7762.jpg"
          alt="Amidamaru Trucks"
          fill
          className="object-cover"
          priority
        />
        {/* Strong overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        {/* Red accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D32027]/20 via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 hero-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">Arad, Romania • EU Licensed Carrier</span>
          </div>

          {/* Main Title */}
          <h1 className="section-title text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 font-light mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>

          {/* Description */}
          <p className="text-lg text-white/80 mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {t('hero.cta.quote')}
            </a>
            <a href="#about" className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white/50 hover:bg-white hover:text-zinc-900 transition-all uppercase tracking-wide">
              {t('hero.cta.contact')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors">
          <span className="text-sm">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

// Stats Component
function StatsSection() {
  const { t } = useLanguage();
  
  const stats = [
    { number: '18+', label: t('about.experience') },
    { number: '14+', label: t('about.countries') },
    { number: '16+', label: t('about.trucks') },
    { number: '5000+', label: t('about.deliveries') },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="text-center animate-fade-in-up"
          style={{ animationDelay: `${0.1 * index}s` }}
        >
          <div className="stat-number">{stat.number}</div>
          <div className="text-zinc-600 text-sm md:text-base font-medium uppercase tracking-wide mt-2">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// About Section
function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-slide-in-left">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/IMG_7540.jpg"
                alt="Amidamaru Headquarters"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#D32027]/20 to-transparent rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="animate-slide-in-right">
            <div className="divider mb-6" />
            <h2 className="section-title text-zinc-900 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-[#D32027] font-medium mb-4">
              {t('about.subtitle')}
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: '🚛', text: 'Modern Fleet' },
                { icon: '🌍', text: 'Pan-European' },
                { icon: '⏰', text: 'On-Time Delivery' },
                { icon: '🛡️', text: 'Fully Insured' },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-zinc-100 rounded-lg">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              {t('hero.cta.contact')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 pt-16 border-t border-zinc-200">
          <StatsSection />
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: t('services.ftl.title'),
      description: t('services.ftl.description'),
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: t('services.ltl.title'),
      description: t('services.ltl.description'),
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('services.express.title'),
      description: t('services.express.description'),
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: t('services.logistics.title'),
      description: t('services.logistics.description'),
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="divider mx-auto mb-6" />
          <h2 className="section-title text-zinc-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="section-subtitle mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-8 text-center group animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D32027]/20 to-[#D32027]/5 text-[#D32027] mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-display tracking-wide">
                {service.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Fleet Gallery Section
function FleetSection() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const fleetImages = [
    // First 6 images (always visible)
    { src: '/images/WhatsApp Image 2025-12-27 at 20.13.45.jpeg', alt: 'Amidamaru Truck on Highway' },
    { src: '/images/481670986_2622106481313194_5432381489758203524_n.jpg', alt: 'Iveco Trucks' },
    { src: '/images/WhatsApp Image 2025-12-26 at 18.01.03-2.jpeg', alt: 'Volvo FH Fleet' },
    { src: '/images/WhatsApp Image 2025-12-26 at 19.11.47.jpeg', alt: 'Transport Operations' },
    { src: '/images/WhatsApp Image 2025-12-26 at 18.16.28-8.jpeg', alt: 'Loading Dock' },
    { src: '/images/WhatsApp Image 2025-12-26 at 18.01.04-7.jpeg', alt: 'Branded Trailers' },
    // Additional images (shown when expanded)
    { src: '/images/WhatsApp Image 2025-12-26 at 18.17.09.jpeg', alt: 'Modern Trucks' },
    { src: '/images/WhatsApp Image 2025-12-26 at 19.20.30.jpeg', alt: 'Fleet Lineup' },
    { src: '/images/WhatsApp Image 2025-12-26 at 19.22.00.jpeg', alt: 'Truck Loading' },
    { src: '/images/WhatsApp Image 2025-12-26 at 18.01.04-6.jpeg', alt: 'European Transport' },
    { src: '/images/WhatsApp Image 2025-12-26 at 18.01.04-5.jpeg', alt: 'Logistics Operations' },
    { src: '/images/WhatsApp Image 2025-12-26 at 18.16.51.jpeg', alt: 'Road Transport' },
  ];

  const visibleImages = showAll ? fleetImages : fleetImages.slice(0, 6);
  const hiddenCount = fleetImages.length - 6;

  return (
    <section id="fleet" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="divider mx-auto mb-6" />
          <h2 className="section-title text-zinc-900 mb-4">
            {t('fleet.title')}
          </h2>
          <p className="section-subtitle mx-auto">
            {t('fleet.subtitle')}
          </p>
        </div>

        {/* Description */}
        <p className="text-center text-zinc-600 text-lg max-w-3xl mx-auto mb-12">
          {t('fleet.description')}
        </p>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (index % 6)}s` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* View More / View Less Button */}
        {hiddenCount > 0 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-[var(--red-primary)] text-[var(--red-primary)] font-semibold rounded-lg hover:bg-[var(--red-primary)] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {showAll ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  {t('fleet.viewLess')}
                </>
              ) : (
                <>
                  {t('fleet.viewMore')} (+{hiddenCount})
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}

        {/* Fleet Brands */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-12 opacity-60">
          <div className="text-2xl font-bold tracking-widest text-zinc-500">VOLVO</div>
          <div className="text-2xl font-bold tracking-widest text-zinc-500">IVECO</div>
          <div className="text-2xl font-bold tracking-widest text-zinc-500">EURO 6</div>
        </div>
      </div>
    </section>
  );
}

// Company Details Section
function CompanySection() {
  const { t } = useLanguage();

  const companyInfo = [
    { label: t('company.name'), value: 'S.C. AMIDAMARU S.R.L.' },
    { label: t('company.cui'), value: 'RO18556425' },
    { label: t('company.regcom'), value: 'J02/623/2006' },
    { label: t('company.address'), value: t('company.address.value') },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Company Info */}
          <div>
            <div className="divider mb-6" />
            <h2 className="section-title text-zinc-900 mb-8">
              {t('company.title')}
            </h2>

            <div className="space-y-6">
              {companyInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 bg-zinc-100 rounded-lg border border-zinc-200"
                >
                  <span className="text-zinc-500 font-medium min-w-[140px]">{info.label}:</span>
                  <span className="text-zinc-900 font-semibold">{info.value}</span>
                </div>
              ))}
            </div>

            {/* EU Badge */}
            <div className="mt-8 flex items-center gap-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="star" />
                ))}
              </div>
              <span className="text-blue-400 font-medium">EU Licensed Transport Operator</span>
            </div>
          </div>

          {/* Map */}
          <div>
            <div className="divider mb-6" />
            <h2 className="section-title text-zinc-900 mb-8">
              {t('map.title')}
            </h2>
            <p className="text-zinc-600 mb-6">
              {t('map.subtitle')}
            </p>
            <div className="map-container aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2751.897738553988!2d21.371879376894!3d46.18958267107631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474599ede2e9a647%3A0x92166e8ba960a98c!2sSC%20AMIDAMARU%20SRL!5e0!3m2!1sen!2sro!4v1703682000000!5m2!1sen!2sro"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amidamaru Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
// Uses environment variable for the Web3Forms access key

function ContactSection() {
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '',
          subject: `New Contact from ${formData.name} - Amidamaru Website`,
          from_name: 'Amidamaru Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('sent');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="divider mx-auto mb-6" />
          <h2 className="section-title text-zinc-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="section-subtitle mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.name')}
                  className="form-input"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.email')}
                  className="form-input"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contact.form.phone')}
                  className="form-input"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.message')}
                  rows={5}
                  className="form-input resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {formStatus === 'sending' ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : formStatus === 'sent' ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sent!
                  </>
                ) : formStatus === 'error' ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Error - Try again
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    {t('contact.form.submit')}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D32027]/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#D32027]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{t('contact.info.address')}</h3>
                <p className="text-zinc-600">DN7, Arad<br />România</p>
              </div>
            </div>

            {/* Phone */}
            <div className="card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D32027]/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#D32027]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{t('contact.info.phone')}</h3>
                <p className="text-zinc-600">
                  <a href="tel:+40728174730" className="hover:text-[#E53935] transition-colors">+40 728 174 730</a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D32027]/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#D32027]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{t('contact.info.email')}</h3>
                <p className="text-zinc-600">
                  <a href="mailto:office@amidamaru.ro" className="hover:text-[#D32027] transition-colors">office@amidamaru.ro</a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D32027]/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#D32027]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{t('contact.info.hours')}</h3>
                <p className="text-zinc-600">{t('contact.info.hours.value')}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Image
              src="/logo.png"
              alt="Amidamaru Logo"
              width={200}
              height={56}
              className="h-14 w-auto mb-6"
            />
            <p className="text-zinc-600 text-sm leading-relaxed max-w-md">
              Transport rutier internațional de mărfuri în toată Europa. 
              Flotă modernă Volvo & Iveco, servicii profesionale și livrări la timp.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-zinc-500 text-sm">Follow us:</span>
              <a 
                href="https://www.facebook.com/profile.php?id=100054305449281"
            target="_blank"
            rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1877F2]/10 border border-[#1877F2]/20 hover:bg-[#1877F2]/20 hover:border-[#1877F2]/40 transition-all"
              >
                <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-[#1877F2] text-sm font-medium group-hover:text-zinc-900 transition-colors">Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-zinc-900 font-bold mb-4 uppercase text-sm tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+40728174730" className="text-zinc-600 hover:text-[#D32027] transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +40 728 174 730
                </a>
              </li>
              <li>
                <a href="mailto:office@amidamaru.ro" className="text-zinc-600 hover:text-[#D32027] transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  office@amidamaru.ro
                </a>
              </li>
              <li className="text-zinc-600 flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                DN7, Arad, România
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-zinc-900 font-bold mb-4 uppercase text-sm tracking-wide">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/privacy" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  {t('footer.cookies')}
                </a>
              </li>
            </ul>
            
            {/* Company Info */}
            <div className="mt-6 pt-6 border-t border-zinc-200">
              <p className="text-zinc-500 text-xs">CUI: RO18556425</p>
              <p className="text-zinc-500 text-xs">Reg. Com.: J02/623/2006</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-200 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © {currentYear} S.C. AMIDAMARU S.R.L. {t('footer.rights')}
            </p>
            <p className="text-zinc-600 text-xs">
              Operator de date cu caracter personal înregistrat în România
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FleetSection />
      <CompanySection />
      <ContactSection />
      <Footer />
      </main>
  );
}
