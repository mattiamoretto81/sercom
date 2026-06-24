"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Neurogadget() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      id="neurogadget"
      ref={sectionRef}
      className="relative min-h-[640px] flex items-center overflow-hidden bg-black py-24"
    >
      <motion.div className="absolute inset-x-0 -top-[12%] -bottom-[12%]" style={{ y }}>
        <Image
          src="/images/neurogadget-section.webp"
          alt="Neurogadget: oggetto promozionale progettato per essere ricordato"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/15" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block border border-white/40 px-4 py-2 text-[12px] font-bold uppercase tracking-wide text-white/80"
          >
            Neurogadget
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl sm:text-4xl font-bold leading-tight text-white"
          >
            Cos&apos;è un Neurogadget?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 space-y-5 text-lg leading-relaxed text-white/80"
          >
            <p>
              Un Neurogadget è un oggetto promozionale progettato per non
              essere percepito come &ldquo;il solito gadget&rdquo;.
            </p>
            <p>
              Può essere utile, sorprendente, fisico, digitale,
              multisensoriale, simbolico o collegato a una storia. La cosa
              importante è che abbia un ruolo preciso dentro una strategia di
              branding.
            </p>
            <p className="text-xl font-bold text-white">
              Non deve solo portare un logo.
              <br />
              Deve far nascere un ricordo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
