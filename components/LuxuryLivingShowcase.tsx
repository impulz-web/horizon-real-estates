'use client';

import React from 'react';
import { Eye, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function LuxuryLivingShowcase() {
  const showcaseData = [
    {
      id: 'waterfront',
      category: 'Coastal Splendor',
      title: 'Waterfront Villas',
      location: 'Diani & Watamu Beach',
      description: 'Savor the ocean breeze in our beachfront collection. Positioned on pristine sand dunes, these Swahili-Moroccan villas combine private beach access, custom infinity pools, coral limestone arches, and triple-perimeter security to establish an unparalleled coastal sanctuary.',
      specs: [
        { label: 'Direct Ocean Frontage', value: 'Yes' },
        { label: 'Private Yacht Anchor', value: 'Optional' },
        { label: 'Yield Potential', value: '11% p.a.' },
      ],
      visualTheme: 'from-blue-50 to-indigo-50 border-blue-200',
      tag: 'Oceanic Sanctuaries',
    },
    {
      id: 'apartments',
      category: 'Metropolitan Heights',
      title: 'Modern Apartments',
      location: 'Westlands & Upper Hill',
      description: 'Experience vertical luxury in Nairobi’s high-density finance districts. Our penthouses and duplex suites offer 360-degree panoramic skyline views, private internal elevators, rooftop plunge pools, floor-to-ceiling soundproof acoustic glass, and elite wellness centers.',
      specs: [
        { label: 'Acoustic Soundproofing', value: '45 dB' },
        { label: 'Smart Home Automation', value: 'Standard' },
        { label: 'Private Parking Slots', value: '4 per unit' },
      ],
      visualTheme: 'from-slate-50 to-zinc-100 border-slate-200',
      tag: 'Urban Sophistication',
    },
    {
      id: 'family',
      category: 'Discreet Wilderness',
      title: 'Family Homes',
      location: 'Karen & Kitisuru Estates',
      description: 'Preserve multigenerational legacies in mature forest buffer zones. These stately stone mansions and contemporary villas offer massive acreage, temperature-controlled swimming pools, integrated guest wings, security double-gates, and private nature streams.',
      specs: [
        { label: 'Private Acreage', value: '0.5 to 2.0 Acres' },
        { label: 'Water Security', value: 'Solar Well + Purifier' },
        { label: 'Security Buffer Zone', value: 'Double Gated' },
      ],
      visualTheme: 'from-orange-50/40 to-amber-50/40 border-amber-200',
      tag: 'Forest Havens',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white text-[#1a1a1a] px-4 sm:px-6 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#b28e46] uppercase tracking-wider">
            Bespoke Portfolios
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl text-slate-900 font-bold tracking-tight">
            Luxury Living Showcase in Kenya
          </h2>
        </div>

        {/* Showcase Rows */}
        <div className="space-y-16">
          {showcaseData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Side */}
                <div
                  className={`lg:col-span-6 space-y-4 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <span className="text-xs font-bold text-[#b28e46] uppercase tracking-wider">
                    {item.category}
                  </span>
                  
                  <h3 className="font-sans text-xl sm:text-2xl font-bold leading-tight text-slate-900">
                    {item.title} <span className="text-[#1A4B40] block text-base font-semibold mt-1">{item.location}</span>
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {/* Visual Stats Row */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                    {item.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex flex-col space-y-1">
                        <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">{spec.label}</span>
                        <span className="text-xs sm:text-sm font-bold text-[#1a1a1a]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pure CSS Visual Architectural Side */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.3 }}
                    className={`relative h-[280px] bg-gradient-to-br ${item.visualTheme} border p-6 flex flex-col justify-between shadow-sm rounded-lg overflow-hidden`}
                  >
                    {/* Background architectural grid line mockup */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(26,75,64,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(26,75,64,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

                    <div className="flex justify-between items-start relative z-10">
                      <div>
                        <span className="text-[9px] font-bold text-[#1A4B40] tracking-wider">
                          PORTFOLIO STANDARD
                        </span>
                        <p className="font-sans text-sm font-bold text-[#1a1a1a] mt-0.5">{item.tag}</p>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-stone-200 bg-white flex items-center justify-center text-[#1A4B40] shadow-sm">
                        <Award className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Structural CSS Elevation drawing elements */}
                    <div className="my-3 border border-slate-200 bg-white/80 backdrop-blur-sm p-4 relative z-10 flex flex-col space-y-2 rounded shadow-sm">
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                        <span>Phase: Active & Verified</span>
                        <span>Registry ID: HR-09{index + 1}</span>
                      </div>
                      <div className="w-full h-[1px] bg-slate-100" />
                      <div className="flex justify-between gap-2">
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase font-bold text-slate-400">Foundation</span>
                          <span className="text-xs font-semibold text-slate-800">Reinforced</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase font-bold text-slate-400">Insulation</span>
                          <span className="text-xs font-semibold text-slate-800">Double Glazed</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase font-bold text-slate-400">Surveillance</span>
                          <span className="text-xs font-semibold text-slate-800">AI Enabled</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-end relative z-10">
                      <div className="text-[10px] font-semibold text-slate-400">
                        Horizon Properties Kenya
                      </div>
                      <div className="flex items-center space-x-1.5 text-xs text-[#1A4B40] hover:underline cursor-pointer font-bold">
                        <span>Inspect Listing</span>
                        <Eye className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
