import { nanoid } from 'nanoid';

// Helper to generate products
const generateProducts = () => {
  const products = [];
  
  // High-Quality Electronics & Mobiles
  const electronics = [
    {
        name: 'iPhone 13 Pro',
        price: 109900,
        originalPrice: 119900,
        discount: '8% OFF',
        images: [
            'https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/1.webp'
        ],
        category: 'Mobile'
    },
    {
        name: 'MacBook Pro 14"',
        price: 199900,
        originalPrice: 219900,
        discount: '9% OFF',
        images: [
            'https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/1.webp'
        ],
        category: 'Laptop'
    },
    {
        name: 'Samsung Galaxy S10',
        price: 69900,
        originalPrice: 74900,
        discount: '6% OFF',
        images: [
            'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/1.webp'
        ],
        category: 'Mobile'
    },
    {
        name: 'iPad Mini 2021',
        price: 49900,
        originalPrice: 52900,
        discount: '5% OFF',
        images: [
            'https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/1.webp'
        ],
        category: 'Tablet'
    },
    {
        name: 'Samsung Galaxy Tab S8',
        price: 59900,
        originalPrice: 69900,
        discount: '14% OFF',
        images: [
            'https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/1.webp'
        ],
        category: 'Tablet'
    },
    {
        name: 'AirPods Max',
        price: 54900,
        originalPrice: 59900,
        discount: '8% OFF',
        images: [
            'https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp'
        ],
        category: 'Audio'
    },
    {
        name: 'Apple Watch Series 4',
        price: 34900,
        originalPrice: 39900,
        discount: '12% OFF',
        images: [
            'https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/1.webp'
        ],
        category: 'Wearable'
    },
    {
        name: 'Rolex Submariner',
        price: 1399900,
        originalPrice: 1499900,
        discount: '5% OFF',
        images: [
            'https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/1.webp'
        ],
        category: 'Wearable'
    }
  ];

  // Trendy Fashion Collection
  const fashion = [
    {
        name: 'Calvin Klein Heels',
        price: 7900,
        originalPrice: 9900,
        discount: '20% OFF',
        images: [
            'https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/1.webp'
        ],
        category: 'Fashion'
    },
    {
        name: 'Off White Sneakers',
        price: 11900,
        originalPrice: 15900,
        discount: '25% OFF',
        images: [
            'https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/1.webp'
        ],
        category: 'Fashion'
    },
    {
        name: 'Leather Jacket',
        price: 12900,
        originalPrice: 17900,
        discount: '30% OFF',
        images: [
             'https://images.unsplash.com/photo-1551028919-ac6635f003db?auto=format&fit=crop&q=80&w=600'
        ],
        category: 'Fashion'
    },
    {
        name: 'Classic Denim Jacket',
        price: 5900,
        originalPrice: 7900,
        discount: '25% OFF',
        images: [
            'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?auto=format&fit=crop&q=80&w=600'
        ],
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
  const colors = ['1e293b', '334155', '0f172a', '1e1b4b', '312e81', '374151', '1f2937', '111827']; 
  
  for (let i = products.length; i < 30; i++) {
    const type = techTypes[Math.floor(Math.random() * techTypes.length)];
    const price = Math.floor(Math.random() * (80000 - 2000) + 2000);
    const originalPrice = Math.floor(price * 1.25);
    const bgColor = colors[Math.floor(Math.random() * colors.length)];
    const textColor = 'ffffff'; 
    
    products.push({
      id: nanoid(),
      name: `Generic ${type} Pro`,
      price: price,
      originalPrice: originalPrice,
      discount: '20% OFF',
      images: [
        `https://placehold.co/600x800/${bgColor}/${textColor}?text=${type}+${i}`
      ],
      category: 'Electronics'
    });
  }

  return products;
};

export const products = generateProducts();
