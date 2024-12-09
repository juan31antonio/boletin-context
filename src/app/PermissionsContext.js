'use client';
import { useState, createContext } from 'react';

const PermissionsContext = createContext();

export function PermissionsProvider({ children }) {
    const [permissions, setPermissions] = useState({});
    
    

    useEffect(() => {
        fetchPermissions(); 
    }, []);

    return (
        <PermissionsContext.Provider value={{ permissions, fetchPermissions }}>
            {children}
        </PermissionsContext.Provider>
    );
}

export default PermissionsContext;