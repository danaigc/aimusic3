"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  speed?: number;
  className?: string;
}

interface MarqueeContentProps {
  children: React.ReactNode;
  className?: string;
}

export function Marquee({
  children,
  direction = "left",
  pauseOnHover = false,
  speed = 40,
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex gap-4 overflow-hidden",
        className
      )}
      style={{
        maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
      }}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-4",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          direction === "left" ? "animate-[marquee_40s_linear_infinite]" : "animate-[marqueeReverse_40s_linear_infinite]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-4",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          direction === "left" ? "animate-[marquee_40s_linear_infinite]" : "animate-[marqueeReverse_40s_linear_infinite]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
}

export function MarqueeContent({
  children,
  className,
}: MarqueeContentProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {children}
    </div>
  );
}