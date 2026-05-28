import { CheckCircle2, Code2, Gauge, Monitor, Rocket } from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";
import { services, type ServiceIcon } from "@/data/services";
import styles from "./services-section.module.css";

const serviceIcons: Record<ServiceIcon, ComponentType<{ className?: string }>> = {
  website: Monitor,
  app: Code2,
  optimization: Gauge,
};

const accentClassMap: Record<string, string> = {
  blue: styles.cardBlue,
};

export function ServicesSection() {
  return (
    <section className={styles.section} id="servicios" aria-labelledby="services-title">
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Servicios</p>
          <h2 className={styles.title} id="services-title">
            ¿Qué puedo hacer por <span>tu negocio?</span>
          </h2>
          <p className={styles.description}>
            Soluciones completas para tener presencia en línea y destacar frente a tu
            competencia.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            const cardClass = [styles.card, accentClassMap[service.accent] ?? ""]
              .filter(Boolean)
              .join(" ");

            return (
              <article className={cardClass} key={service.title}>
                <span className={styles.cardBar} aria-hidden="true" />
                <span className={styles.cardIcon} aria-hidden="true">
                  <Icon className={styles.cardIconSvg} />
                </span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <ul className={styles.cardFeatures}>
                  {service.features.map((feature) => (
                    <li className={styles.cardFeature} key={feature}>
                      <CheckCircle2 className={styles.cardFeatureIcon} aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <Link className={styles.cta} href="/contacto">
          <span className={styles.ctaIcon} aria-hidden="true">
            <Rocket className={styles.ctaIconSvg} />
          </span>
          <span>
            <strong>¿Tienes una idea en mente?</strong>
            <small>Hablemos y la llevamos al siguiente nivel.</small>
          </span>
          <span className={styles.ctaArrow} aria-hidden="true">
            &rarr;
          </span>
        </Link>
      </div>
    </section>
  );
}
