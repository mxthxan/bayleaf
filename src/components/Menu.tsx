import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Category = 'all' | 'starters' | 'main-courses' | 'seafood' | 'vegetarian' | 'biryani' | 'tandoori' | 'naan';

// Menu data based on Bay Leaf restaurant
const menuItems = [
  // Starters
  {
    id: 's1',
    name: 'Onion Bhaji',
    description: 'Crispy onion fritters made with gram flour and Indian spices',
    price: 6.90,
    category: 'starters',
    image: '/images/onion-bhaji.jpg',
    popular: true
  },
  {
    id: 's2',
    name: 'Vegetable Samosa',
    description: 'Triangle pastry filled with spiced potatoes and peas',
    price: 6.90,
    category: 'starters',
    image: '/images/samosa.jpg',
    popular: false
  },
  {
    id: 's3',
    name: 'Chicken Pakora',
    description: 'Succulent chicken pieces coated in a spicy batter and fried',
    price: 9.50,
    category: 'starters',
    image: '/images/chicken-pakora.jpg',
    popular: true
  },
  {
    id: 's4',
    name: 'Prawn Puri',
    description: 'Spiced prawns served on deep-fried Indian bread',
    price: 11.90,
    category: 'starters',
    image: '/images/prawn-puri.jpg',
    popular: false
  },
  
  // Main Courses
  {
    id: 'm1',
    name: 'Chicken Tikka Masala',
    description: 'Grilled chicken pieces in a creamy tomato sauce with aromatic spices',
    price: 18.90,
    category: 'main-courses',
    image: '/images/chicken-tikka-masala.jpg',
    popular: true
  },
  {
    id: 'm2',
    name: 'Lamb Rogan Josh',
    description: 'Tender lamb cooked with aromatic spices in a rich tomato-based sauce',
    price: 19.90,
    category: 'main-courses',
    image: '/images/rogan-josh.jpg',
    popular: true
  },
  {
    id: 'm3',
    name: 'Chicken Korma',
    description: 'Mild and creamy curry with cashew and almond paste',
    price: 18.90,
    category: 'main-courses',
    image: '/images/chicken-korma.jpg',
    popular: false
  },
  
  // Seafood
  {
    id: 'sf1',
    name: 'Prawn Jalfrezi',
    description: 'Spicy dish with prawns, bell peppers, onions, and tomatoes',
    price: 20.90,
    category: 'seafood',
    image: '/images/prawn-jalfrezi.jpg',
    popular: true
  },
  {
    id: 'sf2',
    name: 'Fish Curry',
    description: 'White fish fillet in a medium-spiced sauce with mustard seeds and curry leaves',
    price: 19.90,
    category: 'seafood',
    image: '/images/fish-curry.jpg',
    popular: false
  },
  
  // Vegetarian
  {
    id: 'v1',
    name: 'Paneer Butter Masala',
    description: 'Indian cottage cheese cubes in a rich buttery tomato sauce',
    price: 16.90,
    category: 'vegetarian',
    image: '/images/paneer-butter-masala.jpg',
    popular: true
  },
  {
    id: 'v2',
    name: 'Chana Masala',
    description: 'Chickpeas cooked with onions, tomatoes, and aromatic spices',
    price: 15.90,
    category: 'vegetarian',
    image: '/images/chana-masala.jpg',
    popular: false
  },
  {
    id: 'v3',
    name: 'Aloo Gobi',
    description: 'Potato and cauliflower dish seasoned with Indian spices',
    price: 15.90,
    category: 'vegetarian',
    image: '/images/aloo-gobi.jpg',
    popular: false
  },
  
  // Biryani
  {
    id: 'b1',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice cooked with chicken and aromatic spices',
    price: 19.90,
    category: 'biryani',
    image: '/images/chicken-biryani.jpg',
    popular: true
  },
  {
    id: 'b2',
    name: 'Lamb Biryani',
    description: 'Basmati rice cooked with tender lamb pieces and spices',
    price: 21.90,
    category: 'biryani',
    image: '/images/lamb-biryani.jpg',
    popular: false
  },
  {
    id: 'b3',
    name: 'Vegetable Biryani',
    description: 'Mixed vegetables cooked with basmati rice and biryani spices',
    price: 17.90,
    category: 'biryani',
    image: '/images/veg-biryani.jpg',
    popular: false
  },
  
  // Tandoori
  {
    id: 't1',
    name: 'Chicken Tikka',
    description: 'Marinated chicken pieces grilled in tandoor',
    price: 17.90,
    category: 'tandoori',
    image: '/images/chicken-tikka.jpg',
    popular: true
  },
  {
    id: 't2',
    name: 'Tandoori Mixed Grill',
    description: 'Assortment of tandoori chicken, lamb tikka, and seekh kebab',
    price: 22.90,
    category: 'tandoori',
    image: '/images/mixed-grill.jpg',
    popular: true
  },
  
  // Naan
  {
    id: 'n1',
    name: 'Plain Naan',
    description: 'Traditional Indian leavened bread baked in tandoor',
    price: 3.90,
    category: 'naan',
    image: '/images/plain-naan.jpg',
    popular: true
  },
  {
    id: 'n2',
    name: 'Garlic Naan',
    description: 'Naan bread topped with garlic and herbs',
    price: 4.50,
    category: 'naan',
    image: '/images/garlic-naan.jpg',
    popular: true
  },
  {
    id: 'n3',
    name: 'Peshwari Naan',
    description: 'Sweet naan filled with coconut, almonds, and raisins',
    price: 4.90,
    category: 'naan',
    image: '/images/peshwari-naan.jpg',
    popular: false
  }
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'starters', label: 'Starters' },
    { value: 'main-courses', label: 'Main Courses' },
    { value: 'seafood', label: 'Seafood' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'biryani', label: 'Biryani' },
    { value: 'tandoori', label: 'Tandoori' },
    { value: 'naan', label: 'Naan & Bread' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding bg-gradient-to-b from-black to-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Our <span className="text-turmeric-400">Menu</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Explore our carefully crafted menu featuring authentic Indian delicacies 
            prepared with traditional spices and cooking methods
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {categories.map((category) => (
              <motion.button
                key={category.value}
                className={`px-5 py-2 rounded-full ${
                  activeCategory === category.value 
                    ? 'bg-turmeric-500 text-black' 
                    : 'bg-gray-800 text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="menu-card bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-turmeric-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-playfair font-semibold">{item.name}</h3>
                  <p className="text-turmeric-400 font-semibold">€{item.price.toFixed(2)}</p>
                </div>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                <motion.button 
                  className="px-4 py-2 border border-turmeric-500 text-turmeric-500 rounded-full text-sm hover:bg-turmeric-500 hover:text-black transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Order Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;