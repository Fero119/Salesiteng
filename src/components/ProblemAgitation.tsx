import React, { useRef } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';
import { motion } from 'motion/react';

interface ProblemAgitationProps {
  onOpenStrategyCall: () => void;
}

export const ProblemAgitation: React.FC<ProblemAgitationProps> = ({ onOpenStrategyCall }) => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="problem" className="py-20 bg-white/60 backdrop-blur-lg relative border-t border-zinc-100 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Old Way vs SalesSite NG Comparison Table */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[32px] p-8 md:p-12 border border-zinc-100/80 card-elevated-shadow"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">The Problem & Solution</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 mt-1">
              Traditional Web Dev vs. SalesSite NG
            </h3>
            <p className="text-sm text-zinc-500 mt-2">
              Why traditional agencies don't make sense for Nigerian retailers, salons, and restaurants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* The Old Way */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#fcfcfc] rounded-2xl p-6 border border-red-100/70"
            >
              <div className="flex items-center gap-2 mb-4">
                <motion.div 
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </motion.div>
                <h4 className="text-base font-bold text-zinc-900">The Traditional Agency Way</h4>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span><strong>₦300,000 to ₦800,000 upfront fee</strong> before you even see a single mockup.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span><strong>Takes 6 to 12 weeks</strong> of back-and-forth emails and delayed deadlines.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span><strong>No WhatsApp integration</strong> — complex bloated checkout carts with 80% abandonment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span><strong>Designer disappears after launch</strong> — you are stuck paying extra for hosting, SSL renewals, and bug fixes.</span>
                </li>
              </ul>
            </motion.div>

            {/* SalesSite NG Way */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-orange-50/50 via-white to-amber-50/30 rounded-2xl p-6 border border-orange-200/80 shadow-xs relative"
            >
              <div className="flex items-center gap-2 mb-4">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm"
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                </motion.div>
                <h4 className="text-base font-bold text-zinc-955">The SalesSite NG Way (WaaS)</h4>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><strong>₦30,000 upfront design fee</strong>. We build the full working mockup and get you live.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><strong>Live in 48 hours</strong>. Ready to take customer orders on WhatsApp immediately.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><strong>Direct 1-Tap WhatsApp Checkout</strong> tailored for Nigerian shoppers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><strong>Predictable ₦15,000/mo</strong> subscription includes domain, ultra-fast hosting, SSL, and monthly product updates.</span>
                </li>
              </ul>
            </motion.div>

          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <LiquidMetalButton
              onClick={onOpenStrategyCall}
              width={240}
              label={
                <>
                  <span>Book My Free Strategy Call</span>
                  <ArrowRight className="w-4 h-4 text-orange-400" />
                </>
              }
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
