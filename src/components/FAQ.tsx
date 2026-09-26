import React, { useState, useEffect, useRef } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08 }
    );
    const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-stagger');
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white relative section-glow-top" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="reveal text-center mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-orange-600 block mb-3">
            Got Questions?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Your Questions{' '}
            <br />
            Answered
          </h2>
          <p className="mt-3 text-sm text-zinc-500 max-w-md mx-auto">
            Everything you need to know about our Website-as-a-Service model for Nigerian businesses.
          </p>
        </div>

        {/* Accordion Rows */}
        <div className="reveal-stagger space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl overflow-hidden border transition-all duration-200 ${
                  isOpen
                    ? 'bg-white border-orange-200/60 shadow-sm'
                    : 'bg-[#f4f4f5] border-transparent hover:bg-[#ededef]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-1 rounded-2xl cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="text-sm sm:text-base font-semibold text-zinc-900 pr-4">
                    {item.question}
                  </span>
                  <div className={`w-7 h-7 flex items-center justify-center shrink-0 rounded-full transition-colors duration-200 ${
                    isOpen ? 'bg-orange-500 text-white' : 'bg-zinc-200 text-zinc-500'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  className={`faq-answer${isOpen ? ' open' : ''}`}
                  role="region"
                >
                  <div className="faq-answer-inner">
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/50">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
