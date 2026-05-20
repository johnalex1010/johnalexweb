# AGENTS.md

Gobernanza obligatoria para cualquier agente que trabaje en este proyecto Next.js.

Este sitio sera la web profesional de John Alex para vender servicios de desarrollo web, WordPress, SEO, asesoria y consultoria web. El objetivo principal es construir una base moderna, mantenible, optimizada para SEO y preparada para desplegar en Vercel.

## 1. Prioridades del Proyecto

Todo cambio debe proteger, en este orden:

1. Seguridad.
2. Estabilidad del proyecto.
3. SEO / GEO / AEO.
4. Performance y Core Web Vitals.
5. Accesibilidad.
6. Mantenibilidad.
7. Consistencia visual y funcional.

## 2. Reglas Absolutas

- No escribir codigo sin comprender el requerimiento.
- No implementar funcionalidad sin una SPEC proporcional al cambio.
- No introducir dependencias nuevas sin justificacion tecnica.
- No crear arquitectura innecesaria para una web sencilla.
- No dejar codigo temporal, `console.log`, comentarios de depuracion ni archivos basura.
- No modificar configuraciones criticas sin explicar impacto y rollback.
- No degradar SEO, accesibilidad, responsive ni performance.
- No hardcodear secretos, tokens, claves privadas ni credenciales.
- No crear integraciones con Supabase, CMS, formularios o APIs externas sin confirmacion previa.

## 3. Flujo Obligatorio de Trabajo

Antes de implementar:

1. Comprender el requerimiento.
2. Identificar impacto tecnico.
3. Definir SPEC breve o completa, segun el riesgo.
4. Validar riesgos de SEO, performance, accesibilidad y mantenimiento.
5. Definir criterios de aceptacion.
6. Implementar cambios minimos y trazables.
7. Validar el resultado.
8. Reportar que se cambio, donde y como se valido.

## 4. Stack Base Esperado

- Next.js con App Router.
- TypeScript.
- CSS global y/o CSS Modules segun convenga.
- Estructura de componentes reutilizables.
- Deploy en Vercel.
- Sin backend en la primera fase.
- Sin Supabase en la primera fase, salvo confirmacion posterior.

## 5. Estructura Minima Recomendada

La estructura inicial debe ser simple:

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

No crear carpetas vacias si todavia no existe una necesidad real. La estructura debe crecer con el sitio.

## 6. Convenciones de Codigo

### TypeScript / JavaScript

- Usar `camelCase` para variables y funciones.
- Usar componentes en `PascalCase`.
- Usar archivos en `kebab-case`.
- Usar prefijo `js-` solo para clases usadas exclusivamente por JavaScript.
- Usar estados visuales con:
  - `is-active`
  - `is-open`
  - `has-error`

### CSS

- Usar clases en `kebab-case`.
- Preferir metodologia BEM cuando el componente lo justifique.
- Evitar selectores excesivamente especificos.
- Evitar `!important` salvo caso critico documentado.
- No usar estilos inline salvo necesidad puntual y justificada.

### Naming General

| Tipo | Convencion |
| --- | --- |
| Variables JS/TS | `camelCase` |
| Funciones JS/TS | `camelCase` |
| Componentes React | `PascalCase` |
| Archivos | `kebab-case` |
| Clases CSS | `kebab-case` |
| CSS Architecture | BEM cuando aplique |
| Estados | `is-*` / `has-*` |

## 7. SEO / GEO / AEO

Todo cambio debe preservar o mejorar la capacidad del sitio para ser entendido por buscadores, asistentes de IA y motores de respuesta.

- Mantener una sola etiqueta `h1` principal por pagina.
- Usar estructura semantica clara.
- No duplicar metadata.
- Preparar titulos y descripciones orientados a busqueda.
- Mantener contenido escaneable y explicito.
- No inflar contenido con texto redundante.
- Usar FAQs solo si responden dudas reales.
- Cuidar Open Graph y metadata social.
- Mantener URLs limpias y significativas.

## 8. Accesibilidad

- Usar HTML semantico.
- Botones para acciones y enlaces para navegacion.
- Mantener contraste suficiente.
- Asegurar foco visible.
- Usar textos alternativos descriptivos en imagenes relevantes.
- Evitar contenido dependiente solo del color.
- Validar responsive en mobile, tablet y desktop cuando aplique.

## 9. Performance

- Evitar JavaScript innecesario.
- Preferir componentes server cuando no haga falta interactividad.
- Optimizar imagenes con las herramientas de Next.js cuando se usen.
- Evitar CLS definiendo dimensiones o contenedores estables.
- Cuidar LCP en hero y contenido superior.
- No cargar fuentes o assets sin estrategia.

## 10. Seguridad

- No exponer secretos en frontend.
- Usar variables de entorno solo cuando sean necesarias.
- No consumir APIs externas sin validar datos.
- No insertar HTML sin control.
- Evitar `dangerouslySetInnerHTML` salvo necesidad explicita y sanitizada.
- Validar datos de formularios cuando existan.

## 11. Criterios de Acceptance

Cada cambio debe tener criterios verificables, por ejemplo:

- El proyecto compila sin errores.
- La pagina se renderiza correctamente.
- El contenido mantiene jerarquia semantica.
- El responsive no presenta overflow horizontal.
- No hay errores visibles en consola.
- No se introdujeron dependencias innecesarias.

## 12. Validacion Obligatoria

Antes de finalizar un cambio, validar segun alcance:

- Funcionamiento local.
- Build o lint si aplica.
- Responsive si hay UI.
- SEO tecnico si hay paginas o metadata.
- Accesibilidad basica si hay UI.
- Ausencia de codigo temporal.

Si algo no se pudo validar, debe reportarse explicitamente.

## 13. Definition of Done

Un cambio esta terminado cuando:

- Existe SPEC proporcional al cambio.
- El alcance fue respetado.
- Los archivos modificados son correctos.
- La implementacion cumple los criterios de aceptacion.
- SEO / GEO / AEO no se degradan.
- Responsive no se rompe cuando aplica.
- No queda codigo temporal.
- Existe plan de rollback claro.
- Se reporta validacion realizada.

## 14. Formato de Respuesta Final

Al finalizar un cambio, responder de forma breve con:

1. Que se cambio.
2. Archivos modificados.
3. Validacion realizada.
4. Riesgos o pendientes, si existen.
5. Confirmacion del DoD.

## 15. Regla Final

Ante conflicto entre velocidad y seguridad, gana seguridad.

Ante conflicto entre comodidad y SPEC, gana SPEC.

Ante conflicto entre una solucion creativa y una arquitectura mantenible, gana la arquitectura mantenible.
