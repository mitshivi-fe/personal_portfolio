"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function MotionSection({
  children,
  className = "",
  delay = 0,
}: MotionSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

