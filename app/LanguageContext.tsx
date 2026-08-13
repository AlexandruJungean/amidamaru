'use client';

import React, { createContext, useContext, useCallback, useEffect, useSyncExternalStore } from 'react';
import { Language, getTranslation, languages, LanguageInfo } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  languages: LanguageInfo[];
  currentLanguageInfo: LanguageInfo;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'amidamaru-language';
const DEFAULT_LANGUAGE: Language = 'ro';

function isLanguage(value: string | null): value is Language {
  return languages.some((item) => item.code === value);
}

function readStoredLanguage(): Language {
  try {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isLanguage(saved)) {
      return saved;
    }
  } catch {
    // localStorage can be unavailable in restricted browsing contexts
  }
  return DEFAULT_LANGUAGE;
}

const languageListeners = new Set<() => void>();

function subscribeToLanguage(onStoreChange: () => void) {
  languageListeners.add(onStoreChange);
  const onStorage = (event: StorageEvent) => {
    if (event.key === LANGUAGE_STORAGE_KEY || event.key === null) {
      onStoreChange();
    }
  };
  window.addEventListener('storage', onStorage);
  return () => {
    languageListeners.delete(onStoreChange);
    window.removeEventListener('storage', onStorage);
  };
}

function emitLanguageChange() {
  languageListeners.forEach((listener) => listener());
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    readStoredLanguage,
    () => DEFAULT_LANGUAGE,
  );

  const setLanguage = useCallback((lang: Language) => {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      // Ignore write failures; UI language still updates for this session
    }
    emitLanguageChange();
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback((key: string) => {
    return getTranslation(language, key);
  }, [language]);

  const currentLanguageInfo = languages.find(l => l.code === language) || languages[0];

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
