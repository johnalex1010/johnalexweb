import type { Metadata } from "next";
import {
  Clock,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Tag,
  User,
  Zap,
} from "lucide-react";
import { Header } from "@/components/layout/header";

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
    description: "Tus datos están protegidos y no serán compartidos.",
    icon: LockKeyhole,
  },
];

const contactItems = [
  { label: "Email", value: "hola@johnalexweb.com", icon: Mail },
  { label: "Teléfono", value: "+57 300 123 4567", icon: Phone },
  { label: "Ubicación", value: "Colombia", icon: MapPin },
  { label: "Horario", value: "Lun - Vie: 9:00 AM - 6:00 PM", icon: Clock },
];

export const metadata: Metadata = {
  title: "Contacto | JohnAlexWeb",
  description:
    "Contacta a John Alex para crear tu sitio web, mejorar tu posicionamiento SEO, recibir asesoría web o planificar una solución digital a medida.",
};

export default function ContactPage() {
  return (
    <>
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
                  <p>Completa el formulario y me pondré en contacto contigo.</p>
                </div>
              </div>

              <form className="contact-form" aria-describedby="contact-form-privacy">
                <div className="contact-form__row">
                  <label className="contact-form__field">
                    <span>
                      <User aria-hidden="true" />
                      Nombre completo
                    </span>
                    <input
                      autoComplete="name"
                      name="name"
                      placeholder="Tu nombre"
                      type="text"
                    />
                  </label>

                  <label className="contact-form__field">
                    <span>
                      <Mail aria-hidden="true" />
                      Email
                    </span>
                    <input
                      autoComplete="email"
                      name="email"
                      placeholder="tu@email.com"
                      type="email"
                    />
                  </label>
                </div>

                <label className="contact-form__field">
                  <span>
                    <Tag aria-hidden="true" />
                    Asunto
                  </span>
                  <input
                    autoComplete="off"
                    name="subject"
                    placeholder="Sitio web, SEO, consultoría..."
                    type="text"
                  />
                </label>

                <label className="contact-form__field contact-form__field--message">
                  <span>
                    <MessageCircle aria-hidden="true" />
                    Cuéntame sobre tu proyecto
                  </span>
                  <textarea
                    name="message"
                    placeholder="Escribe los detalles de tu idea, objetivos y cualquier información que consideres importante."
                    rows={7}
                  />
                </label>

                <button className="contact-form__button" type="button">
                  <Send aria-hidden="true" />
                  Enviar mensaje
                </button>

                <p className="contact-form__privacy" id="contact-form-privacy">
                  <LockKeyhole aria-hidden="true" />
                  No compartimos tu información con terceros.
                </p>
              </form>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
