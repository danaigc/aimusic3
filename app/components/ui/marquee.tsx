"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: number;
}

interface MarqueeContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 20,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden",
        pauseOnHover && "[--pause-on-hover:paused] hover:[--play-state:paused]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 gap-4",
          direction === "left" ? "animate-[marquee_var(--duration)_linear_infinite]" : "animate-[marqueeReverse_var(--duration)_linear_infinite]",
          "motion-safe:animate-[marquee_var(--duration)_linear_infinite] [--play-state:running] group-hover:[--play-state:var(--pause-on-hover)]"
        )}
        style={
          {
            "--duration": `${speed}s`,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </div>
  );
}

export function MarqueeContent({
  className,
  ...props
}: MarqueeContentProps) {
  return (
    <div
      className={cn("flex min-w-full shrink-0 items-center justify-around gap-4", className)}
      {...props}
    />
  );
}