
"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import en from '@/locales/en.json';
import es from '@/locales/es.json';
import fr from '@/locales/fr.json';
import de from '@/locales/de.json';
import hi from '@/locales/hi.json';
import it from '@/locales/it.json';
import pt from '@/locales/pt.json';
import ja from '@/locales/ja.json';

const translations: Record<string, any> = { 
  English: en, 
  Spanish: es, 
  French: fr, 
  German: de, 
  Hindi: hi,
  Italian: it,
  Portuguese: pt,
  Japanese: ja
};

interface LanguageContextType {
  language: string;
  t: (key: string, replacements?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, language }: { children: ReactNode, language: string }) {
  const [currentTranslations, setCurrentTranslations] = useState(translations[language]);

  useEffect(() => {
    setCurrentTranslations(translations[language]);
  }, [language]);

  const t = (key: string, replacements: Record<string, string | number> = {}) => {
    const keys = key.split('.');
    let result = currentTranslations;
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        return key; // Return key if not found
      }
    }
    
    let strResult = String(result);
    Object.keys(replacements).forEach(rKey => {
        strResult = strResult.replace(`{{${rKey}}}`, String(replacements[rKey]));
    });

    return strResult;
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
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
