# PROJECT_STATE.md — Pipeline de Documentación AdventuriQ

> **Propósito**: Documento de estado persistente del proyecto de documentación automatizada. Vive en el repo `adventuriq-docs` y se actualiza al final de cada sesión de trabajo significativa.
>
> **Última actualización**: 30 de abril de 2026 — **MANUAL COMPLETO** 🎯
> **Mantenedor**: Mike (con asistencia de Claude)

---

## 1. Visión general del proyecto

Sistema de documentación automatizada para AdventuriQ (SaaS de gamificación). El objetivo era migrar el manual histórico (39 páginas PDF) a Docusaurus con calidad editorial homogénea y documentar todas las features del producto.

**Estado: ✅ MANUAL COMPLETO.**

**Publicado en**: `https://docs.adventuriq.com`

### Pipeline de 5 fases

1. **DESARROLLO** — Claude Code implementa la feature y genera un FSD técnico en `fsd/`.
2. **DESPLIEGUE** — Claude Code hace deploy a producción y verifica.
3. **CAPTURAS** — Cowork (Claude Desktop) lee el FSD, navega el Gamifier/Webapp y captura pantallas.
4. **REDACCIÓN** — Cowork combina FSD + capturas en `.md` orientado a Game Masters.
5. **INTEGRACIÓN** — El `.md` se coloca en Docusaurus, se actualiza sidebar, build y deploy.

### Pipeline FSD-style para sesiones documentales (introducido en página #9)

- **FSD técnico** (`fsd/FSD-YYYY-MM-DD-*.md`): autoridad sobre comportamiento.
- **FSD documental** (`fsd/FSD-{nombre-pagina}.md`): autoridad sobre estructura editorial.

### Plantillas editoriales para mini-tandas (introducido en página #11-12)

Plantilla replicable para series de páginas con estructura común. Caso aplicado: `PLANTILLA-tipos-de-reto-v2.md` usada en las 10 páginas de tipos de Reto.

### Briefings únicos para series de páginas (introducido en las últimas sesiones)

Cuando Cowork ya domina el pipeline y la plantilla, un solo briefing cubre múltiples páginas sin DETENTE intermedios. Aplicado con éxito en: 5 Retos originales, 8 Misiones, 5 Aventuras pendientes, y las 3 últimas páginas.

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
- **`onBrokenLinks`**: actualmente `'warn'`. Recomendado endurecer a `'throw'` ahora que el manual está completo (ver §7).
- **Convención de imágenes**: `static/img/` raíz con prefijos `webapp-*` / `gamifier-*`. Iconos en `static/img/retos-iconos/`.

### Fuentes de verdad

- **`manual-original-v2.md`** — manual histórico. Ya no es fuente principal (el manual nuevo lo ha reemplazado completamente). Se conserva como referencia histórica.
- **`AdventuriQv7_CAS.pdf`** — presentación comercial. Contiene precios.
- **FSD técnicos en `fsd/`** — autoridad sobre comportamiento de features recientes.

---

## 3. Manual completo — todas las páginas publicadas

### Sidebar final

```
📖 Introducción
⚠️ Precauciones
🧩 Conceptos Básicos
🪙 Tokens y Licencias
🎮 Aventuras/
│   ├── 🚀 Crear una Aventura
│   ├── ⚙️ Configuración de una Aventura
│   ├── 🏷️ Publicar una Aventura
│   ├── 🔗 Acceder a una Aventura
│   ├── 🎮 Bitácora del Player
│   ├── 🏁 Condiciones de Finalización
│   ├── ⭐ Votaciones entre Players
│   ├── 👥 Equipos (Clanes)
│   ├── 🗺️ Mapas y POI
│   ├── 🌍 Idiomas y Traducciones
│   └── 🎁 Objetos Digitales de Aventura
📋 Misiones/
│   ├── 📋 Misiones (índice)
│   ├── ⚙️ Configuración General
│   ├── 🔒 Bloqueos y Visibilidad
│   ├── 🖼️ Contenido e Imágenes
│   ├── 📝 Descripción
│   ├── 🗺️ Mapas
│   ├── 🎁 Objetos Digitales de Misión
│   ├── 📞 Notificaciones
│   └── 🏁 Condiciones de Finalización
⚔️ Retos/
│   ├── 🎯 Los 10 tipos disponibles (índice)
│   ├── ❓ Pregunta / Respuesta
│   ├── 🔗 Preguntas Encadenadas
│   ├── 📝 Respuesta Libre
│   ├── 📸 Subir Foto
│   ├── 📣 Llamada a la Acción
│   ├── ✏️ Respuesta Exacta
│   ├── 🎤 PR con Audio
│   ├── 🎬 PR con Vídeo
│   ├── 🎰 Ruleta de la Fortuna
│   ├── ☁️ Nube de Palabras
│   └── 🎁 Objetos Digitales de Reto
🎁 Recompensas/
│   └── 🎁 Configuración de Objetos Digitales
📊 Métricas/
│   ├── 📊 Métricas (índice)
│   ├── 🏆 Clasificación
│   └── 📋 Game Board
🎨 Game Designer
```

