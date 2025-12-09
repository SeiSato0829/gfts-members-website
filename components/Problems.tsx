import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { PROBLEMS } from '../constants';

type IconName = keyof typeof LucideIcons;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const Problems: React.FC = () => {
  return (
    <section className="py-24 bg-brand-gray">
      <div className="container mx-auto px-4 lg:px-12 max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-serif mb-4">
            {PROBLEMS.title}
          </h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {PROBLEMS.items.map((problem, index) => {
            const Icon = LucideIcons[problem.icon as IconName] || LucideIcons.AlertCircle;
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border-t-4 border-brand-blue/20"
                variants={itemVariants}
              >
                <div className="bg-brand-blue/10 p-4 rounded-full mb-6 text-brand-blue">
                  <Icon className="w-8 h-8" />
                </div>
                <p className="text-lg font-medium text-brand-dark leading-relaxed">
                  {problem.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
