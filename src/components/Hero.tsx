import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';
import { ChevronRight, Star, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenLeadModal: () => void;
  onOpenMockupDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLeadModal, onOpenMockupDemo }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return (
    <section ref={containerRef} id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-50/60 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              ₦30,000 Upfront Setup
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-950 leading-[1.1] mb-6 text-balance"
            >
              Start growing your <span className="text-emerald-600">business</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-zinc-600 max-w-xl font-normal leading-relaxed text-balance mb-8"
            >
              Salesite generates qualified B2B leads on autopilot. We handle the heavy lifting while you close the deals. 
              Get started for <span className="font-semibold text-zinc-900">₦30,000 upfront</span>, then a flat ₦15,000/mo.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <LiquidMetalButton
                label="Start Generating Leads"
                onClick={onOpenLeadModal}
                width={240}
              />
              <button
                onClick={onOpenMockupDemo}
                className="h-[46px] px-6 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md w-full sm:w-auto"
              >
                <span>View Live Demo</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Floating Cards (3D composition) */}
          <div className="relative h-[500px] lg:h-[600px] w-full mt-8 lg:mt-0 perspective-1000">
            {/* Base gradient blob */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-tr from-emerald-100 via-teal-50 to-blue-50 rounded-[40px] blur-xl opacity-50 max-w-[400px] max-h-[500px] m-auto"
            />

            {/* Main Bar Chart Card */}
            <motion.div 
              style={{ y: y1 }}
              initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[380px] bg-white rounded-3xl p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-zinc-100 z-20"
            >
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-30">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex items-end gap-3 h-40 pt-4">
                {[45, 85, 60, 75, 30].map((height, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 0.8 + (i * 0.1), duration: 0.8, type: "spring" }}
                    className={`flex-1 rounded-t-xl ${i === 1 ? 'bg-emerald-500' : 'bg-emerald-300/60'}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Profile Card 1 */}
            <motion.div 
              style={{ y: y2 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] sm:top-[15%] left-0 sm:left-[5%] w-[200px] bg-white rounded-2xl p-4 shadow-xl border border-zinc-100 z-30"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&auto=format&fit=crop" alt="Michael Gough" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Michael Gough</h4>
                  <div className="flex text-amber-400 mt-0.5 gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
                <div className="ml-auto w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                </div>
              </div>
            </motion.div>

            {/* Profile Card 2 */}
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[10%] sm:bottom-[20%] right-0 sm:right-[5%] w-[180px] bg-white rounded-2xl p-3 shadow-xl border border-zinc-100 z-30"
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&auto=format&fit=crop" alt="Floyd Miles" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Floyd Miles</h4>
                  <div className="flex justify-center text-amber-400 mt-1 gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Checkmark Floating Element */}
            <motion.div 
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[40%] right-[-10%] sm:right-[0%] w-14 h-14 bg-white rounded-full shadow-xl border border-zinc-50 flex items-center justify-center z-10 hidden sm:flex"
            >
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
            </motion.div>

            {/* Growth Floating Element */}
            <motion.div 
              animate={{ y: [0, 15, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-[2%] left-[2%] bg-zinc-900 text-white px-4 py-2 rounded-xl shadow-xl z-20 font-semibold text-sm flex items-center gap-2"
            >
              <span>+380% Growth</span>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
