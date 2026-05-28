import Link from "next/link";

type TokenType = "punctuation" | "tag" | "attr" | "string" | "text" | "doctype";
type Token = { type: TokenType; value: string } | { type: "raw"; value: string };
type CodeLine = { indent?: number; tokens: Token[] };

const codeLines: CodeLine[] = [
  {
    tokens: [
      { type: "punctuation", value: "<!" },
      { type: "doctype", value: "DOCTYPE" },
      { type: "raw", value: " html" },
      { type: "punctuation", value: ">" },
    ],
  },
  {
    tokens: [
      { type: "punctuation", value: "<" },
      { type: "tag", value: "html" },
      { type: "raw", value: " " },
      { type: "attr", value: "lang" },
      { type: "punctuation", value: "=" },
      { type: "string", value: '"es"' },
      { type: "punctuation", value: ">" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { type: "punctuation", value: "<" },
      { type: "tag", value: "head" },
      { type: "punctuation", value: ">" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { type: "punctuation", value: "<" },
      { type: "tag", value: "title" },
      { type: "punctuation", value: ">" },
      { type: "text", value: "Tu negocio" },
      { type: "punctuation", value: "</" },
      { type: "tag", value: "title" },
      { type: "punctuation", value: ">" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { type: "punctuation", value: "</" },
      { type: "tag", value: "head" },
      { type: "punctuation", value: ">" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { type: "punctuation", value: "<" },
      { type: "tag", value: "body" },
      { type: "punctuation", value: ">" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { type: "punctuation", value: "<" },
      { type: "tag", value: "header" },
      { type: "raw", value: " " },
      { type: "attr", value: "class" },
      { type: "punctuation", value: "=" },
      { type: "string", value: '"hero"' },
      { type: "punctuation", value: ">" },
    ],
  },
  {
    indent: 3,
    tokens: [
      { type: "punctuation", value: "<" },
      { type: "tag", value: "h1" },
      { type: "punctuation", value: ">" },
      { type: "text", value: "Soluciones digitales" },
    ],
  },
  {
    indent: 4,
    tokens: [
      { type: "text", value: "que venden mejor" },
      { type: "punctuation", value: "</" },
      { type: "tag", value: "h1" },
      { type: "punctuation", value: ">" },
    ],
  },
  {
    indent: 3,
    tokens: [
      { type: "punctuation", value: "<" },
      { type: "tag", value: "p" },
      { type: "punctuation", value: ">" },
      { type: "text", value: "Desarrollo web moderno," },
    ],
  },
  {
    indent: 4,
    tokens: [
      { type: "text", value: "rápido y optimizado." },
      { type: "punctuation", value: "</" },
      { type: "tag", value: "p" },
      { type: "punctuation", value: ">" },
    ],
  },
  {
    indent: 3,
    tokens: [
      { type: "punctuation", value: "<" },
      { type: "tag", value: "a" },
      { type: "raw", value: " " },
      { type: "attr", value: "href" },
      { type: "punctuation", value: "=" },
      { type: "string", value: '"/contacto"' },
      { type: "punctuation", value: ">" },
      { type: "text", value: "Hablemos" },
      { type: "punctuation", value: "</" },
      { type: "tag", value: "a" },
      { type: "punctuation", value: ">" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { type: "punctuation", value: "</" },
      { type: "tag", value: "header" },
      { type: "punctuation", value: ">" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { type: "punctuation", value: "</" },
      { type: "tag", value: "body" },
      { type: "punctuation", value: ">" },
    ],
  },
  {
    tokens: [
      { type: "punctuation", value: "</" },
      { type: "tag", value: "html" },
      { type: "punctuation", value: ">" },
    ],
  },
];

const heroBenefits = [
  {
    title: "Diseño moderno",
    description: "Interfaces atractivas, claras y funcionales.",
  },
  {
    title: "Rendimiento rápido",
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
            Creo sitios web modernos, rápidos y escalables que convierten visitantes en
            clientes.
          </p>

          <div className="hero-section__actions" aria-label="Acciones principales">
            <Link className="button button--primary" href="/contacto">
              Quiero mi sitio web
            </Link>
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
                <code>
                  {codeLines.map((line, lineIndex) => (
                    <span
                      key={lineIndex}
                      className={[
                        "hero-visual__code-line",
                        line.indent ? `hero-visual__code-line--indent-${line.indent}` : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {line.tokens.map((token, tokenIndex) =>
                        token.type === "raw" ? (
                          token.value
                        ) : (
                          <span
                            key={tokenIndex}
                            className={`code-token code-token--${token.type}`}
                          >
                            {token.value}
                          </span>
                        ),
                      )}
                    </span>
                  ))}
                </code>
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
              <strong>Código limpio</strong>
              <p>Calidad y escalabilidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
