"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function MagneticButton({
  children,
  href,
  color = "pink",
  className,
  size = "lg",
}: {
  children: React.ReactNode;
  href: string;
  color?: "pink" | "green" | "blue" | "orange" | "ink";
  className?: string;
  size?: "md" | "lg";
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - r.left - r.width / 2) * 0.25;
    const y = (e.clientY - r.top - r.height / 2) * 0.25;
    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const colorMap = {
    pink: "bg-pink text-bone hover:bg-pink-deep",
    green: "bg-green text-ink hover:bg-green-deep",
    blue: "bg-blue text-bone hover:bg-blue-deep",
    orange: "bg-orange text-ink hover:bg-orange-deep",
    ink: "bg-ink text-bone hover:bg-pink",
  };

  const sizes = {
    md: "px-7 py-3 text-base",
    lg: "px-10 py-5 text-lg md:text-xl",
  };

  return (
    <motion.div
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.5 }}
      className="inline-block"
    >
      <Link
        ref={ref}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full font-bold uppercase tracking-wide chunky transition-colors",
          colorMap[color],
          sizes[size],
          className
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
