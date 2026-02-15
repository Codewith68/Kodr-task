# 🚀 Quick Start Guide

## Setup in 3 Steps

### 1️⃣ Install Dependencies
```bash
cd ecommerce-app
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```

### 3️⃣ Open Browser
Navigate to: **http://localhost:5173**

---

## 📚 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## 🎯 Quick Feature Guide

### Adding Products to Cart
1. Go to home page
2. Click "Add" button on any product
3. View cart badge update in navbar

### Using Wishlist
1. Click the ❤️ icon on product cards
2. Access wishlist from navbar
3. Move items to cart with one click

### Checkout Process
1. Add items to cart
2. Click "Cart" in navbar
3. Review items and click "Proceed to Checkout"
4. Fill in the form
5. Click "Place Order"
6. Check browser console for order details

### Free Shipping
- Add items worth ₹5000+ to unlock free shipping
- Watch the progress bar in cart page

---

## 🔍 Project Structure at a Glance

```
src/
  ├── components/     # Reusable UI components
  ├── context/        # Global state (Cart & Wishlist)
  ├── data/          # Mock product data
  ├── pages/         # Page components
  ├── App.jsx        # Main app with routing
  └── main.jsx       # Entry point
```

---

## 💡 Key Concepts

### Context API Pattern
```javascript
// 1. Create Context
const CartContext = createContext();

// 2. Provide to app
<CartProvider>
  <App />
</CartProvider>

// 3. Use in components
const { addToCart } = useCart();
```

### Form Validation Pattern
```javascript
const { register, handleSubmit, formState: { errors } } = useForm();

<input 
  {...register('name', { required: 'Required' })} 
/>
{errors.name && <p>{errors.name.message}</p>}
```

---

## 🎨 Customization Tips

### Change Free Shipping Threshold
Edit `src/data/products.js`:
```javascript
export const FREE_SHIPPING_THRESHOLD = 5000; // Change this
```

### Add More Products
Edit `src/data/products.js`:
```javascript
export const products = [
  {
    id: 13,
    title: "New Product",
    price: 2000,
    image: "https://example.com/image.jpg",
    category: "Electronics",
    description: "Product description"
  },
  // ... more products
];
```

### Change Color Theme
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#your-color',
    // ... more shades
  }
}
```

---

## ✅ Testing Checklist

- [ ] Add product to cart
- [ ] Increase/decrease quantity
- [ ] Remove from cart
- [ ] Add to wishlist
- [ ] Remove from wishlist
- [ ] Move wishlist item to cart
- [ ] Filter products by category
- [ ] Free shipping progress bar
- [ ] Complete checkout form
- [ ] Form validation errors
- [ ] Responsive on mobile

---

## 🐛 Common Issues

**Q: Styles not showing?**
A: Make sure Tailwind directives are in `src/index.css`

**Q: Context not working?**
A: Check that Provider wraps the component tree in `App.jsx`

**Q: Form validation not working?**
A: Ensure React Hook Form is installed and imported correctly

---

## 📞 Need Help?

Check the full README.md for:
- Detailed architecture explanation
- Component documentation
- State management flow
- Advanced customization

---

**Happy Coding! 🎉**
