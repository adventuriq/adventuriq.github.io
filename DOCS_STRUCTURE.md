# DOCS_STRUCTURE.md — Biblia de Documentación AdventuriQ

> Este archivo es la fuente de verdad sobre cómo se organiza y escribe
> la documentación de AdventuriQ. Cualquier agente (humano o IA) que
> vaya a generar contenido para este manual DEBE leer este archivo primero.

---

## 1. Qué es AdventuriQ (resumen funcional)

AdventuriQ es una plataforma SaaS de gamificación de propósito general
que permite a personas no técnicas crear experiencias gamificadas
llamadas **Aventuras**. Se usa en contextos de team building, turismo,
eventos, cumpleaños, micro-aprendizaje corporativo y educación.

**Cuatro roles fundamentales:**

| Rol (ID) | Qué hace | Accede a |
|---|---|---|
| **Admin** (1) | Gestión técnica del sistema (Anthropic / equipo interno) | Todo |
| **Game Master** (2) | Compra licencias/tokens, crea Aventuras, gestiona Game Designers | Gamifier |
| **Game Designer** (3) | Mantiene y amplía Aventuras bajo supervisión de un GM | Gamifier |
| **Player** (4) | Juega Aventuras | Webapp |

:::note El rol Admin NO aparece en el manual
Aunque Admin es un rol técnico real en la plataforma, **no se documenta
en el manual de usuario** porque es un rol interno del equipo AdventuriQ.
Las tablas de roles del manual incluyen solo Game Master, Game Designer
y Player. Nunca añadir Admin en ninguna página pública del manual.
:::

**Cuatro componentes técnicos:**

- **API**: cerebro del sistema (invisible para usuarios finales).
- **Gamifier**: aplicación web para Game Masters y Game Designers.
- **Webapp**: Progressive Web App (Flutter) para Players.
- **adventuriq-docs**: este repo, manual de usuario.

---

## 2. Taxonomía oficial de AdventuriQ

Estos son los términos canónicos. **Nunca inventar sinónimos**.

### Entidades principales

| Término | Qué es |
|---|---|
| **Aventura** | Experiencia gamificada completa. Unidad comercial. |
| **Misión** | Agrupación temática de Retos dentro de una Aventura. |
| **Reto** | Prueba individual que el Player supera. |
| **Objeto Digital** | Recompensa virtual: pistas, códigos, badges, etc. |
| **Puntos** | Sistema de puntuación numérica. |
| **Premios** | Recompensas físicas/digitales. |
| **Badges** | Medallas de reconocimiento. |
| **Token** | Unidad de acceso del Player (1€/token). |
| **Licencia** | Autorización de uso de una Aventura (18€). |
| **Plan Luna** | Anual, 1 Aventura, tokens ilimitados. |
| **Plan Mundo** | Anual, múltiples Aventuras. |
| **Clan/Equipo** | Grupo de Players compitiendo juntos. |
| **GamePIN** | Código numérico para unirse a una Aventura. |
| **POI** | Punto de Interés en el mapa. |

### Tipos de Retos (Mecánicas) — 10 vigentes

| ID | Nombre oficial (manual) | Nombre técnico (BD) | Descripción |
|---|---|---|---|
| 1 | **Pregunta / Respuesta** | PreguntaRespuesta | Opciones de respuesta múltiple. |
| 2 | **Preguntas Encadenadas** | Trivial | Lista de PR con factor tiempo. |
| 4 | **Compartir Foto** | Compartir | Foto/vídeo que va a la Galería. |
| 8 | **Respuesta Libre** | RespuestaLibre | Texto libre, se envía por mail. |
| 9 | **Llamada a la Acción** | Checkin | Acción (puede requerir QR). |
| 10 | **Respuesta Exacta** | RespuestaExacta | Respuesta textual que debe coincidir. |
| 11 | **Pregunta / Respuesta con Audio** | PreguntaRespuesta con Audio | PR con pista de audio. |
| 12 | **Pregunta / Respuesta con Vídeo** | PreguntaRespuesta con Video | PR con pista de vídeo. |
| 13 | **Ruleta de la Fortuna** | Ruleta de la Fortuna | Mecánica de ruleta. |
| 14 | **Nube de Palabras** | Nube de Palabras | Agregación visual de respuestas. |

:::warning Tipos deprecados — NO documentar
Los siguientes IDs están deprecados y **no se deben documentar**, aunque
aparezcan en el código o en la BD: 3 (Enigma), 5 (Encuentra),
6 (Interactiva), 7 (EncuentraConTiempo).
:::

