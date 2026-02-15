import { useForm } from 'react-hook-form';
import { useCart } from '../context/CartContext';
import { Plus, Heart } from 'lucide-react';

export function ProductCard({ product }) {
  const { addToCart, toggleSaved, savedItems } = useCart();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      quantity: 1,
    },
  });

  const isSaved = savedItems?.some((item) => item.id === product.id);

  const onSubmit = (data) => {
    addToCart(product, parseInt(data.quantity, 10));
    reset(); // Reset form after adding
  };

  return (
    <div className="group relative bg-white border border-gray-100 overflow-hidden transition-all hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="relative aspect-3/4 overflow-hidden bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-4 right-4">
           {/* Bookmark icon functionality */}
           <button 
             onClick={() => toggleSaved(product)}
             className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-500 hover:text-red-500 transition-colors shadow-sm"
           >
             <Heart 
               className={`w-5 h-5 transition-colors ${isSaved ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
             />
           </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white uppercase tracking-wide truncate">
          {product.name}
        </h3>
        <div className="mt-1 flex items-center space-x-2">
          <p className="text-sm font-semibold text-black dark:text-gray-200">₹{product.price}</p>
          <p className="text-xs text-gray-500 line-through">₹{product.originalPrice}</p>
          <span className="text-xs font-medium text-red-500">{product.discount}</span>
        </div>

        {/* Add to Cart Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex items-center justify-between">
           {/* Hidden Quantity Input (default 1) */}
           <input type="hidden" {...register('quantity')} />
           
           <button
            type="submit"
            className="group flex w-full items-center justify-center gap-2 bg-transparent border border-gray-200 dark:border-gray-600 py-2.5 text-sm font-medium text-gray-900 dark:text-white hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-colors"
           >
             Add to Cart
             <Plus className="h-4 w-4" />
           </button>
        </form>
      </div>
    </div>
  );
}
