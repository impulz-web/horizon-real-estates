'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

export default function CompanyStatistics() {
  const stats = [
    { target: 1500, suffix: '+', label: 'Properties Sold', description: 'Elite residential and commercial transactions.' },
    { target: 500, suffix: '+', label: 'Happy Clients', description: 'Global diplomats, family offices, and investors.' },
    { target: 15, suffix: ' Years', label: 'Experience', description: 'Pioneering luxury real estate in East Africa.' },
    { target: 98, suffix: '%', label: 'Satisfaction', description: 'Absolute discretion and unmatched client fidelity.' },
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-200 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  stat: { target: number; suffix: string; label: string; description: string };
  index: number;
}

function StatCard({ stat, index }: StatCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.target;
    if (start === end) return;

    // Fast counters for large numbers, slower for small ones
    const duration = 1.5; // seconds
    const stepTime = Math.max(Math.floor((duration * 1000) / end), 10);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, stat.target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="p-6 border-l border-slate-200 hover:border-[#1A4B40] transition-colors duration-150 space-y-2"
    >
      <div className="font-sans text-3xl sm:text-4xl font-bold text-[#b28e46] flex items-baseline leading-none">
        <span>{count.toLocaleString()}</span>
        <span className="text-xl ml-0.5">{stat.suffix}</span>
      </div>
      <div className="space-y-0.5">
        <h3 className="text-xs font-bold text-slate-900 uppercase">
          {stat.label}
        </h3>
        <p className="text-xs text-slate-500 font-sans leading-relaxed">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
}
