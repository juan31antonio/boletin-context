'use client';
import { useState, createContext } from 'react';

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
    const [settings, setSettings] = useState({
        notifications: true,
        darkMode: false,
    });


    const updateSetting = (settingKey, value) => {
        setSettings(prevSettings => ({
            ...prevSettings,
            [settingKey]: value,
        }));
    };

    return (
        <SettingsContext.Provider value={{ settings, updateSetting }}>
            {children}
        </SettingsContext.Provider>
    );
}

export default SettingsContext;