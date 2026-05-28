import Link from "next/link";
import styles from "./hero-section.module.css";

type TokenType = "punctuation" | "tag" | "attr" | "string" | "text" | "doctype";
type Token = { type: TokenType; value: string } | { type: "raw"; value: string };
type CodeLine = { indent?: number; tokens: Token[] };

const tokenClassMap: Record<TokenType, string> = {
  punctuation: styles.tokenPunctuation,
  tag: styles.tokenTag,
  attr: styles.tokenAttr,
  string: styles.tokenString,
  text: styles.tokenText,
  doctype: styles.tokenDoctype,
};

const indentClassMap: Record<number, string> = {
  1: styles.codeLineIndent1,
  2: styles.codeLineIndent2,
  3: styles.codeLineIndent3,
  4: styles.codeLineIndent4,
};

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
    <section className={styles.section} id="inicio" aria-labelledby="hero-title">
      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span aria-hidden="true" />
            Desarrollo web a medida
          </p>

          <h1 className={styles.title} id="hero-title">
            Desarrollo web que <span>impulsa tu negocio</span>
          </h1>

          <p className={styles.description}>
            Creo sitios web modernos, rápidos y escalables que convierten visitantes en
            clientes.
          </p>

          <div className={styles.actions} aria-label="Acciones principales">
            <Link className={styles.btn} href="/contacto">
              Quiero mi sitio web
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <ul className={styles.benefits} aria-label="Beneficios principales">
            {heroBenefits.map((benefit) => (
              <li className={styles.benefit} key={benefit.title}>
                <span className={styles.benefitIcon} aria-hidden="true">
                  ✦
                </span>
                <strong>{benefit.title}</strong>
                <p>{benefit.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual} aria-label="Vista previa de un proyecto web">
          <div className={styles.window}>
            <div className={styles.toolbar} aria-hidden="true">
              <span />
              <span />
              <span />
              <strong>index.html</strong>
            </div>

            <div className={styles.workspace}>
              <pre className={styles.code} aria-hidden="true">
                <code>
                  {codeLines.map((line, lineIndex) => (
                    <span
                      key={lineIndex}
                      className={[
                        styles.codeLine,
                        line.indent ? indentClassMap[line.indent] : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {line.tokens.map((token, tokenIndex) =>
                        token.type === "raw" ? (
                          token.value
                        ) : (
                          <span key={tokenIndex} className={tokenClassMap[token.type]}>
                            {token.value}
                          </span>
                        ),
                      )}
                    </span>
                  ))}
                </code>
              </pre>

              <aside className={styles.files} aria-hidden="true">
                <strong>Proyecto</strong>
                <span className={styles.filesActive}>index.html</span>
                <span>styles.css</span>
                <span>script.js</span>
                <span>img</span>
              </aside>
            </div>
          </div>

          <div className={styles.badge}>
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
