# AGENTS.md

Gobernanza obligatoria para cualquier agente de IA, asistente de desarrollo, entorno automatizado o sistema de generación de código que trabaje sobre este proyecto.

Este archivo es la autoridad principal del proyecto. Define comportamiento operativo, flujo de trabajo, restricciones críticas, prioridades de decisión, validaciones obligatorias, manejo de ambigüedad, clasificación de cambios, reglas transversales y Definition of Done.

---

## 0. Contexto del Proyecto

Este sitio será la web profesional de John Alex para vender servicios de desarrollo web, WordPress, SEO, asesoría y consultoría web.

El objetivo principal es construir una base moderna, mantenible, optimizada para SEO / GEO / AEO y preparada para desplegar en Vercel.

Stack identificado en el proyecto:

- Next.js con App Router.
- React.
- TypeScript.
- CSS global.
- ESLint.
- npm como package manager.
- Deploy previsto en Vercel.
- Sin backend en la primera fase.
- Sin Supabase, CMS, formularios persistentes ni APIs externas salvo confirmación previa.

---

## 1. Jerarquía de Gobernanza

El agente debe respetar este orden de prioridad:

1. `AGENTS.md` local del proyecto.
2. `README.md`.
3. Documentación interna del proyecto (`/docs`, `/architecture`, `/specs`, etc.), si existe.
4. Configuración real del código.
5. Reglas globales de Codex/IA como fallback.

Ante contradicción:

- Gana la definición más cercana al proyecto.
- Nunca se debe asumir comportamiento fuera de la documentación real.
- La gobernanza de este archivo es específica del proyecto y prevalece sobre reglas genéricas cuando aplique.

---

## 2. Prioridades del Proyecto

Todo cambio debe proteger, en este orden:

1. Seguridad.
2. Estabilidad del proyecto.
3. Arquitectura existente.
4. SEO / GEO / AEO.
5. Performance y Core Web Vitals.
6. Accesibilidad.
7. Mantenibilidad.
8. Consistencia visual y funcional.

Ante conflicto entre velocidad y seguridad, gana seguridad.

Ante conflicto entre comodidad y SPEC, gana SPEC.

Ante conflicto entre una solución creativa y una arquitectura mantenible, gana la arquitectura mantenible.

---

## 3. Reglas Absolutas

- No escribir código sin comprender el requerimiento.
- No implementar funcionalidad sin una SPEC proporcional al cambio.
- No asumir lógica de negocio no documentada.
- No inventar endpoints, APIs, hooks, servicios, tablas, modelos, schemas ni contratos.
- No introducir dependencias nuevas sin justificación técnica.
- No crear arquitectura innecesaria para una web sencilla.
- No modificar archivos generados automáticamente, compilados, bundles, minificados ni salidas de build.
- No eliminar código sin validar impacto.
- No hacer refactors masivos para cambios puntuales.
- No degradar SEO, GEO, AEO, accesibilidad, responsive, performance ni seguridad.
- No dejar `console.log`, debugging, logs temporales, código muerto, comentarios basura, mocks accidentales ni archivos basura.
- No hardcodear secretos, tokens, claves privadas, credenciales ni datos sensibles.
- No crear integraciones con Supabase, CMS, formularios, pagos, autenticación o APIs externas sin confirmación previa.
- No modificar configuraciones críticas sin explicar impacto, validación y rollback.
- No asumir estructura del proyecto sin evidencia real.

---

## 4. Idioma, Encoding y Contenido

El idioma oficial del proyecto es Español Colombia (`es-CO`).

Todo archivo debe mantenerse en UTF-8.

El agente debe:

- Preservar acentos, eñes, signos de apertura y caracteres especiales.
- Evitar mojibake.
- Evitar mezclar formatos inconsistentes de salto de línea.
- Validar ortografía, gramática, puntuación, tono profesional y consistencia semántica.
- Evitar Spanglish innecesario, traducciones literales incorrectas, textos ambiguos y copy redundante.
- Priorizar claridad, precisión, escaneabilidad, legibilidad y coherencia con la marca.

---

## 5. Detección Tecnológica Obligatoria

Antes de modificar código, el agente debe identificar con evidencia real:

