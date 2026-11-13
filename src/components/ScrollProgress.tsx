import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowBackToTop(latest > 350);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPercentage(Math.min(100, Math.round((latest / totalHeight) * 100)));
      }
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Top Fixed Scroll Progress Bar with Glowing Head */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-transparent pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-[#6285FF] via-[#8CA6FF] to-[#00F0FF] origin-left shadow-[0_0_12px_rgba(98,133,255,0.8)]"
          style={{ scaleX }}
        />
      </div>

      {/* Floating Bottom-Right Back-To-Top Circular Pill with Progress Ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0.8,
          y: showBackToTop ? 0 : 20
        }}
        transition={{ duration: 0.25 }}
        className={`fixed bottom-6 right-6 z-40 ${showBackToTop ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <button
          onClick={scrollToTop}
          className="group relative w-12 h-12 rounded-full bg-[#151820]/90 backdrop-blur-xl border border-white/15 hover:border-[#6285FF] shadow-xl hover:shadow-[0_0_20px_rgba(98,133,255,0.4)] flex items-center justify-center transition-all duration-300 active:scale-95"
          aria-label="Scroll back to top"
        >
          {/* Circular SVG Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r="20"
              className="text-white/10 stroke-current"
              strokeWidth="2.5"
              fill="none"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              className="text-[#6285FF] stroke-current transition-all duration-150"
              strokeWidth="2.5"
              strokeDasharray={125.6}
              strokeDashoffset={125.6 - (125.6 * scrollPercentage) / 100}
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Icon and percentage on hover */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <ArrowUp className="w-4 h-4 text-white group-hover:text-[#00F0FF] group-hover:-translate-y-0.5 transition-all" />
          </div>

          {/* Tooltip on hover */}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-[#101218] border border-white/10 text-[10px] font-mono font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
            {scrollPercentage}%
          </span>
        </button>
      </motion.div>
    </>
  );
};

