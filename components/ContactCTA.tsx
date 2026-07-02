'use client';

import React, { useState } from 'react';
import { Mail, Phone, Clock, Send, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactCTAProps {
  prefilledAgent?: string | null;
}

export default function ContactCTA({ prefilledAgent }: ContactCTAProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    region: 'Nairobi',
    message: prefilledAgent ? `I would like to request a private consultation with ${prefilledAgent}.` : '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (prefilledAgent) {
      setTimeout(() => {
        setFormData((prev) => ({
          ...prev,
          message: `I would like to request a private consultation with ${prefilledAgent} regarding properties in Kenya.`,
        }));
      }, 0);
    }
  }, [prefilledAgent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate luxury API response
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', region: 'Nairobi', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 px-4 sm:px-6 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Side: Contact copy & specs */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#006ce4] uppercase tracking-wider">
              SECURE REGISTRATION
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl text-slate-900 font-bold tracking-tight">
              Book a Private <br />
              <span className="text-[#006ce4]">Consultation</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            Horizon Properties acts as a fiduciary for elite buyers. Register your interest below 
            to schedule a confidential consultation with one of our principal managing advisors.
          </p>

          <div className="space-y-3 pt-4 border-t border-slate-200">
            <div className="flex items-center space-x-3 text-xs text-slate-700 font-sans font-medium">
              <Phone className="w-4 h-4 text-[#006ce4]" />
              <span>+254 700 000 000 (Nairobi Office)</span>
            </div>
            <div className="flex items-center space-x-3 text-xs text-slate-700 font-sans font-medium">
              <Mail className="w-4 h-4 text-[#006ce4]" />
              <span>concierge@horizonproperties.co.ke</span>
            </div>
            <div className="flex items-center space-x-3 text-xs text-slate-700 font-sans font-medium">
              <Clock className="w-4 h-4 text-[#006ce4]" />
              <span>Mon - Sat: 08:00 - 18:00 (EAT)</span>
            </div>
          </div>

          <div className="bg-[#006ce4]/5 border border-blue-200 p-4 flex items-center space-x-3 rounded-lg">
            <ShieldCheck className="w-5 h-5 text-[#003b95] shrink-0" />
            <span className="text-[10px] text-[#003b95] uppercase tracking-wider font-bold">
              Discretion Guaranteed | GDPR & NDAs Enforced
            </span>
          </div>
        </div>

        {/* Right Side: Interactive Form Card */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-200 p-6 sm:p-8 shadow-sm rounded-lg relative">

            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-[#006ce4] mx-auto bg-[#006ce4]/5 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-sans text-lg font-bold text-slate-900">Confidential Request Received</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-sans leading-relaxed">
                  Thank you for registering. An advisor has been assigned to your profile and will contact you via 
                  secure channel within two business hours to schedule your private viewing or consultation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#006ce4] hover:underline mt-4 cursor-pointer"
                >
                  Submit Another Consultation Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Honorable John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-slate-50 border border-slate-200 rounded p-3 text-xs text-[#1a1a1a] focus:border-[#006ce4] focus:bg-white focus:outline-none transition-all duration-150"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                      Private Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@privateoffice.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-50 border border-slate-200 rounded p-3 text-xs text-[#1a1a1a] focus:border-[#006ce4] focus:bg-white focus:outline-none transition-all duration-150"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                      Secure Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +254 712 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-slate-50 border border-slate-200 rounded p-3 text-xs text-[#1a1a1a] focus:border-[#006ce4] focus:bg-white focus:outline-none transition-all duration-150"
                    />
                  </div>

                  {/* Preferred Region */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                      Region of Interest
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="bg-slate-50 border border-slate-200 rounded p-3 text-xs text-[#1a1a1a] focus:border-[#006ce4] focus:bg-white focus:outline-none transition-all duration-150 cursor-pointer"
                    >
                      <option value="Nairobi">Nairobi (Karen/Runda/Westlands)</option>
                      <option value="Mombasa">Mombasa (Nyali/Shanzu)</option>
                      <option value="Diani">Diani Beach (Oceanfront)</option>
                      <option value="Malindi">Malindi & Watamu Beach</option>
                      <option value="Naivasha">Naivasha (Golf Estates)</option>
                      <option value="Nanyuki">Nanyuki (Safari Luxury)</option>
                    </select>
                  </div>

                </div>

                {/* Message */}
                <div className="flex flex-col space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                    Confidential Requirements Brief
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your ideal location, structural parameters, or investment goals in detail..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-slate-50 border border-slate-200 rounded p-3 text-xs text-[#1a1a1a] focus:border-[#006ce4] focus:bg-white focus:outline-none transition-all duration-150 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center space-x-2 text-xs tracking-wider uppercase font-bold bg-[#006ce4] hover:bg-[#003b95] disabled:bg-slate-300 text-white py-3.5 rounded transition-all duration-150 cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Transmitting Secure Request...' : 'Schedule Confidential Consultation'}</span>
                </button>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