- Framework.
- Runtime.
- Package manager.
- Sistema de build.
- Arquitectura.
- Estructura modular.
- Linters.
- Formatters.
- Test runners.
- CI/CD, si existe.
- Convenciones internas.
- Estrategia de rendering: SSR, CSR, SSG o ISR si aplica.

Nunca se debe asumir stack tecnológico sin evidencia dentro del proyecto.

---

## 6. Flujo Obligatorio SDD

Todo desarrollo debe seguir Spec-Driven Development.

Flujo operativo:

1. Comprender el requerimiento.
2. Identificar impacto técnico.
3. Definir SPEC breve o completa según el riesgo.
4. Validar riesgos de seguridad, SEO / GEO / AEO, performance, accesibilidad y mantenimiento.
5. Definir Acceptance Criteria verificables.
6. Solicitar confirmación si existe ambigüedad relevante.
7. Implementar cambios mínimos y trazables.
8. Validar resultado.
9. Confirmar Definition of Done.

Si no existe SPEC clara, no se debe escribir código funcional.

---

## 7. SPEC Obligatoria

Toda funcionalidad debe partir de una especificación proporcional al cambio.

La SPEC debe cubrir:

- Contexto: problema actual, necesidad de negocio y objetivo esperado.
- Objetivo funcional: qué debe ocurrir, qué debe mostrarse, qué debe mantenerse igual y qué comportamiento cambia.
- Alcance: qué incluye, qué no incluye, archivos potencialmente afectados y áreas fuera del cambio.
- Impacto técnico: componentes, módulos, layouts, templates, APIs, servicios, base de datos, frontend, backend, assets, performance, SEO, accesibilidad y seguridad.
- Riesgos: regresión, seguridad, SEO, performance, accesibilidad, responsive, compatibilidad e integraciones.
- Acceptance Criteria: criterios que puedan responderse con sí o no.
- Validación: funcionamiento, responsive, performance, accesibilidad, errores JS, errores backend, UTF-8, ortografía y SEO.
- Rollback: archivos afectados, pasos de reversión, riesgos posteriores y comandos seguros.

---

## 8. Clasificación de Cambios

### Cambio trivial

Ejemplos:

- Typos.
- Copy menor.
- Ajustes visuales pequeños.
- Actualización documental sin impacto operativo.

Requiere:

- SPEC breve.
- Validación puntual.

### Cambio funcional

Ejemplos:

- Nuevas secciones.
- Nuevas páginas.
- Cambios UI.
- Cambios lógicos.
- Formularios sin persistencia.

Requiere:

- SPEC completa.
- Validación técnica.
- Validación responsive.
- Rollback.

### Cambio crítico

Ejemplos:

- Autenticación.
- Pagos.
- Seguridad.
- Arquitectura.
- Build.
- Infraestructura.
- CI/CD.
- Base de datos.
- Integraciones externas.

Requiere:

- SPEC completa.
- Revisión profunda.
- Validación obligatoria.
- Rollback explícito.
- Confirmación si existe incertidumbre.

---

## 9. Arquitectura del Proyecto

La estructura base debe mantenerse simple y crecer solo cuando exista una necesidad real:

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

Principios:

- Mantener arquitectura modular.
- Mantener separación de responsabilidades.
- Evitar side effects globales.
- Evitar acoplamiento innecesario.
- Evitar carpetas vacías sin necesidad real.
- Priorizar reutilización razonable.
- Evitar duplicación.
- Preferir componentes server cuando no haga falta interactividad.
- Mantener cambios cercanos al módulo afectado.
- No introducir abstracciones si no reducen complejidad real o no siguen un patrón existente.

Todo componente debe:

- Tener responsabilidad única.
- Ser reutilizable cuando tenga sentido.
- Mantener naming consistente.
- Evitar mezclar lógica compleja y rendering.

---

## 10. Convenciones de Código

### Principios de código limpio

Todo código nuevo o modificado debe ser fácil de leer, mantener, reutilizar y escalar. La referencia operativa es escribir código del que el equipo pueda sentirse orgulloso hoy y que otra persona pueda entender dentro de varios meses.

Reglas:

