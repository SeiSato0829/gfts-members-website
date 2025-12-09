import React from 'react';
import { motion } from 'framer-motion';
import { CURRICULUM } from '../constants';
import { Check } from 'lucide-react';

export const Curriculum: React.FC = () => {
  const motionProps = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, ease: 'easeOut', delay },
  });

  return (
    <section id="curriculum" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        <motion.div className="text-center mb-12" {...motionProps()}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">
            {CURRICULUM.title}
          </h2>
          <p className="text-lg text-gray-600 mt-4">{CURRICULUM.subtitle}</p>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-16" {...motionProps(0.2)}>
            {CURRICULUM.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {CURRICULUM.features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-brand-gray p-8 rounded-lg"
              {...motionProps(0.4 + index * 0.2)}
            >
              <div className="inline-block bg-brand-blue text-white p-3 rounded-full mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
