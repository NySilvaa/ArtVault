import { Redis } from "@upstash/redis";
import { GraphQLError } from "graphql";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const MAX_ATTEMPTS = 5;
const WINDOW_SECONDS = 15 * 60;

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function rateLimitKey(email: string): string {
  return `login_attempts:${normalizeEmail(email)}`;
}

function rateLimitError(message: string) {
  return new GraphQLError(message, {
    extensions: { code: "RATE_LIMITED", http: { status: 429 }, userMessage: message },
  });
}

// Consulta se o e-mail está bloqueado — NÃO consome tentativa, apenas verifica.
export async function checkLoginRateLimit(email: string): Promise<number> {
  const key = rateLimitKey(email);

  let attempts: number;
  try {
    attempts = (await redis.get<number>(key)) ?? 0;
  } catch (error) {
    console.error("Erro ao consultar rate limit no Redis:", error);
    // Falha "aberta": não bloqueia o login se o Redis estiver indisponível.
    // Troque para lançar erro aqui se preferir priorizar segurança sobre disponibilidade.
    return MAX_ATTEMPTS;
  }

  if (attempts >= MAX_ATTEMPTS) {
    const ttl = await redis.ttl(key).catch(() => WINDOW_SECONDS);
    const releaseTime = new Date(Date.now() + ttl * 1000).toLocaleTimeString("pt-BR");
    throw rateLimitError(
      `Muitas tentativas falhas. Conta bloqueada. Tente novamente às ${releaseTime}`
    );
  }

  return MAX_ATTEMPTS - attempts;
}

// Chamar SOMENTE quando a senha estiver incorreta — login bem-sucedido não deve "gastar" tentativas.
export async function recordFailedLogin(email: string): Promise<void> {
  const key = rateLimitKey(email);
  try {
    const attempts = await redis.incr(key);
    if (attempts === 1) {
      await redis.expire(key, WINDOW_SECONDS);
    }
  } catch (error) {
    console.error("Erro ao registrar tentativa falha no Redis:", error);
  }
}

export async function clearLoginRateLimit(email: string): Promise<void> {
  const key = rateLimitKey(email);
  try {
    await redis.del(key); // reset direto, sem scan de chaves
  } catch (error) {
    console.error("Erro ao limpar rate limit no Redis:", error);
  }
}