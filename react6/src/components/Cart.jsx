import { useCart } from '../context/CartContext';
import { Minus, Plus, X } from 'lucide-react';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-8 text-gray-500">
        <p>Your cart is empty.</p>
        <p className="text-sm mt-2">Start adding some stylish items!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white border-l border-gray-200 shadow-xl">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">My Cart ({cartCount})</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="h-24 w-20 shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3 className="uppercase text-sm">{item.name}</h3>
                  <p className="ml-4">₹{item.price * item.quantity}</p>
                </div>
                <p className="mt-1 text-xs text-gray-500 line-through">₹{item.originalPrice * item.quantity}</p>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                 <div className="flex items-center border border-gray-300">
                    <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 hover:bg-gray-100 transition-colors"
                        disabled={item.quantity <= 1}
                    >
                        <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-3 font-medium text-gray-900">{item.quantity}</span>
                    <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 hover:bg-gray-100 bg-black text-white transition-colors"
                    >
                        <Plus className="h-4 w-4" />
                    </button>
                 </div>

                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="font-medium text-red-500 hover:text-red-700 text-xs border border-gray-200 px-3 py-1 hover:border-red-200 transition-colors"
                >
                  Remove From Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 px-6 py-4 bg-gray-50 dark:bg-gray-800 transition-colors">
        {/* Free Shipping Progress */}
        <div className="mb-4">
             {cartTotal >= 200000 ? (
                 <div className="p-3 bg-green-100 text-green-800 rounded-md text-sm font-medium text-center dark:bg-green-900 dark:text-green-100">
                     🎉 You unlocked FREE SHIPPING!
                 </div>
             ) : (
                 <div>
                     <div className="flex justify-between text-sm mb-1 text-gray-600 dark:text-gray-400">
                         <span>Add <strong>₹{200000 - cartTotal}</strong> for free shipping</span>
                         <span>{Math.min(100, (cartTotal / 200000) * 100).toFixed(0)}%</span>
                     </div>
                     <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                         <div 
                            className="h-full bg-black dark:bg-white transition-all duration-500"
                            style={{ width: `${(cartTotal / 20000) * 100}%` }}
                         ></div>
                     </div>
                 </div>
             )}
        </div>

        <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white mb-4">
          <p>Total Payable</p>
          <p>₹{cartTotal}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500 pb-4">Shipping and taxes calculated at checkout.</p>
        <div className="mt-6">
          <button
            className="flex w-full items-center justify-center bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800 transition-all"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
