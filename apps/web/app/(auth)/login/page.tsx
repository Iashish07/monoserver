import type { Metadata } from 'next';
import { AuthCard } from '@/components/auth';

export const metadata: Metadata = { title: 'Login' };

interface LoginPageProps {
  searchParams: { callbackUrl?: string; error?: string };
}

export default function LoginPage({ searchParams }: LoginPageProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-[#0b1120] px-6 py-12 sm:px-8 lg:px-16">
      <div className="flex w-full max-w-[1200px] flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
        {/* ─── Left: Brand & Product Message ──────────────────────────── */}
        <div className="flex flex-1 flex-col justify-center w-full">
          <div>
            {/* Branding */}
            <p className="mb-24 text-4xl font-bold text-white lg:mb-24">Bamblu</p>

            {/* Hero heading */}
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
              Track.
              <br />
              Analyze.
              <br />
              Grow.
            </h1>

            {/* Supporting text */}
            <p className="mt-8 max-w-md text-lg text-slate-400 sm:text-xl">
              All your coding progress in one beautiful dashboard.
            </p>
          </div>
        </div>

        {/* ─── Right: Auth Card ───────────────────────────────────────── */}
        <div className="flex flex-1 w-full justify-center">
          <AuthCard
            error={searchParams.error}
            callbackUrl={searchParams.callbackUrl}
            className="h-full max-w-none"
          />
        </div>
      </div>
    </main>
  );
}
