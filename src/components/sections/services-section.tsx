import { CheckCircle2, Code2, Gauge, Monitor, Rocket } from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";
import { services, type ServiceIcon } from "@/data/services";

const serviceIcons: Record<ServiceIcon, ComponentType<{ className?: string }>> = {
  website: Monitor,
  app: Code2,
  optimization: Gauge,
};

export function ServicesSection() {
  return (
    <section className="services-section" id="servicios" aria-labelledby="services-title">
      <div className="services-section__container">
        <div className="services-section__heading">
          <p className="services-section__eyebrow">Servicios</p>
          <h2 className="services-section__title" id="services-title">
            ¿Qué puedo hacer por <span>tu negocio?</span>
          </h2>
          <p className="services-section__description">
            Soluciones completas para tener presencia en línea y destacar frente a tu
            competencia.
          </p>
        </div>

        <div className="services-section__grid">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];

            return (
              <article
                className={`service-card service-card--${service.accent}`}
                key={service.title}
              >
                <span className="service-card__bar" aria-hidden="true" />
                <span className="service-card__icon" aria-hidden="true">
                  <Icon className="service-card__icon-svg" />
                </span>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
                <ul className="service-card__features">
                  {service.features.map((feature) => (
                    <li className="service-card__feature" key={feature}>
                      <CheckCircle2 className="service-card__feature-icon" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <Link className="services-section__cta" href="/contacto">
          <span className="services-section__cta-icon" aria-hidden="true">
            <Rocket className="services-section__cta-icon-svg" />
          </span>
          <span>
            <strong>¿Tienes una idea en mente?</strong>
            <small>Hablemos y la llevamos al siguiente nivel.</small>
          </span>
          <span className="services-section__cta-arrow" aria-hidden="true">
            &rarr;
          </span>
        </Link>
      </div>
    </section>
  );
}
