import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { PRICING } from '../constants';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">
            {PRICING.title}
          </h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mt-4"></div>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-brand-blue"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="bg-brand-gray p-8 text-center">
            <h3 className="text-2xl font-bold text-brand-dark mb-2">{PRICING.planName}</h3>
            <div className="flex items-end justify-center gap-2 text-brand-blue">
              <span className="text-5xl md:text-6xl font-bold font-sans">
                ¥{Number(PRICING.price).toLocaleString()}
              </span>
              <span className="text-base font-bold pb-2">{PRICING.priceUnit}</span>
            </div>
            <p className="text-sm text-gray-600 mt-4">{PRICING.description}</p>
          </div>
          
          <div className="p-8 md:p-10">
            <h4 className="text-lg font-bold text-center text-brand-dark mb-6">プランに含まれる内容</h4>
            <ul className="space-y-4 mb-8">
              {PRICING.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="text-center mb-8">
              <CTAButton className="w-full justify-center" size="lg" />
            </div>

            <p className="text-xs text-gray-500 text-center">{PRICING.note}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
