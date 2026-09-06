import "server-only";
import { Resend } from "resend";

let resendClient: Resend | null = null;

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured in the environment.");
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

const EMAIL_FROM = process.env.EMAIL_FROM || "ArtVault <onboarding@resend.dev>";

export async function sendPasswordResetEmail(to: string, resetUrl: string): Promise<void> {
  const resend = getResendClient();

  await resend.emails.send({
    from: EMAIL_FROM,
    to,
    subject: "Password Reset - ArtVault",
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
        <h2>Reset your password</h2>
        <p>We received a request to reset the password for your ArtVault account.</p>
        <p>If this was you, click the button below. This link expires in 30 minutes.</p>
        <p style="text-align: center; margin: 32px 0;">
          <a href="${resetUrl}" style="background:#212b46;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;">
            Reset password
          </a>
        </p>
        <p style="color:#666;font-size:13px;">If you didn't request this, you can safely ignore this email.</p>
      </div>
    `,
  });
}