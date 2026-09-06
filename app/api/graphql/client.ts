import "server-only";
import { cookies } from "next/headers";

const FETCH_TIMEOUT_MS = 10_000;

type GraphQLResult<T> =
  | { success: true; data: T }
  | { success: false; error: string };

export async function graphqlRequest<T>(
  query: string,
  variables: Record<string, unknown>,
  options: { requireAuth?: boolean } = {}
): Promise<GraphQLResult<T>> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (options.requireAuth && !token) {
    return { success: false, error: "Usuário não autenticado." };
  }

  const endpoint = process.env.GRAPHQL_ENDPOINT;
  if (!endpoint) {
    console.error("GRAPHQL_ENDPOINT não configurada!");
    return { success: false, error: "Erro de configuração no servidor." };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: token ? `token=${token}` : "",
      },
      body: JSON.stringify({ query, variables }),
      cache: "no-store",
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
    let message = "Erro de comunicação com o servidor.";

  try {
    const errorBody = await response.json();
    if (errorBody?.errors?.length) {
      message = errorBody.errors[0]?.extensions?.userMessage || errorBody.errors[0].message;
    }
  }catch (error){
    // corpo não era JSON válido — mantém a mensagem genérica
    console.log(`Erro: ${error}`)
  }

   console.error("GraphQL respondeu com status:", response.status, "-", message);
  return { success: false, error: message };
}

    const json = await response.json();

    if (json.errors && json.errors.length > 0) {
      console.error("Erros do GraphQL:", json.errors);
      const userMessage = json.errors[0]?.extensions?.userMessage;
      return { success: false, error: userMessage || json.errors[0].message };
    }

    return { success: true, data: json.data as T };
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof Error && error.name === "AbortError") {
      return { success: false, error: "Tempo de resposta excedido. Tente novamente." };
    }

    console.error("Erro na requisição GraphQL:", error);
    return { success: false, error: "Falha na comunicação com o servidor." };
  }
}