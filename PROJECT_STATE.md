# PROJECT_STATE.md — Pipeline de Documentación AdventuriQ

> **Propósito**: Documento de estado persistente del proyecto de documentación automatizada. Vive en el repo `adventuriq-docs` y se actualiza al final de cada sesión de trabajo significativa. Sirve como "briefing" para recuperar contexto en nuevas conversaciones con Claude (web, Desktop o Code) cuando la conversación anterior se ha vuelto demasiado larga.
>
> **Última actualización**: 24 de abril de 2026 (tras fix quirúrgico de tokens.md sobre caducidad al publicar)
> **Mantenedor**: Mike (con asistencia de Claude)

---

## 1. Visión general del proyecto

Sistema de documentación automatizada para AdventuriQ (SaaS de gamificación). El objetivo es que cada funcionalidad nueva genere su página de manual con capturas reales sin intervención manual, y migrar el manual histórico (39 páginas PDF) a Docusaurus con calidad editorial homogénea.

**Publicado en**: `https://docs.adventuriq.com`

### Pipeline de 5 fases

1. **DESARROLLO** — Claude Code implementa la feature y genera un FSD (Feature Spec Document) en `fsd/`.
2. **DESPLIEGUE** — Claude Code hace deploy a producción y verifica que funciona.
3. **CAPTURAS** — Cowork (Claude Desktop) lee el FSD, navega el Gamifier/Webapp reales y captura pantallas.
4. **REDACCIÓN** — Cowork combina FSD + capturas en `.md` orientado a Game Masters.
5. **INTEGRACIÓN** — El `.md` se coloca en Docusaurus, se actualiza sidebar, build y deploy.

---

## 2. Estado técnico de la infraestructura

### Repos del workspace VS Code

| Repo | Propósito | Tech stack |
|---|---|---|
| `adventuriq-api` | Backend API | — |
| `adventuriq-gamifier` | Admin/GM tool | AngularJS 1.5 |
| `adventuriq-flutterwebapp` | Player-facing | Flutter (requiere JS) |
| `adventuriq-docs` | Manual de usuario | Docusaurus 3.10 + TypeScript |

### adventuriq-docs

- **GitHub**: organización `adventuriq`
- **Ramas**: `source` (trabajo humano + IA), `main` (compilado, gestionado por GitHub Actions)
- **Dominio**: `docs.adventuriq.com` con CNAME en `static/CNAME` + HTTPS forzado
- **Branding**: azul corporativo `#2d324f`, naranja acción `#fc4a27`
- **Mermaid habilitado**: `@docusaurus/theme-mermaid@3.10`
- **Convención de imágenes**: `static/img/{gamifier|webapp}/{seccion}/nombre-semantico.png`

### Archivos clave del repo de docs

| Archivo | Rol |
|---|---|
| `CLAUDE.md` | Instrucciones para Claude Code (bloque "workspace") |
| `DOCS_STRUCTURE.md` (v2) | Biblia de convenciones para Cowork |
| `COWORK_PROMPT.md` | Prompt maestro de 5 fases con 3 variantes de escenario |
| `ARCHITECTURE.md` | Vista general de los 4 repos (sección 3.4 añadida) |
| `PROJECT_STATE.md` | Este archivo — estado persistente del proyecto |
| `docs/` | Contenido del manual (39 páginas en origen) |
| `fsd/` | Feature Spec Documents generados por Claude Code |
| `sidebars.ts` | Navegación (exporta con id `docs`, no `tutorialSidebar`) |
| `docusaurus.config.ts` | Configuración Docusaurus |

### Fuente de verdad histórica

