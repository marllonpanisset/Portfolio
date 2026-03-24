// app/politica-de-privacidade/page.tsx
'use client';

import Link from 'next/link';

export default function PoliticaDePrivacidade() {
  return (
    <main className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] min-h-screen px-6 pt-[177px] pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[var(--color-text-primary)]">
          Política de Privacidade
        </h1>

        <p className="mb-4 text-[var(--color-text-secondary)] leading-relaxed">
          A privacidade dos usuários é muito importante para nós. Esta política descreve
          como coletamos, usamos e protegemos seus dados.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Informações Coletadas
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)] leading-relaxed">
          Coletamos informações fornecidas voluntariamente, como nome, e-mail, serviço/pacote
          de interesse e mensagens enviadas através de formulários do site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. Uso dos Dados
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)] leading-relaxed">
          Os dados coletados são utilizados exclusivamente para:
        </p>
        <ul className="list-disc ml-6 mb-4 text-[var(--color-text-secondary)] leading-relaxed">
          <li>Contato com clientes e leads;</li>
          <li>Prestar serviços solicitados;</li>
          <li>Envio de informações sobre ebooks, artigos e novidades.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          3. Compartilhamento de Dados
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)] leading-relaxed">
          Não compartilhamos seus dados com terceiros para fins de marketing. Apenas informações
          necessárias podem ser compartilhadas com prestadores de serviços para execução
          dos serviços contratados.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Links Externos
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)] leading-relaxed">
          O site pode conter links para páginas externas, como Hotmart para compra do ebook.
          Não nos responsabilizamos pelas práticas de privacidade de sites terceiros.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          5. Segurança
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)] leading-relaxed">
          Implementamos medidas de segurança para proteger seus dados contra acesso não autorizado
          ou divulgação. Porém, nenhum sistema é 100% seguro.
        </p>

        <p className="mt-8 text-[var(--color-text-secondary)]">
          Para voltar à <Link href="/" className="text-orange-500 hover:underline">home</Link>.
        </p>
      </div>
    </main>
  );
}