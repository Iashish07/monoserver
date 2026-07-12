import React from "react";

export interface OnboardingCardProps {
  step: number; // current step number eg 1 of 2
  totalSteps: number; //total steps, 2 for now, more if we add other platform for onboarding
  heading: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}

export function OnboardingCard({
  step,
  totalSteps,
  heading,
  description,
  actionLabel,
  actionHref,
}: OnboardingCardProps) {
  return (
    <div className="w-full max-w-[672px] bg-[#0F172A] rounded-2xl px-8 py-10 sm:px-12 flex flex-col items-center text-center gap-3">
      <p className="text-[#06B6D4] text-base font-medium">
        Step {step} of {totalSteps}
      </p>

      <h1 className="text-white text-2xl font-bold max-w-[248px] sm:max-w-none">
        {heading}
      </h1>

      <p className="text-[#94A3B8] text-sm font-normal max-w-md">
        {description}
      </p>

      <a
        href={actionHref}
        className="mt-4 w-full max-w-[360px] h-12 rounded-lg bg-[#1E293B] border border-[#334155] text-white text-base font-semibold flex items-center justify-center transition-colors duration-200 hover:bg-[#25324a]"
      >
        {actionLabel}
      </a>
    </div>
  );
}

export default OnboardingCard;
