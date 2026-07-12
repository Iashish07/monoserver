

export function Navbar() {
  return (
    <header
      id="navbar"
      className="sticky top-0 z-30 flex items-center justify-between px-8 py-5 h-[78px] bg-[#0a0e1a] border-b border-white/5"
    >
      <Link href="/" className="text-xl font-bold tracking-wide text-white">
        BAMBLU
      </Link>

      <nav className="flex items-center gap-10">
        <Link
          href="#features"
          className="text-xs font-medium tracking-wider text-gray-400 hover:text-white transition-colors"
        >
          FEATURES
        </Link>
        <Link
          href="#analytics"
          className="text-xs font-medium tracking-wider text-gray-400 hover:text-white transition-colors"
        >
          ANALYTICS
        </Link>
        <Link
          href="#integrations"
          className="text-xs font-medium tracking-wider text-gray-400 hover:text-white transition-colors"
        >
          INTEGRATIONS
        </Link>
        <Link
          href="#how-it-works"
          className="text-xs font-medium tracking-wider text-gray-400 hover:text-white transition-colors"
        >
          HOW IT WORKS
        </Link>
        <Link
          href="#about"
          className="text-xs font-medium tracking-wider text-gray-400 hover:text-white transition-colors"
        >
          ABOUT
        </Link>
      </nav>


        >
          Get Started Free
        </Link>
      </div>
    </header>
  );
}