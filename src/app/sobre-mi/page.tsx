import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  Braces,
  BriefcaseBusiness,
  Cloud,
  CodeXml,
  Database,
  FileCode,
  MessageCircle,
  Monitor,
  PenTool,
  Rocket,
  Server,
  Smile,
  Target,
} from "lucide-react";
import { Header } from "@/components/layout/header";

const stats = [
  { label: "Años de experiencia", value: "5+", icon: BriefcaseBusiness },
  { label: "Proyectos completados", value: "120+", icon: CodeXml },
  { label: "Clientes satisfechos", value: "98%", icon: Smile },
  { label: "Soporte y acompañamiento", value: "24/7", icon: Rocket },
];

const skills = [
  { label: "Desarrollo frontend", value: "95%", modifier: "frontend" },
  { label: "Desarrollo backend", value: "90%", modifier: "backend" },
  { label: "Diseño UI/UX", value: "85%", modifier: "design" },
  { label: "Optimización SEO", value: "90%", modifier: "seo" },
  { label: "Gestión de proyectos", value: "88%", modifier: "projects" },
];

const workflow = [
  {
    title: "Escuchar",
    description: "Entiendo tus objetivos, necesidades del negocio y propósito de tu proyecto.",
    icon: MessageCircle,
  },
  {
    title: "Planificar",
    description: "Defino la estrategia, estructura, contenido clave y prioridades técnicas.",
    icon: PenTool,
  },
  {
    title: "Desarrollar",
    description: "Construyo con código limpio, rendimiento, responsive y buenas prácticas.",
    icon: CodeXml,
  },
  {
    title: "Entregar y acompañar",
    description: "Lanzo tu proyecto y te acompaño para que siga creciendo con claridad.",
    icon: Rocket,
  },
];

const technologies = [
  { label: "PHP", icon: Server },
  { label: "HTML", icon: FileCode },
  { label: "JavaScript", icon: Braces },
  { label: "CSS", icon: Monitor },
  { label: "MySQL", icon: Database },
  { label: "Next.js", icon: CodeXml },
  { label: "Vercel", icon: Cloud },
  { label: "Supabase", icon: Database },
];

export const metadata: Metadata = {
  title: "Sobre mí | JohnAlexWeb",
  description:
    "Conoce a John Alex, desarrollador web especializado en sitios modernos, WordPress, SEO, consultoría web, Next.js, Vercel y soluciones digitales orientadas a resultados.",
};

export default function AboutPage() {
  return (
    <>
      <Header variant="light" />
      <main className="about-page">
        <section className="about-hero" aria-labelledby="about-title">
          <div className="about-page__container about-hero__grid">
            <div className="about-hero__copy">
              <p className="about-page__eyebrow">Sobre mí</p>
              <h1 className="about-hero__title" id="about-title">
                Desarrollador web apasionado por crear{" "}
                <span>soluciones digitales</span>
              </h1>
              <p className="about-hero__description">
                Soy un desarrollador web con más de 5 años de experiencia ayudando
                a empresas y emprendedores a transformar sus ideas en sitios web
                claros, rápidos y orientados a resultados.
              </p>
              <div className="about-hero__actions" aria-label="Acciones principales">
                <Link className="about-page__button about-page__button--primary" href="/contacto">
                  Hablemos de tu proyecto
                  <MessageCircle aria-hidden="true" />
                </Link>
                <Link className="about-page__button about-page__button--secondary" href="/proyectos">
                  Ver proyectos
                  <CodeXml aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="about-hero__visual" aria-label="Espacio reservado para imagen personal">
              <div className="about-hero__image-placeholder">
                <span>Imagen personal</span>
              </div>
              <div className="about-hero__badge">
                <BadgeCheck aria-hidden="true" />
                <p>Comprometido con la calidad y la satisfacción del cliente.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-stats" aria-label="Resumen profesional">
          <div className="about-page__container about-stats__grid">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <article className="about-stat" key={stat.label}>
                  <span className="about-stat__icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <strong>{stat.value}</strong>
                  <p>{stat.label}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="about-story" aria-labelledby="about-story-title">
          <div className="about-page__container about-story__grid">
            <div className="about-story__content">
              <p className="about-page__eyebrow">Mi historia</p>
              <h2 id="about-story-title">
                De la curiosidad al código, de las ideas a soluciones.
              </h2>
              <p>
                Desde que escribí mi primera línea de código, descubrí mi pasión
                por la tecnología y el desarrollo web. Me encanta aprender cosas
                nuevas, resolver problemas y crear experiencias digitales que
                realmente hacen la diferencia.
              </p>
              <p>
                Mi enfoque combina desarrollo web, estrategia SEO/AEO/GEO y una
                visión práctica del negocio para construir sitios claros,
                escalables y preparados para convertir visitantes en clientes.
              </p>
              <aside className="about-story__note">
                <Target aria-hidden="true" />
                <span>
                  Fuera del código, me gusta seguir aprendiendo sobre nuevas
                  tecnologías y mejores formas de comunicar valor en internet.
                </span>
              </aside>
            </div>

            <div className="about-skills" aria-label="Habilidades principales">
              <p className="about-page__eyebrow">Mis habilidades</p>
              <div className="about-skills__list">
                {skills.map((skill) => (
                  <div
                    className={`about-skill about-skill--${skill.modifier}`}
                    key={skill.label}
                  >
                    <div className="about-skill__heading">
                      <span>{skill.label}</span>
                      <strong>{skill.value}</strong>
                    </div>
                    <div className="about-skill__track" aria-hidden="true">
                      <span />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-workflow" aria-labelledby="about-workflow-title">
          <div className="about-page__container">
            <p className="about-page__eyebrow">Mi enfoque de trabajo</p>
            <h2 id="about-workflow-title">Cómo trabajo en cada proyecto</h2>
            <div className="about-workflow__grid">
              {workflow.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article className="about-workflow__item" key={step.title}>
                    <span className="about-workflow__icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <strong>
                      {index + 1}. {step.title}
                    </strong>
                    <p>{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="about-technologies" aria-labelledby="about-technologies-title">
          <div className="about-page__container">
            <p className="about-page__eyebrow">Tecnologías con las que trabajo</p>
            <h2 id="about-technologies-title">Stack para crear sitios rápidos y escalables</h2>
            <div className="about-technologies__grid">
              {technologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <article className="about-technology" key={technology.label}>
                    <Icon aria-hidden="true" />
                    <span>{technology.label}</span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
