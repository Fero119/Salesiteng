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

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-transparent" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs sm:text-sm font-semibold mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          🎯 #1 Affordable WhatsApp Website for Small Businesses in Nigeria
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-950 leading-[1.1] mb-6 max-w-5xl text-balance"
        >
          Get a WhatsApp Sales Website — <br className="hidden md:block" />
          Live in <motion.span 
            animate={{ filter: ["drop-shadow(0px 0px 4px rgba(249,115,22,0.3))", "drop-shadow(0px 0px 16px rgba(249,115,22,0.8))", "drop-shadow(0px 0px 4px rgba(249,115,22,0.3))"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent inline-block"
          >
            48 Hours
          </motion.span>, From ₦30,000.
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base sm:text-lg text-zinc-600 max-w-3xl font-normal leading-relaxed text-balance mb-10"
        >
          Your customer taps 'Order,' picks what they want, and it lands straight in your WhatsApp — ready to confirm and get paid. No agency fees, no months of waiting.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-20"
        >
          <LiquidMetalButton
            label="Book My Free Strategy Call"
            onClick={onOpenLeadModal}
            width={300}
          />
          <button
            onClick={onOpenMockupDemo}
            className="h-[46px] px-6 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md w-full sm:w-auto"
          >
            <span>View Live Demo</span>
            <ChevronRight className="w-4 h-4 text-zinc-400" />
          </button>
        </motion.div>

        {/* Dashboard / Floating Elements Area */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] perspective-1000 mt-8"
        >
          {/* Main central dashboard-like image or mockup placeholder */}
          <div className="absolute inset-0 max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-zinc-200/60 p-6 flex flex-col z-20">
            {/* Mock Header */}
            <div className="flex items-center justify-between mb-8 border-b border-zinc-100 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-zinc-400" />
              </div>
              <div className="h-4 w-32 bg-zinc-100 rounded-full" />
            </div>
            {/* Mock Chart */}
            <div className="flex-1 flex items-end justify-between gap-4 px-2 sm:px-8 pb-4">
               {[30, 50, 40, 70, 85, 60, 90].map((height, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + (i * 0.1), duration: 0.8, type: "spring" }}
                    className={`w-full rounded-t-xl ${i === 4 || i === 6 ? 'bg-orange-500 shadow-lg shadow-orange-500/20' : 'bg-orange-200/60'}`}
                  />
                ))}
            </div>
          </div>

          {/* Floating Profile 1 */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-4 md:-left-12 w-[180px] bg-white rounded-2xl p-4 shadow-xl border border-zinc-100 z-30"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&auto=format&fit=crop" alt="Chinedu O." className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900">Chinedu O.</h4>
                <div className="flex text-amber-400 mt-0.5 gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
              </div>
              <div className="ml-auto w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3 h-3 text-orange-600" />
              </div>
            </div>
          </motion.div>

          {/* Floating Profile 2 */}
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 -right-4 md:-right-12 w-[160px] bg-white rounded-2xl p-3 shadow-xl border border-zinc-100 z-30"
          >
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-orange-100 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&auto=format&fit=crop" alt="Aisha Bello" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900">Aisha Bello</h4>
                <div className="flex justify-center text-amber-400 mt-1 gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Checkmark Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/4 -right-2 md:right-8 w-14 h-14 bg-white rounded-full shadow-xl border border-zinc-50 flex items-center justify-center z-10"
          >
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
          </motion.div>
          
          {/* Growth Floating Element */}
          <motion.div 
            animate={{ y: [0, 15, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-[2%] left-[2%] bg-zinc-900 text-white px-4 py-2 rounded-xl shadow-xl z-20 font-semibold text-sm flex items-center gap-2"
          >
            <span>50+ Stores Launched</span>
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
