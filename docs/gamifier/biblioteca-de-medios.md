---
sidebar_position: 1
title: "\U0001F4C1 Biblioteca de Medios"
description: Biblioteca de Medios de AdventuriQ — gestor de archivos multimedia del Game Master para subir, organizar y reutilizar imágenes, vídeos y audios en las Aventuras.
keywords: [biblioteca, medios, multimedia, imagenes, videos, audios, subir, archivos, gamifier, adventuriq]
---

# 📁 Biblioteca de Medios

La **Biblioteca de Medios** es el gestor de archivos multimedia de cada Aventura. Funciona como un repositorio centralizado al estilo de WordPress: el Game Master puede subir imágenes, vídeos y audios, organizarlos, renombrarlos, eliminarlos y copiar su URL para reutilizarlos en cualquier parte de la Aventura.

:::info 👑 Vista exclusiva del Game Master
La Biblioteca de Medios es una herramienta exclusiva del Gamifier. Solo el Game Master y los Game Designers con acceso a la Aventura pueden utilizarla.
:::

## Acceso a la Biblioteca

El botón **"Biblioteca de Medios"** se encuentra en la cabecera del formulario de edición de la Aventura, junto a los botones de Clasificación y Game Board. Al pulsarlo, se abre una ventana modal que ocupa el 75% del ancho de la pantalla.

![Biblioteca de Medios — ventana modal con la galería de archivos multimedia, vistas y panel de propiedades](/img/gamifier-biblioteca-medios-vista-general.png)

## Subir archivos

Para subir archivos a la Biblioteca:

1. Abrir la Biblioteca de Medios desde la Aventura.
2. **Arrastrar** los archivos sobre la zona punteada de drop, o pulsar **"Seleccionar archivos"** y elegirlos desde el ordenador.
3. Se pueden subir varios archivos a la vez.
4. Los archivos aparecen en la galería a medida que se completa la subida.

Los formatos soportados incluyen imágenes (JPG, PNG, GIF, WebP), vídeos (MP4, WebM) y audios (MP3, OGG, WAV).

## Vistas de la galería

La Biblioteca ofrece dos modos de visualización, alternables con los iconos de la barra superior:

| Vista | Descripción |
|---|---|
| **Cuadrícula** | Muestra los archivos como miniaturas visuales. Las imágenes se muestran como previews; los vídeos y audios se representan con iconos. |
| **Lista** | Tabla al estilo explorador de ficheros con columnas: icono, nombre, fecha y tamaño. |

## Panel de propiedades

Al seleccionar un archivo (clic en su miniatura o fila), se abre un **panel lateral** a la derecha con:

- Preview grande del archivo.
- Nombre del archivo (editable).
- Tamaño del archivo.
- Dimensiones (solo para imágenes).
- Fecha de subida.

El panel se cierra pulsando la **"x"** en su esquina superior.

## Acciones sobre archivos

Desde el panel de propiedades o la galería, el GM puede realizar las siguientes acciones:

| Acción | Descripción |
|---|---|
| **Renombrar** | Cambia el nombre del archivo. El sistema valida que el nombre sea seguro (sin caracteres especiales ni rutas). |
| **Eliminar** | Borra el archivo con confirmación previa para evitar borrados accidentales. |
| **Copiar URL** | Copia al portapapeles la URL del archivo con un clic. Útil para pegarla en editores de texto enriquecido (descripciones de Retos, Misiones, etc.). |

## Subcarpeta player_images

Si la Aventura tiene Retos de tipo Compartir Foto donde los Players ya han subido imágenes, la Biblioteca muestra un acceso a la subcarpeta **`player_images/`**. Desde ahí el GM puede ver las fotos compartidas por los Players. El botón **Volver** o la miga de pan permite regresar al directorio principal.

## Espacio de almacenamiento

En la cabecera de la Biblioteca se muestra el **espacio total ocupado** por la Aventura, calculado recursivamente (incluyendo la subcarpeta `player_images/`). Este indicador ayuda al GM a controlar el consumo de su Licencia.

Cada Aventura tiene un límite de almacenamiento asociado a su Licencia. Si el espacio está agotado, cualquier intento de subida desde la Biblioteca (o desde cualquier formulario de la Aventura) mostrará el aviso **"Límite de almacenamiento alcanzado"**. Para liberar espacio, el GM puede eliminar archivos antiguos o ampliar su Licencia.

:::tip 👑 Para el Game Master
Usa la Biblioteca de Medios para centralizar todos los assets multimedia de tu Aventura. En lugar de subir la misma imagen varias veces en distintos Retos, súbela una vez a la Biblioteca y copia su URL para reutilizarla. Esto ahorra espacio y facilita la gestión.
:::

:::warning Biblioteca por Aventura
La Biblioteca de Medios **no es compartida** entre Aventuras. Cada Aventura tiene su propio espacio de archivos independiente.
:::

## Continúa aprendiendo

- Espacio y límites de almacenamiento: [Tokens y Licencias](../tokens.md).
- Retos que generan contenido multimedia: [Compartir Foto](../retos/subir-foto.md).
- Panel de monitorización con galería: [Game Board](../metricas/game-board.md).
