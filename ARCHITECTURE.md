# 🏗️ Project Architecture Visualization

## Component Hierarchy

```
App (CartProvider + WishlistProvider)
│
├── Navbar
│   ├── Cart Badge (cartItemsCount)
│   └── Wishlist Badge (wishlistItems.length)
│
├── Routes
│   ├── Products Page (/)
│   │   ├── Hero Section
│   │   ├── Category Filter
│   │   └── ProductCard (multiple)
│   │       ├── Product Image
│   │       ├── Wishlist Button
│   │       └── Add to Cart Button
│   │
│   ├── Cart Page (/cart)
│   │   ├── FreeShippingBanner
│   │   ├── Cart Items List
│   │   │   ├── Quantity Controls
│   │   │   └── Remove Button
│   │   └── Order Summary Sidebar
│   │
│   ├── Wishlist Page (/wishlist)
│   │   └── Wishlist Items Grid
│   │       ├── Remove Button
│   │       └── Move to Cart Button
│   │
│   └── Checkout Page (/checkout)
│       ├── Customer Info Form
│       ├── Shipping Address Form
│       └── Order Summary Sidebar
```

## State Management Flow

```
┌─────────────────────────────────────────────────┐
│              CartContext Provider               │
│                                                 │
│  State:                                         │
│  - cartItems: []                                │
│                                                 │
│  Functions:                                     │
│  - addToCart(product)                           │
│  - removeFromCart(id)                           │
│  - increaseQuantity(id)                         │
│  - decreaseQuantity(id)                         │
│  - clearCart()                                  │
│                                                 │
│  Computed:                                      │
│  - cartItemsCount (total items)                 │
│  - cartTotal (total price)                      │
└─────────────────────────────────────────────────┘
                    ↓ Provides
        ┌───────────────────────────┐
        │     All Components        │
        │  (via useCart() hook)     │
        └───────────────────────────┘

┌─────────────────────────────────────────────────┐
│           WishlistContext Provider              │
│                                                 │
│  State:                                         │
│  - wishlistItems: []                            │
│                                                 │
│  Functions:                                     │
│  - addToWishlist(product)                       │
│  - removeFromWishlist(id)                       │
│  - isInWishlist(id)                             │
│  - clearWishlist()                              │
└─────────────────────────────────────────────────┘
                    ↓ Provides
        ┌───────────────────────────┐
        │     All Components        │
        │ (via useWishlist() hook)  │
        └───────────────────────────┘
```

## Data Flow Example: Adding Product to Cart

```
1. User clicks "Add to Cart" button
                ↓
2. ProductCard.jsx calls addToCart(product)
                ↓
3. CartContext updates cartItems state
                ↓
4. All components using useCart() re-render
                ↓
5. Updates visible in:
   - Navbar badge
   - Cart page
   - FreeShippingBanner
   - Checkout page
```

## File Dependencies

```
main.jsx
  └── App.jsx
      ├── CartContext.jsx
      ├── WishlistContext.jsx
      ├── Navbar.jsx
      │   ├── useCart() → CartContext
      │   └── useWishlist() → WishlistContext
      │
      └── Router
          ├── Products.jsx
          │   └── ProductCard.jsx
          │       ├── useCart() → CartContext
          │       └── useWishlist() → WishlistContext
          │
          ├── Cart.jsx
          │   ├── useCart() → CartContext
          │   └── FreeShippingBanner.jsx
          │       └── useCart() → CartContext
          │
          ├── Wishlist.jsx
          │   ├── useWishlist() → WishlistContext
          │   └── useCart() → CartContext
          │
          └── Checkout.jsx
              ├── useCart() → CartContext
              └── useForm() → React Hook Form
```

## Context API Pattern Explanation

### 1. Create Context
```javascript
// In CartContext.jsx
const CartContext = createContext();
```

### 2. Create Provider Component
```javascript
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (product) => {
    // Logic to add product
  };
  
  const value = {
    cartItems,
    addToCart,
    // ... other functions
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
```

### 3. Create Custom Hook
```javascript
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
```

### 4. Wrap App with Provider
```javascript
// In App.jsx
<CartProvider>
  <App />
</CartProvider>
```

### 5. Use in Components
```javascript
// In any component
const { cartItems, addToCart } = useCart();
```

## Form Handling with React Hook Form

```
Checkout.jsx
    ↓
useForm() hook initializes
    ↓
Creates: register, handleSubmit, formState
    ↓
Input fields use {...register('fieldName', validationRules)}
    ↓
User fills form
    ↓
User submits
    ↓
handleSubmit validates all fields
    ↓
If valid: onSubmit(data) is called
    ↓
If invalid: errors object is populated
    ↓
Error messages displayed under fields
```

## Routing Structure

```
BrowserRouter
    │
    ├── / (Home)
    │   └── Products Page
    │       - Display all products
    │       - Category filter
    │
    ├── /cart
    │   └── Cart Page
    │       - List cart items
    │       - Quantity controls
    │       - Order summary
    │
    ├── /wishlist
    │   └── Wishlist Page
    │       - Saved items
    │       - Move to cart
    │
    └── /checkout
        └── Checkout Page
            - Customer info form
            - Shipping address
            - Place order
```

## Props Flow

```
Products Page
    │
    └── ProductCard (receives: product prop)
            │
            ├── product.id
            ├── product.title
            ├── product.price
            ├── product.image
            ├── product.category
            └── product.description
```

## State Updates Flow

### Adding to Cart
```
User Action → Component calls addToCart(product)
                      ↓
            Context updates cartItems state
                      ↓
              React re-renders affected components
                      ↓
            UI updates (badge, cart page, etc.)
```

### Form Submission
```
User fills form → User clicks submit
                      ↓
              React Hook Form validates
                      ↓
              If valid: onSubmit(data)
                      ↓
              Log to console
                      ↓
              Clear cart
                      ↓
              Navigate to home
```

## CSS Architecture

```
index.css (Global Styles)
    ├── @tailwind base
    ├── @tailwind components
    ├── @tailwind utilities
    └── Custom animations

tailwind.config.js
    ├── Custom colors
    ├── Custom fonts
    ├── Custom animations
    └── Breakpoints

Component Files
    └── Inline Tailwind classes
```

## Key React Patterns Used

1. **Context API** - Global state management
2. **Custom Hooks** - Reusable logic (useCart, useWishlist)
3. **Controlled Components** - Form inputs
4. **Conditional Rendering** - Empty states, loading states
5. **Component Composition** - Reusable ProductCard
6. **Props Drilling Alternative** - Context instead of prop drilling
7. **Side Effects** - React Hook Form for form handling

## Performance Considerations

- **Memoization**: Not needed due to simple state structure
- **Code Splitting**: Could add React.lazy() for route-based splitting
- **State Batching**: React 18 automatic batching
- **Re-render Optimization**: Context split into Cart and Wishlist to minimize re-renders

## Scalability Options

To scale this app, you could add:
1. **Redux Toolkit** - More complex state management
2. **React Query** - Server state and caching
3. **LocalStorage** - Persist cart between sessions
4. **Backend Integration** - API calls for real data
5. **Authentication** - User accounts
6. **Payment Gateway** - Stripe/PayPal integration
