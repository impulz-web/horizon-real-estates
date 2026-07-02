'use client';

import React from 'react';
import { Search, CalendarDays, Key, Landmark, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function BuyingProcess() {
  const steps = [
    {
      num: '01',
      icon: Search,
      title: 'Browse Properties',
      description: 'Explore our hand-selected online directory of ultra-luxury estates, or describe your vision directly to our smart AI Concierge to receive a personalized portfolio matching your precise parameters.',
    },
    {
      num: '02',
      icon: CalendarDays,
      title: 'Schedule a Viewing',
      description: 'Request a highly private, secure viewing. We organize absolute logistical support—including VIP road transport or private helicopter charters for distant country estates.',
    },
    {
      num: '03',
      icon: Landmark,
      title: 'Secure Financing',
      description: 'Work with our elite in-house asset finance advisors. We help structure transactions via international trusts, coordinate offshore capital compliance, and draft legal purchase contracts.',
    },
    {
      num: '04',
      icon: Key,
      title: 'Move Into Your Dream Home',
      description: 'Receive the keys to your new estate. We facilitate post-acquisition services including structural handover, security setup, smart systems orientation, and premium property management.',
    },
  ];

  return (
    <section className="py-20 bg-white text-[#1a1a1a] px-4 sm:px-6 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-bold text-[#b28e46] uppercase tracking-wider">
            THE JOURNEY
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl text-slate-900 font-bold tracking-tight">
            The Horizon Acquisition Process
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            Our streamlined acquisition journey ensures complete compliance, legal clarity, and a flawless experience from first contact to key handover in Kenya.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((step, index) => {
            const IconComponent = step.icon;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group border border-slate-200 bg-slate-50 p-6 hover:border-slate-300 hover:bg-white transition-all duration-150 flex flex-col justify-between h-[300px] rounded-lg relative shadow-sm"
              >
                {/* Connector Arrow for Desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3.5 translate-y-[-50%] z-20 text-slate-300 group-hover:text-[#1A4B40] transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}

                <div className="space-y-4">
                  {/* Step Header */}
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 flex items-center justify-center rounded-md border border-slate-200 text-[#1A4B40] bg-[#1A4B40]/5 group-hover:bg-[#1A4B40] group-hover:text-white transition-all duration-150">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-sans text-2xl text-slate-300 font-bold tracking-tight leading-none">
                      {step.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-sm font-bold text-slate-900 group-hover:text-[#1A4B40] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="text-[10px] uppercase font-bold text-[#1A4B40]">
                  Horizon Properties
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
