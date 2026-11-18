---
sidebar_position: 1.5
title: 📑 Duplicar una Misión
description: Cómo crear con un solo clic una copia completa de una Misión, con todos sus Retos, Objetos y condiciones, dentro de la misma Aventura en el Gamifier de AdventuriQ.
keywords: [misiones, duplicar, copiar, copia, reutilizar, gamifier, adventuriq]
---

# 📑 Duplicar una Misión

:::info 🛠️ Quién puede hacer esto
**Game Master** y **Game Designer** asignado a la Aventura.
:::

¿Has montado una Misión que funciona y quieres otra igual con pequeños cambios? En lugar de construirla de nuevo, **duplícala**: con un clic el Gamifier crea una copia completa e independiente, **con todos sus Retos**, dentro de la misma Aventura.

## 🎯 Para qué sirve

- **Variantes de una misma Misión**: una ruta de mañana y otra de tarde, una versión fácil y otra difícil.
- **Probar cambios sin riesgo**: duplica, experimenta con la copia y conserva el original intacto.

La copia es **completa e independiente**: todo lo que contiene se crea de nuevo, así que modificar la copia no cambia nada del original (y al revés).

:::tip Sin coste
Duplicar una Misión no consume Tokens ni Licencias, ni espacio adicional: la copia se queda en la misma Aventura y usa sus mismas imágenes y vídeos.
:::

## 📋 Cómo duplicar una Misión

1. Abre la Aventura y baja al apartado **Misiones** (o pulsa *Misiones* en el índice lateral).
2. En la fila de la Misión, pulsa el botón naranja **Duplicar Misión** (icono de copia), entre *Editar* y *Eliminar*.

![Apartado Misiones de la ficha de la Aventura con el botón Duplicar Misión en la columna de acciones](/img/gamifier-duplicar-mision-boton.png)

3. Se abre una ventana que explica qué se va a copiar. Pulsa **«Sí, duplicar»** (o *Cancelar*).

![Ventana de confirmación Duplicar Misión con los botones Cancelar y Sí, duplicar](/img/gamifier-duplicar-mision-confirmacion.png)

4. Mientras se crea la copia aparece el aviso «Duplicando Misión...». Al terminar se muestra **«¡Duplicado!»**.

La copia aparece **al final de la lista de Misiones**, con el título original seguido de **«(Copia)»** y en **Borrador** (interruptor *Borrador* activado), así que los Players no la ven hasta que la publiques. La lista de Retos de la Aventura también se actualiza con los Retos copiados.

<!-- 📸 CAPTURA PENDIENTE: /img/gamifier-duplicar-mision-resultado.png — Lista de Misiones tras duplicar, con la copia «(Copia)» al final y en Borrador -->

## 📦 Qué se copia

Como elementos nuevos: la configuración de la Misión, sus textos e idiomas, imágenes, mapa, POI, Notificaciones, los Objetos Digitales que entrega, sus Condiciones de finalización y **todos sus Retos**, cada uno con todo su contenido (ver [qué se copia de un Reto](../retos/duplicar-retos.md#-qué-se-copia)). Las Condiciones de finalización de la copia apuntan a los Retos copiados.

Detalles a tener en cuenta:

- **Título**: la copia lleva «(Copia)» al final del título en todos los idiomas, siempre en español. Los Retos de dentro de la Misión duplicada conservan su título.
- **Posición**: la copia va siempre **al final** de la lista de Misiones.
- **Modo Arena**: una Misión duplicada no se añade a las Misiones del [Modo Arena](../modo-arena/index.md).
- **Imágenes y vídeos**: no se duplican como archivos; la copia usa los mismos de la Aventura.

## 🚫 Qué no se copia

| Elemento | Qué pasa |
|---|---|
| **Llave Digital que entrega otro Reto o Misión** | Si la Misión está bloqueada con una Llave que entrega **otro** elemento de la Aventura, la copia sigue pidiendo **la misma Llave** (si se copiara, nadie entregaría la nueva y la copia quedaría bloqueada para siempre). Si la Llave la entrega un Reto de la propia Misión duplicada, sí se copia y la copia pide la Llave nueva. |
| **Retos de otra Misión en las Condiciones de finalización** | Siguen apuntando a los Retos originales. |
| **Datos de partida** | No se copian el progreso, las respuestas, las fotos ni las puntuaciones de los Players. |

Si la duplicación falla, no queda nada a medias.

:::info ¿Solo un Reto, o la Aventura entera?
- Para copiar un único Reto, usa [Duplicar un Reto](../retos/duplicar-retos.md).
- Para copiar la Aventura completa, usa [Clonar una Aventura existente](../aventuras/crear-aventura.md#clonar-una-aventura-existente), o [Exportar e importar](../aventuras/exportar-importar-aventura.md) para guardarla en un archivo o llevarla a otra cuenta.
:::

## 📚 Continúa aprendiendo

- [Configuración General de Misiones](configuracion-general.md) — crear una Misión desde cero.
- [Duplicar un Reto](../retos/duplicar-retos.md) — copiar un solo Reto.
- [Llaves digitales](../aventuras/llaves-digitales.md) — cómo funcionan los bloqueos por Llave.
