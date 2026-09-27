import React, { useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { ArrowUpRight, Star } from 'lucide-react';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';
import { motion } from 'motion/react';

interface TestimonialsProps {
  onOpenLeadModal: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenLeadModal }) => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="testimonials" className="py-24 bg-white/60 backdrop-blur-lg relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
              Join Nigerian SMEs <br />
              Selling on WhatsApp
            </h2>
            <p className="mt-4 text-base text-zinc-500 max-w-sm leading-relaxed">
              Real Nigerian business owners who replaced expensive agencies with SalesSite NG's 24/7 WhatsApp sales engine.
            </p>
            <div className="mt-8">
              <LiquidMetalButton
                onClick={onOpenLeadModal}
                width={260}
                label={
                  <>
                    <span>Book My Free Strategy Call</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                  </>
                }
              />
            </div>


          </motion.div>

          {/* Right Column: Staggered Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`bg-white rounded-[32px] p-7 border border-zinc-100/90 card-elevated-shadow relative flex flex-col justify-between hover:shadow-xl transition-all duration-300 ${
                  idx % 2 === 1 ? 'sm:mt-8' : ''
                }`}
              >
                {/* Subtle background quotation watermark motif */}
                <motion.div 
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-6 text-7xl font-serif text-zinc-100/70 select-none pointer-events-none"
                >
                  “
                </motion.div>

                <div className="relative z-10">
                  <p className="text-sm text-zinc-700 leading-relaxed font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-50 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatarUrl}
                      alt={t.author}
                      className="w-10 h-10 rounded-full object-cover border border-zinc-100 shadow-xs"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 leading-snug">
                        {t.author}
                      </h4>
                      <p className="text-[11px] text-zinc-500 leading-tight">
                        {t.role} · {t.company}
                      </p>
                    </div>
                  </div>

                  <motion.span 
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                    className="text-[10px] font-semibold text-orange-700 bg-orange-50 px-2 py-1 rounded-md"
                  >
                    {t.metric}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
