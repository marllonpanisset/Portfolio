'use client';
import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'; // ícones de redes sociais

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('subject', `[${formData.service}] ${formData.subject}`);
      form.append('message', formData.message);
      form.append('service', formData.service);

      const response = await fetch('https://formspree.io/f/xaqpjlgp', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: form,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', service: '', message: '' });
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
          <h2 className="text-4xl font-bold">Fale comigo</h2>
          <p className="text-[var(--color-text-secondary)]">
            Precisa de um site, landing page ou otimizar sua presença digital? Me envie uma mensagem e vamos conversar.
          </p>

          <div>
            <h3 className="font-semibold mb-1">E-mail</h3>
            <a href="mailto:contato@seudominio.com" className="text-[var(--color-text-accent)] hover:underline">
              contato@seudominio.com
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Localização</h3>
            <p>Atuação remota — posso atender de qualquer lugar</p>
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
          className="bg-[var(--color-bg-secondary)] p-8 rounded-xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>

          {errorMessage && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700">
              {errorMessage}
            </div>
          )}

          {submitted && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded text-green-700">
              Mensagem enviada com sucesso! Entrarei em contato em breve.
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">Nome *</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              required
              className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-[var(--color-text-accent)] outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">E-mail *</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seuemail@dominio.com"
              required
              className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-[var(--color-text-accent)] outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="service" className="block font-semibold mb-1">Com o que podemos ajudar? *</label>
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-[var(--color-text-accent)] outline-none"
            >
              <option value="">Selecione uma opção</option>
              <option value="website">Criação de site</option>
              <option value="landing-page">Landing Page</option>
              <option value="seo">Otimização / SEO</option>
              <option value="consultoria">Consultoria Digital</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block font-semibold mb-1">Assunto *</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Como podemos ajudar?"
              required
              className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-[var(--color-text-accent)] outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block font-semibold mb-1">Mensagem *</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escreva sua mensagem"
              rows={5}
              required
              className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-[var(--color-text-accent)] outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[var(--color-text-accent)] text-[var(--color-bg-primary)] font-semibold px-6 py-3 rounded hover:brightness-110 transition"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>
      </div>
    </section>
  );
}