import React from 'react';
import { PhoneCall, Code2, Rocket, Check, X, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface HowItWorksProps {
  onOpenLeadModal: () => void;
  onOpenStrategyCall: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenLeadModal, onOpenStrategyCall }) => {
  const steps = [
    {
      step: '01',
      title: 'Free Strategy Call & Mockup',
      subtitle: 'We study your business & build your prototype for ₦0 upfront.',
      description:
        'Share your Instagram page, current product photos, or price list. In 24 hours, our Lagos engineering team crafts a fully custom mobile web mockup wired with WhatsApp 1-tap checkout.',
      icon: PhoneCall,
      highlight: 'Zero financial commitment'
    },
    {
      step: '02',
      title: 'Review on Your Mobile Phone',
      subtitle: 'Test the checkout flow as if you were a paying customer.',
      description:
        'Open the live staging link on your phone. Test the buttons, test placing a mock order, and see how neatly formatted the WhatsApp order arrives. Request any revisions for free.',
      icon: Code2,
      highlight: 'Live interactive staging'
    },
    {
      step: '03',
      title: 'Launch on Flat Subscription',
      subtitle: 'We connect your domain & manage hosting, speed, and updates.',
      description:
        'Once you are 100% satisfied, start your flat ₦15,000/month subscription. We connect your custom .ng or .com domain, handle cloud hosting, maintain SSL security, and update your products anytime.',
      icon: Rocket,
      highlight: 'No lock-in, cancel anytime'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#fafafa] relative border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-orange-600 block mb-2">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            How Website-as-a-Service Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed text-balance">
            Never pay millions upfront for a dead digital brochure. We build, host, and maintain your 24/7 sales machine for a predictable monthly fee.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-[32px] p-8 border border-zinc-100/90 card-elevated-shadow relative flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                      Step {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-zinc-900 text-white flex items-center justify-center">
                      <Icon className="w-5 h-5 text-orange-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-orange-600 mt-1">
                    {item.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                  <span className="flex items-center gap-1.5 font-medium text-zinc-700">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Old Way vs SalesSite NG Comparison Table */}
        <div id="about" className="mt-20 bg-white rounded-[32px] p-8 md:p-12 border border-zinc-100/80 card-elevated-shadow">
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
            <div className="bg-[#fcfcfc] rounded-2xl p-6 border border-red-100/70">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                  <X className="w-4 h-4" />
                </div>
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
            </div>

            {/* SalesSite NG Way */}
            <div className="bg-gradient-to-br from-orange-50/50 via-white to-amber-50/30 rounded-2xl p-6 border border-orange-200/80 shadow-xs relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <h4 className="text-base font-bold text-zinc-950">The SalesSite NG Way (WaaS)</h4>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><strong>₦0 upfront design fee</strong>. We build the full working mockup risk-free.</span>
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
            </div>

          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenStrategyCall}
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-xs hover:shadow-md"
            >
              <span>Schedule Free Strategy Call</span>
              <ArrowRight className="w-4 h-4 text-orange-400" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
