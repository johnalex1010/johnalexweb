const heroBenefits = [
  {
    title: "Diseno moderno",
    description: "Interfaces atractivas, claras y funcionales.",
  },
  {
    title: "Rendimiento rapido",
    description: "Sitios optimizados para velocidad y SEO.",
  },
  {
    title: "100% responsive",
    description: "Experiencias cuidadas en todos los dispositivos.",
  },
];

export function HeroSection() {
  return (
    <section className="hero-section" id="inicio" aria-labelledby="hero-title">
      <div className="hero-section__content">
        <div className="hero-section__copy">
          <p className="hero-section__eyebrow">
            <span aria-hidden="true" />
            Desarrollo web a medida
          </p>

          <h1 className="hero-section__title" id="hero-title">
            Desarrollo web que <span>impulsa tu negocio</span>
          </h1>

          <p className="hero-section__description">
            Creo sitios web modernos, rapidos y escalables que convierten visitantes en
            clientes.
          </p>

          <div className="hero-section__actions" aria-label="Acciones principales">
            <a className="button button--primary" href="#contacto">
              Quiero mi sitio web
            </a>
            <a className="button button--secondary" href="#proyectos">
              Ver proyectos
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <ul className="hero-section__benefits" aria-label="Beneficios principales">
            {heroBenefits.map((benefit) => (
              <li className="hero-section__benefit" key={benefit.title}>
                <span className="hero-section__benefit-icon" aria-hidden="true">
                  ✦
                </span>
                <strong>{benefit.title}</strong>
                <p>{benefit.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" aria-label="Vista previa de un proyecto web">
          <div className="hero-visual__window">
            <div className="hero-visual__toolbar" aria-hidden="true">
              <span />
              <span />
              <span />
              <strong>index.html</strong>
            </div>

            <div className="hero-visual__workspace">
              <pre className="hero-visual__code" aria-hidden="true">
                <code>{`<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Tu negocio</title>
  </head>
  <body>
    <header class="hero">
      <h1>Soluciones digitales
        que venden mejor</h1>
      <p>Desarrollo web moderno,
        rapido y optimizado.</p>
      <a href="#contacto">Hablemos</a>
    </header>
  </body>
</html>`}</code>
              </pre>

              <aside className="hero-visual__files" aria-hidden="true">
                <strong>Proyecto</strong>
                <span className="is-active">index.html</span>
                <span>styles.css</span>
                <span>script.js</span>
                <span>img</span>
              </aside>
            </div>
          </div>

          <div className="hero-visual__badge">
            <span aria-hidden="true">✓</span>
            <div>
              <strong>Codigo limpio</strong>
              <p>Calidad y escalabilidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
