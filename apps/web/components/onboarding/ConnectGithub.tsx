import React from "react";
import { OnboardingCard } from "@/components/onboarding/OnboardingCard";

export default function ConnectGithubStep() {
  return (
    <main className="min-h-screen w-full bg-[#07111F] flex items-center justify-center px-4 py-8">
      <OnboardingCard
        step={1}
        totalSteps={2}
        heading="Connect your GitHub"
        description="We'll pull your commits, repos, and contribution activity automatically."
        actionLabel="Connect GitHub"
        actionHref="#"
      />
    </main>
  );
}
