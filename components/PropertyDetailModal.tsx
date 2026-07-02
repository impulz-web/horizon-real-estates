'use client';

import React, { useState } from 'react';
import { X, Calendar, MapPin, Maximize2, Bath, Shield, CheckCircle } from 'lucide-react';
import { Property } from '@/lib/properties';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyDetailModal({ property, onClose }: PropertyDetailModalProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  if (!property) return null;

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setDate('');
    }, 1000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative bg-white border border-slate-200 w-full max-w-4xl shadow-xl rounded-lg overflow-hidden z-10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[85vh] overflow-y-auto"
        >
          {/* Top-Right Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 text-slate-700 hover:text-[#1A4B40] border border-slate-200 flex items-center justify-center transition-colors focus:outline-none cursor-pointer shadow-sm"
            aria-label="Close Modal"
          >
            <X className="w-4.5 h-4.5" />
          </button>

          {/* Left Column: Visuals & Specifications (Span 7) */}
          <div className="md:col-span-7 p-6 md:p-8 space-y-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              {/* Image Banner */}
              <div className="relative h-64 w-full bg-slate-100 border border-slate-200 rounded-lg overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  sizes="(max-w-1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 text-[#1A4B40] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 border border-slate-200 rounded shadow-sm">
                  {property.tag}
                </div>
              </div>

              {/* Title & Location */}
              <div className="space-y-1">
                <div className="flex items-center space-x-1 text-xs text-[#1A4B40] uppercase tracking-wider font-bold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{property.location}</span>
                </div>
                <h3 className="font-sans text-xl sm:text-2xl text-slate-900 font-bold tracking-tight">
                  {property.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Core Specs Grid */}
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-xs text-slate-700 font-sans font-semibold">
                <div className="flex items-center space-x-1.5 justify-center">
                  <Bed3 className="w-4 h-4 text-[#b28e46]" />
                  <span>{property.bedrooms > 0 ? `${property.bedrooms} Beds` : 'N/A'}</span>
                </div>
                <div className="w-[1px] h-4 bg-slate-200 self-center justify-self-center" />
                <div className="flex items-center space-x-1.5 justify-center">
                  <Bath className="w-4 h-4 text-[#b28e46]" />
                  <span>{property.bathrooms} Baths</span>
                </div>
                <div className="w-[1px] h-4 bg-slate-200 self-center justify-self-center" />
                <div className="flex items-center space-x-1.5 justify-center">
                  <Maximize2 className="w-4 h-4 text-[#b28e46]" />
                  <span>{property.area}</span>
                </div>
              </div>

              {/* Price Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Asset Valuation</span>
                  <p className="text-xl font-bold text-slate-900 mt-0.5">
                    ${property.price.toLocaleString()}
                  </p>
                </div>
                <div className="sm:text-right mt-2 sm:mt-0 border-t sm:border-t-0 sm:border-l border-slate-200 pt-2 sm:pt-0 sm:pl-4">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Local Currency Equivalent</span>
                  <p className="text-sm font-sans text-[#107255] font-bold mt-0.5">
                    {property.priceKsh}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Private Viewing Inquiry Form (Span 5) */}
          <div className="md:col-span-5 bg-slate-50 border-t md:border-t-0 md:border-l border-slate-200 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
            
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#b28e46] font-bold">Confidential Registry</span>
                <h4 className="font-sans text-base text-slate-900 font-bold">
                  Request Private Viewing
                </h4>
              </div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4 py-8 text-center"
                >
                  <div className="w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center text-[#1A4B40] mx-auto shadow-sm">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <h5 className="font-sans text-sm font-bold text-slate-900">Inquiry Dispatched</h5>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    Your request has been securely registered. A managing advisor will contact you within two business hours to finalize viewing logistics.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-[#1A4B40] hover:underline"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleInquiry} className="space-y-3">
                  {/* Name */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white border border-slate-200 rounded p-2.5 text-xs text-[#1a1a1a] focus:border-[#1A4B40] focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                      Private Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white border border-slate-200 rounded p-2.5 text-xs text-[#1a1a1a] focus:border-[#1A4B40] focus:outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                      Secure Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Secure Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-white border border-slate-200 rounded p-2.5 text-xs text-[#1a1a1a] focus:border-[#1A4B40] focus:outline-none"
                    />
                  </div>

                  {/* Preferred Viewing Date */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="bg-white border border-slate-200 rounded p-2.5 text-xs text-[#1a1a1a] focus:border-[#1A4B40] focus:outline-none cursor-pointer"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center space-x-2 text-xs font-bold bg-[#1A4B40] hover:bg-[#0B2521] text-white py-3 rounded transition-colors duration-150 cursor-pointer shadow-xs"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{loading ? 'Registering...' : 'Request Private Viewing'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Footer Trust Shield */}
            <div className="pt-4 border-t border-slate-200 mt-6 flex items-center space-x-2 text-[10px] text-slate-500 font-sans uppercase font-bold tracking-wider">
              <Shield className="w-4 h-4 text-[#b28e46] shrink-0" />
              <span>Confidentiality Guaranteed</span>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
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
