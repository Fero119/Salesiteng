import React, { useState, useRef } from 'react';
import { Check, MessageSquare, TrendingUp, Users, Zap } from 'lucide-react';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';
import { motion } from 'motion/react';

interface LeadMachineShowcaseProps {
  onOpenLeadModal: () => void;
}

export const LeadMachineShowcase: React.FC<LeadMachineShowcaseProps> = ({ onOpenLeadModal }) => {
  const [costPerLeadToggle, setCostPerLeadToggle] = useState<number>(193);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="services" className="py-24 bg-white/60 backdrop-blur-lg relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Turn Traffic Into <br />
            <span className="text-zinc-900">High-Paying WhatsApp Customers</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-500 leading-relaxed text-balance">
            Explore how our high-converting subscription websites seamlessly convert visitors into instant WhatsApp orders and recurring Nigerian customers.
          </p>
        </motion.div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Supercharge Your Cost per Lead */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#f7f7f8] rounded-[24px] p-6 flex flex-col justify-between border border-zinc-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-40 flex items-center justify-center">
              {/* Floating Cost Tag */}
              <motion.div 
                animate={{ y: [0, -8, 0], rotate: [2, 0, 2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-2 right-4 bg-white px-5 py-2.5 rounded-2xl shadow-md border border-zinc-100/60"
              >
                <span className="text-2xl font-bold text-zinc-900 tracking-tight">₦1,250</span>
              </motion.div>

              {/* Curve Tag */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-6 left-4 bg-white p-3 rounded-2xl shadow-sm border border-zinc-100/60 flex items-center gap-2"
              >
                <div className="w-6 h-4 relative">
                  <svg viewBox="0 0 24 16" className="w-full h-full text-orange-500 stroke-current fill-none stroke-2">
                    <path d="M1 12 C 6 2, 12 14, 23 2" />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-orange-600">-38%</span>
              </motion.div>

              {/* Green Icon Note */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-2 right-12 bg-white px-3.5 py-2.5 rounded-2xl shadow-sm border border-zinc-100/60 flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-zinc-800 block">1,242</span>
                  <span className="text-[9px] text-zinc-400 block -mt-0.5">WhatsApp leads</span>
                </div>
              </motion.div>
            </div>

            <div className="mt-6 text-center z-10">
              <h3 className="text-lg font-semibold text-zinc-900">
                Supercharge Your Cost per Lead
              </h3>
              <p className="mt-2 text-xs text-zinc-500 leading-normal">
                Cut paid ad waste. Route prospects directly to a tailored mobile catalogue that captures buyer intent right away.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Revenue Growth Visualization */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#f7f7f8] rounded-[24px] p-6 flex flex-col justify-between border border-zinc-100 hover:shadow-xl transition-all duration-300"
          >
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Revenue Growth Visualization
              </h3>
              <p className="mt-2 text-xs text-zinc-500 leading-normal">
                Visualize revenue growth trends and patterns to make data-driven decisions for business expansion and optimization.
              </p>
            </div>

            {/* Striped Green Bar Chart */}
            <div className="mt-6 bg-white rounded-2xl p-5 border border-zinc-100/80 shadow-xs relative">
              <div className="h-32 flex items-end justify-between gap-2.5">
                {[
                  { height: '45%', val: '₦200k' },
                  { height: '88%', val: '₦400k' },
                  { height: '62%', val: '₦300k' },
                  { height: '78%', val: '₦380k' },
                  { height: '30%', val: '₦120k' },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: bar.height }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (i * 0.1), duration: 0.8, type: "spring" }}
                      className={`w-full rounded-t-lg transition-all duration-500 ${
                        i === 1
                          ? 'bg-orange-500 shadow-xs'
                          : 'bg-orange-300/70 border-t border-orange-400'
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Floating verified check coin */}
              <motion.div 
                animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center shadow-md z-10"
              >
                <Check className="w-4 h-4 text-orange-400 stroke-[3]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Card 3: Leads Accelerator */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#f7f7f8] rounded-[24px] p-6 flex flex-col justify-between border border-zinc-100 hover:shadow-xl transition-all duration-300"
          >
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Leads Accelerator
              </h3>
              <p className="mt-2 text-xs text-zinc-500 leading-normal">
                From automated WhatsApp order forms to instant customer qualification, streamline your entire sales intake.
              </p>
            </div>

            {/* Interactive Cost per Lead module */}
            <div className="mt-6 flex items-center justify-between gap-3 relative">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                onClick={() => setCostPerLeadToggle(prev => (prev === 193 ? 257 : prev === 257 ? 375 : 193))}
                className="flex-1 bg-white rounded-2xl p-4 border border-zinc-100 shadow-sm cursor-pointer select-none group relative z-10"
              >
                <span className="text-[11px] font-medium text-zinc-400 block">Cost per Lead</span>
                <div className="mt-2 bg-zinc-900 text-white rounded-xl py-3 px-4 text-center group-hover:bg-zinc-800 transition-colors">
                  <span className="text-xl font-bold tracking-tight">₦{costPerLeadToggle * 10}</span>
                </div>
              </motion.div>

              <div className="flex flex-col gap-2 z-10">
                <motion.div 
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center shadow-xs"
                >
                  <Users className="w-4 h-4 text-zinc-300" />
                </motion.div>
                <motion.div 
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Split Row */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: Professional Client Support Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 rounded-[20px] bg-gradient-to-br from-orange-500 to-orange-600 p-6 sm:p-8 flex flex-col justify-center text-white shadow-md relative overflow-hidden min-h-[160px]"
          >
            {/* Decorative background shapes */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-black/10 rounded-full blur-xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-orange-200 block mb-1">
                Lagos Support Desk
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Dedicated WhatsApp Concierge
              </h3>
              <p className="text-orange-100 text-xs sm:text-sm leading-relaxed max-w-[95%]">
                Real humans in Nigeria helping you update your catalogue, adjust prices, and run promos anytime.
              </p>
            </div>
          </motion.div>

          {/* Right: Segmentation Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 bg-[#f7f7f8] rounded-[20px] p-5 flex flex-col justify-between border border-zinc-100 hover:shadow-xl transition-all duration-300"
          >
            <div>
              <h3 className="text-base font-bold text-zinc-900">
                Segmentation
              </h3>
              <p className="mt-1 text-[11px] text-zinc-500 leading-relaxed max-w-lg">
                Effortlessly segment leads based on customizable criteria for targeted engagement and enhanced conversion rates.
              </p>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-3 relative">
              {/* 47% Leads Retention progress bar */}
              <motion.div 
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-xl p-3 border border-zinc-100 shadow-sm relative z-10 flex-1 flex flex-col justify-center"
              >
                <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden mb-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '47%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" 
                  />
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-bold text-zinc-900">47%</span>
                  <span className="text-[10px] text-zinc-400 font-medium">Leads Retention</span>
                </div>
              </motion.div>

              {/* Floating New Leads badge */}
              <motion.div 
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="bg-white rounded-xl p-3 border border-zinc-100 shadow-sm flex items-center justify-between relative z-10 flex-1"
              >
                <div>
                  <span className="text-[9px] text-zinc-400 font-medium">New Leads</span>
                  <p className="text-base font-bold text-zinc-900 leading-none mt-1">342</p>
                </div>
                {/* 3-color progress bars */}
                <div className="flex items-end gap-1 w-12 justify-end">
                  <motion.div animate={{ height: [4, 10, 4] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 bg-orange-500 rounded-full" />
                  <motion.div animate={{ height: [8, 14, 8] }} transition={{ duration: 2.2, repeat: Infinity }} className="w-1.5 bg-amber-400 rounded-full" />
                  <motion.div animate={{ height: [6, 12, 6] }} transition={{ duration: 1.8, repeat: Infinity }} className="w-1.5 bg-zinc-700 rounded-full" />
                </div>
              </motion.div>
            </div>

            <div className="mt-4 flex justify-start">
              <LiquidMetalButton
                onClick={onOpenLeadModal}
                width={100}
                label="Learn more"
              />
            </div>
          </motion.div>

        </div>

        {/* Section 2: "Unlock the Value" */}
        <div className="mt-28 pt-16 border-t border-zinc-100">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12"
          >
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
                Unlock the <br />
                Value
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
                Here's what changes: people messaging you already know what they want and can pay for it, you stop retyping the same price list all day, and you can see how many people looked at your catalogue this week.
              </p>
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 01 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[24px] p-6 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <motion.div 
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-28 bg-[#f7f7f8] rounded-xl flex flex-col justify-center p-4 border border-zinc-100/80 mb-6"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wide">Visits</span>
                  <span className="text-xs font-bold text-zinc-900">8,450</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wide">Chats</span>
                  <span className="text-xs font-bold text-zinc-900">3,240</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wide">Orders</span>
                  <span className="text-xs font-bold text-orange-600">920</span>
                </div>
              </motion.div>

              <div className="flex-1">
                <span className="text-xs font-mono text-orange-500 font-bold tracking-wider uppercase mb-2 block">01</span>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">
                  Leads Segmentation
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Categorize inquiries by high-ticket orders, wholesale buyers, or retail shoppers so your sales team talks to ready spenders first.
                </p>
              </div>
            </motion.div>

            {/* Card 02 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[24px] p-6 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <motion.div 
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-full h-28 bg-[#f7f7f8] rounded-xl flex flex-col justify-center p-4 border border-zinc-100/80 mb-6 relative overflow-hidden"
              >
                <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-2">
                  <span>New Order #1042</span>
                  <span className="text-orange-600 font-bold bg-orange-50 px-1.5 py-0.5 rounded">Just now</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-xs font-semibold text-zinc-800">WhatsApp Alert</span>
                </div>
              </motion.div>

              <div className="flex-1">
                <span className="text-xs font-mono text-orange-500 font-bold tracking-wider uppercase mb-2 block">02</span>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">
                  Real-Time Analytics
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Instant WhatsApp notification the moment a customer fills a cart or inquires about a service, with zero delay.
                </p>
              </div>
            </motion.div>

            {/* Card 03 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[24px] p-6 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <motion.div 
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-full h-28 bg-[#f7f7f8] rounded-xl flex flex-col justify-center p-4 border border-zinc-100/80 mb-6"
              >
                <span className="text-[10px] text-zinc-400 block mb-1">Meetings</span>
                <span className="text-sm font-bold text-zinc-800">11:00 am WAT</span>
                <div className="flex items-center gap-1.5 mt-2">
                  <div className="w-4 h-4 rounded-full bg-orange-400 flex items-center justify-center text-[9px] text-white">✓</div>
                  <span className="text-[10px] text-zinc-500">Client Call</span>
                </div>
              </motion.div>

              <div className="flex-1">
                <span className="text-xs font-mono text-orange-500 font-bold tracking-wider uppercase mb-2 block">03</span>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">
                  Strategy Call Scheduler
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Let your high-ticket clients book direct 1-on-1 strategy sessions or consultation appointments automatically.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
