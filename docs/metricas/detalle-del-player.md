---
sidebar_position: 3
title: '👤 Detalle del Player'
description: 'Consulta el recorrido, puntuación y Objetos Digitales de cada Player desde la Clasificación del Gamifier.'
keywords: [detalle, player, recorrido, objetos digitales, clasificación, métricas, gamifier, adventuriq]
---

# 👤 Detalle del Player

:::info 👑 Quién puede hacer esto
**Game Master** (y Game Designers con acceso a la Aventura).
:::

El **Detalle del Player** te permite consultar toda la actividad de un participante concreto dentro de una Aventura: qué Retos ha completado, cuántos puntos ha acumulado, cuánto tiempo ha tardado y qué Objetos Digitales ha conseguido. Se accede desde la [Clasificación](./clasificacion.md).

## 🎯 Para qué sirve

Desde el Detalle del Player puedes:

- Ver el **recorrido completo** del Player por los Retos de la Aventura (orden cronológico, tiempo, puntuación).
- Consultar de un vistazo sus **Retos completados**, **puntos totales**, **Objetos Digitales** y **tiempo de realización**.
- Explorar los **Objetos Digitales** obtenidos, agrupados por Misión, Etiqueta o Aventura.
- Buscar un objeto concreto por nombre, descripción o etiqueta.
- Ver la **vista previa** de cualquier objeto (imagen, vídeo o audio).
- **Editar** la puntuación de un Reto o **eliminar** un Reto del recorrido.

## 📍 Cómo acceder

Hay dos formas de abrir el Detalle del Player desde la [Clasificación](./clasificacion.md):

1. **Desde el botón "Ver"** (icono de la columna Acciones): abre el Detalle en la pestaña **Recorrido**.
2. **Desde el número de Objetos**: haz clic en el contador de la columna **Objetos** para abrir directamente la pestaña **Objetos**.

![Tabla de Clasificación mostrando la columna Objetos con el número de Objetos Digitales de cada Player](/img/gamifier/metricas/clasificacion-columna-objetos.png)

## Cabecera del Detalle

La cabecera muestra el avatar, nickname, nombre y email del Player, junto con cuatro indicadores de colores:

| Indicador | Color | Qué muestra |
|---|---|---|
| **Retos completados** | Azul | Número total de Retos finalizados. |
| **Puntos totales** | Naranja | Suma de puntos acumulados. |
| **Objetos** | Verde | Número de Objetos Digitales obtenidos. |
| **Tiempo de realización** | Rojo | Tiempo total dedicado a la Aventura. |

![Cabecera del Detalle del Player con avatar, datos del participante y cuatro indicadores KPI de colores](/img/gamifier/metricas/detalle-player-cabecera.png)

:::note
El indicador de **Objetos** aparece tras abrir la pestaña Objetos por primera vez. Si aún no la has visitado, solo verás tres indicadores.
:::

## ⚙️ Pestaña Recorrido

La pestaña **Recorrido** muestra la lista cronológica de todos los Retos que el Player ha jugado. Para cada Reto verás:

- **Código del Reto** (ej. MIS1-PR01): identifica la Misión y la posición del Reto.
- **Nombre del Reto**.
- **Fecha de inicio y fin**.
- **Tiempo empleado** en resolver el Reto.
- **Puntuación obtenida**.
- **Estado**: Finalizada, en progreso, etc.
- **Respuesta del Player**: qué opción eligió y si acertó (en Retos de tipo Pregunta/Respuesta).

![Pestaña Recorrido del Detalle del Player mostrando la lista de Retos con fechas, tiempo y puntuación](/img/gamifier/metricas/detalle-player-recorrido.png)

### Detalle de lo que hizo el Player en cada Reto

Debajo de cada Reto del recorrido se muestra un **bloque de detalle** siempre visible, adaptado al tipo de Reto, que permite al Game Master saber exactamente qué hizo el Player:

| Tipo de Reto | Qué muestra el detalle |
|---|---|
| **Pregunta / Respuesta** (y variantes Audio, Vídeo, Trivial) | Todas las opciones de la pregunta, cuál(es) eligió el Player y si acertó o falló (marcas verde/rojo cuando el Reto muestra la corrección). |
| **Compartir Foto / Vídeo** | Vista previa de la foto o el vídeo que subió el Player, junto con sus hashtags y redes. |
| **Respuesta Libre** | El texto completo que escribió el Player. |
| **Nube de Palabras** | La palabra que aportó el Player. |
| **Respuesta Exacta** | Lista de intentos del Player (el texto de cada intento y si acertó), más la respuesta correcta configurada por el GM. |
| **Ruleta de la Fortuna** | Historial de cada giro (puntos ganados o perdidos y objeto conseguido en cada uno) y total de puntos acumulados. |

:::note Aventuras multi-idioma
El detalle se muestra automáticamente en el **idioma en que jugó el Player**, sin mezclar idiomas. En Retos donde el Player no eligió ninguna opción, se usa el idioma por defecto de la Aventura.
:::

