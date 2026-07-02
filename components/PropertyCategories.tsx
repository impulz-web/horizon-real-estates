'use client';

import React from 'react';
import { PROPERTY_CATEGORIES } from '@/lib/properties';
import { Home, Building2, Building, Briefcase, Landmark, Palmtree, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function PropertyCategories() {
  const iconMap: { [key: string]: any } = {
    'Villas': Home,
    'Apartments': Building,
    'Townhouses': Building2,
    'Commercial Spaces': Briefcase,
    'Luxury Estates': Landmark,
    'Vacation Homes': Palmtree,
  };

  return (
    <section id="categories" className="py-20 bg-slate-50 border-t border-slate-200 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold text-[#006ce4] uppercase tracking-wider">
            Bespoke Portfolios
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl text-slate-900 font-bold tracking-tight">
            Browse by Property Category
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            Tailor your search directly by selecting from our carefully classified property sectors.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTY_CATEGORIES.map((category, index) => {
            const IconComponent = iconMap[category.name] || Home;

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group border border-slate-200 bg-white hover:border-slate-300 p-6 shadow-sm hover:shadow-md transition-all duration-150 flex flex-col justify-between h-56 rounded-lg relative overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 flex items-center justify-center border border-slate-200 rounded-md text-[#003b95] bg-[#006ce4]/5 transition-colors duration-150">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base text-slate-900 font-bold group-hover:text-[#006ce4] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-[10px] tracking-wider font-sans uppercase font-bold text-[#008009] mt-0.5">
                      {category.count} Listings Available
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-2">
                    {category.description}
                  </p>
                </div>

                <div className="flex items-center space-x-1 text-xs font-bold text-[#006ce4] hover:underline transition-all mt-4 cursor-pointer">
                  <span>Explore Sector</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
