'use client';
import { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

// Mapeamento das chaves para nomes amigáveis
const serviceDisplayNames: Record<string, string> = {
  'landing-page': 'Criação de Landing Page',
  'website': 'Criação de Site Institucional',
  'custom': 'Criação de Site Sob Medida',
  'maintenance-basic': 'Plano de Manutenção (Essencial)',
  'maintenance-pro': 'Plano de Manutenção (Profissional)',
  'maintenance-custom': 'Plano de Manutenção (Personalizado)',
  'seo-local': 'SEO Local',
  'google-my-business': 'Google Meu Negócio',
};

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',      // guarda a chave (ex: landing-page)
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Efeito para tratar o scroll com offset quando o hash #contact-form for usado
  useEffect(() => {
    if (window.location.hash === '#contact-form') {
      const form = document.getElementById('contact-form');
      if (form) {
        setTimeout(() => {
          const offset = 80;
          const elementPosition = form.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  // Escuta mudanças externas no select (vindas do ServicesSection)
  useEffect(() => {
    const handleExternalSelectChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail?.serviceKey) {
        setFormData(prev => ({ ...prev, service: customEvent.detail.serviceKey }));
      }
    };

    window.addEventListener('externalServiceSelect', handleExternalSelectChange);
    return () => {
      window.removeEventListener('externalServiceSelect', handleExternalSelectChange);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.service) {
      setErrorMessage('Por favor, selecione um serviço.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    // Obtém o nome amigável do serviço (fallback: chave original)
    const serviceDisplay = serviceDisplayNames[formData.service] || formData.service;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: serviceDisplay,   // envia o nome bonito
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        setErrorMessage(data.error || 'Ocorreu um erro ao enviar a mensagem.');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Erro de conexão. Tente novamente mais tarde.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Coluna da esquerda */}
        <div className="flex flex-col justify-start text-center md:text-left space-y-6">
          <h2 className="text-4xl font-bold text-[var(--color-text-primary)]">Vamos conversar?</h2>
          <p className="text-[var(--color-text-secondary)] text-lg">
            Quer um site que vende, uma landing page que converte ou mais visibilidade no Google? Me envie uma mensagem e vamos dar o próximo passo juntos.
          </p>

          <div>
            <h3 className="font-semibold mb-1 text-[var(--color-text-primary)]">E-mail</h3>
            <a href="mailto:marllon@bazestudio.com.br" className="text-[var(--color-text-accent)] hover:underline">
              marllon@bazestudio.com.br
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-1 text-[var(--color-text-primary)]">Localização</h3>
            <p className="text-[var(--color-text-secondary)]">Atuação remota — posso atender de qualquer lugar</p>
          </div>

          {/* Redes sociais */}
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <a href="https://www.instagram.com/seuusuario" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-accent)] hover:text-[var(--color-text-secondary)]">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-accent)] hover:text-[var(--color-text-secondary)]">
              <FaLinkedin size={24} />
            </a>
            <a href="https://wa.me/seunumerodetelefone" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-accent)] hover:text-[var(--color-text-secondary)]">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Coluna do formulário */}
        <form
          id="contact-form"
          className="bg-[var(--color-bg-secondary)] p-8 rounded-xl shadow-lg border border-[var(--color-bg-tertiary)]"
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-bold mb-6 text-[var(--color-text-primary)]">Envie uma mensagem</h3>

          {errorMessage && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
              {errorMessage}
            </div>
          )}

          {submitted && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400">
              Mensagem enviada com sucesso! Entrarei em contato em breve.
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1 text-[var(--color-text-primary)]">
              Nome *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1 text-[var(--color-text-primary)]">
              E-mail *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seuemail@dominio.com"
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="service" className="block font-semibold mb-1 text-[var(--color-text-primary)]">
              Com o que podemos ajudar? *
            </label>
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
            >
              <option value="">Selecione uma opção</option>
              <option value="landing-page">Landing Page</option>
              <option value="website">Site Institucional</option>
              <option value="custom">Site Sob Medida</option>
              <option value="maintenance-basic">Plano Essencial (Manutenção)</option>
              <option value="maintenance-pro">Plano Profissional (Manutenção)</option>
              <option value="maintenance-custom">Plano Personalizado (Manutenção)</option>
              <option value="seo-local">SEO Local</option>
              <option value="google-my-business">Google Meu Negócio</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block font-semibold mb-1 text-[var(--color-text-primary)]">
              Mensagem *
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escreva sua mensagem"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition shadow-md hover:shadow-lg"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>
      </div>
    </section>
  );
}