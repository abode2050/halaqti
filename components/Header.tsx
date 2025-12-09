import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="absolute w-full z-50 py-4">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-brand-green p-2 rounded-lg text-white">
            <BookOpen size={24} />
          </div>
          <span className="text-xl font-bold text-brand-dark dark:text-white">
            نظام حلقتي
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-brand-green transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-dark dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-brand-dark-card shadow-lg border-t border-gray-100 dark:border-gray-800 flex flex-col p-4 animate-fade-in-down z-50">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="py-3 px-4 text-gray-700 dark:text-gray-200 font-medium border-b border-gray-50 dark:border-gray-700 last:border-0 hover:bg-brand-light dark:hover:bg-gray-800 hover:text-brand-dark rounded-md transition-colors cursor-pointer"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;