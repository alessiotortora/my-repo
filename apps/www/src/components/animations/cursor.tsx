"use client";
import { motion, useSpring } from "motion/react";

export default function MotionValueBasics() {
  const SPRING = {
    mass: 0.1,
  };

  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);
  const opacity = useSpring(0);

  return (
    <div className="w-full h-72 overflow-hidden border border-muted-foreground/20 rounded-md">
      <div
        onPointerMove={(e) => {
          const bounds = e.currentTarget.getBoundingClientRect();
          x.set(e.clientX - bounds.left - 24);
          y.set(e.clientY - bounds.top - 24);
        }}
        onPointerEnter={() => opacity.set(1)}
        onPointerLeave={() => opacity.set(0)}
        className="w-full h-full overflow-hidden"
      >
        <motion.div style={{ x, y, opacity }} className="w-10 h-10 bg-red-500 rounded-full" />
      </div>
    </div>
  );
}
