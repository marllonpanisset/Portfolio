'use client';
import React from 'react';
import { trackServiceClick } from '../data/services';
import { Check } from 'lucide-react';

export function ServicesSection() {
  const categories = [
    {
      title: "Posicionamento e Presença Digital",
      services: [
        {
          name: "Criação de Site Profissional",
          price: "Projeto sob medida",
          description: [
            "Site pensado para gerar confiança imediata",
            "Estrutura estratégica focada em conversão",
            "Comunicação alinhada ao seu público e mercado",
            "Experiência otimizada para clientes no Brasil e exterior"
          ],
          serviceKey: "website"
        },
        {
          name: "Reestruturação de Site",
          price: "Análise personalizada",
          description: [
            "Diagnóstico completo do seu site atual",
            "Identificação de pontos que afastam clientes",
            "Nova estrutura com foco em percepção de valor",
            "Reposicionamento para aumentar autoridade"
          ],
          serviceKey: "redesign"
        },
        {
          name: "Projeto Sob Medida",
          price: "Sob consulta",
          description: [
            "Soluções personalizadas para seu modelo de negócio",
            "Integrações e automações estratégicas",
            "Estrutura preparada para crescimento",
            "Desenvolvimento completo de ponta a ponta"
          ],
          serviceKey: "custom"
        }
      ]
    },
    {
      title: "Suporte e Evolução",
      services: [
        {
          name: "Manutenção e Suporte",
          price: "Plano sob medida",
          description: [
            "Seu site sempre atualizado e seguro",
            "Monitoramento contínuo",
            "Ajustes e melhorias constantes",
            "Suporte direto e ágil"
          ],
          serviceKey: "maintenance"
        },
        {
          name: "Otimização de Performance",
          price: "Sob análise",
          description: [
            "Melhoria de velocidade e carregamento",
            "Ajustes técnicos que impactam conversão",
            "Experiência mais fluida para o usuário",
            "Acompanhamento de resultados"
          ],
          serviceKey: "performance"
        }
      ]
    },
    {
      title: "Autoridade e Aquisição de Clientes",
      services: [
        {
          name: "Posicionamento no Google",
          price: "Sob consulta",
          description: [
            "Apareça quando clientes buscarem seu serviço",
            "Otimização estratégica do Google",
            "Aumento de visibilidade qualificada",
            "Fortalecimento da reputação online"
          ],
          serviceKey: "seo-local"
        },
        {
          name: "Diagnóstico Estratégico",
          price: "Diagnóstico completo",
          description: [
            "Análise da sua presença digital atual",
            "Identificação de oportunidades reais",
            "Ajustes de posicionamento e comunicação",
            "Plano claro para gerar mais resultados"
          ],
          serviceKey: "analysis"
        }
      ]
    }
  ];

  const handleClick = (serviceKey: string) => {
    trackServiceClick(serviceKey);

    window.dispatchEvent(
      new CustomEvent('externalServiceSelect', {
        detail: { serviceKey },
      })
    );

    const contact = document.getElementById('contact');
    if (contact) {
      const offset = 80;
      const top = contact.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-28 px-4 md:px-8 bg-[var(--color-bg-services)]">
      <div className="container mx-auto max-w-6xl text-center">

        {/* HEADLINE */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">
          Você não precisa de um site.
          <br />
          <span className="text-[var(--color-text-accent)]">
            Precisa de uma presença digital que gere negócios.
          </span>
        </h2>

        <p className="text-lg text-[var(--color-text-secondary)] mb-20 max-w-2xl mx-auto">
          Cada projeto aqui é pensado para aumentar percepção de valor, gerar confiança e transformar visitantes em clientes.
        </p>

        {categories.map((category, idx) => (
          <div key={idx} className="mb-20">

            <h3 className="text-xl md:text-2xl font-semibold mb-10 text-[var(--color-text-accent)]">
              {category.title}
            </h3>

            {/* GRID COM CENTRALIZAÇÃO INTELIGENTE */}
            <div
              className={`
                grid gap-8
                md:grid-cols-2
                ${category.services.length === 2
                  ? 'lg:grid-cols-2 max-w-4xl mx-auto'
                  : 'lg:grid-cols-3'}
              `}
            >
              {category.services.map((service, i) => (
                <div
                  key={i}
                  className="
                    group
                    relative
                    flex flex-col justify-between
                    p-6
                    rounded-2xl
                    bg-[var(--color-bg-secondary)]
                    border border-white/5

                    hover:border-[var(--color-text-accent)]
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                    hover:-translate-y-1

                    transition-all duration-300
                  "
                >
                  {/* HEADER COM ÍCONE */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 font-semibold">
                        {service.name.charAt(0)}
                      </div>

                      <h4 className="text-lg font-semibold">
                        {service.name}
                      </h4>
                    </div>

                    <p className="text-sm text-[var(--color-text-secondary)] mb-5">
                      {service.price}
                    </p>

                    {/* LISTA PREMIUM */}
                    <ul className="space-y-3">
                      {service.description.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                        >
                          <Check size={16} className="mt-[2px] text-orange-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleClick(service.serviceKey)}
                    className="
                      mt-8
                      w-full
                      bg-[var(--color-text-accent)]
                      text-white
                      py-3
                      rounded-xl
                      font-medium
                      hover:opacity-90
                      transition
                      shadow-sm group-hover:shadow-md
                    "
                  >
                    Falar sobre isso
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="mt-20 text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          O objetivo não é apenas ter presença online — é ser percebido como a melhor escolha quando o cliente estiver pronto para decidir.
        </p>
      </div>
    </section>
  );
}