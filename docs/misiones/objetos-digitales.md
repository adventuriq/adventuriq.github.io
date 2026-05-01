---
sidebar_position: 6
title: 🎁 Objetos Digitales
description: Objetos Digitales entregados al completar una Misión en AdventuriQ — cómo asociar Objetos a una Misión y cómo afectan las Condiciones de Finalización a la entrega.
keywords: [misión, objeto digital, objeto, entrega, completar, gamifier, webapp, adventuriq]
---

# 🎁 Objetos Digitales

La sección **Objetos** del formulario de la Misión permite asociar uno o varios Objetos Digitales que se entregarán al Player cuando complete la Misión. Un Objeto Digital puede representar una medalla, una pista, un código de descuento, una felicitación o cualquier elemento entregable dentro del juego.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

## Configuración en el Gamifier 👑

La sección **Objetos** muestra el listado de Objetos Digitales asociados a esta Misión con su imagen, ID y nombre. El subtítulo indica "Objetos asociados a esta Misión".

| Acción | Descripción |
|---|---|
| **+ Nuevo Objeto** | Crea un nuevo Objeto Digital asociado a la Misión. Se abre el formulario de creación del Objeto con sus campos de contenido, traducciones y multimedia. |
| **Clic en el nombre** | Abre el formulario de edición del Objeto existente. |
| **Eliminar** (icono papelera) | Desvincula el Objeto de la Misión. |

![Sección Objetos de la Misión — objeto asociado con ID, nombre e imagen, botones de nuevo objeto y eliminar](/img/gamifier-mision-recompensas.png)

### Contenido de un Objeto Digital

Cada Objeto Digital se configura con imagen (JPG, PNG, GIF), vídeo (MP4), audio (MP3), traducciones multiidioma (título, descripción con HTML enriquecido) y opcionalmente un **Código Único** para control de unidades entregadas a nivel analógico. Para más detalle sobre la creación y configuración de Objetos Digitales, consulta [Objetos Digitales — Configuración y Contenido](../recompensas/configuracion-contenido.md).

## Cuándo se entregan los Objetos

A nivel de Misión, los Objetos Digitales se entregan cuando el Player **completa la Misión** — es decir, cuando se cumplen las [Condiciones de Finalización](./condiciones-finalizacion.md) configuradas. Si no se han definido condiciones específicas, la Misión se completa al finalizar todos sus Retos enlazados.

Esto significa que la entrega de Objetos a nivel de Misión está directamente ligada a las Condiciones de Finalización. Si se configura un sistema de condiciones con bloques AND/OR, los Objetos se entregarán cuando esas condiciones se cumplan.

Se pueden crear **múltiples Objetos Digitales** para entregar al final de una misma Misión. Todos se entregan simultáneamente al completarse.

## Diferencia entre Objetos a nivel de Misión y de Reto

| Característica | Nivel Misión | Nivel Reto |
|---|---|---|
| **Entrega** | Al completar la Misión (según Condiciones de Finalización) | Configurable según condiciones específicas del Reto (puntuación, aciertos, etc.) |
| **Condiciones** | Definidas por las Condiciones de Finalización de la Misión | Configurables individualmente por Reto |
| **Flexibilidad** | Entrega ligada al ciclo de vida de la Misión | Control granular por cada Reto |

:::tip 👑 Para el Game Master
Usa los Objetos Digitales a nivel de Misión para entregar premios "de capítulo" — por ejemplo, una medalla al completar toda una fase del juego. Reserva los Objetos a nivel de Reto para entregar pistas o premios inmediatos tras cada prueba individual.
:::

## Cómo lo ve el Player 🎮

Cuando el Player completa la Misión, los Objetos Digitales asociados se presentan a pantalla completa con su imagen, título, descripción y un botón **Continuar** para avanzar. El Objeto también queda guardado en el **Baúl** del Player (accesible desde la Webapp). Si la Misión también tiene una [Notificación](./notificaciones.md) configurada, esta se muestra después de la entrega del Objeto.

![Vista del Player — Objeto Digital entregado al completar una Misión, con imagen, ID, descripción y botón Continuar](/img/webapp-mision-objeto.png)

## Continúa aprendiendo

- Creación de Objetos Digitales: [Objetos Digitales — Configuración y Contenido](../recompensas/configuracion-contenido.md).
- Condiciones que determinan la entrega: [Condiciones de Finalización](./condiciones-finalizacion.md).
- Notificaciones tras la entrega: [Notificaciones](./notificaciones.md).