### Inventario completo

| # | Página | Categoría | Estado |
|---|---|---|---|
| 1 | `recompensas/configuracion-contenido.md` | Recompensas | ✅ |
| 2 | `intro.md` | Raíz | ✅ |
| 3 | `warnings.md` | Raíz | ✅ |
| 4 | `conceptos-basicos.md` | Raíz | ✅ |
| 5 | `aventuras/configuracion.md` | Aventuras | ✅ |
| 6 | `tokens.md` | Raíz | ✅ |
| 7 | `aventuras/crear-aventura.md` | Aventuras | ✅ |
| 8 | `aventuras/publicar-aventura.md` | Aventuras | ✅ |
| 9 | `aventuras/bitacora.md` | Aventuras | ✅ |
| 10 | `aventuras/acceder-a-una-aventura.md` | Aventuras | ✅ |
| 11 | `retos/index.md` | Retos | ✅ |
| 12 | `retos/nube-de-palabras.md` | Retos | ✅ |
| 13 | `retos/respuesta-exacta.md` | Retos | ✅ |
| 14 | `retos/pregunta-respuesta-audio.md` | Retos | ✅ |
| 15 | `retos/pregunta-respuesta-video.md` | Retos | ✅ |
| 16 | `retos/ruleta-de-la-fortuna.md` | Retos | ✅ |
| 17 | `retos/pregunta-respuesta.md` | Retos | ✅ |
| 18 | `retos/preguntas-encadenadas.md` | Retos | ✅ |
| 19 | `retos/respuesta-libre.md` | Retos | ✅ |
| 20 | `retos/subir-foto.md` | Retos | ✅ |
| 21 | `retos/llamada-a-la-accion.md` | Retos | ✅ |
| 22 | `retos/objetos-digitales.md` | Retos | ✅ |
| 23 | `misiones/index.md` | Misiones | ✅ |
| 24 | `misiones/configuracion-general.md` | Misiones | ✅ |
| 25 | `misiones/bloqueos-visibilidad.md` | Misiones | ✅ |
| 26 | `misiones/contenido-imagenes.md` | Misiones | ✅ |
| 27 | `misiones/descripcion.md` | Misiones | ✅ |
| 28 | `misiones/mapas.md` | Misiones | ✅ |
| 29 | `misiones/objetos-digitales.md` | Misiones | ✅ |
| 30 | `misiones/notificaciones.md` | Misiones | ✅ |
| 31 | `misiones/condiciones-finalizacion.md` | Misiones | ✅ |
| 32 | `aventuras/condiciones-finalizacion.md` | Aventuras | ✅ |
| 33 | `aventuras/votaciones.md` | Aventuras | ✅ |
| 34 | `aventuras/equipos-clanes.md` | Aventuras | ✅ |
| 35 | `aventuras/mapas-poi.md` | Aventuras | ✅ |
| 36 | `aventuras/idiomas-traducciones.md` | Aventuras | ✅ |
| 37 | `aventuras/objetos-digitales.md` | Aventuras | ✅ |
| 38 | `metricas/index.md` | Métricas | ✅ |
| 39 | `metricas/clasificacion.md` | Métricas | ✅ |
| 40 | `metricas/game-board.md` | Métricas | ✅ |
| 41 | `game-designer.md` | Raíz | ✅ |

**Total: 41 páginas publicadas. 0 pendientes de features core.**

### Evolución del pipeline

| Hito | Páginas | Método | Velocidad |
|---|---|---|---|
| Páginas 1-8 | Individual | FSD documental por página, DETENTE entre fases | ~2-3h/página |
| Páginas 9-10 | Individual | FSD documental + FSD técnico, menos DETENTE | ~1.5-2h/página |
| Páginas 11-13 | Mini-tanda | Plantilla v2 + FSD documental + FSD técnico | ~1h/página |
| Páginas 14-16 | Serie producción | Plantilla v2 + FSD técnico, Cowork autónomo | ~45min/página |
| Páginas 17-21 | Briefing único 5 pág | Plantilla v2, sin FSD, manual histórico como ref | ~30min/página |
| Páginas 22-31 | Briefing único 8+1 pág | Sin plantilla rígida, manual histórico + UI | ~30min/página |
| Páginas 32-37 | Briefing único 5+3 pág | Mix: features nuevas + antiguas, AND/OR | ~35min/página |
| Páginas 38-41 | Briefing único 3+1 pág | Últimas, exploración de UI | ~35min/página |