- **`AdventuriQv7_CAS.pdf`** (en proyecto Claude) — manual histórico de 39 páginas. **Usar como detector de inconsistencias** antes de publicar páginas con información operativa (ver aprendizaje #14).

---

## 3. Páginas publicadas en producción

| # | Página | Estado | Notas clave |
|---|---|---|---|
| 1 | `recompensas/configuracion-contenido.md` | ✅ Deployed | Primera sesión; normalización "Recompensa" → "Objeto Digital" como excepción a no-destrucción |
| 2 | `intro.md` | ✅ Deployed | Portada; diagrama Mermaid + 4 capturas; servida en `/` (no `/intro`) |
| 3 | `warnings.md` | ✅ Deployed | 2 secciones; 6 admonitions moderadas; sin capturas |
| 4 | `conceptos-basicos.md` | ✅ Deployed | Tercera página de fundamentos; mínima supervisión (2 DETENTE) |
| 5 | `aventuras/configuracion.md` | ✅ Deployed | Primera página funcional real; referencia visual consolidada del Gamifier |
| 6 | `tokens.md` | ✅ Deployed | **Landing comercial del modelo económico completo**. sidebar_position 4. Incluye fix post-deploy: caducidad de Licencia empieza al **publicar**, no al comprar |

### Métrica observable: supervisión decreciente

- Páginas 1-2: 3 puntos de control "DETENTE" + incidentes
- Página 3: 3 DETENTE ligeros, sin incidentes
- Página 4: 2 DETENTE
- Página 5: flujo fluido desde el primer intento
- Página 6: fluidez técnica, pero requirió **alta supervisión editorial** por información de producto nueva aflorando durante redacción

**Lectura**: el pipeline es técnicamente maduro. La supervisión se desplaza de "verificar que Cowork entiende el pipeline" a "verificar que tenemos toda la info de producto bien consolidada antes de publicar".

---

## 4. Auditoría del manual histórico (39 páginas)

| Estado | Cuántas | Interpretación |
|---|---|---|
| Completa | 1 | No requiere trabajo |
| Buena | 9 | Validación + pulido |
| Parcial | 21 | Enriquecimiento con pipeline |
| Mínima | 8 | Reescritura desde cero |

**Problema conocido**: las imágenes del manual antiguo tienen nombres genéricos (`img-000.png` a `img-238.png`) y se reutilizan en contextos no relacionados. Todas las capturas nuevas siguen la convención semántica.

**Páginas restantes por pasar al pipeline**: ~33 del manual histórico + páginas nuevas (5 nuevos tipos de Reto, `branding.md` para Branderización del Webapp).

### Ruta de documentación prioritaria: sección "Aventuras"

Completar la ruta de Aventuras antes de saltar a otras secciones. Estado:

- ✅ `aventuras/configuracion.md` (deployed)
- 📌 `aventuras/crear-aventura.md` — **siguiente a atacar**
- 📌 `aventuras/publicar-aventura.md` — momento clave donde se activa la Licencia
- 📌 `aventuras/bitacora.md` — interfaz Player (Flutter, requiere JS)
- 📌 `aventuras/tipos-de-aventura.md` — Escape Room, Street Escape, formación...
- 📌 `aventuras/gamepin.md` — cómo los Players se unen

---

## 5. Glosario código ↔ dominio (consolidado)

### Terminología de producto

| Código (BD) | Dominio (UI/manual) |
|---|---|
| `evento` | Aventura |
| `itinerario` | Misión |
| `prueba` | Reto |
| `Event Designer` | Game Designer |
| `Checkin` | Llamada a la Acción |

### Términos oficiales del manual

Aventura, Misión, Reto, Objeto Digital, Bitácora, Muro, Galería, Baúl, Clasificación, GamePIN, POI, Plan Luna, Plan Mundo, Token, Licencia (Mensual/Anual), Branderización, Raze, FSD.

### Roles de usuario (4)

1. **Admin** (AdventuriQ)
2. **Game Master** — compra licencias, crea Aventuras, gestiona equipo
3. **Game Designer** — asistente bajo supervisión del GM
4. **Player**

### Tipos de Reto en la BD

- **14 totales** → 10 vigentes + 4 deprecados (IDs 3, 5, 6, 7)
- En el manual solo se documentan los 10 vigentes.

### Modelo económico (consolidado en tokens.md)

- **Licencia Mensual**: 18 € / mes por Aventura. **La caducidad empieza al publicar la Aventura, no al comprar la Licencia.**
- **Licencia Anual**: 200 € / año por Aventura. Misma regla de caducidad (al publicar).
- **Token**: 1 € por Player por partida (fungibles, no caducan).
- **Plan Luna**: desde 750 € / año — 1 Aventura, Players ilimitados, Branderización incluida.
- **Plan Mundo**: desde 3.600 € / año — Aventuras ilimitadas, Players ilimitados, Branderización incluida.
- Precios publicados **sin impuestos** (cálculo en checkout).
- Email comercial para consultas: `start@adventuriq.com`.

---

## 6. Reglas y convenciones del pipeline

### Reglas absolutas (COWORK_PROMPT.md)

- **No-destrucción**: nunca borrar contenido existente salvo autorización explícita del dueño.
- **Excepciones autorizadas**: conflictos terminológicos (p. ej., "Recompensa" → "Objeto Digital" dentro de configuracion-contenido.md).
- **Supervisión por fases**: Cowork se detiene tras cada fase y espera validación humana en las primeras sesiones.
- **Admonitions con criterio editorial moderado**: `:::tip`, `:::info`, `:::warning`, `:::danger`. No abusar.
- **Capturas**: nombres semánticos, nunca `img-NNN.png` reutilizables.
- **Flutter Webapp**: requiere navegador completo con JavaScript habilitado para capturas. No negociable.
- **Contraseñas**: nunca aparecen en las capturas ni en el texto.
- **SEO en frontmatter**: `title`, `description`, `sidebar_position`, `tags`.
- **Enlaces internos**: siempre relativos entre páginas del manual.
- **Impuestos**: en páginas con precios, notas genéricas ("según legislación vigente y país de facturación"). Nunca detalles fiscales específicos.
- **Contraste con manual histórico**: antes de publicar una página con información operativa, buscar los términos clave en `AdventuriQv7_CAS.pdf` para detectar matices olvidados.

### Convenciones técnicas de Docusaurus 3.10

- **Anchors de headings con emoji**: Docusaurus genera el slug **CON guión inicial**. Un heading `## 📦 Alternativa: Planes anuales` genera `#-alternativa-planes-anuales`. Verificado empíricamente en HTML compilado.
- **Enlace a portada del manual**: `intro.md` se sirve en `/` (no en `/intro`). Enlaces a portada desde otras páginas: `[título](/)`.
- **Mermaid**: usar `<br/>` para saltos de línea en nodos (no `\n`).
- **sidebars.ts explícito**: cuando los archivos se listan en orden explícito en `sidebars.ts`, ese orden manda; el `sidebar_position` del frontmatter debe mantenerse coherente.

### Patrón de revisión consolidado

1. Cowork genera el `.md` final.
2. Mike lo pega en el chat con Claude (web).
3. Claude revisa (inconsistencias, mejoras, SEO, coherencia terminológica).
4. **Contraste con `AdventuriQv7_CAS.pdf`** si la página toca información operativa.
5. `npm run build` local para verificar.
6. `git add` / `commit` / `push` origin `source`.
7. Verificación en producción en `docs.adventuriq.com`.
8. Actualizar este `PROJECT_STATE.md`.
9. Pasar a la siguiente página.

---

## 7. Pendientes inmediatos

### Branding visual

- [ ] Logo `adventuriq.svg` o PNG transparente → `static/img/logo.svg`
- [ ] Favicon → `static/img/favicon.ico` (verificar presencia)
- [ ] Social card 1200×630 → `static/img/social-card.png`

### Configuración Docusaurus

- [ ] Migrar `onBrokenMarkdownLinks` al nuevo formato `markdown.hooks` (no urgente, Docusaurus v4 lo exigirá).

### Deuda documental detectada

- [ ] Warnings preexistentes en `conceptos-basicos.md` sobre categorías que aún no existen (`/category/retos`, `/category/gamifier`). Resolver cuando se creen esas páginas.
- [ ] **Branderización del Webapp** no tiene página propia — solo se menciona en `tokens.md`. Candidata a `branding.md` o `planes/branderizacion.md`.

### Oportunidad comercial identificada

- [ ] Considerar enlazar `docs.adventuriq.com/tokens` desde la landing comercial principal de adventuriq.com. La página funciona como landing de pricing + escalera de productos.

### Próxima página a atacar

**`aventuras/crear-aventura.md`** — flujo de creación de una Aventura desde cero.

Justificación: cierra la lógica narrativa de la sección Aventuras (crear → configurar → publicar). `configuracion.md` ya está deployed y previsiblemente tiene referencias implícitas a "cuando creas tu Aventura..." que necesitan destino.

Tras esa, las siguientes en cola de la ruta Aventuras:
- `aventuras/publicar-aventura.md`
- `aventuras/bitacora.md`
- `aventuras/tipos-de-aventura.md`
- `aventuras/gamepin.md`

---

## 8. Aprendizajes acumulados del pipeline

1. **Cowork aprende con iteración** — la curva de supervisión baja visiblemente desde la página 3.
2. **Sin capturas = sesión rápida** (warnings.md tardó ~1/3 que recompensas).
3. **Flutter requiere navegador real** — confirmado en producción, no hay atajos.
4. **AngularJS 1.5 tiene rarezas** — tooltips y menús abiertos contaminan capturas; conviene "reset visual" antes de capturar.
5. **Normalización terminológica** — cuando dos términos nombran lo mismo, el dueño del manual autoriza consolidación caso a caso.
6. **El manual histórico tiene contenido real** (no son placeholders), pero vale como referencia, no como fuente literal.
7. **`npm run build` local** antes de pushear ahorra viajes a GitHub Actions.
8. **Docusaurus 3.10 — slugs con emoji llevan guión inicial.** Un heading `## 📦 X` genera `#-x`. Verificar en HTML compilado, no suponer.
9. **La portada del manual se enlaza como `/`, no como `intro`.** Cuando una página está configurada como home, Docusaurus la sirve en `/`.
10. **Documentar obliga a clarificar el producto.** La redacción de `tokens.md` destapó 3 áreas del modelo no bien consolidadas: tipos de Licencia (mensual/anual), precios orientativos de Luna/Mundo, feature de Branderización. **El pipeline documenta y audita a la vez**.
11. **Principio editorial de impuestos.** En manual, notas genéricas; detalles fiscales en checkout/T&C. Protege ante cambios normativos.
12. **Página de manual ≠ documentación técnica cuando hablamos de dinero.** `tokens.md` es efectivamente una **landing de pricing**: escalera de productos visible, diferenciadores destacados, CTAs claros, auto-segmentación por perfil. Futuras páginas con precios siguen este patrón.
13. **Cuando aparece información nueva durante redacción, parar y preguntar.** Publicar información incompleta o imprecisa es peor que reabrir decisiones.
14. **El PDF del manual histórico es un detector de inconsistencias.** Contiene detalles operativos del producto que el equipo puede haber olvidado documentar internamente. Antes de publicar información operativa (pricing, flujos, permisos, límites), buscar los términos clave en `AdventuriQv7_CAS.pdf`. Toma 2 minutos y evita deploys con información incompleta. Ejemplo concreto: la caducidad de Licencias al publicar (no al comprar) se descubrió así y requirió fix post-deploy en tokens.md.
15. **Fix quirúrgico > reescritura completa.** Cuando se detecta una mejora puntual en página ya deployed, el patrón es: cambios mínimos y localizados, diff claro pedido a Cowork, build local, commit con mensaje descriptivo. En 15 minutos se cierra el bucle sin abrir otros frentes.

---

## 9. Cómo usar este documento en una nueva sesión

Cuando abras un nuevo chat con Claude y necesites retomar este proyecto:

**Opción A — Mínima**
Pega el contenido de este archivo al inicio del chat con este mensaje:

> "Retomamos el pipeline de documentación de AdventuriQ. Este es el estado actual del proyecto, léelo antes de responder."

**Opción B — Con objetivo concreto**

> "Retomamos el pipeline de documentación de AdventuriQ. Estado adjunto. Objetivo de hoy: documentar `aventuras/crear-aventura.md`. Antes de empezar, confírmame en 3-4 puntos qué entendiste del estado actual para validar que estamos alineados."

**Opción C — Ante dudas**
Usa los hashtags del glosario (Aventura, Misión, Reto, Game Master, FSD, Gamifier, Webapp) y términos clave (pipeline, Cowork, Docusaurus) para que Claude recupere contexto de chats anteriores vía su sistema de memoria.

---

## 10. Historial de actualizaciones

| Fecha | Cambio |
|---|---|
| 2026-04-24 | Creación inicial del documento. Consolida el estado tras 5 páginas en producción y la sesión de recuperación de contexto. |
| 2026-04-24 | Deploy de `tokens.md` (página #6). Documentada como landing comercial del modelo económico. Añadidas 2 convenciones técnicas de Docusaurus. Identificada Branderización del Webapp como feature sin página propia. Actualizado glosario con modelo económico completo y email comercial `start@adventuriq.com`. 6 nuevos aprendizajes (8-13). |
| 2026-04-24 | Fix quirúrgico en `tokens.md`: caducidad de Licencia empieza al publicar la Aventura, no al comprar la Licencia. 3 cambios puntuales (tabla Licencias, :::tip nuevo, FAQ nueva). Descubrimiento procedente de contraste con `AdventuriQv7_CAS.pdf`. Añadidos aprendizajes 14 y 15. Convención nueva: contrastar con PDF histórico antes de publicar páginas con información operativa. Próxima página confirmada: `aventuras/crear-aventura.md` (ruta de Aventuras). |

<!-- Añade aquí cada actualización significativa al cierre de una sesión -->
