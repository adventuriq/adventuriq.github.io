---
sidebar_position: 4
title: 🧭 Partida por Misiones
description: En una partida de Modo Arena con varias Misiones, la Aventura se juega por bloques — portada de cada Misión, sus Retos y clasificación intermedia antes de continuar.
keywords: [modo arena, misiones, bloques, tandas, portada, clasificación, podio acumulado, moderador, player, adventuriq]
---

# 🧭 Partida por Misiones (bloques)

:::info 🌐 Quién ve esto
Afecta al **moderador** (cómo avanza la partida en la pantalla grande) y al **Player** (los avisos que ve en el móvil entre bloques). No requiere ninguna configuración extra.
:::

Cuando una Aventura tiene **varias Misiones**, la partida en directo no va de un tirón: se juega **por bloques**, una **tanda de Retos por Misión**. Antes de cada Misión se muestra su portada, se juegan sus Retos y, al terminar, se ve la clasificación de esa Misión antes de pasar a la siguiente.

Esto da a la partida un ritmo de "rondas" y ayuda al público a seguir la estructura de la Aventura.

:::note No hay nada nuevo que configurar
La partida se separa por Misiones **automáticamente**. Usa las **Misiones** de la Aventura con su **imagen de cabecera** y su **título**, que ya editas en el [editor de Misión](../misiones/index.md). Solo tienes que tener el [Modo Live activado](./configuracion.md) y la Aventura publicada.
:::

## 🔁 Cómo avanza la partida (varias Misiones)

Desde el visor del moderador, el flujo por bloques es así:

1. En el lobby, con los Players dentro, pulsa **"Listos"**.
2. Aparece la **portada de la primera Misión**: su **imagen de cabecera**, su **título** y el rótulo **"Misión 1 de N"**. Pulsa **"Empezar"**.
3. Se juegan los **Retos de esa Misión**, uno a uno (pregunta → respuesta correcta → marcador → siguiente).
4. Al acabar la Misión, aparece **"Misión finalizada"** con la **clasificación (Top 5) de esa Misión**. Pulsa **"Continuar"**.
5. Se repite el ciclo (**portada → Retos → Misión finalizada**) para cada Misión.
6. Tras la **última Misión**, se muestra directamente el **podio final** con la **puntuación acumulada** de toda la partida. Pulsa **"Finalizar"**.

<!-- 📸 CAPTURA PENDIENTE: /img/modo-arena/arena-portada-mision.png — Portada de una Misión: imagen de cabecera, título y "Misión X de N" -->
![Portada de una Misión con su imagen de cabecera, su título y el rótulo "Misión X de N"](/img/modo-arena/arena-portada-mision.png)

<!-- 📸 CAPTURA PENDIENTE: /img/modo-arena/arena-mision-finalizada.png — Pantalla "Misión finalizada" con el Top 5 de esa Misión -->
![Pantalla "Misión finalizada" con la clasificación Top 5 de esa Misión](/img/modo-arena/arena-mision-finalizada.png)

:::warning La clasificación intermedia es solo de esa Misión
El Top 5 de **"Misión finalizada"** refleja únicamente los puntos ganados **en esa Misión**. El **podio final** es **acumulado**: suma los puntos de **todas** las Misiones de la partida.
:::

:::note La última Misión va directa al podio
Después de la última Misión **no** se muestra "Misión finalizada": la partida salta directamente al **podio final**.
:::

## 1️⃣ Si la Aventura tiene una sola Misión

Con **una única Misión**, la partida **no se separa en bloques** (se comporta como antes):

- Al pulsar **"Listos"** se lanza el **primer Reto directamente**, sin portada de Misión.
- Al terminar los Retos, se va **directo al podio**, sin la pantalla de "Misión finalizada".

## 🎮 Qué ve el Player entre bloques

El Player juega igual que en cualquier partida de Arena, pero entre Misiones su móvil le orienta:

- Cuando el moderador muestra la **portada de una Misión**, el móvil indica que **"La Misión va a empezar"** e invita a **mirar la pantalla grande**.
- Al terminar una Misión, el móvil muestra **"Misión finalizada"** mientras la clasificación de esa Misión se ve en la pantalla grande.

<!-- 📸 CAPTURA PENDIENTE: /img/modo-arena/webapp-arena-mision-empezar.png — Móvil del Player mostrando "La Misión va a empezar" -->
![Móvil del Player mostrando el aviso "La Misión va a empezar"](/img/modo-arena/webapp-arena-mision-empezar.png)

## 🎲 Qué Misiones entran en la partida

Solo se juegan las **Misiones activas** (no en borrador) que tengan **al menos un Reto compatible** con el Modo Arena. Las Misiones sin Retos compatibles **no aparecen** en la partida.

La portada de cada Misión usa su **imagen de cabecera**; si la Misión no tiene imagen propia, se usa la **imagen de cabecera de la Aventura**.

:::tip Prepara tus portadas
Para que cada bloque luzca, dale a tus Misiones una **imagen de cabecera** atractiva y un **título** claro. Se editan en el [contenido de la Misión](../misiones/contenido-imagenes.md).
:::

## 📚 Continúa aprendiendo

- Vuelve a [Moderar la partida en directo](./moderar-en-directo.md) para el detalle de lanzar Retos y el podio.
- Repasa cómo se estructuran las [Misiones](../misiones/index.md) de una Aventura.
- Mira la experiencia completa desde el móvil en [Jugar como Player](./jugar-como-player.md).
