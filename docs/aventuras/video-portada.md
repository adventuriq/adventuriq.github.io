---
sidebar_position: 5.5
title: 🎬 Vídeo de portada
description: Sube tu propio vídeo para la portada de una Aventura, una Misión o un Reto, uno por idioma, y decide si ocupa toda la pantalla del Player. Sin interfaz ni marca de YouTube.
keywords: [vídeo, video, portada, pantalla completa, media library, idiomas, youtube, aventura, misión, reto, gamifier, webapp, adventuriq]
---

# 🎬 Vídeo de portada

:::info 🛠️ Quién puede hacer esto
**Game Master** y **Game Designer** (bajo supervisión del GM).
:::

Puedes subir **tu propio vídeo** para la portada de una Aventura, en lugar de enlazar uno de YouTube, y decidir si ocupa **toda la pantalla** del Player. Se sube igual que el vídeo de finalización: uno por idioma, o el mismo para todos. Las **Misiones** y los **Retos** también pueden tener el suyo.

## 🎯 Para qué sirve

Hasta ahora la portada solo podía mostrar un vídeo alojado en YouTube. Eso te obligaba a publicarlo fuera de AdventuriQ y el Player veía la interfaz y la marca de YouTube. Con tu propio vídeo:

- La portada se siente **parte de tu Aventura**, sin elementos ajenos.
- Puedes hacer una **intro a pantalla completa**, como el arranque de un videojuego, tanto en vertical como en horizontal.
- Cada idioma puede tener **su versión** del vídeo.

:::note Antes de empezar
- La Aventura (o la Misión, o el Reto) tiene que estar **ya creada y guardada**: el bloque de vídeo no aparece mientras la estás creando.
- Necesitas al menos un **idioma** configurado.
- El vídeo debe estar en formato **MP4, WEBM, MOV u OGG**.
- El vídeo ocupa **espacio de tu licencia o contrato**, como cualquier otro archivo. Si no queda espacio, la subida se rechaza avisándote del límite.
:::

## 📍 Dónde se configura

El vídeo de portada tiene dos partes en el editor:

1. **Las opciones de la portada**, junto a las imágenes: el interruptor **Portada a pantalla completa** y el botón **Usar el mismo vídeo en todos los idiomas**.
2. **El vídeo de cada idioma**, en el bloque **Traducciones**: el campo **Vídeo de portada**, justo encima del campo **Id Video Youtube**.

![Opciones del vídeo de portada de la Aventura: interruptor Portada a pantalla completa y botón Usar el mismo vídeo en todos los idiomas](/img/gamifier-video-portada-opciones.png)

![Campo Vídeo de portada en la pestaña de un idioma, con los botones Nuevo vídeo y Media Library, encima del Id Video Youtube](/img/gamifier-video-portada-editor.png)

## ⚙️ Subir el vídeo de portada

1. Entra en **Aventuras** y abre la Aventura que quieras editar.
2. Baja hasta el bloque **Traducciones** y selecciona la pestaña del idioma.
3. En el campo **Vídeo de portada**, pulsa **Nuevo vídeo** y elige el archivo, o pulsa **Media Library** para reutilizar un vídeo ya subido a esta Aventura (la Media Library ahora permite elegir vídeos, no solo imágenes).
4. Al terminar la subida aparece un aviso de confirmación y, debajo, un **reproductor** para revisar el vídeo.
5. Repite en cada idioma, o pulsa **Usar el mismo vídeo en todos los idiomas** (en el bloque de opciones, fuera de las pestañas) para aplicar el mismo vídeo a todos de una vez.
6. Guarda la Aventura.

Para **quitar** el vídeo, pulsa **Eliminar vídeo** en la pestaña del idioma. La portada vuelve a mostrar el vídeo de YouTube si lo tenías configurado o, si no, la imagen de cabecera.

### ¿Y el vídeo de YouTube?

Sigue funcionando como antes. Si en un idioma hay un vídeo subido, **ese tiene prioridad** y el editor te lo indica bajo el campo de YouTube. El orden que se usa es:

1. El vídeo subido en el idioma del Player.
2. Si no hay, el vídeo subido en el idioma por defecto de la Aventura.
3. Si no hay, el vídeo de YouTube del idioma del Player.
4. Si tampoco, la imagen de cabecera.

## 🖥️ Portada a pantalla completa

Activa el interruptor **Portada a pantalla completa** y guarda. La portada pasa a ser **únicamente el vídeo**, sin título, fechas ni descripción.

- Puedes activarlo **aunque todavía no hayas subido el vídeo**: el editor te avisa de que la opción se guarda pero no tendrá efecto hasta que subas uno, y deja una advertencia visible bajo el interruptor.
- Si está activado pero no hay vídeo en ningún idioma, la portada se muestra como siempre (imagen o vídeo de YouTube): **nunca queda en negro**.

:::caution La pantalla completa oculta el resto de la portada
Con esta opción el Player no ve el título, las fechas ni la descripción de la Aventura antes de entrar. Si esa información es importante, deja la opción desactivada.
:::

