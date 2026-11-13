import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const InteractiveCursorGlow: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(-500, springConfig);
  const cursorY = useSpring(-500, springConfig);

  useEffect(() => {
    setMounted(true);
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth > 1024 && !('ontouchstart' in window));
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorX, cursorY]);

  if (!mounted || !isDesktop) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2"
      style={{
        x: cursorX,
        y: cursorY,
        background: 'radial-gradient(circle, rgba(98, 133, 255, 0.07) 0%, rgba(0, 240, 255, 0.03) 40%, transparent 70%)',
        filter: 'blur(30px)',
      }}
    />
  );
};

