'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface HolographicIconProps {
  icon: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

const HolographicIcon: React.FC<HolographicIconProps> = ({ icon, x, y, delay, duration }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        mouseX.set((e.clientX - centerX) * 0.02);
        mouseY.set((e.clientY - centerY) * 0.02);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.div
        className="relative"
        animate={{
          x: springX,
          y: springY,
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          rotate: {
            duration,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* Holographic glow effect */}
        <div className="absolute inset-0 blur-xl">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-400/30 via-fuchsia-500/30 to-violet-400/30 animate-pulse" />
        </div>
        
        {/* Icon container */}
        <motion.div
          className="relative h-12 w-12 rounded-full border border-cyan-400/30 bg-black/40 backdrop-blur-sm flex items-center justify-center"
          whileHover={{
            scale: 1.2,
            borderColor: 'rgba(0, 255, 255, 0.6)',
            backgroundColor: 'rgba(0, 255, 255, 0.1)',
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
            {icon}
          </span>
        </motion.div>

        {/* Scanning line effect */}
        <motion.div
          className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{
            y: ['0%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default function FloatingHolographicIcons() {
  const icons = [
    { icon: '⚡', x: 10, y: 20, delay: 0.5, duration: 4 },
    { icon: '🔮', x: 85, y: 15, delay: 1, duration: 5 },
    { icon: '💎', x: 15, y: 70, delay: 1.5, duration: 6 },
    { icon: '🌟', x: 80, y: 75, delay: 2, duration: 4.5 },
    { icon: '🚀', x: 50, y: 10, delay: 2.5, duration: 5.5 },
    { icon: '⚙️', x: 25, y: 45, delay: 3, duration: 7 },
    { icon: '🎯', x: 70, y: 50, delay: 3.5, duration: 6.5 },
    { icon: '💫', x: 45, y: 85, delay: 4, duration: 5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map((icon, index) => (
        <HolographicIcon key={index} {...icon} />
      ))}
    </div>
  );
}
