---
feature_name: Modo Arena — selección de Misiones a jugar y juego híbrido
date: 2026-07-17
components: [API] [GAMIFIER]
docusaurus_path: docs/aventuras/modo-arena-live.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Modo Arena — selección de Misiones a jugar y juego híbrido
- **Descripción:** El Game Master puede elegir qué Misiones de la Aventura se
  juegan en la partida Arena (por defecto todas), y las Misiones jugadas en
  Arena quedan finalizadas (con sus premios) para los Players que participaron,
  de modo que al desactivar el Modo Live puedan continuar el resto de la
  Aventura en modo normal.
- **Componentes afectados:** API, Gamifier. (Webapp y visor Arena sin cambios.)
- **Fecha de despliegue:** 2026-07-17

> **Extiende** los FSD `FSD-2026-07-11-modo-arena-live.md` y
> `FSD-2026-07-11-modo-arena-misiones.md`. Este documento añade la selección de
> Misiones desde el Gamifier y el concepto de **juego híbrido** (Arena → normal).

---

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master / Game Designer (Gamifier)

- En el bloque **"Opciones de la Aventura en modo Arena"** hay un nuevo
  interruptor **"Seleccionar Misiones"**:
  - **Apagado (default):** se juegan **todas** las Misiones (comportamiento de
    siempre); se indica con el texto "Se jugarán todas las Misiones".
  - **Encendido:** aparece el botón **"Elegir Misiones"**, que abre un selector
    con las Misiones activas de la Aventura para marcar cuáles entran en la
    partida en directo.
- Las Misiones elegidas se muestran como **tarjetas** con su imagen, título y
  el color de la Misión, para ver de un vistazo qué se jugará en Arena.
- **Juego híbrido:** puede plantear una experiencia mixta — jugar unas Misiones
  en directo (Arena) y dejar el resto para el juego normal. Al pulsar
  **"Finalizar"** en Arena, las Misiones jugadas quedan **finalizadas** para
  todos los Players que participaron y se les **entregan los premios de
  finalización** de esas Misiones (respetando sus condiciones de entrega). Al
  desactivar el Modo Live, los Players ven esas Misiones como completadas y
  continúan la Aventura en modo normal.

### Desde el punto de vista del Player (Webapp)

- Sin cambios en la forma de jugar. Tras una partida Arena, si el Game Master
  desactiva el Modo Live, el Player ve las Misiones jugadas en directo como
  **finalizadas** (con los premios ya en su poder) y puede jugar las restantes
  con normalidad.

---

## 3. PREREQUISITOS DEL USUARIO

- Una Aventura publicada con **Modo Live** activado (ver FSD de Modo Arena).
- Para seleccionar Misiones: la Aventura debe tener Misiones activas (no
  borrador) con al menos un Reto compatible con el Modo Arena.
- **Importante:** tras elegir las Misiones hay que **guardar la Aventura** (el
  botón "Lanzar en Arena" no guarda los cambios del formulario).

---

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — seleccionar qué Misiones se juegan en Arena

1. Ir a la Aventura en el Gamifier (pestaña de edición de la Aventura).
2. Bajar al bloque **"Opciones de la Aventura en modo Arena"**.
3. Activar el interruptor **"Seleccionar Misiones"**.
4. Pulsar **"Elegir Misiones"**, marcar en la lista las Misiones deseadas y
   pulsar **Seleccionar**.
5. Comprobar las tarjetas con las Misiones elegidas bajo el selector.
6. **Guardar la Aventura.**
7. Pulsar **"Lanzar en Arena"**: la partida solo incluirá los Retos de las
   Misiones seleccionadas.

### Flujo del juego híbrido (Arena → modo normal)

1. Con la selección guardada, jugar la partida Arena con los Players y pulsar
   **"Finalizar"** al terminar.
2. En el Gamifier, **desactivar el Modo Live** de la Aventura y guardar.
3. Los Players que participaron abren la Aventura en la Webapp: las Misiones
   jugadas en Arena aparecen **finalizadas** y sus premios de finalización ya
   están entregados; el resto de Misiones se juegan en modo normal.

---

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Bloque Arena con el interruptor **"Seleccionar Misiones"** apagado
  (texto "Se jugarán todas las Misiones") → Nombre:
  `aventuras/arena-misiones-todas.png`
- [GAMIFIER] Interruptor encendido + botón **"Elegir Misiones"** + tarjetas de
  las Misiones seleccionadas (imagen + título) → Nombre:
  `aventuras/arena-misiones-seleccion.png`
- [GAMIFIER] Selector de Misiones abierto (lista con checkboxes) → Nombre:
  `aventuras/arena-misiones-picker.png`
- [WEBAPP] Listado de Misiones del Player tras la partida Arena, con las
  Misiones jugadas marcadas como finalizadas → Nombre:
  `aventuras/webapp-arena-misiones-finalizadas.png`

---

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/` (misma página del Modo Arena; esta
  feature amplía la sección de configuración y añade el juego híbrido).
- **Nombre del archivo:** `modo-arena-live.md` (Actualización).
- **Tags sugeridos:** `modo-arena`, `live`, `misiones`, `hibrido`,
  `game-master`, `premios`.
- **¿Es página nueva o actualización?** Actualización (del Modo Arena).

---

## 7. NOTAS TÉCNICAS (relevantes para el manual)

- **La selección se aplica al crear la partida**: si se cambia la selección con
  una sesión Arena ya en marcha, esa sesión no se ve afectada (habría que
  finalizarla y lanzar otra).
- Una Misión jugada en Arena queda finalizada **aunque contuviera Retos no
  compatibles con el modo live** (esos Retos no se juegan y no habrá que
  jugarlos después).
- Los **premios de finalización** de las Misiones jugadas se entregan a cada
  Player **solo si cumple las condiciones de entrega** configuradas en el
  premio (igual que en el juego normal); sin condiciones, se entregan siempre.
- La finalización de Misiones ocurre solo con el botón **"Finalizar"** del
  moderador: una sesión abandonada (que caduca sola) **no** finaliza Misiones.
- Si la selección deja la partida sin ningún Reto compatible, Arena avisa al
  crear la sesión de que no hay Retos jugables.
- La **finalización de la Aventura** (premios de Aventura completa) no se
  dispara desde Arena: se evalúa cuando el Player continúa en modo normal.
