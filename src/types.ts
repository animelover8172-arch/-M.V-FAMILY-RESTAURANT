export type MenuCategory = 
  | 'All' 
  | 'Indian' 
  | 'Chinese' 
  | 'Continental' 
  | 'Snacks' 
  | 'Desserts' 
  | 'Mocktails';

export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  category: Exclude<MenuCategory, 'All'>;
  description: string;
  price: number;
  badge?: string;
  isVeg: boolean;
  isVegan?: boolean;
  isChefSpecial?: boolean;
  image: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  initials: string;
  rating: number;
  date: string;
  review: string;
  isVerified?: boolean;
  source?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  caption: string;
  span?: string;
}

export interface RestaurantDetails {
  name: string;
  hindiName: string;
  tagline: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  rating: number;
  reviewCount: number;
  services: string[];
  features: string[];
  hours: {
    days: string;
    timing: string;
  }[];
  developerCredit: {
    name: string;
    whatsapp: string;
    call: string;
  };
}

export interface ReservationData {
  name: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  specialRequest: string;
}
