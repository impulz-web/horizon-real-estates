'use client';

import React from 'react';
import { ShieldCheck, BadgeCheck, Compass, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: ShieldCheck,
      title: 'Trusted Advisors',
      description: 'Our licensed, bilingual advisors maintain the highest standards of legal compliance and professional discretion, offering seamless representation in Kenya’s premier high-end markets.',
    },
    {
      icon: BadgeCheck,
      title: '100% Verified Listings',
      description: 'Every property in our collection undergoes comprehensive title verification, structural audit, and rigorous compliance checks prior to public onboarding.',
    },
    {
      icon: Compass,
      title: 'Personalized Service',
      description: 'We curate custom property matching profiles, coordinate highly private air/road travel to viewings, and provide dedicated, comprehensive advisory services.',
    },
    {
      icon: TrendingUp,
      title: 'Investment Guidance',
      description: 'Our in-house finance team delivers detailed asset yield projections, high-net-worth tax guidance, and corporate real estate holding structuring in Kenya.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold text-[#006ce4] uppercase tracking-wider">
            Uncompromising Professionalism
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl text-slate-900 font-bold tracking-tight">
            Why Choose Horizon Properties
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            We transcend standard real estate brokerages to provide a complete wealth-preservation, 
            lifestyle-curation, and structural-advisory framework in Kenya.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const IconComponent = card.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-150 rounded-lg relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#006ce4]/5 border border-slate-200 text-[#003b95] transition-colors duration-150">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-sm font-bold text-slate-900 group-hover:text-[#006ce4] transition-colors duration-150">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
