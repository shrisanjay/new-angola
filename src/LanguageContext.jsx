import React, { createContext, useState, useEffect } from 'react';
import { translations } from './translations';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('site_lang') || 'pt';
  });

  const t = (key) => {
    return translations[lang]?.[key] || translations['pt']?.[key] || translations['en']?.[key] || key;
  };

  useEffect(() => {
    localStorage.setItem('site_lang', lang);
    document.documentElement.lang = lang;
    document.body.className = "lang-" + lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
