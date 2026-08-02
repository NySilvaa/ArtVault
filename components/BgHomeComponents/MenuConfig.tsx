"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export function useMenuConfig() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    function handleInteraction(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        close();
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        close();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleInteraction);
      document.addEventListener("touchstart", handleInteraction);
      
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close]);

  return { isOpen, toggle, close, ref };
}