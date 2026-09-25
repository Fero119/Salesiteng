import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title (Screenshot 124107) */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Your Questions <br />
            Answered
          </h2>
          <p className="mt-3 text-sm text-zinc-500">
            Everything you need to know about our Website-as-a-Service model for Nigerian businesses.
          </p>
        </div>

        {/* Accordion Rows matching Screenshot 124107 */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#f4f4f5] hover:bg-[#ededef] transition-colors rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-zinc-900 pr-4">
                    {item.question}
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center shrink-0 text-zinc-500">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/60 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
