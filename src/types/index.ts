export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'dessert';
  popular: boolean;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: 'food' | 'hotel' | 'ambiance';
}

export interface NavItem {
  name: string;
  href: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};