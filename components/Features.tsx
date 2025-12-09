import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { FEATURES } from '../constants';

type IconName = keyof typeof LucideIcons;

const featureImages = [
  "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];

export const Features: React.FC = () => {
  const motionProps = (index: number) => ({
    initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, ease: 'easeOut' },
  });

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">
            {FEATURES.title}
          </h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="space-y-24">
          {FEATURES.items.map((feature, index) => {
            const Icon = LucideIcons[feature.icon as IconName] || LucideIcons.AlertCircle;
            return (
              <div
                key={feature.id}
                className="flex flex-col lg:flex-row items-center gap-12"
              >
                {/* Image on the left for even, right for odd */}
                <motion.div className={`lg:w-1/2 w-full lg:order-${index % 2 === 0 ? 1 : 2}`} {...motionProps(index)}>
                  <div className="relative group overflow-hidden rounded-lg shadow-xl">
                    <img
                      src={featureImages[index]}
                      alt={feature.title}
                      className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </motion.div>

                {/* Content on the right for even, left for odd */}
                <motion.div className={`lg:w-1/2 w-full space-y-6 lg:order-${index % 2 === 0 ? 2 : 1}`} {...motionProps(index)}>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-brand-blue rounded-lg flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-dark">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
