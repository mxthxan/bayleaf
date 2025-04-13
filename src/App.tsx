import React, { useState } from 'react';
import { Menu, Home, Info, Phone, UtensilsCrossed, Images, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="menu" className="py-20 bg-amber-100">
          <MenuSection />
        </section>
        <section id="gallery" className="py-20">
          <Gallery />
        </section>
        <section id="contact" className="py-20 bg-amber-100">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;