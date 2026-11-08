---
sidebar_position: 2
title: "\U0001F3AF Game Board"
description: Game Board de AdventuriQ — panel de monitorización del Game Master con métricas en tiempo real por Reto y por Misión, estadísticas de participación y respuestas de Players.
keywords: [game-board, metricas, monitorización, retos, misiones, participacion, estadisticas, redes sociales, enlaces, verificacion, gamifier, adventuriq]
---

# 🎯 Game Board

El **Game Board** es el panel de monitorización del Game Master para analizar el rendimiento de una Aventura desde la perspectiva de los Retos y las Misiones. Mientras que la [Clasificación](./clasificacion.md) está centrada en los Players, el Game Board está centrado en el **contenido**: qué Retos tienen más participación, qué respuestas se han dado, qué Misiones se completan y en cuánto tiempo.

:::info 👑 Vista exclusiva del Game Master
El Game Board es una herramienta exclusiva del Gamifier. El Player no ve esta información — solo el Game Master (y los Game Designers con acceso a la Aventura) pueden consultarlo.
:::

## Acceso al Game Board 👑

El Game Master accede al Game Board desde la ficha de la Aventura: en la cabecera, entre los botones de acceso rápido, el botón **"Game Board"** abre el panel de monitorización. También puedes abrirlo desde el icono de gráfico de cada Aventura en el listado.

El Game Board se abre mucho más rápido que antes porque solo carga al principio los datos generales. Durante ese breve momento muestra el aviso **«Cargando los datos de la partida…»** y no enseña ningún panel, para que no veas los contadores a cero y pienses que la Aventura no tiene actividad.

![Game Board durante la carga, con el aviso Cargando los datos de la partida…](/img/gamifier-metricas-gameboard-cargando.png)

## Estructura del Game Board

El Game Board tiene el mismo diseño que las fichas del Gamifier: una **cabecera** con la imagen y el nombre de la Aventura, las cifras de **Misiones**, **Retos** y **Jugadores** y el botón **Exportar a Excel**, y un **índice lateral** (**Métricas de esta Aventura** y **Actividad registrada**, con una entrada por cada Reto) para saltar directamente a la Misión o al Reto que te interese. El contenido se organiza en tres bloques:

![Game Board — cabecera con las cifras de Misiones, Retos y Jugadores y el botón Exportar a Excel, índice lateral por Misión y Reto y estadísticas por Misión](/img/gamifier-metricas-gameboard-vista-general.png)

### 1. Métricas de la Aventura

Las tres cifras globales se muestran en la cabecera del Game Board:

| Métrica | Descripción |
|---|---|
| **Misiones** | Número total de Misiones en la Aventura. |
| **Retos** | Número total de Retos en la Aventura (suma de todas las Misiones). |
| **Jugadores** | Número de Players que están participando activamente. |

Junto a las métricas globales se encuentra el botón **"Exportar a Excel"** que permite descargar toda la información del Game Board en formato tabulado.

### 2. Estadísticas por Misión

![Estadísticas por Misión — anillos de participación, finalización y Retos completados, con el tiempo y la puntuación promedio de la Misión](/img/gamifier-metricas-gameboard-estadisticas-mision.png)

El bloque **"Estadísticas por Misión"** muestra una tarjeta por cada Misión de la Aventura con las siguientes métricas:

| Métrica | Descripción |
|---|---|
| **Participación** | Número y porcentaje de Players que han entrado en la Misión respecto al total de participantes. |
| **Finalización** | Número y porcentaje de Players que han completado la Misión (cumplido sus condiciones de finalización). |
| **Retos completados** | Porcentaje de Retos de la Misión que han sido completados por al menos un Player. |

Cada tarjeta de Misión está identificada con el icono de bandera y el nombre de la Misión, facilitando la localización rápida.

:::tip 👑 Para el Game Master
Las estadísticas por Misión son especialmente útiles para detectar embudos: si una Misión tiene alta participación pero baja finalización, probablemente contiene un Reto difícil que está bloqueando a los Players. Investiga el detalle de ese Reto en la sección de Actividad Registrada.
:::

### 3. Actividad registrada (por Reto)

![Detalle de actividad por Reto — participación, mecánica y estados de juego de cada Reto individual](/img/gamifier-metricas-gameboard-detalle-retos.png)

El bloque de **Actividad Registrada** es el más extenso del Game Board. Muestra una ficha por cada Reto de la Aventura con la siguiente información:

**Cabecera del Reto**: nombre del Reto, número de Players que han jugado (ej. "0 / 0 Jugadores") y porcentaje de participación.

**Detalles de la Mecánica**: sección expandible que muestra información específica según el tipo de Reto. Para Retos de Respuesta Libre, muestra las respuestas textuales de los Players. Para Retos de Compartir Foto, muestra la galería de imágenes subidas. Para Retos de Pregunta-Respuesta, muestra las opciones seleccionadas.

