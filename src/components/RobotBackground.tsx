import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';

export default function RobotBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 bg-ai-black overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white mask-radial pointer-events-none" />
      
      {/* Animated Glow */}
      <motion.div
        style={{
          left: sx,
          top: sy,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute w-[600px] h-[600px] bg-ai-cyan/20 rounded-full blur-[120px] pointer-events-none"
      />
      
      {/* Scanning Line */}
      <motion.div
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-ai-cyan/30 to-transparent pointer-events-none"
      />
    </div>
  );
}
