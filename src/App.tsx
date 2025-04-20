import React, { Suspense, lazy } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';

// Eagerly load essential components
import Navbar from './components/Navbar';
import HeroScene from './components/HeroScene';

// Lazy load other components
const About = lazy(() => import('./components/About'));
const Menu = lazy(() => import('./components/Menu'));
const Gallery = lazy(() => import('./components/Gallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen w-full bg-black">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-turmeric-400"></div>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <HeroScene />
        
        <Suspense fallback={<LoadingFallback />}>
          <About />
          <Menu />
          <Gallery />
          <Testimonials />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </LanguageProvider>
  );
}

export default App;