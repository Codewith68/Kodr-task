import { useCart } from '../context/CartContext';
import { FREE_SHIPPING_THRESHOLD } from '../data/products';

// FreeShippingBanner Component
// Shows a progress bar indicating how much more is needed for free shipping
const FreeShippingBanner = () => {
  const { cartTotal } = useCart();

  // Calculate how much more is needed for free shipping
  const amountNeeded = FREE_SHIPPING_THRESHOLD - cartTotal;
  
  // Calculate progress percentage (max 100%)
  const progressPercentage = Math.min(
    (cartTotal / FREE_SHIPPING_THRESHOLD) * 100,
    100
  );

  // Don't show banner if cart is empty
  if (cartTotal === 0) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-100 rounded-xl p-6 mb-6 animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
          </div>
          <div>
            {amountNeeded > 0 ? (
              <div>
                <p className="text-gray-900 font-semibold">
                  Add ₹{amountNeeded.toLocaleString()} more for free shipping! 🚚
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  You're almost there! Keep shopping to unlock free delivery.
                </p>
              </div>
            ) : (
              <div>
                <p className="text-green-700 font-semibold flex items-center space-x-2">
                  <span>🎉</span>
                  <span>Congratulations! You've unlocked free shipping!</span>
                </p>
                <p className="text-sm text-green-600 mt-1">
                  Your order qualifies for complimentary delivery.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ease-out rounded-full ${
              amountNeeded > 0
                ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                : 'bg-gradient-to-r from-green-500 to-green-600'
            }`}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        
        {/* Progress Labels */}
        <div className="flex justify-between mt-2 text-xs text-gray-600">
          <span className="font-medium">₹{cartTotal.toLocaleString()}</span>
          <span className="font-medium">
            ₹{FREE_SHIPPING_THRESHOLD.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeShippingBanner;