**Detalle de los estados de Juego**: tabla que registra cada interacción con el Reto, incluyendo avatar del Player, fecha de inicio, fecha de fin, nickname, acción realizada y puntuación obtenida. Junto al título verás cuántos estados de juego tiene el Reto.

Este detalle **se carga solo cuando lo despliegas**: al pulsar **Detalle de los estados de Juego** aparece un indicador de carga y, en un instante, la tabla. Así el Game Board se abre rápido aunque la Aventura tenga muchos Players.

![Detalle de los estados de Juego recién desplegado, con el indicador Cargando los datos de la partida mientras llega la tabla](/img/gamifier-metricas-gameboard-detalle-cargando.png)

#### Galería de Fotos y Vídeos

En Retos que admiten subida de contenido multimedia (Subir Foto, Pregunta-Respuesta con Vídeo/Audio), el Game Board muestra una **Galería de Fotos y Videos** integrada. Al pulsar una foto se abre en un **visor a pantalla completa**. Si aún no se han compartido archivos, muestra el mensaje "Aún no se han compartido fotos ni videos en este reto".

#### Enlaces publicados en RRSS

Si el Reto **Subir Foto** tiene activado el paso [Compartir en Redes Sociales](../retos/subir-foto.md#compartir-en-redes-sociales), justo debajo de la galería aparece la tabla **"Enlaces publicados en RRSS"** con una fila por Player:

| Columna | Descripción |
|---|---|
| **Jugador** | Nickname del Player que ha enviado el enlace. |
| **Enlace** | Enlace clicable a la publicación. Se abre en una pestaña nueva. |
| **Estado** | Verificado, Pendiente de revisión o Rechazado. |

A la derecha de cada fila tienes los botones **✓** (verificar) y **✗** (rechazar) para resolver el enlace con un clic. Una vez verificado, el ✓ desaparece y solo queda el ✗ por si más tarde quieres descartarlo. El contador junto al título te dice cuántos enlaces se han recibido.

Los enlaces de **X/Twitter se verifican automáticamente** (AdventuriQ comprueba que el post existe). Los de **Instagram y Facebook** quedan en *Pendiente de revisión* hasta que alguien los abre y los resuelve a mano — es una limitación de esas plataformas, no de AdventuriQ.

![Tabla de enlaces publicados en RRSS dentro del Game Board — enlace de un Player ya marcado como Verificado](/img/gamifier-metricas-gameboard-enlaces-rrss.png)

:::tip 👑 Para el Game Master
Si estás usando la publicación en redes como requisito de un sorteo, revisa los enlaces **antes** de cerrar la Aventura. Una cuenta privada te mostrará una pantalla de login al abrir el enlace: decide de antemano si eso lo das por válido y dilo en el enunciado del Reto.
:::

#### Estadísticas de Preguntas Encadenadas

Para Retos de tipo **Preguntas Encadenadas**, el Game Board muestra estadísticas adicionales:

| Métrica | Descripción |
|---|---|
| **Tasa de acierto global** | Porcentaje medio de respuestas correctas en el conjunto de preguntas. |
| **Media de aciertos por Player** | Promedio de preguntas acertadas por participante. |
| **Pregunta más difícil** | La pregunta con menor tasa de acierto. |
| **Pregunta más fácil** | La pregunta con mayor tasa de acierto. |

Además, se muestra un panel por cada sub-pregunta con un gráfico de distribución de respuestas (resaltando la correcta en verde) y un desglose por Player indicando qué opción seleccionó cada uno.

## Actualización de datos

Los datos del Game Board se actualizan al **recargar la página**. No hay actualización automática en tiempo real (push), pero el GM puede refrescar en cualquier momento para obtener el estado más reciente.

## Relación con la Clasificación

El Game Board y la Clasificación son vistas complementarias de los mismos datos:

| Clasificación | Game Board |
|---|---|
| Centrada en **Players** | Centrada en **Retos y Misiones** |
| ¿Quién va ganando? | ¿Qué Retos funcionan? |
| Ranking y posiciones | Participación y respuestas |
| Exporta datos por Player | Exporta datos por Reto |

:::tip 👑 Para el Game Master
Durante una Aventura en vivo (gymkana, formación presencial), ten el Game Board abierto para monitorizar el avance. Si ves un Reto con 0% de participación mientras los demás avanzan, puede indicar un problema de bloqueo, un enunciado confuso o una geolocalización mal configurada. Actúa en tiempo real editando el Reto si es necesario.
:::

## Continúa aprendiendo

- Ranking de Players: [Clasificación](./clasificacion.md).
- Condiciones que determinan la finalización de Misiones: [Condiciones de Finalización de Misión](../misiones/condiciones-finalizacion.md).
- Tipos de Reto y sus mecánicas: [Retos](../retos/index.md).
