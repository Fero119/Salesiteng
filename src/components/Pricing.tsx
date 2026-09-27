import React, { useState, useEffect, useRef } from 'react';
import { PRICING_PLANS } from '../data/mockData';
import { Check, HelpCircle } from 'lucide-react';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';
import { motion } from 'motion/react';

interface PricingProps {
  onSelectPlan: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="pricing" className="py-24 bg-white/60 backdrop-blur-lg relative border-t border-zinc-100 section-glow-top overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            A Flat Fee for a 24/7 Sales Machine
          </h2>
          <p className="mt-4 text-base text-zinc-600 leading-relaxed text-balance">
            A flat ₦30,000 upfront setup fee. Then a transparent, predictable monthly subscription to keep your sales machine running 24/7.
          </p>

          {/* Currency & Billing Toggles */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* Currency switch */}
            <div className="inline-flex items-center p-1 bg-zinc-200/80 rounded-full text-xs font-semibold">
              <button
                onClick={() => setCurrency('NGN')}
                className={`px-3.5 py-1.5 rounded-full transition-all ${
                  currency === 'NGN'
                    ? 'bg-white text-zinc-900 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                ₦ NGN (Naira)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3.5 py-1.5 rounded-full transition-all ${
                  currency === 'USD'
                    ? 'bg-white text-zinc-900 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                $ USD ($)
              </button>
            </div>

            {/* Annual discount tag */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 bg-white px-3.5 py-1.5 rounded-full border border-zinc-200/80 shadow-xs">
              <span className="text-orange-600 font-bold">2 Months Free</span>
              <span>with annual billing</span>
            </div>
          </div>
        </motion.div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => {
            const isHighlighted = plan.isPopular;
            const price = currency === 'NGN' ? plan.priceNGN : plan.priceUSD;
            const formattedPrice =
              currency === 'NGN'
                ? `₦${(billingCycle === 'annual' ? price * 10 / 12 : price).toLocaleString()}`
                : `$${billingCycle === 'annual' ? Math.round(price * 10 / 12) : price}`;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  bounce: 0.4
                }}
                className={`rounded-[36px] p-8 sm:p-10 flex flex-col justify-between transition-shadow duration-300 relative ${
                  isHighlighted
                    ? 'bg-[#18181b] text-white card-dark-shadow md:-translate-y-3 z-10 ring-2 ring-orange-500/30'
                    : 'bg-white text-zinc-900 card-elevated-shadow border border-zinc-100 hover:shadow-2xl'
                }`}
              >
                {/* Card header */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className={`text-2xl font-bold tracking-tight ${isHighlighted ? 'text-white' : 'text-zinc-900'}`}>
                      {plan.name}
                    </h3>
                    {isHighlighted && (
                      <motion.span 
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="text-[10px] uppercase font-bold tracking-wider text-orange-400 bg-orange-950/80 border border-orange-500/40 px-2.5 py-1 rounded-full"
                      >
                        Most Popular
                      </motion.span>
                    )}
                  </div>

                  <p className={`mt-2 text-xs leading-relaxed ${isHighlighted ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {plan.subtitle}
                  </p>

                  {/* Price display with orange accent on highlighted card */}
                  <div className="mt-8 pb-6 border-b border-zinc-200/40 dark:border-zinc-800">
                    <div className="flex items-baseline">
                      {isHighlighted ? (
                        <motion.span
                          animate={{ filter: ["drop-shadow(0px 0px 4px rgba(249,115,22,0.3))", "drop-shadow(0px 0px 16px rgba(249,115,22,0.8))", "drop-shadow(0px 0px 4px rgba(249,115,22,0.3))"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-orange-500 inline-block"
                        >
                          {formattedPrice}
                        </motion.span>
                      ) : (
                        <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
                          {formattedPrice}
                        </span>
                      )}
                      <span className={`text-xs ml-1 font-medium ${isHighlighted ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        /month
                      </span>
                    </div>
                    <span className="text-[11px] text-zinc-400 mt-1 block">
                      ₦30,000 / $50 setup fee · Cancel anytime
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-8 space-y-3.5">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div
                          className={`w-4 h-4 rounded-full mt-0.5 flex items-center justify-center shrink-0 ${
                            isHighlighted
                              ? 'bg-orange-500/20 text-orange-400'
                              : 'bg-zinc-100 text-zinc-700'
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className={`text-xs leading-normal ${isHighlighted ? 'text-zinc-300' : 'text-zinc-600'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pill Action Button */}
                <div className="mt-10">
                  {!isHighlighted ? (
                    <LiquidMetalButton
                      onClick={() => onSelectPlan(plan.id)}
                      width="100%"
                      className="w-full justify-center"
                      label={plan.ctaText}
                    />
                  ) : (
                    <button
                      onClick={() => onSelectPlan(plan.id)}
                      className="w-full py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm cursor-pointer btn-shine bg-orange-500 hover:bg-orange-400 text-white shadow-orange-950/20"
                    >
                      {plan.ctaText}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Risk Reversal */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-xs sm:text-sm font-medium text-zinc-600 bg-white inline-block px-6 py-3 rounded-full shadow-sm border border-zinc-200/60">
            <span className="text-orange-500 font-bold mr-1">🔒 Guarantee:</span> 
            You only pay the ₦30,000 once you've seen and approved your mockup — not before.
          </p>
        </motion.div>

        {/* Enterprise / Custom note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-xs text-zinc-500 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-zinc-400" />
            <span>Need a custom e-commerce portal with Paystack or multi-warehouse inventory?</span>
            <button
              onClick={() => onSelectPlan('custom')}
              className="text-orange-600 font-semibold hover:underline ml-1"
            >
              Talk to our Lagos engineering team →
            </button>
          </p>
        </motion.div>

      </div>
    </section>
  );
};
