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
- Gamifier test: (consultar a Mike la URL específica)
- Webapp test: (consultar a Mike la URL específica)

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

*Versión 2.0 — Abril 2026*
