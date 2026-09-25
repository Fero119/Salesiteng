import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Send } from 'lucide-react';

interface CTASectionProps {
  onOpenLeadModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenLeadModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2500);
  };

  return (
    <section className="pt-20 pb-0 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Callout (Screenshot 124120) */}
        <div className="text-center max-w-4xl mx-auto pb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-950 leading-[1.12]">
            <span className="text-orange-500">Transform</span> Your <br />
            <span className="text-orange-500">Approach</span> to Lead <br />
            <span>Generation</span>
          </h2>

          <div className="mt-8 flex justify-center">
            <button
              onClick={onOpenLeadModal}
              className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get started
            </button>
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
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full bg-[#27272a] text-white placeholder-zinc-500 text-xs sm:text-sm px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 pr-32"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
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
