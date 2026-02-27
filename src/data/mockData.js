// Mock data for Shikha Ice Cream Parlour & Cafe

export const businessInfo = {
  name: "Shikha Ice Cream Parlour & Cafe",
  tagline: "Where Every Scoop Tells a Story",
  phone: "+917054503079",
  address: "Tilmampur, Ashapur Road, Varanasi – 221001",
  hours: "8:00 AM - 8:00 PM",
  delivery: "Free delivery on orders above ₹200",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.7806!2d83.0349393!3d25.3650562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2f8d7e406b59%3A0x2fc14fd9324134ef!2sShikha%20icecream%20parlour%20and%20cafe!5e0!3m2!1sen!2sin!4v1737566000000!5m2!1sen!2sin"
};

export const menuCategories = [
  { id: 'all', name: 'All Items', icon: 'Sparkles' },
  { id: 'icecream', name: 'Ice Cream', icon: 'IceCream' },
  { id: 'shakes', name: 'Shakes', icon: 'Coffee' },
  { id: 'mocktails', name: 'Mocktails', icon: 'Martini' },
  { id: 'chinese', name: 'Chinese', icon: 'Soup' },
  { id: 'fastfood', name: 'Fast Food', icon: 'Pizza' }
];

export const menuItems = [
  // Ice Cream
  { id: 1, name: 'Vanilla Dream', category: 'icecream', price: 80, description: 'Classic vanilla ice cream', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400', popular: true },
  { id: 2, name: 'Chocolate Fudge', category: 'icecream', price: 90, description: 'Rich chocolate ice cream', image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400', popular: true },
  { id: 3, name: 'Strawberry Bliss', category: 'icecream', price: 85, description: 'Fresh strawberry ice cream', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400' },
  { id: 4, name: 'Mango Delight', category: 'icecream', price: 95, description: 'Seasonal mango ice cream', image: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400' },
  { id: 5, name: 'Butterscotch', category: 'icecream', price: 90, description: 'Creamy butterscotch', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400' },
  { id: 6, name: 'Pista Kulfi', category: 'icecream', price: 100, description: 'Traditional pistachio kulfi', image: '/images/pista_kulfi.jpg' },
  
  // Shakes
  { id: 7, name: 'Oreo Shake', category: 'shakes', price: 120, description: 'Creamy Oreo shake', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400', popular: true },
  { id: 8, name: 'Chocolate Shake', category: 'shakes', price: 100, description: 'Thick chocolate shake', image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400' },
  { id: 9, name: 'Mango Shake', category: 'shakes', price: 110, description: 'Fresh mango shake', image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400' },
  { id: 8, name: 'Strawberry Shake', category: 'shakes', price: 110, description: 'Berry blast shake', image: '/images/strawberry_shake.jpg' },
  { id: 11, name: 'Cold Coffee', category: 'shakes', price: 90, description: 'Refreshing cold coffee', image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400', popular: true },
  
  // Mocktails
  { id: 12, name: 'Blue Lagoon', category: 'mocktails', price: 130, description: 'Refreshing blue mocktail', image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?w=400' },
  { id: 13, name: 'Virgin Mojito', category: 'mocktails', price: 120, description: 'Classic mint mojito', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400', popular: true },
  { id: 14, name: 'Tropical Paradise', category: 'mocktails', price: 140, description: 'Mixed fruit mocktail', image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400' },
  { id: 7, name: 'Watermelon Fizz', category: 'drinks', price: 120, description: 'Refreshing watermelon sparkle', image: '/images/watermelon_fizz.jpg' },
  
  // Chinese
  { id: 16, name: 'Veg Manchurian', category: 'chinese', price: 150, description: 'Crispy veg balls in sauce', image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400', popular: true },
  { id: 17, name: 'Paneer Chilli', category: 'chinese', price: 180, description: 'Spicy paneer in sauce', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400' },
  { id: 18, name: 'Veg Fried Rice', category: 'chinese', price: 140, description: 'Flavorful fried rice', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400' },
  { id: 19, name: 'Hakka Noodles', category: 'chinese', price: 140, description: 'Stir-fried noodles', image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400' },
  { id: 20, name: 'Hot & Sour Soup', category: 'chinese', price: 100, description: 'Spicy tangy soup', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400' },
  
  // Fast Food
  { id: 21, name: 'Veg Burger', category: 'fastfood', price: 80, description: 'Classic veg burger', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400', popular: true },
  { id: 22, name: 'Cheese Sandwich', category: 'fastfood', price: 70, description: 'Grilled cheese sandwich', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400' },
  { id: 23, name: 'Club Sandwich', category: 'fastfood', price: 100, description: 'Triple layer sandwich', image: 'https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?w=400' },
  { id: 24, name: 'French Fries', category: 'fastfood', price: 60, description: 'Crispy golden fries', image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400' },
  { id: 25, name: 'Veg Pizza', category: 'fastfood', price: 150, description: 'Loaded veg pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400' }
];

export const offers = [
  {
    id: 1,
    title: "Free Delivery",
    description: "On orders above ₹200",
    code: "FREEDEL200",
    badge: "Always Active",
    color: "#ff6b6b"
  },
  {
    id: 2,
    title: "Family Combo",
    description: "Get 20% off on orders above ₹500",
    code: "FAMILY20",
    badge: "Limited Time",
    color: "#ffa500"
  },
  {
    id: 3,
    title: "Student Special",
    description: "15% off for students with valid ID",
    code: "STUDENT15",
    badge: "Weekdays Only",
    color: "#4ecdc4"
  },
  {
    id: 4,
    title: "Weekend Treat",
    description: "Buy 2 Ice Creams, Get 1 Free",
    code: "WEEKEND",
    badge: "Sat-Sun",
    color: "#95e1d3"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    text: "Best ice cream in Varanasi! The Oreo shake is to die for. Highly recommended for families.",
    location: "Varanasi"
  },
  {
    id: 2,
    name: "Rahul Verma",
    rating: 5,
    text: "Amazing Chinese food and quick delivery. The paneer chilli is my favorite!",
    location: "Tilmampur"
  },
  {
    id: 3,
    name: "Anjali Singh",
    rating: 5,
    text: "Love the ambiance and quality. Perfect spot for hanging out with friends. Free delivery is a bonus!",
    location: "Ashapur Road"
  },
  {
    id: 4,
    name: "Amit Kumar",
    rating: 5,
    text: "Fresh ingredients, hygienic preparation, and affordable prices. What more can you ask for?",
    location: "Varanasi"
  },
  {
    id: 5,
    name: "Sneha Gupta",
    rating: 5,
    text: "The mocktails are refreshing and the service is excellent. My go-to place for treats!",
    location: "Varanasi"
  },
  {
    id: 6,
    name: "Vikash Pandey",
    rating: 5,
    text: "Great variety in menu. Everything from ice cream to Chinese food under one roof!",
    location: "Tilmampur"
  }
];

export const galleryImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80', alt: 'Ice cream display' },
  { id: 2, url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600', alt: 'Cafe interior' },
  { id: 3, url: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600', alt: 'Coffee and shakes' },
  { id: 4, url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600', alt: 'Food platter' },
  { id: 5, url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600', alt: 'Desserts' },
  { id: 6, url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600', alt: 'Chinese food' },
  { id: 7, url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600', alt: 'Cake display' },
  { id: 8, url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600', alt: 'Burger' },
  { id: 9, url: 'https://images.unsplash.com/photo-1562007908-17c67e878c88?w=600', alt: 'Milkshakes' }
];

export const whyChooseUs = [
  {
    icon: 'Award',
    title: 'Premium Quality',
    description: 'We use only the finest Amul products and fresh ingredients'
  },
  {
    icon: 'Truck',
    title: 'Free Delivery',
    description: 'Free delivery on all orders above ₹200 in local area'
  },
  {
    icon: 'Clock',
    title: 'Fast Service',
    description: 'Quick preparation and delivery to satisfy your cravings'
  },
  {
    icon: 'Shield',
    title: 'Hygienic Standards',
    description: 'Maintaining highest hygiene and food safety standards'
  },
  {
    icon: 'Heart',
    title: 'Made with Love',
    description: 'Every dish is prepared with care and passion'
  },
  {
    icon: 'Sparkles',
    title: 'Variety Menu',
    description: 'From ice creams to Chinese, we have it all under one roof'
  }
];

export const stats = [
  { number: '5000+', label: 'Happy Customers' },
  { number: '100+', label: 'Menu Items' },
  { number: '12+', label: 'Hours Open Daily' },
  { number: '5', label: 'Star Ratings' }
];
