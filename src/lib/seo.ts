import { absoluteUrl, defaultDescription, mainServices, siteName, siteUrl } from "@/lib/site";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  inLanguage: "es",
  description: defaultDescription,
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "John Alex",
  url: siteUrl,
  jobTitle: "Desarrollador web",
  knowsAbout: [
    "PHP",
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
    "WordPress",
    "Next.js",
    "Vercel",
    "Supabase",
    "SEO técnico",
    "AEO",
    "GEO",
  ],
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#professional-service`,
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  serviceType: mainServices,
  founder: {
    "@id": `${siteUrl}/#person`,
  },
};

export function createWebPageSchema({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "es",
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
  };
}

export function createBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createFaqSchema(
  questions: Array<{
    question: string;
    answer: string;
  }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
