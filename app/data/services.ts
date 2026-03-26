export type Service = {
  key: string;
  name: string;
  category: string;
};

export const services: Service[] = [
  // Posicionamento e Presença
  {
    key: 'website',
    name: 'Criação de Site Profissional',
    category: 'Posicionamento e Presença Digital',
  },
  {
    key: 'redesign',
    name: 'Reestruturação de Site',
    category: 'Posicionamento e Presença Digital',
  },
  {
    key: 'custom',
    name: 'Projeto Sob Medida',
    category: 'Posicionamento e Presença Digital',
  },

  // Suporte
  {
    key: 'maintenance',
    name: 'Manutenção e Suporte',
    category: 'Suporte e Evolução',
  },
  {
    key: 'performance',
    name: 'Otimização de Performance',
    category: 'Suporte e Evolução',
  },

  // Aquisição
  {
    key: 'seo-local',
    name: 'Posicionamento no Google',
    category: 'Autoridade e Aquisição de Clientes',
  },
  {
    key: 'analysis',
    name: 'Diagnóstico Estratégico',
    category: 'Autoridade e Aquisição de Clientes',
  },
];

// 🔹 Utils

export const getServiceName = (key: string) => {
  return services.find((s) => s.key === key)?.name || key;
};

// 🔹 Tracking simples (MVP inteligente)
export const trackServiceClick = (serviceKey: string) => {
  if (typeof window === 'undefined') return;

  const current = JSON.parse(localStorage.getItem('serviceClicks') || '{}');

  current[serviceKey] = (current[serviceKey] || 0) + 1;

  localStorage.setItem('serviceClicks', JSON.stringify(current));

  console.log('📊 Service Click:', serviceKey);
};

// 🔹 Mensagem WhatsApp dinâmica
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