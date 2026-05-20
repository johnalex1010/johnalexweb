# John Alex Web

Sitio web profesional de John Alex, desarrollado con Next.js y pensado para desplegarse en Vercel.

El objetivo del proyecto es crear una web moderna, profesional y confiable para vender servicios de:

- Desarrollo web.
- WordPress.
- Posicionamiento SEO.
- Asesoria y consultoria web.
- Implementaciones modernas con Next.js, Vercel y posibles integraciones futuras.

## Estado Actual

El proyecto esta en fase inicial de planificacion tecnica.

Todavia no se ha creado la aplicacion Next.js. Primero se definira la estructura minima necesaria y luego se avanzara al diseno del sitio.

## Objetivo de la Primera Version

Crear una web clara, rapida y facil de mantener que comunique:

- Quien soy.
- Que servicios ofrezco.
- Que problemas resuelvo.
- Por que confiar en mi.
- Como contactarme.

## Stack Previsto

- Next.js.
- TypeScript.
- App Router.
- CSS global y componentes reutilizables.
- Deploy en Vercel.

## Colores Base

```css
:root {
  --color-primary: #0b255b;
  --color-secondary: #06aaf0;
  --color-tertiary: #f6f6f6;
  --color-text: #263238;
  --color-btn: #fe7c00;
}
```

## Tipografia

La tipografia definida para el proyecto es Metropolis.

Los archivos locales de la fuente deben agregarse en:

```txt
src/app/fonts/metropolis/
```

Nombres sugeridos:

```txt
Metropolis-Light.otf
Metropolis-Regular.otf
Metropolis-Bold.otf
```

La fuente se carga con `next/font/local` desde `src/app/layout.tsx` para que Next.js optimice la tipografia.

## Estructura Minima Planeada

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
    sections/
    ui/
  data/
  lib/
```

### Por que esta estructura

`src/app/` contiene las rutas principales de Next.js.

`layout.tsx` define la estructura general del sitio, metadata y elementos comunes.

`page.tsx` representa la pagina de inicio.

`globals.css` guarda estilos globales, variables CSS, base responsive y reglas generales.

`components/layout/` contendra componentes persistentes como header y footer.

`components/sections/` contendra secciones grandes de la home, por ejemplo hero, servicios, proceso y contacto.

`components/ui/` contendra piezas pequenas reutilizables como botones, contenedores o encabezados de seccion.

`data/` permitira separar contenido editable del marcado visual.

`lib/` guardara configuracion o utilidades generales del sitio.

## Plan de Trabajo Inicial

1. Crear la base Next.js en la carpeta actual.
2. Configurar TypeScript y estructura minima.
3. Crear estilos globales con colores, tipografia y reglas base.
4. Crear layout general.
5. Crear componentes base.
6. Pasar al diseno visual de la home.
7. Validar responsive, SEO tecnico y accesibilidad basica.
8. Preparar deploy en Vercel.

## Reglas de Trabajo

Este proyecto sigue las reglas definidas en `AGENTS.md`.

Antes de implementar cambios funcionales se debe definir una SPEC proporcional al alcance.

## Pendientes

- Crear proyecto Next.js.
- Confirmar archivos de fuente Metropolis.
- Definir contenido final de la home.
- Definir medios visuales o imagenes.
- Definir mecanismo de contacto.
- Preparar configuracion de Vercel.
