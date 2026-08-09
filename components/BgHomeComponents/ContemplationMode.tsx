"use client";

import { useEffect, useState, useCallback } from "react";

export function ContemplationMode() {
  const [isActive, setIsActive] = useState(false);

  const toggleContemplation = useCallback(() => setIsActive((prev) => !prev), []);
  const close = useCallback(() => setIsActive(false), []);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        close();
      }
    }

    if (isActive) {
      document.body.classList.add("contemplation-active");
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("contemplation-active");
    }

    return () => {
      document.body.classList.remove("contemplation-active");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isActive, close]);

  return { isActive, toggleContemplation, close };
}