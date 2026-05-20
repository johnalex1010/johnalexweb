import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { projects } from "@/data/projects";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card project-card--${project.accent}`}>
      <div className="project-card__preview" aria-hidden="true">
        <div className="project-card__browser">
          <span />
          <span />
          <span />
        </div>
        <div className="project-card__mockup">
          <div className="project-card__mockup-copy">
            <span />
            <strong>{project.category}</strong>
            <p>{project.businessType}</p>
          </div>
          <div className="project-card__mockup-panel" />
        </div>
      </div>

      <div className="project-card__body">
        <span className="project-card__status" aria-hidden="true" />
        <div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__meta">{project.businessType}</p>
          <p className="project-card__summary">{project.summary}</p>
          <p className="project-card__result">{project.result}</p>
        </div>
        <Link
          className="project-card__arrow"
          href={`/proyectos/${project.slug}`}
          aria-label={`Ver detalle de ${project.title}`}
        >
          <ArrowUpRight />
        </Link>
      </div>
    </article>
  );
}