- Usar nombres descriptivos para variables, funciones, componentes, tipos, props y archivos.
- Preferir funciones y componentes pequeños, con una sola responsabilidad clara.
- Mantener lógica formateada, consistente y alineada con ESLint, TypeScript estricto y patrones existentes del proyecto.
- Evitar abreviaturas ambiguas como `x`, `data`, `temp`, `ct`, `fn` o similares, salvo índices locales muy acotados.
- Evitar funciones enormes, componentes que hagan demasiadas cosas o archivos que mezclen responsabilidades.
- Extraer datos repetidos a `src/data` cuando sean contenido editable o reutilizable.
- Extraer utilidades a `src/lib` solo cuando exista reutilización real o una reducción clara de complejidad.
- Mantener imports ordenados de forma legible y eliminar imports no usados.
- Evitar duplicación de lógica, copy, clases CSS o estructuras JSX cuando se pueda resolver con una abstracción simple y local.
- Usar comentarios solo cuando expliquen una decisión, restricción o contexto que el código no expresa por sí mismo.
- Manejar errores y estados vacíos de forma explícita cuando existan entradas, datos dinámicos, formularios o integraciones.
- Mantener el código preparado para crecer sin agregar arquitectura prematura.

Se considera código sucio y debe corregirse antes de finalizar:

- Nombres confusos, genéricos o crípticos.
- Código sin formato consistente.
- Comentarios redundantes, obsoletos o que oculten código difícil de entender.
- Lógica duplicada sin justificación.
- Componentes con responsabilidades mezcladas.
- Manejo de errores inexistente, genérico o silencioso cuando el flujo lo requiere.
- Archivos o carpetas desordenadas, sin relación clara con la arquitectura documentada.
- Código temporal, mocks accidentales, `console.log`, debugging o TODO críticos.

### TypeScript / JavaScript

- Usar `camelCase` para variables y funciones.
- Usar componentes en `PascalCase`.
- Usar archivos en `kebab-case`.
- Usar prefijo `js-` solo para clases usadas exclusivamente por JavaScript.
- Manejar errores explícitamente cuando aplique.
- Validar existencia de elementos antes de operar sobre ellos.
- Evitar contaminación global.
- Evitar listeners globales innecesarios.
- No usar `dangerouslySetInnerHTML` salvo necesidad explícita, documentada y sanitizada.

Estados visuales permitidos:

- `is-active`
- `is-open`
- `has-error`

### CSS

- Usar clases en `kebab-case`.
- Preferir metodología BEM cuando el componente lo justifique.
- Evitar selectores excesivamente específicos.
- Evitar `!important` salvo caso crítico documentado.
- No usar estilos inline salvo necesidad puntual y justificada.
- Mantener responsive.
- Evitar overflow horizontal.
- Definir dimensiones estables para evitar CLS.

### Iconografía

- Usar iconos reales de Lucide cuando una interfaz requiera iconografía visual.
- No usar siglas o texto decorativo como reemplazo de iconos, salvo que la sigla sea contenido real del servicio o tecnología.
- Mantener texto visible junto al icono cuando el contenido aporte contexto SEO / GEO / AEO.

### Naming general

| Tipo | Convención |
| --- | --- |
| Variables JS/TS | `camelCase` |
| Funciones JS/TS | `camelCase` |
| Componentes React | `PascalCase` |
| Archivos | `kebab-case` |
| Clases CSS | `kebab-case` |
| CSS Architecture | BEM cuando aplique |
| Estados | `is-*` / `has-*` |

---

## 11. Frontend y UX

La primera pantalla debe priorizar la experiencia real del sitio, no una página de marketing artificial ni contenido decorativo sin propósito.

Reglas:

- Usar HTML semántico.
- Mantener landmarks correctos.
- Mantener jerarquía de headings adecuada.
- Usar botones para acciones y enlaces para navegación.
- Mantener foco visible.
- Mantener contraste suficiente.
- Evitar contenido dependiente solo del color.
- Evitar textos que se salgan de botones, cards, paneles o contenedores.
- Evitar cards dentro de cards.
- Evitar secciones completas tratadas como cards flotantes.
- Evitar paletas de un solo tono dominante cuando se diseñen nuevas interfaces.
- Usar controles familiares: iconos para herramientas, toggles para estados binarios, tabs para vistas, inputs/sliders para valores numéricos y menús para conjuntos de opciones.
- No usar texto visible para explicar funcionalidades obvias de la interfaz o instrucciones internas de uso.
- Validar mobile, tablet y desktop cuando el cambio afecte UI.

