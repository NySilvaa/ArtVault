"use client";

import { useEffect, useState } from "react";

export default function CursorComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="cursorDot"></div>
      <div className="cursorOutline"></div>
    </>
  );
}