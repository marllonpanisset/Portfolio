'use client';

import { useState } from "react";
import { ebook } from "../data/ebook";
import ModalPreview from "./ModalPreview";

export default function EbookPreview() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6 text-[var(--color-text-primary)]">
        Veja o que tem dentro
      </h2>

      <img
        src={ebook.cover}
        alt="Capa Ebook"
        className="mx-auto w-64 cursor-pointer hover:scale-105 transition"
        onClick={() => setOpen(true)}
      />

      {open && <ModalPreview onClose={() => setOpen(false)} />}
    </section>
  );
}