Breakpoints permitidos según el README:

```css
@media screen and (max-width: 1250px) {}
@media screen and (max-width: 1050px) {}
@media screen and (max-width: 850px) {}
@media screen and (max-width: 650px) {}
```

No agregar otros breakpoints sin justificación clara.

---

## 12. SEO / GEO / AEO

Todo cambio debe preservar o mejorar la capacidad del sitio para ser entendido por buscadores, asistentes de IA y motores de respuesta.

Reglas:

- Mantener una sola etiqueta `h1` principal por página.
- Usar estructura semántica clara.
- No duplicar metadata.
- Preparar títulos y descripciones orientados a búsqueda.
- Mantener contenido escaneable y explícito.
- No inflar contenido con texto redundante.
- Usar FAQs solo si responden dudas reales.
- Cuidar Open Graph y metadata social.
- Mantener URLs limpias y significativas.
- Mantener entidades bien definidas.
- Mantener información verificable.
- Evitar thin content.
- Optimizar LCP, CLS e INP.

---

## 13. Performance

Reglas:

- Evitar JavaScript innecesario.
- Preferir componentes server cuando no haga falta interactividad.
- Optimizar imágenes con herramientas de Next.js cuando se usen.
- Definir dimensiones o contenedores estables para evitar CLS.
- Cuidar LCP en hero y contenido superior.
- No cargar fuentes o assets sin estrategia.
- Evitar recalcular layouts de forma innecesaria.
- Evitar inicializaciones duplicadas.
- Evitar DOM excesivo y wrappers innecesarios.

Imágenes:

- Definir dimensiones.
- Usar `loading="lazy"` cuando aplique.
- Mantener `alt` descriptivo en imágenes relevantes.
- Reportar si faltan assets reales y se usan placeholders.

---

## 14. Seguridad

Toda entrada debe considerarse no confiable.

Reglas:

- Sanitizar inputs.
- Validar formatos, tipos y rangos.
- Rechazar valores inesperados.
- No confiar en validaciones del frontend.
- Escapar salida según contexto.
- Evitar XSS.
- Evitar exposición de tokens o secretos.
- No consumir APIs externas sin validar datos y contratos.
- Manejar errores de forma controlada.
- No exponer datos sensibles en mensajes de error.
- No subir `.env`, dumps, backups, llaves privadas, tokens ni credenciales.

Si se agregan formularios, APIs o persistencia:

- Validar payloads.
- Manejar estados vacíos y errores.
- Definir timeout o fallback cuando aplique.
- Confirmar integración antes de implementarla.

---

## 15. README Obligatorio

El proyecto debe mantener actualizado su `README.md`.

El README debe incluir como mínimo:

- Descripción del proyecto.
- Stack tecnológico.
- Requisitos.
- Instalación.
- Variables de entorno.
- Scripts disponibles.
- Flujo de desarrollo.
- Flujo de build.
- Estructura principal.
- Convenciones relevantes.
- Ejecución de pruebas.
- Despliegue.
- Troubleshooting básico.
- Riesgos conocidos o pendientes.

Si un cambio afecta arquitectura, instalación, comandos, infraestructura, dependencias, variables de entorno, CI/CD, flujos operativos, build o testing, el `README.md` debe actualizarse obligatoriamente.

---

## 16. Build y Archivos Generados

Nunca modificar manualmente:

- `.next/`.
- Archivos compilados.
- Bundles.
- Minificados.
- Builds automáticos.
- Archivos generados por herramientas.

Los cambios deben realizarse únicamente sobre:

- Archivos fuente.
- Componentes reales.
- Assets originales.
- Documentación editable.

El build debe ejecutarse con el flujo correcto cuando el alcance lo requiera.

No se deben falsificar builds ni reportar validaciones no ejecutadas.

---

## 17. Operación con Codex

El agente debe:

