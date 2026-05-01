---
sidebar_position: 7
title: 📞 Notificaciones
description: Sistema de notificaciones (llamadas) de una Misión en AdventuriQ — simulación de llamada telefónica que el Player recibe al completar la Misión.
keywords: [misión, notificación, llamada, audio, personaje, avatar, gamifier, webapp, adventuriq]
---

# 📞 Notificaciones

Las **Notificaciones** (antes llamadas "Componente Llamada" en versiones anteriores) son un elemento exclusivo del nivel de Misión que simula una llamada telefónica al Player. Cuando el Player completa la Misión, recibe una pantalla de "llamada entrante" con un nombre ficticio y un avatar, y al aceptar la llamada se reproduce un mensaje de audio. Es un recurso narrativo potente para dar feedback inmersivo al Player tras completar un bloque de Retos.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

## Configuración en el Gamifier 👑

La sección **Notificaciones** se encuentra en el formulario de edición de la Misión, debajo de los Objetos. El subtítulo indica "Notificaciones (llamadas) que recibirá el jugador al completar esta misión." El botón **+ Nueva Notificación** permite crear una nueva.

Al crear una Notificación, se configuran los siguientes campos:

| Campo | Descripción |
|---|---|
| **Nombre del personaje o autor** | Nombre ficticio que se mostrará en la pantalla de "llamada entrante" — por ejemplo, "Alicia", "El Capitán", "Dr. Smith". |
| **Imagen** | Avatar del "llamante" que aparece en la pantalla de llamada. Funciona como la foto de contacto de un teléfono real. |
| **Audio** | Archivo de audio (MP3) que se reproduce cuando el Player "acepta" la llamada. Es el mensaje que el personaje ficticio "dice" al Player. |

![Sección Notificaciones de la Misión — subtítulo descriptivo y botón + Nueva Notificación](/img/gamifier-mision-notificaciones.png)

## Cuándo se dispara la Notificación

La Notificación se entrega **después** del Objeto Digital asociado a la Misión. La secuencia completa al completar una Misión es:

1. Se cumplen las Condiciones de Finalización de la Misión.
2. Se entregan los Objetos Digitales asociados (aparecen en el Baúl del Player).
3. Se dispara la Notificación (simulación de llamada telefónica).

Si la Misión no tiene Objetos Digitales, la Notificación se dispara directamente al completarse la Misión.

:::warning Exclusivo de nivel Misión
Las Notificaciones (llamadas) solo existen a nivel de Misión. No están disponibles a nivel de Aventura ni a nivel de Reto.
:::

## Experiencia del Player 🎮

Cuando se dispara la Notificación, la experiencia del Player es la siguiente:

**Pantalla de llamada entrante**: el Player ve una pantalla que simula una llamada telefónica con el nombre del personaje ficticio, su avatar, un número de teléfono ficticio y los botones **Colgar** y **Aceptar**. La estética imita la interfaz nativa de una llamada de teléfono.

![Vista del Player — pantalla de llamada entrante con avatar del personaje, nombre, número ficticio y botones Colgar/Aceptar](/img/webapp-mision-notificacion-llamada.png)

**Aceptar la llamada**: al pulsar el botón de aceptar, se reproduce el audio del mensaje. El Player ve una pantalla de "llamada en curso" con el nombre y la imagen del personaje.

**Fin de la llamada**: cuando el audio termina (o el Player cuelga), la llamada se cierra y el Player continúa con la siguiente Misión o pantalla.

:::tip 👑 Para el Game Master
Las Notificaciones son perfectas para dar feedback narrativo al Player: "¡Bien hecho, agente! Has completado la primera fase de la misión. Ahora dirígete al punto de reunión." Graba un audio con un personaje ficticio que guíe la historia y convierta la transición entre Misiones en un momento memorable.
:::

## Continúa aprendiendo

- Objetos que se entregan antes de la Notificación: [Objetos Digitales](./objetos-digitales.md).
- Condiciones que activan la entrega: [Condiciones de Finalización](./condiciones-finalizacion.md).
