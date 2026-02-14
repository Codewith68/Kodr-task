import { nanoid } from 'nanoid';

// Helper to generate products
const generateProducts = () => {
  const products = [];
  
  // High-Quality Electronics & Mobiles
  const electronics = [
    {
        name: 'iPhone 15 Pro Max',
        price: 159900,
        originalPrice: 169900,
        discount: '6% OFF',
        image: 'https://placehold.co/600x800/222222/ffffff?text=iPhone+15+Pro',
        category: 'Mobile'
    },
    {
        name: 'MacBook Air M3',
        price: 114900,
        originalPrice: 134900,
        discount: '15% OFF',
        image: 'https://placehold.co/600x800/f5f5f7/333333?text=MacBook+Air',
        category: 'Laptop'
    },
    {
        name: 'Sony WH-1000XM5',
        price: 29990,
        originalPrice: 34990,
        discount: '14% OFF',
        image: 'https://placehold.co/600x800/000000/ffffff?text=Sony+Headphones',
        category: 'Audio'
    },
    {
        name: 'Samsung Galaxy S24 Ultra',
        price: 129999,
        originalPrice: 144999,
        discount: '10% OFF',
        image: 'https://placehold.co/600x800/1a1a1a/cccccc?text=Galaxy+S24',
        category: 'Mobile'
    },
    {
        name: 'iPad Air 5',
        price: 54900,
        originalPrice: 59900,
        discount: '8% OFF',
        image: 'https://placehold.co/600x800/e5e7eb/000000?text=iPad+Air',
        category: 'Tablet'
    },
    {
        name: 'Apple Watch Series 9',
        price: 41900,
        originalPrice: 44900,
        discount: '7% OFF',
        image: 'https://placehold.co/600x800/262626/ffffff?text=Apple+Watch',
        category: 'Wearable'
    }
  ];

  // Fashion Items (Keeping some for variety)
  const fashion = [
    {
        name: 'Premium Leather Jacket',
        price: 8999,
        originalPrice: 14999,
        discount: '40% OFF',
        image: 'https://placehold.co/600x800/3f2e2e/ffffff?text=Leather+Jacket',
        category: 'Fashion'
    },
    {
        name: 'Classic White Sneakers',
        price: 3499,
        originalPrice: 5999,
        discount: '42% OFF',
        image: 'https://placehold.co/600x800/ffffff/000000?text=Sneakers',
        category: 'Fashion'
    }
  ];

  // Add specific items
  [...electronics, ...fashion].forEach(item => {
    products.push({
      id: nanoid(),
      ...item
    });
  });

  // Generate generic items to fill to 30
  const techTypes = ['Smartphone', 'Laptop', 'Earbuds', 'Smartwatch', 'Camera', 'Speaker'];
  const colors = ['1e293b', '334155', '0f172a', '1e1b4b', '312e81', '374151', '1f2937', '111827']; // Dark slate/indigo/gray variations
  
  for (let i = products.length; i < 30; i++) {
    const type = techTypes[Math.floor(Math.random() * techTypes.length)];
    const price = Math.floor(Math.random() * (80000 - 2000) + 2000);
    const originalPrice = Math.floor(price * 1.25);
    const bgColor = colors[Math.floor(Math.random() * colors.length)];
    const textColor = 'ffffff'; // Keep text white for contrast
    
    products.push({
      id: nanoid(),
      name: `Generic ${type} Pro`,
      price: price,
      originalPrice: originalPrice,
      discount: '20% OFF',
      image: `https://placehold.co/600x800/${bgColor}/${textColor}?text=${type}+${i}`,
      category: 'Electronics'
    });
  }

  return products;
};

export const products = generateProducts();
