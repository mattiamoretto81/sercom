"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Problema() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[640px] flex items-center overflow-hidden bg-black py-24"
    >
      <motion.div className="absolute inset-x-0 -top-[12%] -bottom-[12%]" style={{ y }}>
        <Image
          src="/images/magazzino-metodo.jpg"
          alt="Metodo Sercom: produzione ed esecuzione gadget aziendali"
          fill
          sizes="100vw"
          className="object-cover object-[68%_40%]"
        />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 72% 42%, rgba(255,255,255,0.22), transparent 38%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.88) 32%, rgba(0,0,0,0.5) 58%, transparent 78%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block border border-white/40 px-4 py-2 text-[12px] font-bold uppercase tracking-wide text-white/80"
          >
            Metodo Sercom
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl sm:text-4xl font-bold leading-tight text-white"
          >
            Il problema non è fare merchandising. Il problema è essere
            ricordati.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 space-y-5 text-lg leading-relaxed text-white/80"
          >
            <p>
              Molte aziende investono in fiere, eventi, welcome kit, regali
              aziendali e attività promozionali. Spesso però l&apos;oggetto
              viene scelto troppo tardi, troppo velocemente o semplicemente
              da un catalogo.
            </p>
            <p>
              Il risultato? Un oggetto corretto, magari ben fatto, ma senza
              una vera funzione di branding.
            </p>
            <p className="border-l-2 border-white pl-5 font-semibold text-white">
              Un Neurogadget parte da una domanda diversa: che reazione
              vogliamo generare nella persona che lo riceve?
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
