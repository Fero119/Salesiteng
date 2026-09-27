import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  onOpenLeadModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLeadModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090b] text-white pt-24 pb-12 overflow-hidden border-t border-zinc-900 relative">
      {/* Subtle background glow to give it that premium dark aesthetic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-12 sm:gap-16 relative z-10">
        
        {/* Top Row: Logo & Nav */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-4 w-full justify-center"
        >
          {/* Logo Pill */}
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-full px-6 py-3.5 shadow-lg flex items-center justify-center">
            <BrandLogo isDark={true} />
          </div>

          {/* Nav Pill */}
          <nav className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-full px-8 py-4 shadow-lg flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-medium text-zinc-300">
            <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
            <a href="#services" className="hover:text-white transition-colors">Product</a>
            <a href="#problem" className="hover:text-white transition-colors">Solutions</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-white transition-colors">About</a>
          </nav>
        </motion.div>

        {/* Middle Row: Giant CTA Pill */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
          className="w-full max-w-5xl"
        >
          <a 
            href="#mockup"
            onClick={(e) => {
               e.preventDefault();
               if (onOpenLeadModal) {
                 onOpenLeadModal();
               } else {
                 scrollToTop();
               }
            }}
            className="block w-full bg-[#121214] hover:bg-[#18181b] border border-zinc-800 hover:border-zinc-700 rounded-[40px] md:rounded-[70px] py-14 md:py-24 px-8 text-center transition-all duration-500 group relative overflow-hidden shadow-2xl cursor-pointer"
          >
            {/* Hover subtle glow inside the giant button */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="flex items-center justify-center gap-4 sm:gap-10 relative z-10">
              {/* Left pulsing dot */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.8)]"
              />
              
              <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-bold tracking-tight text-white group-hover:scale-[1.02] transition-transform duration-500 text-center leading-none px-4">
                Start scaling <br className="md:hidden" /> now
              </h2>
              
              {/* Right pulsing dot */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.8)]"
              />
            </div>
          </a>
        </motion.div>

        {/* Bottom Row: Socials & Copyright */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-10 w-full mt-4"
        >
          {/* Social Pills */}
          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
              { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
              { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 md:w-14 md:h-14 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 shadow-sm"
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              );
            })}
          </div>

          {/* Trust Signals & Legal Links */}
          <div className="flex flex-col sm:flex-row items-center gap-6 my-2">

            <div className="flex items-center flex-wrap justify-center gap-4 text-[11px] sm:text-xs text-zinc-500 font-medium">
              <a href="#terms" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
              <a href="#cancellation" className="hover:text-zinc-300 transition-colors">Refund & Cancellation Policy</a>
              <span className="text-zinc-700 hidden sm:inline">|</span>
              <span className="text-zinc-400 font-mono">RC 1948234</span>
            </div>
          </div>

          <div className="text-zinc-600 text-xs md:text-sm flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <span>© {new Date().getFullYear()} SalesSite NG Ltd.</span>
            <span className="hidden sm:inline">|</span>
            <button onClick={scrollToTop} className="hover:text-white transition-colors uppercase tracking-wider text-[10px] md:text-xs font-bold">
              Back to top
            </button>
          </div>
        </motion.div>
        
      </div>
    </footer>
  );
};
