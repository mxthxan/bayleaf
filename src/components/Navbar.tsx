import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'menu', label: 'Menu' },
    { href: 'gallery', label: 'Gallery' },
    { href: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent hover:from-amber-500 hover:to-amber-700 transition-all duration-300"
          >
            Dakshin
          </a>
          
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === link.href
                    ? 'text-amber-900 bg-amber-100'
                    : 'text-amber-900 hover:bg-amber-50'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                  activeSection === link.href
                    ? 'bg-amber-500 scale-100'
                    : 'bg-amber-300 scale-0 group-hover:scale-100'
                }`}></span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="ml-4 px-6 py-2 bg-amber-900 text-white rounded-full text-sm font-medium hover:bg-amber-800 transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/20 transform hover:-translate-y-0.5"
            >
              Reserve Table
            </a>
          </div>

          <button
            className="md:hidden text-amber-900 p-2 hover:bg-amber-50 rounded-full transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-amber-100 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block py-3 px-4 rounded-xl text-amber-900 transition-all duration-300 ${
                  activeSection === link.href
                    ? 'bg-amber-100 font-medium'
                    : 'hover:bg-amber-50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="block mt-2 py-3 px-4 bg-amber-900 text-white rounded-xl font-medium text-center hover:bg-amber-800 transition-all duration-300"
            >
              Reserve Table
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;