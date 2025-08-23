// components/footer.tsx
'use client';

import Link from 'next/link';
import { Navbar } from './nav'; // Importa o componente Navbar

// Componente Icone Github
const githubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>github</title>
    <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
      <g transform="translate(-140.000000, -7559.000000)">
        <g transform="translate(56.000000, 160.000000)">
          <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"/>
        </g>
      </g>
    </g>
  </svg>
);

// Componente Icone Linkedin
const linkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="-143 145 512 512">
    <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9
    V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7
    C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6
    c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z
    " fill="currentColor"/>
  </svg>
);

// Dados do Componente de Rede Social
const iconsFooter = [
  { name: 'Github', logo: githubIcon, link: 'https://github.com/marllonpanisset' },
  { name: 'Linkedin', logo: linkedinIcon, link: 'https://linkedin.com/in/marllon-panisset' },
];

export default function Footer() {
    // Define a função 'handleLinkClick' para passar ao componente Navbar.
    // Pode ser uma função vazia, já que o footer não tem um menu para fechar.
    const handleLinkClick = () => {};

    return (
        <footer className="w-full bg-neutral-900 text-gray-300 py-10 px-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-center space-y-8 md:space-y-0 md:space-x-8">

              {/* Coluna 1: Contato */}
              <div className="flex-1 text-center md:text-left">
                  <h4 className="font-semibold text-lg text-white mb-2">Contato</h4>
                  <div className="space-y-2">
                      <div className="flex items-center justify-center md:justify-start">
                          <a href="mailto:panisset.dev@gmail.com" className="hover:text-white transition-colors">panisset.dev@gmail.com</a>
                      </div>
                      <div className="flex items-center justify-center md:justify-start">
                          <a href="https://wa.me/5521987881633" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">(21) 98788-1633</a>
                      </div>
                  </div>
              </div>

              {/* Coluna 2: Social */}             
              <div className="flex-1 text-center md:text-left">
                  <h4 className="font-semibold text-lg text-white mb-2">Social</h4>
                  <div className="flex justify-center md:justify-start space-x-4">
                    {iconsFooter.map((icon) => (
                      <Link 
                        key={icon.name} 
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-accent)] transition-colors"
                      >
                        <icon.logo className="w-6 h-6" />
                      </Link>
                    ))}
                  </div>
              </div>

              {/* Coluna 3: Navegação */}
              <div className="flex-1 text-center md:text-left">
                <h4 className="font-semibold text-lg text-white mb-2">Navegação</h4>
                <Navbar onLinkClick={handleLinkClick} isFooter={true} />
              </div>
              
          </div>
          <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm">
              <p className="text-sm">
                {new Date().getFullYear()} &copy; Marllon Panisset
            </p>
          </div>
      </footer>
    )
}