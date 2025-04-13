import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const menuItems = [
  {
    category: 'Dosas',
    description: 'Crispy, savory crepes made from fermented rice and lentil batter',
    items: [
      { name: 'Masala Dosa', price: '8.99', description: 'Crispy rice crepe filled with spiced potatoes', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
      { name: 'Mysore Masala Dosa', price: '9.99', description: 'Spicy variation of masala dosa with red chutney', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
      { name: 'Rava Dosa', price: '9.99', description: 'Crispy semolina crepe with onions and spices', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    ]
  },
  {
    category: 'Idli & Vada',
    description: 'Steamed rice cakes and crispy lentil doughnuts',
    items: [
      { name: 'Idli Sambar', price: '7.99', description: 'Steamed rice cakes served with lentil soup and chutneys', image: 'https://images.unsplash.com/photo-1605197584005-0f1d37a4c7c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
      { name: 'Medu Vada', price: '6.99', description: 'Crispy lentil doughnuts served with sambar', image: 'https://images.unsplash.com/photo-1605197584005-0f1d37a4c7c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
      { name: 'Mini Idli', price: '8.99', description: 'Small idlis tossed in gunpowder spice mix', image: 'https://images.unsplash.com/photo-1605197584005-0f1d37a4c7c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    ]
  },
  {
    category: 'Curries',
    description: 'Rich and flavorful curry dishes',
    items: [
      { name: 'Vegetable Kurma', price: '12.99', description: 'Mixed vegetables in coconut curry sauce', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
      { name: 'Paneer Butter Masala', price: '13.99', description: 'Cottage cheese in rich tomato gravy', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
      { name: 'Dal Tadka', price: '11.99', description: 'Yellow lentils tempered with spices', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
    ]
  },
];

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(menuItems[0].category);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-bold text-center text-amber-900 mb-16 tracking-tight">Our Menu</h2>
        
        <div className="flex justify-center mb-16 space-x-6">
          {menuItems.map((category) => (
            <button
              key={category.category}
              onClick={() => setSelectedCategory(category.category)}
              className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-500 ${
                selectedCategory === category.category
                  ? 'bg-amber-900 text-white shadow-xl scale-105'
                  : 'bg-white text-amber-900 hover:bg-amber-50'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>
        
        {menuItems.map((category) => (
          <div
            key={category.category}
            className={`transition-all duration-500 ${
              selectedCategory === category.category ? 'block' : 'hidden'
            }`}
          >
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-xl">
              {category.description}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {category.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="h-56 overflow-hidden">
                    <LazyLoadImage
                      src={item.image}
                      alt={item.name}
                      effect="blur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-2xl font-semibold text-amber-900">{item.name}</h4>
                      <span className="text-amber-500 font-bold text-xl">${item.price}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    <button className="w-full bg-amber-900 text-white py-3 rounded-xl font-medium hover:bg-amber-800 transition-colors duration-300">
                      Add to Order
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default MenuSection;