import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Dakshin</h3>
            <p className="text-amber-200">
              Authentic South Indian cuisine served with love and tradition.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 11:30 AM - 10:00 PM</li>
              <li>Saturday - Sunday: 11:00 AM - 11:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">Facebook</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">Instagram</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Dakshin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;