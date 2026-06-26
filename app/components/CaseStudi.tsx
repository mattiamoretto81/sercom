"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageLabel from "./ImageLabel";

const CASI = [
  {
    cliente: "Deliveroo",
    settore: "Food delivery",
    logo: "/images/clients/deliveroo.svg",
    img: "/images/case-deliveroo.webp",
    sfida:
      "Offrire ai partecipanti di vari eventi gadget originali, in sintonia con un brand giovane e legato al food.",
    soluzione:
      "Una serie di gadget a tema food/drink — tovaglietta americana, mazzo di carte 100% custom, tazza e drink set — pensati per momenti di convivialità.",
  },
  {
    cliente: "Kone",
    settore: "Multinazionale ascensori",
    logo: "/images/clients/kone.svg",
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
    cliente: "Toyota",
    settore: "Automotive",
    logo: "/images/clients/toyota.svg",
    img: "/images/case-toyota.webp",
    sfida:
      "Creare un oggetto che avesse la duplice funzione di collocarsi nel mondo automotive, legato al brand Toyota, ma realizzato totalmente custom.",
    soluzione:
      "Miniature fedeli di autovetture Toyota con cassa Bluetooth integrata sotto la scocca — oggetto decorativo per le scrivanie delle concessionarie e regalo per i clienti che acquistavano un'auto.",
  },
  {
    cliente: "Pinalli",
    settore: "Beauty retail",
    logo: "/images/clients/pinalli.svg",
    img: "/images/case-pinalli.webp",
    sfida:
      "Creare gadget promozionali per la Sagra Fagiana 2024 di VeraLab a Brescia: abbigliamento per lo staff e gift a tema luna park, in linea con la nuova immagine fresca e colorata del brand.",
    soluzione:
      "T-shirt personalizzate per il personale, barattolino caramelle riutilizzabile con tappo rosa e profumatori auto full custom in due varianti colore, con stampa fronte/retro.",
    quote:
      "Abbiamo fatto dei brainstorming insieme per trovare delle soluzioni che rispondessero al meglio alle nostre esigenze: alla fine siamo riusciti a creare dei gadget qualitativi e in linea con la nostra personalità.",
    quoteAuthor: "G.B., Responsabile Marketing & Comunicazione, Pinalli",
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
                <div className="flex items-center justify-between gap-3">
                  {c.logo ? (
                    <Image
                      src={c.logo}
                      alt={c.cliente}
                      width={100}
                      height={36}
                      className="h-7 w-auto object-contain"
                    />
                  ) : (
                    <h3 className="text-xl font-bold text-black">{c.cliente}</h3>
                  )}
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
