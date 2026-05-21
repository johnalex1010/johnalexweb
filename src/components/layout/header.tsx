"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { label: "Inicio", href: "/#inicio", sectionId: "inicio" },
  { label: "Servicios", href: "/#servicios", sectionId: "servicios" },
  { label: "Proyectos", href: "/#proyectos", sectionId: "proyectos" },
  { label: "Tecnologias", href: "/#tecnologias", sectionId: "tecnologias" },
  { label: "Sobre mi", href: "/#sobre-mi", sectionId: "sobre-mi" },
  { label: "Contacto", href: "/#contacto", sectionId: "contacto" },
];

export function Header({ variant = "default" }: { variant?: "default" | "light" }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const currentSection = pathname.startsWith("/proyectos") ? "proyectos" : activeSection;

  useEffect(() => {
    if (pathname.startsWith("/proyectos")) {
      return;
    }

    const sectionIds = navigationItems.map((item) => item.sectionId);
    let animationFrame = 0;

    const updateActiveSection = () => {
      const activationPoint = window.scrollY + window.innerHeight * 0.35;
      const currentSection =
        sectionIds
          .map((sectionId) => document.getElementById(sectionId))
          .filter((section): section is HTMLElement => Boolean(section))
          .filter((section) => section.offsetTop <= activationPoint)
          .at(-1)?.id ?? "inicio";

      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 24);
      handleScroll();
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);
    window.addEventListener("hashchange", updateHeaderState);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
      window.removeEventListener("hashchange", updateHeaderState);
    };
  }, [pathname]);

  return (
    <header
      className={`site-header${isScrolled ? " is-scrolled" : ""}${
        isMenuOpen ? " is-open" : ""
      }${variant === "light" ? " site-header--light" : ""}`}
      aria-label="Encabezado principal"
    >
      <Link className="site-header__brand" href="/#inicio" aria-label="John Alex inicio">
        <span className="site-header__brand-name">
          <span className="site-header__brand-primary">john</span>
          <span className="site-header__brand-secondary">alex</span>
          <span className="site-header__brand-dot">.</span>
        </span>
      </Link>

      <nav className="site-header__nav" id="site-header-menu" aria-label="Navegacion principal">
        {navigationItems.map((item) => (
          <Link
            aria-current={
              currentSection === item.sectionId ? "page" : undefined
            }
            className={`site-header__nav-link${
              currentSection === item.sectionId ? " is-active" : ""
            }`}
            href={item.href}
            key={item.href}
            onClick={() => {
              setActiveSection(item.sectionId);
              setIsMenuOpen(false);
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="site-header__cta" href="/#contacto">
        Hablemos
        <span aria-hidden="true">&rarr;</span>
      </Link>

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
