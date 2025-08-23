// components/AboutSection.tsx

// Componente para o ícone do HTML5
const HtmlIcon = (props) => (
  <svg {...props} viewBox="0 0 20 20" fillRule="evenodd">
    <title>html</title>
    <defs>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Dribbble-Light-Preview" transform="translate(-61.000000, -7639.000000)" fill="currentColor">
        <g id="icons" transform="translate(56.000000, 160.000000)">
          <path d="M19.4350881,7485 L19.4279481,7485 L10.8119794,7485 L11.0180201,7487 L19.2300674,7487 C19.109707,7488.752 18.7455658,7492.464 18.6119454,7494.153 L13.99949,7495.451 L13.99949,7495.455 L13.98929,7495.46 L9.37377458,7493.836 L9.05757353,7490 L11.3199411,7490 L11.4800816,7492.063 L13.99337,7493 L13.99949,7493 L16.5086984,7492.1 L16.7667592,7489 L8.95659319,7489 C8.91885306,7488.599 8.43333144,7483.392 8.34867116,7483 L19.6370488,7483 C19.5738086,7483.66 19.5095484,7484.338 19.4350881,7485 L19.4350881,7485 Z M5,7479 L6.63812546,7497.148 L13.98929,7499 L21.3598345,7497.111 L23,7479 L5,7479 Z" id="html-[#124]">
          </path>
        </g>
      </g>
    </g>
  </svg>
);

// Componente para o ícone do CSS3
const CssIcon = (props) => (
  <svg {...props} viewBox="0 0 32 32" fill="currentColor">
    <title>css3</title>
    <path d="M24.235 6.519l-16.47-0.004 0.266 3.277 12.653 0.002-0.319 3.394h-8.298l0.3 3.215h7.725l-0.457 4.403-3.636 1.005-3.694-1.012-0.235-2.637h-3.262l0.362 4.817 6.829 2.128 6.714-1.912 1.521-16.675zM2.879 1.004h26.242l-2.387 26.946-10.763 3.045-10.703-3.047z"></path>
  </svg>
);

// Componente para o ícone do JavaScript
const JsIcon = (props) => (
  <svg {...props} viewBox="364 7319 20 20" fill="currentColor">
    <path d="M379.328,7337.432 C377.583,7337.432 376.455,7336.6 375.905,7335.512 L375.905,7335.512 L377.435,7334.626 C377.838,7335.284 378.361,7335.767 379.288,7335.767 C380.066,7335.767 380.563,7335.378 380.563,7334.841 C380.563,7334.033 379.485,7333.717 378.724,7333.391 C377.368,7332.814 376.468,7332.089 376.468,7330.558 C376.468,7329.149 377.542,7328.075 379.221,7328.075 C380.415,7328.075 381.275,7328.491 381.892,7329.578 L380.429,7330.518 C380.107,7329.941 379.758,7329.713 379.221,7329.713 C378.67,7329.713 378.321,7330.062 378.321,7330.518 C378.321,7331.082 378.67,7331.31 379.476,7331.659 C381.165,7332.383 382.443,7332.952 382.443,7334.814 C382.443,7336.506 381.114,7337.432 379.328,7337.432 L379.328,7337.432 Z M375,7334.599 C375,7336.546 373.801,7337.575 372.136,7337.575 C370.632,7337.575 369.731,7337 369.288,7336 L369.273,7336 L369.266,7336 L369.262,7336 L370.791,7334.931 C371.086,7335.454 371.352,7335.825 371.996,7335.825 C372.614,7335.825 373,7335.512 373,7334.573 L373,7328 L375,7328 L375,7334.599 Z M364,7339 L384,7339 L384,7319 L364,7319 L364,7339 Z"></path>
  </svg>
);

// Componente para o ícone do React.js
const ReactIcon = (props) => (
  <svg {...props} width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>react</title>
    <rect width="24" height="24" fill="none"/>
    <path fill="currentColor" d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z"/>
  </svg>
);

