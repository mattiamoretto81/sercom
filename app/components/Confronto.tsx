"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Confronto() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-3xl sm:text-4xl font-bold leading-tight text-black"
        >
          Le idee migliori nascono quando si mettono competenze diverse sullo
          stesso tavolo.
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden"
          >
            <div className="relative aspect-[43/48] bg-white">
              <Image
                src="/images/persona-tu-v6.png"
                alt="Marketing manager"
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="bg-white px-8 py-10">
              <p className="text-6xl sm:text-7xl font-bold uppercase tracking-tight text-black">
                Tu
              </p>
              <p className="mt-6 text-lg leading-relaxed text-black/80">
                Conosci il tuo brand, il tuo mercato e gli obiettivi che
                state perseguendo.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden"
          >
            <div className="relative aspect-[43/48] bg-white">
              <Image
                src="/images/persona-noi-v6.png"
                alt="Marco Granelli, Direttore Commerciale Sercom"
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="bg-black px-8 py-10">
              <p className="text-6xl sm:text-7xl font-bold uppercase tracking-tight text-white">
                Noi
              </p>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Portiamo esperienza su oggetti, materiali, format,
                produzione e meccaniche di memorabilità.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 max-w-2xl text-lg font-semibold leading-relaxed text-black"
        >
          Da questo confronto possono nascere oggetti creati a quattro mani:
          pensati non solo per essere belli, ma per lasciare un segno.
        </motion.p>
      </div>
    </section>
  );
}
