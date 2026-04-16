# DOCS_STRUCTURE.md — Biblia de Documentación AdventuriQ

> Este archivo es la fuente de verdad sobre cómo se organiza y escribe la documentación de AdventuriQ. Cualquier agente (humano o IA) que vaya a generar contenido para este manual DEBE leer este archivo primero.

---

## 1. Qué es AdventuriQ (resumen funcional)

AdventuriQ es una plataforma SaaS de gamificación de propósito general que permite a personas no técnicas crear experiencias gamificadas llamadas **Aventuras**. Se usa en contextos de team building, turismo, eventos, cumpleaños, micro-aprendizaje corporativo y educación.

**Dos roles fundamentales:**

- **Game Master**: persona que crea y configura las Aventuras. Usa el **Gamifier**.
- **Player**: persona que juega las Aventuras creadas. Usa la **Webapp**.

**Tres componentes técnicos** (no se documentan al usuario final, pero condicionan la estructura):

- **API**: cerebro del sistema (invisible para usuarios finales).
- **Gamifier**: aplicación web para Game Masters.
- **Webapp**: Progressive Web App (Flutter) para Players, jugable desde móvil, tablet u ordenador.

---

## 2. Taxonomía oficial de AdventuriQ

Estos son los términos canónicos. **Nunca inventar sinónimos** ni traducirlos. Siempre en español, siempre con mayúscula inicial cuando se refiere al concepto AdventuriQ.

### Entidades principales

| Término | Qué es |
|---|---|
| **Aventura** | La experiencia gamificada completa. Unidad comercial (se compra licencia). |
| **Misión** | Agrupación temática de Retos dentro de una Aventura. |
| **Reto** | Prueba individual que el Player supera. |
| **Objeto Digital** | Recompensa virtual que se entrega al superar un Reto (pistas, códigos, badges, recompensas, reconocimientos...). |
| **Puntos** | Sistema de puntuación numérica. |
| **Premios** | Recompensas físicas o digitales (ej. cupones) según dinámica. |
| **Badges** | Medallas de reconocimiento (tipo de Objeto Digital). |
| **Token** | Unidad de acceso del Player a una Aventura (1€/token en pay-per-use). |
| **Licencia** | Autorización de uso de una Aventura por parte del Game Master (18€ en pay-per-use). |
| **Plan Luna** | Plan anual de tarifa plana, 1 Aventura, tokens ilimitados. |
| **Plan Mundo** | Plan anual de tarifa plana, múltiples Aventuras. |

### Jerarquía estructural

```
Aventura
 └── Misiones (1..N)
      └── Retos (1..N)
           └── Objetos Digitales (0..N, condicionales)
                Puntos
                Recompensas
```

### Tipos de Retos (Mecánicas)

| Mecánica | Qué hace el Player |
|---|---|
| **Pregunta / Respuesta** | Selecciona una o varias respuestas posibles. Opcional: contador tiempo. |
| **Preguntas Encadenadas** | Lista de "n" retos tipo Pregunta/Respuesta con factor tiempo. |
| **Subir Foto / Vídeo** | Toma foto/vídeo (selfie, prueba física...). Se comparte en la Galería. |
| **Respuesta Libre** | Redacta libremente la respuesta. Se envía por mail al Player. |
| **Llamada a la Acción** | Realiza una acción (puede requerir estar presente en un punto vía QR). |

### Secciones de la Webapp (Bitácora)

La **Bitácora** es el menú de navegación del Player dentro de una Aventura. Da acceso a:

- **Baúl**: Objetos Digitales obtenidos (Reconocimientos, Recompensas...)
- **Galería**: imágenes compartidas durante la Aventura
- **Clasificación**: ranking individual y/o por equipos
- **Muro**: feed de respuestas libres y actividad pública
- **Equipo**: selección o cambio de Equipo
- **Final de la Aventura**: cierre
- **Volver a jugar**: reinicio

### Vistas del Gamifier (Game Master)

