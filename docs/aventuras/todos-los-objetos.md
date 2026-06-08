---
sidebar_position: 12
title: 📦 Todos los Objetos
description: Vista consolidada de todos los Objetos Digitales de una Aventura — lista unificada para ver, editar o eliminar cualquier objeto sin importar si está en un Reto, una Misión o la propia Aventura.
keywords: [objetos digitales, todos, listado, aventura, editar, eliminar, gamifier, adventuriq]
---

# 📦 Todos los Objetos

:::info 👑 Quién puede hacer esto
**Game Master** (y Game Designers con acceso a la Aventura).
:::

La sección **Todos los Objetos** reúne en una única lista todos los Objetos Digitales que has creado en una Aventura, sin importar si están en un Reto, en una Misión o en la propia Aventura. Desde aquí puedes verlos, editarlos o eliminarlos sin tener que navegar reto por reto ni misión por misión.

## Dónde encontrarla

La sección se encuentra en el formulario de edición de la Aventura, justo debajo de la sección **Retos**. El encabezado muestra el título **"Todos los Objetos"** seguido del número total entre paréntesis.

![Sección "Todos los Objetos" en el formulario de edición de la Aventura — tabla con miniatura, ID, título, origen, Misión/Reto y acciones](/img/gamifier-aventura-todos-los-objetos.png)

## Qué muestra la tabla

Cada fila de la lista representa un Objeto Digital y muestra:

| Columna | Descripción |
|---|---|
| **Miniatura / Icono** | Imagen en miniatura si el objeto es de tipo imagen. Para objetos de audio o vídeo se muestra un icono representativo (no una miniatura). |
| **ID** | Identificador único del objeto. |
| **Título** | Nombre del objeto en el idioma por defecto de la Aventura. Si no tiene traducción en ese idioma, se muestra la primera traducción disponible o "Objeto #ID". |
| **Origen** | Etiqueta de color que indica dónde se creó el objeto: **Aventura**, **Misión #X** o **Reto #X**. |
| **Misión / Reto** | Imagen de cabecera y título del Reto o Misión al que pertenece el objeto. El título es un **enlace** que abre el Reto o la Misión en una pestaña nueva del navegador. Para los objetos creados a nivel de Aventura, esta columna aparece vacía. |
| **Acciones** | Botones de Editar y Eliminar. |

## Acciones disponibles

### Editar un objeto

Pulsa el **icono de lápiz** (o haz clic en la miniatura, el ID o el título) para abrir el formulario de edición del objeto. Se abre en una **pestaña nueva** del navegador, con las migas de navegación correctas (ej. *Inicio › Misión #X › Reto #X › Objeto*) para poder volver al Reto o Misión de origen. El listado de la Aventura permanece abierto en la pestaña original.

### Eliminar un objeto

Pulsa el **icono de papelera** en la fila del objeto. Aparece una ventana de confirmación antes de proceder. Al confirmar, el objeto se elimina por completo — desaparece de la lista y del Reto, Misión o Aventura donde estuviera.

:::warning
Eliminar un objeto desde esta vista lo borra **por completo**, no solo lo desvincula. Si el objeto ya fue entregado a Players, estos dejarán de verlo en su inventario.
:::

### Navegar al Reto o Misión de origen

En la columna **Misión / Reto**, pulsa el título del Reto o la Misión para abrirlo en una **pestaña nueva**. Es útil cuando necesitas revisar la configuración del Reto que entrega ese objeto sin perder la vista global.

## Para qué sirve

La vista "Todos los Objetos" es especialmente útil cuando la Aventura tiene muchos objetos repartidos entre varios Retos y Misiones, cuando necesitas localizar rápidamente un objeto para editarlo o eliminarlo, cuando quieres auditar de un vistazo qué objetos existen y de dónde proviene cada uno, y cuando trabajas con Aventuras multi-idioma y quieres verificar los títulos en el idioma por defecto.

:::tip 👑 Para el Game Master
Si un objeto aparece como "Objeto #ID" en lugar de su nombre, significa que no tiene traducción en el idioma por defecto de la Aventura. Abre el formulario del objeto para añadir la traducción correspondiente.
:::

## Continúa aprendiendo

- Objetos Digitales por nivel: [Aventura](./objetos-digitales.md) · [Misión](../misiones/objetos-digitales.md) · [Reto](../retos/objetos-digitales.md).
- Consultar los objetos de un Player concreto: [Detalle del Player](../metricas/detalle-del-player.md).
