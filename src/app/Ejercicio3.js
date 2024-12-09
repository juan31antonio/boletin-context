import { useContext } from "react";
import LanguageContext from "./LanguageContext";
export default function Ejercicio3() {
    const { language, changeLanguage } = useContext(LanguageContext);

    return (
        <div>
            {language === 'es' ? (
            <>
                <h1>Hola</h1>
                <button onClick={changeLanguage}>Cambiar Idioma</button>
            </>
            ) : (
                <>
                <h1>Hello</h1>
                <button onClick={changeLanguage}>Change Language</button>
            </>
            )}
        </div>
        );
}