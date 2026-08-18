import { RestaurantDetails, MenuItem, ReviewItem, GalleryPhoto } from '../types';
import galleryImg1 from '../assets/images/regenerated_image_1787077438068.png';
import galleryImg3 from '../assets/images/regenerated_image_1787077444836.png';
import galleryImg5 from '../assets/images/regenerated_image_1787077450958.png';


export const RESTAURANT_INFO: RestaurantDetails = {
  name: 'M.V FAMILY RESTAURANT',
  hindiName: 'एम.वी फैमिली रेस्टोरेंट',
  tagline: 'Good Food. Warm Moments.',
  address: 'Infront of Bharat Petroleum, NH-2, near Toll Plaza, Sasaram, Auwan, Bihar 821113',
  landmark: 'Infront of Bharat Petroleum, near Toll Plaza',
  city: 'Sasaram',
  state: 'Bihar',
  pincode: '821113',
  phone: '099390 57069',
  phoneRaw: '+919939057069',
  whatsapp: '+919939057069',
  rating: 4.6,
  reviewCount: 84,
  services: ['Dine-in', 'Kerbside Pickup', 'No-contact Delivery'],
  features: ['All You Can Eat', 'Vegan Options', 'Live Music', 'Family Friendly', 'Hygienic Kitchen'],
  hours: [
    { days: 'Monday – Friday', timing: '10:00 AM – 11:00 PM' },
    { days: 'Saturday – Sunday', timing: '09:30 AM – 11:30 PM' },
  ],
  developerCredit: {
    name: 'RoadsideDeveloper',
    whatsapp: '+91 7654224826',
    call: '+91 8405918172',
  },
};

