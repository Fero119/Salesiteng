import React, { useState } from 'react';
import { ArrowUpRight, Check, MessageSquare, Sparkles, TrendingUp, Users, Zap, Shield, PhoneCall } from 'lucide-react';

interface LeadMachineShowcaseProps {
  onOpenLeadModal: () => void;
}

export const LeadMachineShowcase: React.FC<LeadMachineShowcaseProps> = ({ onOpenLeadModal }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [costPerLeadToggle, setCostPerLeadToggle] = useState<number>(193);

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Screenshot 124010 / 124017) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Transform Your <br />
            <span className="text-zinc-900">Leads into Revenue</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-500 leading-relaxed text-balance">
            Explore how our zero-upfront subscription websites seamlessly convert visitors into instant WhatsApp orders and recurring Nigerian customers.
          </p>
        </div>

        {/* 3-Column Bento Grid matching Screenshot 124010 & 124017 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Supercharge Your Cost per Lead */}
          <div className="bg-[#f7f7f8] rounded-[32px] p-7 flex flex-col justify-between border border-zinc-100 hover:shadow-lg transition-all duration-300">
            <div className="relative h-44 flex items-center justify-center">
              {/* Floating Cost Tag (Screenshot 124010) */}
              <div className="absolute top-2 right-4 bg-white px-5 py-2.5 rounded-2xl shadow-md border border-zinc-100/60 transform rotate-1 hover:rotate-0 transition-transform">
                <span className="text-2xl font-bold text-zinc-900 tracking-tight">₦1,250</span>
              </div>

              {/* Curve Tag */}
              <div className="absolute bottom-6 left-4 bg-white p-3 rounded-2xl shadow-sm border border-zinc-100/60 flex items-center gap-2">
                <div className="w-6 h-4 relative">
                  <svg viewBox="0 0 24 16" className="w-full h-full text-orange-500 stroke-current fill-none stroke-2">
                    <path d="M1 12 C 6 2, 12 14, 23 2" />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600">-38%</span>
              </div>

              {/* Green Icon Note */}
              <div className="absolute bottom-2 right-12 bg-white px-3.5 py-2.5 rounded-2xl shadow-sm border border-zinc-100/60 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-zinc-800 block">1,242</span>
                  <span className="text-[9px] text-zinc-400 block -mt-0.5">WhatsApp leads</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-lg font-semibold text-zinc-900">
                Supercharge Your Cost per Lead
              </h3>
              <p className="mt-2 text-xs text-zinc-500 leading-normal">
                Cut paid ad waste. Route prospects directly to a tailored mobile catalogue that captures buyer intent right away.
              </p>
            </div>
          </div>

          {/* Card 2: Revenue Growth Visualization */}
          <div className="bg-[#f7f7f8] rounded-[32px] p-7 flex flex-col justify-between border border-zinc-100 hover:shadow-lg transition-all duration-300">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Revenue Growth Visualization
              </h3>
              <p className="mt-2 text-xs text-zinc-500 leading-normal">
                Visualize revenue growth trends and patterns to make data-driven decisions for business expansion and optimization.
              </p>
            </div>

            {/* Striped Green Bar Chart (Screenshot 124010) */}
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
                    <div
                      style={{ height: bar.height }}
                      className={`w-full rounded-t-lg transition-all duration-500 ${
                        i === 1
                          ? 'bg-emerald-500 shadow-xs'
                          : 'bg-emerald-300/70 border-t border-emerald-400'
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Floating verified check coin */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center shadow-md">
                <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
              </div>
            </div>
          </div>

          {/* Card 3: Leads Accelerator */}
          <div className="bg-[#f7f7f8] rounded-[32px] p-7 flex flex-col justify-between border border-zinc-100 hover:shadow-lg transition-all duration-300">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">
                Leads Accelerator
              </h3>
              <p className="mt-2 text-xs text-zinc-500 leading-normal">
                From automated WhatsApp order forms to instant customer qualification, streamline your entire sales intake.
              </p>
            </div>

            {/* Interactive Cost per Lead module (Screenshot 124010) */}
            <div className="mt-6 flex items-center justify-between gap-3">
              <div
                onClick={() => setCostPerLeadToggle(prev => (prev === 193 ? 257 : prev === 257 ? 375 : 193))}
                className="flex-1 bg-white rounded-2xl p-4 border border-zinc-100 shadow-xs cursor-pointer select-none group"
              >
                <span className="text-[11px] font-medium text-zinc-400 block">Cost per Lead</span>
                <div className="mt-2 bg-zinc-900 text-white rounded-xl py-3 px-4 text-center group-hover:bg-zinc-800 transition-colors">
                  <span className="text-xl font-bold tracking-tight">₦{costPerLeadToggle * 10}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center shadow-xs">
                  <Users className="w-4 h-4 text-zinc-300" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                  <MessageSquare className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Split Row: Customer Success Rep & Segmentation (Screenshot 124027) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: Professional Client Support Photo with Fallback Container */}
          <div className="md:col-span-6 rounded-[32px] overflow-hidden relative min-h-[300px] shadow-sm bg-gradient-to-br from-zinc-800 to-zinc-950 group">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
              alt="SalesSite NG Client Support Representative"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback styling if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            {/* Measured contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-7">
              <span className="text-xs uppercase tracking-wider font-semibold text-orange-400">
                Lagos Support Desk
              </span>
              <p className="text-white text-lg font-bold mt-1">
                Dedicated WhatsApp Concierge
              </p>
              <p className="text-zinc-300 text-xs mt-1">
                Real humans in Nigeria helping you update your catalogue, adjust prices, and run promos anytime.
              </p>
            </div>
          </div>

          {/* Right: Segmentation Card (Screenshot 124027) */}
          <div className="md:col-span-6 bg-[#f7f7f8] rounded-[32px] p-8 flex flex-col justify-between border border-zinc-100">
            <div>
              <h3 className="text-xl font-bold text-zinc-900">
                Segmentation
              </h3>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                Effortlessly segment leads based on customizable criteria for targeted engagement and enhanced conversion rates.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {/* 47% Leads Retention progress bar */}
              <div className="bg-white rounded-2xl p-5 border border-zinc-100 shadow-xs">
                <div className="w-full h-2.5 bg-zinc-100 rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full w-[47%]" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-zinc-900">47%</span>
                  <span className="text-xs text-zinc-400 font-medium">Leads Retention</span>
                </div>
              </div>

              {/* Floating New Leads badge */}
              <div className="bg-white rounded-2xl p-4 border border-zinc-100 shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-zinc-400 font-medium">New Leads This Week</span>
                  <p className="text-xl font-bold text-zinc-900">342</p>
                </div>
                {/* 3-color progress bars */}
                <div className="flex items-center gap-1.5 w-28">
                  <div className="h-1.5 flex-1 bg-orange-500 rounded-full" />
                  <div className="h-1.5 flex-1 bg-amber-400 rounded-full" />
                  <div className="h-1.5 flex-1 bg-emerald-500 rounded-full" />
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-start">
              <button
                onClick={onOpenLeadModal}
                className="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors"
              >
                Learn more
              </button>
            </div>
          </div>

        </div>

        {/* Section 2: "Unlock the Value" Numbered Editorial List (Screenshot 124033) */}
        <div className="mt-28 pt-16 border-t border-zinc-100">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
                Unlock the <br />
                Value
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
                Experience the transformative impact of our platform's key benefits, tailored to maximize your success. From increased lead generation to streamlined workflows, we empower you to achieve your goals efficiently and effectively.
              </p>
            </div>
          </div>

          {/* 3 Numbered Rows (Screenshot 124033) */}
          <div className="divide-y divide-zinc-200">
            
            {/* Row 01 */}
            <div
              onClick={() => setActiveStep(0)}
              className={`py-8 sm:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer group transition-colors ${
                activeStep === 0 ? 'opacity-100' : 'opacity-70 hover:opacity-100'
              }`}
            >
              {/* Graphic snippet (overlapping colored circles) */}
              <div className="w-44 h-20 bg-[#f7f7f8] rounded-2xl flex items-center justify-center p-3 border border-zinc-100/80 group-hover:shadow-xs transition-shadow">
                <div className="flex items-center -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-amber-300 flex items-center justify-center text-[10px] font-bold text-amber-900 border-2 border-white shadow-xs">
                    84%
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center text-[9px] font-bold text-blue-900 border-2 border-white shadow-xs">
                    44%
                  </div>
                  <div className="w-9 h-9 rounded-full bg-emerald-400 flex items-center justify-center text-[8px] font-bold text-emerald-950 border-2 border-white shadow-xs">
                    32%
                  </div>
                  <div className="w-7 h-7 rounded-full bg-orange-400 flex items-center justify-center text-[7px] font-bold text-orange-950 border-2 border-white shadow-xs">
                    21%
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <span className="text-sm font-mono text-zinc-400 block mb-1">01</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 group-hover:text-orange-600 transition-colors">
                  Leads Segmentation
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 mt-1 max-w-xl">
                  Categorize inquiries by high-ticket orders, wholesale buyers, or retail shoppers so your sales team talks to ready spenders first.
                </p>
              </div>

              <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-zinc-900 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-900" />
              </div>
            </div>

            {/* Row 02 */}
            <div
              onClick={() => setActiveStep(1)}
              className={`py-8 sm:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer group transition-colors ${
                activeStep === 1 ? 'opacity-100' : 'opacity-70 hover:opacity-100'
              }`}
            >
              {/* Graphic snippet (Redo Logistics shipment card) */}
              <div className="w-44 h-20 bg-[#f7f7f8] rounded-2xl flex flex-col justify-center p-3 border border-zinc-100/80 group-hover:shadow-xs transition-shadow">
                <div className="flex items-center justify-between text-[9px] text-zinc-400 mb-1">
                  <span>Redo Logistic</span>
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-1 rounded">+19.8%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-[11px] font-semibold text-zinc-800">Shipment Live</span>
                </div>
              </div>

              <div className="flex-1">
                <span className="text-sm font-mono text-zinc-400 block mb-1">02</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 group-hover:text-orange-600 transition-colors">
                  Real-Time Analytics
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 mt-1 max-w-xl">
                  Instant WhatsApp notification the moment a customer fills a cart or inquires about a service, with zero delay.
                </p>
              </div>

              <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-zinc-900 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-900" />
              </div>
            </div>

            {/* Row 03 */}
            <div
              onClick={() => setActiveStep(2)}
              className={`py-8 sm:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer group transition-colors ${
                activeStep === 2 ? 'opacity-100' : 'opacity-70 hover:opacity-100'
              }`}
            >
              {/* Graphic snippet (Meeting scheduler card) */}
              <div className="w-44 h-20 bg-[#f7f7f8] rounded-2xl flex flex-col justify-center p-3 border border-zinc-100/80 group-hover:shadow-xs transition-shadow">
                <span className="text-[9px] text-zinc-400 block">Meetings</span>
                <span className="text-[11px] font-bold text-zinc-800 mt-0.5">11:00 am WAT</span>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-3.5 h-3.5 rounded-full bg-orange-400 flex items-center justify-center text-[7px] text-white">✓</div>
                  <span className="text-[9px] text-zinc-500">Client Call</span>
                </div>
              </div>

              <div className="flex-1">
                <span className="text-sm font-mono text-zinc-400 block mb-1">03</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 group-hover:text-orange-600 transition-colors">
                  Strategy Call Scheduler
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 mt-1 max-w-xl">
                  Let your high-ticket clients book direct 1-on-1 strategy sessions or consultation appointments automatically.
                </p>
              </div>

              <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-zinc-900 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-900" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
