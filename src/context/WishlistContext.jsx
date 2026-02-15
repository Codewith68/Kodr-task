import { createContext, useContext, useState } from 'react';

// Create the Wishlist Context
const WishlistContext = createContext();

// Custom hook to use the Wishlist Context
// This makes it easier to access wishlist state and functions in any component
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

// Wishlist Provider Component
// This wraps around the app and provides wishlist state to all children
export const WishlistProvider = ({ children }) => {
  // State to store wishlist items
  const [wishlistItems, setWishlistItems] = useState([]);

  // Add item to wishlist
  // Only add if it doesn't already exist
  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      // Check if item already exists in wishlist
      const exists = prevItems.find((item) => item.id === product.id);
      
      if (!exists) {
        // Item doesn't exist, add it
        return [...prevItems, product];
      }
      // Item already exists, return unchanged
      return prevItems;
    });
  };

  // Remove item from wishlist
  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Check if an item is in the wishlist
  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  // Clear all items from wishlist
  const clearWishlist = () => {
    setWishlistItems([]);
  };

  // Value object that will be provided to all children
  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
