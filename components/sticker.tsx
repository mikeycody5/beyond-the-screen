"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Sticker({
  children,
  rotate = -8,
  color = "pink",
  className,
  wobble,
}: {
  children: React.ReactNode;
  rotate?: number;
  color?: "pink" | "green" | "blue" | "orange" | "ink";
  className?: string;
  wobble?: boolean;
}) {
  const bgMap = {
    pink: "bg-pink text-bone",
    green: "bg-green text-ink",
    blue: "bg-blue text-bone",
    orange: "bg-orange text-ink",
    ink: "bg-ink text-bone",
  };
  return (
    <motion.div
      initial={{ scale: 0, rotate: rotate - 20 }}
      whileInView={{ scale: 1, rotate }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ scale: 1.06, rotate: rotate + 4 }}
      animate={
        wobble
          ? { rotate: [rotate - 3, rotate + 3, rotate - 3] }
          : undefined
      }
      style={
        wobble
          ? {
              animationDuration: "5s",
            }
          : undefined
      }
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-2 font-bold uppercase tracking-wide chunky",
        bgMap[color],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
