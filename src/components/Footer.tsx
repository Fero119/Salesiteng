import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#18181b] text-white border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Navigation & Brand row (Screenshot 124133) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-zinc-800">
          {/* Brand */}
          <div className="flex items-center">
            <BrandLogo isDark={true} />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-zinc-300">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About us
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How it works
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="hover:text-white transition-colors">
              Case Studies
            </a>
          </nav>

          {/* Social Icons (Instagram, Facebook, X) */}
          <div className="flex items-center gap-5 text-zinc-300">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-orange-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-orange-400 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (formerly Twitter)"
              className="hover:text-orange-400 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom copyright & location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} SalesSite NG Ltd. All rights reserved.</span>
            <span>·</span>
            <span>Victoria Island, Lagos, Nigeria</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
