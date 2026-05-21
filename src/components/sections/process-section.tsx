import { CodeXml, FileText, MessageCircle, Rocket } from "lucide-react";

const processSteps = [
  {
    title: "Descubrimiento",
    description: "Hablamos de tu idea, objetivos, clientes y requerimientos reales del proyecto.",
    icon: MessageCircle,
  },
  {
    title: "Planificación",
    description: "Definimos estructura, estrategia SEO, contenido clave y funcionalidades prioritarias.",
    icon: FileText,
  },
  {
    title: "Desarrollo",
    description: "Construyo tu sitio con código limpio, rendimiento, responsive y buenas prácticas.",
    icon: CodeXml,
  },
  {
    title: "Entrega y soporte",
    description: "Lanzamos tu proyecto, revisamos detalles finales y te acompaño en el camino.",
    icon: Rocket,
  },
];

export function ProcessSection() {
  return (
    <section className="process-section" id="proceso" aria-labelledby="process-title">
      <div className="process-section__container">
        <div className="process-section__heading">
          <p className="process-section__eyebrow">Proceso</p>
          <h2 className="process-section__title" id="process-title">
            Así es como trabajo
          </h2>
          <p className="process-section__description">
            Un proceso claro y transparente para llevar tu proyecto al éxito.
          </p>
        </div>

        <ol className="process-section__steps">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <li className="process-step" key={step.title}>
                <span className="process-step__icon" aria-hidden="true">
                  <Icon className="process-step__icon-svg" />
                </span>
                <div className="process-step__title-row">
                  <span className="process-step__number">{index + 1}</span>
                  <h3 className="process-step__title">{step.title}</h3>
                </div>
                <p className="process-step__description">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