// Componente para o ícone do Next.js
const NextjsIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <circle cx="64" cy="64" r="64" fill="currentColor" />
    <path fill="url(#a)" d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z" />
    <path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z" />
    <defs>
      <linearGradient id="a" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="b" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

// Componente para o ícone do Tailwind CSS
const TailwindIcon = (props) => (
  <svg {...props} viewBox="0 0 15 15" fill="none">
    <path d="M7.50006 2.5C6.47409 2.5 5.59203 2.77691 4.89966 3.37037C4.21227 3.95956 3.76259 4.81729 3.51314 5.88638C3.45869 6.1197 3.57742 6.35885 3.79619 6.45654C4.01496 6.55423 4.27228 6.483 4.40967 6.28672C4.7263 5.8344 5.04244 5.56261 5.3462 5.42313C5.64038 5.28805 5.95748 5.26068 6.32069 5.35797C6.68723 5.45615 6.97097 5.74369 7.41643 6.22816L7.43082 6.24382C7.76661 6.60905 8.17623 7.0546 8.73649 7.40028C9.31785 7.75898 10.0413 7.99999 11.0001 7.99999C12.026 7.99999 12.9081 7.72307 13.6005 7.12962C14.2878 6.54043 14.7375 5.6827 14.987 4.61361C15.0414 4.38029 14.9227 4.14114 14.7039 4.04345C14.4852 3.94576 14.2278 4.01698 14.0904 4.21326C13.7738 4.66559 13.4577 4.93737 13.1539 5.07686C12.8597 5.21194 12.5426 5.23931 12.1794 5.14202C11.8129 5.04384 11.5291 4.7563 11.0837 4.27182L11.0693 4.25616C10.7335 3.89093 10.3239 3.44538 9.76362 3.09971C9.18227 2.74101 8.45883 2.5 7.50006 2.5Z" fill="currentColor" />
    <path d="M4.00006 6.99999C2.97409 6.99999 2.09203 7.2769 1.39966 7.87036C0.712271 8.45955 0.262592 9.31727 0.0131365 10.3864C-0.0413057 10.6197 0.0774162 10.8588 0.296186 10.9565C0.514956 11.0542 0.772276 10.983 0.909673 10.7867C1.2263 10.3344 1.54244 10.0626 1.8462 9.92312C2.14038 9.78804 2.45747 9.76067 2.82069 9.85796C3.18723 9.95614 3.47097 10.2437 3.91643 10.7282L3.93082 10.7438C4.2666 11.109 4.67624 11.5546 5.23649 11.9003C5.81785 12.259 6.54128 12.5 7.50006 12.5C8.52602 12.5 9.40808 12.2231 10.1005 11.6296C10.7878 11.0404 11.2375 10.1827 11.487 9.1136C11.5414 8.88027 11.4227 8.64113 11.2039 8.54343C10.9852 8.44574 10.7278 8.51697 10.5904 8.71325C10.2738 9.16558 9.95768 9.43736 9.65391 9.57684C9.35974 9.71192 9.04264 9.7393 8.67942 9.64201C8.31289 9.54383 8.02915 9.25628 7.58369 8.77181L7.56929 8.75615C7.23351 8.39092 6.82388 7.94537 6.26362 7.59969C5.68227 7.241 4.95883 6.99999 4.00006 6.99999Z" fill="currentColor" />
  </svg>
);

// Componente para o ícone do Styled Components
const StyledComponentsIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
    <title>styled-components icon</title>
    <path d="M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z"></path>
  </svg>
);

// Dados de habilidades
const skills = [
  { name: 'HTML5', logo: HtmlIcon },
  { name: 'CSS3', logo: CssIcon },
  { name: 'JavaScript', logo: JsIcon },
  { name: 'React.js', logo: ReactIcon },
  { name: 'Next.js', logo: NextjsIcon },
  { name: 'Tailwind CSS', logo: TailwindIcon },
  { name: 'Styled Components', logo: StyledComponentsIcon },
];

