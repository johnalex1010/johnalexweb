export type ServiceIcon = "website" | "app" | "optimization";

export const services: Array<{
  icon: ServiceIcon;
  accent: "purple" | "blue";
  title: string;
  description: string;
  features: string[];
}> = [
  {
    icon: "website",
    accent: "purple",
    title: "Sitios web corporativos",
    description:
      "Páginas modernas que generan confianza, explican tus servicios y presentan tu negocio de forma profesional.",
    features: [
      "Diseño 100% personalizado",
      "Adaptable a todos los dispositivos",
      "Optimizado para SEO técnico",
    ],
  },
  {
    icon: "app",
    accent: "blue",
    title: "Aplicaciones web a medida",
    description:
      "Desarrollo soluciones personalizadas para optimizar procesos, automatizar tareas y escalar tu negocio.",
    features: [
      "Funciones adaptadas a tu flujo",
      "Arquitectura escalable y segura",
      "Integraciones con sistemas externos",
    ],
  },
  {
    icon: "optimization",
    accent: "purple",
    title: "Optimización y mantenimiento",
    description:
      "Mejora el rendimiento de tu web y mantén todo actualizado, seguro y funcionando correctamente.",
    features: [
      "Velocidad y rendimiento web",
      "Actualizaciones constantes",
      "Seguridad y respaldo",
    ],
  },
];
