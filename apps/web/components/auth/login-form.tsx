'use client';

import * as React from 'react';
import Link from 'next/link';
import { Input, Label, Checkbox } from '@/components/ui';
import { cn } from '@bamblu/utils';
import { Loader2 } from 'lucide-react';

interface LoginFormProps {
  className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    // TODO: Connect to credentials-based authentication provider
    // For now, prevent the form from doing anything destructive.
    // The primary auth flow uses GitHub OAuth via the social buttons above.
    setTimeout(() => setIsLoading(false), 1500);
  }

  return (
    <form
      id="login-form"
      onSubmit={handleSubmit}
      className={cn('space-y-5', className)}
      noValidate
    >
      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="login-email" className="text-sm font-medium text-slate-300">
          Email
        </Label>
        <Input
          id="login-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          className="h-11 rounded-lg border-slate-700 bg-slate-800/60 text-slate-100 placeholder:text-slate-500 focus-visible:ring-cyan-500"
        />
      </div>

      {/* Password */}
      <div className="space-y-2">
        <Label htmlFor="login-password" className="text-sm font-medium text-slate-300">
          Password
        </Label>
        <Input
          id="login-password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          required
          className="h-11 rounded-lg border-slate-700 bg-slate-800/60 text-slate-100 placeholder:text-slate-500 focus-visible:ring-cyan-500"
        />
      </div>

      {/* Remember / Forgot */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember-me"
            className="border-slate-600 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
          />
          <Label
            htmlFor="remember-me"
            className="text-sm font-normal text-slate-400 cursor-pointer"
          >
            Remember me
          </Label>
        </div>
        <Link
          href="/forgot-password"
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Forgot password?
        </Link>
      </div>

      {/* Submit */}
      <button
        id="login-submit-btn"
        type="submit"
        disabled={isLoading}
        className={cn(
          'flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-900 transition-colors',
          'hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 active:bg-cyan-600',
          'disabled:pointer-events-none disabled:opacity-60',
        )}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Signing in…
          </>
        ) : (
          'Log in'
        )}
      </button>
    </form>
  );
}
