import React, { useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { ArrowUpRight, Star } from 'lucide-react';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';

interface TestimonialsProps {
  onOpenLeadModal: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenLeadModal }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-stagger');
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="reveal reveal-left lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
              Join 240+ SMEs <br />
              Selling on WhatsApp
            </h2>
            <p className="mt-4 text-base text-zinc-500 max-w-sm leading-relaxed">
              Real Nigerian business owners who replaced expensive agencies with SalesSite NG's 24/7 WhatsApp sales engine.
            </p>
            <div className="mt-8">
              <LiquidMetalButton
                onClick={onOpenLeadModal}
                width={200}
                label={
                  <>
                    <span>Get My Free Mockup</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                  </>
                }
              />
            </div>

            {/* SME stats */}
            <div className="mt-12 pt-8 border-t border-zinc-100 flex items-center gap-8">
              <div>
                <p className="text-3xl font-extrabold text-zinc-950">240+</p>
                <p className="text-xs text-zinc-500 mt-0.5">SME Sites Built</p>
              </div>
              <div className="h-8 w-px bg-zinc-200" />
              <div>
                <p className="text-3xl font-extrabold text-orange-600">4.9/5</p>
                <div className="flex items-center gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Staggered Cards */}
          <div className="reveal-stagger lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={t.id}
                className={`bg-white rounded-[32px] p-7 border border-zinc-100/90 card-elevated-shadow relative flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 ${
                  idx % 2 === 1 ? 'sm:mt-8' : ''
                }`}
              >
                {/* Subtle background quotation watermark motif */}
                <div className="absolute top-4 right-6 text-7xl font-serif text-zinc-100/70 select-none pointer-events-none">
                  “
                </div>

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

                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">
                    {t.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
