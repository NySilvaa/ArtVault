"use server";

import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const MAX_REQUESTS = 3;
const WINDOW_SECONDS = 60 * 60;

export async function checkPasswordResetRateLimit(email: string): Promise<boolean> {
  const key = `password_reset_attempts:${email.trim().toLowerCase()}`;
  try {
    const attempts = await redis.incr(key);
    if (attempts === 1) {
      await redis.expire(key, WINDOW_SECONDS);
    }
    return attempts <= MAX_REQUESTS;
  } catch (error) {
    console.error("Erro ao verificar rate limit de reset de senha:", error);
    return true; // fail-open, mesma filosofia do rate limit de login
  }
}