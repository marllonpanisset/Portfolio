'use client';
import React from 'react';

export function ServicesSection() {
  const categories = [
    {
      title: "Criação de Sites",
      services: [
        {
          name: "Landing Page",
          price: "A partir de R$ 1.200",
          description: [
            "Formulário de contato",
            "Links para WhatsApp e redes sociais",
            "Página focada em conversão"
          ],
          isLaunchPrice: true,
          serviceKey: "landing-page"
        },
        {
          name: "Site Institucional",
          price: "A partir de R$ 2.000",
          description: [
            "Tudo da Landing Page",
            "Páginas internas (Sobre, Serviços, Contato)",
            "Estrutura otimizada para SEO",
            "Galeria de imagens",
            "Integração com redes sociais"
          ],
          isLaunchPrice: true,
          serviceKey: "website"
        },
        {
          name: "Site Sob Medida",
          price: "Sob consulta",
          description: [
            "Design exclusivo",
            "Funcionalidades personalizadas",
            "Integrações com sistemas externos",
            "Painel administrativo",
            "Estrutura preparada para crescimento"
          ],
          serviceKey: "custom"
        }
      ]
    },
    {
      title: "Manutenção e Suporte",
      services: [
        {
          name: "Plano Essencial",
          price: "R$ 79 / mês",
          description: [
            "Atualizações de segurança",
            "Monitoramento do site",
            "Backup periódico",
            "1h de alterações por mês",
            "Suporte via WhatsApp"
          ],
          isLaunchPrice: true,
          serviceKey: "maintenance-basic"
        },
        {
          name: "Plano Profissional",
          price: "R$ 159 / mês",
          description: [
            "Tudo do Plano Essencial",
            "4h de alterações por mês",
            "Otimização de performance",
            "Relatórios mensais",
            "Suporte prioritário"
          ],
          isLaunchPrice: true,
          serviceKey: "maintenance-pro"
        },
        {
          name: "Plano Personalizado",
          price: "Sob consulta",
          description: [
            "Atendimento dedicado",
            "Horas personalizadas de suporte",
            "Consultoria técnica",
            "Melhorias contínuas",
            "Suporte prioritário"
          ],
          serviceKey: "maintenance-custom"
        }
      ]
    },
    {
      title: "Presença Digital",
      services: [
        {
          name: "SEO Local",
          price: "Sob consulta",
          description: [
            "Apareça no Google quando clientes procurarem serviços na sua região",
            "Configuração do Google Meu Negócio",
            "Otimização para buscas locais",
            "Gestão de avaliações",
            "Análise de concorrentes",
            "Relatórios de desempenho"
          ],
          serviceKey: "seo-local"
        },
        {
          name: "Google Meu Negócio",
          price: "Sob consulta",
          description: [
            "Configuração e otimização para aumentar visibilidade local",
            "Gestão de avaliações",
            "Análise de concorrentes",
            "Relatórios de desempenho"
          ],
          serviceKey: "google-my-business"
        }
      ]
    }
  ];

  const categoryIds: Record<string, string> = {
    "Criação de Sites": "criacao-de-sites",
    "Manutenção e Suporte": "manutencao-e-suporte",
    "Presença Digital": "presenca-digital"
  };

  const handleClick = (serviceKey: string) => {
    // 1. Atualiza o select e o estado imediatamente
    const select = document.getElementById('service') as HTMLSelectElement | null;
    if (select) {
      select.value = serviceKey;
      // Dispara evento para sincronizar o estado do ContactSection
      window.dispatchEvent(new CustomEvent('externalServiceSelect', { detail: { serviceKey } }));
    }

    // 2. Rola suavemente até a seção de contato
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 72;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const getButtonText = (categoryTitle: string) => {
    if (categoryTitle === "Criação de Sites") return "Começar projeto";
    if (categoryTitle === "Manutenção e Suporte") return "Contratar plano";
    if (categoryTitle === "Presença Digital") return "Solicitar análise";
    return "Começar projeto";
  };

  return (
    <section
      id="services"
      className="py-20 px-4 md:px-8 bg-[var(--color-bg-services)] text-[var(--color-text-primary)]"
    >
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--color-text-primary)]">
          O que eu posso fazer pelo seu negócio
        </h2>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-14">
          Soluções simples que ajudam você a vender mais online
        </p>

        {categories.map((category, idx) => (
          <div key={idx} className="py-12 px-4 mb-12">
            <h3
              id={categoryIds[category.title]}
              className="text-2xl md:text-3xl font-semibold mb-8 text-[var(--color-text-accent)]"
            >
              {category.title}
            </h3>

            <div
              className={`
                grid 
                grid-cols-1 
                gap-6
                md:grid-cols-2 
                md:gap-8
                ${category.services.length === 2 
                  ? 'lg:grid-cols-2 lg:justify-center' 
                  : 'lg:grid-cols-3'
                }
              `}
            >
              {category.services.map((service, sidx) => (
                <div
                  key={sidx}
                  className="p-6 bg-[var(--color-bg-secondary)] rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col justify-between h-full text-left border border-[var(--color-bg-tertiary)]"
                >
                  <div>
                    <h4 className="text-xl md:text-2xl font-semibold mb-3 text-[var(--color-text-primary)]">
                      {service.name}
                    </h4>

                    <div className="flex items-center gap-3 mb-3">
                      <p className="text-[var(--color-text-secondary)] font-medium">
                        {service.price}
                      </p>
                      {service.isLaunchPrice && (
                        <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full uppercase shadow-sm">
                          Lançamento
                        </span>
                      )}
                    </div>

                    <ul className="text-[var(--color-text-secondary)] list-disc list-inside space-y-1">
                      {service.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <button
                      onClick={() => handleClick(service.serviceKey)}
                      className="bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 transition w-full font-medium"
                    >
                      {getButtonText(category.title)}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="mt-16 text-[var(--color-text-secondary)] text-lg md:text-xl font-medium">
          Mais de 8 anos ajudando negócios locais e digitais a aumentarem clientes e vendas.
        </p>
      </div>
    </section>
  );
}