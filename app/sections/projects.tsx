// sections/ProjectsSection.tsx
import { FolderGit2, Link } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Baze Studeo',
    description: 'Site da startup Baze Studeo, mostrando landing pages e automações para captar clientes.',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS'],
    image: '/bazestudeo.png',
    github: '', // se não houver GitHub, pode deixar vazio ou remover o link
    live: 'https://bazestudeo.com.br',
  },
  {
    title: 'Portfólio + Blog',
    description: 'Este site serve como portfólio e blog, demonstrando resultados e presença digital.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/portfolio.png',
    github: 'https://github.com/marllonpanisset/Portfolio',
    live: 'https://marllonpanisset.netlify.app/',
  },
  {
    title: 'Landing Page Agendamento de Consultas',
    description: 'Landing page com formulário para agendamento via WhatsApp, aumentando contatos de clientes.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
    image: '/cacaudasete.png',
    github: 'https://github.com/marllonpanisset/carolina-rodrigues-oraculista',
    live: 'https://cacaudasete.netlify.app/',
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-12 px-4 md:px-8 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
    >
      <div className="container mx-auto">
        {/* Título e subtítulo */}
        <div className="text-center mb-20">
          <h2
            id="projects-heading"
            className="text-3xl md:text-5xl font-bold mb-6 text-[var(--color-text-primary)]"
          >
            Exemplos do que posso fazer
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-2">
            Resultados que ajudam negócios a crescer
          </p>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[var(--color-bg-secondary)] rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group relative"
            >
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
                <h3 className="text-xl font-bold mb-2 text-[var(--color-text-primary)]">{project.title}</h3>
                <p className="text-[var(--color-text-secondary)] mb-4">{project.description}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-[var(--color-bg-tertiary)] text-[var(--color-text-accent)] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-text-accent)] hover:text-[var(--color-text-accent)]/80 transition-colors">
                      <FolderGit2 size={20} /> GitHub
                    </a>
                  )}
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