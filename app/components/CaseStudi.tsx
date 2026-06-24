"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageLabel from "./ImageLabel";

const CASI = [
  {
    cliente: "Deliveroo",
    settore: "Food delivery",
    img: "/images/case-deliveroo.webp",
    sfida:
      "Offrire ai partecipanti di vari eventi gadget originali, in sintonia con un brand giovane e legato al food.",
    soluzione:
      "Una serie di gadget a tema food/drink — tovaglietta americana, mazzo di carte 100% custom, tazza e drink set — pensati per momenti di convivialità.",
  },
  {
    cliente: "Kone",
    settore: "Multinazionale ascensori",
    img: "/images/case-kone.webp",
    sfida:
      "Supportare il lancio di una guida tecnica per progettisti e architetti via mailing.",
    soluzione:
      "Chiavetta USB in pieghevole personalizzato, logistica di spedizione integrata e report di apertura incrociato con i dati di ricezione.",
    quote:
      "Lavoriamo da tempo con loro, siamo seguiti in tutte le fasi di realizzazione del gadget e colpisce sempre la loro velocità nelle risposte.",
    quoteAuthor: "Kone, L.P.",
  },
  {
    cliente: "DPAM",
    settore: "Gestione patrimoniale, Gruppo Indosuez",
    img: "/images/case-dpam.webp",
    sfida:
      "Gadget utili, durevoli e sostenibili per fiere finanziarie come il Salone del Risparmio, coerenti con i valori ESG del brand.",
    soluzione:
      "Soluzioni promozionali in materiali riciclati e certificati, progettate evento per evento mantenendo coerenza con i valori aziendali.",
  },
  {
    cliente: "Scuola Normale Superiore",
    settore: "Istituzionale",
    img: "/images/case-sns.webp",
    sfida:
      "Un regalo aziendale unico, che trasmettesse senso di appartenenza a un'istituzione importante.",
    soluzione:
      "Quadernino in similpelle e penna abbinata, personalizzati con nome del destinatario e finiture Swiss Made.",
    quote:
      "La consulenza creativa di Sercom è stata per noi un valore aggiunto. Prodotti particolari e progetti personalizzati, non il solito gadget da catalogo.",
    quoteAuthor: "Communication Specialist, Scuola Normale Superiore",
  },
];

export default function CaseStudi() {
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
          <p className="text-[13px] font-bold uppercase tracking-wide text-black/40">
            Casi studio
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight text-black">
            Aziende che hanno già scelto Sercom.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {CASI.map((c, i) => (
            <motion.div
              key={c.cliente}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-black/15"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={c.img}
                  alt={`Caso studio Sercom per ${c.cliente}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <ImageLabel text={c.cliente} />
              </div>

              <div className="px-7 py-7">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-bold text-black">{c.cliente}</h3>
                  <span className="text-[12px] font-semibold uppercase tracking-wide text-black/40">
                    {c.settore}
                  </span>
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-black/70">
                  <span className="font-semibold text-black">Sfida: </span>
                  {c.sfida}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-black/70">
                  <span className="font-semibold text-black">Soluzione: </span>
                  {c.soluzione}
                </p>

                {c.quote && (
                  <blockquote className="mt-5 border-l-2 border-black pl-4 text-[14px] italic leading-relaxed text-black/80">
                    &ldquo;{c.quote}&rdquo;
                    <footer className="mt-2 text-[12px] font-semibold uppercase tracking-wide text-black/40">
                      {c.quoteAuthor}
                    </footer>
                  </blockquote>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
