export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  priceNGN: number;
  priceUSD: number;
  period: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  avatarUrl: string;
  metric: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface LeadFormData {
  businessName: string;
  industry: string;
  whatsappNumber: string;
  email: string;
  city: string;
  currentPainPoint: string;
  selectedPlan: string;
}
