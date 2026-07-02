'use client';

import React from 'react';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

interface MeetOurAgentsProps {
  onContactClick: (agentName: string) => void;
}

export default function MeetOurAgents({ onContactClick }: MeetOurAgentsProps) {
  const agents = [
    {
      name: 'Althea Kamau',
      position: 'Senior Partner | Nairobi Suburbs',
      experience: '12 Years Experience',
      image: 'https://picsum.photos/seed/executive1/400/500',
      specialty: 'Karen & Kitisuru Estates',
    },
    {
      name: 'David Mwangi',
      position: 'Managing Director | Coastal Acquisitions',
      experience: '15 Years Experience',
      image: 'https://picsum.photos/seed/executive2/400/500',
      specialty: 'Diani Beach & Watamu Waterfronts',
    },
    {
      name: 'Zahra Hassan',
      position: 'Principal Advisory | Rift Valley Portfolio',
      experience: '10 Years Experience',
      image: 'https://picsum.photos/seed/executive3/400/500',
      specialty: 'Naivasha Golf Estates & Ranches',
    },
    {
      name: 'Marcus Sterling',
      position: 'Director | Global Sovereign Funds',
      experience: '14 Years Experience',
      image: 'https://picsum.photos/seed/executive4/400/500',
      specialty: 'Diplomatic Enclaves & Penthouses',
    },
  ];

  return (
    <section id="agents" className="py-20 bg-white border-t border-slate-200 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#b28e46] uppercase tracking-wider">
              The Elite Advisory
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl text-slate-900 font-bold tracking-tight">
              Meet Our Managing Advisors
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-sans mt-3 md:mt-0 leading-relaxed">
            Horizon Properties is represented by seasoned, bilingual capital advisors specializing in private asset transactions and luxury legacy curation in Kenya.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow transition-all duration-150 rounded-lg flex flex-col justify-between overflow-hidden"
            >
              {/* Image Frame */}
              <div className="relative h-64 overflow-hidden bg-slate-50">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  sizes="(max-w-768px) 100vw, 25vw"
                />
                
                {/* Specialty indicator */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 border border-slate-200 backdrop-blur-sm py-1.5 px-2 text-center rounded text-[10px] tracking-wide text-[#1A4B40] uppercase font-bold shadow-sm">
                  {agent.specialty}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-5 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="font-sans text-base text-slate-900 font-bold group-hover:text-[#1A4B40] transition-colors">
                    {agent.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                    {agent.position}
                  </p>
                  <p className="text-xs font-bold text-[#107255]">
                    {agent.experience}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onContactClick(agent.name)}
                    className="w-full flex items-center justify-center space-x-2 text-xs font-bold bg-white border border-[#1A4B40] hover:bg-[#1A4B40] hover:text-white text-[#1A4B40] py-2.5 rounded transition-colors duration-150 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Request Consultation</span>
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
