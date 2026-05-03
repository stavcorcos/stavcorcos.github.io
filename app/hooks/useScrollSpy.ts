"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 80) {
  const [activeId, setActiveId] = useState<string>("");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset;
      const docHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      if (window.scrollY + viewportHeight >= docHeight) {
        setActiveId(ids[ids.length - 1]);
        return;
      }
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(id);
          return;
        }
      }

      setActiveId("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
}