- Leer el código antes de asumir.
- Usar `rg` o `rg --files` para búsquedas cuando esté disponible.
- Preferir cambios pequeños, reversibles y consistentes con el código existente.
- Usar herramientas estructuradas o parsers cuando correspondan.
- Usar `apply_patch` para ediciones manuales de archivos.
- No editar archivos mediante comandos improvisados si existe una herramienta de edición más segura.
- No revertir cambios existentes del usuario.
- No usar `git reset --hard` ni `git checkout --` salvo solicitud explícita.
- Ignorar cambios ajenos si son irrelevantes para la tarea.
- Trabajar con cambios ajenos si afectan la tarea, sin borrarlos.
- No ejecutar acciones destructivas sin confirmación.
- No introducir dependencias nuevas sin justificar y validar.
- Ejecutar validaciones proporcionales al riesgo.
- Reportar cualquier validación que no haya podido ejecutarse.

Cuando el trabajo sea frontend:

- Levantar servidor local si el sitio lo requiere para validar.
- Verificar en navegador o screenshots cuando el cambio visual lo amerite.
- Revisar que no haya errores visibles de consola si se hace validación en navegador.
- Validar responsive cuando aplique.

---

## 18. Git y Worktree

Reglas:

- Revisar `git status` antes de cambios relevantes.
- No mezclar cambios no relacionados.
- No revertir trabajo ajeno.
- No crear commits salvo solicitud del usuario.
- No crear ramas salvo solicitud del usuario o necesidad explícita acordada.
- Si se requiere rama, usar prefijo `codex/` por defecto.
- Preferir comandos git no interactivos.
- Explicar archivos modificados y motivo.

---

## 19. QA y Validación Obligatoria

Antes de finalizar un cambio, validar según alcance:

- Funcionamiento local.
- Lint.
- Build.
- Responsive.
- Accesibilidad básica.
- SEO técnico.
- Performance básica.
- Errores JS.
- Errores backend, si aplica.
- UTF-8.
- Ortografía.
- Ausencia de código temporal.
- Ausencia de secretos.
- Ausencia de TODO críticos.

Si algo no se pudo validar, debe reportarse explícitamente.

Validaciones recomendadas del proyecto:

```bash
npm run lint
npm run build
```

---

## 20. Acceptance Criteria

Cada cambio debe tener criterios verificables, por ejemplo:

- El proyecto compila sin errores.
- La página se renderiza correctamente.
- El contenido mantiene jerarquía semántica.
- El responsive no presenta overflow horizontal.
- No hay errores visibles en consola.
- No se introdujeron dependencias innecesarias.
- SEO / GEO / AEO no se degradan.
- No quedan logs ni debugging.
- El README se actualizó si el cambio lo exige.

---

## 21. Rollback

Todo cambio debe tener plan de rollback proporcional.

Para cambios documentales:

- Revertir únicamente el archivo documental afectado.
- Confirmar que no existan cambios de código asociados.

Para cambios funcionales:

- Identificar archivos afectados.
- Describir pasos de reversión.
- Evitar comandos destructivos sin aprobación.
- Confirmar riesgos posteriores.

---

## 22. Definition of Done

Un cambio está terminado cuando:

- Existe SPEC proporcional al cambio.
- El alcance fue respetado.
- Los archivos modificados son correctos.
- La implementación cumple los criterios de aceptación.
- SEO / GEO / AEO no se degradan.
- Responsive no se rompe cuando aplica.
- Performance no se degrada.
- Seguridad no se degrada.
- Encoding UTF-8 correcto.
- Ortografía revisada.
- No queda código temporal.
- No quedan logs ni debugging.
- README actualizado si aplica.
- Existe plan de rollback claro.
- Se reporta validación realizada.

---

## 23. Formato de Respuesta Final

Al finalizar un cambio, responder de forma breve con:

1. Qué se cambió.
2. Archivos modificados.
3. Validación realizada.
4. Riesgos o pendientes, si existen.
5. Estado del README.
6. Confirmación del DoD.

La respuesta debe ser clara, concreta y proporcional al alcance.

---

## 24. Regla Final

Ante duda razonable:

- Detenerse.
- Explicar la incertidumbre.
- Solicitar confirmación.

Ante conflicto entre rapidez y arquitectura, gana arquitectura.

Ante conflicto entre solución rápida y mantenibilidad, gana mantenibilidad.
