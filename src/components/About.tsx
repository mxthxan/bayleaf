import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants}>
            <h2 className="section-title">
              Our <span className="text-turmeric-400">Story</span>
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam veniam magnam accusantium in saepe ea! Exercitationem assumenda nihil voluptates blanditiis qui fugit unde modi facilis recusandae beatae, adipisci, voluptas cupiditate!
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus illum nemo praesentium consectetur neque ipsam maxime voluptatem itaque tempora expedita cum dolorem obcaecati, odio, beatae tenetur eligendi perferendis doloremque nobis.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <motion.p 
                  className="text-5xl font-playfair text-turmeric-400 mb-2"
                  whileInView={{ scale: [0.5, 1.2, 1] }}
                  transition={{ duration: 0.8 }}
                >
                  Expirience 
                </motion.p>
                <p className="text-lg text-gray-300">Years of Excellence</p>
              </div>
              <div>
                <motion.p 
                  className="text-5xl font-playfair text-turmeric-400 mb-2"
                  whileInView={{ scale: [0.5, 1.2, 1] }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  recipe
                </motion.p>
                <p className="text-lg text-gray-300">Authentic Recipes</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="relative z-10 overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Chef preparing traditional South Indian food"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-turmeric-500 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-2/3 h-2/3 border-2 border-curry-500 rounded-lg -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;