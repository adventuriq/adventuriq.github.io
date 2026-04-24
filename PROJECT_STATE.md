# PROJECT_STATE.md — Pipeline de Documentación AdventuriQ

> **Propósito**: Documento de estado persistente del proyecto de documentación automatizada. Vive en el repo `adventuriq-docs` y se actualiza al final de cada sesión de trabajo significativa. Sirve como "briefing" para recuperar contexto en nuevas conversaciones con Claude (web, Desktop o Code) cuando la conversación anterior se ha vuelto demasiado larga.
>
> **Última actualización**: 24 de abril de 2026
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
- **Mermaid habilitado**: `@docusaurus/theme-mermaid@3.9.2` (luego upgrade a 3.10)
- **Convención de imágenes**: `static/img/{gamifier|webapp}/{seccion}/nombre-semantico.png`

### Archivos clave del repo de docs

| Archivo | Rol |
|---|---|
| `CLAUDE.md` | Instrucciones para Claude Code (bloque "workspace") |
| `DOCS_STRUCTURE.md` (v2) | Biblia de convenciones para Cowork |
| `COWORK_PROMPT.md` | Prompt maestro de 5 fases con 3 variantes de escenario |
| `ARCHITECTURE.md` | Vista general de los 4 repos (sección 3.4 añadida) |
| `docs/` | Contenido del manual (39 páginas en origen) |
| `fsd/` | Feature Spec Documents generados por Claude Code |
| `sidebars.ts` | Navegación (exporta con id `docs`, no `tutorialSidebar`) |
| `docusaurus.config.ts` | Configuración Docusaurus |

---

## 3. Páginas publicadas en producción

| # | Página | Estado | Notas clave |
|---|---|---|---|
| 1 | `recompensas/configuracion-contenido.md` | ✅ Deployed | Primera sesión; normalización "Recompensa" → "Objeto Digital" como excepción a no-destrucción |
| 2 | `intro.md` | ✅ Deployed | Portada; diagrama Mermaid + 4 capturas; fila Admin quitada del rol |
| 3 | `warnings.md` | ✅ Deployed | 2 secciones ("Al crear" / "Durante el juego"); 6 admonitions moderadas; sin capturas |
| 4 | `conceptos-basicos.md` | ✅ Deployed | Tercera página de fundamentos; mínima supervisión (2 DETENTE) |
| 5 | `aventuras/configuracion.md` | ✅ Deployed | Primera página funcional real (más larga); última completada |

### Métrica observable: supervisión decreciente

- Páginas 1-2: 3 puntos de control "DETENTE" + incidentes
- Página 3: 3 DETENTE ligeros, sin incidentes
- Página 4: 2 DETENTE
- Página 5: flujo más fluido desde el primer intento

**Lectura**: Cowork aprende por iteración en este entorno. A partir de la página 4-5 ya podemos plantear autonomía parcial (p. ej., solo detenerse tras Fase 4 para revisión del `.md`).

---

## 4. Auditoría del manual histórico (39 páginas)

| Estado | Cuántas | Interpretación |
|---|---|---|
| Completa | 1 | No requiere trabajo |
| Buena | 9 | Validación + pulido |
| Parcial | 21 | Enriquecimiento con pipeline |
| Mínima | 8 | Reescritura desde cero |

**Problema conocido**: las imágenes del manual antiguo tienen nombres genéricos (`img-000.png` a `img-238.png`) y se reutilizan en contextos no relacionados. Todas las capturas nuevas siguen la convención semántica.

**Páginas restantes por pasar al pipeline**: ~34 del manual histórico + páginas nuevas (p. ej., 5 nuevos tipos de Reto).

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

Aventura, Misión, Reto, Objeto Digital, Bitácora, Muro, Galería, Baúl, Clasificación, GamePIN, POI, Plan Luna, Plan Mundo, Token, Licencia, FSD.

### Roles de usuario (4)

1. **Admin** (AdventuriQ)
2. **Game Master** — compra licencias, crea Aventuras, gestiona equipo
3. **Game Designer** — asistente bajo supervisión del GM
4. **Player**

### Tipos de Reto en la BD

- **14 totales** → 10 vigentes + 4 deprecados (IDs 3, 5, 6, 7)
- En el manual solo se documentan los 10 vigentes.

---

## 6. Reglas y convenciones del pipeline

