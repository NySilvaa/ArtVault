"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/public/css/painting.module.css";
import { searchArtworksAction } from "@/app/actions/artworkSearch";

interface ArtSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArtist: (artistId: string) => void; 
}

interface ArtworkResult {
  id: string;
  title: string;
  image: string;
  artist_id: string;
  artist_name: string;
}

export default function ArtSearchModal({ isOpen, onClose, onSelectArtist }: ArtSearchModalProps) {
  const [authorSearch, setAuthorSearch] = useState("");
  const [artSearch, setArtSearch] = useState("");
  const [results, setResults] = useState<ArtworkResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    if (!authorSearch.trim() && !artSearch.trim()) {
      setResults([]);
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);

    setIsSearching(true);
    debounceRef.current = setTimeout(async () => {
      const data = await searchArtworksAction(authorSearch, artSearch);
      setResults(data);
      setIsSearching(false);
    }, 300);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [authorSearch, artSearch, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setAuthorSearch("");
      setArtSearch("");
      setResults([]);
    }
  }, [isOpen]);

  const handleSelect = (artistId: string) => {
    onSelectArtist(artistId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`${styles.modalBoxPainting} relative z-10 w-full max-w-lg bg-white rounded-[20px] shadow-2xl p-6 border border-gray-100`}
          >
            <div className={`${styles.tittleBoxPainting} flex justify-between items-center mb-6`}>
              <h2 className="text-xl font-semibold text-gray-900 txtBlue">Search Artworker</h2>
              <button onClick={onClose} aria-label="Fechar busca" className="text-gray-400 hover:text-gray-800 transition p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className={styles.paintingBox}>
                <label htmlFor="authorSearch" className="block text-sm text-gray-500 mb-1 ml-1 font-medium">Author Name</label>
                <input
                  id="authorSearch"
                  type="text"
                  value={authorSearch}
                  onChange={(e) => setAuthorSearch(e.target.value)}
                  placeholder="Search by author..."
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition text-gray-700 bg-white"
                />
              </div>

              <div className={styles.paintingBox}>
                <label htmlFor="artSearch" className="block text-sm text-gray-500 mb-1 ml-1 font-medium">Artwork Name</label>
                <input
                  id="artSearch"
                  type="text"
                  value={artSearch}
                  onChange={(e) => setArtSearch(e.target.value)}
                  placeholder="Search by art name..."
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition text-gray-700 bg-white"
                />
              </div>
            </div>

            <div>
              <h3 className={`text-sm mb-3 ml-1 font-medium ${styles.tittleResultsPaintings}`}>Available Artworks</h3>
              <div className="max-h-64 overflow-y-auto space-y-1 pr-2 custom-scrollbar">
                {isSearching ? (
                  <p className="text-sm text-gray-400 text-center py-6">Buscando...</p>
                ) : results.length > 0 ? (
                  results.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item.artist_id)}
                      className={`${styles.resultsPainting} w-full flex items-center p-3 hover:bg-gray-50 rounded-xl transition text-left group cursor-pointer border-none bg-transparent`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="txtBlue text-[15px] font-medium text-gray-900 group-hover:text-indigo-600 transition truncate">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-500 truncate">{item.artist_name}</p>
                      </div>
                    </button>
                  ))
                ) : (authorSearch.trim() || artSearch.trim()) ? (
                  <p className="text-sm text-gray-400 text-center py-6">No matches found.</p>
                ) : (
                  <p className="text-sm text-gray-400 text-center py-6">Digite para buscar.</p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}