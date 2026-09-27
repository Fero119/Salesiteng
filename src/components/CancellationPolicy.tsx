import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import KineticGrid from './ui/kinetic-grid';

export const CancellationPolicy: React.FC = () => {
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
            <h1 className="text-3xl sm:text-5xl font-bold text-zinc-950 mb-8">Refund & Cancellation Policy</h1>
            <div className="prose prose-zinc max-w-none text-zinc-600 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-zinc-900">Last Updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-4">1. 7-Day Refund Guarantee on Setup Fee</h2>
              <p>
                We stand by the quality of our work. If you are not satisfied with the final build of your WhatsApp sales website, you are eligible for a full refund of your ₦30,000 upfront setup fee within seven (7) days of the site going live.
              </p>
              <p>
                To request a refund under this guarantee, simply send a message to our WhatsApp support line stating your dissatisfaction. Upon processing the refund, your website and domain will be immediately taken offline and all related files deleted.
              </p>

              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-4">2. Subscription Cancellation ("Cancel Anytime")</h2>
              <p>
                There are absolutely no lock-in contracts or long-term commitments. You may cancel your ₦15,000/month hosting and maintenance subscription at any time.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>If you cancel, you will not be billed for any future months.</li>
                <li>Your website will remain active until the end of your currently paid billing cycle.</li>
                <li>We do not offer prorated refunds for partial months used.</li>
              </ul>

              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-4">3. Non-Payment and Suspension</h2>
              <p>
                If a monthly subscription payment fails or is not processed by the due date, we offer a 3-day grace period. If payment is not resolved after the grace period, your website will be temporarily suspended and visitors will not be able to access your store.
              </p>
              <p>
                Sites suspended for more than 30 days due to non-payment will be permanently deleted from our servers.
              </p>

              <h2 className="text-xl font-bold text-zinc-900 mt-8 mb-4">4. How to Cancel or Request a Refund</h2>
              <p>
                All cancellation and refund requests should be directed to our official WhatsApp Support channel. Please include your business name and website link in your request so we can process it promptly.
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
