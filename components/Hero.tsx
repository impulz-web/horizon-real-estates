'use client';

import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Home, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onBrowseClick: () => void;
  onScheduleClick: () => void;
  onSearch: (filters: { location: string; type: string; budget: string }) => void;
}

export default function Hero({ onBrowseClick, onScheduleClick, onSearch }: HeroProps) {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ location, type, budget });
  };

  const majorCities = [
    'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 
    'Naivasha', 'Nanyuki', 'Diani Beach', 'Watamu', 'Malindi'
  ];

  return (
    <div id="home">
      {/* Deep Emerald Header Section */}
      <section className="bg-[#0B2521] pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(178,142,70,0.06),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="space-y-3">
            <span className="text-xs tracking-wider text-[#b28e46] uppercase font-bold bg-[#b28e46]/10 px-3 py-1 rounded">
              Official Luxury Real Estate Portal
            </span>
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Find your next luxury estate in Kenya
            </h1>
            <p className="font-sans text-sm sm:text-base md:text-lg text-white/90 max-w-3xl leading-relaxed">
              Explore exclusive listings in <span className="font-semibold text-[#b28e46]">Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Naivasha, Nanyuki, Diani Beach, Watamu, and Malindi</span>. Discover handpicked mansions, beachfront penthouses, and elite safari sanctuaries.
            </p>
          </div>

          {/* Quick value props */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs text-white/80 font-sans">
            <div className="flex items-center space-x-1.5">
              <Check className="w-4 h-4 text-[#b28e46] shrink-0" />
              <span>Discretion Guaranteed</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Check className="w-4 h-4 text-[#b28e46] shrink-0" />
              <span>Direct Capital Advisor Match</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Check className="w-4 h-4 text-[#b28e46] shrink-0" />
              <span>Verified Title deeds & Deeds of sale</span>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Search Bar Section - Elegant floating bar with a brass border */}
      <section className="px-4 sm:px-6 -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto bg-[#b28e46] p-[2px] rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="bg-white rounded-md p-3 grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
            
            {/* Location selector */}
            <div className="lg:col-span-4 flex items-center space-x-3 p-2.5 border-b lg:border-b-0 lg:border-r border-slate-200">
              <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
              <div className="flex-1">
                <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">Where are you looking?</span>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-[#1a1a1a] focus:outline-none cursor-pointer mt-0.5"
                >
                  <option value="">Select Kenyan City / Region</option>
                  <option value="Nairobi">Nairobi (Karen, Runda, Westlands)</option>
                  <option value="Mombasa">Mombasa (Nyali, Shanzu, Tudor)</option>
                  <option value="Kisumu">Kisumu (Milimani, Riat Hills)</option>
                  <option value="Nakuru">Nakuru (Milimani Estates)</option>
                  <option value="Eldoret">Eldoret (Elgon View)</option>
                  <option value="Naivasha">Naivasha (Great Rift Valley Lodge, Golf Estates)</option>
                  <option value="Nanyuki">Nanyuki (Mount Kenya, Safari Ranches)</option>
                  <option value="Diani Beach">Diani Beach (Oceanfront Luxury)</option>
                  <option value="Watamu">Watamu (Marine Sanctuary Villas)</option>
                  <option value="Malindi">Malindi (Casuarina Luxury Villas)</option>
                </select>
              </div>
            </div>

            {/* Property Type Selector */}
            <div className="lg:col-span-3 flex items-center space-x-3 p-2.5 border-b lg:border-b-0 lg:border-r border-slate-200">
              <Home className="w-5 h-5 text-slate-400 shrink-0" />
              <div className="flex-1">
                <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">Property Type</span>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-[#1a1a1a] focus:outline-none cursor-pointer mt-0.5"
                >
                  <option value="">All Categories</option>
                  <option value="Villa">Luxury Villa</option>
                  <option value="Waterfront Villa">Waterfront Villa</option>
                  <option value="Apartment">Elite Apartment & Penthouse</option>
                  <option value="Townhouse">Exclusive Townhouse</option>
                  <option value="Commercial Space">Premium Office Space</option>
                  <option value="Vacation Home">Vacation / Safari Lodge</option>
                </select>
              </div>
            </div>

            {/* Budget Tier Selector */}
            <div className="lg:col-span-3 flex items-center space-x-3 p-2.5 border-b lg:border-b-0">
              <DollarSign className="w-5 h-5 text-slate-400 shrink-0" />
              <div className="flex-1">
                <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">Max Budget Tier</span>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-[#1a1a1a] focus:outline-none cursor-pointer mt-0.5"
                >
                  <option value="">Any Budget Tier</option>
                  <option value="under-1m">Under $1.0 Million (KSh 130 Million)</option>
                  <option value="1m-2m">$1.0 Million - $2.0 Million (KSh 130M - KSh 260M)</option>
                  <option value="2m-3m">$2.0 Million - $3.0 Million (KSh 260M - KSh 390M)</option>
                  <option value="above-3m">Above $3.0 Million (KSh 390 Million+)</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="lg:col-span-2 w-full">
              <button
                type="submit"
                className="w-full text-center text-sm uppercase font-bold bg-[#1A4B40] hover:bg-[#0B2521] text-white py-3.5 px-4 transition-colors duration-150 cursor-pointer rounded-md shadow-sm"
              >
                Search
              </button>
            </div>

          </form>
        </div>
      </section>

      {/* Popular destination suggestions */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 font-sans">
          <span className="font-bold text-[#1a1a1a]">Popular in Kenya:</span>
          {majorCities.slice(0, 7).map((city) => (
            <button
              key={city}
              onClick={() => onSearch({ location: city, type: '', budget: '' })}
              className="px-3 py-1.5 bg-white border border-slate-200 hover:border-[#1A4B40] hover:bg-slate-50 text-slate-700 transition-colors duration-150 cursor-pointer rounded"
            >
              {city}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
