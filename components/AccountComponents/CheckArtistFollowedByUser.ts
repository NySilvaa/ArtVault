"use client";

import { useState, useCallback } from "react";
import { toggleFollowArtist } from "@/app/actions/followingArtist";

export function useCheckArtistFollowed(idArtist: string) {
  const [following, setFollowing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [responseMsg, setResponseMsg] = useState<string | null>(null);

  const toggleFollow = useCallback(async () => {
    if (!idArtist) return;

    setLoading(true);
    try {
      const res = await toggleFollowArtist(idArtist);
      console.log("Resposta da Server Action:", res);

      setResponseMsg(res ?? null);
      setFollowing((prev) => !prev);
    } catch (error) {
      console.error("Erro ao executar a ação do artista:", error);
    } finally {
      setLoading(false);
    }
  }, [idArtist]);

  return {
    following,
    loading,
    responseMsg,
    toggleFollow,
  };
}