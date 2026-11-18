---
sidebar_position: 9
title: 📑 Duplicar Misiones y Retos
description: Cómo crear con un solo clic una copia completa de una Misión o de un Reto dentro de la misma Aventura en el Gamifier de AdventuriQ, y qué se copia.
keywords: [misiones, retos, duplicar, copiar, copia, reutilizar, gamifier, adventuriq]
---

# 📑 Duplicar Misiones y Retos

:::info 🛠️ Quién puede hacer esto
**Game Master** y **Game Designer** asignado a la Aventura.
:::

¿Has montado una Misión que funciona y quieres otra igual con pequeños cambios? ¿Necesitas cinco Retos de Pregunta/Respuesta con la misma configuración? En lugar de construirlos de nuevo, **duplícalos**: con un clic el Gamifier crea una copia completa e independiente dentro de la misma Aventura.

## 🎯 Para qué sirve

- **Variantes de una misma Misión**: una ruta de mañana y otra de tarde, una versión fácil y otra difícil.
- **Series de Retos** con la misma mecánica, puntos y Objetos Digitales, cambiando solo el enunciado.
- **Probar cambios sin riesgo**: duplica, experimenta con la copia y conserva el original intacto.

La copia es **completa e independiente**: todo lo que contiene se crea de nuevo, así que modificar la copia no cambia nada del original (y al revés).

:::tip Sin coste
Duplicar una Misión o un Reto no consume Tokens ni Licencias, ni espacio adicional: la copia se queda en la misma Aventura y usa sus mismas imágenes y vídeos.
:::

## 📋 Duplicar una Misión

1. Abre la Aventura y baja al apartado **Misiones** (o pulsa *Misiones* en el índice lateral).
2. En la fila de la Misión, pulsa el botón naranja **Duplicar Misión** (icono de copia), entre *Editar* y *Eliminar*.

![Apartado Misiones de la ficha de la Aventura con el botón Duplicar Misión en la columna de acciones](/img/gamifier-duplicar-mision-boton.png)

3. Se abre una ventana que explica qué se va a copiar. Pulsa **«Sí, duplicar»** (o *Cancelar*).

![Ventana de confirmación Duplicar Misión con los botones Cancelar y Sí, duplicar](/img/gamifier-duplicar-mision-confirmacion.png)

4. Mientras se crea la copia aparece el aviso «Duplicando Misión...». Al terminar se muestra **«¡Duplicado!»**.

La copia aparece **al final de la lista de Misiones**, con el título original seguido de **«(Copia)»** y en **Borrador** (interruptor *Borrador* activado), así que los Players no la ven hasta que la publiques. La lista de Retos de la Aventura también se actualiza con los Retos copiados.

## ⚔️ Duplicar un Reto

### Desde la ficha de la Aventura

1. Abre la Aventura y baja al apartado **Retos**.
2. En la fila del Reto, pulsa el botón naranja **Duplicar Reto** (icono de copia), entre *Editar* y *Eliminar*.
3. Confirma con **«Sí, duplicar»**.

![Apartado Retos de la ficha de la Aventura con el botón Duplicar Reto en la columna de acciones](/img/gamifier-duplicar-reto-aventura-boton.png)

La copia, con **«(Copia)»** en el título, se añade **al final de la misma Misión** en la que está el original. Si el original no está en ninguna Misión, la copia tampoco.

### Desde la ficha de una Misión

1. Abre la Misión y baja a su apartado **Retos**.
2. En la tarjeta del Reto, pulsa el botón violeta **Duplicar Reto** (icono de copia), junto a *Desvincular*.
3. Confirma con **«Sí, duplicar»**.

![Apartado Retos de la ficha de una Misión con el botón violeta Duplicar Reto junto a Desvincular](/img/gamifier-duplicar-reto-mision-boton.png)

La copia aparece **al final de la lista de Retos de esa Misión**. La ficha de la Misión no se recarga: si tenías cambios sin guardar, se conservan.

:::warning Un Reto duplicado no nace en Borrador
Solo la Misión duplicada nace en Borrador. Un Reto duplicado es visible para los Players en cuanto lo sea su Misión: si la Aventura está en juego, revisa y renombra la copia enseguida.
:::

## 📦 Qué se copia

| Al duplicar… | Se copia como elementos nuevos |
|---|---|
| **Una Misión** | Su configuración, textos e idiomas, imágenes, mapa, POI, Notificaciones, los Objetos Digitales que entrega, sus Condiciones de finalización y **todos sus Retos**. Las Condiciones de finalización de la copia apuntan a los Retos copiados. |
| **Un Reto** | Su configuración y todo su contenido según el tipo (preguntas y respuestas, porciones de la Ruleta de la Fortuna, elementos de Realidad Aumentada…), su ubicación, su mapa y los Objetos Digitales que entrega, con sus condiciones de obtención. Si es una **Pregunta Encadenada**, también se copian sus Retos encadenados. |

Detalles a tener en cuenta:

- **Título**: la copia lleva «(Copia)» al final del título en todos los idiomas, siempre en español. Los Retos de dentro de una Misión duplicada conservan su título.
- **Posición**: la copia va siempre **al final** (de la lista de Misiones, de la Misión o de la cadena de la Pregunta Encadenada). Un Reto duplicado nunca es Reto de inicio ni de fin de su Misión.
- **Modo Arena**: una Misión duplicada no se añade a las Misiones del [Modo Arena](../modo-arena/index.md).
- **Imágenes y vídeos**: no se duplican como archivos; la copia usa los mismos de la Aventura.

## 🚫 Qué no se copia

| Elemento | Qué pasa |
|---|---|
| **Llave Digital que entrega otro Reto o Misión** | Si la Misión o el Reto duplicado está bloqueado con una Llave que entrega **otro** elemento, la copia sigue pidiendo **la misma Llave** (si se copiara, nadie entregaría la nueva y la copia quedaría bloqueada para siempre). Si la Llave la entrega un Reto de la propia Misión duplicada, sí se copia y la copia pide la Llave nueva. |
| **Retos de otra Misión en las Condiciones de finalización** | Siguen apuntando a los Retos originales. |
| **Datos de partida** | No se copian el progreso, las respuestas, las fotos ni las puntuaciones de los Players. |

Si la duplicación falla, no queda nada a medias.

:::info ¿Quieres copiar la Aventura entera?
Usa [Clonar una Aventura existente](../aventuras/crear-aventura.md#clonar-una-aventura-existente) para crear una Aventura nueva con todo su contenido, o [Exportar e importar](../aventuras/exportar-importar-aventura.md) para guardarla en un archivo o llevarla a otra cuenta.
:::

## 📚 Continúa aprendiendo

- [Configuración General de Misiones](configuracion-general.md) — crear una Misión desde cero.
- [Retos — los 11 tipos disponibles](../retos/index.md) — crear un Reto desde cero.
- [Llaves digitales](../aventuras/llaves-digitales.md) — cómo funcionan los bloqueos por Llave.
