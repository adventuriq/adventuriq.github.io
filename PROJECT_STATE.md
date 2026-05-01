# PROJECT_STATE.md — Pipeline de Documentación AdventuriQ

> **Propósito**: Documento de estado persistente del proyecto de documentación automatizada. Vive en el repo `adventuriq-docs` y se actualiza al final de cada sesión de trabajo significativa. Sirve como "briefing" para recuperar contexto en nuevas conversaciones con Claude (web, Desktop o Code) cuando la conversación anterior se ha vuelto demasiado larga.
>
> **Última actualización**: 30 de abril de 2026 (deploy de retos/respuesta-exacta.md + limpieza de 21 páginas antiguas)
> **Mantenedor**: Mike (con asistencia de Claude)

---

## 1. Visión general del proyecto

Sistema de documentación automatizada para AdventuriQ (SaaS de gamificación). El objetivo es que cada funcionalidad nueva genere su página de manual con capturas reales sin intervención manual, y migrar el manual histórico (39 páginas PDF) a Docusaurus con calidad editorial homogénea.

**Publicado en**: `https://docs.adventuriq.com`

### Pipeline de 5 fases

1. **DESARROLLO** — Claude Code implementa la feature y genera un FSD técnico (Feature Spec Document) en `fsd/`.
2. **DESPLIEGUE** — Claude Code hace deploy a producción y verifica que funciona.
3. **CAPTURAS** — Cowork (Claude Desktop) lee el FSD, navega el Gamifier/Webapp reales y captura pantallas.
4. **REDACCIÓN** — Cowork combina FSD + capturas en `.md` orientado a Game Masters.
5. **INTEGRACIÓN** — El `.md` se coloca en Docusaurus, se actualiza sidebar, build y deploy.

### Pipeline FSD-style para sesiones documentales (introducido en página #9)

A partir de `bitacora.md`, las sesiones documentales más complejas se preparan con un **FSD documental** previo, redactado por Mike + Claude antes de mandar nada a Cowork. Este FSD documental se diferencia del FSD técnico:

- **FSD técnico** (`fsd/FSD-YYYY-MM-DD-*.md`): especificación de comportamiento de la feature. Escrito al implementar. Autoridad sobre qué hace el sistema.
- **FSD documental** (`fsd/FSD-{nombre-pagina}.md`): estructura editorial de la página del manual. Escrito antes de la sesión. Autoridad sobre cómo se redacta y se organiza.

Cuando ambos existen para la misma página, Cowork lee primero el FSD documental (estructura) y después el FSD técnico (comportamiento).

### Plantillas editoriales para mini-tandas (introducido en página #11-12)

Cuando una sesión inaugura una serie de páginas con estructura común (mini-tanda), se crea una **plantilla editorial** previa que define la estructura replicable. La plantilla se valida estrenándola en la primera página y se actualiza conforme se aplica en las siguientes. Caso vivo: `PLANTILLA-tipos-de-reto-v2.md` aplicable a 9 páginas de tipos de Reto.

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
- **`onBrokenLinks`**: actualmente `'warn'`. Pendiente endurecer a `'throw'` (ver §7).
- **Convención de imágenes**: capturas en `static/img/` (raíz) con prefijo de superficie `webapp-*` o `gamifier-*`. Iconos identificativos en `static/img/retos-iconos/`. Detalle en §6.

### Archivos clave del repo de docs

| Archivo | Rol |
|---|---|
| `CLAUDE.md` | Instrucciones para Claude Code (bloque "workspace") |
| `DOCS_STRUCTURE.md` (v2) | Biblia de convenciones para Cowork |
| `COWORK_PROMPT.md` | Prompt maestro de 5 fases con 3 variantes de escenario |
| `ARCHITECTURE.md` | Vista general de los 4 repos |
| `PROJECT_STATE.md` | Este archivo — estado persistente del proyecto |
| `docs/` | Contenido del manual |
| `fsd/` | Feature Spec Documents (técnicos + documentales) y plantillas editoriales |
| `sidebars.ts` | Navegación (exporta con id `docs`, no `tutorialSidebar`) |
| `docusaurus.config.ts` | Configuración Docusaurus |

### Fuentes de verdad