### Secciones de la Webapp (Bitácora)

- **Baúl**: Objetos Digitales obtenidos
- **Galería**: imágenes compartidas durante la Aventura
- **Clasificación**: ranking individual y/o por equipos
- **Muro**: feed de respuestas libres y actividad pública
- **Clan/Equipo**: selección o cambio de equipo
- **Final de la Aventura**: cierre
- **Volver a jugar**: reinicio

### Vistas del Gamifier

- **Dashboard / Listado de Aventuras**
- **Editor de Aventura**
- **Editor de Misiones**
- **Editor de Retos** (uno por cada tipo de los 10 vigentes)
- **Editor de Objetos Digitales**
- **Game Board**: analítica post-juego, exportable a Excel
- **Clasificaciones**: ranking en tiempo real

---

## 3. Estructura de carpetas (docs/)

Ver `sidebars.ts` para la verdad canónica. Estructura actual resumida:

```
docs/
├── intro.md
├── warnings.md
├── conceptos-basicos.md
├── aventuras/         # 12 páginas
├── misiones/          # 8 páginas
├── retos/             # 10 páginas actuales + 5 pendientes
├── recompensas/       # 3 páginas
├── metricas/          # 2 páginas
└── tokens.md
```

**Regla de oro**: si una feature afecta a una sección que ya existe,
el contenido va dentro de la carpeta existente. No crear carpetas
nuevas sin avisar.

---

## 4. Convenciones de escritura

### Tono

- **Tuteo** (tú, tu, contigo). Cercano pero profesional.
- **Dirigido a Game Master y/o Game Designer** en secciones del Gamifier.
- **Dirigido al Player** en secciones de la Webapp.
- **No técnico**: evitar API, endpoint, backend, JSON, deploy.
- **Directo y accionable**: 'Haz clic en...', 'Escribe...'.

### Indicador de rol al principio de cada página

Cada página empieza con un admonition `:::info` que indica quién puede
hacer esto. Usa esta convención de iconos:

| Icono | Significado |
|---|---|
| 👑 | Solo **Game Master** |
| 🛠️ | **Game Master** y **Game Designer** |
| 🎮 | **Player** (páginas de Webapp) |
| 🌐 | Todos los roles |

Ejemplo:

```markdown
---
title: Configuración de Aventura
---

# Configuración de Aventura

:::info 🛠️ Quién puede hacer esto
**Game Master** y **Game Designer** (bajo supervisión del GM).
:::

[contenido...]
```

### Frontmatter mínimo

```yaml
---
sidebar_position: [número]
title: '[Título de la página]'
description: '[Una frase descriptiva]'
keywords: [lista, de, palabras, clave]
---
```

### Admonitions de Docusaurus

- `:::info` — información contextual (incluido el rol)
- `:::tip` — consejos útiles no obligatorios
- `:::note` — información complementaria
- `:::warning` — advertencias importantes
- `:::danger` — avisos críticos (irreversible, no se puede deshacer)

### Imágenes

- Formato: PNG preferente.
- Ubicación: `static/img/{gamifier|webapp}/{seccion}/{nombre}.png`
- Nombres semánticos en minúsculas con guiones.
- Capturas del Gamifier: navegador de escritorio.
- Capturas de la Webapp: formato móvil preferente (viewport ~400px).

### Estilo a imitar del manual existente

- Tablas Markdown para configuraciones y opciones.
- Emojis en títulos de sección (🎮, ⚔️, 📜, 🎁, 📊).
- Párrafos cortos.
- Uso moderado de admonitions.

---

## 5. Regla de no-destrucción

**IMPORTANTE**: El manual YA tiene contenido real en todas sus 39 páginas.
Cualquier agente (Cowork, Claude Code, humano) que edite una página
existente debe seguir estas reglas:

1. **NUNCA reescribas una página completa** sin confirmación explícita.
2. Si la página está incompleta, **SOLO AÑADE** contenido nuevo.
3. Si detectas desactualización, **MARCA** con
   `<!-- REVISAR: contenido posiblemente obsoleto -->` pero no sobrescribas.
4. Las imágenes actuales (img-NNN.png) SÍ se pueden reemplazar por capturas
   nuevas con nombres semánticos (son genéricas y están mal asignadas).
5. **Imita el estilo existente**. No impongas un estilo nuevo.

### Excepciones autorizadas a la regla de no-destrucción

Se puede eliminar o reescribir contenido existente en estos casos, sin
necesidad de confirmación explícita caso a caso:

1. **Contenido obsoleto**: referencias a funcionalidades que ya no existen
   (ej. "contraseñas sin caracteres extraños" del PDF histórico).
