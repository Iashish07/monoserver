/**
 * lib/email.ts
 *
 * Email utility for sending transactional emails.
 * Currently uses console logging in development.
 *
 * TODO: Replace with a real email provider (Resend, SendGrid, AWS SES)
 * for production use.
 */

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

/**
 * Send an email. In development, logs to console instead.
 * Replace with a real provider for production.
 */
export async function sendEmail({ to, subject, html }: SendEmailOptions): Promise<void> {
  if (process.env.NODE_ENV === 'development' || !process.env.EMAIL_PROVIDER_API_KEY) {
    console.log('\n' + '='.repeat(60));
    console.log('📧 EMAIL (dev mode — not actually sent)');
    console.log('='.repeat(60));
    console.log(`To:      ${to}`);
    console.log(`Subject: ${subject}`);
    console.log('Body:');
    // Strip HTML tags for console readability
    console.log(html.replace(/<[^>]*>/g, ''));
    console.log('='.repeat(60) + '\n');
    return;
  }

  // TODO: Production email implementation
  // Example with Resend:
  //
  // const { Resend } = await import('resend');
  // const resend = new Resend(process.env.EMAIL_PROVIDER_API_KEY);
  // await resend.emails.send({
  //   from: 'Bamblu <noreply@bamblu.dev>',
  //   to,
  //   subject,
  //   html,
  // });

  throw new Error('Email provider not configured. Set EMAIL_PROVIDER_API_KEY.');
}

/**
 * Generate the password reset email HTML.
 */
export function buildPasswordResetEmail(resetUrl: string): {
  subject: string;
  html: string;
} {
  return {
    subject: 'Reset your Bamblu password',
    html: `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 480px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #f8fafc; font-size: 20px;">Reset your password</h2>
        <p style="color: #94a3b8; font-size: 14px; line-height: 1.6;">
          We received a request to reset your Bamblu account password.
          Click the button below to set a new password. This link expires in 1 hour.
        </p>
        <a
          href="${resetUrl}"
          style="display: inline-block; background: #22d3ee; color: #0f172a; font-weight: 600; font-size: 14px; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin: 16px 0;"
        >
          Reset Password
        </a>
        <p style="color: #64748b; font-size: 12px; line-height: 1.5;">
          If you didn't request this, you can safely ignore this email.
          Your password will remain unchanged.
        </p>
        <p style="color: #64748b; font-size: 12px;">
          Or copy this link: ${resetUrl}
        </p>
      </div>
    `,
  };
}
