export type ProjectCategory = "Sitio corporativo" | "Aplicación web" | "SEO técnico";

export const imageRecommendations = {
  card: {
    width: 960,
    height: 600,
    ratio: "8:5",
    usage: "Miniatura o captura principal dentro de cards de proyectos.",
  },
  detailHero: {
    width: 1600,
    height: 1000,
    ratio: "8:5",
    usage: "Imagen principal del detalle del proyecto.",
  },
  detailGallery: {
    width: 1400,
    height: 900,
    ratio: "14:9",
    usage: "Capturas internas, pantallas secundarias o comparativas del caso.",
  },
};

export const projects: Array<{
  slug: string;
  title: string;
  category: ProjectCategory;
  businessType: string;
  summary: string;
  result: string;
  accent: "secondary" | "primary" | "orange";
  featured: boolean;
  overview: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  technologies: string[];
  imageAlt: string;
}> = [
  {
    slug: "sitio-corporativo-servicios",
    title: "Sitio corporativo para empresa de servicios",
    category: "Sitio corporativo",
    businessType: "Empresa de servicios",
    summary:
      "Web profesional enfocada en comunicar servicios, generar confianza y facilitar contactos comerciales.",
    result: "Estructura clara para SEO, servicios visibles y llamadas a la acción estratégicas.",
    accent: "secondary",
    featured: true,
    overview:
      "Plantilla de sitio corporativo pensada para negocios que necesitan explicar su oferta, mostrar confianza y guiar al usuario hacia una consulta comercial.",
    challenge:
      "El reto principal es ordenar la información de servicios para que el visitante entienda rápido qué hace la empresa, por qué confiar y cuál es el siguiente paso.",
    solution:
      "Se propone una arquitectura clara con hero comercial, servicios priorizados, mensajes de confianza, CTA visibles y contenido preparado para SEO, AEO y GEO.",
    outcomes: [
      "Comunicación más clara de los servicios principales.",
      "Estructura semántica preparada para motores de búsqueda y asistentes de IA.",
      "Experiencia responsive con llamadas a la acción visibles.",
    ],
    technologies: ["Next.js", "HTML semántico", "CSS responsive", "SEO técnico"],
    imageAlt: "Vista previa de sitio corporativo profesional para empresa de servicios",
  },
  {
    slug: "dashboard-gestion-comercial",
    title: "Dashboard web para gestión comercial",
    category: "Aplicación web",
    businessType: "Aplicación a medida",
    summary:
      "Interfaz web para visualizar indicadores, organizar datos y mejorar el seguimiento de procesos internos.",
    result: "Panel rápido, ordenado y preparado para escalar funcionalidades del negocio.",
    accent: "primary",
    featured: true,
    overview:
      "Concepto de aplicación web orientada a equipos que necesitan centralizar información, revisar indicadores y tomar decisiones con mayor velocidad.",
    challenge:
      "El problema habitual es tener datos dispersos, poca visibilidad del estado comercial y procesos difíciles de consultar en tiempo real.",
    solution:
      "La plantilla plantea módulos de métricas, tablas resumidas, visualización de actividad y una interfaz preparada para crecer con nuevas funciones.",
    outcomes: [
      "Mejor lectura de indicadores clave.",
      "Interfaz ordenada para procesos internos.",
      "Base escalable para futuras integraciones.",
    ],
    technologies: ["Next.js", "React", "Componentes reutilizables", "Diseño responsive"],
    imageAlt: "Dashboard web para gestión comercial con métricas y paneles de información",
  },
  {
    slug: "optimizacion-seo-wordpress",
    title: "Optimización SEO para sitio WordPress",
    category: "SEO técnico",
    businessType: "WordPress",
    summary:
      "Mejora de estructura, rendimiento, contenido base y señales técnicas para aumentar visibilidad orgánica.",
    result: "Sitio más entendible para buscadores, asistentes de IA y usuarios finales.",
    accent: "orange",
    featured: true,
    overview:
      "Caso de optimización técnica pensado para sitios WordPress que necesitan mejorar velocidad, rastreo, estructura y comprensión semántica.",
    challenge:
      "El sitio puede tener contenido valioso, pero perder visibilidad por problemas de rendimiento, jerarquía, indexabilidad o mensajes poco claros.",
    solution:
      "La plantilla contempla auditoría técnica, ajustes de estructura, mejoras de contenido, revisión de performance y recomendaciones para SEO, GEO y AEO.",
    outcomes: [
      "Contenido más fácil de entender para buscadores.",
      "Mejor estructura de headings y enlaces internos.",
      "Recomendaciones priorizadas para performance y conversión.",
    ],
    technologies: ["WordPress", "Yoast SEO", "Core Web Vitals", "SEO técnico"],
    imageAlt: "Optimización SEO técnica para sitio WordPress orientada a visibilidad orgánica",
  },
  {
    slug: "landing-page-campana-digital",
    title: "Landing page para campaña digital",
    category: "Sitio corporativo",
    businessType: "Captación de leads",
    summary:
      "Página enfocada en presentar una oferta concreta, responder dudas frecuentes y convertir visitantes en prospectos.",
    result: "Mensaje directo, secciones escaneables y CTA visibles para campañas pagas u orgánicas.",
    accent: "secondary",
    featured: false,
    overview:
      "Landing page creada para campañas que necesitan foco, velocidad y una ruta clara hacia la conversión.",
    challenge:
      "Una campaña pierde rendimiento cuando la página de destino no responde rápido qué se ofrece, a quién ayuda y cómo iniciar contacto.",
    solution:
      "La estructura propuesta combina propuesta de valor, beneficios, prueba de confianza, preguntas frecuentes y CTA visibles.",
    outcomes: [
      "Mensaje comercial más directo.",
      "Secciones preparadas para lectura rápida.",
      "Base flexible para tráfico pago u orgánico.",
    ],
    technologies: ["Next.js", "SEO on-page", "Copywriting web", "Responsive design"],
    imageAlt: "Landing page para campaña digital con enfoque en captación de leads",
  },
  {
    slug: "auditoria-tecnica-seo",
    title: "Auditoría técnica SEO",
    category: "SEO técnico",
    businessType: "Consultoría web",
    summary:
      "Revisión de indexabilidad, rendimiento, arquitectura de headings, contenido y oportunidades de mejora.",
    result: "Plan de acción priorizado para mejorar SEO, AEO, GEO y experiencia de usuario.",
    accent: "orange",
    featured: false,
    overview:
      "Auditoría enfocada en encontrar bloqueos técnicos y oportunidades de mejora para sitios que quieren crecer con tráfico orgánico.",
    challenge:
      "Sin una revisión técnica, es común invertir en contenido o diseño sin resolver problemas de rastreo, rendimiento o arquitectura.",
    solution:
      "La plantilla plantea revisión de indexabilidad, metadata, headings, contenido crítico, velocidad, enlaces internos y oportunidades AEO/GEO.",
    outcomes: [
      "Mapa claro de prioridades técnicas.",
      "Recomendaciones accionables por impacto.",
      "Mejor base para contenido, conversión y visibilidad.",
    ],
    technologies: ["SEO técnico", "Core Web Vitals", "Arquitectura web", "Auditoría UX"],
    imageAlt: "Auditoría técnica SEO con recomendaciones para mejorar visibilidad y rendimiento",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
