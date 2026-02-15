# 🛒 Smart Store - Modern E-Commerce Web App

A modern, responsive e-commerce web application built with **React + Vite + Tailwind CSS**, featuring a clean architecture using Context API for state management and React Hook Form for form handling.

![Smart Store](https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=400&fit=crop)

## ✨ Features

### 🏪 Product Listing
- Grid layout with responsive design
- Product cards with images, titles, prices, and descriptions
- Category filtering (All, Electronics, Fashion, Accessories)
- Smooth animations and hover effects

### 🛒 Shopping Cart
- Add/remove items
- Increase/decrease quantity
- Real-time total calculation
- Persistent state using Context API
- Empty cart state with call-to-action

### 🚚 Free Shipping Feature
- Visual progress bar showing distance to free shipping
- Threshold: ₹5000
- Dynamic messaging based on cart total
- Animated progress indicator

### ❤️ Wishlist
- Save favorite products
- One-click move from wishlist to cart
- Heart icon toggle on product cards
- Empty wishlist state

### 📝 Checkout Form
- Built with React Hook Form
- Complete form validation:
  - Name (minimum 2 characters)
  - Email (valid format)
  - Phone (10 digits)
  - Address (minimum 10 characters)
  - City, State, Pincode (6 digits)
- Order summary sidebar
- Console logging of order details

### 🎨 UI/UX Features
- Modern, clean design with Tailwind CSS
- Smooth transitions and animations
- Responsive layout (mobile, tablet, desktop)
- Sticky navigation with cart/wishlist badges
- Loading states and empty states
- Hover effects and micro-interactions

## 🏗️ Project Structure

```
ecommerce-app/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation with badges
│   │   ├── ProductCard.jsx          # Single product display
│   │   └── FreeShippingBanner.jsx   # Shipping progress bar
│   ├── context/
│   │   ├── CartContext.jsx          # Cart state management
│   │   └── WishlistContext.jsx      # Wishlist state management
│   ├── data/
│   │   └── products.js              # Mock product data
│   ├── pages/
│   │   ├── Products.jsx             # Home page with product grid
│   │   ├── Cart.jsx                 # Shopping cart page
│   │   ├── Wishlist.jsx             # Saved items page
│   │   └── Checkout.jsx             # Checkout form page
│   ├── App.jsx                      # Main app component with routes
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles with Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Extract and navigate to the project folder:**
   ```bash
   cd ecommerce-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## 🧠 How It Works

### Context API Architecture

#### CartContext
The `CartContext` provides cart state and functions to all components:

```javascript
const { 
  cartItems,          // Array of cart items
  addToCart,          // Add item to cart
  removeFromCart,     // Remove item completely
  increaseQuantity,   // Increase item quantity
  decreaseQuantity,   // Decrease item quantity
  cartItemsCount,     // Total number of items
  cartTotal,          // Total price
  clearCart           // Clear all items
} = useCart();
```

**How it works:**
1. `CartProvider` wraps the app in `App.jsx`
2. Components use `useCart()` hook to access cart state
3. State updates automatically re-render all subscribed components

#### WishlistContext
The `WishlistContext` manages saved items:

```javascript
const {
  wishlistItems,      // Array of wishlist items
  addToWishlist,      // Add item to wishlist
  removeFromWishlist, // Remove item from wishlist
  isInWishlist,       // Check if item is in wishlist
  clearWishlist       // Clear all items
} = useWishlist();
```

### Component Breakdown

#### 1. Navbar (`components/Navbar.jsx`)
- Displays brand logo and navigation links
- Shows cart count badge (number of items)
- Shows wishlist count badge
- Sticky positioning for easy access

#### 2. ProductCard (`components/ProductCard.jsx`)
- Displays individual product information
- Heart icon for wishlist toggle
- "Add to Cart" button
- Hover effects and animations

#### 3. FreeShippingBanner (`components/FreeShippingBanner.jsx`)
- Calculates remaining amount for free shipping
- Shows progress bar
- Updates dynamically as cart changes
- Hidden when cart is empty

