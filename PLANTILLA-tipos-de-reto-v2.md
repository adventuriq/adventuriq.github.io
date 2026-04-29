# Plantilla editorial — Páginas de tipos de Reto (v2)

> **Propósito**: estructura replicable para todas las páginas de tipos de Reto del manual AdventuriQ. Estrenada en `nube-de-palabras.md` (primera de la mini-tanda) y aplicable a las restantes.
>
> **Mantenedor**: Mike + Claude.
> **Versión**: v2 (28 de abril de 2026) — añade §9 sobre iconos identificativos.

---

## 1. Filosofía editorial

Cada tipo de Reto se documenta con un **patrón único** que cubre 3 dimensiones en este orden:

1. **Qué es y para qué sirve** — identidad del Reto, casos de uso típicos.
2. **Cómo lo configura el Game Master** — formulario en el Gamifier, campos, opciones.
3. **Cómo lo experimenta el Player** — flujo desde la Webapp.

Cuando el Reto tiene **vista agregada o derivada en otro lugar del manual** (p. ej. Nube de Palabras tiene un cuadrante propio en la Bitácora, Compartir Foto alimenta la Galería), se añade una sección final que **referencia** la página correspondiente sin duplicar contenido.

---

## 2. Frontmatter estándar

```yaml
---
sidebar_position: {orden_dentro_de_retos}
title: {emoji} {Nombre del Reto}
description: {Frase de 15-25 palabras que describe el Reto y un caso de uso típico}
keywords: [reto, {tipo-de-reto}, gamifier, webapp, configuracion, player, adventuriq]
---
```

- El emoji del título refleja la naturaleza del Reto (☁️ Nube de Palabras, 🎰 Ruleta, ✏️ Respuesta Exacta, 🎤 PR con Audio, 🎬 PR con Vídeo, etc.).
- `sidebar_position` se asigna según el orden definido en la página índice de Retos.

---

## 3. Estructura de secciones (replicable)

### §1 Cabecera y propósito

- Línea `<img>` con el icono identificativo del Reto (ver §9).
- Frase introductoria de qué es el Reto en lenguaje simple.
- `:::info 🎯 Vista combinada` — admonition estándar que avisa al lector que la página combina vista del GM (configuración) y vista del Player (experiencia).
- Párrafo de **casos de uso típicos** — escenarios reales donde este Reto encaja.

### §2 Cómo funciona — vista panorámica (1-2 párrafos)

- Describe el ciclo completo en prosa breve, sin entrar en detalles de UI:
  - El GM configura X.
  - El Player ve Y y hace Z.
  - El sistema procesa W y muestra el resultado en V.
- **No incluir capturas aquí** — esta sección es marco mental, no procedimental.

### §3 Configuración del Reto en el Gamifier 👑

Esta sección documenta el formulario del Reto en el Gamifier. Estructura interna:

#### §3.1 Acceso al formulario

- Cómo llega el GM al formulario de este tipo de Reto (desde la Misión, al crear Reto, seleccionando tipo).
- Captura: pantalla del **selector de tipos de Reto** o equivalente con este tipo destacado, si aplica.

#### §3.2 Campos del formulario

- Lista o tabla de campos con: nombre, descripción, obligatoriedad, valores admitidos.
- Capturas: el formulario completo del Reto + detalles de campos no triviales.
- **Si hay campos especializados de este tipo de Reto** (no compartidos con otros tipos), destacarlos en sub-sección propia.

#### §3.3 Comportamientos especiales (si los hay)

- Validaciones particulares.
- Interacciones con otros sistemas (p. ej. recompensas, condiciones de finalización).
- Limitaciones técnicas si las hay.

### §4 Experiencia del Player 🎮

Esta sección documenta cómo el Player vive el Reto en la Webapp. Estructura interna:

#### §4.1 Acceso al Reto

- Cómo el Player llega al Reto (desde Misión, secuencia, etc.).
- Captura: punto de entrada (lista de Misión con el Reto visible, etc.).

