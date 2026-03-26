export const baseUrl = 'https://marllonpanisset.netlify.app';

export default async function sitemap() {
  const routes = ['', '/#services', '/#projects', '/#contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return routes;
}