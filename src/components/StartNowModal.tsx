import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, ArrowRight, Sparkles, Building, Phone, Mail, MapPin } from 'lucide-react';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';
import { LeadFormData } from '../types';

interface StartNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const StartNowModal: React.FC<StartNowModalProps> = ({
  isOpen,
  onClose,
  defaultPlan = 'basic'
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    businessName: '',
    industry: 'Retail & Fashion Boutique',
    whatsappNumber: '',
    email: '',
    city: 'Lagos',
    currentPainPoint: 'Traditional web developers charge too much upfront',
    selectedPlan: defaultPlan
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello SalesSite NG! 👋\nI just requested a Free Zero-Upfront Mockup for my business.\n\n` +
      `🏢 Business: ${formData.businessName || 'My Business'}\n` +
      `🏷️ Industry: ${formData.industry}\n` +
      `📍 Location: ${formData.city}\n` +
      `📦 Target Plan: ${formData.selectedPlan.toUpperCase()}\n` +
      `📞 WhatsApp: ${formData.whatsappNumber}\n` +
      `✉️ Email: ${formData.email}\n\n` +
      `Looking forward to receiving our 48-hour mobile prototype!`
    );
    return `https://wa.me/2348000000000?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-[32px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-zinc-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-500 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-wider font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
                Zero Upfront Risk
              </span>
              <h3 className="text-2xl font-bold text-zinc-950 mt-2">
                Request Your Free SME Mockup
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                Tell us about your business. We'll design a 24/7 WhatsApp sales engine mockup in 48 hours for ₦0 upfront.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-800 mb-1">
                  Business or Brand Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Luxe Coutures Lagos"
                    className="w-full text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                  />
                  <Building className="w-4 h-4 text-zinc-400 absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-800 mb-1">
                    Industry / Category
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                  >
                    <option value="Retail & Fashion Boutique">Retail & Fashion</option>
                    <option value="Hair Salon & Beauty Spa">Salon & Spa</option>
                    <option value="Restaurant & Food Delivery">Food & Restaurant</option>
                    <option value="Consulting & Services">Professional Services</option>
                    <option value="Real Estate & Rentals">Real Estate & Rentals</option>
                    <option value="Other SME">Other Business</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-800 mb-1">
                    City in Nigeria
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Lagos / Abuja"
                      className="w-full text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                    />
                    <MapPin className="w-4 h-4 text-zinc-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-800 mb-1">
                    WhatsApp Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      placeholder="+234 801 234 5678"
                      className="w-full text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                    />
                    <Phone className="w-4 h-4 text-zinc-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-800 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="owner@brand.ng"
                      className="w-full text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                    />
                    <Mail className="w-4 h-4 text-zinc-400 absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-800 mb-1">
                  Preferred Subscription Plan
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'starter', label: 'Basic', price: '₦15k/mo' },
                    { id: 'premium', label: 'Premium', price: '₦30k/mo' },
                    { id: 'pro', label: 'Pro', price: '₦50k/mo' }
                  ].map((p) => (
                    <button
                      type="button"
                      key={p.id}
                      onClick={() => setFormData({ ...formData, selectedPlan: p.id })}
                      className={`py-2 px-3 rounded-xl border text-center transition-all ${
                        formData.selectedPlan === p.id
                          ? 'border-orange-500 bg-orange-50/50 text-zinc-950 font-bold'
                          : 'border-zinc-200 bg-zinc-50 text-zinc-600'
                      }`}
                    >
                      <span className="text-xs block">{p.label}</span>
                      <span className="text-[10px] text-zinc-400 block">{p.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <LiquidMetalButton
                  type="submit"
                  disabled={loading}
                  className="w-full justify-center"
                  width="100%"
                  label={loading ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit for Free 48-Hour Mockup</span>
                      <ArrowRight className="w-4 h-4 text-orange-400" />
                    </>
                  )}
                />
              </div>

              <p className="text-[11px] text-center text-zinc-400">
                🔒 No credit card required. Zero payment until you inspect and approve your prototype.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-zinc-950">
              Mockup Request Received!
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-sm mx-auto mt-2">
              Thanks <strong>{formData.businessName}</strong>! Our engineering team has already queued your free WhatsApp sales prototype.
            </p>

            <div className="my-6 p-4 rounded-2xl bg-[#f7f7f8] border border-zinc-100 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-zinc-500">Business:</span>
                <span className="font-semibold text-zinc-900">{formData.businessName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Plan:</span>
                <span className="font-semibold text-zinc-900">{formData.selectedPlan.toUpperCase()} (₦0 upfront)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Delivery:</span>
                <span className="font-semibold text-emerald-600">48 Hours to WhatsApp</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Instantly on WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-full border border-zinc-200 text-zinc-600 hover:text-zinc-900 text-xs font-medium"
              >
                Return to Site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
