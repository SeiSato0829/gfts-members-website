import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE_NAME } from '../constants';
import { CTAButton } from './CTAButton'; // Assuming CTAButton is refactored separately

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const NavLink: React.FC<{ href: string; label: string; className?: string }> = ({ href, label, className }) => {
    const isActive = location.pathname === href;
    return (
      <Link
        to={href}
        className={`relative text-sm font-medium transition-colors hover:text-brand-orange ${isActive ? 'text-brand-orange' : isScrolled ? 'text-brand-dark' : 'text-white'} ${className}`}
      >
        {label}
        {isActive && (
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-orange"
            layoutId="underline"
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          />
        )}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <Link to="/" className={`text-xl font-bold tracking-wider font-serif transition-colors ${isScrolled || isMobileMenuOpen ? 'text-brand-blue' : 'text-white'}`}>
          {SITE_NAME}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
          <CTAButton size="sm" />
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="text-brand-dark" /> : <Menu className={isScrolled ? 'text-brand-dark' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-6"
          >
            <nav className="flex flex-col items-center space-y-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-brand-dark font-medium text-lg"
                >
                  {link.label}
                </Link>
              ))}
              <CTAButton className="w-full max-w-xs mt-4" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
