import React from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "#" },
      { label: "Support", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0F172A] min-h-[292px] px-4 py-12 flex flex-col">
      <div className="max-w-[1440px] w-full mx-auto flex-1 flex flex-col">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between sm:gap-6">
          {/* Brand */}
          <div>
            <p className="text-white text-lg font-bold">Bamblu</p>
            <p className="text-[#94A3B8] text-sm mt-2 max-w-xs">
              Track Your Coding. Know Your Skill. Grow Your Career.
            </p>
          </div>

          {/* Link groups */}
          <div className="flex flex-wrap gap-10 sm:gap-16">
            {FOOTER_LINK_GROUPS.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <p className="text-white text-sm font-semibold mb-3">
                  {group.title}
                </p>
                <ul className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#94A3B8] text-sm hover:text-slate-200 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-auto pt-10">
          <p className="text-[#94A3B8] text-xs">
            © {year} Bamblu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