#### §4.2 Pantalla del Reto

- Captura principal: cómo se ve la pantalla del Reto en la Webapp.
- Descripción de elementos visibles: enunciado, input, botones, indicadores.

#### §4.3 Flujo de respuesta

- Pasos del Player desde que abre el Reto hasta que lo completa.
- Capturas: cada paso clave del flujo.
- **Estados especiales**: éxito, error, timeout (si aplica).

### §5 Vista agregada o resultados (si aplica)

Solo para Retos con vista derivada en otro sitio del manual. Por ejemplo:

- Nube de Palabras → vista agregada accesible desde la Bitácora.
- Compartir Foto → la imagen aparece en la Galería.

Esta sección **no duplica** contenido de la otra página; solo describe brevemente la conexión y enlaza (texto plano si la página destino aún no existe).

### §6 Cuándo usar este Reto 💡

- 2-3 escenarios concretos donde este Reto brilla.
- 1-2 escenarios donde **no es la mejor elección** (recomendar alternativa cuando proceda).
- `:::tip` para el Game Master con pista práctica de diseño.

### §7 Continúa aprendiendo

- Enlaces relativos a páginas relacionadas:
  - Página índice de Retos (`./index.md`).
  - Otros tipos de Reto similares funcionalmente.
  - Páginas conectadas (`bitacora.md`, `aventuras/configuracion.md` cuando exista).

---

## 4. Convenciones de capturas

### Naming

Aplicar la convención de prefijo de superficie:

- **Capturas del Gamifier**: `gamifier-reto-{tipo}-{elemento}.png`
  - Ejemplo: `gamifier-reto-nube-palabras-formulario.png`.
- **Capturas del Webapp**: `webapp-reto-{tipo}-{elemento}.png`
  - Ejemplo: `webapp-reto-nube-palabras-input.png`.

### Capturas mínimas previstas

| # | Tipo | Qué muestra | Prioridad |
|---|---|---|---|
| 1 | Gamifier | Selector de tipo de Reto (con este destacado) | Media |
| 2 | Gamifier | Formulario completo del Reto | Alta |
| 3 | Gamifier | Detalle de campo específico no trivial (si lo hay) | Media |
| 4 | Webapp | Pantalla principal del Reto desde el Player | Alta |
| 5 | Webapp | Estado de respuesta enviada / éxito | Alta |
| 6 | Webapp | Estado de error o validación (si aplica) | Media |
| 7 | Webapp | Vista agregada o resultado especial (si aplica) | Variable |

Mínimo viable: 3-4 capturas. Máximo razonable: 7. Más de 7 sugiere que la página está ramificándose y conviene revisar el scope.

---

## 5. Admonitions estándar

Máximo 4 admonitions por página, distribuidas de forma orientativa así:

- `:::info 🎯 Vista combinada` al inicio (anuncia que la página cubre GM + Player).
- `:::warning` si hay un comportamiento irreversible o sensible.
- `:::tip 💡 Cuándo usarlo` en §6 (consejos de diseño para el GM).
- `:::tip 👑 Para el Game Master` si hay un detalle del Gamifier que merece destacar (opcional).

No abusar. Si una sección no tiene una admonition natural, déjala sin ella.

---

## 6. Patrón de inicio para Cowork

Cuando se documente una nueva página de tipo de Reto, el FSD documental debe:

1. **Referenciar esta plantilla** como base estructural.
2. **Citar el FSD técnico** correspondiente (`fsd/FSD-YYYY-MM-DD-{feature}.md`) como autoridad sobre comportamiento.
3. **Listar las desviaciones intencionadas** respecto a la plantilla, si las hay.
4. **Marcar zonas grises específicas** del Reto que requieran verificación empírica.

El FSD documental hereda esta plantilla por defecto y solo expone diferencias.

---

## 7. Anti-patrones a evitar

