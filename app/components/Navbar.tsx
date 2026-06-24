"use client";

import Image from "next/image";
import { track, TRACK_EVENTS } from "../lib/track";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="mx-auto max-w-7xl px-6 h-[72px] flex items-center justify-between">
        <Image
          src="/images/logo-sercom.svg"
          alt="Sercom"
          width={160}
          height={28}
          priority
          className="h-7 w-auto"
        />

        <a
          href="#raccolta"
          onClick={() => track(TRACK_EVENTS.CTA_PRIMARY_CLICK, { location: "navbar" })}
          className="border border-white px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
        >
          Richiedi la raccolta
        </a>
      </div>
    </header>
  );
}
