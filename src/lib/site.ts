export const siteName = "JohnAlexWeb";
export const defaultDescription =
  "Desarrollo sitios web modernos, rápidos y optimizados para convertir visitantes en clientes.";

function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export const siteUrl = getSiteUrl().replace(/\/$/, "");

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${siteUrl}${normalizedPath}`;
}

export const openGraphImage = {
  url: "/images/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "JohnAlexWeb - Desarrollo web, SEO y consultoria digital",
};

export const siteKeywords = [
  "desarrollo web",
  "sitios web corporativos",
  "SEO técnico",
  "AEO",
  "GEO",
  "WordPress",
  "Next.js",
  "consultoría web",
];

export const mainServices = [
  "Sitios web corporativos",
  "Aplicaciones web a medida",
  "Optimización y mantenimiento web",
  "Consultoría web y SEO",
];
