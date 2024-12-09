'use client';
import { useState, createContext } from 'react';

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
    const [notifications, setNotifications] = useState([]); 
    const addNotification = (newNotification) => setNotifications([...notifications,newNotification]);
    const deleteNotification = (notificationToDelete) => {
        setNotifications(notifications.filter(notification => notification !== notificationToDelete));
    };
    return (
        <NotificationContext.Provider value={{ notifications, addNotification, deleteNotification}}>
            {children}
        </NotificationContext.Provider>
    );
}
export default NotificationContext;