- **`manual-original-v2.md`** (en proyecto Claude) — manual histórico de 39 páginas transcrito. **Fuente principal de contraste** antes de publicar páginas con información operativa (ver aprendizaje #14). Algunos flujos del manual han quedado obsoletos (ver aprendizaje #16).
- **`AdventuriQv7_CAS.pdf`** (en proyecto Claude) — presentación comercial. Contiene precios actualizados y modelo económico. **No es manual de uso.**
- **FSD técnicos en `fsd/`** — autoridad sobre comportamiento de features implementadas recientemente. Ejemplos: `FSD-2026-03-20-direct-access-to-adventure.md` (deeplink), `FSD-2026-04-15-nube-de-palabras.md`, `FSD-2026-04-14-respuesta-exacta.md`. Disponibles para los 6 tipos nuevos: Respuesta Exacta, Nube de Palabras, PR Audio, PR Vídeo, Ruleta de la Fortuna, Sistema de Votaciones.

---

## 3. Páginas publicadas en producción

| # | Página | Estado | Notas clave |
|---|---|---|---|
| 1 | `recompensas/configuracion-contenido.md` | ✅ Deployed | Primera sesión; normalización "Recompensa" → "Objeto Digital" como excepción a no-destrucción |
| 2 | `intro.md` | ✅ Deployed | Portada; diagrama Mermaid + 4 capturas; servida en `/` (no `/intro`) |
| 3 | `warnings.md` | ✅ Deployed | 2 secciones; 6 admonitions moderadas; sin capturas |
| 4 | `conceptos-basicos.md` | ✅ Deployed | Tercera página de fundamentos. **Fix post-incidente (28-abr-2026)**: enlaces rotos reemplazados por texto plano |
| 5 | `aventuras/configuracion.md` | ✅ Deployed | Primera página funcional real; referencia visual consolidada del Gamifier |
| 6 | `tokens.md` | ✅ Deployed | **Landing comercial del modelo económico completo**. Fix #1: caducidad al publicar. Fix #2: 4 variantes de Licencia |
| 7 | `aventuras/crear-aventura.md` | ✅ Deployed | Asistente de 3 pasos. Flujo renovado respecto al manual histórico |
| 8 | `aventuras/publicar-aventura.md` | ✅ Deployed | Ciclo Draft → Published. Caducidad irreversible. Tabla cruzada Estado × Fechas |
| 9 | `aventuras/bitacora.md` | ✅ Deployed | **Primera página en superficie Webapp (Flutter)**. 3 categorías editoriales, 8 cuadrantes. Fix quirúrgico en sesión #11-12: toggle NdP + enlace. `sidebar_position: 5` |
| 10 | `aventuras/acceder-a-una-aventura.md` | ✅ Deployed | 3 rutas de vinculación. Concepto clave: vinculación ≠ jugabilidad ≠ Token. `sidebar_position: 4` |
| 11 | `retos/index.md` | ✅ Deployed | **Página índice de categoría "Retos"**. 10 tipos vigentes con iconos, descripciones y guía de decisión. `sidebar_position: 0` |
| 12 | `retos/nube-de-palabras.md` | ✅ Deployed | **Mini-tanda 1/5**. Estrena plantilla v2. Toggle "Activar Nube de Palabras en la bitácora" + doble condición. `sidebar_position: 10` |
| 13 | `retos/respuesta-exacta.md` | ✅ Deployed | **Mini-tanda 2/5**. Mecánica de reintentos + tramos de bonus decrecientes. Validación exacta (case-insensitive, acentos sí importan). Caso especial: tramo único 0% oculta tramos al Player. `sidebar_position: 6` |

### Métrica observable: supervisión decreciente y descubrimiento aumentado

- Páginas 1-2: 3 puntos de control "DETENTE" + incidentes
- Página 3: 3 DETENTE ligeros, sin incidentes
- Página 4: 2 DETENTE
- Página 5: flujo fluido desde el primer intento
- Página 6: alta supervisión editorial por información de producto nueva aflorando
- Páginas 7-8: pipeline técnicamente fluido. Supervisión concentrada en descubrimiento de producto
- **Página 9**: cambio de superficie técnica (Gamifier → Webapp/Flutter). Destape masivo de producto no documentado. Introducción del FSD documental
- **Página 10**: pipeline FSD-style consolidado. Cowork ejerce criterio editorial autónomo
- **Páginas 11-12**: sesión doble. Estreno de categoría + plantilla v2 + fix quirúrgico inter-páginas. Pipeline confirma madurez para producción en serie
- **Página 13**: segunda aplicación de plantilla v2. Sesión interrumpida por error de API de imagen en Cowork — resuelta abriendo nueva conversación. Plantilla v2 se confirma estable y replicable. Tiempo de sesión inferior a la primera aplicación (como se predijo)

**Lectura**: el pipeline es técnicamente maduro. Las plantillas editoriales aceleran cada sesión ~30%. El principal riesgo operativo actual no es el contenido sino la **estabilidad de las herramientas** (error de imagen de la API de Cowork — aprendizaje #33).

---

## 4. Auditoría del manual histórico y estado del sidebar

### Limpieza de páginas antiguas (decisión del 28-abr-2026, ejecutada 30-abr-2026)

Se eliminaron del repo y del sidebar **21 páginas heredadas del manual antiguo** que no pasaron por el pipeline FSD-style. El manual queda temporalmente más corto (13 páginas) pero uniformemente bueno. El contenido antiguo está preservado en el historial de Git para consulta durante la sesión de arquitectura de la Fase 2.

**Páginas eliminadas:**

- **Aventuras** (11): Publicación y Fechas, Game Pin y Bloqueos, Visibilidad y Controles, Imágenes, Idiomas y Traducciones, Contenido y Descripción, Condiciones de Finalización, Mapas, Equipos (Clanes), Retos de la Aventura, Puntos de Interés (POI).
- **Misiones** (8, sección completa eliminada): Configuración General, Bloqueos y Visibilidad, Contenido e Imágenes, Descripción, Mapas, Recompensas, Componente Llamada, Enlazar Retos.
- **Recompensas** (2): Recompensas de Misión, Recompensas de Reto.
- **Métricas** (2, sección completa eliminada): Clasificación, Game Board.

### Estado actual del sidebar

```
Manual AdventuriQ/
├── intro.md                                    ✅
├── warnings.md                                 ✅
├── conceptos-basicos.md                        ✅
├── tokens.md                                   ✅
├── Aventuras/
│   ├── crear-aventura.md                       ✅
│   ├── configuracion.md                        ✅
│   ├── publicar-aventura.md                    ✅
│   ├── acceder-a-una-aventura.md               ✅
│   └── bitacora.md                             ✅
├── Retos/
│   ├── index.md                                ✅
│   ├── nube-de-palabras.md                     ✅
│   └── respuesta-exacta.md                     ✅
└── Recompensas/
    └── configuracion-contenido.md              ✅
```

**13 páginas, 0 páginas antiguas, calidad uniforme.**

### Rutas de documentación pendientes

#### Sección "Retos" — mini-tanda en curso (3 de 5 completadas)

- ✅ `retos/nube-de-palabras.md` (mini-tanda 1/5)
- ✅ `retos/respuesta-exacta.md` (mini-tanda 2/5)
- 📌 `retos/pregunta-respuesta-audio.md` (mini-tanda 3/5) ← **SIGUIENTE**
- 📌 `retos/pregunta-respuesta-video.md` (mini-tanda 4/5)
- 📌 `retos/ruleta-de-la-fortuna.md` (mini-tanda 5/5)
- 📌 `aventuras/votaciones.md` (tras mini-tanda, no es tipo de Reto)
- 📌 5 tipos vigentes existentes (fase posterior a la mini-tanda)

#### Sección "Aventuras" — pendiente de reestructuración

- 📌 11 sub-páginas eliminadas pendientes de rehacer (Fase 2)
- 📌 `aventuras/tipos-de-aventura.md`

#### Secciones eliminadas pendientes de rehacer (Fase 2)

- 📌 **Misiones** — 8 páginas (sección completa por crear)
- 📌 **Recompensas** — 2 páginas + objetos a nivel Aventura
- 📌 **Métricas** — 2 páginas (sección completa por crear)

### Plan de Fase 2 — Sesión de arquitectura + reescritura (tras mini-tanda)

**Decisión registrada**: Camino B (reestructurar primero, rehacer después).

1. **Sesión de arquitectura de información** (Mike + Claude, sin Cowork): replantear la estructura del manual. Objetivo: reorganizar las 21 páginas eliminadas en ~12-15 páginas mejor estructuradas, organizadas por **tarea del GM** en lugar de por **campo del formulario del Gamifier**. Posibles consolidaciones:
   - "Imágenes" + "Contenido y Descripción" + "Idiomas y Traducciones" → "Contenido multilingüe de la Aventura".
   - Varias sub-páginas de Aventuras → absorción en `aventuras/configuracion.md` ampliada.
   - Estructura de Misiones replanteada siguiendo el mismo patrón que Aventuras.

2. **Crear plantillas editoriales** por sección (mismo patrón que `PLANTILLA-tipos-de-reto-v2.md`).

3. **Reescribir en serie** con Cowork usando las plantillas.

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

Aventura, Misión, Reto, Objeto Digital, Bitácora, Muro, Galería, Baúl, Clasificación, GamePIN, deep link, POI, Plan Luna, Plan Mundo, Token, Licencia (Individual/Equipo, Mensual/Anual), Branderización, Raze, FSD (técnico/documental), Votaciones, Nube de Palabras, Respuesta Exacta, Final de Aventura, Volver a Jugar, Tramos de Bonus.

### Roles de usuario (4)

1. **Admin** (AdventuriQ)
2. **Game Master** — compra licencias, crea Aventuras, gestiona equipo
3. **Game Designer** — asistente bajo supervisión del GM (no puede crear Aventuras)
4. **Player**

### Tipos de Reto en la BD

- **14 totales** → 10 vigentes + 4 deprecados (IDs 3, 5, 6, 7).
- En el manual solo se documentan los 10 vigentes.

**Lista de los 10 tipos vigentes** (con orden definitivo en página índice):

1. Pregunta / Respuesta
2. Preguntas Encadenadas
3. Respuesta Libre
4. Compartir Foto
5. Llamada a la Acción
6. Respuesta Exacta (nuevo) ✅ documentado
7. Pregunta/Respuesta con Audio (nuevo)
8. Pregunta/Respuesta con Vídeo (nuevo)
9. Ruleta de la Fortuna (nuevo)
10. Nube de Palabras (nuevo) ✅ documentado

### Modelo económico (consolidado en tokens.md)

**4 variantes de Licencia de Aventura** (elección al crear la Aventura):

| Tipo | Precio | Duración |
|---|---|---|
| Licencia Mensual (individual) | 18 € / mes | 30 días desde publicación |
| Licencia Mensual (equipo) | 36 € / mes | 30 días desde publicación |
| Licencia Anual (individual) | 200 € / año | 12 meses desde publicación |
| Licencia Anual (equipo) | 400 € / año | 12 meses desde publicación |

- **Patrón de precios**: Equipo = 2× Individual en ambas periodicidades.
- **Modo Individual**: solo ranking de jugadores.
- **Modo Equipo**: ranking de jugadores + ranking por equipos + ranking del jugador en su equipo. Incluye gestión de equipos (clanes).
- **La elección Individual/Equipo se hace al crear la Aventura** y determina el modo de juego.
- **La caducidad empieza al publicar la Aventura**, no al comprar la Licencia. Es irreversible.
- **Token**: 1 € por Player por partida (fungibles, no caducan).
- **Vinculación de Aventura ≠ consumo de Token** (página #10): el Token se consume al iniciar la primera partida, no al vincular.
- **Plan Luna**: desde 750 € / año — 1 Aventura, Players ilimitados, Branderización incluida.
- **Plan Mundo**: desde 3.600 € / año — Aventuras ilimitadas, Players ilimitados, Branderización incluida.
- Precios publicados **sin impuestos** (cálculo en checkout).
- Email comercial: `start@adventuriq.com`.

**Productos adicionales en la tienda** (detectados pero no documentados):

- Parking Aventura Mensual: 6 € / mes
- Parking Aventura Anual: 70 € / año
- Ampliación espacio (+100 MB): 4 € / mes
- Game Designer Anual: 50 € / año
- Game Designer Mensual: precio pendiente de confirmar

---

## 6. Reglas y convenciones del pipeline

### Reglas absolutas (COWORK_PROMPT.md)

- **No-destrucción**: nunca borrar contenido existente salvo autorización explícita del dueño.
- **Excepciones autorizadas**: conflictos terminológicos (p. ej., "Recompensa" → "Objeto Digital").
- **Supervisión por fases**: Cowork se detiene tras cada fase y espera validación humana. Las pausas marcadas con DETENTE son obligatorias.
- **Admonitions con criterio editorial moderado**: máximo 4-5 por página.
- **Capturas**: nombres semánticos con prefijo de superficie. Detalle abajo.
- **Flutter Webapp**: requiere navegador completo con JavaScript habilitado. No negociable.
- **Contraseñas**: nunca aparecen en capturas ni texto.
- **SEO en frontmatter**: `title`, `description`, `sidebar_position`, `tags`, `keywords`.
- **Enlaces internos**: siempre relativos. No enlazar a páginas que no existen aún — dejar texto plano (regla endurecida tras incidente de `conceptos-basicos.md`).
- **Impuestos**: en páginas con precios, notas genéricas. Nunca detalles fiscales específicos.
- **Contraste con manual histórico**: selectivo. Usar lo que aplica, descartar flujos obsoletos.
- **Contraste con FSD técnico**: es autoridad sobre comportamiento. La UI verificada empíricamente es autoridad sobre terminología (aprendizaje #28).

### Naming de capturas con prefijo de superficie

Todas las capturas llevan prefijo `webapp-` (Flutter móvil) o `gamifier-` (AngularJS desktop). Docusaurus colapsa todas las imágenes en `/assets/images/` con hashes — el prefijo en el nombre permite aplicar CSS diferenciado. Ejemplos: `webapp-bitacora-votar.png`, `gamifier-reto-respuesta-exacta-tramos.png`.

### Iconos identificativos de tipo de Reto

- **Almacenamiento**: `static/img/retos-iconos/reto-icon-{slug}.png`.
- **No llevan prefijos** `webapp-` ni `gamifier-` (son assets de identidad visual, no capturas).
- **Tamaño en página individual**: 120px, flotando a la derecha.
- **Tamaño en tabla del índice**: 48px.
- **Regla CSS**: `.reto-icon` en `src/css/custom.css`.

### Convenciones técnicas de Docusaurus 3.10

- **Anchors con emoji**: llevan guión inicial. `## 📦 X` genera `#-x`.
- **Portada**: `intro.md` se sirve en `/` (no en `/intro`).
- **Mermaid**: usar `<br/>` para saltos de línea en nodos.
- **sidebars.ts explícito**: el orden en `sidebars.ts` manda; `sidebar_position` del frontmatter debe ser coherente.
- **`onBrokenLinks: 'warn'`**: pendiente endurecer a `'throw'` (ver §7).

### Plantillas editoriales para mini-tandas

La plantilla se valida estrenándola en la primera página. Las siguientes heredan la estructura y solo exponen diferencias.

**Caso de aplicación**: `PLANTILLA-tipos-de-reto-v2.md` validada en `nube-de-palabras.md`, confirmada estable en `respuesta-exacta.md`. Aplicable a 7 páginas más de tipos de Reto.

### Patrón de revisión consolidado

1. Cowork genera el `.md` final.
2. Mike lo pega en el chat con Claude (web).
3. Claude revisa (inconsistencias, SEO, coherencia terminológica, enlaces a páginas inexistentes).
4. Contraste con `manual-original-v2.md` y/o FSD técnico si aplica.
5. `npm run build` local.
6. `git add` / `commit` / `push` origin `source`.
7. Verificación en producción.
8. Actualizar este `PROJECT_STATE.md`.
9. Pasar a la siguiente página.

---

## 7. Pendientes inmediatos

### Branding visual

- [ ] Logo `adventuriq.svg` o PNG transparente → `static/img/logo.svg`
- [ ] Favicon → `static/img/favicon.ico`
- [ ] Social card 1200×630 → `static/img/social-card.png`

### Configuración Docusaurus

- [ ] **Endurecer `onBrokenLinks: 'throw'`**. Aplicación recomendada tras cubrir páginas con enlaces "preventivos".
- [ ] Migrar `onBrokenMarkdownLinks` al nuevo formato `markdown.hooks` (no urgente).

### Deuda documental activa

#### D-03 · Sub-sesión de capturas de estado finalizado de `bitacora.md`

- **Prioridad**: media. Información textual ya publicada; la deuda es solo visual.

#### D-05 · Ampliaciones de `aventuras/configuracion.md`

- Activador del sistema de Votaciones (5 niveles e iconos).
- Sección "Final de Aventura" (Mensaje Final + Volver a Jugar).
- Sección "Acceso a la Aventura" (GamePIN, deep link, QR).

#### D-06 · `aventuras/listado-aventuras-player.md` (candidata, no confirmada)

#### D-07 · Otros pendientes documentales

- Branderización del Webapp (candidata a `branding.md`).
- Productos adicionales de la tienda.
- Captura de variante con subdominio branderizado del deep link.

#### D-09 · `retos/pregunta-respuesta-audio.md` (mini-tanda 3/5) ← SIGUIENTE

- **FSD técnico disponible**: sí.
- **Plantilla**: `PLANTILLA-tipos-de-reto-v2.md`.
- **Prioridad**: alta.

#### D-10 · `retos/pregunta-respuesta-video.md` (mini-tanda 4/5)

- **FSD técnico disponible**: sí.

#### D-11 · `retos/ruleta-de-la-fortuna.md` (mini-tanda 5/5)

- **FSD técnico disponible**: sí.

#### D-12 · `aventuras/votaciones.md`

- **FSD técnico disponible**: sí.
- **Prioridad**: alta — la deuda visible más vieja de bitácora.

#### D-13 · 5 tipos de Reto vigentes ya existentes (fase posterior)

#### D-14 · Reescritura de las 21 páginas eliminadas (Fase 2)

- **Decisión**: Camino B (sesión de arquitectura primero, reescritura después).
- **Alcance**: 11 de Aventuras + 8 de Misiones + 2 de Recompensas + 2 de Métricas.
- **Pre-requisito**: sesión de arquitectura de información (Mike + Claude) para reorganizar en ~12-15 páginas.
- **Estimación**: tras la sesión de arquitectura, ~10-12 sesiones de Cowork.

### Oportunidad comercial

- [ ] Enlazar `docs.adventuriq.com/tokens` desde landing comercial.

### Próxima página a atacar

**`retos/pregunta-respuesta-audio.md`** (D-09) — mini-tanda 3/5. Misma plantilla v2, con FSD técnico disponible. Estimación: ~50-60 min (sesión predecible).

Para arrancar mañana, Mike pasa el FSD técnico de PR Audio al chat y Claude genera FSD documental + prompt de 5 fases.

---

## 8. Aprendizajes acumulados del pipeline

1. **Cowork aprende con iteración** — la curva de supervisión baja visiblemente desde la página 3.
2. **Sin capturas = sesión rápida** (warnings.md tardó ~1/3 que recompensas).
3. **Flutter requiere navegador real** — confirmado en producción, no hay atajos.
4. **AngularJS 1.5 tiene rarezas** — tooltips y menús abiertos contaminan capturas; conviene "reset visual" antes de capturar.
5. **Normalización terminológica** — cuando dos términos nombran lo mismo, el dueño del manual autoriza consolidación caso a caso.
6. **El manual histórico tiene contenido real** (no son placeholders), pero vale como referencia, no como fuente literal.
7. **`npm run build` local** antes de pushear ahorra viajes a GitHub Actions.
8. **Docusaurus 3.10 — slugs con emoji llevan guión inicial.** Verificar en HTML compilado.
9. **La portada del manual se enlaza como `/`, no como `intro`.**
10. **Documentar obliga a clarificar el producto.** El pipeline documenta y audita a la vez.
11. **Principio editorial de impuestos.** Notas genéricas; detalles fiscales en checkout/T&C.
12. **Página de manual ≠ documentación técnica cuando hablamos de dinero.** `tokens.md` es landing de pricing.
13. **Cuando aparece información nueva durante redacción, parar y preguntar.**
14. **El manual histórico es un detector de inconsistencias.** Contraste selectivo antes de publicar.
15. **Fix quirúrgico > reescritura completa.**
16. **El manual histórico puede quedar obsoleto en flujos concretos.** Contraste selectivo.
17. **Documentar sigue destapando producto (iteración 2).**
18. **Publicar es un punto de no retorno para la caducidad.**
19. **Las features condicionales necesitan categorías editoriales explícitas.**
20. **El estado finalizado merece una mini-sesión propia.**
21. **La normalización terminológica puede no ser necesaria.** Verificar empíricamente la UI actual.
22. **Documentar destapa producto no documentado en otras páginas.** Mantener §7 actualizado.
23. **La auditoría retroactiva no siempre toca aplicarla.**
24. **`onBrokenLinks: 'throw'` es la red de seguridad técnica del aprendizaje #16.**
25. **Cuando existe FSD técnico previo, leerlo antes de redactar.** FSD técnico = comportamiento, FSD documental = estructura editorial.
26. **Cowork puede ejercer buen criterio editorial autónomo cuando tiene contexto suficiente.**
27. **La convención de carpetas `static/img/` no sobrevive al build de Docusaurus.** Apoyarse en naming del archivo, no en estructura de carpetas.
28. **El FSD técnico es autoridad sobre comportamiento, pero la UI manda sobre terminología.** Jerarquía: comportamiento ← FSD técnico, terminología ← UI verificada empíricamente.
29. **Las plantillas editoriales se validan estrenándolas, no diseñándolas en abstracto.** Son "vivas".
30. **Una sesión puede cerrar varios hitos simultáneos cuando hay preparación previa fuerte.**
31. **Los fixes quirúrgicos inter-páginas son la consecuencia natural del aprendizaje #22.**
32. **Un manual corto y uniformemente bueno supera a uno largo e inconsistente.** Decisión aplicada con 21 páginas eliminadas. El lector no distingue "esto se hizo primero" — solo ve inconsistencia o consistencia.
33. **Cuando Cowork se queda en bucle por error de API, abrir nueva conversación.** El error `Could not process image` corrompe el contexto de la conversación y no se puede recuperar reintentando. La solución es cerrar, abrir nueva conversación, y retomar desde el punto donde se quedó con instrucciones explícitas de **no analizar imágenes inline** — solo guardar archivos. El contenido del FSD técnico tiene toda la información necesaria para redactar incluso sin esa captura concreta.

---

## 9. Cómo usar este documento en una nueva sesión

Cuando abras un nuevo chat con Claude y necesites retomar este proyecto:

**Opción A — Mínima**

> "Retomamos el pipeline de documentación de AdventuriQ. Este es el estado actual del proyecto, léelo antes de responder."

**Opción B — Con objetivo concreto** (recomendada)

> "Retomamos el pipeline de documentación de AdventuriQ. Estado adjunto. Objetivo de hoy: `retos/pregunta-respuesta-audio.md` (D-09), mini-tanda 3/5, aplicando la plantilla v2. Pásame el FSD técnico de PR Audio cuando te lo pida."

**Opción C — Ante dudas**

Usa los términos clave (pipeline, Cowork, Docusaurus, FSD-style, mini-tanda, plantilla v2, Aventura, Misión, Reto, Game Master) para que Claude recupere contexto de chats anteriores vía su sistema de memoria.

---

## 10. Historial de actualizaciones

| Fecha | Cambio |
|---|---|
| 2026-04-24 | Creación inicial del documento. Consolida el estado tras 5 páginas en producción. |
| 2026-04-24 | Deploy de `tokens.md` (página #6). Documentada como landing comercial. Aprendizajes 8-13. |
| 2026-04-24 | Fix quirúrgico #1 en `tokens.md`: caducidad de Licencia empieza al publicar. Aprendizajes 14-15. |
| 2026-04-24 | Deploy de `crear-aventura.md` (#7) + `publicar-aventura.md` (#8). Fix #2 en `tokens.md`: 4 variantes de Licencia. Aprendizajes 16-18. |
| 2026-04-28 | **Deploy de `bitacora.md` (#9)**. Primera página Webapp. Detectó Votaciones, NdP, "Volver a Jugar". Introducción del FSD documental. Aprendizajes 19-22. |
| 2026-04-28 | **Deploy de `acceder-a-una-aventura.md` (#10)**. 3 rutas de vinculación. Aprendizajes 25-26. |
| 2026-04-28 | **Fix de enlaces rotos en `conceptos-basicos.md`**. Aprendizajes 23-24. |
| 2026-04-28 | **Refactor de naming de capturas** (50 imágenes, 8 archivos .md). Aprendizaje 27. |
| 2026-04-28 | **Sesión doble: `retos/index.md` (#11) + `nube-de-palabras.md` (#12)**. Estreno categoría Retos + plantilla v2 + fix inter-páginas en bitácora. Aprendizajes 28-31. |
| 2026-04-30 | **Deploy de `respuesta-exacta.md` (#13)**. Mini-tanda 2/5. Mecánica de reintentos + tramos de bonus. Sesión interrumpida por error API de imagen en Cowork — resuelta con nueva conversación. |
| 2026-04-30 | **Limpieza de 21 páginas antiguas** del repo y sidebar. Manual queda en 13 páginas uniformes. Plan de Fase 2 (Camino B: sesión de arquitectura + reescritura) registrado. Aprendizajes 32-33. |

<!-- Añade aquí cada actualización significativa al cierre de una sesión -->
