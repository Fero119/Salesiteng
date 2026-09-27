import React, { useRef } from 'react';
import { PhoneCall, Code2, Rocket, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const colors = {
    blue: {
      dot: 'bg-zinc-500',
      text: 'text-zinc-500',
      bgHover: 'group-hover:bg-zinc-50',
      iconBg: 'bg-zinc-100/50'
    },
    orange: {
      dot: 'bg-orange-500',
      text: 'text-orange-500',
      bgHover: 'group-hover:bg-orange-50',
      iconBg: 'bg-orange-100/50'
    },
    amber: {
      dot: 'bg-amber-500',
      text: 'text-amber-500',
      bgHover: 'group-hover:bg-amber-50',
      iconBg: 'bg-amber-100/50'
    }
  };

  const steps = [
    {
      step: '01',
      title: 'Free Strategy Call',
      description: 'Send us your Instagram page, product photos, or price list on a quick WhatsApp call. We map out exactly what your site will include. No cost, no obligation.',
      icon: PhoneCall,
      highlight: 'Low financial commitment',
      color: 'orange' as const
    },
    {
      step: '02',
      title: 'We Build It, Live in 48 Hours',
      description: 'Once you pay the ₦30,000 setup fee, our Lagos team builds your custom WhatsApp sales site from scratch and delivers it live within 48 hours.',
      icon: Code2,
      highlight: 'Fast delivery',
      color: 'orange' as const
    },
    {
      step: '03',
      title: 'Launch on Flat Subscription',
      description: 'Your site goes live with direct WhatsApp checkout. From there, ₦15,000/month covers hosting, SSL, and updates. Cancel anytime, no lock-in.',
      icon: Rocket,
      highlight: 'No lock-in, cancel anytime',
      color: 'amber' as const
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white/60 backdrop-blur-lg relative border-t border-zinc-100 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 relative z-20"
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
          
          <div className="mt-10 flex justify-center">
            <div className="bg-zinc-900 text-white px-8 py-3 rounded-2xl font-semibold text-sm shadow-lg shadow-zinc-900/30 ring-1 ring-zinc-800 relative z-20">
              SalesSite NG Workflow
            </div>
          </div>
        </motion.div>

        {/* Workflow Container */}
        <div className="relative max-w-6xl mx-auto pt-16 mt-4">
          
          {/* Tree Connectors (Desktop) */}
          <div className="hidden md:block absolute top-[-24px] left-1/2 w-[2px] h-[40px] bg-zinc-200 -translate-x-1/2 z-0" />
          <div className="hidden md:block absolute top-[16px] left-[16.66%] right-[16.66%] h-[2px] bg-zinc-200 z-0" />
          
          {/* Drops to icons */}
          <div className="hidden md:block absolute top-[16px] left-[16.66%] w-[2px] h-[40px] bg-zinc-200 -translate-x-1/2 z-0" />
          <div className="hidden md:block absolute top-[16px] left-1/2 w-[2px] h-[40px] bg-zinc-200 -translate-x-1/2 z-0" />
          <div className="hidden md:block absolute top-[16px] left-[83.33%] w-[2px] h-[40px] bg-zinc-200 -translate-x-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const theme = colors[item.color];

              return (
                <div key={index} className="flex flex-col items-center">
                  
                  {/* Floating Icon Container */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.15 
                    }}
                    className="relative z-10 mb-8"
                  >
                    <motion.div 
                      animate={{ y: [0, -12, 0] }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut", 
                        delay: index * 0.4 
                      }}
                      className="w-20 h-20 rounded-3xl bg-white border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center relative overflow-hidden group"
                    >
                      <div className={`absolute inset-0 ${theme.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <Icon className={`w-8 h-8 ${theme.text} relative z-10 drop-shadow-sm transition-transform duration-500 group-hover:scale-110`} />
                    </motion.div>
                  </motion.div>

                  {/* Info Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + (index * 0.15) }}
                    className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-[0_2px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 w-full relative flex flex-col h-full"
                  >
                    {/* The small colored dot */}
                    <div className={`w-2.5 h-2.5 rounded-full ${theme.dot} mb-5 shadow-sm`} />
                    
                    <h3 className="text-lg font-bold text-zinc-900 tracking-tight leading-snug mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-zinc-600 leading-relaxed mb-8 flex-grow">
                      {item.description}
                    </p>

                    <div className="pt-4 border-t border-zinc-100/80 flex items-center gap-2 font-medium text-[13px] text-zinc-500">
                      <ShieldCheck className={`w-4 h-4 ${theme.text}`} />
                      {item.highlight}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
