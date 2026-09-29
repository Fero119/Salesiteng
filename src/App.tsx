/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { MockupPreviewModal } from './components/MockupPreviewModal';
import { MessageCircle } from 'lucide-react';
import KineticGrid from './components/ui/kinetic-grid';
import { TermsOfService } from './components/TermsOfService';
import { CancellationPolicy } from './components/CancellationPolicy';

export default function App() {
  const [mockupDemoOpen, setMockupDemoOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  
  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const WHATSAPP_URL = "https://wa.me/2348121805800?text=" + encodeURIComponent("Hi SalesSite NG! 👋 I am interested in your services. What do I do next?");

  const handleOpenLeadModal = (planId?: string) => {
    window.open(WHATSAPP_URL, "_blank");
  };

  const handleOpenStrategyCall = () => {
    window.open("https://calendly.com/feranmiakingbola24/30min", "_blank");
  };

  if (currentHash === '#terms') {
    return <TermsOfService />;
  }
  
  if (currentHash === '#cancellation') {
    return <CancellationPolicy />;
  }

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
          onOpenStrategyCall={() => handleOpenStrategyCall()}
          onOpenMockupDemo={() => setMockupDemoOpen(true)}
        />

        {/* The Problem / Villain */}
        <ProblemAgitation 
          onOpenStrategyCall={() => handleOpenLeadModal('starter')}
        />

        {/* The Guide's Value & Benefits */}
        <LeadMachineShowcase
          onOpenLeadModal={() => handleOpenLeadModal('starter')}
        />

        {/* The Guide's Authority */}
        <Testimonials
          onOpenStrategyCall={() => handleOpenStrategyCall()}
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
          onOpenStrategyCall={() => handleOpenStrategyCall()}
        />
      </main>

      {/* Footer */}
      <Footer onOpenLeadModal={() => handleOpenLeadModal('starter')} />

      {/* Floating WhatsApp Action Pill for Quick Inquiries */}
      <FloatingWhatsApp />



      {/* Interactive Mobile/Desktop Store Demo Modal */}
      <MockupPreviewModal
        isOpen={mockupDemoOpen}
        onClose={() => setMockupDemoOpen(false)}
        onOpenStrategyCall={() => handleOpenStrategyCall()}
      />
      </div>
    </KineticGrid>
  );
}
