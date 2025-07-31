"use client";

import type { ReactNode } from "react";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "motion/react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export const AnimatedSection = ({
  children,
  className,
  id,
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
};