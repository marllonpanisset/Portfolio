'use client';

import { useState } from "react";
import { ebook } from "../data/ebook";

export default function ModalPreview({ onClose }: any) {
  const [index, setIndex] = useState(0);

  return (
    <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50 p-4">

      {/* Botão fechar */}
      <button
        className="absolute top-6 right-6 text-[var(--color-text-accent)] text-3xl hover:opacity-80 transition"
        onClick={onClose}
      >
        ✕
      </button>

      {/* Botões de navegação esquerda/direita */}
      <button
        className="absolute left-6 text-[var(--color-text-accent)] text-4xl hover:opacity-80 transition"
        onClick={() => setIndex((prev) => (prev > 0 ? prev - 1 : prev))}
      >
        ←
      </button>

      {/* Imagem da página atual */}
      <img
        src={ebook.pages[index]}
        alt="Página do ebook"
        className="max-h-[60vh] md:max-h-[70vh] rounded-lg shadow-lg object-contain"
      />

      <button
        className="absolute right-6 text-[var(--color-text-accent)] text-4xl hover:opacity-80 transition"
        onClick={() =>
          setIndex((prev) =>
            prev < ebook.pages.length - 1 ? prev + 1 : prev
          )
        }
      >
        →
      </button>

      {/* CTA FIXO NO RODAPÉ */}
      <div className="mt-6 flex justify-center">
        <a
          href={ebook.hotmartLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition hover:bg-orange-600 animate-pulse"
        >
          Quero comprar agora
        </a>
      </div>

    </div>
  );
}