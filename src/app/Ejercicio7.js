import { useContext } from 'react';
import SettingsContext from './SettingsContext';

export default function Ejercicio7() {
    const { settings, updateSetting } = useContext(SettingsContext);

    const optionChange = (settingKey) => {
        updateSetting(settingKey, !settings[settingKey]);
    };

    return (
        <div>
            <h2>Configuraciones</h2>
            <label>
                <input
                    type="checkbox"
                    checked={settings.notifications}
                    onChange={() => optionChange('notifications')}
                />
                Habilitar notificaciones
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={settings.darkMode}
                    onChange={() => optionChange('darkMode')}
                />
                Activar modo oscuro
            </label>
        </div>
    );
}