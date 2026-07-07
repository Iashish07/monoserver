import React from "react";

export interface Platform {
  label: string;
  url: string;
}

interface PlatformTagProps {
  label: string;
  url: string;
}

export function PlatformTag({ label, url }: PlatformTagProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center justify-center
        px-5 py-2.5
        rounded-lg
        border border-[#94A3B8]/40
        bg-[#1E293B]
        text-[#94A3B8]
        text-sm sm:text-base
        font-medium
        whitespace-nowrap
        transition-colors duration-200
        hover:border-[#94A3B8] hover:text-slate-100
      "
    >
      {label}
    </a>
  );
}

interface TrustedBySectionProps {
  platforms?: Platform[];
}

const DEFAULT_PLATFORMS: Platform[] = [
  { label: "Codeforces", url: "https://codeforces.com" },
  { label: "GitHub", url: "https://github.com" },
  { label: "Many more coming soon!", url: "#" },
];

export default function TrustedBySection({
  platforms = DEFAULT_PLATFORMS,
}: TrustedBySectionProps) {
  return (
    <section className="w-full bg-[#0F172A] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[#CBD5E1] text-xl sm:text-2xl font-bold mb-8">
          Trusted by developers using
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {platforms.map((platform) => (
            <PlatformTag
              key={platform.label}
              label={platform.label}
              url={platform.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
