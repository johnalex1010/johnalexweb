# John Alex Web

Sitio web profesional de John Alex, desarrollado con Next.js y preparado para desplegarse en Vercel.

El objetivo del proyecto es crear una web moderna, profesional, rápida y confiable para vender servicios de:

- Desarrollo web.
- WordPress.
- Posicionamiento SEO.
- Asesoría y consultoría web.
- Aplicaciones web a medida.
- Optimización técnica para buscadores, asistentes de IA y usuarios.

## Estado Actual

El proyecto ya cuenta con una base funcional en Next.js.

Incluye:

- Home con hero.
- Sección de servicios.
- Sección de proyectos destacados.
- Página `/proyectos` con listado completo.
- Plantilla dinámica `/proyectos/[slug]` para detalle de proyecto.
- Header responsive con menú hamburguesa.
- Detección de sección activa en el menú.
- Fuente local Metropolis cargada con `next/font/local`.
- Iconografía con Lucide Icons.

## Stack

- Next.js `16.2.6`.
- React `19.2.6`.
- TypeScript.
- App Router.
- CSS global.
- Lucide React `1.16.0`.
- ESLint.
- Deploy previsto en Vercel.

## Comandos

Instalar dependencias:

```bash
npm install
```

Servidor local:

```bash
npm run dev
```

Validar lint:

```bash
npm run lint
```

Validar build:

```bash
npm run build
```

Ejecutar build en modo producción:

```bash
npm run start
```

## Rutas Disponibles

```txt
/                         Home
/proyectos                Listado de proyectos
/proyectos/[slug]         Detalle de proyecto
```

Ejemplos de detalle:

```txt
/proyectos/sitio-corporativo-servicios
/proyectos/dashboard-gestion-comercial
/proyectos/optimizacion-seo-wordpress
```

## Colores Base

La línea gráfica debe respetar estos colores:

```css
:root {
  --color-primary: #0b255b;
  --color-secondary: #06aaf0;
  --color-tertiary: #f6f6f6;
  --color-text: #263238;
  --color-btn: #fe7c00;
}
```

Las imágenes de referencia sirven para estructura visual, no para cambiar la paleta del proyecto.

## Tipografía

La tipografía del proyecto es Metropolis y se carga localmente desde:

```txt
src/app/fonts/metropolis/
```

Archivos actuales:

```txt
Metropolis-Light.otf
Metropolis-Regular.otf
Metropolis-Bold.otf
```

La configuración está en:

```txt
src/app/layout.tsx
```

## Estructura Actual

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    proyectos/
      page.tsx
      [slug]/
        page.tsx
    fonts/
      metropolis/
  components/
    layout/
      header.tsx
    projects/
      project-card.tsx
    sections/
      hero-section.tsx
      services-section.tsx
      projects-section.tsx
  data/
    services.ts
    projects.ts
