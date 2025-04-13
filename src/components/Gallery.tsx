import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Traditional Thali',
    description: 'A complete meal with various dishes served on a traditional plate'
  },
  {
    url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Masala Dosa',
    description: 'Crispy rice crepe filled with spiced potatoes'
  },
  {
    url: 'https://images.unsplash.com/photo-1605197584005-0f1d37a4c7c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Idli Sambar',
    description: 'Steamed rice cakes served with lentil soup'
  },
  {
    url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'South Indian Coffee',
    description: 'Traditional filter coffee served in brass tumbler'
  },
  {
    url: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Curry Selection',
    description: 'Various aromatic curries and accompaniments'
  },
  {
    url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Traditional Setup',
    description: 'Authentic dining experience on banana leaf'
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
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
        <h2 className="text-6xl font-bold text-center text-amber-900 mb-16 tracking-tight">Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-16 aspect-h-12">
                <LazyLoadImage
                  src={image.url}
                  alt={image.title}
                  effect="blur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-semibold text-white mb-2">{image.title}</h3>
                  <p className="text-gray-200 text-lg">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-lg"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <LazyLoadImage
                src={selectedImage.url}
                alt={selectedImage.title}
                effect="blur"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-b-2xl backdrop-blur-sm">
                <h3 className="text-3xl font-semibold text-white mb-3">{selectedImage.title}</h3>
                <p className="text-gray-200 text-xl">{selectedImage.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Gallery;