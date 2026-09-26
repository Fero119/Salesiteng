import { PricingPlan, Testimonial, FAQItem } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Basic',
    subtitle: 'Essential sales machine for small retail and single vendors.',
    priceNGN: 15000,
    priceUSD: 49,
    period: 'month',
    isPopular: false,
    features: [
      'Custom WhatsApp Order Machine',
      'Up to 15 Core Product / Service Listings',
      'Direct 1-Tap WhatsApp Checkout',
      'Free .com.ng or .ng Domain & SSL',
      'Fast Mobile-Optimized Hosting',
      'Basic Monthly Maintenance'
    ],
    ctaText: 'Start My Basic Plan'
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    subtitle: 'Comprehensive features for growing Nigerian SMEs & brands.',
    priceNGN: 30000,
    priceUSD: 199,
    period: 'month',
    isPopular: true,
    features: [
      'Fully Customizable WhatsApp Catalog',
      'Unlimited Products & Services',
      'Automated Order Summary Formatting',
      'Google Maps & Local SEO Setup',
      'Customer Lead Tracking & Analytics',
      '24/7 Priority Support & Weekly Updates',
      'Paystack / Bank Transfer Integration'
    ],
    ctaText: 'Start My Premium Plan'
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    subtitle: 'Advanced features for multi-branch or high-volume merchants.',
    priceNGN: 50000,
    priceUSD: 99,
    period: 'month',
    isPopular: false,
    features: [
      'Multi-Location Routing (Lagos / Abuja / PH)',
      'Advanced Lead Scoring & Export',
      'Dedicated Account Manager',
      'Automated Inventory Alert to WhatsApp',
      'A/B Testing for Maximum Inquiries',
      'Custom Promo Banners & Seasonal Sales'
    ],
    ctaText: 'Start My Pro Plan'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote:
      'Thanks to SalesSite NG, we saw our weekly WhatsApp orders jump from 14 to over 85 without spending ₦400,000 upfront on a web designer who disappears. The monthly model is a blessing for Nigerian businesses.',
    author: 'Emily Parker-Adewale',
    role: 'Founder & Creative Director',
    company: 'Summit Couture Lagos',
    location: 'Lekki Phase 1, Lagos',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80',
    metric: '+380% WhatsApp Orders'
  },
  {
    id: '2',
    quote:
      'This platform has revolutionized the way we handle food deliveries during lunch hours. Customers tap menu items, click checkout, and a neat order arrives on our kitchen WhatsApp phone instantly.',
    author: 'Nathan Johnson',
    role: 'Managing Director',
    company: 'Peak Kitchens & Grills',
    location: 'Wuse 2, Abuja',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80',
    metric: '₦1.8M Monthly WhatsApp Sales'
  },
  {
    id: '3',
    quote:
      'Choosing SalesSite NG was one of the best decisions we made for our business. Zero initial capital, our site was live in 48 hours, and they handle all the technical headaches while we focus on clients.',
    author: 'Ethan Roberts-Chukwu',
    role: 'Lead Consultant',
    company: 'Apex Logistics & Freight',
    location: 'Port Harcourt',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80',
    metric: '48hr Turnaround Time'
  },
  {
    id: '4',
    quote:
      'SalesSite NG has exceeded our expectations. It is not just about having a website; it is about having a sales machine that actually generates daily inbound inquiries straight to our sales rep.',
    author: 'Olivia Bennett-Okonkwo',
    role: 'Operations Lead',
    company: 'BrightGlow Aesthetics Salon',
    location: 'Ikeja, Lagos',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&auto=format&fit=crop&q=80',
    metric: '68% Repeat Customer Rate'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does your lead generation platform ensure qualified leads?',
    answer:
      'Unlike generic brochure websites, our pages are engineered with interactive product selectors, clear pricing, and pre-formatted WhatsApp message triggers. When a prospect contacts you, their inquiry already contains their name, items of interest, budget, and location — no back-and-forth tyre-kicking.'
  },
  {
    id: 'faq-2',
    question: 'What types of businesses benefit most from your services?',
    answer:
      'Nigerian SMEs transitioning from messy Instagram DMs: fashion boutiques, beauty salons & spas, cloud kitchens & caterers, real estate agents, equipment rentals, and professional service consultancies in Lagos, Abuja, Port Harcourt, and across Nigeria.'
  },
  {
    id: 'faq-3',
    question: 'Can I customize the lead generation strategy to align with my business goals?',
    answer:
      'Absolutely. Every site is custom tailored with your brand colors, high-res photography, custom product catalog, and targeted call-to-actions (e.g. "Order on WhatsApp", "Book Consultation", "Request Quotation").'
  },
  {
    id: 'faq-4',
    question: 'How do I track the performance and ROI of my lead generation campaigns?',
    answer:
      'You receive real-time notifications on WhatsApp for every customer interaction, plus a clean monthly analytics summary showing total site visitors, top-viewed items, and click-through rates so you can see your exact return on investment.'
  },
  {
    id: 'faq-5',
    question: 'What does "Zero Upfront Cost" really mean? Are there hidden fees?',
    answer:
      'No hidden fees whatsoever. Traditional agencies charge ₦300,000 to ₦1,000,000 before writing a single line of code. With SalesSite NG, we build and deploy your entire website for ₦0 upfront. You only begin your affordable monthly subscription (₦15,000/mo) once you review and approve your live site.'
  },
  {
    id: 'faq-6',
    question: 'Can I cancel my subscription or use my own domain?',
    answer:
      'Yes! There are no lock-in contracts. You can pause or cancel at any time. We also provide free custom domain setup (.com or .com.ng) or we can connect an existing domain you already own.'
  }
];
