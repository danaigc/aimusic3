"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  username: string;
  content: string;
  avatar: string;
}

export function TestimonialCard({ name, username, content, avatar }: TestimonialCardProps) {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-white/10">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg">{name}</h3>
            <CheckCircle2 className="w-4 h-4 text-blue-500" />
            <span className="text-xs bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-full">Verified</span>
          </div>
          <p className="text-sm text-muted-foreground">@{username}</p>
        </div>
      </div>
      <p className="text-base leading-relaxed">{content}</p>
    </Card>
  );
}