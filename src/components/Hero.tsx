import React, { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';
import { ChevronRight, TrendingUp, Sparkles, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

interface HeroProps {
  onOpenLeadModal: () => void;
  onOpenMockupDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLeadModal, onOpenMockupDemo }) => {
  const [activeMetricTab, setActiveMetricTab] = useState<number>(0);
  const [conversionMultiplier, setConversionMultiplier] = useState<number>(1);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const reveals = heroRef.current?.querySelectorAll('.reveal, .reveal-stagger');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#fafafa] via-white to-[#fafafa]" ref={heroRef}>
      
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0 opacity-60 mix-blend-multiply pointer-events-none overflow-hidden hidden md:block">
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </div>

      {/* Multi-layer ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-orange-100/30 via-amber-50/20 to-transparent blur-3xl pointer-events-none rounded-full z-0" />
      <div className="absolute top-20 left-1/4 w-[400px] h-[300px] bg-gradient-to-tr from-orange-200/15 to-transparent blur-3xl pointer-events-none rounded-full z-0" />
      <div className="absolute top-20 right-1/4 w-[350px] h-[250px] bg-gradient-to-tl from-amber-100/20 to-transparent blur-3xl pointer-events-none rounded-full z-0" />
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Floating Badge & Avatar */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="reveal inline-flex items-center gap-2 p-1 pl-1.5 pr-3.5 rounded-full bg-white/90 border border-zinc-200/80 shadow-sm mb-7 hover:shadow-md hover:border-orange-200 transition-all duration-300 cursor-default">
            <div className="relative w-8 h-8 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 via-rose-400 to-orange-400">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                alt="Nigerian SME Founder"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-800">
              <span className="text-zinc-500 font-normal">Trusted by 240+ Nigerian SMEs</span>
              <span className="text-zinc-300">·</span>
              <span className="text-orange-600 font-medium flex items-center gap-0.5">
                Zero Upfront Cost <Sparkles className="w-3 h-3 inline" />
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="reveal text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-950 max-w-4xl mx-auto leading-[1.07] text-balance" style={{transitionDelay: '80ms'}}>
            Turn Your Business Into a{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">24/7 WhatsApp</span>
            </span>
            {' '}Lead Machine
          </h1>

          {/* Subtitle */}
          <p className="reveal mt-6 text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed text-balance" style={{transitionDelay: '160ms'}}>
            We build high-converting sales sites that route paying customers directly to your phone.
            Zero upfront design fees — just a flat{' '}
            <span className="text-zinc-900 font-semibold bg-orange-50 px-1.5 py-0.5 rounded-md border border-orange-200/60">₦15,000/mo</span>
            {' '}subscription. Cancel anytime.
          </p>

          {/* CTAs */}
          <div className="reveal mt-9 flex flex-col sm:flex-row items-center justify-center gap-3" style={{transitionDelay: '240ms'}}>
            <LiquidMetalButton
              label="Get My Free Mockup"
              onClick={() => onOpenLeadModal()}
              width={200}
            />
            <button
              onClick={onOpenMockupDemo}
              className="h-[46px] px-6 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-orange-200 text-zinc-800 text-sm font-medium transition-all duration-200 flex items-center gap-2 shadow-xs hover:shadow-md cursor-pointer"
            >
              <span>View Live SME Demo</span>
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </button>
          </div>

          {/* Micro trust indicators */}
          <div className="reveal mt-7 flex flex-wrap items-center justify-center gap-5 text-xs text-zinc-500" style={{transitionDelay: '320ms'}}>
            {[
              { icon: Zap, text: '48-Hour Live Delivery', color: 'text-orange-500' },
              { icon: CheckCircle2, text: '1-Tap WhatsApp Checkout', color: 'text-emerald-600' },
              { icon: ShieldCheck, text: 'Free .ng Domain & Hosting', color: 'text-emerald-600' },
            ].map(({ icon: Icon, text, color }) => (
              <span key={text} className="flex items-center gap-1.5 bg-white/80 border border-zinc-100 px-3 py-1.5 rounded-full shadow-xs">
                <Icon className={`w-3.5 h-3.5 ${color}`} /> {text}
              </span>
            ))}
          </div>
        </div>

        {/* Floating Analytics & Interactive Metric Cards Gallery (Screenshots 123913, 123924, 123954, 124003) */}
        <div className="mt-14 sm:mt-20 relative">
          {/* Subtle floating badge chips around the cards (Screenshots 123954, 124003) */}
          <div className="hidden lg:block absolute -top-8 left-12 z-20 animate-float-slow">
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-zinc-100 shadow-lg text-xs font-medium text-zinc-800">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Game-Changing Platform!</span>
              <span className="text-zinc-400">·</span>
              <span className="text-orange-600 font-semibold">₦2.4M Sales</span>
            </div>
          </div>

          <div className="hidden lg:block absolute -top-6 right-16 z-20 animate-float-reverse">
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-zinc-100 shadow-lg text-xs font-medium text-zinc-800">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Lagos</span>
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Abuja</span>
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span>Port Harcourt</span>
            </div>
          </div>

          {/* Cards Container with smooth overflow & perspective */}
          <div className="w-full overflow-x-auto no-scrollbar pb-6 pt-2">
            <div className="min-w-[1020px] flex items-center justify-center gap-5 px-4">
              
              {/* Card 1: Conversion Rate with 4 Yellow Bars (Screenshot 123913) */}
              <div
                onClick={() => setConversionMultiplier(prev => prev === 1 ? 1.25 : 1)}
                className="w-[185px] bg-white rounded-3xl p-5 border border-zinc-100/80 card-elevated-shadow transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-zinc-900 leading-tight">
                    Conversion<br />Rate
                  </span>
                  <div className="w-6 h-6 rounded-full bg-zinc-100 group-hover:bg-zinc-200 flex items-center justify-center transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
                  </div>
                </div>

                <div className="relative h-28 flex items-end justify-between gap-1.5 pt-4">
                  {/* Subtle dotted baseline */}
                  <div className="absolute top-1/2 left-0 right-0 border-b border-dashed border-zinc-200" />

                  {/* Bar 1 */}
                  <div className="flex-1 flex flex-col items-center gap-1.5 z-10">
                    <div
                      style={{ height: `${Math.min(90, 61 * conversionMultiplier)}%` }}
                      className="w-full bg-amber-200/90 rounded-md transition-all duration-500 flex items-center justify-center"
                    >
                      <span className="text-[10px] font-bold text-amber-900">61%</span>
                    </div>
                  </div>

                  {/* Bar 2 */}
                  <div className="flex-1 flex flex-col items-center gap-1.5 z-10">
                    <div
                      style={{ height: `${Math.min(96, 73 * conversionMultiplier)}%` }}
                      className="w-full bg-amber-300 rounded-md transition-all duration-500 flex items-center justify-center shadow-xs"
                    >
                      <span className="text-[10px] font-bold text-amber-950">73%</span>
                    </div>
                  </div>

                  {/* Bar 3 */}
                  <div className="flex-1 flex flex-col items-center gap-1.5 z-10">
                    <div
                      style={{ height: `${Math.min(70, 32 * conversionMultiplier)}%` }}
                      className="w-full bg-amber-200/80 rounded-md transition-all duration-500 flex items-center justify-center"
                    >
                      <span className="text-[10px] font-bold text-amber-900">32%</span>
                    </div>
                  </div>

                  {/* Bar 4 */}
                  <div className="flex-1 flex flex-col items-center gap-1.5 z-10">
                    <div
                      style={{ height: `${Math.min(88, 62 * conversionMultiplier)}%` }}
                      className="w-full bg-amber-300 rounded-md transition-all duration-500 flex items-center justify-center shadow-xs"
                    >
                      <span className="text-[10px] font-bold text-amber-950">62%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Pie Chart Card (Screenshot 123913) */}
              <div
                onClick={() => setActiveMetricTab(prev => (prev + 1) % 3)}
                className="w-[170px] bg-white rounded-3xl p-5 border border-zinc-100/80 card-elevated-shadow transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-sm bg-blue-400" />
                  <span className="text-xs font-medium text-zinc-500">65% Inbound</span>
                </div>
                
                {/* SVG Donut / Pie */}
                <div className="relative flex items-center justify-center py-2">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-zinc-100"
                      strokeWidth="6"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-blue-400"
                      strokeDasharray="65, 100"
                      strokeWidth="6"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-xs font-bold text-zinc-800">P1</span>
                    <span className="text-[9px] text-zinc-400">Target</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Processed Leads with Orange Circular Ring (Screenshot 123913 / 123924) */}
              <div className="w-[190px] bg-white rounded-3xl p-5 border border-zinc-100/80 card-elevated-shadow transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none">
                <span className="text-xs font-semibold text-zinc-900 block mb-3">
                  Processed<br />Leads
                </span>
                
                <div className="relative flex items-center justify-center py-1">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke="#f3f4f6"
                      strokeWidth="3.5"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="3.5"
                      strokeDasharray="88"
                      strokeDashoffset="38"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-zinc-900 flex items-center">
                      <span className="text-orange-500 mr-0.5">↑</span> 52%
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 4: Sales Cycle Length with Avatar (Screenshot 123913 / 123924) */}
              <div className="w-[210px] bg-white rounded-3xl p-5 border border-zinc-100/80 card-elevated-shadow transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none">
                <span className="text-xs font-semibold text-zinc-900 block mb-3">
                  Sales Cycle<br />Length
                </span>

                <div className="flex items-center gap-2.5 mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80"
                    alt="Daniel R."
                    className="w-7 h-7 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="overflow-hidden">
                    <p className="text-xs font-semibold text-zinc-900 truncate">Daniel R.</p>
                    <p className="text-[10px] text-zinc-400 truncate">daniel@sixtech.ng</p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-zinc-500">Contract:</span>
                    <span className="font-semibold text-zinc-800">₦450,000</span>
                  </div>
                  {/* Green Progress Bar */}
                  <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[82%]" />
                  </div>
                </div>
              </div>

              {/* Card 5: Profitability Index (Screenshot 123913 / 123924) */}
              <div className="w-[195px] bg-white rounded-3xl p-5 border border-zinc-100/80 card-elevated-shadow transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none">
                <span className="text-[11px] font-medium text-zinc-500 block">
                  You gained
                </span>
                <p className="text-xl font-bold tracking-tight text-zinc-950 mt-1">
                  ₦452,000
                </p>
                <span className="text-[11px] text-zinc-400 block mt-2">
                  Profitability Index
                </span>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                  <TrendingUp className="w-3 h-3" />
                  <span>+18.4% this month</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
