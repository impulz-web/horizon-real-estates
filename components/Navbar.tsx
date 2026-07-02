'use client';

import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onScheduleClick: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ onScheduleClick, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Properties', id: 'properties' },
    { name: 'Categories', id: 'categories' },
    { name: 'AI Concierge', id: 'concierge' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="navbar-sticky"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#003b95] shadow-md border-b border-[#002f75] py-3'
            : 'bg-[#003580] border-b border-[#002f75] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo Brand */}
          <div
            id="brand-logo"
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleItemClick('home')}
          >
            <Compass className="w-7 h-7 text-[#ffb700] transition-transform duration-500 group-hover:rotate-45" />
            <div className="flex flex-col">
              <span className="font-sans text-lg tracking-[0.15em] text-white font-bold leading-none">
                HORIZON
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#ffb700] font-sans font-bold uppercase leading-none mt-1">
                ESTATES KENYA
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="text-xs tracking-wider text-white/90 hover:text-white font-sans uppercase font-semibold transition-colors duration-200 cursor-pointer py-1.5 px-3 rounded hover:bg-white/10"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onScheduleClick}
              className="flex items-center space-x-2 text-xs tracking-wider uppercase font-bold bg-[#ffb700] hover:bg-[#e0a100] text-[#1a1a1a] px-4 py-2.5 rounded transition-all duration-200 font-sans cursor-pointer shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#1a1a1a]" />
              <span>Book Viewing</span>
            </button>
          </div>

          {/* Hamburger Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:text-[#ffb700] transition-colors duration-200 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 bg-[#003b95] border-t border-[#002f75] lg:hidden flex flex-col justify-between p-6 overflow-y-auto"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => handleItemClick(item.id)}
                  className="text-left text-sm tracking-wider text-white hover:text-[#ffb700] font-sans font-bold uppercase py-2.5 border-b border-white/10 transition-colors"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col space-y-4 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onScheduleClick();
                }}
                className="w-full flex items-center justify-center space-x-2 text-xs tracking-wider uppercase font-bold bg-[#ffb700] hover:bg-[#e0a100] text-[#1a1a1a] py-3.5 font-sans transition-all rounded shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Viewing</span>
              </button>
              <div className="text-center text-[9px] tracking-widest text-white/60 font-sans uppercase">
                Horizon Properties | Kenya Luxury Estates
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
