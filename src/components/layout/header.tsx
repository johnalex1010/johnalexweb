const navigationItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Sobre mi", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  return (
    <header className="site-header" aria-label="Encabezado principal">
      <a className="site-header__brand" href="#inicio" aria-label="John Alex inicio">
        <span className="site-header__brand-name">
          <span className="site-header__brand-primary">john</span>
          <span className="site-header__brand-secondary">alex</span>
          <span className="site-header__brand-dot">.</span>
        </span>
      </a>

      <nav className="site-header__nav" aria-label="Navegacion principal">
        {navigationItems.map((item) => (
          <a className="site-header__nav-link" href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="site-header__cta" href="#contacto">
        Hablemos
        <span aria-hidden="true">&rarr;</span>
      </a>
    </header>
  );
}
