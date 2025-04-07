// context/Cartcontext.js
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems(prev => {
            const existingItem = prev.find(i => i.id === item.id);
            if (existingItem) {
                return prev.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const decreaseQuantity = (item) => {
        setCartItems(prev => {
            const existingItem = prev.find(i => i.id === item.id);
            if (existingItem.quantity === 1) {
                return prev.filter(i => i.id !== item.id);
            }
            return prev.map(i =>
                i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
            );
        });
    };

    const removeFromCart = (item) => {
        setCartItems(prev => prev.filter(i => i.id !== item.id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, decreaseQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
