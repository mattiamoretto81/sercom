"use client";

import { useEffect, useRef } from "react";
import { track, TRACK_EVENTS } from "../lib/track";

export default function ScrollTracker() {
  const fired = useRef({ half: false, ninety: false });

  useEffect(() => {
    function onScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const ratio = window.scrollY / scrollable;

      if (ratio >= 0.5 && !fired.current.half) {
        fired.current.half = true;
        track(TRACK_EVENTS.SCROLL_50);
      }
      if (ratio >= 0.9 && !fired.current.ninety) {
        fired.current.ninety = true;
        track(TRACK_EVENTS.SCROLL_90);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
