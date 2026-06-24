"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";
import { track, TRACK_EVENTS } from "../lib/track";

export default function RaccoltaBox({
  location,
  eager = false,
  mode = "scroll",
}: {
  location: string;
  eager?: boolean;
  mode?: "scroll" | "confirm";
}) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    track(TRACK_EVENTS.CTA_PRIMARY_CLICK, { location });
    if (mode === "confirm") {
      setSent(true);
    } else {
      document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  const wrapperMotion = eager
    ? { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true } as const,
      };

  return (
    <motion.div
      {...wrapperMotion}
      transition={{ duration: 0.7, delay: eager ? 0.28 : 0 }}
      className="mx-auto max-w-3xl border-[3px] border-black bg-white text-left shadow-[0_25px_50px_-12px_rgba(0,0,0,0.45)]"
    >
      <div className="grid gap-8 p-7 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-red-600">
            Documento riservato · gratuito
          </p>
          <p className="mt-1.5 text-2xl font-bold leading-tight text-black sm:text-[1.7rem]">
            Ricevi la Raccolta Idee Neurogadget
          </p>

          <ul className="mt-3 space-y-1.5 text-[15px] text-black/70">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-red-600">✓</span>
              Casi reali di Neurogadget che hanno funzionato
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-red-600">✓</span>
              Spunti adatti al tuo settore e al tuo budget
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-red-600">✓</span>
              Nella tua casella in pochi minuti
            </li>
          </ul>

          {sent ? (
            <p className="mt-5 text-[15px] font-semibold text-black">
              Richiesta ricevuta. Ti scriviamo a breve con la raccolta.
            </p>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="mt-5 flex flex-col gap-2 sm:max-w-md sm:flex-row"
              >
                <input
                  type="email"
                  required
                  placeholder="La tua email aziendale"
                  className="w-full flex-1 border border-black/20 bg-white px-4 py-3 text-[14px] text-black outline-none focus:border-black"
                />
                <button
                  type="submit"
                  className="shrink-0 whitespace-nowrap bg-black px-5 py-3 text-[13px] font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-85"
                >
                  Ricevi ora →
                </button>
              </form>
              <p className="mt-2 text-[11px] text-black/40">
                Zero spam. Solo la raccolta, una volta.
              </p>
            </>
          )}
        </div>

        <div className="relative isolate mx-auto hidden w-36 shrink-0 sm:block">
          <motion.div
            className="absolute left-1/2 top-[60%] -z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/20 blur-[45px]"
            animate={{ scale: [1, 0.8, 1], opacity: [0.9, 0.55, 0.9] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative flex aspect-[1/1.414] w-full flex-col justify-between border-2 border-black bg-black px-4 py-4 drop-shadow-[8px_16px_20px_rgba(0,0,0,0.3)]"
          >
            <Image
              src="/images/logo-sercom.svg"
              alt="Sercom"
              width={90}
              height={16}
              className="h-3.5 w-auto"
            />

            <p className="text-base font-bold uppercase leading-tight text-white">
              Raccolta
              <br />
              Idee
            </p>

            <div className="space-y-0.5 border-t border-white/15 pt-2">
              <p className="text-[7px] font-bold uppercase tracking-wide text-white/55">
                Documento riservato
              </p>
              <p className="text-[7px] font-bold uppercase tracking-wide text-white/55">
                Non divulgabile
              </p>
              <p className="text-[7px] font-bold uppercase tracking-wide text-white/90">
                Gratuito
              </p>
            </div>

            <div className="absolute -bottom-3.5 -right-3.5 flex size-8 items-center justify-center rounded-full border-2 border-white bg-black">
              <ArrowDownToLine className="size-4 text-white" strokeWidth={2.5} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