**Lectura final**: el pipeline pasó de ~2-3h/página (supervisión alta, página a página) a ~30-35min/página (briefings en bloque, Cowork autónomo). **Aceleración de ~5x** a lo largo del proyecto, manteniendo calidad uniforme.

---

## 4. Estado del sidebar y auditoría

### Manual histórico vs manual nuevo

| Métrica | Manual antiguo (PDF) | Manual nuevo (Docusaurus) |
|---|---|---|
| Páginas | 39 (baja calidad, inconsistentes) | 41 (calidad uniforme, pipeline FSD-style) |
| Capturas | Genéricas (`img-000.png` a `img-238.png`) | Semánticas con prefijo de superficie |
| Estructura | Por campo del formulario | Por tarea del GM + experiencia del Player |
| Features documentadas | Solo las de 2024 | Todas las de producción al 30-abr-2026, incluyendo AND/OR, Votaciones, Notificaciones renovadas, 5 nuevos tipos de Reto |
| Multiidioma | Mencionado pero no documentado | Página dedicada |
| Objetos Digitales | Como "Recompensas" genérico | 3 páginas dedicadas (Aventura, Misión, Reto) con condiciones AND/OR |
| Métricas | Básico | Clasificación completa + Game Board con 3 bloques |
| Game Designer | No documentado | Página dedicada con permisos y limitaciones |

### Limpieza ejecutada

Se eliminaron **21 páginas antiguas** del manual histórico que fueron reemplazadas por páginas nuevas de calidad superior. Todo el contenido antiguo está preservado en el historial de Git.

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

Aventura, Misión, Reto, Objeto Digital, Bitácora, Muro, Galería, Baúl, Clasificación, Game Board, GamePIN, deep link, POI, Plan Luna, Plan Mundo, Token, Licencia (Individual/Equipo, Mensual/Anual), Branderización, Raze, FSD (técnico/documental), Votaciones, Nube de Palabras, Respuesta Exacta, Subir Foto, Ruleta de la Fortuna, Preguntas Encadenadas, Llamada a la Acción, Respuesta Libre, Notificaciones, Condiciones de Finalización, Tramos de Bonus, Game Designer, Equipos (Clanes).

### Roles de usuario (4)

1. **Admin** (AdventuriQ)
2. **Game Master** — compra licencias, crea Aventuras, gestiona equipo. ✅ Documentado en todo el manual
3. **Game Designer** — asistente bajo supervisión del GM. ✅ Documentado en `game-designer.md`
4. **Player**. ✅ Experiencia documentada en bitácora, acceder-a-una-aventura, y en §4 de cada tipo de Reto

### Tipos de Reto — los 10 vigentes ✅ todos documentados

1. Pregunta / Respuesta ✅
2. Preguntas Encadenadas ✅
3. Respuesta Libre ✅
4. Subir Foto ✅
5. Llamada a la Acción ✅
6. Respuesta Exacta ✅
7. Pregunta/Respuesta con Audio ✅
8. Pregunta/Respuesta con Vídeo ✅
9. Ruleta de la Fortuna ✅
10. Nube de Palabras ✅

### Modelo económico (consolidado en tokens.md)

**4 variantes de Licencia de Aventura**:

| Tipo | Precio | Duración |
|---|---|---|
| Licencia Mensual (individual) | 18 € / mes | 30 días desde publicación |
| Licencia Mensual (equipo) | 36 € / mes | 30 días desde publicación |
| Licencia Anual (individual) | 200 € / año | 12 meses desde publicación |
| Licencia Anual (equipo) | 400 € / año | 12 meses desde publicación |

- Equipo = 2× Individual. Caducidad empieza al publicar (irreversible).
- Token: 1 € por Player por partida (fungibles, no caducan).
- Plan Luna: desde 750 €/año. Plan Mundo: desde 3.600 €/año.
- Precios sin impuestos. Email: `start@adventuriq.com`.

---

## 6. Reglas y convenciones del pipeline

### Reglas absolutas