#### 4. Products Page (`pages/Products.jsx`)
- Home page of the application
- Category filter buttons
- Product grid with all items
- Uses mock data from `data/products.js`

#### 5. Cart Page (`pages/Cart.jsx`)
- Lists all cart items
- Quantity controls (+/-)
- Remove item button
- Order summary with totals
- Free shipping banner
- Empty state when no items

#### 6. Wishlist Page (`pages/Wishlist.jsx`)
- Grid of saved items
- "Move to Cart" button
- Remove from wishlist button
- Empty state when no saved items

#### 7. Checkout Page (`pages/Checkout.jsx`)
- Form with React Hook Form
- Validation for all fields
- Order summary sidebar
- Logs order details to console
- Redirects after successful submission

### State Management Flow

```
User clicks "Add to Cart"
    ↓
ProductCard calls addToCart(product)
    ↓
CartContext updates cartItems state
    ↓
All components using useCart() re-render
    ↓
Navbar badge updates
Cart page updates
FreeShippingBanner updates
```

### Form Handling (React Hook Form)

```javascript
const { register, handleSubmit, formState: { errors } } = useForm();

// Register input
<input {...register('name', { required: 'Name is required' })} />

// Handle submission
const onSubmit = (data) => {
  console.log(data); // Form data object
};
```

**Validation Rules:**
- Name: Required, min 2 characters
- Email: Required, valid email format
- Phone: Required, exactly 10 digits
- Address: Required, min 10 characters
- City: Required
- State: Required
- Pincode: Required, exactly 6 digits

## 🎨 Styling & Design

### Tailwind CSS Customization

Custom theme extensions in `tailwind.config.js`:
- Custom colors (primary palette)
- Custom fonts (Playfair Display + Inter)
- Custom animations (fade-in, slide-up, scale-in)

### CSS Organization

1. **Global styles** (`index.css`):
   - Tailwind directives
   - Custom component classes
   - Utility classes

2. **Component-level styles**:
   - Inline Tailwind classes
   - Responsive utilities
   - State variants (hover, active, focus)

## 📱 Responsive Design

The app is fully responsive with breakpoints:
- **Mobile**: 1 column
- **Tablet (sm)**: 2 columns
- **Desktop (lg)**: 3 columns
- **Large Desktop (xl)**: 4 columns

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling
- **React Hook Form** - Form handling
- **Context API** - State management

## 💡 Key Learning Points

### 1. Context API for Global State
Learn how to:
- Create context with `createContext()`
- Provide state with `Provider`
- Consume state with `useContext()`
- Create custom hooks for cleaner code

### 2. React Hooks
Master these hooks:
- `useState` - Component state
- `useContext` - Context consumption
- `useRef` - DOM references
- `useForm` - Form handling (React Hook Form)

### 3. Props & Component Composition
- Passing data between components
- Component reusability
- Prop drilling vs Context

### 4. Form Validation
- Real-time validation
- Error messages
- Submit handling
- Controlled inputs

## 🎯 Future Enhancements (Optional)

- 🔍 Product search functionality
- 🎨 Dark mode toggle
- 💾 LocalStorage persistence
- 🌟 Product reviews and ratings
- 📊 Product comparison
- 🔐 User authentication
- 💳 Payment integration
- 📧 Email notifications

## 📝 Notes

- **No Backend Required**: All data is mock data stored in `data/products.js`
- **State Management**: Pure Context API (no Redux/Zustand)
- **Form Library**: React Hook Form only
- **No External UI Library**: Built from scratch with Tailwind
- **Images**: Using Unsplash via URLs

## 🐛 Troubleshooting

### Issue: Port already in use
```bash
# Kill the process on port 5173
lsof -ti:5173 | xargs kill -9
```

### Issue: Module not found
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tailwind styles not loading
```bash
# Rebuild
npm run build
```

## 📄 License

This project is open source and available for educational purposes.

## 🙌 Credits

- Product images from [Unsplash](https://unsplash.com)
- Icons from Heroicons (embedded SVGs)
- Fonts from Google Fonts

---

**Happy Coding! 🚀**

Built with ❤️ using React + Vite + Tailwind CSS
