// app/sections/AboutSection.tsx

export function AboutSection() {
  return (
    <section 
      id="sobre-mim" 
      className="py-16 px-4 md:px-8 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Sobre Mim
        </h2>
        
        {/* Container para o texto "Sobre Mim" com largura limitada para melhor leitura */}
        <div className="text-center max-w-3xl mx-auto mb-32">
          {/* Parágrafo 1 */}
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            Iniciei minha carreira como Desenvolvedor Front-End em agências de publicidade há mais de 8 anos, mas meu primeiro contato com programação aconteceu aos 13 anos de idade.
          </p>
          {/* Parágrafo 2 */}
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            Ao longo da minha trajetória, atuei em diferentes agências e participei de projetos variados — sites promocionais, intranets, institucionais, e-commerces e landing pages — o que me proporcionou experiência com múltiplos contextos e regras de negócio.
          </p>
          {/* Parágrafo 3 */}
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            Atuo principalmente no ecossistema JavaScript, com foco em React.js, Next.js e Tailwind CSS, desenvolvendo soluções modernas e escaláveis. Priorizo performance, acessibilidade, SEO técnico e Experiência do Usuário (UX), com atenção à arquitetura de componentes e organização sustentável do código.
          </p>

          {/* Parágrafo 4 */}
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            Tenho experiência na implementação de layouts de alta fidelidade (Figma/PSD), transformando design em interfaces responsivas, acessíveis e otimizadas. Trabalho com versionamento em Git e metodologias ágeis, colaborando com equipes multidisciplinares na construção de produtos preparados para evolução contínua.
          </p>
        </div> 
      </div>
    </section>
  );
}
