"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { label: "Inicio", href: "/#inicio", sectionId: "inicio" },
  { label: "Servicios", href: "/#servicios", sectionId: "servicios" },
  { label: "Proceso", href: "/#proceso", sectionId: "proceso" },
  { label: "Sobre mí", href: "/sobre-mi", sectionId: "sobre-mi" },
  { label: "Contacto", href: "/contacto", sectionId: "contacto" },
];

export function Header({ variant = "default" }: { variant?: "default" | "light" }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const currentSection = pathname.startsWith("/proyectos")
    ? "proyectos"
    : pathname.startsWith("/sobre-mi")
      ? "sobre-mi"
      : pathname.startsWith("/contacto")
        ? "contacto"
      : activeSection;

  useEffect(() => {
    if (
      pathname.startsWith("/proyectos") ||
      pathname.startsWith("/sobre-mi") ||
      pathname.startsWith("/contacto")
    ) {
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
        variant === "light" ? " site-header--light" : ""
      }`}
      aria-label="Encabezado principal"
    >
      <Link className="site-header__brand" href="/#inicio" aria-label="John Alex inicio">
        <span className="site-header__brand-name">
          <span className="site-header__brand-primary">john</span>
          <span className="site-header__brand-secondary">alex</span>
          <span className="site-header__brand-dot">.</span>
        </span>
      </Link>

      <nav
        className="site-header__nav site-header__nav--desktop"
        aria-label="Navegacion principal"
      >
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
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="site-header__cta" href="/contacto">
        Hablemos
        <span aria-hidden="true">&rarr;</span>
      </Link>

      <details className="site-header__mobile-menu">
        <summary
          className="site-header__menu-button"
          aria-label="Abrir menu"
          aria-controls="site-header-mobile-menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </summary>

        <nav
          className="site-header__nav site-header__mobile-nav"
          id="site-header-mobile-menu"
          aria-label="Navegacion principal movil"
        >
          {navigationItems.map((item) => (
            <Link
              aria-current={currentSection === item.sectionId ? "page" : undefined}
              className={`site-header__nav-link${
                currentSection === item.sectionId ? " is-active" : ""
              }`}
              href={item.href}
              key={item.href}
              onClick={() => {
                setActiveSection(item.sectionId);
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
