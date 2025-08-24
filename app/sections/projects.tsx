// components/ProjectsSection.tsx
import { FolderGit2, Link } from 'lucide-react'; // Importa ícones de pasta e link para serem usados nos botões.
import Image from 'next/image'; // Importa o componente otimizado de imagem do Next.js.

// Array de objetos que contém os dados de cada projeto.
// Isso facilita a manutenção, pois a lista pode ser atualizada em um só lugar.
const projects = [
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

// Componente principal para a seção de projetos.
export function ProjectsSection() {
  return (
    // A tag <section> com o ID "projetos" serve como âncora para a navegação suave do menu.
    <section id="projetos" className="py-12 md:px-8 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <div className="container mx-auto">
        {/* Título da seção, com estilos de fonte, alinhamento e espaçamento. */}
        <h2 className="text-4xl font-bold text-center mb-20 flex items-center justify-center gap-2 ">
          Projetos
        </h2>
        
        {/* Grade de cartões de projeto. O layout se adapta para mobile, tablet e desktop. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapeia a constante `projects` para renderizar um cartão para cada item. */}
          {projects.map((project) => (
            // Contêiner de cada cartão de projeto. Adiciona sombras, bordas arredondadas e efeitos de transição.
            <div key={project.title} className="bg-[var(--color-bg-secondary)] rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 group relative">
              
              {/* Contêiner da imagem com efeito de hover. */}
              <div className="relative">
                {/* Componente Image do Next.js para otimização de imagens. */}
                <Image src={project.image} alt={project.title} width={400} height={250} className="w-full h-auto" />
                {/* Camada de sobreposição preta que desaparece ao passar o mouse. */}
                <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
              </div>
              
              {/* Conteúdo de texto do cartão. */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[var(--color-text-primary)]">{project.title}</h3>
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
