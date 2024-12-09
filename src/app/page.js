'use client';
import { useContext } from 'react';
import ThemeContext, { ThemeProvider } from './ThemeContext';
import Ejercicio2 from './Ejercicio2';
import { AuthProvider } from './AuthContext';
import Ejercicio3 from './Ejercicio3';
import { LanguageProvider } from './LanguageContext';
import { CartProvider } from './CartContext';
import Ejercicio4 from './Ejercicio4';
import Ejercicio6 from './Ejercicio6';
import { NotificationProvider } from "./NotificationContext";
import { SettingsProvider } from './SettingsContext';
import Ejercicio7 from './Ejercicio7';
import Ejercicio8 from './Ejercicio8';
import { LoadingProvider } from "./LoadingContext";

export default function Home() {
  return (
    <LoadingProvider>
      <SettingsProvider>
        <NotificationProvider>
          <CartProvider>
            <LanguageProvider>
              <AuthProvider> 
                <ThemeProvider> 
                  <Content /> 
                </ThemeProvider>
              </AuthProvider>
            </LanguageProvider>
          </CartProvider>
        </NotificationProvider>
      </SettingsProvider>
    </LoadingProvider>
  );
}

function Content() {
  const { theme, toggleTheme } = useContext(ThemeContext); 

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        height: '100vh',
      }}
      
    >
      <h1>El tema actual es: {theme}</h1>
      <button onClick={toggleTheme}>Cambiar Tema</button>
      <Ejercicio2></Ejercicio2>
      <Ejercicio3></Ejercicio3>
      <Ejercicio4></Ejercicio4>
      <Ejercicio6></Ejercicio6>
      <Ejercicio7></Ejercicio7>
      <Ejercicio8></Ejercicio8>
    </div>
  );
}