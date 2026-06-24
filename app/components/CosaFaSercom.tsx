"use client";

import { motion } from "framer-motion";
import {
  Tent,
  Rocket,
  Smile,
  UserPlus,
  Briefcase,
  Megaphone,
  Award,
  Gift,
} from "lucide-react";

const AMBITI = [
  {
    label: "Fiere ed eventi",
    obiettivo: "Riconoscibilità di brand",
    Icon: Tent,
  },
  {
    label: "Lancio prodotti",
    obiettivo: "Attenzione immediata sul nuovo prodotto",
    Icon: Rocket,
  },
  {
    label: "Customer experience",
    obiettivo: "Un'esperienza che resta nella memoria",
    Icon: Smile,
  },
  {
    label: "Onboarding dipendenti",
    obiettivo: "Senso di appartenenza dal primo giorno",
    Icon: UserPlus,
  },
  {
    label: "Employer branding",
    obiettivo: "Attrattività verso nuovi talenti",
    Icon: Briefcase,
  },
  {
    label: "Campagne trade marketing",
    obiettivo: "Coinvolgimento della rete vendita",
    Icon: Megaphone,
  },
  {
    label: "Programmi loyalty",
    obiettivo: "Fedeltà e ripetizione d'acquisto",
    Icon: Award,
  },
  {
    label: "Regali corporate ad alto impatto",
    obiettivo: "Relazione e percezione di valore",
    Icon: Gift,
  },
];

export default function CosaFaSercom() {
  return (
    <section className="bg-white py-24 border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold leading-tight text-black"
        >
          Non partiamo dall&apos;oggetto.
          <br />
          Partiamo dalla reazione che vogliamo ottenere.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-7 max-w-2xl space-y-4 text-lg leading-relaxed text-black/70"
        >
          <p>
            Prima di scegliere un oggetto, vale la pena fermarsi un attimo.
            Cosa vogliamo che succeda dopo che qualcuno lo riceve?
          </p>
          <p>
            Deve far ricordare il nostro stand a una fiera? Far sentire un
            nuovo dipendente parte del team dal primo giorno? Convincere un
            cliente a tornare?
          </p>
          <p>
            La risposta cambia l&apos;oggetto giusto da realizzare. Queste
            sono alcune delle aree in cui lavoriamo più spesso, e gli
            obiettivi che le accompagnano:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 grid gap-px overflow-hidden border border-black/15 sm:grid-cols-2 lg:grid-cols-4"
        >
          {AMBITI.map(({ label, obiettivo, Icon }) => (
            <div
              key={label}
              className="flex items-start gap-3 border border-black/15 px-6 py-5"
            >
              <Icon className="mt-0.5 size-5 shrink-0 text-black" strokeWidth={1.75} />
              <div>
                <p className="text-[15px] font-semibold uppercase tracking-wide text-black">
                  {label}
                </p>
                <p className="mt-1 text-[13px] leading-snug text-black/55">
                  {obiettivo}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
