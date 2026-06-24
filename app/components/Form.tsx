"use client";

import RaccoltaBox from "./RaccoltaBox";

export default function Form() {
  return (
    <section id="form" className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6">
        <RaccoltaBox location="form" mode="confirm" />
      </div>
    </section>
  );
}
