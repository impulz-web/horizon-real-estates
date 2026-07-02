'use client';

import React, { useState } from 'react';
import { Compass, ArrowRight, Instagram, Linkedin, Facebook, Twitter, Shield } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#0B2521] text-white pt-16 pb-10 px-4 sm:px-6 relative overflow-hidden border-t border-[#1A4B40]/20">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#1A4B40]/20">
        
        {/* Brand Column (Span 4) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center space-x-3 cursor-pointer group">
            <Compass className="w-6 h-6 text-[#b28e46] transition-transform duration-500 group-hover:rotate-45" />
            <div className="flex flex-col">
              <span className="font-sans text-lg tracking-wider font-bold leading-none">
                HORIZON
              </span>
              <span className="text-[9px] tracking-widest text-[#b28e46] font-bold uppercase leading-none mt-1">
                PROPERTIES
              </span>
            </div>
          </div>
          <p className="text-xs text-stone-300 font-sans leading-relaxed max-w-sm">
            Horizon Properties acts as fiduciaries and advisors for premier residential estates, 
            coastal sanctuaries, and grade-A commercial real estate in Nairobi, Mombasa, Diani, Watamu, 
            Naivasha, and Nanyuki.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="w-8 h-8 rounded-full border border-stone-200/20 hover:border-[#b28e46] flex items-center justify-center text-stone-300 hover:text-[#b28e46] transition-colors" aria-label="Horizon Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-stone-200/20 hover:border-[#b28e46] flex items-center justify-center text-stone-300 hover:text-[#b28e46] transition-colors" aria-label="Horizon LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-stone-200/20 hover:border-[#b28e46] flex items-center justify-center text-stone-300 hover:text-[#b28e46] transition-colors" aria-label="Horizon Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-stone-200/20 hover:border-[#b28e46] flex items-center justify-center text-stone-300 hover:text-[#b28e46] transition-colors" aria-label="Horizon Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Links Column 1: Locations (Span 3) */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-[10px] uppercase tracking-wider text-[#b28e46] font-bold">
            Luxury Portfolios
          </h4>
          <ul className="space-y-2 text-xs text-stone-300 font-sans">
            <li><a href="#properties" className="hover:text-white transition-colors">Karen Mansions (Nairobi)</a></li>
            <li><a href="#properties" className="hover:text-white transition-colors">Westlands Penthouses</a></li>
            <li><a href="#properties" className="hover:text-white transition-colors">Diani Beachfront Villas</a></li>
            <li><a href="#properties" className="hover:text-white transition-colors">Watamu Ocean Retreats</a></li>
            <li><a href="#properties" className="hover:text-white transition-colors">Naivasha Golf Estates</a></li>
            <li><a href="#properties" className="hover:text-white transition-colors">Nanyuki Wilderness Ranches</a></li>
          </ul>
        </div>

        {/* Links Column 2: Company (Span 2) */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-[10px] uppercase tracking-wider text-[#b28e46] font-bold">
            The Company
          </h4>
          <ul className="space-y-2 text-xs text-stone-300 font-sans">
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
            <li><a href="#agents" className="hover:text-white transition-colors">Managing Advisors</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">Client FAQs</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Press & News</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact Concierge</a></li>
          </ul>
        </div>

        {/* Newsletter Column (Span 3) */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-[10px] uppercase tracking-wider text-[#b28e46] font-bold">
            Private Journal
          </h4>
          <p className="text-xs text-stone-300 font-sans leading-relaxed">
            Subscribe to receive premium market analyses, private listings, and exclusive property handbooks directly to your inbox.
          </p>

          {subscribed ? (
            <div className="bg-[#1A4B40] border border-[#b28e46]/20 p-2.5 text-center rounded">
              <p className="text-[10px] tracking-wider text-[#b28e46] uppercase font-bold">
                Successfully Subscribed
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <div className="flex border border-stone-200/20 focus-within:border-[#b28e46] transition-colors bg-[#1A4B40]/40 rounded overflow-hidden">
                <input
                  type="email"
                  required
                  placeholder="Private Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent p-2.5 text-xs text-white placeholder-stone-400 focus:outline-none w-full font-sans"
                />
                <button
                  type="submit"
                  className="bg-[#b28e46] hover:bg-[#c9a562] text-white px-3.5 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Subscribe to Newsletter"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>

      {/* Footer Bottom Row */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] text-stone-400 font-sans uppercase tracking-wider space-y-3 md:space-y-0">
        <div>
          <span>© {currentYear} Horizon Properties Limited. All Rights Reserved.</span>
        </div>
        <div className="flex space-x-4 items-center">
          <a href="#" className="hover:text-white transition-colors flex items-center space-x-1">
            <Shield className="w-3.5 h-3.5" />
            <span>Discretion Policy</span>
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>

    </footer>
  );
}
