import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black py-14">
      <div className="mx-auto max-w-5xl px-6">
        <Image
          src="/images/logo-sercom.svg"
          alt="Sercom"
          width={120}
          height={21}
          className="h-6 w-auto"
        />
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/55">
          Neurogadget, merchandising strategico e oggetti promozionali per
          aziende che vogliono essere ricordate.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[12px] text-white/35">
          <p>© {new Date().getFullYear()} Sercom S.r.l.</p>
          <a href="/privacy-policy" className="hover:text-white/60">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
