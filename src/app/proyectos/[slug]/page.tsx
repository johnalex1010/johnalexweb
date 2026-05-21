import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  CodeXml,
  ExternalLink,
  FileCode2,
  GitBranch,
  Globe2,
  Gauge,
  Link2,
  MonitorSmartphone,
  MousePointerClick,
  Network,
  Palette,
  SearchCheck,
  Target,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { getProjectBySlug, imageRecommendations, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getTechnologyIcon(technology: string): LucideIcon {
  const normalizedTechnology = technology
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  if (normalizedTechnology.includes("core web vitals")) {
    return Gauge;
  }

  if (normalizedTechnology.includes("arquitectura")) {
    return Network;
  }

  if (normalizedTechnology.includes("auditoria") || normalizedTechnology.includes("ux")) {
    return MousePointerClick;
  }

  if (normalizedTechnology.includes("seo")) {
    return SearchCheck;
  }

  if (normalizedTechnology.includes("next")) {
    return FileCode2;
  }

  if (normalizedTechnology.includes("typescript")) {
    return FileCode2;
  }

  if (normalizedTechnology.includes("wordpress")) {
    return Globe2;
  }

  if (normalizedTechnology.includes("react")) {
    return CodeXml;
  }

  if (normalizedTechnology.includes("css")) {
    return Palette;
  }

  if (normalizedTechnology.includes("html")) {
    return CodeXml;
  }

  if (normalizedTechnology.includes("responsive")) {
    return MonitorSmartphone;
  }

  return CodeXml;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado | JohnAlexWeb",
    };
  }

  return {
    title: `${project.title} | JohnAlexWeb`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectFacts = [
    { label: "Fecha", value: project.date, icon: CalendarDays },
    { label: "Duración", value: project.duration, icon: Clock3 },
    { label: "Cliente", value: project.client, icon: UserRound },
    { label: "Sitio en vivo", value: project.liveUrl, icon: Link2 },
    { label: "Categoría", value: project.category, icon: Globe2 },
    { label: "Repositorio", value: project.repositoryUrl, icon: GitBranch },
  ];

  return (
    <>
      <Header variant="light" />
      <main className="project-detail">
        <article className="project-detail__shell">
          <section className="project-detail__intro" aria-labelledby="project-detail-title">
            <div className="project-detail__container project-detail__intro-grid">
              <div className="project-detail__copy">
                <Link className="project-detail__back" href="/proyectos">
                  <ArrowLeft aria-hidden="true" />
                  Volver a proyectos
                </Link>

                <p className="project-detail__category">{project.category}</p>
                <h1 className="project-detail__title" id="project-detail-title">
                  {project.title}
                </h1>
                <p className="project-detail__summary">{project.summary}</p>

                <ul className="project-detail__tech-list" aria-label="Tecnologías utilizadas">
                  {project.technologies.map((technology) => {
                    const TechnologyIcon = getTechnologyIcon(technology);

                    return (
                      <li key={technology}>
                        <TechnologyIcon className="project-detail__tech-icon" aria-hidden="true" />
                        <span>{technology}</span>
                      </li>
                    );
                  })}
                </ul>

                <dl className="project-detail__facts">
                  {projectFacts.map((fact) => {
                    const Icon = fact.icon;

                    return (
                      <div className="project-detail__fact" key={fact.label}>
                        <Icon aria-hidden="true" />
                        <div>
                          <dt>{fact.label}</dt>
                          <dd>{fact.value}</dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>
              </div>

              <div className="project-detail__showcase" aria-label={project.imageAlt}>
                <div className={`project-detail__screen project-card--${project.accent}`}>
                  <span>Imagen del proyecto</span>
                </div>

                <div className="project-detail__thumbs" aria-label="Capturas secundarias sugeridas">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </section>

          <section className="project-detail__content">
            <div className="project-detail__container project-detail__content-grid">
              <div className="project-detail__story-card">
                <div className="project-detail__story-item">
                  <span className="project-detail__story-icon" aria-hidden="true">
                    <Target />
                  </span>
                  <div>
                    <h2>El reto</h2>
                    <p>{project.challenge}</p>
                  </div>
                </div>

                <div className="project-detail__story-item">
                  <span className="project-detail__story-icon" aria-hidden="true">
                    <CheckCircle2 />
                  </span>
                  <div>
                    <h2>La solución</h2>
                    <p>{project.solution}</p>
                  </div>
                </div>
              </div>

              <div className="project-detail__features-card">
                <h2>Características principales</h2>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle2 aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="project-detail__image-guide" aria-label="Tamaños de imagen recomendados">
            <div className="project-detail__container">
              <div className="project-detail__guide-card">
                <h2>Guía de imágenes para este proyecto</h2>
                <p>
                  Card: {imageRecommendations.card.width} x {imageRecommendations.card.height}px.
                  Hero: {imageRecommendations.detailHero.width} x{" "}
                  {imageRecommendations.detailHero.height}px. Galería:{" "}
                  {imageRecommendations.detailGallery.width} x{" "}
                  {imageRecommendations.detailGallery.height}px.
                </p>
              </div>
            </div>
          </section>

          <section className="project-detail__cta" aria-label="Solicitar proyecto similar">
            <div className="project-detail__container">
              <div className="project-detail__cta-card">
                <div>
                  <ExternalLink aria-hidden="true" />
                  <strong>¿Tienes un proyecto similar en mente?</strong>
                  <p>Hablemos sobre cómo puedo ayudarte a hacerlo realidad.</p>
                </div>
                <Link href="/#contacto">Hablemos ahora</Link>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
