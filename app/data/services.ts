// app/data/services.ts
'use client';

export type Service = {
  key: string;
  name: string;
  category: string;
  description?: string[]; // opcional, usado apenas para cards
  cta?: string;           // opcional, usado apenas para cards
};

// Serviços "flat" para o formulário
export const services: Service[] = [
  {
    key: 'website',
    name: 'Criação de Sites Empresariais',
    category: 'Posicionamento e Presença Digital',
    description: [
      'Sites modernos, responsivos e otimizados',
      'Estrutura estratégica focada em conversão',
      'Comunicação alinhada ao seu público e mercado',
      'Experiência otimizada para clientes no Brasil e exterior',
    ],
    cta: 'Solicitar Projeto Exclusivo',
  },
  {
    key: 'redesign',
    name: 'Reestruturação de Site',
    category: 'Posicionamento e Presença Digital',
    description: [
      'Atualização completa do layout',
      'Otimização de UX/UI',
      'Melhoria de performance',
      'Adequação às melhores práticas de SEO',
    ],
    cta: 'Reestruturar Meu Site',
  },
  {
    key: 'custom',
    name: 'Projeto Sob Medida',
    category: 'Posicionamento e Presença Digital',
    description: [
      'Funcionalidades sob medida',
      'Integrações estratégicas e automações',
      'Soluções técnicas adaptadas ao seu negócio',
      'Desenvolvimento completo de ponta a ponta',
    ],
    cta: 'Consultar Solução Personalizada',
  },
  {
    key: 'maintenance',
    name: 'Manutenção e Suporte',
    category: 'Suporte e Evolução',
    description: [
      'Atualizações e backups regulares',
      'Monitoramento contínuo de performance',
      'Ajustes e melhorias constantes',
      'Suporte ágil para resolver problemas rapidamente',
    ],
    cta: 'Garantir Minha Segurança',
  },
  {
    key: 'performance',
    name: 'Otimização de Performance',
    category: 'Suporte e Evolução',
    description: [
      'Análise de velocidade do site',
      'Correção de problemas técnicos',
      'Melhoria de tempo de carregamento',
      'Otimização para SEO e UX',
    ],
    cta: 'Otimizar Performance',
  },
  {
    key: 'seo-local',
    name: 'Posicionamento no Google',
    category: 'Autoridade e Aquisição de Clientes',
    description: [
      'Otimização para busca local',
      'Palavras-chave estratégicas',
      'Aumento de tráfego qualificado',
      'Fortalecimento da presença online',
    ],
    cta: 'Melhorar SEO Local',
  },
  {
    key: 'analysis',
    name: 'Diagnóstico Estratégico',
    category: 'Autoridade e Aquisição de Clientes',
    description: [
      'Avaliação completa do site e marketing',
      'Relatório detalhado de melhorias',
      'Estratégias personalizadas',
      'Recomendações práticas para crescimento',
    ],
    cta: 'Receber Diagnóstico',
  },
  {
    key: 'landing',
    name: 'Landing Pages',
    category: 'Marketing Digital',
    description: [
      'Páginas de captura e vendas focadas em conversão',
      'Design moderno e otimizado',
      'Integração com automações e WhatsApp',
      'Foco em gerar leads e vendas',
    ],
    cta: 'Criar Minha Landing Page',
  },
  {
    key: 'ecommerce',
    name: 'E-commerce',
    category: 'Marketing Digital',
    description: [
      'Lojas virtuais completas e integradas',
      'Gestão de produtos e pagamentos',
      'Design moderno e responsivo',
      'Preparado para crescimento e escalabilidade',
    ],
    cta: 'Desenvolver Minha Loja Online',
  },
  {
    key: 'marketing-consult',
    name: 'Consultoria de Marketing Digital',
    category: 'Marketing Digital',
    description: [
      'Planejamento estratégico para atrair clientes',
      'Melhoria de presença online e autoridade',
      'Orientação prática para aumentar vendas',
      'Soluções personalizadas para o seu negócio',
    ],
    cta: 'Receber Consultoria',
  },
  {
    key: 'ads',
    name: 'Gestão de Tráfego Pago',
    category: 'Marketing Digital',
    description: [
      'Campanhas otimizadas no Google Ads, Facebook e Instagram',
      'Aumento de leads e vendas qualificadas',
      'Estratégias baseadas em dados e resultados',
      'Acompanhamento e otimização contínua',
    ],
    cta: 'Começar Campanha',
  },
  {
    key: 'automation',
    name: 'Automação de Vendas Online',
    category: 'Marketing Digital',
    description: [
      'Funis de vendas integrados com WhatsApp e e-mail',
      'Mensagens automáticas para leads',
      'Aumento de conversão e retenção',
      'Integração completa com seu site e sistemas',
    ],
    cta: 'Automatizar Vendas',
  },
  {
    key: 'cro',
    name: 'Otimização de Conversão (CRO)',
    category: 'Marketing Digital',
    description: [
      'Ajustes estratégicos em sites e landing pages',
      'Foco em aumentar leads e vendas',
      'Análise do comportamento do usuário',
      'Melhoria contínua da experiência do cliente',
    ],
    cta: 'Aumentar Conversão',
  },
  {
    key: 'seo',
    name: 'SEO e Otimização de Conteúdo',
    category: 'Marketing Digital',
    description: [
      'Estratégias para aparecer no topo do Google',
      'Otimização de conteúdo e palavras-chave',
      'Aumento de tráfego orgânico qualificado',
      'Fortalecimento da presença online',
    ],
    cta: 'Melhorar SEO do Site',
  },
];

// 🔹 Utils

export const getServiceName = (key: string) => {
  return services.find((s) => s.key === key)?.name || key;
};

export const trackServiceClick = (serviceKey: string) => {
  if (typeof window === 'undefined') return;

  const current = JSON.parse(localStorage.getItem('serviceClicks') || '{}');

  current[serviceKey] = (current[serviceKey] || 0) + 1;

  localStorage.setItem('serviceClicks', JSON.stringify(current));

  console.log('📊 Service Click:', serviceKey);
};

export const generateWhatsAppMessage = ({
  name,
  email,
  serviceKey,
  message,
}: {
  name: string;
  email: string;
  serviceKey: string;
  message: string;
}) => {
  const serviceName = getServiceName(serviceKey);

  return `Olá Marllon, vim pelo seu site.

Nome: ${name}
Email: ${email}
Interesse: ${serviceName}

Mensagem:
${message}

Quero entender como você pode me ajudar.`;
};

// 🔹 Função auxiliar para agrupar serviços por categoria (para ContactSection e ServicesSection)
export const getServicesByCategory = () => {
  const map = new Map<string, Service[]>();
  services.forEach((s) => {
    if (!map.has(s.category)) map.set(s.category, []);
    map.get(s.category)?.push(s);
  });
  return Array.from(map); // retorna [ [categoria, Service[]], ... ]
};