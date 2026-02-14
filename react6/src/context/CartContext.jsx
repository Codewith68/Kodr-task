import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  // Add item to cart
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Update item quantity
  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Toggle Saved Item (Wishlist)
  const toggleSaved = (product) => {
    setSavedItems((prevSaved) => {
      const isSaved = prevSaved.some((item) => item.id === product.id);
      if (isSaved) {
        return prevSaved.filter((item) => item.id !== product.id);
      }
      return [...prevSaved, product];
    });
  };

  // Move to Cart from Saved
  const moveToCart = (product) => {
      addToCart(product, 1);
      toggleSaved(product); // Remove from saved after adding to cart
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate totals
  const cartCount = cart.length; // Modified to show unique items count as requested
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const value = {
    cart,
    savedItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleSaved,
    moveToCart,
    clearCart,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
