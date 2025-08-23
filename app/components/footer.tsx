// components/footer.tsx
import Link from 'next/link';
import { Briefcase, Code } from 'lucide-react';

const githubIcon = (props) => (
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

const linkedinIcon = (props) => (
  <svg {...props} viewBox="-143 145 512 512">
    <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9
    V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7
    C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6
    c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z
    " fill="currentColor"/>
  </svg>
);



const iconsFooter = [
  { name: 'Github', logo: githubIcon, link: 'https://github.com/marllonpanisset' },
  { name: 'Linkedin', logo: linkedinIcon, link: 'https://linkedin.com/in/marllon-panisset' },
];

export default function Footer() {
    return (
        <footer className="w-full bg-neutral-900 text-gray-300 py-10 px-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-center space-y-8 md:space-y-0 md:space-x-8">

              <div className="flex-1 text-center md:text-left">
                  <h4 className="font-semibold text-lg text-white mb-2">Navegação</h4>
                  <ul className="space-y-1">
                      <li>
                          <Link href="#inicio" className="hover:text-white transition-colors">
                              Início
                          </Link>
                      </li>
                      <li>
                          <Link href="#sobre-mim" className="hover:text-white transition-colors">
                              Sobre
                          </Link>
                      </li>
                      <li>
                          <Link href="#projetos" className="hover:text-white transition-colors">
                              Projetos
                          </Link>
                      </li>
                      <li>
                          <Link href="/blog" className="hover:text-white transition-colors">
                              Blog
                          </Link>
                      </li>
                  </ul>
              </div>

              {/* Coluna 3: Redes Sociais */}
              <div className="flex-1 text-center md:text-left">
                  <h4 className="font-semibold text-lg text-white mb-2">Siga-me</h4>
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

              {/* Coluna 4: Contato */}
              <div className="flex-1 text-center md:text-left">
                  <h4 className="font-semibold text-lg text-white mb-2">Contato</h4>
                  <div className="space-y-2">
                      <div className="flex items-center justify-center md:justify-start">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg>
                          <a href="mailto:panisset.dev@gmail.com" className="hover:text-white transition-colors">panisset.dev@gmail.com</a>
                      </div>
                      <div className="flex items-center justify-center md:justify-start">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12.001 2c-5.522 0-10 4.478-10 10s4.478 10 10 10 10-4.478 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM14.542 12.59c-.496-.341-1.397-.735-1.574-.793-.16-.052-.403-.046-.579.231-.176.276-.662.793-.811.954-.15.161-.299.184-.552.062-.253-.122-1.066-.394-2.028-1.252-.751-.661-1.259-1.488-1.411-1.74-.152-.252-.016-.39.112-.518.121-.118.27-.29.418-.432.148-.142.197-.267.31-.531.114-.265.057-.497-.028-.684-.085-.187-.662-1.597-.905-2.197-.234-.599-.481-.518-.662-.518-.176 0-.376.012-.578.012s-.401.06-.612.235c-.211.176-.811.794-.811 1.93s.836 2.247.954 2.395c.118.148 1.637 2.492 4.026 3.491.564.238.995.38 1.339.489.544.176 1.05.15 1.455.093.456-.065 1.397-.57 1.597-1.12.2-.55.2-.99.141-1.12s-.226-.175-.49-.311z"></path></svg>
                          <a href="https://wa.me/5521987881633" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">(21) 98788-1633</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Marllon Panisset - Todos os Direitos Reservados
            </p>
          </div>
      </footer>
    )
}