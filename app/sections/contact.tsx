'use client';
import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { services, generateWhatsAppMessage } from '../data/services';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent;

      if (customEvent.detail?.serviceKey) {
        setFormData((prev) => ({
          ...prev,
          service: customEvent.detail.serviceKey,
        }));

        const form = document.getElementById('contact-form');
        if (form) {
          const top = form.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('externalServiceSelect', handler);
    return () => window.removeEventListener('externalServiceSelect', handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.service) {
      setErrorMessage('Selecione um serviço.');
      return;
    }

    setIsSubmitting(true);

    const text = generateWhatsAppMessage({
      name: formData.name,
      email: formData.email,
      serviceKey: formData.service,
      message: formData.message,
    });

    const url = `https://wa.me/5521987881633?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(url, '_blank');
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <section
      id="contact"
      className="py-28 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          Sua empresa pode continuar como está
          <br />
          <span className="text-orange-500">
            ou começar a atrair mais clientes com estratégia
          </span>
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          Me diga o que você precisa — eu vou te mostrar o próximo passo mais inteligente para o seu cenário.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}
        <div>
          <h3 className="text-2xl font-semibold leading-snug">
            A maioria das empresas não perde clientes por falta de serviço.
            <br />
            <span className="text-orange-500">
              Perde por não transmitir confiança.
            </span>
          </h3>

          <p className="mt-6 text-gray-600 text-lg">
            Me conte rapidamente seu cenário. Eu vou analisar e te responder direto no WhatsApp com o próximo passo mais estratégico.
          </p>

          <a
            href="https://wa.me/5521987881633"
            target="_blank"
            className="mt-6 inline-flex items-center gap-2 text-orange-500 font-medium hover:underline"
          >
            <FaWhatsapp />
            Falar direto no WhatsApp
          </a>
        </div>

        {/* FORM PREMIUM */}
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="
            bg-white
            border border-gray-200
            p-8
            rounded-2xl
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            space-y-4
          "
        >
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          <input
            type="text"
            placeholder="Seu nome"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 rounded-lg border bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition"
          />

          <input
            type="email"
            placeholder="Seu melhor email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 rounded-lg border bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition"
          />

          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            required
            className="w-full p-3 rounded-lg border bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition"
          >
            <option value="">Qual serviço você precisa?</option>
            {services.map((s) => (
              <option key={s.key} value={s.key}>
                {s.name}
              </option>
            ))}
          </select>

          <textarea
            placeholder="Me conta rapidamente seu cenário..."
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-3 rounded-lg border bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 transition resize-none"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="
              w-full
              bg-orange-500
              text-white
              py-3
              rounded-xl
              font-medium
              flex items-center justify-center gap-2

              hover:bg-orange-600
              hover:shadow-lg
              transition
            "
          >
            {isSubmitting ? 'Abrindo...' : 'Quero parar de perder clientes'}
            <FaWhatsapp />
          </button>
        </form>
      </div>
    </section>
  );
}