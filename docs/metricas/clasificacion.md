---
sidebar_position: 1
title: "\U0001F3C6 Clasificación"
description: Clasificación de Players en AdventuriQ — ranking completo del Game Master con filtros, exportación y recorrido del Player, más la vista del Player en la Webapp.
keywords: [clasificacion, ranking, players, puntos, exportar, excel, filtros, recorrido, gamifier, webapp, adventuriq]
---

# 🏆 Clasificación

La **Clasificación** es la herramienta del Game Master para consultar el ranking completo de Players de una Aventura. Muestra la posición, puntuación, Retos realizados, equipo y actividad de cada participante. Desde aquí el GM puede filtrar, exportar datos a Excel, sincronizar el ranking y acceder al recorrido detallado de cada Player.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (Clasificación en el Gamifier) y la **vista del Player** (ranking en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

## Acceso a la Clasificación 👑

El Game Master accede a la Clasificación desde el formulario de edición de la Aventura. En la cabecera del formulario, junto al nombre de la Aventura, se encuentran los botones de acción. El botón **"Clasificación"** abre la vista de ranking.

## Tabla de ranking 👑

![Tabla de Clasificación en el Gamifier — ranking de Players con posición, nickname, nombre, email, equipo, fecha última jugada, pruebas realizadas y puntos](/img/gamifier-metricas-clasificacion-tabla.png)

La tabla muestra todos los Players que han interactuado con la Aventura, ordenados por puntuación total descendente. Las columnas disponibles son:

| Columna | Descripción |
|---|---|
| **User Id** | Identificador interno del Player en el sistema. |
| **Acciones** | Icono para acceder al recorrido detallado del Player. |
| **Pos** | Posición en el ranking (1, 2, 3…). |
| **Avatar** | Imagen de perfil del Player. |
| **Nickname** | Nombre elegido por el Player al unirse a la Aventura. |
| **Nombre** | Nombre real del Player (si lo proporcionó al registrarse). |
| **E-Mail** | Correo electrónico del Player. |
| **Equipo ID** | Identificador del Clan al que pertenece (solo en modo Equipo). |
| **Logo** | Icono/logo del Equipo. |
| **Equipo** | Nombre del Clan al que pertenece. |
| **Fecha Ult. Jugada** | Fecha y hora de la última interacción del Player con la Aventura. |
| **Pruebas Realizadas** | Número de Retos completados. |
| **Objetos** | Número de Objetos Digitales obtenidos por el Player. Haz clic en el número para abrir el [Detalle del Player](./detalle-del-player.md) directamente en la pestaña Objetos. |
| **Puntos Prueba** | Puntos obtenidos por resolver Retos. |
| **Puntos Tiempo** | Puntos de bonificación por velocidad de resolución. |
| **Total Puntos** | Suma total de puntos (Prueba + Tiempo + Votaciones). |

La tabla es paginable con opciones de 12, 24, 48 o 76 registros por página, e incluye un contador de registros totales.

### Filtros rápidos

En la cabecera de la tabla aparecen tres filtros tipo checkbox que permiten segmentar la vista:

| Filtro | Qué muestra |
|---|---|
| **Solo Players** | Excluye del listado a los Game Designers y cuentas internas de test, mostrando únicamente Players reales. |
| **Han añadido la Aventura** | Muestra Players que ya han introducido el GamePIN y consumido un Token, aunque no hayan empezado a jugar. |
| **No han jugado aún** | Muestra Players que han añadido la Aventura pero no han completado ningún Reto — útil para detectar abandono temprano. |

Además, la tabla admite filtrado por columna usando el **asterisco (*)** como comodín en los campos de texto.

### Sincronizar Clasificación

El botón **"Sincronizar Clasificación"** recalcula las posiciones y puntuaciones del ranking. Útil si se han realizado cambios en la configuración de puntos de los Retos o si se sospecha una desincronización entre los datos mostrados y el estado real del juego.

### Exportar a Excel

El botón **"Exportar a Excel"** descarga un archivo con todos los datos de la tabla, respetando los filtros activos en ese momento. Permite al GM trabajar con los datos fuera de la plataforma para análisis avanzado, informes de participación o entregables a clientes.

## Detalle del Player 👑

Desde la columna **Acciones** de la tabla, el icono de recorrido permite acceder al [Detalle del Player](./detalle-del-player.md): una ficha completa con el recorrido por los Retos (orden cronológico, tiempo, puntuación) y todos los Objetos Digitales que ha conseguido.

También puedes acceder al Detalle haciendo clic en el **número de Objetos** de cualquier Player — se abrirá directamente en la pestaña Objetos.

Esta vista es especialmente útil para identificar patrones de comportamiento, detectar posibles problemas con Retos específicos, verificar la actividad de un participante concreto o comprobar que ha recibido los Objetos Digitales esperados.

### Raze individual

Cada Player tiene un botón **"Raze"** que permite eliminar todos sus estados de juego en la Aventura. El Player podrá volver a jugar desde cero. Esta acción es irreversible.

:::warning
El Raze individual elimina permanentemente todos los estados de juego, puntos y objetos de ese Player en la Aventura. No hay vuelta atrás. Es recomendable exportar los datos antes de ejecutarlo.
:::

## Vista del Player 🎮

El Player accede a la Clasificación desde el cuadrante **"Clasificación"** de la [Bitácora](../aventuras/bitacora.md#clasificación). La vista muestra el ranking de todos los participantes con su posición, avatar, nombre y puntos acumulados.

![Clasificación en la Webapp — ranking con posición, nombre y puntos de cada Player, más barra inferior con los datos del Player actual](/img/webapp-bitacora-clasificacion.png)

### Barra inferior fija

En la parte inferior de la pantalla de Clasificación aparece siempre una barra fija con los datos del Player actual (posición, nombre y puntos), para que pueda ver su situación sin necesidad de buscar su nombre en el listado.

### Pestañas de la Clasificación

La Clasificación del Player cuenta con cinco pestañas en la parte inferior que permiten visualizar el ranking desde distintas perspectivas:

| Pestaña | Qué muestra |
|---|---|
| **General** | Ranking acumulado de todos los Players, ordenado por puntuación total. |
| **Diaria** | Ranking del día actual — útil en eventos de varios días para ver quién lidera la jornada. |
| **Progreso** | Vista del avance del Player en relación con los demás (porcentaje de Aventura completado). |
| **Lista** | Listado ordenado alternativo. |
| **Global** | Ranking global que puede incluir Players de todas las Aventuras del GM (si la opción está activada). |

En modo **Equipo**, aparece una pestaña adicional con el ranking por Equipos (suma de puntuaciones de los miembros de cada Clan).

### Visibilidad de la Clasificación

El Game Master puede desactivar la Clasificación para los Players desde la configuración de la Aventura con el toggle **"Visualizar Posición y Ranking"**. Cuando está desactivado, los Players no ven su posición ni el cuadrante de Clasificación en la Bitácora.

:::tip 👑 Para el Game Master
Usa el filtro "No han jugado aún" para detectar participantes que se registraron pero no arrancaron. Envíales un recordatorio antes de que la Aventura termine. Exporta a Excel periódicamente si necesitas entregar informes de participación al cliente o al departamento de formación.
:::

## Continúa aprendiendo

- Ficha completa de un participante: [Detalle del Player](./detalle-del-player.md).
- Vista del Player en la Bitácora: [Bitácora del Player](../aventuras/bitacora.md#clasificación).
- Panel de monitorización por Retos: [Game Board](./game-board.md).
- Configuración de visibilidad: [Configuración de una Aventura](../aventuras/configuracion.md).
