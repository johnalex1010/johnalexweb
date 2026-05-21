import { MessageCircleQuestion } from "lucide-react";
import { faqs } from "@/data/faqs";

export function FaqSection() {
  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="faq-section__container">
        <div className="faq-section__heading">
          <p className="faq-section__eyebrow">Preguntas frecuentes</p>
          <h2 className="faq-section__title" id="faq-title">
            Respuestas claras antes de empezar tu proyecto
          </h2>
          <p className="faq-section__description">
            Información directa para entender cómo puedo ayudarte con desarrollo web,
            SEO técnico, AEO, GEO y consultoría digital.
          </p>
        </div>

        <div className="faq-section__grid">
          {faqs.map((faq) => (
            <article className="faq-card" key={faq.question}>
              <span className="faq-card__icon" aria-hidden="true">
                <MessageCircleQuestion />
              </span>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
