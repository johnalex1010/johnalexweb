import Link from "next/link";
import {
  ArrowRight,
  Braces,
  BriefcaseBusiness,
  CodeXml,
  Database,
  Mail,
  MessageCircle,
  Monitor,
  SearchCheck,
} from "lucide-react";

const footerNavigation = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Contacto", href: "/contacto" },
];



const footerTechnologies = [
  { label: "HTML5", icon: CodeXml },
  { label: "CSS3", icon: Monitor },
  { label: "JavaScript", icon: Braces },
  { label: "PHP", icon: CodeXml },
  { label: "MySQL", icon: Database },
  { label: "React", icon: CodeXml },
  { label: "Next.js", icon: Monitor },
  { label: "SEO / AEO / GEO", icon: SearchCheck },
];

const socialItems = [
  { label: "GitHub", icon: CodeXml, href: "https://github.com/johnalex1010" },
  { label: "LinkedIn", icon: BriefcaseBusiness, href: "https://www.linkedin.com/in/johnalex1010/" },
];

export function Footer() {
  return (
    <footer className="site-footer" aria-labelledby="site-footer-title">
      <section className="site-footer__cta" aria-label="Llamado a la acción final">
        <div className="site-footer__container site-footer__cta-grid">
          <span className="site-footer__cta-icon" aria-hidden="true">
            <CodeXml />
          </span>
          <div>
            <h2 className="site-footer__cta-title" id="site-footer-title">
              ¿Listo para llevar tu negocio al siguiente nivel?
            </h2>
            <p className="site-footer__cta-description">
              Hablemos de tu proyecto y construyamos una web clara, rápida y preparada
              para vender mejor.
            </p>
          </div>
          <Link className="site-footer__cta-link" href="/contacto">
            <MessageCircle aria-hidden="true" />
            Hablemos ahora
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <div className="site-footer__main">
        <div className="site-footer__container site-footer__main-grid">
          <div className="site-footer__brand-column">
            <Link className="site-footer__brand" href="/#inicio" aria-label="John Alex inicio">
              <span className="site-footer__brand-name">
                <span className="site-footer__brand-primary">john</span>
                <span className="site-footer__brand-secondary">alex</span>
                <span className="site-footer__brand-dot">.</span>
              </span>
            </Link>
            <p>
              Desarrollo web a medida para hacer crecer tu negocio en línea con
              estrategia, rendimiento y SEO.
            </p>
          </div>

          <nav className="site-footer__column" aria-label="Navegación secundaria">
            <h3>Navegación</h3>
            <ul>
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* <nav className="site-footer__column" aria-label="Servicios principales">
            <h3>Servicios</h3>
            <ul>
              {footerServices.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav> */}

          <div className="site-footer__column">
            <h3>Tecnologías</h3>
            <ul className="site-footer__tech-list" aria-label="Tecnologías utilizadas">
              {footerTechnologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <li key={technology.label}>
                    <Icon aria-hidden="true" />
                    <span>{technology.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="site-footer__column site-footer__social-column">
            <h3>Sígueme</h3>
            <div className="site-footer__social-list" aria-label="Redes sociales">
              {socialItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    className="site-footer__social-item"
                    href={item.href}
                    aria-label={`Visitar ${item.label} de John Alex`}
                    key={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <Link className="site-footer__contact-link" href="/contacto">
              <Mail aria-hidden="true" />
              Contacto directo
            </Link>
            <p className="site-footer__copyright">
              © 2026 JohnAlexWeb. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
