/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LeadMachineShowcase } from './components/LeadMachineShowcase';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { StartNowModal } from './components/StartNowModal';
import { StrategyCallModal } from './components/StrategyCallModal';
import { MockupPreviewModal } from './components/MockupPreviewModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<string>('starter');
  const [strategyCallOpen, setStrategyCallOpen] = useState(false);
  const [mockupDemoOpen, setMockupDemoOpen] = useState(false);

  const handleOpenLeadModal = (planId?: string) => {
    if (planId) {
      setSelectedPlanForModal(planId);
    }
    setLeadModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#121212] flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenLeadModal={() => handleOpenLeadModal('starter')}
        onOpenStrategyCall={() => setStrategyCallOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenLeadModal={() => handleOpenLeadModal('starter')}
          onOpenMockupDemo={() => setMockupDemoOpen(true)}
        />

        {/* Transform Leads into Revenue & Unlock the Value */}
        <LeadMachineShowcase
          onOpenLeadModal={() => handleOpenLeadModal('starter')}
        />

        {/* 3-Step Process & Agency vs WaaS comparison */}
        <HowItWorks
          onOpenLeadModal={() => handleOpenLeadModal('starter')}
          onOpenStrategyCall={() => setStrategyCallOpen(true)}
        />

        {/* Testimonials */}
        <Testimonials
          onOpenLeadModal={() => handleOpenLeadModal('starter')}
        />

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
      <Footer />

      {/* Floating WhatsApp Action Pill for Quick Inquiries */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/2348000000000?text=Hello%20SalesSite%20NG!%20I%20am%20interested%20in%20a%20Zero-Upfront%20website%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group"
          aria-label="Chat with SalesSite NG on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-200 rounded-full animate-ping" />
          </div>
          <span className="text-xs font-bold hidden sm:inline-block pr-1">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Lead Capture / Free Mockup Modal */}
      <StartNowModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        defaultPlan={selectedPlanForModal}
      />

      {/* 15-Minute Strategy Call Modal */}
      <StrategyCallModal
        isOpen={strategyCallOpen}
        onClose={() => setStrategyCallOpen(false)}
      />

      {/* Interactive Mobile/Desktop Store Demo Modal */}
      <MockupPreviewModal
        isOpen={mockupDemoOpen}
        onClose={() => setMockupDemoOpen(false)}
        onOpenStartNow={() => handleOpenLeadModal('starter')}
      />
    </div>
  );
}
