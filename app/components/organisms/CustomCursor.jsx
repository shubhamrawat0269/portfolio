"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const TRAIL_COUNT = 12;

function TrailNode({ sourceX, sourceY, size, opacity, isHead = false }) {
  const x = useSpring(sourceX, {
    stiffness: isHead ? 500 : 220,
    damping: isHead ? 28 : 35,
    mass: isHead ? 0.3 : 0.8,
  });

  const y = useSpring(sourceY, {
    stiffness: isHead ? 500 : 220,
    damping: isHead ? 28 : 35,
    mass: isHead ? 0.3 : 0.8,
  });

  return (
    <motion.div
      className="fixed pointer-events-none rounded-full"
      style={{
        x,
        y,

        width: size,
        height: size,

        marginLeft: -size / 2,
        marginTop: -size / 2,

        zIndex: isHead ? 50 : 40,

        opacity,

        background: isHead ? "#f5f5f0" : "rgba(245,245,240,0.9)",

        boxShadow: isHead
          ? "0 0 18px rgba(245,245,240,0.95)"
          : `0 0 ${size}px rgba(245,245,240,0.5)`,
      }}
    />
  );
}

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  const nodes = [];

  let prevX = mouseX;
  let prevY = mouseY;

  // Head
  nodes.push(
    <TrailNode
      key="head"
      sourceX={prevX}
      sourceY={prevY}
      size={14}
      opacity={1}
      isHead
    />,
  );

  // Trail
  for (let i = 0; i < TRAIL_COUNT; i++) {
    const progress = 1 - i / TRAIL_COUNT;

    nodes.push(
      <TrailFollower
        key={i}
        sourceX={prevX}
        sourceY={prevY}
        progress={progress}
      />,
    );
  }

  return <>{nodes}</>;
}

function TrailFollower({ sourceX, sourceY, progress }) {
  const x = useSpring(sourceX, {
    stiffness: 140 * progress + 40,
    damping: 32,
    mass: 1.2 - progress * 0.5,
  });

  const y = useSpring(sourceY, {
    stiffness: 140 * progress + 40,
    damping: 32,
    mass: 1.2 - progress * 0.5,
  });

  const size = 10 * progress;

  return (
    <motion.div
      className="fixed pointer-events-none rounded-full z-40"
      style={{
        x,
        y,

        width: size,
        height: size,

        marginLeft: -size / 2,
        marginTop: -size / 2,

        opacity: progress * 0.45,

        background:
          "radial-gradient(circle, rgba(245,245,240,1) 0%, rgba(245,245,240,0.4) 70%, transparent 100%)",

        filter: `blur(${(1 - progress) * 2}px)`,
      }}
    />
  );
}
