import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';

interface NavbarProps {
  onOpenLeadModal: (plan?: string) => void;
  onOpenStrategyCall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal, onOpenStrategyCall }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section for nav highlight
  useEffect(() => {
    const sections = ['home', 'services', 'how-it-works', 'testimonials', 'pricing', 'faq'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Wordmark */}
          <a href="#" className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg">
            <BrandLogo />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-zinc-600" aria-label="Main navigation">
            {[
              { href: '#home', label: 'Home', id: 'home' },
              { href: '#services', label: 'Services', id: 'services' },
              { href: '#how-it-works', label: 'How it works', id: 'how-it-works' },
              { href: '#pricing', label: 'Pricing', id: 'pricing' },
              { href: '#testimonials', label: 'Case Studies', id: 'testimonials' },
            ].map(({ href, label, id }) => (
              <a
                key={id}
                href={href}
                className={`relative py-1 transition-colors duration-200 hover:text-zinc-950 cursor-pointer ${
                  activeSection === id ? 'text-orange-600 font-semibold' : ''
                }`}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenStrategyCall}
              className="text-[14px] font-medium text-zinc-700 hover:text-zinc-950 px-4 py-2 rounded-full border border-zinc-200 hover:border-orange-300 hover:bg-orange-50/50 transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-orange-500" />
              <span>Strategy Call</span>
            </button>
            <LiquidMetalButton
              onClick={() => onOpenLeadModal()}
              width={190}
              label={
                <>
                  <span>Get My Free Mockup</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </>
              }
            />
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-orange-500 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-zinc-100 px-5 py-6 shadow-xl">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {[
              { href: '#home', label: 'Home' },
              { href: '#services', label: 'Services' },
              { href: '#how-it-works', label: 'How it works' },
              { href: '#pricing', label: 'Pricing' },
              { href: '#testimonials', label: 'Case Studies' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3 rounded-xl text-base font-medium text-zinc-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-150 cursor-pointer"
              >
                {label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStrategyCall();
                }}
                className="w-full min-h-[44px] text-center py-3 rounded-full border border-zinc-200 text-zinc-800 font-medium text-sm hover:border-orange-300 hover:bg-orange-50/50 transition-all cursor-pointer"
              >
                Book Strategy Call
              </button>
              <LiquidMetalButton
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal();
                }}
                className="w-full justify-center"
                width={300}
                label="Get My Mockup (Zero Upfront)"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
