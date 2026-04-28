import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  speed = "normal",
  reverse,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: "normal" | "slow";
  reverse?: boolean;
}) {
  const animation = speed === "slow" ? "animate-[marquee_60s_linear_infinite]" : "animate-[marquee_28s_linear_infinite]";
  return (
    <div className={cn("marquee-mask flex w-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex shrink-0 items-center gap-12 whitespace-nowrap pr-12",
          animation,
          reverse && "[animation-direction:reverse]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
