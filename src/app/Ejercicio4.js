import { useState, useContext } from "react";
import CartContext from "./CartContext";
import NotificationContext from './NotificationContext';
import SettingsContext  from "./SettingsContext";

function Cart({ items, deleteItem }) {
    return (
        <div>
            <h2>Carrito</h2>
            {items.map((item, index) => (
                <div key={index}>
                    <span>{item.name}</span>
                    <button onClick={() => deleteItem(item)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
}


export default function Ejercicio4() {
    const { items, addItem, deleteItem } = useContext(CartContext);
    const { settings } = useContext(SettingsContext);
    const { addNotification } = useContext(NotificationContext);
    const [productName, setProductName] = useState('');

    const handleAddItem = (e) => {
        e.preventDefault();
        if (productName) {
            const newItem = { name: productName };
            addItem(newItem);
            if(settings.notifications){
                addNotification(newItem)
            }
            setProductName('');
        }
        
    };

    return (
        <div>
            <h2>Lista de Productos</h2>
            <form onSubmit={handleAddItem}>
                <input 
                    type="text" 
                    value={productName} 
                    onChange={(e) => setProductName(e.target.value)} 
                    placeholder="Nombre del producto"
                />
                <button type="submit">Agregar al carrito</button>
            </form>
            <Cart items={items} deleteItem={deleteItem} />
        </div>
    );
}