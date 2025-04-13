import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Contact Us</h2>
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-amber-800 mb-6">Get in Touch</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-amber-600" />
              <div>
                <h4 className="font-medium text-amber-900">Phone</h4>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-amber-600" />
              <div>
                <h4 className="font-medium text-amber-900">Email</h4>
                <p className="text-gray-600">info@dakshin.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-amber-600" />
              <div>
                <h4 className="font-medium text-amber-900">Address</h4>
                <p className="text-gray-600">
                  123 Spice Street<br />
                  Foodie City, FC 12345
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form className="space-y-6">
            <div>
              <label className="block text-amber-900 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            
            <div>
              <label className="block text-amber-900 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            
            <div>
              <label className="block text-amber-900 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;