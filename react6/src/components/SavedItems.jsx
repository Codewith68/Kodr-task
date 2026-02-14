import { useCart } from '../context/CartContext';
import { ShoppingBag, X } from 'lucide-react';

export function SavedItems({ onClose }) {
  const { savedItems, moveToCart, toggleSaved } = useCart();

  return (
    <div className="flex flex-col h-full bg-black border-l border-blue-700 shadow-xl">
      <div className="flex items-center justify-between px-6 py-4 border-b border-blue-700">
        <h2 className="text-lg font-semibold text-white">Saved Items ({savedItems.length})</h2>
        <button onClick={onClose} className="text-white hover:text-white-500">
             <X size={24} />
        </button>
      </div>

      {savedItems.length === 0 ? (  
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-blue-700">
          <p>No saved items yet.</p>
          <p className="text-sm mt-2">Heart items to save them for later!</p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {savedItems.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="h-24 w-20 shrink-0 overflow-hidden rounded-md border border-blue-700">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex justify-between text-base font-medium text-white">
                    <h3 className="uppercase text-sm line-clamp-1">{item.name}</h3>
                    <p className="ml-4 text-blue-400">₹{item.price}</p>
                  </div>
                  <p className="mt-1 text-xs text-blue-500 line-through">₹{item.originalPrice}</p>
                </div>
                
                <div className="flex items-center justify-between text-sm mt-2">
                  <button
                    onClick={() => moveToCart(item)}
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-500 font-medium"
                  >
                   <ShoppingBag size={16} />
                   Move to Cart
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleSaved(item)}
                    className="font-medium text-red-500 hover:text-red-700 text-xs"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
