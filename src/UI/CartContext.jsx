import React, { createContext, useContext, useState } from 'react';

// Create the Cart Context
const CartContext = createContext();

// Custom Hook to use the Cart Context
export const useCart = () => useContext(CartContext);

// Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);  // Add state to store orders

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const addOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, orders, addOrder }}>
      {children}
    </CartContext.Provider>
  );
};
