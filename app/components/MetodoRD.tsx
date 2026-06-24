"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageLabel from "./ImageLabel";

const STEP = [
  {
    n: "01",
    title: "Processo creativo",
    text: "Studio, ricerca e un mantra chiaro: pensare fuori dagli schemi.",
    img: "/images/rd-processo.webp",
  },
  {
    n: "02",
    title: "Esecuzione",
    text: "Dall'idea alla realtà: campioni, test su materiali e colori per trasformare la ricerca in concretezza.",
    img: "/images/rd-esecuzione.webp",
  },
  {
    n: "03",
    title: "Rivoluzione",
    text: "Le idee nascono ovunque: insight del cliente e feedback per migliorare e innovare il prodotto.",
    img: "/images/rd-rivoluzione.webp",
  },
];

export default function MetodoRD() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[13px] font-bold uppercase tracking-wide text-white/40"
        >
          R&amp;D
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 max-w-3xl text-3xl sm:text-4xl font-bold leading-tight text-white"
        >
          Perché il catalogo non è la soluzione? Perché propone soluzioni
          senza aver mai ascoltato una domanda.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-2xl text-2xl sm:text-3xl font-semibold leading-snug text-white/90"
        >
          Noi partiamo dal contrario: un foglio bianco e le domande giuste.
          Il nostro team interno di Research &amp; Development lavora su un
          metodo circolare.
        </motion.p>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {STEP.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-white/15"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
                <ImageLabel text={s.title} />
              </div>
              <div className="px-6 py-6">
                <span className="text-[13px] font-bold text-white/35">
                  {s.n}
                </span>
                <p className="mt-1.5 text-[15px] font-bold uppercase tracking-wide text-white">
                  {s.title}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-white/60">
                  {s.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
