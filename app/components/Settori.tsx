"use client";

import { motion } from "framer-motion";
import {
  Factory,
  UtensilsCrossed,
  Cpu,
  BedDouble,
  ShoppingCart,
  Stethoscope,
  Handshake,
  ShieldCheck,
  Landmark,
  Car,
  Building2,
  Zap,
  Truck,
  Gem,
  Antenna,
  Building,
  GraduationCap,
  Dumbbell,
  Sprout,
  Clapperboard,
} from "lucide-react";

const SETTORI = [
  { label: "Industria e manifattura", Icon: Factory },
  { label: "Food e beverage", Icon: UtensilsCrossed },
  { label: "Tecnologia e software", Icon: Cpu },
  { label: "Hospitality e turismo", Icon: BedDouble },
  { label: "Retail e GDO", Icon: ShoppingCart },
  { label: "Pharma e healthcare", Icon: Stethoscope },
  { label: "Servizi B2B", Icon: Handshake },
  { label: "Assicurazioni", Icon: ShieldCheck },
  { label: "Bancario e finanza", Icon: Landmark },
  { label: "Automotive", Icon: Car },
  { label: "Real estate e costruzioni", Icon: Building2 },
  { label: "Energia e utility", Icon: Zap },
  { label: "Logistica e trasporti", Icon: Truck },
  { label: "Moda e lusso", Icon: Gem },
  { label: "Telecomunicazioni", Icon: Antenna },
  { label: "Pubblica amministrazione", Icon: Building },
  { label: "Istruzione e formazione", Icon: GraduationCap },
  { label: "Sport e fitness", Icon: Dumbbell },
  { label: "Agricoltura", Icon: Sprout },
  { label: "Media e intrattenimento", Icon: Clapperboard },
];

export default function Settori() {
  return (
    <section className="bg-white py-24 border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-black">
            Idee diverse per mercati diversi.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black/75">
            Ogni settore ha dinamiche diverse. Un&apos;azienda industriale ha
            esigenze diverse da un brand food. Un&apos;azienda B2B tecnica
            lavora su fiducia, competenza e relazione. Un brand consumer
            lavora su esperienza, riconoscibilità e legame emotivo.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-black/75">
            Per questo Sercom costruisce idee su misura, partendo dal
            mercato, dal target e dal contesto in cui l&apos;oggetto verrà
            ricevuto.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-px overflow-hidden border border-black/15 sm:grid-cols-3 lg:grid-cols-4">
          {SETTORI.map(({ label, Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="group flex items-center gap-3 border border-black/15 px-6 py-6 transition-colors hover:bg-black"
            >
              <Icon
                className="size-5 shrink-0 text-black transition-colors group-hover:text-white"
                strokeWidth={1.75}
              />
              <p className="text-[14px] font-bold uppercase tracking-wide text-black transition-colors group-hover:text-white">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
