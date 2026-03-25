const BASE_URL = "https://hotm.io/minha-primeira-renda";

// Tipagem para evitar erros de escrita nos UTMs
type Medium = "button" | "cta" | "modal" | "banner";

export function getEbookLink(medium: Medium, content: string) {
  return `${BASE_URL}?utm_source=site&utm_medium=${medium}&utm_campaign=ebook_nomadev_v1&utm_content=${content}`;
}

export const ebook = {
  title: "NOMADEV Vol. 1 — O INÍCIO",
  subtitle: "Sua primeira renda online com Web + IA",
  description:
    "Aprenda como sair do zero e gerar sua primeira renda online com desenvolvimento web + IA, mesmo sem experiência.",

  // opcional (bom pra debug ou fallback)
  baseLink: BASE_URL,

  cover: "/images/ebook/nomadev/vol1-capa.png",

  pages: [
    "/images/ebook/nomadev/vol1-capa.png",
    "/images/ebook/nomadev/4-sumario-part-1.png",
    "/images/ebook/nomadev/25-o-metodo-web+ia.png",
    "/images/ebook/nomadev/27-como-comecar-rapido.png",
    "/images/ebook/nomadev/33-primeiro-cliente-part1.png",
    "/images/ebook/nomadev/34-primeiro-cliente-part2.png",
    "/images/ebook/nomadev/35-primeiro-cliente-part3.png",
    "/images/ebook/nomadev/37-crie-seus-proprios-infoprodutos-com-ia.png",
    "/images/ebook/nomadev/38-crie-seus-proprios-infoprodutos-com-ia.png",
  ],
};