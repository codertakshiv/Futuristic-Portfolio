'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Stream {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  duration: number;
  delay: number;
  gradient: string;
}

export default function AnimatedGradientStreams() {
  const [streams, setStreams] = useState<Stream[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const generatedStreams: Stream[] = [
      {
        id: 1,
        x: -20,
        y: 10,
        width: 40,
        height: 60,
        duration: 15,
        delay: 0,
        gradient: 'from-cyan-500/20 via-blue-500/15 to-transparent'
      },
      {
        id: 2,
        x: 70,
        y: -10,
        width: 35,
        height: 50,
        duration: 18,
        delay: 2,
        gradient: 'from-fuchsia-500/20 via-purple-500/15 to-transparent'
      },
      {
        id: 3,
        x: 40,
        y: 60,
        width: 45,
        height: 55,
        duration: 20,
        delay: 4,
        gradient: 'from-violet-500/20 via-indigo-500/15 to-transparent'
      },
      {
        id: 4,
        x: 10,
        y: 40,
        width: 30,
        height: 40,
        duration: 12,
        delay: 1,
        gradient: 'from-emerald-500/20 via-teal-500/15 to-transparent'
      },
      {
        id: 5,
        x: 80,
        y: 30,
        width: 25,
        height: 45,
        duration: 16,
        delay: 3,
        gradient: 'from-rose-500/20 via-pink-500/15 to-transparent'
      }
    ];
    
    setStreams(generatedStreams);
  }, []);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className={`absolute rounded-full bg-gradient-to-br ${stream.gradient} blur-3xl`}
          style={{
            left: `${stream.x}%`,
            top: `${stream.y}%`,
            width: `${stream.width}%`,
            height: `${stream.height}%`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.6, 0.4, 0.3],
          }}
          transition={{
            duration: stream.duration,
            delay: stream.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Additional flowing gradient lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 255, 255, 0.3)" />
            <stop offset="50%" stopColor="rgba(255, 0, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 0, 255, 0.3)" />
            <stop offset="50%" stopColor="rgba(0, 255, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M0,100 Q300,50 600,100 T1200,100"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M0,100 Q300,50 600,100 T1200,100",
              "M0,150 Q300,100 600,150 T1200,150",
              "M0,100 Q300,150 600,100 T1200,100"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.path
          d="M0,400 Q400,350 800,400 T1200,400"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M0,400 Q400,350 800,400 T1200,400",
              "M0,350 Q400,400 800,350 T1200,350",
              "M0,400 Q400,450 800,400 T1200,400"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
}
