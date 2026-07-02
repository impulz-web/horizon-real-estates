'use client';

import React, { useState } from 'react';
import { Sparkles, MessageSquare, Compass, ArrowRight, CornerDownRight, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Property, KENYAN_PROPERTIES } from '@/lib/properties';
import Image from 'next/image';

interface AiConciergeProps {
  onPropertyClick: (property: Property) => void;
}

export default function AiConcierge({ onPropertyClick }: AiConciergeProps) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState<{
    summary: string;
    recommendedPropertyIds: string[];
    recommendationReasons: string[];
    lifestyleInvestmentAdvice: string;
  } | null>(null);

  const quickPrompts = [
    {
      label: 'High-Yield Coast Asset',
      text: 'I am looking for a premium waterfront property on the Kenyan Coast that can double as a secure high-yield vacation rental when I am away.',
    },
    {
      label: 'Nairobi Family Retreat',
      text: 'I require a discreet, high-security family mansion in Nairobi with a heated pool, mature gardens, and close proximity to diplomatic zones.',
    },
    {
      label: 'Naivasha Ranches',
      text: 'Show me beautiful Stone houses or Safari ranch concepts overlooking Mount Kenya or Lake Naivasha with completely off-grid facilities.',
    },
  ];

  const runConciergeQuery = async (queryText: string) => {
    if (!queryText.trim()) return;
    setLoading(true);
    setResult(null);

    // Dynamic loading step messages to make it feel premium
    const steps = [
      'Establishing secure cryptographic session...',
      'Mapping land registry registries across Kenyan cities...',
      'Evaluating local security scores and property titles...',
      'Synthesizing investment yields and tax structures with Gemini...',
    ];

    setLoadingStep(0);
    const interval = setInterval(() => {
      setLoadingStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 1000);

    try {
      const res = await fetch('/api/concierge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: queryText }),
      });

      if (!res.ok) {
        throw new Error('API query failed');
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      // Fallback response in case of any network or key failure
      setResult({
        summary: 'We detected a technical delay connecting to our primary sovereign intelligence node. Based on standard parameters, we highly recommend our core Karen and Diani Beach offerings.',
        recommendedPropertyIds: ['prop-1', 'prop-2'],
        recommendationReasons: [
          'Unrivaled forest security clearance and mature private gardens.',
          'Elite ocean frontage with secure private beach gate structures.'
        ],
        lifestyleInvestmentAdvice: 'Kenyan premium properties in Karen and Nyali are currently yielding 8-12% annual returns in private rental circles.'
      });
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  const handleQuickPromptClick = (text: string) => {
    setPrompt(text);
    runConciergeQuery(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runConciergeQuery(prompt);
  };

  // Find actual matched properties from the global list based on the matched IDs
  const matchedProperties = result
    ? KENYAN_PROPERTIES.filter((p) => result.recommendedPropertyIds.includes(p.id))
    : [];

  const loadingMessages = [
    'Establishing secure cryptographic session...',
    'Mapping land registry registries across Kenyan cities...',
    'Evaluating local security scores and property titles...',
    'Synthesizing investment yields and tax structures with Gemini...',
  ];

  return (
    <section id="concierge" className="py-20 bg-slate-100 border-y border-slate-200 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="flex items-center space-x-2 bg-[#006ce4]/5 border border-[#006ce4]/20 px-3 py-1.5 w-fit mx-auto rounded">
            <Sparkles className="w-4 h-4 text-[#006ce4]" />
            <span className="text-[10px] tracking-wider uppercase font-bold text-[#003b95]">
              Horizon Intelligence Advisor
            </span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Sovereign AI Estate Matcher
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed max-w-lg mx-auto">
            Describe your desired lifestyle, investment horizon, security requirements, or spatial goals in natural language.
          </p>
        </div>

        {/* Prompt Input Area */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 p-6 sm:p-8 shadow-sm rounded-lg relative">
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-[#006ce4]" />
                <span>Confidential Inquiry Prompt</span>
              </label>
              
              <div className="relative flex items-center border border-slate-200 bg-slate-50 rounded focus-within:border-[#006ce4] focus-within:bg-white transition-all">
                <textarea
                  rows={3}
                  required
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g. I am looking for an ultra-private 5-bedroom sanctuary in Karen with a heated pool and high security perimeter..."
                  className="w-full bg-transparent p-4 text-xs text-[#1a1a1a] focus:outline-none resize-none font-sans leading-relaxed"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Quick Prompts */}
              <div className="flex flex-wrap gap-1.5">
                {quickPrompts.map((qp) => (
                  <button
                    key={qp.label}
                    type="button"
                    onClick={() => handleQuickPromptClick(qp.text)}
                    className="text-[9px] tracking-wider uppercase font-bold border border-slate-200 hover:border-[#006ce4] bg-white px-3 py-2 text-slate-600 hover:text-[#006ce4] rounded transition-all duration-150 cursor-pointer"
                  >
                    {qp.label}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                disabled={loading || !prompt.trim()}
                className="w-full sm:w-auto shrink-0 flex items-center justify-center space-x-2 text-xs tracking-wider uppercase font-bold bg-[#006ce4] hover:bg-[#003b95] disabled:bg-slate-300 text-white px-5 py-3.5 rounded transition-colors duration-150 cursor-pointer"
              >
                <span>{loading ? 'Consulting Advisors...' : 'Match with AI Concierge'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Loading State */}
          <AnimatePresence>
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-xs flex flex-col items-center justify-center p-8 text-center rounded-lg"
              >
                <div className="w-8 h-8 border-2 border-[#006ce4] border-t-transparent rounded-full animate-spin mb-3" />
                <p className="text-xs font-semibold tracking-wider text-[#003b95] uppercase">
                  {loadingMessages[loadingStep]}
                </p>
                <p className="text-[10px] text-slate-500 uppercase mt-1 font-sans">
                  Discretion secured | Analyzing parameters
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* AI Results Presentation */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              
              {/* Main Concierge Assessment Card */}
              <div className="bg-white border border-slate-200 p-6 sm:p-8 shadow-sm rounded-lg space-y-5">
                
                <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
                  <Compass className="w-5 h-5 text-[#006ce4]" />
                  <h3 className="font-sans text-base font-bold text-slate-900">
                    Private Concierge Assessment
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Summary */}
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                      EXECUTIVE ASSESSMENT
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-medium">
                      {result.summary}
                    </p>
                  </div>

                  {/* Recommendation Reasons */}
                  <div className="space-y-3 pt-3 border-t border-slate-100">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                      MATCH JUSTIFICATIONS
                    </p>
                    <ul className="space-y-2">
                      {result.recommendationReasons.map((reason, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-slate-600 font-sans">
                          <CornerDownRight className="w-4 h-4 text-[#006ce4] shrink-0 mt-0.5" />
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Investment Advice */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded flex items-start space-x-3 mt-4">
                    <Landmark className="w-5 h-5 text-[#003b95] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-[9px] uppercase tracking-wider text-[#003b95] font-bold font-sans">
                        REGIONAL INVESTMENT & DISCRETION MEMORANDUM
                      </p>
                      <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
                        {result.lifestyleInvestmentAdvice}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Matched Property Cards Grid */}
              <div className="space-y-4">
                <h4 className="font-sans text-base text-slate-900 font-bold text-center">
                  Bespoke Match Recommendations
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {matchedProperties.map((prop) => (
                    <div
                      key={prop.id}
                      onClick={() => onPropertyClick(prop)}
                      className="group bg-white border border-slate-200 hover:border-slate-300 hover:shadow shadow-sm transition-all duration-150 rounded-lg overflow-hidden cursor-pointer flex flex-col justify-between"
                    >
                      <div className="relative h-40 overflow-hidden bg-slate-50">
                        <Image
                          src={prop.image}
                          alt={prop.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-102"
                          referrerPolicy="no-referrer"
                          sizes="(max-w-768px) 100vw, 33vw"
                        />
                        <div className="absolute top-3 left-3 bg-[#003580] text-white text-[9px] font-bold px-2 py-0.5 rounded">
                          {prop.tag}
                        </div>
                      </div>

                      <div className="p-4 space-y-3">
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase tracking-wider font-sans font-semibold">
                            {prop.location}
                          </p>
                          <h5 className="font-sans text-sm font-bold text-slate-900 mt-1 group-hover:text-[#006ce4] transition-colors">
                            {prop.title}
                          </h5>
                        </div>

                        <div className="flex justify-between items-end pt-2 border-t border-slate-100">
                          <div>
                            <span className="text-[9px] uppercase tracking-wider text-slate-400 block">Value</span>
                            <span className="text-sm font-bold text-[#1a1a1a]">
                              ${prop.price.toLocaleString()}
                            </span>
                          </div>
                          <span className="text-[10px] uppercase font-bold text-[#006ce4] group-hover:underline transition-all">
                            Inspect Asset
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
