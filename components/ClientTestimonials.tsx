'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function ClientTestimonials() {
  const testimonials = [
    {
      name: 'Dr. Evelyn Kipruto',
      property: 'Purchased Karen Forest Estate',
      image: 'https://picsum.photos/seed/client1/120/120',
      rating: 5,
      review: 'Horizon Properties navigated our legacy estate acquisition with absolute perfection. From facilitating private helicopter viewings of the Karen sanctuary to securing absolute clearance on the land title within record time, their legal team was impeccable. The discretion they maintained is unmatched in East Africa.',
    },
    {
      name: 'Julian Vance-Vermeer',
      property: 'Acquired Diani Cove Beachfront Villa',
      image: 'https://picsum.photos/seed/client2/120/120',
      rating: 5,
      review: 'Securing prime oceanfront real estate on Diani Beach can be complex, but Horizons advisors made it effortless. They provided a detailed structural audit, verified all environmental reserve buffers, and structured the holding via our international trust with complete regulatory compliance. A truly professional experience.',
    },
    {
      name: 'Abdi Guleid',
      property: 'Invested in Westlands Skyline Duplex',
      image: 'https://picsum.photos/seed/client3/120/120',
      rating: 5,
      review: 'The portfolio projections provided by their investment analysts were incredibly accurate. Our Upper Hill commercial holdings and Westlands duplex have exceeded our target yields, delivering solid capital growth and high-end rental income. Horizon is our exclusive real estate partner in Kenya.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold text-[#006ce4] uppercase tracking-wider">
            UNPARALLELED REPUTATION
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl text-slate-900 font-bold tracking-tight">
            Testimonials from Our Patronage
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group bg-white border border-slate-200 p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-150 flex flex-col justify-between relative"
            >
              {/* Quote Icon overlay */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 group-hover:text-blue-50 transition-colors duration-150" />

              <div className="space-y-4">
                {/* Booking.com yellow Stars */}
                <div className="flex space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#febb02] text-[#febb02]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed italic">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Client Info Row */}
              <div className="flex items-center space-x-3 pt-4 mt-6 border-t border-slate-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    sizes="40px"
                  />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-slate-900 leading-none">
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-[#006ce4] font-sans uppercase tracking-wider font-bold mt-1 block">
                    {item.property}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