/**
 * SIGNATURE MENU ITEMS
 * Note: These are structured placeholders matching real multi-cuisine family restaurant offerings.
 * Easily editable by updating this list.
 */
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Paneer Butter Masala & Garlic Naan',
    hindiName: 'पनीर बटर मसाला',
    category: 'Indian',
    description: 'Cottage cheese cubes simmered in a velvety tomato gravy infused with fresh butter, kasuri methi, and aromatic spices.',
    price: 260,
    badge: "Chef's Special",
    isVeg: true,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'm2',
    name: 'Handi Chicken Masala',
    hindiName: 'हांडी चिकन',
    category: 'Indian',
    description: 'Tender chicken slow-cooked in a clay handi with stone-ground roasted spices, browned onions, and rich gravy.',
    price: 340,
    badge: 'Bestseller',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'm3',
    name: 'Dal Makhani Bukhara',
    hindiName: 'दाल मखनी',
    category: 'Indian',
    description: 'Overnight slow-cooked black lentils simmered with churned cream, butter, and mild house spices.',
    price: 220,
    badge: 'Pure Veg',
    isVeg: true,
    isVegan: false,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'm4',
    name: 'Chilli Paneer & Hakka Noodles',
    hindiName: 'चिली पनीर हक्का नूडल्स',
    category: 'Chinese',
    description: 'Wok-tossed fresh bell peppers, spring onions, and crisp paneer tossed in zesty Indo-Chinese dark soya sauce.',
    price: 230,
    badge: 'Popular',
    isVeg: true,
    isVegan: true,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'm5',
    name: 'Crispy Veg Spring Rolls',
    hindiName: 'वेज स्प्रिंग रोल',
    category: 'Snacks',
    description: 'Golden fried crispy wrappers loaded with julienne farm vegetables, served with sweet chili dip.',
    price: 180,
    badge: 'Quick Bite',
    isVeg: true,
    isVegan: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'm7',
    name: 'Royal Saffron Shahi Tukda & Gulab Jamun',
    hindiName: 'शाही टुकड़ा और गुलाब जामुन',
    category: 'Desserts',
    description: 'Crisp ghee-fried bread steeped in cardamom rabri and hot soft gulab jamun with pistachio slivers.',
    price: 140,
    badge: 'Sweet Treat',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'm8',
    name: 'Mint Virgin Mojito & Blue Lagoon',
    hindiName: 'मिंट वर्जिन मोजितो',
    category: 'Mocktails',
    description: 'Chilled muddled garden mint, freshly squeezed lime juice, bubbly club soda, and cane sugar syrup.',
    price: 130,
    badge: 'Refreshing',
    isVeg: true,
    isVegan: true,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'Warm Family Dining Space',
    category: 'Interior',
    imageUrl: galleryImg1,
    caption: 'Comfortable family seating arrangements with ambient lighting along NH-2 Sasaram.',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: 'g2',
    title: 'Clay Oven Tandoor Delicacies',
    category: 'Food',
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    caption: 'Freshly baked tandoori breads and sizzling kebabs prepared in traditional style.',
    span: 'col-span-1',
  },
  {
    id: 'g3',
    title: 'Live Music & Evenings',
    category: 'Ambiance',
    imageUrl: galleryImg3,
    caption: 'Soothing live acoustic sessions on selected weekend evenings.',
    span: 'col-span-1',
  },
  {
    id: 'g4',
    title: 'Fresh Multi-Cuisine Dishes',
    category: 'Food',
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    caption: 'Authentic Indian curries and thali selections for the whole family.',
    span: 'col-span-1',
  },
  {
    id: 'g5',
    title: 'Celebrations & Private Tables',
    category: 'Events',
    imageUrl: galleryImg5,
    caption: 'Spacious banquet and celebration spaces for family milestones.',
    span: 'col-span-1 md:col-span-2',
  },
  {
    id: 'g6',
    title: 'Artisanal Mocktails & Beverages',
    category: 'Drinks',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    caption: 'Refreshing cold drinks and hand-crafted mocktails to complement your meal.',
    span: 'col-span-1',
  },
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    name: 'Rajesh Kumar Singh',
    initials: 'RS',
    rating: 5,
    date: '1 week ago',
    review: 'One of the best dining places in Sasaram right on NH-2 near toll plaza. The Paneer Butter Masala and Dal Makhani were top notch. Very clean environment and quick service for families.',
    isVerified: true,
    source: 'Google Review',
  },
  {
    id: 'r2',
    name: 'Priya Sharma',
    initials: 'PS',
    rating: 5,
    date: '3 weeks ago',
    review: 'Visited with my family during our highway trip. Ample parking space in front of Bharat Petroleum, courteous staff, and the live music was a wonderful surprise! Highly recommend.',
    isVerified: true,
    source: 'Google Review',
  },
  {
    id: 'r3',
    name: 'Amitabh Verma',
    initials: 'AV',
    rating: 5,
    date: '1 month ago',
    review: 'Delicious food and very hygienic kitchen. The all-you-can-eat and vegan options are great value. Wonderful hospitality by M.V Family Restaurant team.',
    isVerified: true,
    source: 'Google Review',
  },
  {
    id: 'r4',
    name: 'Sunita Mishra',
    initials: 'SM',
    rating: 5,
    date: '2 months ago',
    review: 'Spacious tables, tasty Chinese starters, and warm hospitality. Kids loved the spring rolls and mocktails. Must visit in Sasaram!',
    isVerified: true,
    source: 'Google Review',
  },
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    id: 'w1',
    title: 'Fresh Food',
    description: 'Prepared with care and quality ingredients sourced daily.',
    iconName: 'Sparkles',
  },
  {
    id: 'w2',
    title: 'Family Friendly',
    description: 'A comfortable, peaceful place designed for families and groups.',
    iconName: 'Users',
  },
  {
    id: 'w3',
    title: 'Live Music',
    description: 'Enjoy selected evenings filled with gentle acoustic music and great food.',
    iconName: 'Music',
  },
  {
    id: 'w4',
    title: 'Easy Ordering',
    description: 'Seamless dine-in, kerbside pickup, and no-contact delivery options.',
    iconName: 'Truck',
  },
];

export const EXPERIENCE_ITEMS = [
  {
    id: 'e1',
    title: 'Family Dining',
    description: 'Comfortable spaces for memorable meals and family get-togethers.',
    tag: 'Comfort & Care',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'e3',
    title: 'All You Can Eat',
    description: 'A satisfying, hearty dining experience for passionate food lovers.',
    tag: 'Grand Feast',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80',
  },
];
