import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
              alt="Traditional South Indian cooking"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">
              Preserving Tradition Since 1985
            </h3>
            <p className="text-gray-700 mb-6">
              For over three decades, we have been serving authentic South Indian cuisine
              with recipes passed down through generations. Our commitment to using
              traditional cooking methods and fresh, high-quality ingredients has made
              us a beloved destination for food enthusiasts.
            </p>
            <p className="text-gray-700">
              Every dish we serve carries the essence of South Indian culinary heritage,
              prepared with love and attention to detail. From our signature dosas to
              aromatic curries, each recipe tells a story of tradition and passion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;