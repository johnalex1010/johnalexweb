"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

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

    const update = () => {
      const scrollY = window.scrollY;
      const activationPoint = scrollY + window.innerHeight * 0.35;
      const section =
        sectionIds
          .map((id) => document.getElementById(id))
          .filter((el): el is HTMLElement => Boolean(el))
          .filter((el) => el.offsetTop <= activationPoint)
          .at(-1)?.id ?? "inicio";

      setIsScrolled(scrollY > 24);
      setActiveSection(section);
    };

    const handleEvent = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(update);
    };

    handleEvent();
    window.addEventListener("scroll", handleEvent, { passive: true });
    window.addEventListener("resize", handleEvent, { passive: true });
    window.addEventListener("hashchange", handleEvent);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleEvent);
      window.removeEventListener("resize", handleEvent);
      window.removeEventListener("hashchange", handleEvent);
    };
  }, [pathname]);

  const headerClass = [
    styles.header,
    isScrolled ? styles.scrolled : "",
    variant === "light" ? styles.light : "",
  ]
    .filter(Boolean)
    .join(" ");

  const navLinkClass = (sectionId: string) =>
    [styles.navLink, currentSection === sectionId ? styles.active : ""]
      .filter(Boolean)
      .join(" ");

  return (
    <header className={headerClass} aria-label="Encabezado principal">
      <Link className={styles.brand} href="/#inicio" aria-label="John Alex inicio">
        <span className={styles.brandName}>
          <span className={styles.brandPrimary}>john</span>
          <span className={styles.brandSecondary}>alex</span>
          <span className={styles.brandDot}>.</span>
        </span>
      </Link>

      <nav
        className={`${styles.nav} ${styles.navDesktop}`}
        aria-label="Navegacion principal"
      >
        {navigationItems.map((item) => (
          <Link
            aria-current={currentSection === item.sectionId ? "page" : undefined}
            className={navLinkClass(item.sectionId)}
            href={item.href}
            key={item.href}
            onClick={() => setActiveSection(item.sectionId)}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className={styles.cta} href="/contacto">
        Hablemos
        <span aria-hidden="true">&rarr;</span>
      </Link>

      <details className={styles.mobileMenu}>
        <summary
          className={styles.menuButton}
          aria-label="Abrir menu"
          aria-controls="site-header-mobile-menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </summary>

        <nav
          className={`${styles.nav} ${styles.mobileNav}`}
          id="site-header-mobile-menu"
          aria-label="Navegacion principal movil"
        >
          {navigationItems.map((item) => (
            <Link
              aria-current={currentSection === item.sectionId ? "page" : undefined}
              className={navLinkClass(item.sectionId)}
              href={item.href}
              key={item.href}
              onClick={() => setActiveSection(item.sectionId)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
