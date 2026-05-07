import React, { createContext, useState, useEffect } from 'react';
import { translations } from './translations';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const t = (key) => {
    return translations[lang]?.[key] || translations['en']?.[key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.className = "lang-" + lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