:::info Disponibilidad del detalle
El detalle de **Respuesta Exacta** (texto de los intentos) y **Ruleta de la Fortuna** (historial de giros) solo está disponible para partidas jugadas a partir de la versión de junio 2026. En partidas anteriores se muestra la información disponible y, en Respuesta Exacta, un aviso de que el texto de los intentos no se registró.
:::

### Acciones sobre un Reto

Cada Reto del recorrido tiene dos botones de acción:

- **Editar puntuación** (icono de lápiz): permite corregir manualmente la puntuación asignada a ese Reto.
- **Eliminar** (icono de papelera): elimina el Reto del recorrido del Player.

:::warning
Eliminar un Reto del recorrido es **irreversible** y afecta a la puntuación total del Player en la Clasificación.
:::

## ⚙️ Pestaña Objetos

La pestaña **Objetos** muestra todos los Objetos Digitales que el Player ha obtenido durante la Aventura. Junto al nombre de la pestaña se muestra el número total de objetos.

![Pestaña Objetos del Detalle del Player con buscador, agrupación por Misión y tarjetas de objetos](/img/gamifier/metricas/detalle-player-objetos-misiones.png)

### Buscador

El campo de búsqueda en la parte superior permite filtrar objetos por **nombre**, **descripción** o **etiqueta**.

### Agrupar por

En la esquina superior derecha puedes cambiar el criterio de agrupación:

| Agrupación | Qué hace |
|---|---|
| **Misión** | Agrupa los objetos según la Misión del Reto que los otorgó. Las Misiones aparecen en el mismo orden que tienen en la Aventura. |
| **Etiqueta** | Agrupa por las etiquetas (tags) asignadas a los Objetos Digitales. |
| **Aventura** | Muestra todos los objetos juntos, incluyendo los otorgados a nivel de Aventura (no asociados a una Misión concreta). |

Al elegir una agrupación aparecen **sub-pestañas**: una pestaña **"Todas"** (con el total) y una pestaña por cada Misión, Etiqueta o grupo. Haz clic en cualquier sub-pestaña para ver solo los objetos de ese grupo.

### Tarjeta de un objeto

Cada Objeto Digital se muestra como una tarjeta con:

- **Imagen** de previsualización (o icono si es audio/vídeo).
- **Nombre** del objeto.
- **Bandera del idioma** en que el Player lo obtuvo.
- **Fecha y hora** de obtención.
- **Reto de origen**: el Reto que otorgó este objeto.
- **Etiquetas** asociadas al objeto.

### Vista previa

Haz clic en cualquier tarjeta para abrir la **vista previa ampliada**:

- **Imágenes**: se muestran a tamaño completo con la descripción del objeto.
- **Vídeos**: se abren con un reproductor integrado.
- **Audios**: se abren con un reproductor de audio.

La vista previa también muestra el idioma de obtención, la fecha, el Reto de origen y las etiquetas.

![Vista previa ampliada de un Objeto Digital mostrando la imagen, descripción, idioma, fecha y Reto de origen](/img/gamifier/metricas/detalle-player-objeto-preview.png)

### Eliminar un Objeto del Player

El Game Master puede retirar manualmente un Objeto Digital del inventario de un Player:

1. En la pestaña **Objetos**, pasa el ratón por encima de la tarjeta del objeto que quieres eliminar.
2. Aparece un **botón de papelera** en la esquina superior derecha de la tarjeta.
3. Al pulsarlo, se muestra una **ventana de confirmación** con el nombre del objeto.
4. Confirma la eliminación. La tarjeta desaparece y el contador de Objetos se actualiza al instante.

La eliminación borra únicamente **esa unidad concreta** del Objeto: si el Player había conseguido el mismo Objeto varias veces (por ejemplo en Retos distintos), solo se elimina la tarjeta sobre la que has actuado, no las demás. Cada eliminación queda **registrada en la auditoría** del sistema (quién la realizó y cuándo).

:::warning
Eliminar un Objeto es **irreversible** desde la interfaz (no hay "deshacer"). La eliminación **no modifica la puntuación** del Player ni el ranking — solo retira el Objeto de su inventario.
:::

:::tip
Usa la pestaña Objetos para verificar que un Player recibió correctamente los Objetos Digitales configurados en tus Retos. Es especialmente útil si un participante reporta que le falta algún objeto.
:::

## 📚 Continúa aprendiendo

- Ranking y tabla de Players: [Clasificación](./clasificacion.md).
- Monitorización por Retos y Misiones: [Game Board](./game-board.md).
- Configurar Objetos Digitales en una Aventura: [Objetos Digitales de la Aventura](../aventuras/objetos-digitales.md).
- Configurar Objetos Digitales por Misión: [Objetos Digitales de Misión](../misiones/objetos-digitales.md).
- Configurar Objetos Digitales por Reto: [Objetos Digitales de Reto](../retos/objetos-digitales.md).
