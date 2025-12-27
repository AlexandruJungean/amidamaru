'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Language, getTranslation, languages, LanguageInfo } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  languages: LanguageInfo[];
  currentLanguageInfo: LanguageInfo;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem('amidamaru-language') as Language;
    if (savedLang && languages.some(l => l.code === savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('amidamaru-language', lang);
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }, []);

  const t = useCallback((key: string) => {
    return getTranslation(language, key);
  }, [language]);

  const currentLanguageInfo = languages.find(l => l.code === language) || languages[0];

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{
        language: 'en',
        setLanguage: () => {},
        t: (key: string) => getTranslation('en', key),
        languages,
        currentLanguageInfo: languages[0],
      }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t,
      languages,
      currentLanguageInfo,
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

