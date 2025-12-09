import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { FLOW } from '../constants';

type IconName = keyof typeof LucideIcons;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

export const Flow: React.FC = () => {
  return (
    <section id="flow" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-4 lg:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">
            {FLOW.title}
          </h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mt-4"></div>
        </motion.div>

        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gray-300" style={{ top: 'calc(2.5rem)' }} />

          {FLOW.items.map((step, index) => {
            const Icon = LucideIcons[step.icon as IconName] || LucideIcons.AlertCircle;
            return (
              <motion.div key={index} className="relative flex flex-col items-center text-center" variants={itemVariants}>
                <div className="relative z-10 w-20 h-20 bg-white border-2 border-gray-300 text-brand-blue rounded-full flex items-center justify-center shadow-lg mb-6">
                  <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-3">
                  <span className="text-sm text-brand-blue block mb-1">STEP {index + 1}</span>
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm px-2">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
