// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';

const baseUrl = 'https://marllonpanisset.netlify.app';

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  // Rotas principais do site e páginas fixas
  const routes = [
    '/',                     // Home
    '/#services',            // Seções da home
    '/#projects',
    '/#contact',
    '/politica-de-privacidade',
    '/termo-de-uso',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}