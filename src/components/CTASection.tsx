import React, { useState, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';
import { motion } from 'motion/react';

interface CTASectionProps {
  onOpenStrategyCall: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenStrategyCall }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2500);
  };

  return (
    <section className="pt-20 pb-0 bg-white/60 backdrop-blur-lg relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto pb-16"
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-orange-600 block mb-4">
            Ready to grow?
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-950 leading-[1.1]">
            Start Closing More{' '}
            <br className="hidden sm:block" />
            <motion.span 
              animate={{ filter: ["drop-shadow(0px 0px 4px rgba(249,115,22,0.3))", "drop-shadow(0px 0px 16px rgba(249,115,22,0.8))", "drop-shadow(0px 0px 4px rgba(249,115,22,0.3))"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent inline-block"
            >
              Sales on WhatsApp
            </motion.span>
            <br />
            Today
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center">
            <LiquidMetalButton
              onClick={onOpenStrategyCall}
              width={300}
              label="Book My Free Strategy Call"
            />
            <p className="mt-4 text-xs font-medium text-zinc-500">
              ₦30,000 upfront setup · Cancel anytime
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 max-w-lg w-full bg-white/60 backdrop-blur-md border border-zinc-200/80 rounded-2xl p-5 text-left shadow-sm"
            >
              <h4 className="text-sm font-bold text-zinc-900 flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs">?</span>
                Why the ₦30,000 setup fee?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                We don't just hand you a DIY template. Our team manually builds, designs, and wires your custom store to your WhatsApp line. The ₦30,000 covers the actual human labor to set up your 24/7 sales machine perfectly before your subscription even begins.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Dark Container "Stay Updated with the Newest" */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="bg-[#18181b] rounded-t-[40px] text-white p-8 sm:p-14 lg:p-16 relative"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-md">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Stay Updated <br />
                with the Newest
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Subscribe now to stay informed with SME growth playbooks, conversion templates, and offers delivered directly to your inbox.
              </p>
            </div>

            {/* Newsletter form with Orange Button */}
            <div className="w-full lg:max-w-md">
              {subscribed ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-zinc-900 border border-orange-500/40 text-orange-400 px-6 py-4 rounded-full flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-medium">You're on the list! Welcome aboard.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative w-full">
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-[#27272a] text-white placeholder-zinc-500 text-xs sm:text-sm pl-6 pr-[120px] py-4 rounded-full border border-zinc-700/50 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                  />
                  <div className="absolute right-1.5 top-1.5 bottom-1.5">
                    <button
                      type="submit"
                      className="h-full bg-orange-500 hover:bg-orange-400 text-white text-xs sm:text-sm font-semibold px-6 rounded-full transition-colors cursor-pointer btn-shine flex items-center justify-center"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
