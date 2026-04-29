# Plantilla editorial — Páginas de tipos de Reto

> **Propósito**: estructura replicable para todas las páginas de tipos de Reto del manual AdventuriQ. Estrenada en `nube-de-palabras.md` (primera de la mini-tanda) y aplicable a las restantes (Respuesta Exacta, Ruleta de la Fortuna y los 6 tipos vigentes pendientes).
>
> **Mantenedor**: Mike + Claude.
> **Versión**: v1 (28 de abril de 2026).

---

## 1. Filosofía editorial

Cada tipo de Reto se documenta con un **patrón único** que cubre 3 dimensiones en este orden:

1. **Qué es y para qué sirve** — identidad del Reto, casos de uso típicos.
2. **Cómo lo configura el Game Master** — formulario en el Gamifier, campos, opciones.
3. **Cómo lo experimenta el Player** — flujo desde la Webapp.

Cuando el Reto tiene **vista agregada o derivada en otro lugar del manual** (p. ej. la Nube de Palabras tiene un cuadrante propio en la Bitácora), se añade una sección final que **referencia** la página correspondiente sin duplicar contenido.

---

## 2. Frontmatter estándar

```yaml
---
sidebar_position: {orden_dentro_de_retos}
title: 🎯 {Nombre del Reto}
description: {Frase de 15-25 palabras que describe el Reto y un caso de uso típico}
keywords: [reto, {tipo-de-reto}, gamifier, webapp, configuracion, player, adventuriq]
---
```

- El emoji del título puede variar según la naturaleza del Reto (🎯 genérico, ☁️ Nube de Palabras, 🎰 Ruleta, ✏️ Respuesta Exacta, etc.).
- `sidebar_position` se asigna según el orden definido en la página índice de Retos.

---

## 3. Estructura de secciones (replicable)

### §1 Cabecera y propósito

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

Esta sección documenta el formulario del Reto en el Gamifier. Estructura interna sugerida:

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

Aplicar la convención de prefijo de superficie (sesión 28-abr-2026):

- **Capturas del Gamifier**: `gamifier-reto-{tipo}-{elemento}.png`
  - Ejemplo: `gamifier-reto-nube-palabras-formulario.png`, `gamifier-reto-respuesta-exacta-validacion.png`.
- **Capturas del Webapp**: `webapp-reto-{tipo}-{elemento}.png`
  - Ejemplo: `webapp-reto-nube-palabras-input.png`, `webapp-reto-ruleta-girar.png`.

### Capturas mínimas previstas

Por página de tipo de Reto:

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
- `:::warning` si hay un comportamiento irreversible o sensible (ej.: no se pueden editar respuestas tras envío).
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
  - Columnas: Tipo · Descripción breve · Caso de uso típico · Estado (✅ documentado / ⏳ pendiente).
- Enlaces a cada página de tipo de Reto (texto plano para los pendientes).
- Cierre con guía rápida: "¿No sabes cuál usar?" → criterios de decisión.

La página índice se mantiene actualizada conforme se documentan más tipos.

---

*Fin de la plantilla. Aplicación inmediata: `nube-de-palabras.md` (FSD documental separado).*
