import { cn } from "@/lib/utils";

// Precomputed deterministic star polygon points (12-point burst)
const STAR_12 =
  "50.00,0.00 58.28,19.09 75.00,6.70 72.63,27.37 92.30,17.50 81.41,35.00 99.62,32.10 83.30,45.00 99.62,57.90 81.41,55.00 92.30,72.50 72.63,62.63 75.00,83.30 58.28,70.91 50.00,90.00 41.72,70.91 25.00,83.30 27.37,62.63 7.70,72.50 18.59,55.00 0.38,57.90 16.70,45.00 0.38,32.10 18.59,35.00 7.70,17.50 27.37,27.37 25.00,6.70 41.72,19.09";

// Precomputed deterministic 16-point burst
const STAR_16 =
  "50.00,0.00 56.21,19.13 69.13,3.84 69.86,24.15 86.11,11.97 81.93,31.86 96.16,25.00 86.96,43.13 99.99,43.79 84.13,57.65 96.16,75.00 76.95,68.27 86.11,88.03 65.45,77.04 69.13,96.16 50.00,82.50 30.87,96.16 34.55,77.04 13.89,88.03 23.05,68.27 3.84,75.00 15.87,57.65 0.01,43.79 13.04,43.13 3.84,25.00 18.07,31.86 13.89,11.97 30.14,24.15 30.87,3.84 43.79,19.13";

export function StarBurst({
  className,
  fill = "currentColor",
  spin,
  points = 12,
}: {
  className?: string;
  fill?: string;
  spin?: boolean;
  points?: number;
}) {
  const pts = points >= 16 ? STAR_16 : STAR_12;
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn(spin && "animate-[spin_18s_linear_infinite]", className)}
      aria-hidden
    >
      <polygon points={pts} fill={fill} />
    </svg>
  );
}

export function FiveStar({
  className,
  fill = "currentColor",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2 L15 9 L22 10 L17 15 L18 22 L12 18 L6 22 L7 15 L2 10 L9 9 Z"
        fill={fill}
      />
    </svg>
  );
}
