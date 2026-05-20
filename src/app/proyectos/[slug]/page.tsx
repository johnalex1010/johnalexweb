import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/header";
import { getProjectBySlug, imageRecommendations, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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

  return (
    <>
      <Header />
      <main className="project-detail">
        <article>
          <section className="project-detail__hero" aria-labelledby="project-detail-title">
            <div className="project-detail__container">
              <Link className="project-detail__back" href="/proyectos">
                <ArrowLeft aria-hidden="true" />
                Volver a proyectos
              </Link>

              <p className="projects-section__eyebrow">{project.category}</p>
              <h1 className="project-detail__title" id="project-detail-title">
                {project.title}
              </h1>
              <p className="project-detail__summary">{project.summary}</p>

              <div className="project-detail__meta" aria-label="Datos principales del proyecto">
                <span>{project.businessType}</span>
                <span>{project.category}</span>
                <span>{project.technologies.slice(0, 2).join(" + ")}</span>
              </div>
            </div>
          </section>

          <section className="project-detail__visual" aria-label="Imagen principal recomendada">
            <div className="project-detail__container">
              <div className={`project-detail__image project-card--${project.accent}`}>
                <div>
                  <span>Imagen principal</span>
                  <strong>
                    {imageRecommendations.detailHero.width} ×{" "}
                    {imageRecommendations.detailHero.height}px
                  </strong>
                  <p>{project.imageAlt}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="project-detail__content">
            <div className="project-detail__container project-detail__grid">
              <div className="project-detail__main">
                <section className="project-detail__block">
                  <h2>Resumen del proyecto</h2>
                  <p>{project.overview}</p>
                </section>

                <section className="project-detail__block">
                  <h2>Problema o necesidad</h2>
                  <p>{project.challenge}</p>
                </section>

                <section className="project-detail__block">
                  <h2>Solución implementada</h2>
                  <p>{project.solution}</p>
                </section>

                <section className="project-detail__block">
                  <h2>Resultados esperados</h2>
                  <ul className="project-detail__outcomes">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome}>
                        <CheckCircle2 aria-hidden="true" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <aside className="project-detail__aside" aria-label="Ficha técnica del proyecto">
                <div className="project-detail__panel">
                  <h2>Ficha técnica</h2>
                  <dl>
                    <div>
                      <dt>Categoría</dt>
                      <dd>{project.category}</dd>
                    </div>
                    <div>
                      <dt>Tipo de negocio</dt>
                      <dd>{project.businessType}</dd>
                    </div>
                    <div>
                      <dt>Tecnologías</dt>
                      <dd>{project.technologies.join(", ")}</dd>
                    </div>
                  </dl>
                </div>

                <div className="project-detail__panel">
                  <h2>Imágenes recomendadas</h2>
                  <ul className="project-detail__sizes">
                    <li>
                      Card: {imageRecommendations.card.width} ×{" "}
                      {imageRecommendations.card.height}px
                    </li>
                    <li>
                      Hero detalle: {imageRecommendations.detailHero.width} ×{" "}
                      {imageRecommendations.detailHero.height}px
                    </li>
                    <li>
                      Galería: {imageRecommendations.detailGallery.width} ×{" "}
                      {imageRecommendations.detailGallery.height}px
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
