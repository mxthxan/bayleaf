import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-gray-900 to-black" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Guest <span className="text-turmeric-400">Experiences</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Discover what our guests have to say about their culinary journey with us
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4 transition-transform duration-500 ease-in-out"
                >
                  <div className="bg-gray-800 rounded-lg p-8 md:p-12 text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={18} 
                          className={i < testimonial.rating ? "text-turmeric-400 fill-turmeric-400" : "text-gray-600"} 
                        />
                      ))}
                    </div>

                    <p className="text-lg md:text-xl text-gray-300 italic mb-6">
                      "{testimonial.content}"
                    </p>

                    <h4 className="font-playfair text-xl font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-turmeric-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <button
            className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-turmeric-500 text-black rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
            onClick={prevTestimonial}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-turmeric-500 text-black rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
            onClick={nextTestimonial}
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-turmeric-500' : 'bg-gray-600'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;