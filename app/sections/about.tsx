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
    { company: 'Binaria', role: 'Dev Front-End Pleno', period: 'Junho 2022 - Dezembro 2022', description: 'Gestão de conteúdo em CMS Privado' },
    { company: 'ED3 Digital', role: 'Dev Front-End Pleno', period: 'Agosto 2020 - Abril 2022', description: 'Desenvolvimento e manutenção de e-commerces em VTEX.' },
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
        <p className="text-lg text-center max-w-3xl mx-auto mb-32 text-[var(--color-text-secondary)]">
          Desenvolvedor Front-End com 10 anos de experiência, especializado na criação de interfaces modernas, responsivas e otimizadas. Apaixonado por tecnologia, busco sempre aprimorar minhas habilidades e entregar soluções eficientes que proporcionem a melhor experiência ao usuário.
        </p>
        
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
