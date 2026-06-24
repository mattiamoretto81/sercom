export default function ImageLabel({ text }: { text: string }) {
  return (
    <span className="absolute left-4 bottom-4 z-10 border border-white bg-black/35 px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur-[1px]">
      {text}
    </span>
  );
}
