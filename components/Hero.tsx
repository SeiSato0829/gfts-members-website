import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from './CTAButton';
import { HERO_TITLE, HERO_SUBTITLE } from '../constants';

export const Hero: React.FC = () => {
  const titleLines = HERO_TITLE.split('\n');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Professional business meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/70 to-brand-dark/40" />
      </div>

      <motion.div
        className="container mx-auto px-4 z-10 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-6 text-shadow">
          {titleLines.map((line, index) => (
            <motion.span key={index} variants={itemVariants} className="block">
              {line}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="text-base md:text-xl mb-10 max-w-2xl leading-relaxed text-shadow-sm"
          variants={itemVariants}
        >
          {HERO_SUBTITLE}
        </motion.p>
        <motion.div variants={itemVariants}>
          <CTAButton size="lg" />
        </motion.div>
      </motion.div>
    </section>
  );
};