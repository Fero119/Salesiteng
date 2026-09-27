import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import KineticGrid from './ui/kinetic-grid';

export const TermsOfService: React.FC = () => {
  return (
    <KineticGrid globalColor="default">
      <div className="min-h-screen bg-transparent text-[#121212] flex flex-col font-sans selection:bg-orange-500 selection:text-white">
        <Navbar onOpenLeadModal={() => {}} onOpenStrategyCall={() => {}} />
        
        <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-md border border-zinc-100 rounded-3xl p-8 sm:p-12 shadow-xl"
          >
            <h1 className="text-3xl sm:text-5xl font-bold text-zinc-950 mb-8">Terms of Service</h1>
            <div className="prose prose-zinc max-w-none text-zinc-600 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-zinc-900">Last Updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to SalesSite NG ("we", "our", or "us"). By engaging our services to build and host your custom WhatsApp Sales Website, you agree to be bound by these Terms of Service. Please read them carefully.
              </p>

              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-4">2. Service Description</h2>
              <p>
                We provide a fully managed, done-for-you digital service that builds and hosts WhatsApp-integrated sales websites tailored for small and medium businesses in Nigeria. The service is entirely digital; no physical goods or hardware are provided.
              </p>

              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-4">3. Fees and Payment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Setup Fee:</strong> A one-time non-refundable (subject to our 7-day guarantee) setup fee of ₦30,000 is required before the development of your site begins.</li>
                <li><strong>Monthly Subscription:</strong> Upon launch, a flat subscription fee of ₦15,000 per month is required. This covers premium cloud hosting, SSL certificates, ongoing technical maintenance, and minor catalog updates.</li>
                <li><strong>Billing:</strong> Subscription payments are processed monthly via our trusted payment gateway (e.g., Paystack). Failure to pay the subscription fee will result in the temporary suspension of your website until payment is resolved.</li>
              </ul>

              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-4">4. Delivery Timeline</h2>
              <p>
                We aim to deliver your functional WhatsApp sales website within 48 hours of receiving the setup fee and all necessary content (Instagram page, product photos, price lists). Delays in providing required content by the client may extend this timeline.
              </p>

              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-4">5. Client Responsibilities</h2>
              <p>
                You are responsible for ensuring that all products, services, and content displayed on your website comply with Nigerian laws. We are not liable for any disputes, refunds, or fulfillment issues between you and your customers. We strictly provide the digital infrastructure connecting your buyers to your WhatsApp.
              </p>

              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-4">6. Disclaimer of Warranties</h2>
              <p>
                While our websites are optimized for high conversion, we do not guarantee any specific volume of sales, traffic, or revenue. Your business success depends on your product quality, marketing efforts, and customer service.
              </p>

              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-4">7. Termination</h2>
              <p>
                You may cancel your monthly subscription at any time with no lock-in contracts. Upon cancellation, your website will be taken offline at the end of your current billing cycle. We reserve the right to terminate services if a client violates these terms or engages in fraudulent business practices.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-zinc-100 text-center">
              <a href="#" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors">
                ← Back to Home
              </a>
            </div>
          </motion.div>
        </main>
        
        <Footer />
      </div>
    </KineticGrid>
  );
};
