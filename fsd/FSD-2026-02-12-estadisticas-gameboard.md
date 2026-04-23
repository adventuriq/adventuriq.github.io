---
feature_name: Estadisticas ampliadas en el Game Board (Misiones y Preguntas Encadenadas)
date: 2026-02-12
components: [API] [GAMIFIER]
docusaurus_path: docs/metricas/estadisticas-gameboard.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Estadisticas ampliadas en el Game Board
- **Descripcion:** El Game Board (vista analitica de la Aventura) ofrece ahora dos bloques nuevos de metricas: (1) un bloque de **Estadisticas por Mision** con participacion, tasa de completado, tiempo medio, puntuacion media y ratio de desbloqueo, y (2) un bloque de **Estadisticas detalladas de Preguntas Encadenadas** (antes "Trivial") con tasa de acierto global, media de aciertos, pregunta mas dificil y mas facil, y desglose de respuestas por idioma con graficos circulares. Ademas se corrige la visualizacion de las opciones con 0% de eleccion en los retos de Pregunta/Respuesta.
- **Componentes afectados:** Gamifier (UI del Game Board) y API (endpoints que alimentan los graficos)
- **Fecha de despliegue:** 2026-02-12

## 2. QUE PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- En el Game Board de una Aventura, entre los bloques **"Metricas"** y **"Actividad Registrada"**, ver un nuevo bloque de **Estadisticas por Mision** con tarjetas por cada Mision:
  - **Participacion** (% de Players que han entrado en la Mision).
  - **Completado** (% de Players que la han terminado).
  - **Retos superados** (% sobre el total de Retos de la Mision).
  - **Tiempo promedio** con minimo y maximo.
  - **Puntuacion promedio** con minimo y maximo.
  - **Ratio de desbloqueo** (solo en Misiones protegidas por codigo o QR).
  - **Tasa de completado de Retos**.
  - **Desglose por condicion de fin** (solo si la Mision tiene mas de una condicion configurada).
- Abrir el detalle de un Reto de tipo **Preguntas Encadenadas** (antes solo mostraba titulo y descripcion) y ver:
  - **Tasa de acierto global** de toda la cadena de preguntas.
  - **Media de aciertos por Player**.
  - **Pregunta mas dificil y mas facil**.
  - Por cada sub-pregunta, un panel agrupado por idioma con el texto de la pregunta, cada opcion de respuesta y un grafico circular con el porcentaje de Players que la eligieron (la respuesta correcta se resalta en verde).
- Al ver el detalle de un Player en un Reto de Preguntas Encadenadas, ver la pregunta que le salio y la respuesta que marco, con indicadores verde/rojo para acierto o fallo.
- En los Retos de **Pregunta/Respuesta** (tipo simple), ver tambien las opciones que **ningun Player eligio**, mostradas con 0% en lugar de ocultarse (antes faltaban).
- Los graficos circulares (participacion global, cumplimiento, etc.) se actualizan bien tras cargar los datos (antes se quedaban en blanco o a 0 de forma inconsistente en el primer render).

## 3. PREREQUISITOS DEL USUARIO

- Ser Game Master o Game Designer con acceso al Game Board de la Aventura.
- Tener una Aventura **ya jugada** por al menos un Player: sin datos no hay estadisticas.
- Para las estadisticas de Preguntas Encadenadas, el Reto debe estar configurado con al menos una pregunta.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier - Consultar estadisticas por Mision

1. Entrar al listado de Aventuras y abrir la Aventura deseada.
2. Pulsar el boton **"Game Board"**.
3. Desplazarse hasta el bloque **"Estadisticas por Mision"** (justo despues de "Metricas" generales).
4. Para cada Mision, interpretar los graficos y valores. Las barras verdes indican buen comportamiento, las rojas avisan de posibles problemas (tiempos muy largos, participacion baja, etc.).

### Flujo Gamifier - Consultar estadisticas de un Reto de Preguntas Encadenadas

1. Dentro del Game Board, en la lista de Retos, localizar uno de tipo **Preguntas Encadenadas**.
2. Pulsar **"Detalles Mecanica"** (antes esta opcion estaba oculta para este tipo).
3. Ver el bloque de resumen con graficos circulares y los KPIs principales.
4. Desplazarse por el listado de sub-preguntas; cada panel muestra las respuestas agrupadas por idioma con su tasa de eleccion.

### Flujo Gamifier - Ver la respuesta concreta de un Player

1. En el bloque de **Players**, pulsar sobre un Player para ver el detalle.
2. En cada Reto de Preguntas Encadenadas, se muestra la pregunta que le salio y la respuesta marcada, con etiqueta **verde** (acierto) o **roja** (fallo).

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Game Board con el bloque "Estadisticas por Mision" visible - Nombre: `metricas/gameboard-estadisticas-misiones.png`
- [GAMIFIER] Tarjeta de una Mision con los 3 graficos circulares + mini-paneles - Nombre: `metricas/gameboard-tarjeta-mision.png`
- [GAMIFIER] Detalle de Reto Preguntas Encadenadas - resumen con graficos - Nombre: `metricas/gameboard-trivial-resumen.png`
- [GAMIFIER] Detalle de Reto Preguntas Encadenadas - sub-pregunta agrupada por idioma con banderas - Nombre: `metricas/gameboard-trivial-subpregunta.png`
- [GAMIFIER] Detalle de Player en Reto Preguntas Encadenadas con indicadores acierto/fallo - Nombre: `metricas/gameboard-trivial-player-detalle.png`
- [GAMIFIER] Detalle de Reto Pregunta/Respuesta mostrando opcion con 0% - Nombre: `metricas/gameboard-pr-opcion-cero.png`

## 6. UBICACION EN DOCUSAURUS

- **Carpeta destino:** `docs/metricas/`
- **Nombre del archivo:** `estadisticas-gameboard.md` (o actualizar la pagina existente de Game Board si ya la hay).
- **sidebar_position sugerido:** mismo nivel que las paginas existentes de "Clasificaciones" y "Game Board".
- **Tags sugeridos:** `metricas`, `gameboard`, `estadisticas`, `mision`, `preguntas-encadenadas`, `analitica`
- **Es pagina nueva o actualizacion?** **Actualizacion** de la pagina existente de Game Board (anadir dos secciones) o, si Cowork prefiere separar, pagina nueva "Estadisticas por Mision" y otra "Estadisticas de Preguntas Encadenadas".

## 7. NOTAS TECNICAS

- Las estadisticas por Mision se alimentan de datos agregados: no se actualizan en tiempo real, requieren refrescar la pagina del Game Board.
- En Preguntas Encadenadas, las sub-preguntas se agrupan por **idioma** (el Player ve la Aventura en su idioma, y aqui se desglosan juntas para comparar).
- Las barras de **"Han jugado"** y **"% Participacion"** incluyen proteccion contra division por cero cuando la Aventura aun no tiene Players.
- Panel de desbloqueo solo aparece en Misiones con **codigo** o **QR** activado: en el resto no tiene sentido.
- Esta pagina cubre el contenido de dos sesiones de desarrollo: `2026-02-12_estadisticas-trivial-gameboard.md` y `2026-02-12_mejora-estadisticas-misiones.md`.