2. **Contenido duplicado** en otra página: consolidación para evitar
   redundancia (ej. dos tablas explicando Gamifier/Webapp).
3. **Imágenes genéricas** del PDF histórico sin valor ilustrativo:
   `img-000.png`, `img-017.png`, `img-088.png`, etc. Estas imágenes se
   pueden eliminar sin reemplazo si la página tiene otras capturas
   más relevantes.
4. **Clases CSS huérfanas**: si una clase HTML/CSS no está definida en
   `src/css/custom.css`, se puede eliminar el elemento.
5. **Tipos de Reto deprecados** si aparecen mencionados en alguna
   página antigua (IDs 3, 5, 6, 7).

En todos los casos, documentar la justificación en la Fase 5 del
proceso de Cowork para trazabilidad.

---

## 6. Glosario código vs dominio

Cuando Cowork o Claude Code miren el código, verán términos técnicos
distintos a los del manual. Traducción oficial:

| En código / BD | En el manual |
|---|---|
| `evento` | Aventura |
| `itinerario` | Misión |
| `prueba` | Reto |
| `equipo` / `clan` | Clan / Equipo |
| `estado_juego` | Game State (no usar en manual) |
| `recompensa` | Recompensa |
| `gamepin` | GamePIN |
| `propietario` | Organización |
| `localizacion` | Localización |
| `poi` | Punto de Interés (POI) |
| `distintivo` | Badge / Insignia |
| `Event Designer` | Game Designer |

---

## 7. Regla del entorno de test

**Cowork SIEMPRE trabaja sobre el entorno de test, NUNCA sobre producción.**

- API test: `api-test.adventuriq.com`
- Gamifier test (crear/configurar Aventuras): `gamifier-test.adventuriq.com`
- Webapp test / Player (jugar): `play-test.adventuriq.com`
- AdventuriQ Arena test (visor del moderador, Modo Arena en directo): `live-test.adventuriq.com`

Razón: las capturas se transmiten a la nube de Anthropic. Usar producción
podría exponer datos reales de clientes, crear datos de prueba en producción,
o alterar métricas reales.

Mantener una **Aventura demo** exclusiva en el entorno de test, diseñada
para cubrir todas las mecánicas y escenarios documentables.

---

## 8. Qué NO documentar

- Información técnica de la API (endpoints, schemas, JSON).
- Precios detallados (están en la web corp y cambian).
- Procesos comerciales (facturación, contratación).
- Datos sensibles de clientes reales en capturas.
- Funcionalidades de los 4 tipos de Reto deprecados.

---

## 9. Branding

- **Nombre oficial**: AdventuriQ.
- **Colores**: azul `#2d324f`, naranja `#fc4a27`.

---

## 10. Contacto

- **Propietario**: Mike (owner)
- **Repo**: github.com/adventuriq/adventuriq.github.io
- **URL pública**: https://docs.adventuriq.com

## 11. Plantilla estándar de páginas funcionales

Una **página funcional** es aquella que documenta una funcionalidad concreta del Gamifier con impacto visible en la Webapp. Son la mayoría del manual: todas las de `aventuras/`, `misiones/`, `retos/`, `recompensas/`, `metricas/`.

### 11.1 Estructura obligatoria

Toda página funcional debe tener esta estructura:

```markdown
---
title: [Emoji temático] [Título descriptivo]
description: [Descripción SEO de 120-160 caracteres]
keywords: [términos específicos del tema, adventuriq, ...]
sidebar_position: [número]
---

# [Emoji temático] [Título]

:::info [icono rol] Quién puede hacer esto
[Rol(es) específico(s) según la taxonomía]
:::

[Párrafo introductorio: 1-2 frases sobre qué aprende el lector aquí.]

## 🎯 Para qué sirve

[Explicación funcional del propósito. Qué problema resuelve, cuándo usarlo.]

## 📍 Dónde se configura

[Ubicación exacta en el Gamifier + captura de la sección correspondiente.]

## ⚙️ Opciones de configuración

[Cada opción con su explicación, capturas relevantes y admonitions donde aplique. Puede subdividirse en subsecciones según el número de opciones.]

## 🎮 Así lo verá el Player

[Si aplica: captura de la Webapp mostrando cómo afecta al Player + breve explicación.]

## 📚 Continúa aprendiendo

[Enlaces a páginas relacionadas del manual.]
```

### 11.2 Excepciones a la plantilla

Se puede omitir o ajustar parte de la plantilla en estos casos:

