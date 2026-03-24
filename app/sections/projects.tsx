'use client';
import { FolderGit2, Link, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'Baze Studeo',
    description: 'Site da startup Baze Studeo, mostrando landing pages e automações para captar clientes.',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS'],
    image: '/bazestudeo.png',
    github: '',
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
  const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const prevProject = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length);
    }
  };

  const nextProject = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % projects.length);
    }
  };

  const currentProject = selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-12 px-4 md:px-8 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <div className="container mx-auto">
        {/* Título e subtítulo */}
        <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <motion.h2 id="projects-heading" className="text-3xl md:text-5xl font-bold mb-6 text-[var(--color-text-primary)]" variants={cardVariants}>
            Exemplos do que posso fazer
          </motion.h2>
          <motion.p className="text-[var(--color-text-secondary)] mt-2" variants={cardVariants}>
            Resultados que ajudam negócios a crescer
          </motion.p>
        </motion.div>

        {/* Grid de projetos */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[var(--color-bg-secondary)] rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group relative cursor-pointer"
              variants={cardVariants}
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/50 transition-all duration-500 ease-out group-hover:bg-black/0" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[var(--color-text-primary)]">{project.title}</h3>
                <p className="text-[var(--color-text-secondary)] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-[var(--color-bg-tertiary)] text-[var(--color-text-accent)] text-xs font-semibold px-2.5 py-0.5 rounded-full">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-text-accent)] hover:text-[var(--color-text-accent)]/80 transition-colors"><FolderGit2 size={20} /> GitHub</a>}
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-text-accent)] hover:text-[var(--color-text-accent)]/80 transition-colors"><Link size={20} /> Projeto</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Slider */}
      {currentProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <button
            className="absolute top-8 md:top-12 right-1/2 translate-x-1/2 md:right-[calc(50%_-_759px)] md:translate-x-0 text-white hover:text-orange-500 z-50"
            onClick={closeModal}
          >
            <X size={28} />
          </button>

          <motion.div
            className="bg-[var(--color-bg-secondary)] rounded-xl shadow-xl w-full max-w-[1518px] max-h-[calc(100vh-200px)] relative p-6 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            {/* Setas de navegação */}
            {/* Seta esquerda */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 
                bg-[var(--color-bg-secondary)]/80 
                border border-[var(--color-bg-tertiary)]
                backdrop-blur-sm 
                p-3 rounded-full 
                text-orange-500 hover:bg-[var(--color-bg-tertiary)] hover:scale-110
                transition-all shadow-lg z-50"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Seta direita */}
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 
                bg-[var(--color-bg-secondary)]/80 
                border border-[var(--color-bg-tertiary)]
                backdrop-blur-sm 
                p-3 rounded-full 
                text-orange-500 hover:bg-[var(--color-bg-tertiary)] hover:scale-110
                transition-all shadow-lg z-50"
            >
              <ChevronRight size={32} />
            </button>

            {/* Imagem */}
            <div className="w-full h-[45%] md:h-[400px] lg:h-[500px] relative">
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>

            {/* Conteúdo */}
            <div className="mt-6 w-full text-center">
              <h3 className="text-2xl font-bold mb-2 text-[var(--color-text-primary)]">{currentProject.title}</h3>
              <p className="text-[var(--color-text-secondary)] mb-4">{currentProject.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {currentProject.technologies.map((tech) => (
                  <span key={tech} className="bg-[var(--color-bg-tertiary)] text-[var(--color-text-accent)] text-xs font-semibold px-2.5 py-0.5 rounded-full">{tech}</span>
                ))}
              </div>
              <div className="flex justify-center gap-4">
                {currentProject.github && <a href={currentProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-text-accent)] hover:text-[var(--color-text-accent)]/80 transition-colors"><FolderGit2 size={20} /> GitHub</a>}
                <a href={currentProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--color-text-accent)] hover:text-[var(--color-text-accent)]/80 transition-colors"><Link size={20} /> Projeto</a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}