### Reglas absolutas (COWORK_PROMPT.md)

- **No-destrucción**: nunca borrar contenido existente salvo autorización explícita del dueño.
- **Excepciones autorizadas**: conflictos terminológicos (p. ej., "Recompensa" → "Objeto Digital" dentro de configuracion-contenido.md).
- **Supervisión por fases**: Cowork se detiene tras cada fase y espera validación humana en las primeras sesiones.
- **Admonitions con criterio editorial moderado**: `:::tip`, `:::info`, `:::warning`, `:::danger`. No abusar.
- **Capturas**: nombres semánticos, nunca `img-NNN.png` reutilizables.
- **Flutter Webapp**: requiere navegador completo con JavaScript habilitado para capturas. No es negociable.
- **Contraseñas**: nunca aparecen en las capturas ni en el texto.
- **SEO en frontmatter**: `title`, `description`, `sidebar_position`, `tags`.
- **Enlaces internos**: siempre relativos entre páginas del manual.

### Patrón de revisión consolidado

1. Cowork genera el `.md` final.
2. Mike lo pega en el chat con Claude (web).
3. Claude revisa (inconsistencias, mejoras, SEO, coherencia terminológica).
4. `git add` / `commit` / `push` origin `source`.
5. Verificación en producción en `docs.adventuriq.com`.
6. Pasar a la siguiente página.

---

## 7. Pendientes inmediatos

### Branding visual

- [ ] Logo `adventuriq.svg` o PNG transparente → `static/img/logo.svg`
- [ ] Favicon → `static/img/favicon.ico` (verificar presencia)
- [ ] Social card 1200×630 → `static/img/social-card.png`

### Configuración Docusaurus

- [ ] Migrar `onBrokenMarkdownLinks` al nuevo formato `markdown.hooks` (no urgente, Docusaurus v4 lo exigirá).

### Próxima página a atacar

Pendiente de decisión. Candidatas:

- **`tokens.md`** — corta, cierra bloque conceptual
- **`retos/tipos-de-reto.md`** — consolida panorámica de los 10 tipos vigentes
- **`recompensas/nivel-mision.md`** — cierra la sección Recompensas
- **5 nuevos tipos de Reto** — creación desde cero (p. ej., ruleta-fortuna.md)

---

## 8. Aprendizajes acumulados del pipeline

1. **Cowork aprende con iteración** — la curva de supervisión baja visiblemente desde la página 3.
2. **Sin capturas = sesión rápida** (warnings.md tardó ~1/3 que recompensas).
3. **Flutter requiere navegador real** — confirmado en producción, no hay atajos.
4. **AngularJS 1.5 tiene rarezas** — tooltips y menús abiertos contaminan capturas; conviene ejecutar un "reset visual" antes de capturar.
5. **Normalización terminológica** — cuando dos términos nombran lo mismo, el dueño del manual autoriza consolidación caso a caso (no por defecto).
6. **El manual histórico tiene contenido real** (no son placeholders), pero pedagógicamente vale como referencia, no como fuente literal.
7. **`npm run build` local** antes de pushear ahorra viajes a GitHub Actions.

---

## 9. Cómo usar este documento en una nueva sesión

Cuando abras un nuevo chat con Claude y necesites retomar este proyecto:

**Opción A — Mínima**
Pega el contenido de este archivo al inicio del chat con este mensaje:

> "Retomamos el pipeline de documentación de AdventuriQ. Este es el estado actual del proyecto, léelo antes de responder."

**Opción B — Con objetivo concreto**

> "Retomamos el pipeline de documentación de AdventuriQ. Estado adjunto. Objetivo de hoy: [página o tarea]. Antes de empezar, confírmame en 3-4 puntos qué entendiste del estado actual para validar que estamos alineados."

**Opción C — Ante dudas**
Usa los hashtags del glosario (Aventura, Misión, Reto, Game Master, FSD, Gamifier, Webapp) y términos clave (pipeline, Cowork, Docusaurus) para que Claude recupere contexto de chats anteriores vía su sistema de memoria.

---

## 10. Historial de actualizaciones

| Fecha | Cambio |
|---|---|
| 2026-04-24 | Creación inicial del documento. Consolida el estado tras 5 páginas en producción y la sesión de recuperación de contexto. |

<!-- Añade aquí cada actualización significativa al cierre de una sesión -->