- **Duplicar contenido del manual** describiendo cosas que ya están en otras páginas. Enlazar (texto plano si la página destino no existe).
- **Documentar mecánica genérica de Retos** (puntos, condiciones de finalización, recompensas) en cada página. Eso pertenece a páginas transversales (`recompensas/`, `aventuras/configuracion.md` cuando exista).
- **Mezclar Player y GM en la misma sección sin marcar el cambio de persona**. Usar 👑 / 🎮 cuando convenga señalar a quién va dirigido el bloque.
- **Engordar §6 ("Cuándo usar")** con casos hipotéticos. 2-3 escenarios reales basta.

---

## 8. Página índice de Retos (referencia)

La página índice (`docs/retos/index.md`) contiene:

- Frase introductoria sobre qué es un Reto en AdventuriQ.
- Tabla resumen con los 10 tipos vigentes:
  - Columnas: Icono · Tipo · Descripción breve · Caso de uso típico · Estado (✅ documentado / ⏳ pendiente).
- Enlaces a cada página de tipo de Reto (texto plano para los pendientes).
- Cierre con guía rápida: "¿No sabes cuál usar?" → criterios de decisión.

La página índice se mantiene actualizada conforme se documentan más tipos.

---

## 9. Iconos identificativos de tipo de Reto 🎨

Cada tipo de Reto tiene un **icono pictograma** propio (ilustración estilo "icono de app", no screenshot). Los iconos se usan en dos sitios:

- **Al inicio de cada página de Reto** (junto al título): como marca visual de identidad.
- **En la tabla de la página índice** (`docs/retos/index.md`): como referencia rápida en la columna "Icono".

### Almacenamiento

```
static/img/retos-iconos/
├── reto-icon-nube-de-palabras.png
├── reto-icon-respuesta-exacta.png
├── reto-icon-ruleta-de-la-fortuna.png
├── reto-icon-pregunta-respuesta-audio.png
├── reto-icon-pregunta-respuesta-video.png
├── reto-icon-pregunta-respuesta.png
├── reto-icon-preguntas-encadenadas.png
├── reto-icon-respuesta-libre.png
├── reto-icon-compartir-foto.png
└── reto-icon-llamada-a-la-accion.png
```

**Naming**: `reto-icon-{slug-del-tipo}.png`. Slugs en kebab-case y en castellano (coherentes con el nombre oficial del tipo).

### Inserción en cada página de Reto

Justo después del frontmatter y del título H1, antes del párrafo introductorio:

```markdown
# ☁️ Nube de Palabras

<img src="/img/retos-iconos/reto-icon-nube-de-palabras.png" 
     alt="Icono del Reto Nube de Palabras" 
     className="reto-icon" />

Reto en el que cada Player aporta palabras a una nube colectiva visible para toda la Aventura...
```

### CSS asociado

Se añade a `src/css/custom.css` (una sola vez, en la primera página que use icono):

```css
/* Iconos identificativos de tipo de Reto */
.reto-icon {
  float: right;
  width: 120px;
  height: auto;
  margin: 0 0 1rem 1.5rem;
  border-radius: 12px;
}
```

El icono queda anclado arriba a la derecha de la página, con el texto fluyendo a su izquierda. Es marca visual sin invadir el flujo de lectura.

### Uso en la tabla del índice

En la columna "Icono" de la tabla de `index.md`:

```markdown
| Icono | Tipo | Descripción breve | Caso de uso |
|---|---|---|---|
| <img src="/img/retos-iconos/reto-icon-nube-de-palabras.png" width="48" /> | Nube de Palabras | ... | ... |
```

Aquí los iconos se renderizan a 48px (más pequeños que en las páginas individuales) para mantener compactada la tabla.

### Anti-patrón

Los iconos **no son capturas de pantalla** y por lo tanto **no llevan los prefijos `webapp-` ni `gamifier-`**. Tienen su propia carpeta dedicada (`retos-iconos/`) y su propia regla CSS (`.reto-icon`). No mezclar.

---

*Fin de la plantilla v2. Aplicación inmediata: `docs/retos/index.md` + `docs/retos/nube-de-palabras.md`.*
