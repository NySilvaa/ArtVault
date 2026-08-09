import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

//A conexão é instanciada FORA da função para garantir que o Next.js use novamente a mesma conexão para todos os usuários
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const loginLimiter = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(5, "15 m"),
});

// função da checagem de tentativas
export async function checkLoginRateLimit(email: string): Promise<number> {
  const identifier = `login_attempts_${email}`;
  const { success, remaining, reset } = await loginLimiter.limit(identifier);

  if (!success) {
    const tempoLiberacao = new Date(reset).toLocaleTimeString("pt-BR");
    // O erro é lançado aqui dentro, parando a execução imediatamente
    throw new Error(`Muitas tentativas falhas. Conta bloqueada. Tente novamente às ${tempoLiberacao}`);
  }

  // Se deu sucesso, retornamos quantas tentativas ainda restam
  return remaining;
}

export async function clearLoginRateLimit(email: string) {
  const identifier = `login_attempts_${email}`;
  
  // A biblioteca @upstash/ratelimit salva os dados usando o prefixo "ratelimit:".
  // Como o algoritmo "slidingWindow" cria chaves baseadas no tempo, 
  // usamos o "*" no final para buscar todas as chaves relacionadas a esse e-mail.
  const chaves = await redis.keys(`ratelimit:${identifier}:*`);
  
  // Se o usuário tiver algum histórico de tentativas, nós deletamos essas chaves do Redis
  if (chaves.length > 0) {
    await redis.del(...chaves);
  }
}