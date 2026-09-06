import { Resolver, Mutation, Arg } from "type-graphql";
import { GraphQLError } from "graphql";
import { ObjectId } from "mongodb";
import bcrypt from "bcryptjs";
import { getMongoClient } from "@/libs/Database";
import { createPasswordResetToken, consumePasswordResetToken } from "@/libs/resetPw/pwResetToken";
import { checkPasswordResetRateLimit } from "@/libs/resetPw/resetRateLimit";
import { sendPasswordResetEmail } from "@/libs/resetPw/sendPwResetEmail";
import { graphqlError } from "../errors";

const MIN_PASSWORD_LENGTH = 8;

@Resolver()
export class PasswordResetResolver {
    @Mutation(() => Boolean)
    async requestPasswordReset(@Arg("email") emailInput: string): Promise<boolean> {
        const email = emailInput.trim().toLowerCase();

        const withinLimit = await checkPasswordResetRateLimit(email);
        if (!withinLimit) {
            throw graphqlError("Muitas solicitações. Tente novamente mais tarde.", "RATE_LIMITED", 429);
        }

        try {
            const client = await getMongoClient();
            const db = client.db("artVault");
            const user = await db.collection("users").findOne({ email });

            if (!user) return true;

            const token = await createPasswordResetToken(user._id.toString());
            const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/ResetPassword/${token}`;

            await sendPasswordResetEmail(email, resetUrl);
            return true;
        } catch (error) {
            console.error("Erro ao solicitar redefinição de senha:", error);
            return true;
        }
    }

    @Mutation(() => Boolean)
    async resetPassword(
        @Arg("token") token: string,
        @Arg("newPassword") newPassword: string
    ): Promise<boolean> {
        if (!newPassword || newPassword.length < MIN_PASSWORD_LENGTH) {
            throw graphqlError(`Senha muito curta. Mínimo ${MIN_PASSWORD_LENGTH} caracteres.`, "BAD_USER_INPUT", 400);
        }

        const userId = await consumePasswordResetToken(token);
        if (!userId) {
            throw graphqlError("Link inválido ou expirado.", "BAD_USER_INPUT", 400);
        }

        try {
            const client = await getMongoClient();
            const db = client.db("artVault");
            const hashedPassword = await bcrypt.hash(newPassword, 10);

            const result = await db.collection("users").findOneAndUpdate(
                { _id: new ObjectId(userId) },
                { $set: { password: hashedPassword } }
            );

            if (!result) {
                throw graphqlError("Usuário não encontrado.", "NOT_FOUND", 404);
            }

            return true;
        } catch (error) {
            if (error instanceof GraphQLError) throw error;
            console.error("Erro ao redefinir senha:", error);
            throw graphqlError("Erro ao redefinir senha.", "INTERNAL_SERVER_ERROR", 500);
        }
    }
}