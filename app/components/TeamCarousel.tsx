"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TEAM = [
  { file: "marco-z", nome: "Marco Z.", ruolo: "CEO | General Manager" },
  { file: "manuel", nome: "Manuel", ruolo: "Head of R&D" },
  { file: "monia", nome: "Monia", ruolo: "Administration Manager" },
  { file: "marco-g", nome: "Marco G.", ruolo: "Direttore Commerciale" },
  { file: "laura", nome: "Laura", ruolo: "Sales Support" },
  { file: "beatrice", nome: "Beatrice", ruolo: "Sales Area Manager" },
  { file: "simonetta", nome: "Simonetta", ruolo: "Sales Area Manager" },
  { file: "sara-t", nome: "Sara T.", ruolo: "Head of Project Management" },
  { file: "luca", nome: "Luca", ruolo: "Sales Area Manager" },
  { file: "domenico", nome: "Domenico", ruolo: "Project Manager | Digital & Web" },
  { file: "valerio", nome: "Valerio", ruolo: "Sales Area Manager" },
  { file: "gaia", nome: "Gaia", ruolo: "Sales Support" },
  { file: "alice-f", nome: "Alice F.", ruolo: "Project Manager" },
  { file: "zorica", nome: "Zorica", ruolo: "Production Manager" },
  { file: "paolo", nome: "Paolo", ruolo: "Sales Area Manager" },
  { file: "alice-b", nome: "Alice B.", ruolo: "Sales Area Manager" },
  { file: "isacco", nome: "Isacco", ruolo: "Digital Project Manager" },
  { file: "sara-s", nome: "Sara S.", ruolo: "Administration Specialist" },
  { file: "luciano", nome: "Luciano", ruolo: "Marketing Manager" },
];

// Raddoppiato per ottenere un loop orizzontale continuo e senza scatti.
const LOOP = [...TEAM, ...TEAM];

export default function TeamCarousel() {
  return (
    <div className="mt-14 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden border-y border-black">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {LOOP.map((p, i) => (
          <div
            key={`${p.file}-${i}`}
            className="relative shrink-0 w-[200px] sm:w-[250px] border-r border-black"
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={`/images/team/${p.file}.webp`}
                alt={p.nome}
                fill
                sizes="250px"
                className="object-cover"
              />
            </div>
            <div className="border-t border-black px-4 py-4">
              <p className="text-[14px] font-bold text-black">{p.nome}</p>
              <p className="text-[12px] leading-tight text-black/55">
                {p.ruolo}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
