import React from "react";
import type { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "wide" | "narrow";
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "wide" | "narrow";
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = "narrow",
}: FeatureCardProps) {
  return (
    <div
      className={`
        w-[300px]
        ${variant === "wide" ? "min-h-[193px]" : "min-h-[178px]"}
        bg-[#0F172A]
        rounded-2xl
        p-6
        flex flex-col
        items-start
      `}
    >
      <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-[#06B6D4]" />
      </div>

      <h3 className="text-white text-base font-semibold mb-2">{title}</h3>

      <p className="text-[#94A3B8] text-sm leading-relaxed">{description}</p>
    </div>
  );
}
