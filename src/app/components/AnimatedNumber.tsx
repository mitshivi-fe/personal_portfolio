"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

function AnimatedNumber({
  value,
  suffix = "",
  duration = 2000,
  className = "",
}: AnimatedNumberProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const startTime = Date.now();
            const startValue = 0;

            const animate = () => {
              const currentTime = Date.now();
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Easing function for smooth animation (easeOutCubic)
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const currentCount = Math.floor(startValue + (value - startValue) * easeProgress);

              setCount(currentCount);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(value);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value, duration, hasAnimated, isMounted]);

  // Show the final value during SSR and initial render
  if (!isMounted) {
    return (
      <span ref={elementRef} className={className}>
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={elementRef} className={className}>
      {count}
      {suffix}
    </span>
  );
}

export default AnimatedNumber;
