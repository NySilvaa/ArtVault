"use server";

import { redirect } from "next/navigation";
import z from "zod";
import { graphqlRequest } from "../api/graphql/client";

const emailSchema = z.object({ email: z.email("E-mail inválido.") });

const REQUEST_RESET_MUTATION = `
  mutation RequestPasswordReset($email: String!) {
    requestPasswordReset(email: $email)
  }
`;

export async function requestPasswordResetAction(prevState: unknown, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const result = emailSchema.safeParse(data);

  if (!result.success) {
    return { error: "Informe um e-mail válido." };
  }

  const response = await graphqlRequest<{ requestPasswordReset: boolean }>(
    REQUEST_RESET_MUTATION,
    { email: result.data.email }
  );

  if (!response.success) {
    console.error("Erro ao solicitar redefinição:", response.error);
  }

  return {
    success: true,
    message: "Se esse e-mail estiver cadastrado, você receberá um link para redefinir sua senha.",
  };
}

const resetPasswordSchema = z
  .object({
    token: z.string().min(1),
    newPassword: z.string().min(8, "Senha muito curta. Mínimo 8 caracteres."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

const RESET_PASSWORD_MUTATION = `
  mutation ResetPassword($token: String!, $newPassword: String!) {
    resetPassword(token: $token, newPassword: $newPassword)
  }
`;

export async function resetPasswordAction(prevState: unknown, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const result = resetPasswordSchema.safeParse(data);

  if (!result.success) {
    return { error: result.error.issues[0]?.message || "Dados inválidos." };
  }

  const response = await graphqlRequest<{ resetPassword: boolean }>(
    RESET_PASSWORD_MUTATION,
    { token: result.data.token, newPassword: result.data.newPassword }
  );

  if (!response.success) {
    return { error: response.error };
  }

  redirect("/LogIn");
}