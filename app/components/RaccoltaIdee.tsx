"use client";

import { motion } from "framer-motion";
import RaccoltaBox from "./RaccoltaBox";

export default function RaccoltaIdee() {
  return (
    <section id="raccolta" className="bg-black py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold leading-tight text-white"
        >
          Ricevi ora il doc &laquo;Raccolta Idee&raquo;.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-7 space-y-4 text-lg leading-relaxed text-white/70"
        >
          <p>
            Abbiamo raccolto alcuni esempi, ragionamenti e progetti
            sviluppati per aziende che volevano usare gli oggetti
            promozionali in modo più strategico.
          </p>
          <p className="font-semibold text-white">
            Non è un catalogo. Non è una brochure commerciale.
          </p>
          <p>
            È una raccolta di spunti pensata per chi si occupa di marketing,
            branding ed esperienza del cliente.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto mt-10 px-6">
        <RaccoltaBox location="raccolta" mode="scroll" />
      </div>
    </section>
  );
}
