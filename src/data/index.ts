import { MenuItem, TestimonialItem, GalleryItem, NavItem } from '../types';

export const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Masala Dosa',
    description: 'Crispy rice crepe filled with spiced potato mixture served with sambar and chutneys',
    price: 12.99,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    category: 'breakfast',
    popular: true,
  },
  {
    id: 2,
    name: 'Idli Sambar',
    description: 'Steamed rice cakes served with lentil soup and coconut chutney',
    price: 10.99,
    image: 'https://images.pexels.com/photos/4331489/pexels-photo-4331489.jpeg',
    category: 'breakfast',
    popular: true,
  },
  {
    id: 3,
    name: 'Hyderabadi Biryani',
    description: 'Fragrant basmati rice cooked with tender chicken, aromatic spices and herbs',
    price: 18.99,
    image: 'https://images.pexels.com/photos/7437444/pexels-photo-7437444.jpeg',
    category: 'lunch',
    popular: true,
  },
  {
    id: 4,
    name: 'Vegetable Thali',
    description: 'Complete meal with assorted vegetable curries, dal, rice, roti, and dessert',
    price: 15.99,
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
    category: 'lunch',
    popular: false,
  },
  {
    id: 5,
    name: 'Kerala Fish Curry',
    description: 'Fresh fish cooked in a tangy coconut milk curry with tamarind and spices',
    price: 19.99,
    image: 'https://images.pexels.com/photos/12842117/pexels-photo-12842117.jpeg',
    category: 'dinner',
    popular: true,
  },
  {
    id: 6,
    name: 'Rava Kesari',
    description: 'Traditional semolina pudding with saffron, ghee, and nuts',
    price: 8.99,
    image: 'https://images.pexels.com/photos/14705215/pexels-photo-14705215.jpeg',
    category: 'dessert',
    popular: true,
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Food Critic',
    content: 'The authentic flavors transported me straight to South India. Their Masala Dosa is the most authentic I\'ve had outside of Chennai.',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily Johnson',
    role: 'Travel Blogger',
    content: 'The ambiance perfectly balances tradition with luxury. It\'s a must-visit for anyone looking to experience true South Indian hospitality.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    rating: 4,
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    role: 'Regular Customer',
    content: 'We celebrated our anniversary here and the staff made it so special. The Hyderabadi Biryani is out of this world!',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    rating: 5,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
    title: 'Luxury Suite',
    category: 'hotel',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg',
    title: 'Traditional Decor',
    category: 'ambiance',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/7438435/pexels-photo-7438435.jpeg',
    title: 'Authentic Thali',
    category: 'food',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/5560779/pexels-photo-5560779.jpeg',
    title: 'Chef\'s Special Curry',
    category: 'food',
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    title: 'Poolside View',
    category: 'hotel',
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/189308/pexels-photo-189308.jpeg',
    title: 'Evening Atmosphere',
    category: 'ambiance',
  },
];