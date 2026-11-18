---
sidebar_position: 0.5
title: 📑 Duplicar un Reto
description: Cómo crear con un solo clic una copia completa de un Reto de cualquier tipo, desde la ficha de la Aventura o desde la de una Misión, en el Gamifier de AdventuriQ.
keywords: [retos, duplicar, copiar, copia, reutilizar, gamifier, adventuriq]
---

# 📑 Duplicar un Reto

:::info 🛠️ Quién puede hacer esto
**Game Master** y **Game Designer** asignado a la Aventura.
:::

¿Necesitas cinco Retos de Pregunta/Respuesta con la misma configuración, o una variante de un Reto que ya funciona? En lugar de montarlos de nuevo, **duplícalos**: con un clic el Gamifier crea una copia completa e independiente del Reto, con todo su contenido, dentro de la misma Aventura.

## 🎯 Para qué sirve

- **Series de Retos** con la misma mecánica, puntos y Objetos Digitales, cambiando solo el enunciado.
- **Probar cambios sin riesgo**: duplica, experimenta con la copia y conserva el original intacto.

La copia es **completa e independiente**: todo lo que contiene se crea de nuevo, así que modificar la copia no cambia nada del original (y al revés).

:::tip Sin coste
Duplicar un Reto no consume Tokens ni Licencias, ni espacio adicional: la copia se queda en la misma Aventura y usa sus mismas imágenes y vídeos.
:::

Puedes duplicar un Reto desde dos sitios.

## 📋 Desde la ficha de la Aventura

1. Abre la Aventura y baja al apartado **Retos**.
2. En la fila del Reto, pulsa el botón naranja **Duplicar Reto** (icono de copia), entre *Editar* y *Eliminar*.
3. Confirma con **«Sí, duplicar»** (o *Cancelar*).

![Apartado Retos de la ficha de la Aventura con el botón Duplicar Reto en la columna de acciones](/img/gamifier-duplicar-reto-aventura-boton.png)

Al terminar se muestra **«¡Duplicado!»** y la lista de Retos se actualiza. La copia, con **«(Copia)»** en el título, se añade **al final de la misma Misión** en la que está el original. Si el original no está en ninguna Misión, la copia tampoco.

## 🚩 Desde la ficha de una Misión

1. Abre la Misión y baja a su apartado **Retos**.
2. En la tarjeta del Reto, pulsa el botón violeta **Duplicar Reto** (icono de copia), junto a *Desvincular*.
3. Confirma con **«Sí, duplicar»**.

![Apartado Retos de la ficha de una Misión con el botón violeta Duplicar Reto junto a Desvincular](/img/gamifier-duplicar-reto-mision-boton.png)

La copia aparece **al final de la lista de Retos de esa Misión**. La ficha de la Misión no se recarga: si tenías cambios sin guardar, se conservan.

<!-- 📸 CAPTURA PENDIENTE: /img/gamifier-duplicar-reto-mision-resultado.png — Ficha de la Misión tras duplicar un Reto, con la copia «(Copia)» al final de la lista -->

:::warning Un Reto duplicado no nace en Borrador
A diferencia de una Misión duplicada, la copia de un Reto es visible para los Players en cuanto lo sea su Misión. Si la Aventura está en juego, revisa y renombra la copia enseguida.
:::

## 📦 Qué se copia

Como elementos nuevos: la configuración del Reto y todo su contenido según el tipo (preguntas y respuestas, porciones de la [Ruleta de la Fortuna](ruleta-de-la-fortuna.md), elementos de [Realidad Aumentada](realidad-aumentada.md)…), su ubicación, su mapa y los Objetos Digitales que entrega, con sus condiciones de obtención. Si es una [Pregunta Encadenada](preguntas-encadenadas.md), también se copian sus Retos encadenados.

Detalles a tener en cuenta:

- **Título**: la copia lleva «(Copia)» al final del título en todos los idiomas, siempre en español.
- **Posición**: la copia va siempre **al final** (de la Misión o de la cadena de la Pregunta Encadenada). Un Reto duplicado nunca es Reto de inicio ni de fin de su Misión.
- **Imágenes y vídeos**: no se duplican como archivos; la copia usa los mismos de la Aventura.

## 🚫 Qué no se copia

| Elemento | Qué pasa |
|---|---|
| **Llave Digital que entrega otro Reto o Misión** | Si el Reto está bloqueado con una Llave que entrega **otro** elemento de la Aventura, la copia sigue pidiendo **la misma Llave** (si se copiara, nadie entregaría la nueva y la copia quedaría bloqueada para siempre). |
| **Datos de partida** | No se copian el progreso, las respuestas, las fotos ni las puntuaciones de los Players. |

Si la duplicación falla, no queda nada a medias.

:::info ¿Una Misión entera, o la Aventura completa?
- Para copiar una Misión con todos sus Retos, usa [Duplicar una Misión](../misiones/duplicar-misiones.md).
- Para copiar la Aventura completa, usa [Clonar una Aventura existente](../aventuras/crear-aventura.md#clonar-una-aventura-existente), o [Exportar e importar](../aventuras/exportar-importar-aventura.md) para guardarla en un archivo o llevarla a otra cuenta.
:::

## 📚 Continúa aprendiendo

- [Retos — los 11 tipos disponibles](index.md) — crear un Reto desde cero.
- [Duplicar una Misión](../misiones/duplicar-misiones.md) — copiar una Misión con todos sus Retos.
- [Llaves digitales](../aventuras/llaves-digitales.md) — cómo funcionan los bloqueos por Llave.
