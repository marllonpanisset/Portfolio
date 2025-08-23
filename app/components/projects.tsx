// components/ProjectsSection.tsx
import { FolderGit2, Link } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Portfólio + Blog em Next.JS',
    description: 'Esse site que você está navegando.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/portfolio.png',
    github: 'https://github.com/marllonpanisset/Portfolio',
    live: 'https://marllonpanisset.netlify.app/',
  },
  {
    title: 'Dashboard Interativo',
    description: 'Este projeto consiste em um dashboard interativo desenvolvido em python com a biblioteca Streamlit, que permite explorar dados salariais de profissionais da área de dados ao redor do mundo.',
    technologies: ['Python', 'Streamlit'],
    image: '/dashboard-interativo.png',
    github: 'https://github.com/marllonpanisset/dashboard-interativo-com-python',
    live: 'https://dashboard-interativo-com-python.streamlit.app/',
  },
  {
    title: 'Jogo Sorteio do Amigo Secreto',
    description: 'Este projeto é um sorteador de amigos desenvolvido com JavaScript puro, HTML e CSS',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    image: '/amigo-secreto.png',
    github: 'https://github.com/marllonpanisset/challenge-amigo-secreto_pt',
    live: 'https://marllonpanisset.github.io/challenge-amigo-secreto_pt/',
  },
  {
    title: 'Jogo do número secreto',
    description: 'Um jogo simples de adivinhação de números.',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    image: '/numero-sercreto.png',
    github: 'https://github.com/marllonpanisset/jogo-do-numero-secreto',
    live: 'https://secretnumberjs.netlify.app/',
  },
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-16 px-4 md:px-8 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-20 flex items-center justify-center gap-2 text-[var(--color-text-primary)]">
          Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-[var(--color-bg-secondary)] rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <Image src={project.image} alt={project.title} width={400} height={250} className="w-full h-auto" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[var(--color-text-primary)]">{project.title}</h3>
                <p className="text-[var(--color-text-secondary)] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-[var(--color-bg-tertiary)] text-[var(--color-text-accent)] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-text-accent)] hover:text-[var(--color-text-accent)]/80 transition-colors">
                    <FolderGit2 size={20} /> GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-text-accent)] hover:text-[var(--color-text-accent)]/80 transition-colors">
                    <Link size={20} /> Projeto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}