- **Páginas muy cortas** (< 50 líneas): pueden fusionar "Para qué sirve" con el párrafo introductorio.
- **Páginas índice** (como `aventuras/configuracion.md` como overview): estructura libre con mini-TOC.
- **Páginas conceptuales** (intro, conceptos-basicos, warnings, tokens): NO siguen esta plantilla (no documentan funcionalidades concretas).

### 11.3 Convención "🎮 Así lo verá el Player"

Cuando una página documenta una funcionalidad del Gamifier **que tiene impacto visible en la experiencia del Player**, debe cerrar con la sección `## 🎮 Así lo verá el Player` que incluya:

- Al menos **una captura de la Webapp** mostrando el resultado final (formato móvil).
- Un **párrafo breve** explicando qué experimenta el Player.
- Opcionalmente, un admonition `:::tip Pruébalo tú mismo` recomendando probarlo antes de publicar la Aventura.

**Cuándo aplica:**

- ✅ Páginas de `aventuras/`, `misiones/`, `retos/`, `recompensas/`.
- ✅ Páginas de `metricas/` si lo que el Player ve está documentado ahí.

**Cuándo NO aplica:**

- ❌ Páginas conceptuales: `intro.md`, `conceptos-basicos.md`, `warnings.md`, `tokens.md`.
- ❌ Páginas puramente administrativas sin impacto visible para el Player.
- ❌ Páginas de configuración backend (si hubiera alguna).

---

## 12. Regla de oro sobre las páginas fundamentales

El bloque de páginas fundamentales del manual está formado por cuatro páginas con propósitos claramente diferenciados. **No deben duplicar contenido entre sí.**

| Página | Propósito | Formato |
|---|---|---|
| **`intro.md`** | **Presenta y orienta**. Respuesta al "¿qué es AdventuriQ?". | Visual, aspiracional, con diagramas. |
| **`conceptos-basicos.md`** | **Explica y detalla**. Referencia conceptual de toda la terminología. | Denso, textual, con tablas. |
| **`warnings.md`** | **Alerta**. Precauciones operativas antes de usar la plataforma. | Admonitions :::warning y :::danger. |
| **`tokens.md`** | **Contextualiza**. Modelo económico básico. | Informativo, no comercial. |

**Reglas clave:**

- Si un concepto debe aparecer en más de una de estas páginas, la **definición canónica** va en `conceptos-basicos.md` y las otras enlazan a él.
- La **jerarquía Aventura → Misión → Reto** se ilustra con Mermaid una sola vez: en `intro.md`. Otras páginas la referencian con ASCII o texto plano + enlace.
- La sección "🎮 Así lo verá el Player" **no aplica** a ninguna de estas cuatro páginas.

---

## 13. Uso del manual histórico

El archivo `reference/manual-original-v2.md` es la conversión a Markdown del PDF original del manual de AdventuriQ (versión 2.0.2, circa 2022).

### 13.1 Propósito

- Servir de **referencia pedagógica** a Cowork y Claude Code cuando generan o enriquecen páginas del manual nuevo.
- Preservar la **estructura narrativa original** del manual (orden de explicación, ejemplos, analogías).

### 13.2 Reglas de uso

1. **NUNCA** copiar texto literal del manual histórico. Reformular siempre en el estilo del manual nuevo.
2. **NUNCA** asumir que lo que dice el manual histórico está vigente. Cruzar siempre con el Gamifier actual.
3. Si hay discrepancia entre el PDF histórico y el Gamifier actual, **manda el Gamifier actual**.
4. Identificar y **no documentar** contenido obsoleto (funcionalidades retiradas, restricciones ya eliminadas).
5. Los **4 tipos de Reto deprecados** (IDs 3, 5, 6, 7) que aparecen en el PDF histórico **no se documentan** en el manual nuevo.
6. El término **"Recompensa"** del PDF histórico debe traducirse a **"Objeto Digital"** en el manual nuevo (es el término canónico vigente).

### 13.3 Contenido del manual histórico (secciones)

El manual histórico está estructurado en 10 secciones que cubren:

1. ¿Qué es AdventuriQ?
2. Warnings (advertencias)
3. Información Básica
4. Edición de una Aventura (Parte I)
5. Edición de una Misión
6. Edición de una Aventura (Parte II): Retos y POIs
7. Edición de un Reto (5 tipos vigentes en la época)
8. Edición de una Recompensa
9. Métricas de una Aventura

Estas secciones son **guía pedagógica**, no estructura del manual nuevo. El manual nuevo tiene su propia organización definida en `sidebars.ts`.

---

*Versión 2.1 — Abril 2026*
