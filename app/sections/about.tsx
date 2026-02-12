// app/sections/AboutSection.tsx
import { SkillCard } from '../components/SkillCard';
import { TimelineItem } from '../components/TimelineItem';

// 1. Importamos todos os componentes de ícones que foram criados
import { HtmlIcon } from '../components/icons/HtmlIcon';
import { CssIcon } from '../components/icons/CssIcon';
import { JsIcon } from '../components/icons/JsIcon';
import { ReactIcon } from '../components/icons/ReactIcon';
import { NextjsIcon } from '../components/icons/NextjsIcon';
import { TailwindIcon } from '../components/icons/TailwindIcon';

// 2. Mantemos os dados separados da apresentação (JSX)
const skills = [
  { name: 'HTML5', Icon: HtmlIcon },
  { name: 'CSS3', Icon: CssIcon },
  { name: 'JavaScript', Icon: JsIcon },
  { name: 'React.js', Icon: ReactIcon },
  { name: 'Next.js', Icon: NextjsIcon },
  { name: 'Tailwind CSS', Icon: TailwindIcon },
];

const experience = [
    { 
        company: 'Autônomo', 
        role: 'Desenvolvedor Front-End Jr', 
        period: 'Janeiro 2023 - Atualmente', 
        description: `Período de aprofundamento técnico em novas tecnologias (Next.js, Tailwind CSS) e introdução a Data Science.
• Criação de portfólio e blog pessoal utilizando Next.js e Tailwind CSS, focando em alta performance e SEO.
• Desenvolvimento de soluções web customizadas para clientes (Landing Pages, Portfólios, E-commerce em WordPress/WooCommerce).
• Projeto prático de Data Science (Imersão Alura): Desenvolvimento de um Dashboard Interativo de Salários com Python, Streamlit e Plotly.` 
    },
    { 
        company: 'Grupo Binaria', 
        role: 'Desenvolvedor Front-End Jr', 
        period: 'Junho 2022 - Dezembro 2022', 
        description: `Responsável pela gestão e manutenção de conteúdo em CMS privado e na plataforma Hugo (Static Site Generator).
• Criação de páginas estáticas para exposições virtuais, garantindo fidelidade ao design e responsividade.
• Desenvolvimento utilizando HTML, CSS, Markdown e Git em ambiente ágil.` 
    },
    { 
        company: 'ED3 Digital', 
        role: 'Desenvolvedor Front-End Jr', 
        period: 'Agosto 2020 - Abril 2022', 
        description: `Implementação e manutenção de e-commerces nas arquiteturas VTEX IO e VTEX Legacy.
• Desenvolvimento de soluções e componentes customizados para Front-End em diversas lojas VTEX.
• Criação e otimização de templates de e-mail transacionais em HTML.
• Colaboração em equipe ágil (Kanban) para entrega contínua de funcionalidades.` 
    },
    { 
        company: 'AM4', 
        role: 'Desenvolvedor Front-End Jr', 
        period: 'Junho 2019 - Março 2020', 
        description: `Atuação em correções de bugs e implementação de funcionalidades na plataforma educacional da Pearson.
• Criação de componentes avançados, como a funcionalidade de Highlight de texto em livros EPUB e PDF.
• Realização de ajustes e melhorias em HTML de livros digitais.` 
    },
    { 
        company: 'Sírius Interativa', 
        role: 'Desenvolvedor Front-End Jr', 
        period: 'Janeiro 2018 - Maio 2019', 
        description: `Desenvolvimento de interfaces Front-End para sites corporativos, sistemas e intranets.
• Utilização de frameworks como React e jQuery, e plataformas como WordPress e Drupal.
• Experiência com ferramentas de build e automação: Webpack, Gulp, Docker, Sass/Scss e Pug.
• Colaboração direta com designers e gerentes de projeto.` 
    },
    { 
        company: 'Sírius Interativa', 
        role: 'Desenvolvedor Front-End Jr (Estágio)', 
        period: 'Junho 2016 - Dezembro 2017', 
        description: `Conversão de layouts (PSD para HTML, CSS e jQuery), garantindo fidelidade visual.
• Criação de templates estáticos e desenvolvimento de e-mails marketing em HTML.
• Contribuição na criação de uma stack Front-End com foco em componentes reutilizáveis.` 
    },
    { 
        company: 'Hospital Rio Mar', 
        role: 'Técnico em Informática', 
        period: 'Agosto 2011 - Maio 2016', 
        description: `Suporte presencial e remoto, manutenção de computadores e instalação de softwares.
• Montagem e manutenção de infraestrutura de rede cabeada e Wi-Fi.` 
    },
];

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
            Meu nome é Marllon Panisset. Iniciei minha carreira como Desenvolvedor Front-End Júnior em agências de publicidade há mais de 8 anos, mas tive meu primeiro contato com programação aos 13 anos de idade.
          </p>
          {/* Parágrafo 2 */}
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            Ao longo da minha trajetória, atuei em diferentes agências e participei de projetos variados, incluindo sites promocionais, intranets, sites institucionais, e-commerces e landing pages, o que me proporcionou experiência com múltiplos contextos e regras de negócio.
          </p>
          {/* Parágrafo 3 */}
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            Atuo principalmente no ecossistema JavaScript, com foco em React.js, Next.js e Tailwind CSS, desenvolvendo soluções modernas e escaláveis. Priorizo performance, acessibilidade, SEO técnico e Experiência do Usuário (UX), com atenção à arquitetura de componentes, organização de código e sustentabilidade das aplicações.
          </p>

          {/* Parágrafo 4 */}
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            Tenho experiência na implementação de layouts de alta fidelidade (Figma/PSD), transformando design em interfaces responsivas, acessíveis e otimizadas. Trabalho com versionamento em Git e metodologias ágeis, colaborando com equipes multidisciplinares na construção de produtos preparados para evolução contínua.
          </p>
        </div>
       
        {/* Seção de Habilidades usando o componente SkillCard */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Habilidades
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-28 mt-20">
          {skills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} Icon={skill.Icon} />
          ))}
        </div>
        
        {/* Seção de Experiência usando o componente TimelineItem */}
        <h2 className="text-3xl font-bold text-center mb-20">
          Experiência
        </h2>
        {/* Container da Timeline: Apenas posicionamento, sem padding. */}
        <div className="relative">
          {/* Linha da Timeline: Agora se posiciona corretamente. */}
          {/* 'left-4' no mobile. 'left-1/2' no desktop. */}
          {/* z-0 para garantir que fique atrás dos pontos. */}
          <div 
            className="absolute border-opacity-20 border-[var(--color-text-secondary)] h-full border-2 left-4 md:left-1/2 -translate-x-1/2 z-0"
          ></div>

          {/* Mapeamento das experiências */}
          {experience.map((exp, index) => (
            <TimelineItem 
              key={index} 
              experience={exp} 
              isReversed={index % 2 === 0} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
