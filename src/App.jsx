import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';

// Main App Component
// Wraps the entire application with Context Providers and Router
function App() {
  return (
    // Wrap everything in Context Providers
    // This makes cart, wishlist, and theme state available to all components
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
              {/* Navbar appears on all pages */}
              <Navbar />

              {/* Define Routes */}
              <Routes>
                {/* Home page - Products listing */}
                <Route path="/" element={<Products />} />
                
                {/* Cart page */}
                <Route path="/cart" element={<Cart />} />
                
                {/* Wishlist page */}
                <Route path="/wishlist" element={<Wishlist />} />
                
                {/* Checkout page */}
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </div>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
