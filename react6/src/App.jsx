import { useState, useEffect } from 'react';
import { products } from './data/products';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { SavedItems } from './components/SavedItems';
import { ShoppingBag, Heart, Sun, Moon } from 'lucide-react';
import { useCart } from './context/CartContext';

function App() {
  const [activeSidebar, setActiveSidebar] = useState('cart'); // 'cart' or 'saved'
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { cartCount, savedItems } = useCart();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300 flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 sticky top-0 z-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="bg-black dark:bg-white text-white dark:text-black p-1 rounded transition-colors">
                <ShoppingBag size={20} />
             </div>
             <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">ShipKart</h1>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-500 dark:text-gray-400">
            <a href="#" className="text-black dark:text-white hover:text-black dark:hover:text-white transition-colors">SHOP</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">NEW ARRIVALS</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">BRANDS</a>
          </nav>
          <div className="flex items-center space-x-4">
            
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button 
              onClick={() => setActiveSidebar('saved')}
              className="relative p-2 text-cyan-500 dark:text-cyan-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Heart size={20} />
              {savedItems?.length > 0 && (
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-cyan-900"></span>
              )}
            </button>

            <button 
               onClick={() => setActiveSidebar('cart')}
               className="relative flex items-center gap-2 text-black dark:text-white font-medium"
            >
               <ShoppingBag size={20} />
               <span>{cartCount}</span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Product Grid (Left Side) */}
          <div className="lg:col-span-8">
            <div className="mb-6 flex items-baseline justify-between">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">New Arrivals</h2>
                <a href="#" className="hidden text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 sm:block">
                  Browse all
                </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Sidebar Section (Right Side - Sticky) */}
          <div className="lg:col-span-4 mt-8 lg:mt-0 sticky top-24 h-[calc(100vh-8rem)]">
             {activeSidebar === 'cart' ? (
                 <Cart />
             ) : (
                 <SavedItems onClose={() => setActiveSidebar('cart')} />
             )}
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
