"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ArtSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockArtworks = [
  { id: 1, author: "Koyoharu Gotouge", art: "Sanemi Shinazugawa Sketch", initials: "KG", color: "bg-emerald-500" },
  { id: 2, author: "Masashi Kishimoto", art: "Naruto Uzumaki Portrait", initials: "MK", color: "bg-orange-500" },
  { id: 3, author: "Eiichiro Oda", art: "Straw Hat Crew Canvas", initials: "EO", color: "bg-red-500" },
  { id: 4, author: "Takehiko Inoue", art: "Vagabond Watercolor", initials: "TI", color: "bg-slate-700" },
];

export default function ArtSearchModal({ isOpen, onClose }: ArtSearchModalProps) {
  const [authorSearch, setAuthorSearch] = useState("");
  const [artSearch, setArtSearch] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredArtworks = mockArtworks.filter((item) => {
    const matchAuthor = item.author.toLowerCase().includes(authorSearch.toLowerCase());
    const matchArt = item.art.toLowerCase().includes(artSearch.toLowerCase());
    return matchAuthor && matchArt;
  });

  const handleSelect = (id: number) => {
    console.log(`Você clicou no item com ID: ${id}`);
    onClose(); 
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setTimeout(() => {
        console.log("Upload simulado concluído para:", file.name);
        setIsUploading(false);
    }, 1500);
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
            className="modalBoxPainting relative z-10 w-full max-w-lg bg-white rounded-[20px] shadow-2xl p-6 border border-gray-100"
          >
            <div className="tittleBoxPainting flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 txtBlue">Search Artworker</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-800 transition p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="paintingBox">
                <label className="block text-sm text-gray-500 mb-1 ml-1 font-medium">Author Name</label>
                <input
                  type="text"
                  value={authorSearch}
                  onChange={(e) => setAuthorSearch(e.target.value)}
                  placeholder="Search by author..."
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition text-gray-700 bg-white"
                />
              </div>
              
              <div className="paintingBox">
                <label className="block text-sm text-gray-500 mb-1 ml-1 font-medium">Artwork Name or Image</label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={artSearch}
                    onChange={(e) => setArtSearch(e.target.value)}
                    placeholder="Search by art name..."
                    className="w-full pl-4 pr-12 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition text-gray-700 bg-white"
                  />
                  
                  {/* Botão de Upload de Imagem */}
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute right-2 p-2 text-gray-400 hover:text-indigo-600 transition bg-white rounded-lg cursor-pointer"
                    title="Search by Image"
                  >
                    {isUploading ? (
                      <span className="animate-spin flex items-center justify-center">⏳</span>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                    )}
                  </button>
                  
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
            </div>

            {/* Lista Dinâmica com os Resultados */}
            <div>
              <h3 className="text-sm mb-3 ml-1 font-medium tittleResultsPaintings">Available Artworks</h3>
              <div className="max-h-64 overflow-y-auto space-y-1 pr-2 custom-scrollbar">
                {filteredArtworks.length > 0 ? (
                  filteredArtworks.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item.id)}
                      className="resultsPainting w-full flex items-center p-3 hover:bg-gray-50 rounded-xl transition text-left group cursor-pointer border-none bg-transparent"
                    >
                      <div className={`initialsPainting w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-4 shrink-0 ${item.color}`}>
                        {item.initials}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <p className="txtBlue text-[15px] font-medium text-gray-900 group-hover:text-indigo-600 transition truncate">
                          {item.art}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {item.author}
                        </p>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="text-sm text-gray-400 text-center py-6">No matches found.</p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}