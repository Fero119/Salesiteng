import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/mockData';
import { Check, Sparkles, MessageCircle, HelpCircle } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="py-24 bg-[#fafafa] relative border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title (Screenshot 124054) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Flexible Pricing Options
          </h2>
          <p className="mt-4 text-base text-zinc-600 leading-relaxed text-balance">
            Zero upfront build costs. Just a transparent, predictable monthly subscription to keep your sales machine running 24/7.
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
              <span className="text-emerald-600 font-bold">2 Months Free</span>
              <span>with annual billing</span>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards (Screenshot 124054) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isHighlighted = plan.isPopular;
            const price = currency === 'NGN' ? plan.priceNGN : plan.priceUSD;
            const formattedPrice =
              currency === 'NGN'
                ? `₦${(billingCycle === 'annual' ? price * 10 / 12 : price).toLocaleString()}`
                : `$${billingCycle === 'annual' ? Math.round(price * 10 / 12) : price}`;

            return (
              <div
                key={plan.id}
                className={`rounded-[36px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlighted
                    ? 'bg-[#18181b] text-white card-dark-shadow md:-translate-y-3 z-10'
                    : 'bg-white text-zinc-900 card-elevated-shadow border border-zinc-100 hover:-translate-y-1'
                }`}
              >
                {/* Card header */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className={`text-2xl font-bold tracking-tight ${isHighlighted ? 'text-white' : 'text-zinc-900'}`}>
                      {plan.name}
                    </h3>
                    {isHighlighted && (
                      <span className="text-[10px] uppercase font-bold tracking-wider text-orange-400 bg-orange-950/80 border border-orange-500/40 px-2.5 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <p className={`mt-2 text-xs leading-relaxed ${isHighlighted ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {plan.subtitle}
                  </p>

                  {/* Price display with orange accent on highlighted card (Screenshot 124054) */}
                  <div className="mt-8 pb-6 border-b border-zinc-200/40 dark:border-zinc-800">
                    <div className="flex items-baseline">
                      <span
                        className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
                          isHighlighted ? 'text-orange-500' : 'text-zinc-950'
                        }`}
                      >
                        {formattedPrice}
                      </span>
                      <span className={`text-xs ml-1 font-medium ${isHighlighted ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        /month
                      </span>
                    </div>
                    <span className="text-[11px] text-zinc-400 mt-1 block">
                      ₦0 setup fee · Cancel anytime
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
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm ${
                      isHighlighted
                        ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-950/20'
                        : 'bg-zinc-900 hover:bg-zinc-800 text-white'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise / Custom note */}
        <div className="mt-14 text-center">
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
        </div>

      </div>
    </section>
  );
};
