"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true); 
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      setMousePosition({ x, y });
      setIsVisible(true);

      const id = Date.now() + Math.random();

      setParticles((prev) => [
        ...prev,
        {
          id,
          x,
          y,
        },
      ]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 700);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-40 rounded-full"
            initial={{
              x: particle.x - 4,
              y: particle.y - 4,
              scale: 1,
              opacity: 0.8,
            }}
            animate={{
              scale: 0,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            style={{
              width: 16,
              height: 16,
              background: "#f5f5f0",
              boxShadow: "0 0 12px rgba(245,245,240,0.8)",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 7.5,
          y: mousePosition.y - 7.5,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        
      </motion.div>
    </>
  );
}
