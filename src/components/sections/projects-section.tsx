import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import { featuredProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section className="projects-section" id="proyectos" aria-labelledby="projects-title">
      <div className="projects-section__container">
        <div className="projects-section__header">
          <div>
            <p className="projects-section__eyebrow">Proyectos</p>
            <h2 className="projects-section__title" id="projects-title">
              Algunos proyectos recientes
            </h2>
            <p className="projects-section__description">
              Ejemplos de soluciones web pensadas para comunicar mejor, optimizar
              procesos y convertir visitas en oportunidades reales.
            </p>
          </div>

          <Link className="projects-section__link" href="/proyectos">
            Ver todos los proyectos
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="projects-section__grid">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
