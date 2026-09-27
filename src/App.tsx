/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LeadMachineShowcase } from './components/LeadMachineShowcase';
import { ProblemAgitation } from './components/ProblemAgitation';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

import { MockupPreviewModal } from './components/MockupPreviewModal';
import { MessageCircle } from 'lucide-react';
import KineticGrid from './components/ui/kinetic-grid';

export default function App() {
  const [mockupDemoOpen, setMockupDemoOpen] = useState(false);
  const WHATSAPP_URL = "https://wa.me/2348121805800?text=" + encodeURIComponent("Hi SalesSite NG! 👋 I am interested in your services. What do I do next?");

  const handleOpenLeadModal = (planId?: string) => {
    window.open(WHATSAPP_URL, "_blank");
  };

  const handleOpenStrategyCall = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <KineticGrid globalColor="default">
      <div className="min-h-screen bg-transparent text-[#121212] flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenLeadModal={() => handleOpenLeadModal('starter')}
        onOpenStrategyCall={() => handleOpenStrategyCall()}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenLeadModal={() => handleOpenLeadModal('starter')}
          onOpenMockupDemo={() => setMockupDemoOpen(true)}
        />

        {/* The Problem / Villain */}
        <ProblemAgitation 
          onOpenStrategyCall={() => handleOpenStrategyCall()}
        />

        {/* The Guide's Value & Benefits */}
        <LeadMachineShowcase
          onOpenLeadModal={() => handleOpenLeadModal('starter')}
        />

        {/* The Guide's Authority */}
        <Testimonials
          onOpenLeadModal={() => handleOpenLeadModal('starter')}
        />

        {/* The Plan */}
        <HowItWorks />

        {/* Pricing Options */}
        <Pricing
          onSelectPlan={(planId) => handleOpenLeadModal(planId)}
        />

        {/* FAQ Section */}
        <FAQ />

        {/* Transform Your Approach CTA & Newsletter */}
        <CTASection
          onOpenLeadModal={() => handleOpenLeadModal('starter')}
        />
      </main>

      {/* Footer */}
      <Footer onOpenLeadModal={() => handleOpenLeadModal('starter')} />

      {/* Floating WhatsApp Action Pill for Quick Inquiries */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/2348121805800?text=Hi%20SalesSite%20NG!%20%F0%9F%91%8B%20I%20am%20interested%20in%20your%20services.%20What%20do%20I%20do%20next%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group"
          aria-label="Chat with SalesSite NG on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-orange-400 rounded-full animate-ping" />
          </div>
          <span className="text-xs font-bold hidden sm:inline-block pr-1">
            Chat on WhatsApp
          </span>
        </a>
      </div>



      {/* Interactive Mobile/Desktop Store Demo Modal */}
      <MockupPreviewModal
        isOpen={mockupDemoOpen}
        onClose={() => setMockupDemoOpen(false)}
        onOpenStartNow={() => handleOpenLeadModal('starter')}
      />
      </div>
    </KineticGrid>
  );
}
