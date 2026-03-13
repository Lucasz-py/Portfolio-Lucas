import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'es' | 'en';
  toggleLanguage: () => void;
  t: (es: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  toggleLanguage: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  t: (es, _en) => es,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = (es: string, en: string) => {
    return language === 'es' ? es : en;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};