- **Dashboard / Listado de Aventuras**
- **Editor de Aventura**: contenido, configuración, idiomas, mapas, equipos, visibilidad, fechas, Game PIN, bloqueos.
- **Editor de Misiones**: contenido, imágenes, bloqueos, enlazado con Retos, recompensas.
- **Editor de Retos**: cabecera, mecánica, estructura común, bloqueos, recompensas.
- **Editor de Objetos Digitales**: configuración, condiciones de obtención, etiquetas (#tags).
- **Game Board**: analítica post-juego, exportable a Excel.
- **Clasificaciones**: tabla en tiempo real.

---

## 3. Estructura de carpetas (docs/)

La estructura actual del manual es (ver `docs/` y `sidebars.ts` para la verdad canónica):

```
docs/
├── intro.md                              # ¿Qué es AdventuriQ? (home del manual)
├── warnings.md                           # Advertencias Importantes
├── conceptos-basicos.md                  # Conceptos fundamentales
├── aventuras/                            # Todo lo relativo al objeto Aventura en el Gamifier
│   ├── configuracion.md
│   ├── contenido-descripcion.md
│   ├── condiciones-finalizacion.md
│   ├── equipos.md
│   ├── game-pin-bloqueos.md
│   ├── idiomas-traducciones.md
│   ├── imagenes.md
│   ├── mapas.md
│   ├── poi.md                            # Points Of Interest
│   ├── publicacion-fechas.md
│   ├── retos-aventura.md
│   └── visibilidad-controles.md
├── misiones/
│   ├── configuracion.md
│   ├── descripcion.md
│   ├── contenido-imagenes.md
│   ├── bloqueos-visibilidad.md
│   ├── mapas.md
│   ├── enlazar-retos.md
│   ├── llamada.md
│   └── recompensas.md
├── retos/
│   ├── tipos-de-reto.md                  # Overview de las 5 mecánicas
│   ├── estructura-comun.md               # Campos comunes a todos los Retos
│   ├── cabecera.md
│   ├── pregunta-respuesta.md             # Mecánica 1
│   ├── preguntas-encadenadas.md          # Mecánica 2
│   ├── compartir-foto.md                 # Mecánica 3 (Subir Foto/Vídeo)
│   ├── respuesta-libre.md                # Mecánica 4
│   ├── llamada-accion.md                 # Mecánica 5
│   ├── bloqueos-mapa.md
│   └── recompensas.md
├── recompensas/                          # Objetos Digitales y sus niveles
│   ├── configuracion-contenido.md
│   ├── nivel-mision.md
│   └── nivel-reto.md
├── metricas/
│   ├── clasificacion.md
│   └── game-board.md
└── tokens.md                             # Tokens y Licencias
```

**Regla de oro**: si una feature afecta a una sección que ya existe, el contenido va dentro de la carpeta existente. No crear carpetas nuevas sin avisar.

---

## 4. Convenciones de escritura

### Tono

- **Tuteo** (tú, tu, contigo). Cercano pero profesional.
- **Dirigido al Game Master** en la mayoría de secciones (salvo `/webapp/` que es para Player).
- **No técnico**: evitar API, endpoint, backend, JSON, payload, etc.
- **Directo y accionable**: "Haz clic en...", "Escribe...", "Selecciona...", "Verás que...".

### Estructura mínima de cada página

```markdown
---
sidebar_position: 3
title: 'Configurar una Aventura'
description: 'Ajustes generales de tu Aventura'
tags: [gamifier, aventuras]
last_updated: 2026-04-15
---

# Título principal (coincide con title del frontmatter)

Una o dos frases explicando qué es esto y para qué sirve.

## Cómo se hace paso a paso

1. Paso concreto con verbo accionable.

![Descripción alt de la captura](/img/gamifier/aventuras/nombre-descriptivo.png)

2. Siguiente paso...

:::tip Consejo útil
Texto del tip.
:::

:::caution Atención
Texto de la advertencia.
:::
```

### Admonitions de Docusaurus

Usar estas cuatro:

- `:::tip` — consejos útiles que no son obligatorios
- `:::note` — información complementaria
- `:::caution` — advertencias que el usuario debe tener en cuenta
- `:::danger` — avisos críticos (p.ej. "no se puede deshacer")

### Imágenes

- Formato: PNG preferente, JPG solo para fotos.
- Ubicación: `static/img/{gamifier|webapp}/{seccion}/{nombre-descriptivo}.png`
- Referencia en Markdown: `![Descripción alt](/img/gamifier/aventuras/crear-formulario.png)`
- Nombres: en minúsculas, guiones (no subrayados), descriptivos.
- Las imágenes del Gamifier: capturas de navegador de escritorio.
- Las imágenes de la Webapp: capturas formato móvil (mejor preview porque así se usa mayoritariamente).

### Frontmatter obligatorio

```yaml
---
sidebar_position: [número]
title: '[Título de la página]'
description: '[Descripción corta, 1 frase]'
tags: [gamifier|webapp, sección, nivel]     # Ejemplo: [gamifier, aventuras, básico]
last_updated: YYYY-MM-DD
---
```

Tags orientativos:
- Audiencia: `gamifier`, `webapp`, `game-master`, `player`
- Nivel: `básico`, `intermedio`, `avanzado`
- Sección: `aventuras`, `misiones`, `retos`, `recompensas`, `métricas`, `tokens`

---

## 5. Branding y elementos visuales

- **Nombre oficial**: AdventuriQ (mayúscula A, Q final mayúscula).
- **No usar**: adventuriq, AdventurIQ, Adventuri Q, ADVENTURIQ.
- **Colores corporativos** (para diagramas o capturas con anotaciones):
  - Azul oscuro: `#2d324f`
  - Naranja acción: `#fc4a27`

---

## 6. Qué NO documentar en este manual

- Información técnica sobre la API (eso va a documentación de desarrolladores aparte si aplica).
- Precios detallados — están en la web corporativa y cambian. Solo referenciar "licencia", "tokens", "Plan Luna", "Plan Mundo" a alto nivel.
- Procesos comerciales (contratación, facturación) — no son parte del manual operativo.
- Información sensible de clientes reales en capturas.

---

## 7. Flujo de trabajo para añadir una nueva página

1. Claude Code genera un **Feature Spec Document (FSD)** al terminar una feature.
2. Cowork lee el FSD, este `DOCS_STRUCTURE.md`, y explora `docs/` y `sidebars.ts`.
3. Cowork toma capturas navegando el Gamifier (y/o Webapp con navegador completo si Flutter).
4. Cowork genera el `.md` final respetando todas las convenciones anteriores.
5. Revisión humana antes de commit.
6. Push a rama `source` → GitHub Actions compila y despliega a `docs.adventuriq.com`.

---

## 8. Contacto y mantenimiento

- **Propietario del manual**: Mike (owner de AdventuriQ)
- **Repositorio**: `github.com/adventuriq/adventuriq.github.io`
- **URL pública**: `https://docs.adventuriq.com`
- **Rama de trabajo**: `source`
- **Rama de publicación**: `main` (automática, no editar manualmente)

---

*Última actualización: 2026-04-16 — Versión 1.0*
