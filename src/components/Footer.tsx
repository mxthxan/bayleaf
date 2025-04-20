import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-6">
              Spice<span className="text-turmeric-400">Haven</span>
            </h3>
            <p className="text-gray-400 mb-8">
              Experience authentic South Indian cuisine in an elegant setting, with recipes passed down through generations.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-turmeric-400 transition-colors duration-300"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-turmeric-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>7:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>7:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>8:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers, free giveaways, and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-turmeric-500 w-full"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-turmeric-500 text-black rounded-r-lg hover:bg-turmeric-600 transition-colors duration-300"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-800 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} SpiceHaven. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-turmeric-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-turmeric-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-turmeric-400 transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-turmeric-500 text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-50"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;