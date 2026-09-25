import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenLeadModal: (plan?: string) => void;
  onOpenStrategyCall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal, onOpenStrategyCall }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

          {/* Zone 2: Navigation Links (matching screenshot 124143 / 123913) */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-zinc-600">
            <a href="#home" className="hover:text-zinc-950 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-zinc-950 transition-colors">
              About us
            </a>
            <a href="#services" className="hover:text-zinc-950 transition-colors">
              Services
            </a>
            <a href="#how-it-works" className="hover:text-zinc-950 transition-colors">
              How it works
            </a>
            <a href="#pricing" className="hover:text-zinc-950 transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="hover:text-zinc-950 transition-colors">
              Case Studies
            </a>
          </nav>

          {/* Zone 3: Actions (matching screenshot "Log in" + pill "Sign up" / "Start Now") */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenStrategyCall}
              className="text-[14px] font-medium text-zinc-700 hover:text-zinc-950 px-4 py-2 rounded-full border border-zinc-200 hover:border-zinc-300 transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-orange-500" />
              <span>Strategy Call</span>
            </button>
            <button
              onClick={() => onOpenLeadModal()}
              className="text-[14px] font-medium text-white bg-zinc-900 hover:bg-zinc-800 px-5 py-2.5 rounded-full transition-all duration-200 shadow-xs hover:shadow-md flex items-center gap-1.5"
            >
              <span>Start Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-700 hover:text-zinc-950 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-6 py-5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-zinc-700">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-orange-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-orange-600 transition-colors"
            >
              About us
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-orange-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-orange-600 transition-colors"
            >
              How it works
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-orange-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-orange-600 transition-colors"
            >
              Case Studies
            </a>
            <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStrategyCall();
                }}
                className="w-full text-center py-2.5 rounded-full border border-zinc-200 text-zinc-800 font-medium text-sm"
              >
                Book Strategy Call
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal();
                }}
                className="w-full text-center py-2.5 rounded-full bg-zinc-900 text-white font-medium text-sm shadow-sm"
              >
                Start Now (Zero Upfront)
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