- **No-destrucción** salvo autorización explícita.
- **Admonitions**: máximo 4-5 por página.
- **Capturas**: prefijo `webapp-*` / `gamifier-*`, sin subcarpetas.
- **Iconos de Reto**: `static/img/retos-iconos/reto-icon-{slug}.png`, CSS `.reto-icon`.
- **Flutter Webapp**: navegador completo con JS.
- **SEO frontmatter**: title, description, sidebar_position, keywords.
- **Enlaces internos**: relativos. Texto plano sin link para páginas inexistentes.
- **Impuestos**: notas genéricas, nunca detalles fiscales.
- **FSD técnico**: autoridad sobre comportamiento. UI: autoridad sobre terminología.

### Convenciones técnicas de Docusaurus 3.10

- Anchors con emoji llevan guión inicial.
- `intro.md` se sirve en `/`.
- Mermaid: `<br/>` para saltos de línea.
- `sidebars.ts` explícito manda sobre `sidebar_position`.
- `onBrokenLinks: 'warn'` — pendiente endurecer a `'throw'`.

### Plantillas editoriales

- `PLANTILLA-tipos-de-reto-v2.md` — usada en las 10 páginas de tipos de Reto + 2 páginas de Objetos Digitales de Reto.

---

## 7. Pendientes menores (no bloquean el manual)

### Branding visual

- [ ] Logo `adventuriq.svg` → `static/img/logo.svg`
- [ ] Favicon → `static/img/favicon.ico`
- [ ] Social card 1200×630 → `static/img/social-card.png`

### Configuración Docusaurus

- [ ] **Endurecer `onBrokenLinks: 'throw'`** — ahora que el manual está completo, es el momento ideal.
- [ ] Migrar `onBrokenMarkdownLinks` al nuevo formato (Docusaurus v4).

### Deuda visual menor

- [ ] **D-03**: Sub-sesión de capturas de estado finalizado de `bitacora.md` — pastillas "Final de Aventura" y "Volver a Jugar" solo descritas con texto, sin captura.
- [ ] **Ranking HTML**: hallazgo en Clasificación (URL pública con Top 10). No documentado por decisión editorial — evaluar en el futuro.
- [ ] Captura de variante con subdominio branderizado del deep link.

### Documentación futura (no core)

- [ ] **Branderización del Webapp** — cuando sea prioritario para clientes Luna/Mundo.
- [ ] **Productos adicionales de la tienda** (Parking Aventura, Ampliación espacio, etc.).

### Oportunidad comercial

- [ ] Enlazar `docs.adventuriq.com/tokens` desde landing comercial.

---

## 8. Aprendizajes acumulados del pipeline

1. **Cowork aprende con iteración** — supervisión baja visiblemente desde la página 3.
2. **Sin capturas = sesión rápida.**
3. **Flutter requiere navegador real.**
4. **AngularJS 1.5 tiene rarezas** — "reset visual" antes de capturar.
5. **Normalización terminológica** caso a caso con autorización del dueño.
6. **El manual histórico es referencia, no fuente literal.**
7. **`npm run build` local** antes de pushear.
8. **Slugs con emoji llevan guión inicial.**
9. **La portada se enlaza como `/`.**
10. **Documentar obliga a clarificar el producto.**
11. **Principio editorial de impuestos**: notas genéricas.
12. **`tokens.md` es landing de pricing**, no solo documentación.
13. **Info nueva durante redacción → parar y preguntar.**
14. **El manual histórico detecta inconsistencias.**
15. **Fix quirúrgico > reescritura completa.**
16. **El manual histórico puede quedar obsoleto.**
17. **Documentar destapa producto** (iteración continua).
18. **Publicar es punto de no retorno para caducidad.**
19. **Features condicionales necesitan categorías editoriales.**
20. **El estado finalizado merece mini-sesión propia.**
21. **Verificar UI antes de normalizar terminología.**
22. **Documentar destapa deuda en otras páginas.** Mantener §7 actualizado.
23. **Auditoría retroactiva: fix quirúrgico del caso concreto basta.**
24. **`onBrokenLinks: 'throw'` es red de seguridad técnica.**
25. **FSD técnico = comportamiento, FSD documental = estructura.**
26. **Cowork ejerce buen criterio editorial autónomo.**
27. **Carpetas `static/img/` no sobreviven al build.** Naming > carpetas.
28. **FSD técnico → comportamiento, UI → terminología.**
29. **Plantillas se validan estrenándolas.** Son "vivas".
30. **Preparación previa fuerte → sesiones multi-hito.**
31. **Fixes inter-páginas son consecuencia natural del #22.**
32. **Manual corto y bueno > largo e inconsistente.**
33. **Error API de Cowork → cerrar conversación y abrir nueva.**
34. **Briefings únicos para series de páginas aceleran el pipeline ~5x** sin sacrificar calidad. Funciona cuando: (a) Cowork ya domina la plantilla, (b) las páginas comparten estructura o contexto, (c) hay referencia de estilo de páginas anteriores. Pasar de DETENTE-por-fase a DETENTE-al-final-de-la-serie fue la decisión de productividad más impactante del proyecto.
35. **El manual histórico ya no es fuente principal — el manual nuevo lo reemplaza.** Cuando las 41 páginas nuevas cubren todas las features del producto con calidad superior, el manual antiguo pasa de "fuente de contraste" a "referencia histórica". El ciclo de migración se ha completado.

