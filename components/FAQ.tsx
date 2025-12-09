import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <motion.button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: '#F7F7F7' }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-lg font-bold text-brand-dark pr-8">{question}</span>
        <span className="flex-shrink-0 text-brand-blue">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isOpen ? 'minus' : 'plus'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <Minus /> : <Plus />}
            </motion.div>
          </AnimatePresence>
        </span>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-8">
              <p className="text-gray-700 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-12 max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">
            {FAQS.title}
          </h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="space-y-2">
          {FAQS.items.map((faq, index) => (
            <FAQItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};
