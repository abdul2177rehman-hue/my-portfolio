import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { IntroScene3D } from './IntroScene3D';

export const LoadingIntro = ({ onFinished }) => {
  const [progressTime, setProgressTime] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(null);

  const TOTAL_DURATION = 14.5; // seconds

  useEffect(() => {
    const loop = (now) => {
      if (!startTimeRef.current) startTimeRef.current = now;
      const elapsed = (now - startTimeRef.current) / 1000;

      setProgressTime(elapsed);

      if (elapsed >= TOTAL_DURATION) {
        setIsFadingOut(true);
        setTimeout(() => {
          if (onFinished) onFinished();
        }, 800);
      } else {
        animationFrameRef.current = requestAnimationFrame(loop);
      }
    };

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [onFinished]);

  const percent = Math.min(100, Math.floor((progressTime / TOTAL_DURATION) * 100));

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFadingOut ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 bg-[#07090e] text-slate-100 flex flex-col justify-end select-none overflow-hidden"
    >
      {/* 3D Canvas Viewport */}
      <div className="absolute inset-0 z-0">
        <Canvas
          shadows
          camera={{ position: [4.8, 3.8, 5.2], fov: 45 }}
          gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
          className="w-full h-full"
        >
          <IntroScene3D
            progress={progressTime}
            onComplete={() => {
              setIsFadingOut(true);
              setTimeout(() => {
                if (onFinished) onFinished();
              }, 600);
            }}
          />
        </Canvas>
      </div>

      {/* Cinematic Bottom HUD Overlay — Only Loading Indicator Text */}
      <div className="relative z-10 w-full bg-gradient-to-t from-black/95 via-black/70 to-transparent p-6 md:p-10 pointer-events-none flex flex-col gap-4">
        {/* Progress Timeline Indicator */}
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="text-cyan-400/80 font-mono tracking-wider">Loading...</span>
            <span className="text-cyan-400 font-bold">{percent}%</span>
          </div>

          {/* Glowing Track */}
          <div className="relative w-full h-2 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50 backdrop-blur-md">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 rounded-full"
              style={{ width: `${percent}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
