import { useContext } from "react";
import AuthContext from "./AuthContext";
export default function Ejercicio2() {
    const { user, login, logout } = useContext(AuthContext);

    return (
        <div>
            {user ? (
            <>
                <p>Bienvenido, {user.username}</p>
                <button onClick={logout}>Cerrar Sesión</button>
            </>
            ) : (
            <button onClick={() => login("Estudiante")}>Iniciar Sesión</button>
            )}
        </div>
        );
}