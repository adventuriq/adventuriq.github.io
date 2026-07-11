---
feature_name: Modo Arena — partida por Misiones (bloques)
date: 2026-07-11
components: [API] [WEBAPP]
docusaurus_path: docs/aventuras/modo-arena-live.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Modo Arena — partida por Misiones (bloques/tandas)
- **Descripción:** En una partida en directo, la Aventura se juega **por Misiones**:
  antes de cada Misión se muestra su portada, se juegan sus Retos y al terminar se
  ve la clasificación de esa Misión antes de continuar a la siguiente.
- **Componentes afectados:** API, visor AdventuriQ Arena, Webapp del Player.
- **Fecha de despliegue:** 2026-07-11

> **Extiende** al FSD `FSD-2026-07-11-modo-arena-live.md` (Modo Arena general). Este
> documento detalla **cómo se estructura la partida en bloques por Misión**, que
> cambia el flujo del moderador y del Player respecto a la primera versión.

---

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master / Game Designer (Gamifier)

- **No hay ajustes nuevos que configurar**: la partida se separa por Misiones
  automáticamente usando las **Misiones de la Aventura** y su **imagen de cabecera**
  y **título**, que ya se editan en el editor de Misión.
- Al moderar en Arena, ahora el flujo va **por bloques**: portada de la Misión →
  sus Retos → clasificación de la Misión → siguiente Misión.

### Desde el punto de vista del Player (Webapp)

- Entre bloques, el móvil del Player muestra un aviso claro (**"La Misión va a
  empezar"** / **"Misión finalizada"**) mientras la portada y el ranking se ven en
  la pantalla grande.

---

## 3. PREREQUISITOS DEL USUARIO

- Una Aventura en **Modo Live** publicada (ver FSD de Modo Arena).
- Para que se vea la portada de cada Misión: la Misión debe tener **imagen de
  cabecera** y **título** (si no tiene imagen, se usa la de la Aventura).
- La Aventura debe tener **varias Misiones** con Retos compatibles para jugar por
  bloques. Con **una sola Misión**, la partida NO se separa (se juega del tirón,
  como antes).

---

## 4. FLUJOS PASO A PASO

### Flujo del moderador (AdventuriQ Arena) — con varias Misiones

1. En el lobby, con los Players dentro, pulsar **"Listos"** (antes "Empezar").
2. Aparece la **portada de la primera Misión** (imagen de cabecera + título +
   "Misión 1 de N"). Pulsar **"Empezar"**.
3. Se juegan los **Retos de esa Misión** (cada uno: pregunta → respuesta correcta →
   se puede ver el marcador → siguiente).
4. Al acabar los Retos de la Misión, aparece **"Misión finalizada"** con la
   **clasificación (Top 5) de esa Misión**. Pulsar **"Continuar"**.
5. Se repite (portada → Retos → Misión finalizada) para cada Misión.
6. Tras la **última Misión**, se muestra directamente el **Podio final** (con la
   puntuación **acumulada** de toda la partida). Pulsar **"Finalizar"**.

> Con **una sola Misión**: al pulsar "Listos" se lanza el primer Reto directamente
> (sin portada) y, al acabar, se va directo al Podio (sin "Misión finalizada").

### Flujo del Player (Webapp)

1. El Player se une y juega igual que antes.
2. Cuando el moderador muestra la portada de una Misión, el móvil indica que **la
   Misión va a empezar** ("mira la pantalla grande").
3. Al acabar una Misión, el móvil indica **"Misión finalizada"** mientras el
   ranking de la Misión se ve en la pantalla grande.

---

## 5. PANTALLAS PARA CAPTURAR

- [ARENA] **Portada de una Misión** (imagen de cabecera + título + "Misión X de N")
  → Nombre: `aventuras/arena-portada-mision.png`
- [ARENA] **"Misión finalizada"** con el Top 5 de la Misión → Nombre:
  `aventuras/arena-mision-finalizada.png`
- [ARENA] Botón **"Listos"** en el lobby (antes "Empezar") → Nombre:
  `aventuras/arena-lobby-listos.png`
- [WEBAPP] Móvil del Player mostrando **"La Misión va a empezar"** → Nombre:
  `aventuras/webapp-arena-mision-empezar.png`

---

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/` (misma página que el Modo Arena general;
  esta feature amplía la sección de "cómo se juega en directo").
- **Nombre del archivo:** `modo-arena-live.md` (Actualización).
- **Tags sugeridos:** `modo-arena`, `live`, `misiones`, `bloques`, `game-master`.
- **¿Es página nueva o actualización?** Actualización (del Modo Arena).

---

## 7. NOTAS TÉCNICAS (relevantes para el manual)

- **Se juegan solo las Misiones activas** (no borrador) que tengan al menos un Reto
  compatible con el Modo Arena. Las Misiones sin Retos compatibles no aparecen.
- **La clasificación de "Misión finalizada" es solo de esa Misión** (los puntos
  ganados en ella). El **Podio final** es **acumulado** (suma de todas las Misiones).
- **La última Misión no muestra "Misión finalizada"**: va directa al Podio.
- Con **una sola Misión**, no hay portadas ni "Misión finalizada": se juega del
  tirón hasta el Podio (comportamiento anterior, sin cambios).
- La portada de la Misión usa su **imagen de cabecera**; si no tiene, usa la
  **imagen de cabecera de la Aventura**.
