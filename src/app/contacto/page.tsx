import type { Metadata } from "next";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { ContactWhatsappForm } from "@/components/contact/contact-whatsapp-form";
import { Header } from "@/components/layout/header";
import { JsonLd } from "@/components/seo/json-ld";
import { createBreadcrumbSchema } from "@/lib/seo";
import { absoluteUrl, openGraphImage, siteName } from "@/lib/site";

const pageTitle = "Contacto";
const pageDescription =
  "Contacta a John Alex para crear tu sitio web, mejorar tu posicionamiento SEO, recibir asesoría web o planificar una solución digital a medida.";

const benefits = [
  {
    title: "Respuesta rápida",
    description: "Te responderé en menos de 24 horas.",
    icon: Zap,
  },
  {
    title: "Asesoría gratuita",
    description: "Hablemos de tu idea sin compromiso.",
    icon: ShieldCheck,
  },
  {
    title: "Información segura",
    description: "Tus datos se usarán únicamente para iniciar la conversación.",
    icon: MessageCircle,
  },
];

const contactItems = [
  { label: "WhatsApp", value: "+57 321 454 8919", icon: MessageCircle },
  { label: "Ubicación", value: "Colombia", icon: MapPin },
  { label: "Horario", value: "Lun - Vie: 9:00 AM - 5:00 PM", icon: Clock },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: absoluteUrl("/contacto"),
  },
  openGraph: {
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    url: absoluteUrl("/contacto"),
    siteName,
    images: [openGraphImage],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    images: [openGraphImage.url],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": `${absoluteUrl("/contacto")}#contact-page`,
            url: absoluteUrl("/contacto"),
            name: `${pageTitle} | ${siteName}`,
            description: pageDescription,
            inLanguage: "es",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "WhatsApp",
              telephone: "+573214548919",
              areaServed: "CO",
              availableLanguage: "es",
            },
          },
          createBreadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Contacto", path: "/contacto" },
          ]),
        ]}
      />
      <Header variant="light" />
      <main className="contact-page">
        <section className="contact-section" aria-labelledby="contact-title">
          <div className="contact-page__container contact-section__grid">
            <div className="contact-section__content">
              <p className="contact-page__eyebrow">Contacto</p>
              <h1 className="contact-section__title" id="contact-title">
                Hablemos de tu proyecto y <span>hagámoslo realidad</span>
              </h1>
              <p className="contact-section__description">
                Cuéntame sobre tu idea o negocio y recibe una propuesta a medida.
                Estoy aquí para ayudarte a construir una presencia digital clara,
                rápida y preparada para generar resultados.
              </p>

              <div className="contact-benefits" aria-label="Beneficios de contactarme">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <article className="contact-benefit" key={benefit.title}>
                      <span className="contact-benefit__icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <h2>{benefit.title}</h2>
                      <p>{benefit.description}</p>
                    </article>
                  );
                })}
              </div>

              <aside className="contact-card" aria-label="Datos de contacto">
                <div className="contact-card__info">
                  {contactItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div className="contact-card__item" key={item.label}>
                        <span className="contact-card__icon" aria-hidden="true">
                          <Icon />
                        </span>
                        <div>
                          <strong>{item.label}</strong>
                          <p>{item.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="contact-card__visual" aria-hidden="true">
                  <span className="contact-card__bubble">
                    <MessageCircle />
                  </span>
                  <span className="contact-card__window">
                    <span />
                    <span />
                    <span />
                  </span>
                  <span className="contact-card__envelope">
                    <Mail />
                  </span>
                </div>
              </aside>
            </div>

            <section className="contact-form-card" aria-labelledby="contact-form-title">
              <div className="contact-form-card__heading">
                <span className="contact-form-card__icon" aria-hidden="true">
                  <Send />
                </span>
                <div>
                  <h2 id="contact-form-title">Envíame un mensaje</h2>
                  <p>Completa el formulario y me pondré en contacto contigo por WhatsApp.</p>
                </div>
              </div>

              <ContactWhatsappForm />
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
