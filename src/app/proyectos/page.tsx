import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { JsonLd } from "@/components/seo/json-ld";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";
import { createBreadcrumbSchema, createWebPageSchema } from "@/lib/seo";
import { absoluteUrl, siteName } from "@/lib/site";

const pageTitle = "Proyectos web";
const pageDescription =
  "Explora proyectos de desarrollo web, aplicaciones a medida y optimización SEO realizados con enfoque técnico, comercial y estratégico.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: absoluteUrl("/proyectos"),
  },
  openGraph: {
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    url: absoluteUrl("/proyectos"),
    siteName,
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={[
          createWebPageSchema({
            path: "/proyectos",
            name: `${pageTitle} | ${siteName}`,
            description: pageDescription,
          }),
          createBreadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Proyectos", path: "/proyectos" },
          ]),
        ]}
      />
      <Header />
      <main className="projects-page">
        <section className="projects-page__hero" aria-labelledby="projects-page-title">
          <div className="projects-page__container">
            <p className="projects-section__eyebrow">Portafolio</p>
            <h1 className="projects-page__title" id="projects-page-title">
              Proyectos web con enfoque en rendimiento, SEO y conversión
            </h1>
            <p className="projects-page__description">
              Una selección de trabajos orientados a mejorar presencia digital,
              claridad comercial, posicionamiento orgánico y experiencia de usuario.
            </p>
          </div>
        </section>

        <section className="projects-page__list" aria-label="Listado de proyectos">
          <div className="projects-page__container projects-page__grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
