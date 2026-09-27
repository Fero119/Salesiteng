import React, { useState, useRef } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 bg-white/60 backdrop-blur-lg relative section-glow-top" ref={sectionRef}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
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
        </motion.div>

        {/* Accordion Rows */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      role="region"
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