---

## 9. Cómo usar este documento en el futuro

El manual está completo. Este documento ahora sirve para:

**A — Documentar features nuevas**

Cuando se desarrolle una feature nueva en AdventuriQ:
1. Claude Code genera el FSD técnico en `fsd/`.
2. Mike abre chat con Claude Web, adjunta este `PROJECT_STATE.md`.
3. Claude genera briefing para Cowork basado en la plantilla correspondiente.
4. Cowork ejecuta, Mike valida, deploy.

**B — Mantener el manual actualizado**

Si la UI cambia (nombres de campos, nuevas opciones, toggles renombrados):
1. Identificar qué páginas del manual se ven afectadas.
2. Fix quirúrgico con Cowork (aprendizaje #15).
3. Actualizar este `PROJECT_STATE.md` si el cambio afecta al glosario o a las convenciones.

**C — Recordar cómo funciona el pipeline**

Los 35 aprendizajes de §8 son la guía operativa. Los más importantes para el día a día: #28 (UI manda sobre terminología), #34 (briefings únicos para series), #15 (fix quirúrgico > reescritura).

---

## 10. Historial de actualizaciones

| Fecha | Cambio |
|---|---|
| 2026-04-24 | Creación inicial. 5 páginas en producción. |
| 2026-04-24 | Deploy de `tokens.md` (#6). Aprendizajes 8-13. |
| 2026-04-24 | Fix #1 en `tokens.md`: caducidad. Aprendizajes 14-15. |
| 2026-04-24 | Deploy de `crear-aventura.md` (#7) + `publicar-aventura.md` (#8). Aprendizajes 16-18. |
| 2026-04-28 | Deploy de `bitacora.md` (#9). Primera página Webapp. Aprendizajes 19-22. |
| 2026-04-28 | Deploy de `acceder-a-una-aventura.md` (#10). Aprendizajes 25-26. |
| 2026-04-28 | Fix enlaces rotos en `conceptos-basicos.md`. Aprendizajes 23-24. |
| 2026-04-28 | Refactor de naming de capturas (50 imágenes). Aprendizaje 27. |
| 2026-04-28 | Deploy de `retos/index.md` (#11) + `nube-de-palabras.md` (#12). Plantilla v2. Aprendizajes 28-31. |
| 2026-04-30 | Deploy de `respuesta-exacta.md` (#13). Error API Cowork resuelto. Aprendizaje 33. |
| 2026-04-30 | Limpieza de 21 páginas antiguas. Aprendizaje 32. |
| 2026-04-30 | Deploy de PR Audio (#14), PR Vídeo (#15), Ruleta (#16). Mini-tanda 3-5/5 completada. |
| 2026-04-30 | Deploy de 5 Retos originales (#17-21). Briefing único para serie. |
| 2026-04-30 | Deploy de 9 páginas Misiones (#22-31, incluye index + 8 páginas + fix Objetos Digitales). Sección completa. |
| 2026-04-30 | Deploy de 3 páginas Objetos Digitales (Aventura, Misión corregida, Reto). Editor AND/OR documentado. |
| 2026-04-30 | Deploy de 5 páginas Aventuras pendientes (#32-36): Condiciones de Finalización, Votaciones, Equipos, Mapas/POI, Idiomas. |
| 2026-04-30 | Deploy de Objetos Digitales de Aventura (#37). |
| 2026-04-30 | **Deploy de las 3 últimas páginas (#38-41): Clasificación, Game Board, Game Designer.** Hallazgos: Ranking HTML (no documentado por decisión), Game Board con 3 bloques (estadísticas por Misión no documentadas en manual antiguo), Game Designer con permisos/limitaciones detallados. |
| 2026-04-30 | **🎯 MANUAL COMPLETO.** 41 páginas publicadas, 0 pendientes de features core. Aprendizajes 34-35. Pipeline acelerado de ~2-3h/página a ~30min/página (5x) a lo largo del proyecto. |

<!-- El manual está completo. Futuras actualizaciones serán para features nuevas o mantenimiento. -->
