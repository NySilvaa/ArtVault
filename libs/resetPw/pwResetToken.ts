"use server";

import { randomBytes } from "crypto";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const TOKEN_TTL_SECONDS = 30 * 60;

function tokenKey(token: string): string {
  return `password_reset:${token}`;
}

export async function createPasswordResetToken(userId: string): Promise<string> {
  const token = randomBytes(32).toString("hex");
  await redis.set(tokenKey(token), userId, { ex: TOKEN_TTL_SECONDS });
  return token;
}

export async function consumePasswordResetToken(token: string): Promise<string | null> {
  const key = tokenKey(token);
  const userId = await redis.get<string>(key);
  if (!userId) return null;

  await redis.del(key); // uso único
  return userId;
}