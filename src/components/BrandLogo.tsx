import React from 'react';

interface BrandLogoProps {
  className?: string;
  isDark?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', isDark = false }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* 4-petal geometric emblem matching uploaded screenshot */}
      <div className="relative w-7 h-7 grid grid-cols-2 gap-1 p-0.5">
        <div className={`w-2.5 h-2.5 rounded-tl-full rounded-br-sm ${isDark ? 'bg-white' : 'bg-[#18181b]'}`} />
        <div className={`w-2.5 h-2.5 rounded-tr-full rounded-bl-sm ${isDark ? 'bg-orange-400' : 'bg-orange-500'}`} />
        <div className={`w-2.5 h-2.5 rounded-bl-full rounded-tr-sm ${isDark ? 'bg-orange-500' : 'bg-orange-600'}`} />
        <div className={`w-2.5 h-2.5 rounded-br-full rounded-tl-sm ${isDark ? 'bg-zinc-300' : 'bg-zinc-700'}`} />
      </div>
      <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
        SalesSite<span className="text-orange-500 font-extrabold ml-0.5">NG</span>
      </span>
    </div>
  );
};
