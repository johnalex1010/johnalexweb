"use client";

import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Sobre mi", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`site-header${isScrolled ? " is-scrolled" : ""}${
        isMenuOpen ? " is-open" : ""
      }`}
      aria-label="Encabezado principal"
    >
      <a className="site-header__brand" href="#inicio" aria-label="John Alex inicio">
        <span className="site-header__brand-name">
          <span className="site-header__brand-primary">john</span>
          <span className="site-header__brand-secondary">alex</span>
          <span className="site-header__brand-dot">.</span>
        </span>
      </a>

      <nav className="site-header__nav" id="site-header-menu" aria-label="Navegacion principal">
        {navigationItems.map((item) => (
          <a
            className="site-header__nav-link"
            href={item.href}
            key={item.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a className="site-header__cta" href="#contacto">
        Hablemos
        <span aria-hidden="true">&rarr;</span>
      </a>

      <button
        className="site-header__menu-button"
        type="button"
        aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
        aria-controls="site-header-menu"
        onClick={() => setIsMenuOpen((currentState) => !currentState)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </header>
  );
}