```

## Componentes Principales

`Header`

- Logo textual `johnalex.`.
- Navegación principal.
- CTA `Hablemos`.
- Menú hamburguesa en responsive.
- Fondo al hacer scroll.
- Detección de sección activa.

`HeroSection`

- Propuesta de valor principal.
- CTAs iniciales.
- Beneficios rápidos.
- Visual de apoyo tipo editor/código.

`ServicesSection`

- Tres servicios principales:
  - Sitios web corporativos.
  - Aplicaciones web a medida.
  - Optimización y mantenimiento.
- Iconografía con Lucide.
- Beneficios por servicio.
- CTA hacia contacto.

`ProjectsSection`

- Muestra proyectos destacados en la home.
- Enlace hacia `/proyectos`.
- Usa datos centralizados desde `src/data/projects.ts`.

`ProjectCard`

- Card reutilizable para proyectos.
- Se usa tanto en home como en la página de proyectos.
- Enlaza al detalle `/proyectos/[slug]`.

## Datos

Los textos editables principales están en:

```txt
src/data/services.ts
src/data/projects.ts
```

Esto permite modificar contenido sin tocar la estructura visual de los componentes.

## Imágenes de Proyectos

Tamaños recomendados:

### Cards

```txt
960 x 600 px
Ratio: 8:5
Formato recomendado: .webp
Peso ideal: menos de 250 KB
```

Uso:

- Miniaturas de proyectos en la home.
- Miniaturas en `/proyectos`.

### Hero del detalle

```txt
1600 x 1000 px
Ratio: 8:5
Formato recomendado: .webp
Peso ideal: menos de 500 KB
```

Uso:

- Imagen principal en `/proyectos/[slug]`.

### Galería o capturas internas

```txt
1400 x 900 px
Ratio aproximado: 14:9
Formato recomendado: .webp
```

Uso:

- Capturas secundarias.
- Pantallas internas.
- Comparativas o detalles del proyecto.

## SEO / AEO / GEO

El proyecto mantiene:

- Una sola etiqueta `h1` por página.
- Headings semánticos.
- Metadata en `layout.tsx` y rutas específicas.
- Contenido descriptivo en servicios y proyectos.
- Detalles de proyectos con contexto, problema, solución, resultados y tecnologías.
- Textos pensados para buscadores, usuarios y asistentes de IA.

## Breakpoints

Los media queries permitidos son:

```css
@media screen and (max-width: 1250px) {}
@media screen and (max-width: 1050px) {}
@media screen and (max-width: 850px) {}
@media screen and (max-width: 650px) {}
```

No agregar otros breakpoints sin una justificación clara.

## Reglas de Trabajo

Este proyecto sigue las reglas definidas en:

```txt
AGENTS.md
```

Antes de implementar cambios funcionales se debe definir una SPEC proporcional al alcance.

## Calidad de Código

La calidad esperada del proyecto sigue el principio de código limpio: el código debe ser fácil de leer, mantener, reutilizar y escalar sin aumentar complejidad innecesaria.

Buenas prácticas obligatorias:

- Usar nombres descriptivos para variables, funciones, componentes, tipos, props y archivos.
- Mantener funciones y componentes pequeños, con responsabilidad única.
- Evitar abreviaturas ambiguas, nombres genéricos y lógica difícil de entender.
- Mantener formato consistente con ESLint, TypeScript estricto y patrones existentes.
- Centralizar contenido editable o reutilizable en `src/data`.
- Crear utilidades en `src/lib` solo cuando exista reutilización real.
- Eliminar imports no usados, código muerto, duplicación, logs y debugging antes de finalizar.
- Usar comentarios solo cuando aporten contexto que el código no expresa por sí mismo.
- Manejar errores, estados vacíos y datos inesperados cuando el flujo lo requiera.
- Mantener la arquitectura simple, modular y preparada para crecer sin sobreingeniería.

Se debe evitar código sucio como funciones enormes, componentes con responsabilidades mezcladas, nombres crípticos, comentarios redundantes, archivos desordenados, lógica duplicada o manejo de errores inexistente.

## Flujo de Desarrollo

1. Revisar `AGENTS.md` y el alcance del cambio.
2. Definir SPEC breve o completa según el riesgo.
3. Identificar archivos fuente afectados y validar impacto en SEO / GEO / AEO, accesibilidad, performance y seguridad.
4. Implementar cambios mínimos, legibles y reversibles.
5. Ejecutar `npm run lint` y `npm run build` cuando el alcance lo requiera.
6. Validar responsive y errores visibles en navegador cuando el cambio afecte UI.
7. Documentar archivos modificados, validación, riesgos, estado del README y rollback.

## Validación Actual

Últimas validaciones realizadas:

```bash
npm run lint
npm run build
npm audit --audit-level=moderate
```

Resultado:

- Lint correcto.
- Build correcto.
- Auditoría sin vulnerabilidades moderadas o superiores.

## Pendientes

- Agregar imágenes reales de proyectos.
- Crear sección de tecnologías.
- Crear sección sobre mí.
- Crear sección de contacto.
- Definir mecanismo real de contacto.
- Preparar configuración final para Vercel.
