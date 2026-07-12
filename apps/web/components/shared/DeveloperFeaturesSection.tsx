import React from "react";
import { BarChart3, Target, LayoutGrid, TrendingUp } from "lucide-react";
import { FeatureCard, type Feature } from "./FeatureCard";

const FEATURES: Feature[] = [
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Get detailed insights into your coding patterns, strengths, and areas for improvement.",
    variant: "wide",
  },
  {
    icon: Target,
    title: "Skill Assessment",
    description:
      "Benchmark your skills against peers and identify growth opportunities.",
    variant: "narrow",
  },
  {
    icon: LayoutGrid,
    title: "Coding Heatmaps",
    description:
      "Visualize your daily coding activity and build consistent practice habits.",
    variant: "narrow",
  },
  {
    icon: TrendingUp,
    title: "Career Insights",
    description:
      "Get personalized roadmaps and recommendations to accelerate your career growth.",
    variant: "wide",
  },
];

export default function DeveloperFeaturesSection() {
  return (
    <section className="w-full bg-[#0F172A] py-16 px-4">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center">
        <h2 className="text-white text-3xl sm:text-4xl font-bold max-w-3xl">
          Everything you need to grow as a developer
        </h2>

        <p className="text-[#94A3B8] text-base sm:text-lg mt-4 max-w-2xl">
          Powerful tools and insights to help you learn, practice, and get
          better every day.
        </p>

        <div className="mt-10 flex flex-wrap items-start justify-center gap-5 w-full">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variant={feature.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
