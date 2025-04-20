import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dynamic text color - black initially, changes to white when scrolled
  const navTextColor = isScrolled ? 'text-white' : 'text-black';
  const navTextHoverColor = 'text-turmeric-400';

  return (
    <motion.nav
      className={`w-full py-4 px-6 md:px-10 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-scroll bg-gray-800' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.a 
          href="#home"
          className={`text-3xl md:text-4xl font-playfair font-bold ${isScrolled ? 'text-white' : 'text-black'}`}
          whileHover={{ scale: 1.05 }}
        >
          Bay<span className="text-turmeric-400">Leaf</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className={`${navTextColor} hover:${navTextHoverColor} text-lg font-semibold transition-colors duration-300`}
              whileHover={{ y: -2 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
            >
              {t(`nav.${item.name.toLowerCase()}`)}
            </motion.a>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${navTextColor} focus:outline-none`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-gray-800 bg-opacity-95 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4 px-6">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-white hover:text-turmeric-400 text-lg font-semibold py-2 transition-colors duration-300"
                whileHover={{ x: 5 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {t(`nav.${item.name.toLowerCase()}`)}
              </motion.a>
            ))}
            <div className="pt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;