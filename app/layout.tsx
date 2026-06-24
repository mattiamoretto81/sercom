import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neurogadget by Sercom — Oggetti che restano nella memoria",
  description:
    "Sercom progetta Neurogadget: idee e oggetti promozionali pensati per creare attenzione, rafforzare il ricordo del brand e generare esperienze memorabili.",
  openGraph: {
    title: "Neurogadget by Sercom",
    description:
      "Una raccolta riservata a Marketing Manager e Brand Manager: idee, esempi e Neurogadget progettati per il tuo settore.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-black">{children}</body>
    </html>
  );
}
