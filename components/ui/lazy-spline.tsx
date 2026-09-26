import React, { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

interface LazySplineProps {
  scene: string;
  className?: string;
}

export const LazySpline: React.FC<LazySplineProps> = ({ scene, className = '' }) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent">
          {/* Optional loader skeleton */}
        </div>
      )}
      {isInView && (
        <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} w-full h-full`}>
          <Spline 
            scene={scene} 
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      )}
    </div>
  );
};
