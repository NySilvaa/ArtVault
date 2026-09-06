"use server";

import { graphqlRequest } from "../api/graphql/client";

interface ToggleFollowResult {
  toggleFollowArtist: { following: boolean };
}

export async function toggleFollowArtist(idArtist: string) {
  const result = await graphqlRequest<ToggleFollowResult>(
    `
      mutation ToggleFollowArtist($idArtist: String!) {
        toggleFollowArtist(idArtist: $idArtist) {
          following
        }
      }
    `,
    { idArtist },
    { requireAuth: true }
  );

  if (!result.success) {
    return { success: false, following: null, message: result.error };
  }

  const { following } = result.data.toggleFollowArtist;

  return {
    success: true,
    following, // o client agora sabe exatamente o novo estado
    message: following ? "Você está seguindo este artista." : "Você deixou de seguir este artista.",
  };
}

interface GetArtistFollowedResult {
  getArtistFollowed: Array<{
    id: string;
    stage_name: string;
    cover_photo: string;
    artworks: number;
    followers: number;
  }>;
}

export async function getPaintersFollowed() {
  const result = await graphqlRequest<GetArtistFollowedResult>(
    `
      query {
        getArtistFollowed {
          id
          stage_name
          cover_photo
          artworks
          followers
        }
      }
    `,
    {}
  );

  if (!result.success) {
    console.error("Erro ao buscar artistas seguidos:", result.error);
    return { data: [], error: result.error };
  }

  return { data: result.data.getArtistFollowed, error: null };
}

interface GetPaintersDataResult {
  getPaintersData: Array<{
    id: string;
    stage_name: string;
    bio: string;
    cover_photo: string;
    artworks: number;
    followers: number;
  }>;
}

export async function getPaintersAll() {
  const result = await graphqlRequest<GetPaintersDataResult>(
    `
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
    `,
    {}
  );

  if (!result.success) {
    console.error("Erro ao buscar artistas:", result.error);
    return { data: [], error: result.error };
  }

  return { data: result.data.getPaintersData, error: null };
}