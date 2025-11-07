// components/ProjectsSection.tsx
import { FolderGit2, Link } from 'lucide-react'; // Importa ícones de pasta e link para serem usados nos botões.
import Image from 'next/image'; // Importa o componente otimizado de imagem do Next.js.

// Array de objetos que contém os dados de cada projeto.
// Isso facilita a manutenção, pois a lista pode ser atualizada em um só lugar.
const projects = [
  {
    title: 'Landing Page Agendamento de Consultas',
    description: 'Uma landing page com formulário para agendamento de consultas de oráculo via WhatAapp com banco de dados externo no Supabase.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
    image: '/cacaudasete.png', // Caminho da imagem para o projeto.
    github: 'https://github.com/marllonpanisset/carolina-rodrigues-oraculista', // URL do repositório no GitHub.
    live: 'https://cacaudasete.netlify.app/', // URL do projeto em produção.
  },
  {
    title: 'Portfólio + Blog em Next.JS',
    description: 'Esse site que você está navegando.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/portfolio.png', // Caminho da imagem para o projeto.
    github: 'https://github.com/marllonpanisset/Portfolio', // URL do repositório no GitHub.
    live: 'https://marllonpanisset.netlify.app/', // URL do projeto em produção.
  },
  {
    title: 'Dashboard Interativo',
    // Descrição corrigida para corresponder ao texto do seu teste
    description: 'projeto que une api de cotação de moedas e dashboard para visualização',
    technologies: ['Python', 'Streamlit'],
    image: '/dashboard-interativo.png',
    github: 'https://github.com/marllonpanisset/dashboard-interativo-com-python',
    live: 'https://dashboard-interativo-com-python.streamlit.app/',
  },
  {
    title: 'Jogo Sorteio do Amigo Secreto',
    description: 'Este projeto é um sorteador de amigos desenvolvido com JavaScript',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: '/amigo-secreto.png',
    github: 'https://github.com/marllonpanisset/Amigo-Secreto',
    live: 'https://marllonpanisset.github.io/challenge-amigo-secreto_pt/',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="py-12 md:px-8 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-20 flex items-center justify-center gap-2 ">
          Projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[var(--color-bg-secondary)] rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group relative">
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[var(--color-text-primary)]">
                  {project.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-4">{project.description}</p>
                
                {/* Seção para as tecnologias. */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* Mapeia o array de tecnologias para criar "badges" para cada uma. */}
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-[var(--color-bg-tertiary)] text-[var(--color-text-accent)] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Seção de links para o GitHub e projeto em produção. */}
                <div className="flex gap-4">
                  {/* Link para o GitHub. */}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-text-accent)] hover:text-[var(--color-text-accent)]/80 transition-colors">
                    <FolderGit2 size={20} /> GitHub
                  </a>
                  {/* Link para o projeto em produção. */}
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

