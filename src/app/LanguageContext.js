'use client';
import { useState, createContext } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('es'); 
    const changeLanguage = () => setLanguage(language === 'es' ? 'en' : 'es');
    return (
        <LanguageContext.Provider value={{ language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
}
export default LanguageContext;
