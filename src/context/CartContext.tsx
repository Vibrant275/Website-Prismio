"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextType {
    cartItems: any[];
    setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<any[]>([]);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
