'use client';

import React, { useState } from 'react';
import { Property, KENYAN_PROPERTIES } from '@/lib/properties';
import { Bath, Maximize2, Heart, ArrowUpRight, SearchCheck, MapPin } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

interface FeaturedPropertiesProps {
  onViewDetails: (property: Property) => void;
  searchFilters: { location: string; type: string; budget: string } | null;
}

export default function FeaturedProperties({ onViewDetails, searchFilters }: FeaturedPropertiesProps) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('All');

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Filter listings based on category selection AND hero search filters
  const filteredProperties = KENYAN_PROPERTIES.filter((prop) => {
    // 1. Filter by location category tab (if not 'All')
    if (selectedCity !== 'All' && prop.city !== selectedCity) {
      return false;
    }

    // 2. Filter by search input parameters (if active)
    if (searchFilters) {
      if (searchFilters.location && !prop.city.toLowerCase().includes(searchFilters.location.toLowerCase()) && !prop.location.toLowerCase().includes(searchFilters.location.toLowerCase())) {
        return false;
      }
      if (searchFilters.type && prop.type !== searchFilters.type) {
        return false;
      }
      if (searchFilters.budget) {
        if (searchFilters.budget === 'under-1m' && prop.price >= 1000000) return false;
        if (searchFilters.budget === '1m-2m' && (prop.price < 1000000 || prop.price > 2000000)) return false;
        if (searchFilters.budget === '2m-3m' && (prop.price < 2000000 || prop.price > 3000000)) return false;
        if (searchFilters.budget === 'above-3m' && prop.price <= 3000000) return false;
      }
    }

    return true;
  });

  const cityTabs = ['All', 'Nairobi', 'Mombasa', 'Naivasha', 'Nanyuki'];

  // Add booking rating generation based on id
  const getPropertyRating = (id: string) => {
    const ratings: Record<string, { score: string; text: string; count: number }> = {
      'prop-1': { score: '9.8', text: 'Exceptional', count: 48 },
      'prop-2': { score: '9.9', text: 'Outstanding', count: 62 },
      'prop-3': { score: '9.5', text: 'Superb', count: 31 },
      'prop-4': { score: '9.2', text: 'Excellent', count: 24 },
      'prop-5': { score: '9.6', text: 'Exceptional', count: 18 },
      'prop-6': { score: '9.7', text: 'Exceptional', count: 29 },
      'prop-7': { score: '9.4', text: 'Superb', count: 15 },
      'prop-8': { score: '9.3', text: 'Excellent', count: 12 },
    };
    return ratings[id] || { score: '9.5', text: 'Superb', count: 20 };
  };

  return (
    <section id="properties" className="py-20 bg-white border-y border-slate-200 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b border-slate-200">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#006ce4] uppercase tracking-wider">
              Exclusive Portfolio
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl text-[#1a1a1a] font-bold tracking-tight">
              Featured Luxury Listings in Kenya
            </h2>
          </div>

          {/* Location Category Tabs */}
          <div className="flex flex-wrap gap-1 mt-4 md:mt-0">
            {cityTabs.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`text-xs font-semibold px-4 py-2 font-sans transition-all duration-150 rounded cursor-pointer ${
                  selectedCity === city
                    ? 'bg-[#003b95] text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-[#1a1a1a]'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Listings Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProperties.map((property) => {
                const isFavorite = favorites.includes(property.id);
                const rating = getPropertyRating(property.id);

                return (
                  <motion.div
                    key={property.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="group bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-150 flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Image Area */}
                    <div className="relative h-56 overflow-hidden bg-slate-100">
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-102"
                        referrerPolicy="no-referrer"
                        sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                      />
                      
                      {/* Favorite Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(property.id);
                        }}
                        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow hover:bg-white text-slate-700 hover:text-red-500 transition-all duration-150 cursor-pointer z-10"
                        aria-label="Toggle Favourite"
                      >
                        <Heart
                          className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`}
                        />
                      </button>

                      {/* Property Category Badge */}
                      <span className="absolute bottom-3 left-3 bg-[#003580] text-white text-[10px] font-bold px-2 py-1 rounded">
                        {property.type}
                      </span>
                    </div>

                    {/* Content details */}
                    <div className="p-4 flex-grow flex flex-col justify-between space-y-4">
                      
                      <div className="space-y-2">
                        {/* Title & Rating Row */}
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-sans text-base text-[#1a1a1a] font-bold leading-snug group-hover:text-[#006ce4] transition-colors duration-150">
                            {property.title}
                          </h3>
                          
                          {/* Booking rating badge */}
                          <div className="flex items-center space-x-2 shrink-0">
                            <div className="text-right">
                              <span className="block text-xs font-bold text-[#1a1a1a]">{rating.text}</span>
                              <span className="block text-[10px] text-slate-500">{rating.count} reviews</span>
                            </div>
                            <div className="bg-[#003b95] text-white text-xs font-extrabold p-1.5 rounded-sm shrink-0">
                              {rating.score}
                            </div>
                          </div>
                        </div>

                        {/* Location Link */}
                        <div className="flex items-center space-x-1 text-xs text-[#006ce4] hover:underline cursor-pointer">
                          <MapPin className="w-3.5 h-3.5 shrink-0 text-[#006ce4]" />
                          <span className="truncate">{property.location}</span>
                        </div>

                        {/* Tag/Feature info */}
                        <p className="text-xs text-slate-600 line-clamp-2 mt-2">
                          {property.description}
                        </p>
                      </div>

                      {/* Specs Row */}
                      <div className="grid grid-cols-3 gap-1 py-2.5 border-y border-slate-100 text-xs text-slate-600 font-sans text-center">
                        <div className="flex items-center space-x-1.5 justify-center">
                          <Bed3 className="w-4 h-4 text-slate-500 shrink-0" />
                          <span>{property.bedrooms > 0 ? `${property.bedrooms} Beds` : 'N/A'}</span>
                        </div>
                        <div className="w-[1px] h-3 bg-slate-200 self-center" />
                        <div className="flex items-center space-x-1.5 justify-center">
                          <Bath className="w-4 h-4 text-slate-500 shrink-0" />
                          <span>{property.bathrooms} Baths</span>
                        </div>
                        <div className="w-[1px] h-3 bg-slate-200 self-center" />
                        <div className="flex items-center space-x-1.5 justify-center">
                          <Maximize2 className="w-4 h-4 text-slate-500 shrink-0" />
                          <span>{property.area}</span>
                        </div>
                      </div>

                      {/* Price and Booking.com primary blue button */}
                      <div className="flex items-center justify-between pt-1">
                        <div>
                          <span className="block text-[10px] uppercase font-bold text-slate-400">Investment Value</span>
                          <span className="text-lg font-bold text-[#1a1a1a] block leading-none mt-1">
                            ${property.price.toLocaleString()}
                          </span>
                          <span className="text-xs font-semibold text-[#008009] block mt-1">
                            ~ {property.priceKsh}
                          </span>
                        </div>

                        <button
                          onClick={() => onViewDetails(property)}
                          className="bg-[#006ce4] hover:bg-[#003b95] text-white text-xs font-bold py-2.5 px-4 rounded transition-all duration-150 cursor-pointer text-center"
                        >
                          View Availability
                        </button>
                      </div>

                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-lg text-center py-12 px-4">
            <SearchCheck className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="font-sans text-lg text-[#1a1a1a] font-bold mb-1">No matching premium listings found</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              We couldn&apos;t find any premium properties matching your search parameters. Please try adjusting your filters or connect with our AI concierge for a custom search.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

// Simple fallback Bed3 component since Bed icon is often deprecated / named differently in Lucide
function Bed3(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  );
}
