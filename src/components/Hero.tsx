import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      >
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>
      </div>
      
      <motion.div 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="relative h-full flex items-center justify-center text-center"
      >
        <div className={`max-w-4xl px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Experience Authentic
            <span className="block text-amber-400 mt-2">South Indian Cuisine</span>
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-200 mb-12 font-light tracking-wide"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Discover the rich flavors and traditions of South India
          </motion.p>
          <motion.div 
            className="space-x-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="#menu"
              className="inline-block bg-white/90 backdrop-blur-sm text-amber-900 px-10 py-4 rounded-full text-lg font-semibold hover:bg-white transform transition-all duration-300 hover:scale-105"
            >
              View Our Menu
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-white/80 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transform transition-all duration-300 hover:scale-105"
            >
              Book a Table
            </a>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300">
          <motion.svg 
            className="w-8 h-8"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </a>
      </motion.div>
    </div>
  );
}

export default Hero;