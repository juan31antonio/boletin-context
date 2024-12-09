import { useContext } from 'react';
import PermissionsContext from './PermissionsContext';

export default function Ejercicio5() {
    const { permissions, fetchPermissions } = useContext(PermissionsContext);

    const updatePermissions = () => {
        fetchPermissions();
    };

    return (
        <div>
            {permissions.admin ? (
                <div>
                    <h1>Panel de Administración</h1>
                    <button onClick={updatePermissions}>Actualizar permisos</button>
                </div>
            ) : (
                <h1>No tienes permiso para acceder al panel de administración.</h1>
            )}
        </div>
    );
}