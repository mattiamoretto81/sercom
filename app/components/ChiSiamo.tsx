"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TeamCarousel from "./TeamCarousel";

export default function ChiSiamo() {
  return (
    <section className="bg-white py-24 border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/logo-sercom.svg"
              alt="Sercom"
              width={260}
              height={46}
              className="h-9 w-auto sm:h-12"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-[13px] font-bold uppercase tracking-wide text-black/40"
          >
            Chi siamo
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 text-3xl sm:text-4xl font-bold leading-tight text-black"
          >
            Un&apos;azienda strutturata, non un fornitore di gadget.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-7 space-y-5 text-lg leading-relaxed text-black/75"
          >
            <p>
              Sercom è una realtà con processi, governance, certificazioni e
              un bilancio di sostenibilità. Ragiona come una grande azienda e
              opera con l&apos;agilità di una realtà dinamica: solida senza
              essere rigida, organizzata senza rallentare.
            </p>
            <p>
              Un team di oltre 20 persone — dal Research &amp; Development
              al Project Management, dalla produzione alla logistica — segue
              ogni progetto dall&apos;idea alla consegna.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 border-l-2 border-black pl-5"
          >
            <p className="text-[15px] font-bold text-black">
              Marco Zaffignani
            </p>
            <p className="text-[13px] uppercase tracking-wide text-black/45">
              CEO &amp; General Manager, Sercom
            </p>
          </motion.div>
        </div>
      </div>

      <TeamCarousel />
    </section>
  );
}
