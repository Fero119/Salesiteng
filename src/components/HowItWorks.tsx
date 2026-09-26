import React, { useRef } from 'react';
import { PhoneCall, Code2, Rocket, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      step: '01',
      title: 'Free Strategy Call & Mockup',
      subtitle: 'We study your business & build your prototype for a ₦30,000 upfront fee.',
      description:
        'Share your Instagram page, current product photos, or price list. In 24 hours, our Lagos engineering team crafts a fully custom mobile web mockup wired with WhatsApp 1-tap checkout.',
      icon: PhoneCall,
      highlight: 'Low financial commitment'
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
    <section id="how-it-works" className="py-24 bg-white/60 backdrop-blur-lg relative border-t border-zinc-100 section-glow-top overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-orange-600 block mb-2">
            The Plan
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Simple 3-Step Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed text-balance">
            Never pay millions upfront for a dead digital brochure. We build, host, and maintain your 24/7 sales machine for a predictable monthly fee.
          </p>
        </motion.div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-[32px] p-8 border border-zinc-100/90 card-elevated-shadow relative flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                      Step {item.step}
                    </span>
                    <motion.div 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                      className="w-10 h-10 rounded-2xl bg-zinc-900 text-white flex items-center justify-center shadow-sm"
                    >
                      <Icon className="w-5 h-5 text-orange-400" />
                    </motion.div>
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
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
