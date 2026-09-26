import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';
import { LazySpline } from '@/components/ui/lazy-spline';

interface CTASectionProps {
  onOpenLeadModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenLeadModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-stagger');
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2500);
  };

  return (
    <section className="pt-20 pb-0 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* 3D Spline Background - Lazy Loaded */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none hidden md:block">
        <LazySpline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Callout */}
        <div className="reveal text-center max-w-4xl mx-auto pb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-orange-600 block mb-4">
            Ready to grow?
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-950 leading-[1.1]">
            Start Closing More{' '}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Sales on WhatsApp</span>
            <br />
            Today
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center">
            <LiquidMetalButton
              onClick={onOpenLeadModal}
              width={260}
              label="Get My Free 48-Hour Mockup"
            />
            <p className="mt-4 text-xs font-medium text-zinc-500">
              Zero upfront design fees · No credit card required to start
            </p>
          </div>
        </div>

        {/* Dark Container "Stay Updated with the Newest" (Screenshot 124120) */}
        <div className="bg-[#18181b] rounded-t-[40px] text-white p-8 sm:p-14 lg:p-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
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
                <div className="bg-zinc-900 border border-emerald-500/40 text-emerald-400 px-6 py-4 rounded-full flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-medium">You're on the list! Welcome aboard.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative flex items-center">
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-[#27272a] text-white placeholder-zinc-500 text-xs sm:text-sm px-6 py-4 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 pr-36"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-400 text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer btn-shine flex items-center justify-center"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
