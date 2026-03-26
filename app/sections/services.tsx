// services.tsx
'use client';
import React from 'react';
import { trackServiceClick } from '../data/services';
import { Check } from 'lucide-react';

export function ServicesSection() {
  const categories = [
    {
      title: "Web & Sites",
      services: [
        { name: "Criação de Sites Empresariais", description: ["Sites modernos, responsivos e otimizados", "Estrutura estratégica focada em conversão", "Comunicação alinhada ao seu público e mercado", "Experiência otimizada para clientes no Brasil e exterior"], serviceKey: "website", cta: "Solicitar Projeto Exclusivo" },
        { name: "Landing Pages", description: ["Páginas de captura e vendas focadas em conversão", "Design moderno e otimizado", "Integração com automações e WhatsApp", "Foco em gerar leads e vendas"], serviceKey: "landing", cta: "Criar Minha Landing Page" },
        { name: "E-commerce", description: ["Lojas virtuais completas e integradas", "Gestão de produtos e pagamentos", "Design moderno e responsivo", "Preparado para crescimento e escalabilidade"], serviceKey: "ecommerce", cta: "Desenvolver Minha Loja Online" },
        { name: "Manutenção de Sites", description: ["Atualizações e backups regulares", "Monitoramento contínuo de performance", "Ajustes e melhorias constantes", "Suporte ágil para resolver problemas rapidamente"], serviceKey: "maintenance", cta: "Garantir Minha Segurança" },
        { name: "Programação Personalizada", description: ["Funcionalidades sob medida para seu negócio", "Integrações estratégicas e automações", "Soluções técnicas adaptadas às suas necessidades", "Desenvolvimento completo de ponta a ponta"], serviceKey: "custom", cta: "Consultar Solução Personalizada" }
      ]
    },
    {
      title: "Marketing Digital",
      services: [
        { name: "Consultoria de Marketing Digital", description: ["Planejamento estratégico para atrair clientes", "Melhoria de presença online e autoridade", "Orientação prática para aumentar vendas", "Soluções personalizadas para o seu negócio"], serviceKey: "marketing-consult", cta: "Receber Consultoria" },
        { name: "Gestão de Tráfego Pago", description: ["Campanhas otimizadas no Google Ads, Facebook e Instagram", "Aumento de leads e vendas qualificadas", "Estratégias baseadas em dados e resultados", "Acompanhamento e otimização contínua"], serviceKey: "ads", cta: "Começar Campanha" },
        { name: "Automação de Vendas Online", description: ["Funis de vendas integrados com WhatsApp e e-mail", "Mensagens automáticas para leads", "Aumento de conversão e retenção", "Integração completa com seu site e sistemas"], serviceKey: "automation", cta: "Automatizar Vendas" },
        { name: "Otimização de Conversão (CRO)", description: ["Ajustes estratégicos em sites e landing pages", "Foco em aumentar leads e vendas", "Análise do comportamento do usuário", "Melhoria contínua da experiência do cliente"], serviceKey: "cro", cta: "Aumentar Conversão" },
        { name: "SEO e Otimização de Conteúdo", description: ["Estratégias para aparecer no topo do Google", "Otimização de conteúdo e palavras-chave", "Aumento de tráfego orgânico qualificado", "Fortalecimento da presença online"], serviceKey: "seo", cta: "Melhorar SEO do Site" }
      ]
    }
  ];

  const handleClick = (serviceKey: string) => {
    trackServiceClick(serviceKey);

    window.dispatchEvent(
      new CustomEvent('externalServiceSelect', { detail: { serviceKey } })
    );

    const contact = document.getElementById('contact');
    if (contact) {
      const offset = 80;
      const top = contact.getBoundingClientRect().top + window.scrollY - offset;
      // Delay para garantir que o select seja atualizado antes do scroll
      setTimeout(() => window.scrollTo({ top, behavior: 'smooth' }), 0);
    }
  };

  return (
    <section id="services" className="py-28 px-4 md:px-8 bg-[var(--color-bg-services)]">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">
          Você não precisa de um site.
          <br />
          <span className="text-[var(--color-text-accent)]">Precisa de uma presença digital que gere negócios.</span>
        </h2>

        <p className="text-lg text-[var(--color-text-secondary)] mb-20 max-w-2xl mx-auto">
          Cada projeto é pensado para aumentar percepção de valor, gerar confiança e transformar visitantes em clientes.
        </p>

        {categories.map((category, idx) => (
          <div key={idx} className="mb-20">
            <h3 className="text-xl md:text-2xl font-semibold mb-10 text-[var(--color-text-accent)]">{category.title}</h3>

            <div className={`grid gap-8 md:grid-cols-2 lg:${category.services.length === 2 ? 'justify-center' : 'grid-cols-3'}`}>
              {category.services.map((service, i) => (
                <div key={i} className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[var(--color-bg-secondary)] border border-white/5 hover:border-[var(--color-text-accent)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 font-semibold">{service.name.charAt(0)}</div>
                      <h4 className="text-lg font-semibold text-left">{service.name}</h4>
                    </div>

                    <ul className="space-y-3">
                      {service.description.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-left text-[var(--color-text-secondary)]">
                          <Check size={16} className="mt-[2px] text-orange-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleClick(service.serviceKey)}
                    className="mt-8 w-full bg-[var(--color-text-accent)] text-white py-3 rounded-xl font-medium hover:opacity-90 transition shadow-sm group-hover:shadow-md"
                  >
                    {service.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}