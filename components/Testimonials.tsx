import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

// Using high-quality, professional-looking, free-to-use images from Pexels
const testimonialImages = [
  "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4240505/pexels-photo-4240505.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5668887/pexels-photo-5668887.jpeg?auto=compress&cs=tinysrgb&w=600"
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">
            {TESTIMONIALS.title}
          </h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mt-4"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {TESTIMONIALS.items.map((review, index) => (
            <motion.div
              key={index}
              className="bg-brand-gray p-8 rounded-lg flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="flex-grow">
                <Quote className="w-8 h-8 text-brand-blue/30 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  {review.text}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={testimonialImages[index]}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-brand-dark">{review.name}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
