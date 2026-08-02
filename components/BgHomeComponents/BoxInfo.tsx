"use client";

import { useState, useCallback } from "react";

export function useBoxInfo() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const showSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
  }, []);

  return {
    activeSection,
    showSection,
  };
}