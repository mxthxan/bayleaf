import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Category = 'all' | 'food' | 'hotel' | 'ambiance';

// Sample gallery data (normally would be imported from '../data')
const galleryItems = [
  {
    id: 1,
    title: 'Fine Dining Experience',
    category: 'ambiance',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 2,
    title: 'Mountain View Suite',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 3,
    title: 'Waterfront Experience',
    category: 'ambiance',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 4,
    title: 'Heritage Building',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 5,
    title: 'Poolside Retreat',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 6,
    title: 'Relaxation Spot',
    category: 'ambiance',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  // Hidden images (initially)
  {
    id: 7,
    title: 'Masala Dosa',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de0f87b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 8,
    title: 'Coconut Chutney',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 9,
    title: 'Luxury Suite',
    category: 'hotel',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 10,
    title: 'Idli Sambar',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 11,
    title: 'Garden View',
    category: 'ambiance',
    image: 'https://images.unsplash.com/photo-1477005264461-b0e201668d92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 12,
    title: 'South Indian Thali',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [initialCount] = useState<number>(6); // Store initial count as a constant
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'food', label: 'Cuisine' },
    { value: 'hotel', label: 'Hotel' },
    { value: 'ambiance', label: 'Ambiance' },
  ];

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(initialCount);
  }, [activeCategory, initialCount]);

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);
    
  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMoreItems = visibleItems.length < filteredItems.length;
  const isExpanded = visibleCount > initialCount;

  const handleViewMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  const handleViewLess = () => {
    setVisibleCount(initialCount);
    // Scroll back to the top of the gallery section
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="gallery" className="section-padding bg-black py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="text-yellow-500">Gallery</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Immerse yourself in the visual journey of our hotel, restaurant ambiance, 
            and delicious South Indian culinary creations
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {categories.map((category) => (
              <motion.button
                key={category.value}
                className={`px-5 py-2 rounded-full ${
                  activeCategory === category.value 
                    ? 'bg-yellow-500 text-black' 
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

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {visibleItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative overflow-hidden rounded-lg cursor-pointer group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                layout
                onClick={() => setSelectedImage(item.image)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-medium text-white mb-1">{item.title}</h3>
                  <p className="text-yellow-400 text-sm uppercase tracking-wide">
                    {item.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More/Less Buttons */}
        <motion.div 
          className="mt-12 text-center flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {hasMoreItems && (
            <motion.button
              className="px-8 py-3 bg-yellow-500 text-black rounded-full inline-flex items-center gap-2 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewMore}
            >
              View More
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </motion.button>
          )}
          
          {isExpanded && (
            <motion.button
              className="px-8 py-3 bg-gray-700 text-white rounded-full inline-flex items-center gap-2 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewLess}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              View Less
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </motion.button>
          )}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button 
              className="absolute top-4 right-4 text-white bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;