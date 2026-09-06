"use client";

import { useActionState } from "react";
import { resetPasswordAction } from "@/app/actions/passwordReset";

export default function ResetPasswordForm({ token }: { token: string }) {
  const [state, formAction, isPending] = useActionState(resetPasswordAction, null);

  return (
    <main>
      <h1>Create New Password</h1>

      {state?.error && <p role="alert">{state.error}</p>}

      <form action={formAction}>
        <input type="hidden" name="token" value={token} />

        <label htmlFor="newPassword">New Password</label>
        <input id="newPassword" name="newPassword" type="password" required minLength={8} disabled={isPending} />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" name="confirmPassword" type="password" required minLength={8} disabled={isPending} />

        <button type="submit" disabled={isPending}>
          {isPending ? "Saving..." : "Reset Password"}
        </button>
      </form>
    </main>
  );
}