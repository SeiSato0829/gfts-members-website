import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  to?: string;
  href?: string;
  size?: 'sm' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  to = "/contact", // Default link
  href,
  size = 'lg',
  className = '',
  children = "無料カウンセリングはこちら"
}) => {
  const sizeClasses = size === 'lg' ? 'px-8 py-4 text-base' : 'px-6 py-2 text-xs';

  const buttonContent = (
    <motion.div
      whileHover="hover"
      className={`group relative inline-flex items-center justify-center font-bold tracking-wider uppercase rounded-full overflow-hidden transition-all duration-300 ${sizeClasses} ${className}`}
    >
      <span className="absolute inset-0 bg-brand-orange"></span>
      <span className="relative z-10 flex items-center gap-2 text-white">
        {children}
        <motion.div variants={{ hover: { x: 5 } }}>
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return (
    <Link to={to}>
      {buttonContent}
    </Link>
  );
};
