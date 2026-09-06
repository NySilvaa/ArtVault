"use server";

import { graphqlRequest } from "../api/graphql/client";

interface SearchArtworksResult {
  searchArtworks: Array<{
    id: string;
    title: string;
    image: string;
    artist_id: string;
    artist_name: string;
  }>;
}

export async function searchArtworksAction(authorSearch: string, artSearch: string) {
  const result = await graphqlRequest<SearchArtworksResult>(
    `
      query SearchArtworks($authorSearch: String, $artSearch: String) {
        searchArtworks(authorSearch: $authorSearch, artSearch: $artSearch) {
          id
          title
          image
          artist_id
          artist_name
        }
      }
    `,
    { authorSearch, artSearch }
  );

  if (!result.success) {
    console.error("Erro na busca de obras:", result.error);
    return [];
  }

  return result.data.searchArtworks;
}

interface GetArtistWithArtworksResult {
  getArtistWithArtworks: {
    id: string;
    stage_name: string;
    bio: string;
    cover_photo: string;
    artworks: Array<{ id: string; title: string; image: string }>;
  };
}

export async function getArtistWithArtworksAction(artistId: string) {
  const result = await graphqlRequest<GetArtistWithArtworksResult>(
    `
      query GetArtistWithArtworks($artistId: String!) {
        getArtistWithArtworks(artistId: $artistId) {
          id
          stage_name
          bio
          cover_photo
          artworks {
            id
            title
            image
          }
        }
      }
    `,
    { artistId }
  );

  if (!result.success) {
    console.error("Erro ao buscar artista:", result.error);
    return null;
  }

  return result.data.getArtistWithArtworks;
}