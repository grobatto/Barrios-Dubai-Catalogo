'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, languages, isRTL } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  isRTL: boolean;
  supportedLanguages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  // Load language preference from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('preferred-language') as Language | null;
    if (saved && languages.map(l => l.code).includes(saved)) {
      setLanguageState(saved);
      updateDocumentLanguage(saved);
    }
    setMounted(true);
  }, []);

  // Update document when language changes
  useEffect(() => {
    if (mounted) {
      updateDocumentLanguage(language);
      localStorage.setItem('preferred-language', language);
    }
  }, [language, mounted]);

  const updateDocumentLanguage = (lang: Language) => {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', lang);
    htmlElement.setAttribute('dir', isRTL(lang) ? 'rtl' : 'ltr');
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        isRTL: isRTL(language),
        supportedLanguages: languages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
