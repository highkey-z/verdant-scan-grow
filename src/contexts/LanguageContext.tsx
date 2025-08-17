import React, { createContext, useContext, useState } from 'react';

export type Language = {
  code: string;
  name: string;
  flag: string;
};

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' }
];

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  // Simple translation function - in a real app, you'd load actual translations
  const t = (key: string): string => {
    // For demo purposes, just return the key for non-English languages
    if (currentLanguage.code === 'en') {
      return key;
    }
    
    // Basic translations for key terms
    const translations: Record<string, Record<string, string>> = {
      es: {
        'Home': 'Inicio',
        'Application': 'Aplicación',
        'Download': 'Descargar',
        'FAQ': 'Preguntas Frecuentes',
        'Identify Plants with AI': 'Identifica Plantas con IA',
        'Perfect for Everyone': 'Perfecto para Todos',
        'Ready to Start Your Plant Journey?': '¿Listo para Comenzar tu Viaje con Plantas?'
      },
      fr: {
        'Home': 'Accueil',
        'Application': 'Application',
        'Download': 'Télécharger',
        'FAQ': 'Questions Fréquentes',
        'Identify Plants with AI': 'Identifier les Plantes avec IA',
        'Perfect for Everyone': 'Parfait pour Tous',
        'Ready to Start Your Plant Journey?': 'Prêt à Commencer votre Voyage Végétal?'
      },
      de: {
        'Home': 'Startseite',
        'Application': 'Anwendung',
        'Download': 'Herunterladen',
        'FAQ': 'Häufige Fragen',
        'Identify Plants with AI': 'Pflanzen mit KI Identifizieren',
        'Perfect for Everyone': 'Perfekt für Jeden',
        'Ready to Start Your Plant Journey?': 'Bereit für Ihre Pflanzenreise?'
      }
    };

    return translations[currentLanguage.code]?.[key] || `[${currentLanguage.code}] ${key}`;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};