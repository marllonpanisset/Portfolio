// app/termo-de-uso/page.tsx
'use client';

import Link from 'next/link';

export default function TermoDeUso() {
  return (
    <main className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] min-h-screen px-6 pt-[177px] pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[var(--color-text-primary)]">
          Termo de Uso
        </h1>

        <p className="mb-4 text-[var(--color-text-secondary)] leading-relaxed">
          Bem-vindo ao site da Marllon Panisset. Ao acessar e utilizar este site,
          você concorda com os termos e condições descritos abaixo. Se você não concorda,
          por favor, não utilize nossos serviços.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Conteúdo do Site
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)] leading-relaxed">
          Todos os artigos, informações e conteúdos publicados no blog são de caráter
          informativo e educativo. Não garantimos resultados financeiros ou profissionais
          com base no uso de qualquer conteúdo do site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. Ebook NOMADEV
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)] leading-relaxed">
          O ebook <strong>NOMADEV</strong> é oferecido para compra via link externo
          (Hotmart). Todos os direitos autorais pertencem ao autor. Qualquer reprodução
          sem autorização é proibida.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          3. Serviços
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)] leading-relaxed">
          Os serviços anunciados no site (sites, landing pages, presença digital) são
          prestados mediante contrato específico. Resultados podem variar de acordo
          com o projeto e informações fornecidas pelo cliente.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Coleta de Dados
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)] leading-relaxed">
          Coletamos dados fornecidos em formulários, incluindo nome, e-mail, serviço/pacote
          de interesse e mensagem. Esses dados são usados exclusivamente para
          contato e prestação de serviços. Não vendemos seus dados para terceiros.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          5. Responsabilidade
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)] leading-relaxed">
          Não nos responsabilizamos por perdas diretas ou indiretas decorrentes do
          uso do conteúdo do site ou serviços. Todas as informações são fornecidas
          “como estão”.
        </p>

        <p className="mt-8 text-[var(--color-text-secondary)]">
          Para voltar à <Link href="/" className="text-orange-500 hover:underline">home</Link>.
        </p>
      </div>
    </main>
  );
}