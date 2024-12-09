import { useContext } from 'react';
import NotificationContext from './NotificationContext';

export default function Ejercicio6() {
    const { notifications, deleteNotification } = useContext(NotificationContext);

    return (
        <div>
            <h2>Notificaciones</h2>
            {notifications.map((notification, index) => (
                <div key={index}>
                    <span>{notification.name}</span>
                    <button onClick={() => deleteNotification(notification)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
}