// components/mdx.tsx

// Este arquivo contém componentes React personalizados que serão usados para renderizar conteúdo MDX.
// Isso permite que você use componentes interativos e estilizados dentro de arquivos Markdown.

import Link from 'next/link' // Componente de navegação otimizado do Next.js.
import Image from 'next/image' // Componente de imagem otimizado do Next.js.
import { MDXRemote } from 'next-mdx-remote/rsc' // Biblioteca para renderizar MDX no lado do servidor.
import { highlight } from 'sugar-high' // Biblioteca para colorir blocos de código.
import React from 'react' // Importa a biblioteca React.

// Componente para renderizar tabelas HTML a partir dos dados do MDX.
function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

// Componente para criar links personalizados.
// Ele verifica o tipo de link para aplicar o comportamento correto.
function CustomLink(props) {
  let href = props.href

  // Se o link começa com '/', usa o componente Link do Next.js.
  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  // Se o link é uma âncora (#), ele é um link interno na mesma página.
  if (href.startsWith('#')) {
    return <a {...props} />
  }

  // Para links externos, adiciona 'target="_blank"' e 'rel="noopener noreferrer"' por segurança.
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

// Componente para otimizar e estilizar imagens com bordas arredondadas.
function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

// Componente para colorir blocos de código usando 'sugar-high'.
function Code({ children, ...props }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

// Função para converter uma string em um "slug" (formato amigável para URLs e IDs).
function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Substitui espaços por hífens.
    .replace(/&/g, '-and-') // Substitui '&' por '-and-'.
    .replace(/[^\w\-]+/g, '') // Remove caracteres que não são palavras ou hífens.
    .replace(/\-\-+/g, '-') // Substitui hífens múltiplos por um único.
}

// Função para criar componentes de título (h1, h2, etc.) que também são links de âncora.
function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug }, // O ID é o slug para que os links de âncora funcionem.
      [
        React.createElement('a', {
          href: `#${slug}`, // O link da âncora aponta para o ID do próprio título.
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

// Objeto que mapeia tags MDX (como 'h1', 'img') para os componentes React personalizados.
let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage, // Mapeia a tag 'Image' do MDX para o componente 'RoundedImage'.
  a: CustomLink, // Mapeia a tag 'a' do MDX para o componente 'CustomLink'.
  code: Code, // Mapeia a tag 'code' para o componente 'Code' de destaque de sintaxe.
  Table, // Mapeia a tag 'Table' para o componente 'Table' de renderização de tabela.
}

// Componente principal que recebe o conteúdo MDX e o renderiza usando os componentes personalizados.
export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      // Combina os componentes padrão com qualquer componente adicional passado como prop.
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