## 📋 Vídeo de portada en Misiones y Retos

Las Misiones y los Retos tienen el mismo bloque, con las mismas opciones: un vídeo por idioma en **Traducciones**, el botón **Media Library**, **Usar el mismo vídeo en todos los idiomas** y **Portada a pantalla completa**.

- **Misión**: lo encuentras en el editor de la Misión. Más detalle en [Contenido e Imágenes de la Misión](../misiones/contenido-imagenes.md).
- **Reto**: lo encuentras en el editor de cualquier Reto, junto a sus imágenes.

![Opciones del vídeo de portada en el editor de un Reto, con el aviso sobre Mostrar detalle del Reto](/img/gamifier-reto-video-portada-opciones.png)

:::warning Retos: depende de «Mostrar el detalle de los Retos»
Si la Misión que contiene el Reto tiene **desactivada** la opción **«Mostrar el detalle de los Retos»**, el Player entra directamente a la mecánica sin pasar por la portada, así que **no verá el vídeo**. La única excepción son los Retos geolocalizados, que siempre pasan por el detalle. El propio editor del Reto te lo recuerda.
:::

![Campo Vídeo de portada en la pestaña de idioma de un Reto, con el vídeo subido y su reproductor](/img/gamifier-reto-video-portada-editor.png)

## 🎮 Así lo verá el Player

Con la portada a pantalla completa, el vídeo ocupa toda la pantalla y arranca solo, tanto si es vertical como horizontal. El botón **Adelante** queda encima para entrar y la flecha de volver, siempre accesible.

![Portada de la Aventura a pantalla completa en la Webapp: vídeo vertical, botón de sonido, controles abajo a la izquierda y botón Adelante](/img/webapp-video-portada-fullscreen.png)

- El vídeo **intenta arrancar con sonido**. Si el navegador lo bloquea, arranca en silencio y el Player lo activa con el botón del **altavoz** (arriba a la derecha).
- Con los **controles** de abajo a la izquierda se puede volver a reproducir, pausar, detener o ir al final.
- El vídeo se reproduce **una vez, sin repetirse**, y se queda en el último fotograma. Al terminar, el botón **Adelante se ilumina** para indicar que ya puede continuar.

![Vídeo de portada terminado: el botón Adelante iluminado para continuar](/img/webapp-video-portada-boton-iluminado.png)

En las Misiones y los Retos funciona igual, con el botón de entrar encima del vídeo.

:::tip 🛠️ Pruébalo tú mismo
Entra en la Webapp con tu usuario de Game Master y abre la Aventura **desde el listado y desde el enlace directo**: así comprobarás cómo arranca el sonido en cada caso (ver la nota de abajo).
:::

## ⚠️ Cosas que conviene saber

- **El sonido al arrancar depende del navegador.** Los navegadores solo permiten reproducir con sonido si el Player ya ha interactuado con la página:
  - Llegando desde el listado de Aventuras o de Misiones: **normalmente suena**.
  - Entrando **por primera vez desde un enlace directo (GamePIN)**: arranca **en silencio**. A partir de la segunda visita suele sonar.
  - Diseña el vídeo para que se entienda también sin audio (por ejemplo, con texto o subtítulos incrustados).
- **En iPhone con el modo de bajo consumo activado**, el navegador puede bloquear incluso la reproducción automática en silencio. En ese caso aparece un botón de play en el centro para que el Player arranque el vídeo.
- **Formato recomendado: MP4 (H.264 + AAC)**, que reproducen todos los dispositivos. Procura que dure **menos de 15 segundos y pese menos de 10 MB**: el vídeo se descarga cada vez que el Player abre la portada y un vídeo pesado tarda en cargar con datos móviles.
- **Cuenta para el espacio de tu licencia.** Puede haber un vídeo por Aventura, uno por Misión y uno por Reto, y todos suman.
- **Eliminar el vídeo del campo no borra el archivo**: sigue ocupando espacio hasta que lo borres desde la [Biblioteca de Medios](../gamifier/biblioteca-de-medios.md).
- **Al duplicar una Aventura** se conserva el nombre del vídeo configurado, pero el archivo no se copia a la Aventura nueva: hay que volver a subirlo (igual que ocurre con las imágenes).
- **El botón de pantalla completa de los reproductores ya funciona** (antes la imagen se quedaba en negro). Afecta también a los Objetos Digitales de tipo vídeo, la Galería, el vídeo de finalización y el Reto de Pregunta/Respuesta con Vídeo.

## 📚 Continúa aprendiendo

- El resto de la configuración de la Aventura: [Configuración de una Aventura](./configuracion.md).
- Vídeo de portada de una Misión: [Contenido e Imágenes](../misiones/contenido-imagenes.md).
- Textos en varios idiomas: [Idiomas y Traducciones](./idiomas-traducciones.md).
- Gestionar y borrar archivos: [Biblioteca de Medios](../gamifier/biblioteca-de-medios.md).
