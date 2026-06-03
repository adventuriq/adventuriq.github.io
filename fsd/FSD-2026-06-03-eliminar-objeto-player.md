---
feature_name: Eliminar un Objeto Digital de un Player
date: 2026-06-03
components: [API] [GAMIFIER]
docusaurus_path: docs/metricas/detalle-del-player.md
---

## 1. RESUMEN DE LA FEATURE
- **Nombre:** Eliminar un Objeto del jugador
- **Descripción:** Desde la pestaña Objetos del Detalle del Player, el Game Master puede
  retirar manualmente un Objeto Digital que un jugador haya conseguido, con un paso de
  confirmación. Cada eliminación queda registrada para saber quién la hizo y cuándo.
- **Componentes afectados:** API, Gamifier
- **Fecha de despliegue:** 2026-06-03

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)
- En el **Detalle del Player → pestaña Objetos**, al pasar el ratón por encima de la
  tarjeta de un Objeto aparece un **botón de papelera** en la esquina superior derecha.
- Al pulsarlo, se muestra una **ventana de confirmación** con el nombre del objeto antes
  de borrar nada.
- Si confirma, el Objeto **desaparece de la lista** del jugador y el **contador de Objetos**
  se actualiza al instante.
- La eliminación borra únicamente **esa unidad concreta** del Objeto: si el jugador había
  conseguido el mismo Objeto varias veces (por ejemplo en retos distintos), solo se elimina
  la tarjeta sobre la que ha actuado, no las demás.
- Cada eliminación queda **registrada en la auditoría** del sistema (qué usuario la realizó
  y cuándo), de modo que siempre se puede saber quién retiró un objeto a un jugador.

### Desde el punto de vista del Player (Webapp)
- No aplica. Es una acción exclusiva del panel del Game Master (Gamifier). El jugador
  simplemente dejará de ver ese objeto en su mochila/recompensas.

## 3. PREREQUISITOS DEL USUARIO
- Tener una Aventura con jugadores que hayan conseguido al menos un Objeto Digital.
- Acceder al Detalle del Player desde la Clasificación de la Aventura.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier
1. Entrar en una Aventura y abrir su **Clasificación**.
2. Pulsar en un jugador (o en su columna **Objetos**) para abrir el **Detalle del Player**.
3. Ir a la pestaña **Objetos**.
4. Pasar el ratón por encima de la tarjeta del Objeto que se quiere eliminar.
5. Pulsar el **botón de papelera** que aparece en la esquina de la tarjeta.
6. En la ventana de confirmación, pulsar **Eliminar**.
7. Resultado: la tarjeta desaparece, el contador de Objetos baja y se muestra un aviso
   de "Objeto eliminado". La acción queda registrada en la auditoría.

## 5. PANTALLAS PARA CAPTURAR
- [GAMIFIER] Pestaña Objetos con una tarjeta resaltada mostrando el botón de papelera al
  hacer hover → Nombre sugerido: metricas/detalle-player-objeto-boton-eliminar.png
- [GAMIFIER] Ventana de confirmación de eliminación de objeto → Nombre sugerido:
  metricas/detalle-player-objeto-confirmacion.png
- [GAMIFIER] Aviso de "Objeto eliminado" tras confirmar → Nombre sugerido:
  metricas/detalle-player-objeto-eliminado.png

## 6. UBICACIÓN EN DOCUSAURUS
- **Carpeta destino:** `docs/metricas/`
- **Nombre del archivo:** `detalle-del-player.md`
- **sidebar_position sugerido:** (el que ya tenga la página de Detalle del Player)
- **Tags sugeridos:** detalle del player, objetos, clasificación, game master
- **¿Es página nueva o actualización?** Actualización — se añade una sección a la página
  existente "Detalle del Player" (creada en el FSD de 2026-06-01), describiendo la nueva
  acción de eliminar objetos.

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)
- La eliminación **no modifica la puntuación** del jugador ni el ranking: solo retira el
  Objeto de su inventario. Si el objeto había otorgado puntos en su momento, esos puntos
  se mantienen.
- La acción es **irreversible** desde la interfaz (no hay "deshacer"); por eso se pide
  confirmación. La traza de auditoría permite saber qué se eliminó y quién lo hizo.
- La eliminación está disponible para cualquier Game Master/Diseñador con acceso al Detalle
  del Player de esa Aventura.