// Dados de experiência
const experience = [
  { company: 'Binaria', role: 'Dev Front-End Pleno', period: 'Junho 2022 - Dezembro 2022', description: 'Gestão de conteúdo em CMS Privado' },
  { company: 'ED3 Digital', role: 'Dev Front-End Pleno', period: 'Agosto 2020 - Abril 2022', description: 'Desenvolvimento e manutenção de e-commerces em VTEX.' },
  { company: 'AM4', role: 'Dev Front-End Jr', period: 'Junho 2019 - Março 2020', description: 'Apoio em correções de bugs e implementação e funcionalidades e componentes para plataforma de biblioteca virtual, correções de HTML de livros e epub' },
  { company: 'Sirius Interativa', role: 'Dev Front-End Jr', period: 'Janeiro 2018 - Maio 2019', description: 'Trabalhava como Front-end junto com equipe de desenvolvimento, designers e gerentes de projeto, participava de reuniões internas da equipe, participei de diversões projetos como sites corporativos, sistemas e intranets usando tecnologias e frameworks como jQuery, JavaScript, React, HTML5, CSS3, Pug, Scss, WordPress, Drupal, Progressive Web App, Webdesign Responsivo, Docker, WebpackTrabalhava' },
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
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-text-primary)]">
          Sobre Mim
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-32 text-[var(--color-text-secondary)]">
          Desenvolvedor Front-End com 10 anos de experiência, especializado na criação de interfaces modernas, responsivas e otimizadas. Apaixonado por tecnologia, busco sempre aprimorar minhas habilidades e entregar soluções eficientes que proporcionem a melhor experiência ao usuário.
        </p>
        <h2 className="text-3xl font-bold text-center mb-8 text-[var(--color-text-primary)]">
          Habilidades
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-28 mt-20">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="flex flex-col items-center justify-center w-32 h-32 p-4 bg-[var(--color-bg-secondary)] rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <skill.logo className="w-12 h-12 mb-2 text-[var(--color-text-accent)]" />
              <span className="text-sm font-medium text-[var(--color-text-primary)] text-center">{skill.name}</span>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold text-center mb-20 text-[var(--color-text-primary)]">
          Experiência
        </h2>
        <div className="container mx-auto px-4 py-8">
          {/* Container principal para a timeline. No desktop, ele contém a linha vertical. */}
          <div className="relative wrap overflow-hidden p-10 h-full">
            {/* Linha vertical central da timeline (apenas em telas maiores que md) */}
            <div className="border-2-2 absolute border-opacity-20 border-[var(--color-text-secondary)] h-full border rounded hidden md:block" style={{ left: '50%' }}></div>

            {/* Mapeia cada item de experiência para um elemento na timeline */}
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`
                  mb-8 flex justify-between items-center w-full
                  ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}
                `}
              >
                {/* Lado vazio da timeline para o alinhamento */}
                <div className="hidden md:block md:w-5/12"></div>
                
                {/* Ponto na linha da timeline */}
                <div className="flex items-center justify-center relative z-10 w-8 h-8 rounded-full bg-[var(--color-bg-tertiary)] text-white shrink-0">
                  <div className="w-4 h-4 rounded-full bg-[var(--color-text-accent)]"></div>
                </div>

                {/* Lado com o cartão de experiência */}
                <div className="p-4 rounded-lg shadow-md w-full md:w-5/12 bg-[var(--color-bg-secondary)]">
                  <h3 className="text-xl font-semibold text-[var(--color-text-accent)]">{exp.role}</h3>
                  <h4 className="text-md text-[var(--color-text-secondary)]">{exp.company}</h4>
                  <p className="text-xs mt-2 text-[var(--color-text-secondary)]">{exp.period}</p>
                  <p className="text-sm mt-2 text-[var(--color-text-secondary)]">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}