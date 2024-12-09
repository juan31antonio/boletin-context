'use client';
import { useState, createContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); 
    const login = (username) => setUser({ username });
    const logout = () => setUser(null);
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthContext;
