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
    { company: 'Autoôomo - Panisset Dev', role: 'Dev Front-End Pleno', period: 'Setembro 2024 - Atualmente', description: 'Atuo como Freelancer criando soluções para web como Landing Pages, Portfólios, Ecommerce WordPress WooCommerce' },
    { company: 'Binaria', role: 'Dev Front-End Jr', period: 'Junho 2022 - Dezembro 2022', description: 'Gestão de conteúdo em CMS Privado' },
    { company: 'ED3 Digital', role: 'Dev Front-End Jr', period: 'Agosto 2020 - Abril 2022', description: 'Desenvolvimento e manutenção de e-commerces em VTEX.' },
    { company: 'AM4', role: 'Dev Front-End Jr', period: 'Junho 2019 - Março 2020', description: 'Apoio em correções de bugs e implementação e funcionalidades e componentes para plataforma de biblioteca virtual, correções de HTML de livros e epub' },
    { company: 'Sirius Interativa', role: 'Dev Front-End Jr', period: 'Janeiro 2018 - Maio 2019', description: 'Trabalhava como Front-end junto com equipe de desenvolvimento, designers e gerentes de projeto, participei de diversões projetos como sites corporativos, sistemas e intranets usando tecnologias e frameworks como jQuery, JavaScript, React, HTML5, CSS3, Pug, Scss, WordPress, Drupal, Progressive Web App, Webdesign Responsivo, Docker, WebpackTrabalhava' },
    { company: 'Sírius Interativa', role: 'Dev Front-End Jr Estágio', period: 'Junho 2016 - Dezembro 2017', description: 'Criação de templates estáticos em HTML,CSS E JavaScript, e templates HTML de email marketing' },
    { company: 'Hospital Rio Mar', role: 'Técnico em Informática', period: 'Agosto 2011 - Maio 2016', description: 'montagem e manutenção de computadores, instalação de infraestrutura de rede cabeada e rede wifi, instalação de impressoras e softwares, suporte presencial e remoto' },
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
          {/* Parágrafo 1 - Foco na experiência e especialidade */}
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            Com mais de 8 anos de experiência em desenvolvimento front-end, sou especialista na criação de interfaces de usuário modernas e responsivas, utilizando tecnologias como HTML5, CSS3 (com foco em Tailwind CSS), JavaScript e o framework Next.js.
          </p>
          {/* Parágrafo 2 - Foco na paixão e visão de código */}
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            Minha paixão é desenvolver componentes reutilizáveis que otimizam o desempenho e a manutenção do código, sempre com um olhar atento para acessibilidade e uma excelente experiência do usuário (UX).
          </p>
          {/* Parágrafo 3 - Foco na evolução e estudos */}
          <p className="text-lg text-[var(--color-text-secondary)]">
            Atualmente, estou expandindo minhas habilidades cursando análise e desenvolvimento de sistemas pela Unicesumar e complementando minha formação com foco em Back-End e Inteligência Artificial na Alura através da Plataforma Impact, visando atuar em projetos que exigem um conhecimento mais completo e inovador.
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
