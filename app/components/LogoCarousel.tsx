"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CLIENTI = [
  { nome: "Deliveroo", file: "deliveroo.svg" },
  { nome: "adidas", file: "adidas.svg" },
  { nome: "BPER Banca", file: "bper.svg" },
  { nome: "Toyota", file: "toyota.svg" },
  { nome: "Triumph", file: "triumph.svg" },
  { nome: "Scuola Normale Superiore", file: "sns.svg" },
  { nome: "Vinavil", file: "vinavil.svg" },
  { nome: "Roadhouse", file: "roadhouse.svg" },
  { nome: "HIKVISION", file: "hikvision.svg" },
  { nome: "Simecom", file: "simecom.svg" },
  { nome: "Hella", file: "hella.svg" },
  { nome: "Kone", file: "kone.svg" },
  { nome: "Pinalli", file: "pinalli.svg" },
];

const LOOP = [...CLIENTI, ...CLIENTI];

export default function LogoCarousel() {
  return (
    <section className="bg-white border-y border-black/10 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-[13px] font-bold uppercase tracking-wide text-black/40">
          Aziende che si sono affidate a Sercom
        </p>
      </div>

      <div className="mt-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden">
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {LOOP.map((c, i) => (
            <div
              key={`${c.file}-${i}`}
              className="flex shrink-0 items-center justify-center w-[220px] h-16"
            >
              <Image
                src={`/images/clients/${c.file}`}
                alt={c.nome}
                width={140}
                height={48}
                className="max-h-10 w-auto object-contain grayscale opacity-60"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
