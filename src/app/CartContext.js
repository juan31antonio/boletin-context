'use client';
import { useState, createContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]); 
    const addItem = (newItem) => setItems([...items,newItem]);
    const deleteItem = (itemToDelete) => {
        setItems(items.filter(item => item !== itemToDelete));
    };
    return (
        <CartContext.Provider value={{ items, addItem, deleteItem}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContext;
