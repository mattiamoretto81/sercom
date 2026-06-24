"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { track, TRACK_EVENTS } from "../lib/track";
import RaccoltaBox from "./RaccoltaBox";

const FLOATING_OBJECTS = [
  // sinistra (top % calcolati sull'altezza reale di ogni immagine per evitare sovrapposizioni)
  { src: "/images/objects/tavernello-hats.png", w: 180, top: "1%", left: "0%", rotate: -8, depth: "front", duration: 8, delay: 0, xDir: 1, xAmp: 32 },
  { src: "/images/objects/deliveroo-opener.png", w: 100, top: "14%", left: "7%", rotate: 10, depth: "back", duration: 10, delay: 1.1, xDir: -1, xAmp: 24 },
  { src: "/images/objects/roadhouse-burger.png", w: 130, top: "25%", left: "1%", rotate: 6, depth: "front", duration: 7, delay: 0.4, xDir: -1, xAmp: 28 },
  { src: "/images/objects/pinalli-tin.png", w: 90, top: "49%", left: "8%", rotate: -10, depth: "back", duration: 9.5, delay: 1.6, xDir: 1, xAmp: 22 },
  { src: "/images/objects/triumph-shirt.png", w: 160, top: "59%", left: "0%", rotate: -7, depth: "front", duration: 8.5, delay: 0.2, xDir: 1, xAmp: 32 },
  { src: "/images/objects/tavernello-tote.png", w: 95, top: "83%", left: "7%", rotate: 5, depth: "back", duration: 10, delay: 0.8, xDir: -1, xAmp: 22 },

  // destra
  { src: "/images/objects/toyota-blue.png", w: 220, top: "1%", right: "0%", rotate: 7, depth: "front", duration: 8, delay: 0.3, xDir: -1, xAmp: 32 },
  { src: "/images/objects/deliveroo-cards.png", w: 85, top: "21%", right: "8%", rotate: -9, depth: "back", duration: 9.5, delay: 1.3, xDir: 1, xAmp: 22 },
  { src: "/images/objects/deliveroo-mug.png", w: 150, top: "33%", right: "1%", rotate: -6, depth: "front", duration: 7, delay: 0.9, xDir: 1, xAmp: 28 },
  { src: "/images/objects/estra-kit.png", w: 110, top: "51%", right: "7%", rotate: 8, depth: "back", duration: 10.5, delay: 1.5, xDir: -1, xAmp: 22 },
  { src: "/images/objects/toyota-red.png", w: 200, top: "63%", right: "0%", rotate: 8, depth: "front", duration: 8, delay: 0.7, xDir: -1, xAmp: 32 },
  { src: "/images/objects/tavernello-giftbox.png", w: 110, top: "78%", right: "6%", rotate: -5, depth: "back", duration: 9, delay: 0.5, xDir: 1, xAmp: 22 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-[72px] pb-24 lg:pb-32">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 38%, #ffffff 0%, #ffffff 32%, #e9e9e9 100%)",
        }}
      />

      <div className="absolute inset-0 z-0 hidden 2xl:block pointer-events-none">
        {FLOATING_OBJECTS.map((o, i) => (
          <div key={i} className="absolute" style={{ top: o.top, left: o.left, right: o.right, width: o.w }}>
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 rounded-full bg-black blur-md"
              style={{
                bottom: o.depth === "back" ? "-8px" : "-16px",
                width: o.w * 0.7,
                height: o.depth === "back" ? 8 : 14,
              }}
              animate={{
                scaleX: [1, 0.7, 1],
                opacity: o.depth === "back" ? [0.1, 0.04, 0.1] : [0.22, 0.09, 0.22],
              }}
              transition={{ duration: o.duration, delay: o.delay, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className={o.depth === "back" ? "relative opacity-85 blur-[3px]" : "relative opacity-95"}
              animate={{
                y: [0, -18, 0],
                x: [-o.xAmp, o.xAmp, -o.xAmp].map((v) => v * o.xDir),
                rotate: [o.rotate, -o.rotate, o.rotate],
              }}
              transition={{ duration: o.duration, delay: o.delay, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={o.src}
                alt=""
                width={o.w}
                height={o.w}
                style={{ width: "100%", height: "auto" }}
                className={
                  o.depth === "back"
                    ? "drop-shadow-[0_8px_12px_rgba(0,0,0,0.08)]"
                    : "drop-shadow-[0_18px_24px_rgba(0,0,0,0.14)]"
                }
              />
            </motion.div>
          </div>
        ))}

        <div
          className="absolute left-1/2 top-1/2 h-[680px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[90px]"
          style={{ opacity: 0.92 }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-20 lg:pt-28 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block border border-black/30 px-4 py-2 text-[12px] font-bold uppercase tracking-wide text-black/70"
        >
          Per Marketing Manager e Brand Manager
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 46, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 text-[2.1rem] leading-[1.12] sm:text-5xl lg:text-[3.4rem] font-black uppercase text-black"
        >
          Il tuo budget marketing merita oggetti che lavorano per il
          brand, non che finiscono in un cassetto.
        </motion.h1>

        <motion.a
          href="#neurogadget"
          onClick={() => track(TRACK_EVENTS.CTA_SECONDARY_CLICK, { location: "hero" })}
          initial={{ opacity: 0, y: 30, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 block text-[2.1rem] leading-[1.12] sm:text-5xl lg:text-[3.4rem] font-black uppercase text-red-600 transition-opacity hover:opacity-80"
        >
          Scopri il Neurogadget
        </motion.a>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-black/70"
        >
          Se gestisci il marketing o il brand della tua azienda, sai già
          quanto non sia facile scegliere l&apos;oggetto giusto. Il tempo di
          scegliere un gadget è finito: è il momento di usare un Neurogadget.
          Oggetti pensati per creare attenzione, rafforzare il ricordo del
          brand e generare esperienze più memorabili.
        </motion.p>

        <div className="mt-10">
          <RaccoltaBox location="hero-quickform" eager mode="scroll" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-6 text-[13px] uppercase tracking-wide text-black/65"
        >
          Non è un catalogo prodotti. È una raccolta riservata, su richiesta.
        </motion.p>
      </div>
    </section>
  );
}
