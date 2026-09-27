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

          <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-4 lg:gap-12 mt-12">
            
            {/* The Old Way */}
            <motion.div 
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: -2 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="flex-1 bg-white/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 border-2 border-red-100 shadow-sm relative z-0 origin-bottom-right"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shadow-inner">
                  <X className="w-5 h-5 stroke-[3]" />
                </div>
                <h4 className="text-lg font-bold text-zinc-900 line-through decoration-red-200 decoration-2">The Traditional Agency</h4>
              </div>

              <ul className="space-y-5 text-sm text-zinc-500">
                {[
                  "₦300,000+ upfront fee with zero guarantees.",
                  "Takes 6 to 12 weeks of delayed deadlines.",
                  "No WhatsApp integration — 80% cart abandonment.",
                  "Designer disappears after launch."
                ].map((text, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-red-400 font-bold mt-0.5">✕</span>
                    <span className="leading-relaxed">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* VS Badge */}
            <motion.div 
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring", bounce: 0.6 }}
              className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-zinc-950 text-white rounded-full items-center justify-center font-black text-xl italic z-20 shadow-[0_0_30px_rgba(249,115,22,0.4)] border-4 border-white"
            >
              VS
            </motion.div>

            {/* SalesSite NG Way */}
            <motion.div 
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 2 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
              className="flex-1 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-6 md:p-8 border border-zinc-800 shadow-2xl relative z-10 origin-bottom-left"
            >
              {/* Glow behind the card */}
              <div className="absolute inset-0 bg-orange-500/10 blur-2xl rounded-3xl -z-10" />

              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.6)]"
                >
                  <Check className="w-5 h-5 stroke-[3]" />
                </motion.div>
                <h4 className="text-xl font-bold text-white">The SalesSite NG Way</h4>
              </div>

              <ul className="space-y-5 text-sm text-zinc-300">
                {[
                  "₦30,000 upfront setup fee. Full refund within 7 days if unhappy.",
                  "Live in 48 hours. Ready for orders immediately.",
                  "Direct 1-Tap WhatsApp Checkout tailored for Nigeria.",
                  "₦15,000/mo includes hosting, SSL, and updates."
                ].map((text, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <motion.span 
                      animate={{ filter: ["drop-shadow(0px 0px 2px rgba(249,115,22,0.4))", "drop-shadow(0px 0px 6px rgba(249,115,22,0.8))", "drop-shadow(0px 0px 2px rgba(249,115,22,0.4))"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                      className="text-orange-400 font-bold mt-0.5 inline-block"
                    >
                      ✓
                    </motion.span>
                    <span className="leading-relaxed"><strong className="text-white font-semibold">{text.split('.')[0]}.</strong>{text.substring(text.indexOf('.'))}</span>
                  </motion.li>
                ))}
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
                  <span>Start on WhatsApp</span>
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
