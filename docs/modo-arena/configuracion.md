---
sidebar_position: 2
title: ⚙️ Configurar el Modo Arena
description: Activa el Modo Live de una Aventura y ajusta la cuenta atrás y la puntuación por rapidez desde el bloque 'Opciones de la Aventura en modo Arena' del Gamifier.
keywords: [modo arena, modo live, configuración, cuenta atrás, puntos por rapidez, lanzar en arena, gamifier, adventuriq]
---

# ⚙️ Configurar el Modo Arena

:::info 🛠️ Quién puede hacer esto
**Game Master** y **Game Designer** (bajo supervisión del GM).
:::

Toda la configuración del Modo Arena vive en el **editor de la Aventura**, en un bloque llamado **"Opciones de la Aventura en modo Arena"**. Ahí decides si la Aventura se puede jugar en directo, cuánto dura la cuenta atrás de cada Reto y si quieres premiar la rapidez.

## 📍 Dónde se configura

Entra en el Gamifier, abre la **Aventura** que quieras y baja por el editor hasta el bloque **"Opciones de la Aventura en modo Arena"**.

<!-- 📸 CAPTURA PENDIENTE: /img/modo-arena/modo-arena-opciones.png — Bloque "Opciones de la Aventura en modo Arena" con el interruptor Modo Live, el campo de segundos y el toggle de puntos por rapidez -->
![Bloque "Opciones de la Aventura en modo Arena" con el interruptor de Modo Live, el campo de segundos de cuenta atrás y el toggle de puntos por rapidez](/img/modo-arena/modo-arena-opciones.png)

## ⚙️ Opciones de configuración

| Opción | Qué hace |
|---|---|
| **Modo Live (Arena)** | Interruptor principal. Al activarlo, la Aventura se puede lanzar en directo. |
| **Segundos de cuenta atrás** | Tiempo que tiene el grupo para responder cada Reto. Pon **0** para que no haya cuenta atrás. |
| **Puntos según rapidez** | Si se activa, cada Reto da más puntos cuanto antes se responda. |

### Modo Live (Arena)

Es el interruptor que habilita todo lo demás. Mientras esté desactivado, la Aventura solo se juega de la forma clásica. Al activarlo aparece el botón para lanzarla en directo (ver más abajo).

### Segundos de cuenta atrás

Define cuántos segundos tiene el grupo para responder cada Reto una vez que el moderador lo lanza.

Si pones **0**, **no hay cuenta atrás**: el Reto queda abierto hasta que **responden todos** los Players unidos o hasta que el moderador **cierra las respuestas** a mano. En la pantalla grande, en lugar del cronómetro, se muestra un **símbolo de infinito**.

:::note La cuenta atrás la manda la Aventura
En Modo Arena, el valor que configuras aquí tiene **prioridad** sobre cualquier límite de tiempo propio de un Reto. El tiempo particular de un Reto solo se aplica en el juego clásico, no en directo.
:::

### Puntos según rapidez

Cuando está activada, la puntuación de cada Reto es proporcional a lo rápido que se responda: **100 %** de los puntos si se responde al instante y **0 %** justo al agotarse la cuenta atrás. Así se premia la agilidad y se desempata de forma natural.

:::tip 👑 A prueba de trampas
El cálculo de los puntos por rapidez lo hace el servidor al registrar cada respuesta, así que **no se puede manipular** desde el móvil del Player.
:::

:::warning Sin cuenta atrás no hay escalado por tiempo
Si has puesto la cuenta atrás en **0** (sin cuenta atrás), la opción "Puntos según rapidez" no tiene efecto: al no haber tiempo límite, todas las respuestas correctas reciben la **puntuación completa**.
:::

## 🚀 Lanzar la Aventura en Arena

Cuando la Aventura está **publicada** y tiene el **Modo Live activo**, aparece el botón **"Lanzar en Arena"**, tanto en este mismo bloque como en la cabecera de la Aventura. Al pulsarlo se abre el visor **AdventuriQ Arena** en la pantalla grande, listo para recibir a los Players.

<!-- 📸 CAPTURA PENDIENTE: /img/modo-arena/modo-arena-lanzar.png — El bloque de opciones con el botón "Lanzar en Arena" visible (Aventura publicada y Modo Live activo) -->
![El bloque de opciones del Modo Arena con el botón "Lanzar en Arena" visible en una Aventura publicada](/img/modo-arena/modo-arena-lanzar.png)

:::warning Necesitas publicar antes
El botón "Lanzar en Arena" solo aparece si la Aventura está **publicada**. Si todavía está en borrador, guárdala y [publícala](../aventuras/publicar-aventura.md) primero.
:::

## 📚 Continúa aprendiendo

- Siguiente paso: [Moderar la partida en directo](./moderar-en-directo.md).
- Recuerda qué [Retos son compatibles](./index.md#-retos-compatibles-con-el-modo-arena) con el Modo Arena.
- Repasa cómo [publicar una Aventura](../aventuras/publicar-aventura.md).
