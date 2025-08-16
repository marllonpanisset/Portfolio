// components/footer.tsx
import Link from 'next/link';

// Componente para o ícone de seta
function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    )
}

// Componente para os ícones sociais (substitua pelos seus SVGs ou ícones)
function SocialIcon({ icon, link, altText }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
        >
            {/* O 'src' do SVG precisa ser um caminho válido no seu projeto */}
            <img src={icon} alt={altText} className="w-6 h-6" />
        </a>
    )
}

export default function Footer() {
    return (
        <footer className="w-full bg-neutral-900 text-gray-300 py-10 px-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-8">

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
                      <SocialIcon icon="/icons/github.svg" link="https://github.com/seuperfil" altText="GitHub" />
                      <SocialIcon icon="/icons/linkedin.svg" link="https://linkedin.com/in/seuperfil" altText="LinkedIn" />
                      <SocialIcon icon="/icons/behance.svg" link="https://behance.net/seuperfil" altText="Behance" />
                  </div>
              </div>

              {/* Coluna 4: Contato */}
              <div className="flex-1 text-center md:text-left">
                  <h4 className="font-semibold text-lg text-white mb-2">Contato</h4>
                  <div className="space-y-2">
                      <div className="flex items-center justify-center md:justify-start">
                          <img src="/icons/email.svg" alt="Email" className="w-5 h-5 mr-2" />
                          <a href="mailto:marllon.panisset@gmail.com" className="hover:text-white transition-colors">marllon.panisset@gmail.com</a>
                      </div>
                      <div className="flex items-center justify-center md:justify-start">
                          <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 mr-2" />
                          <a href="https://wa.me/5521999999999" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">(21) 99999-9999</a>
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