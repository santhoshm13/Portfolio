import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on devices that have a pointer (mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest('a') ||
        target?.closest('button') ||
        target?.closest('input') ||
        target?.closest('textarea') ||
        target?.closest('[role="button"]') ||
        target?.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (shouldReduceMotion || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#D7E2EA] rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      />
      {/* Outer follow circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-[#D7E2EA]/60 hidden md:block"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 14),
          y: mousePosition.y - (isHovered ? 24 : 14),
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          backgroundColor: isHovered ? 'rgba(215, 226, 234, 0.15)' : 'rgba(215, 226, 234, 0)',
          borderColor: isHovered ? 'rgba(215, 226, 234, 0.9)' : 'rgba(215, 226, 234, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      />
    </>
  );
};
