'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import WhyChooseUs from '@/components/WhyChooseUs';
import LuxuryLivingShowcase from '@/components/LuxuryLivingShowcase';
import PropertyCategories from '@/components/PropertyCategories';
import CompanyStatistics from '@/components/CompanyStatistics';
import MeetOurAgents from '@/components/MeetOurAgents';
import ClientTestimonials from '@/components/ClientTestimonials';
import BuyingProcess from '@/components/BuyingProcess';
import FaqSection from '@/components/FaqSection';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import AiConcierge from '@/components/AiConcierge';
import PropertyDetailModal from '@/components/PropertyDetailModal';
import { Property } from '@/lib/properties';

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [prefilledAgent, setPrefilledAgent] = useState<string | null>(null);
  const [searchFilters, setSearchFilters] = useState<{
    location: string;
    type: string;
    budget: string;
  } | null>(null);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset navigation to account for sticky navbar height
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScheduleViewingClick = () => {
    setPrefilledAgent(null);
    handleNavigate('contact');
  };

  const handleAgentContactClick = (agentName: string) => {
    setPrefilledAgent(agentName);
    handleNavigate('contact');
  };

  const handleSearchSubmit = (filters: { location: string; type: string; budget: string }) => {
    setSearchFilters(filters);
    handleNavigate('properties');
  };

  const handleBrowseClick = () => {
    setSearchFilters(null);
    handleNavigate('properties');
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navbar
        onScheduleClick={handleScheduleViewingClick}
        onNavigate={handleNavigate}
      />

      {/* Hero Section */}
      <Hero
        onBrowseClick={handleBrowseClick}
        onScheduleClick={handleScheduleViewingClick}
        onSearch={handleSearchSubmit}
      />

      {/* Featured Properties Section */}
      <FeaturedProperties
        onViewDetails={setSelectedProperty}
        searchFilters={searchFilters}
      />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Luxury Living Showcase Section */}
      <LuxuryLivingShowcase />

      {/* Property Categories Section */}
      <PropertyCategories />

      {/* Sovereign AI Concierge Section */}
      <AiConcierge onPropertyClick={setSelectedProperty} />

      {/* Company Statistics Section */}
      <CompanyStatistics />

      {/* Meet Our Advisors Section */}
      <MeetOurAgents onContactClick={handleAgentContactClick} />

      {/* Testimonials Section */}
      <ClientTestimonials />

      {/* Acquisition Process Section */}
      <BuyingProcess />

      {/* Frequently Asked Questions Section */}
      <FaqSection />

      {/* Consultation Contact Section */}
      <ContactCTA prefilledAgent={prefilledAgent} />

      {/* Footer Sitemap & Legal Indexes */}
      <Footer />

      {/* Asset Details Overlay Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </div>
  );
}
