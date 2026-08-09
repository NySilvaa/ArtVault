"use server";

import { cookies } from "next/headers";

const getBaseUrl = () => process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

// Faz o fetch para o GraphQL, injeta os cookies e trata os erros padrão
async function fetchGraphQL(query: string, variables: any = {}) {
  try {
    const cookieStore = await cookies();
    
    const response = await fetch(`${getBaseUrl()}/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(), // No Next.js 13+, .toString() formata corretamente os cookies
      },
      cache: "no-store",
      body: JSON.stringify({ query, variables }),
    });

    const result = await response.json();

    if (result.errors) {
      console.error("Erros retornados pelo GraphQL:", result.errors);
      return { data: null, error: "Erro ao processar a requisição no servidor GraphQL." };
    }

    return { data: result.data, error: null };
  } catch (error) {
    console.error("Erro interno no fetch de comunicação:", error);
    return { data: null, error: "Erro interno no servidor." };
  }
}

// Função para SEGUIR / DEIXAR DE SEGUIR um artista
export async function toggleFollowArtist(idArtist: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return { success: false, message: "Usuário não autenticado." };
  }

  const GRAPHQL_QUERY = `
    mutation followingArt($idArtist: String!) {
      InsertArtist(idArtist: $idArtist)
    }
  `;

  const { data, error } = await fetchGraphQL(GRAPHQL_QUERY, { idArtist });

  if (error) {
    return { success: false, message: error };
  }

  // CORREÇÃO: result.data?.InsertArtist (Com "I" maiúsculo, igual na query)
  const isSuccess = data?.InsertArtist || false;

  return { 
    success: isSuccess, 
    message: isSuccess ? "Ação realizada com sucesso." : "Não foi possível realizar a ação." 
  };
}

//  Função para buscar os artistas que o usuário JÁ SEGUE
export async function getPaintersFollowed() {
  const GRAPHQL_QUERY = `
    query {
      getArtistFollowed {
        id
        stage_name
        cover_photo
        artworks
        followers
      }
    }
  `;

  const { data, error } = await fetchGraphQL(GRAPHQL_QUERY);

  if (error) return []; // Retorna array vazio em caso de erro

  return data?.getArtistFollowed || [];
}

//  Buscar TODOS os artistas
export async function getPaintersAll() {
  const GRAPHQL_QUERY = `
    query {
      getPaintersData {
        id
        stage_name
        bio
        cover_photo
        artworks
        followers
      }
    }
  `;

  const { data, error } = await fetchGraphQL(GRAPHQL_QUERY);

  if (error) return []; // Retorna array vazio em caso de erro

  return data?.getPaintersData || [];
}