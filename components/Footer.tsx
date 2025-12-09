import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SITE_NAME, COMPANY_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Link to="/" className="text-2xl font-serif font-bold tracking-widest hover:opacity-80 transition-opacity">
              {SITE_NAME}
            </Link>
            <p className="text-xs text-gray-400 mt-2">
              {COMPANY_NAME}
            </p>
          </div>
          
          <nav className="mb-8 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
