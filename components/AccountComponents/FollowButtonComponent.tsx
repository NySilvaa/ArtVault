"use client";

import { useCheckArtistFollowed } from "@/components/AccountComponents/CheckArtistFollowedByUser";

interface FollowButtonProps {
  idArtist: string;
  className?: string;
  followedArtist?: boolean;
}

export function FollowButton({ idArtist, className, followedArtist }: FollowButtonProps) {
  const { following, loading, toggleFollow } = useCheckArtistFollowed(idArtist);

  return (
    <button
      type="button"
      onClick={toggleFollow}
      disabled={loading}
      aria-label={(followedArtist || following) ? "Deixar de seguir artista" : "Seguir artista"}
      className={className}
      style={{
        background: "transparent",
        border: "none",
        cursor: loading ? "wait" : "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        color: "inherit",
      }}
    >
      {loading ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-spin"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      ) : (followedArtist || following) ? (
        // Ícone de Check (Quando já está seguindo)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        // Ícone de Mais (Original)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-plus-icon lucide-plus"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      )}
    </button>
  );
}