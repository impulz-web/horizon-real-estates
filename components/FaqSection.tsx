'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Can foreign citizens buy luxury property in Kenya?',
      answer: 'Yes, foreign citizens and foreign-owned corporations can buy and own properties in Kenya. However, under the Kenyan Constitution, foreigners can only hold leasehold titles (usually for a term of 99 years, which is fully renewable), whereas Kenyan citizens can hold absolute freehold interest. Our legal advisors manage all required approvals from the Land Ministry.',
    },
    {
      question: 'What is the standard closing timeline for a high-end property purchase?',
      answer: 'A standard real estate transaction in Kenya takes between 60 to 90 days. This period allows for a comprehensive title search, drafting of the Agreement for Sale, payment of the 10% deposit, securing the Land Control Board (LCB) consent, valuation for stamp duty, and the final registration of the transfer of title.',
    },
    {
      question: 'What additional costs are involved in purchasing luxury real estate in Kenya?',
      answer: 'Buyers should budget for the following additional costs: Stamp Duty (4% of valuation for properties in municipalities/cities, and 2% in agricultural/rural areas), legal fees (typically 1% to 2% of the purchase price), registration fees (nominal), and valuation fees. Horizon provides a fully transparent, written breakdown before closing.',
    },
    {
      question: 'What legal documentation is required to complete an estate transaction?',
      answer: 'To initiate an acquisition, the buyer must provide a valid Passport or National ID, a Kenya Revenue Authority (KRA) PIN Certificate, and passport-sized photographs. If purchasing through a corporate structure, we require Certificate of Incorporation, Memorandum of Association, and KRA PIN of the company. KRA PINs can be easily generated for international clients.',
    },
    {
      question: 'Are there specific riparian or beachfront building guidelines on the coast?',
      answer: 'Yes, beachfront properties in Mombasa, Diani, Watamu, and Malindi are subject to strict riparian reserve laws. Under the Physical Planning Act, no permanent structures can be built within 30 to 60 meters from the high-water mark of the ocean. All properties in our coastal collection are pre-verified to be fully compliant with NEMA and riparian regulations.',
    },
    {
      question: 'Can I purchase real estate in Kenya using a trust or offshore entity?',
      answer: 'Absolutely. Many of our high-net-worth clients prefer to hold assets through local trusts, holding companies, or international offshore structures for privacy and tax-optimization purposes. Our in-house corporate registry lawyers specialize in establishing these structures and aligning them with the Lands Registry protocols.',
    },
    {
      question: 'Are properties in Karen or Runda subject to strict residential bylaws?',
      answer: 'Yes, prestigious estates like Karen, Runda, Muthaiga, and Kitisuru fall under local Resident Associations (e.g., Karen Langata District Association). These bodies enforce specific single-dwelling residential zoning, limit maximum building heights (usually 2 stories), specify land sub-division limits (usually a minimum of 0.5 acres), and govern architectural harmony. We pre-vet all design guidelines for developers.',
    },
    {
      question: 'What currencies do you accept for property transactions?',
      answer: 'While the legal currency of record for stamp duty in Kenya is the Kenyan Shilling (KES), we support and frequently process luxury transactions in United States Dollars (USD) and Euros (EUR). We maintain secure, multi-currency escrow accounts with leading commercial banks to facilitate seamless international wire transfers.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 px-4 sm:px-6 border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold text-[#b28e46] uppercase tracking-wider">
            CLEAR ANSWERS
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl text-slate-900 font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            Acquire essential knowledge regarding luxury real estate legalities, investment frameworks, and transaction steps in Kenya.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-lg transition-all duration-150 hover:border-[#1A4B40] shadow-xs overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-sm sm:text-base text-slate-900 font-bold pr-4 hover:text-[#1A4B40] transition-colors">
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center border border-slate-200 rounded text-[#1A4B40] bg-slate-50 group-hover:bg-[#1A4B40]/5">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
