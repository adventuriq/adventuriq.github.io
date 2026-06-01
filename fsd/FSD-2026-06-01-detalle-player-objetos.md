---
feature_name: Detalle del Player (Recorrido + Objetos) y columna Objetos en la Clasificación
date: 2026-06-01
components: [API] [GAMIFIER]
docusaurus_path: docs/metricas/detalle-del-player.md
---

## 1. RESUMEN DE LA FEATURE
- **Nombre:** Detalle del Player — Recorrido y Objetos
- **Descripción:** Desde la Clasificación de una Aventura, el Game Master puede abrir
  la ficha de un jugador y consultar, en pestañas, tanto su recorrido por los retos
  como todos los Objetos Digitales que ha conseguido, con buscador y agrupaciones.
- **Componentes afectados:** API, Gamifier
- **Fecha de despliegue:** 2026-06-01

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)
- Ver, en la tabla de **Clasificación**, una nueva columna **Objetos** con el número de
  Objetos Digitales que ha conseguido cada jugador (0 si no tiene ninguno).
- Hacer clic en ese número (aunque sea 0) para abrir el **Detalle del Player** directamente
  en la pestaña de Objetos.
- Abrir el Detalle del Player desde el botón "Ver" de la Clasificación, con una cabecera que
  muestra avatar, nombre, email y 4 indicadores: Retos completados, Puntos totales, Objetos y
  Tiempo de realización.
- En la pestaña **Recorrido**: ver la lista de retos jugados (con fecha de inicio/fin, tiempo y
  puntuación), editar la puntuación de un reto y eliminar un reto del recorrido.
- En la pestaña **Objetos**: ver todos los Objetos Digitales obtenidos por el jugador, con:
  - **Buscador** por nombre, descripción o etiqueta.
  - **Agrupación** por Misión, por Etiqueta (Tag) o por Aventura, mediante sub-pestañas
    (una por cada Misión/Etiqueta más una pestaña "Todas"). Las Misiones aparecen en el mismo
    orden en que están en la Aventura.
  - Para cada objeto: el **idioma** en que se obtuvo (bandera), el **momento** de obtención, la
    **Misión/Reto de origen**, sus **etiquetas** y una **vista previa** de imagen, vídeo o audio
    al hacer clic (ventana ampliada con reproductor).

### Desde el punto de vista del Player (Webapp)
- No aplica. Esta funcionalidad es exclusiva del panel del Game Master (Gamifier).

## 3. PREREQUISITOS DEL USUARIO
- Tener al menos una Aventura con jugadores que hayan participado.
- Para ver objetos en un jugador, ese jugador debe haber conseguido al menos un Objeto Digital
  (si no, la pestaña Objetos mostrará un estado vacío y la columna marcará 0).

## 4. FLUJOS PASO A PASO

### Flujo Gamifier
1. Entrar en una Aventura → **Clasificación** (Ranking).
2. Localizar la nueva columna **Objetos**: muestra el número de objetos por jugador.
3. (Opción A) Hacer clic en el número de **Objetos** de un jugador → se abre su Detalle en la
   pestaña **Objetos**.
4. (Opción B) Pulsar el botón **Ver** del jugador → se abre su Detalle en la pestaña **Recorrido**.
5. En el Detalle, alternar entre las pestañas **Recorrido** y **Objetos** en la parte superior.
6. En **Objetos**, elegir arriba a la derecha el criterio **Agrupar por** (Misión / Etiqueta /
   Aventura). Aparecerán sub-pestañas: "Todas" + una por cada Misión o Etiqueta.
7. Hacer clic en una sub-pestaña para ver solo los objetos de esa Misión/Etiqueta, o usar el
   **buscador** para filtrar.
8. Hacer clic en una tarjeta de objeto para abrir la **vista previa** (imagen/vídeo/audio) y sus
   detalles (idioma, momento, origen, etiquetas, código único si lo tiene).

## 5. PANTALLAS PARA CAPTURAR
- [GAMIFIER] Tabla de Clasificación con la columna **Objetos** visible → Nombre sugerido:
  `metricas/clasificacion-columna-objetos.png`
- [GAMIFIER] Cabecera del Detalle del Player (avatar + 4 indicadores de colores) → Nombre:
  `metricas/detalle-player-cabecera.png`
- [GAMIFIER] Pestaña **Recorrido** (timeline de retos) → Nombre:
  `metricas/detalle-player-recorrido.png`
- [GAMIFIER] Pestaña **Objetos** agrupada por Misión con sub-pestañas → Nombre:
  `metricas/detalle-player-objetos-misiones.png`
- [GAMIFIER] Vista previa de un objeto (modal con imagen/vídeo/audio y detalles) → Nombre:
  `metricas/detalle-player-objeto-preview.png`

## 6. UBICACIÓN EN DOCUSAURUS
- **Carpeta destino:** `docs/metricas/`
- **Nombre del archivo:** `detalle-del-player.md`
- **sidebar_position sugerido:** 4 (después de `clasificacion.md` y `game-board.md`)
- **Tags sugeridos:** clasificación, jugador, recorrido, objetos digitales, métricas
- **¿Es página nueva o actualización?** Nueva página + pequeña actualización de
  `docs/metricas/clasificacion.md` para mencionar la nueva columna **Objetos** y el acceso al
  Detalle del Player.

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)
- La pestaña **Objetos** carga los datos la primera vez que se abre (puede tardar un instante).
- El indicador **Objetos** de la cabecera aparece una vez se ha abierto la pestaña Objetos.
- Los Objetos conseguidos en un Reto se agrupan bajo la **Misión** a la que pertenece ese Reto;
  los conseguidos a nivel de Aventura se agrupan en "Objetos de la Aventura".
- Cada objeto conserva el **idioma** en el que el jugador lo obtuvo (puede diferir del idioma
  actual del panel).
- Funcionalidad solo del Gamifier; no cambia nada en la Webapp del Player.
