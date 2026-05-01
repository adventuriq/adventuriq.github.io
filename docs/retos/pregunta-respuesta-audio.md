---
sidebar_position: 7
title: 🎤 Pregunta/Respuesta con Audio
description: Variante de Pregunta/Respuesta donde el Player escucha una pista de audio antes de responder. El Game Master sube un archivo de audio por idioma y configura las opciones como en una P/R clásica.
keywords: [reto, pregunta-respuesta, audio, multi-idioma, reproductor, gamifier, webapp, adventuriq]
---

# 🎤 Pregunta/Respuesta con Audio

<img src="/img/retos-iconos/reto-icon-pregunta-respuesta-audio.png"
     alt="Icono del Reto Pregunta/Respuesta con Audio"
     className="reto-icon" />

La **Pregunta/Respuesta con Audio** es una variante del Reto Pregunta/Respuesta clásico que sustituye la imagen de cabecera por un **reproductor de audio**. El Player escucha una pista sonora — un fragmento de canción, una grabación, un efecto de sonido — y responde a la pregunta a partir de lo que ha oído.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración del Reto en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

Casos de uso típicos: identificar una canción o un instrumento a partir de un fragmento, reconocer un idioma o dialecto, responder preguntas sobre un podcast o una entrevista grabada y dinámicas de orientación donde el Player sigue pistas sonoras del entorno.

## Cómo funciona

El Game Master crea un Reto de tipo Pregunta/Respuesta con Audio dentro de una Misión. Configura la pregunta y las opciones de respuesta exactamente igual que en una Pregunta/Respuesta clásica, pero en lugar de subir una imagen de cabecera, sube un **archivo de audio por cada idioma** de la Aventura. El Player escuchará automáticamente la pista en su idioma.

Cuando el Player abre el Reto, ve un reproductor grande en la cabecera con estética tipo Spotify — botón circular de play, ecualizador animado y barra de progreso. Debajo aparece la pregunta con las opciones. El Player puede reproducir, pausar y reanudar el audio cuantas veces quiera antes de responder. Si el Game Master no subió audio para el idioma del Player, aparece un mensaje "Audio no disponible" y el Reto se juega solo con texto y opciones.

## Configuración del Reto en el Gamifier 👑

### Acceso al formulario

Para crear un Reto de Pregunta/Respuesta con Audio, el Game Master abre una Aventura, entra en una Misión y pulsa **+ Nuevo Reto**. En el selector de tipos de Reto aparecen los 10 tipos disponibles — seleccionar la tarjeta **Pregunta/Respuesta con Audio** (icono de auriculares).

![Selector de tipos de Reto — la tarjeta "Pregunta/Respuesta con Audio" aparece destacada con el icono de auriculares](/img/gamifier-reto-seleccion-tipo-pr-audio.png)

### Campos del formulario

Como cualquier Reto, la Pregunta/Respuesta con Audio comparte los campos comunes (cabecera, título, descripción, mapa, recompensas). La sección **Mecánica** específica de este tipo incluye:

| Campo | Descripción |
|---|---|
| **Archivo de audio** | Pista sonora que escuchará el Player en la cabecera del Reto. Se sube **uno por cada idioma** de la Aventura. Formato recomendado: MP3. |
| **Pregunta** | Texto que verá el Player debajo del reproductor. Soporta HTML enriquecido y se puede traducir a cada idioma. |
| **Opciones de respuesta** | Respuestas entre las que el Player elige. Se marca cuál es la correcta. Configuración idéntica a Pregunta/Respuesta clásica. |
| **Puntos** | Puntos otorgados al Player por acertar. |

Al crear el Reto, la mecánica nace ya con una **traducción de ejemplo** en el idioma por defecto de la Aventura, lista para personalizar.

![Formulario de edición de un Reto Pregunta/Respuesta con Audio — bloque de subida de audio por idioma, pregunta y opciones de respuesta](/img/gamifier-reto-pr-audio-edicion.png)

### Audio por idioma

El audio se gestiona dentro de la pestaña de cada idioma de la Aventura, junto con la pregunta y las opciones. El Game Master puede:

- **Subir** un archivo de audio arrastrándolo o seleccionándolo desde el explorador.
- **Previsualizar** la pista directamente en el editor antes de guardar.
- **Sustituir** el audio de un idioma sin afectar a los demás idiomas.
- **Eliminar** el audio de un idioma concreto pulsando el botón de eliminar.

![Previsualización del audio subido dentro del editor — reproductor integrado con los controles de play y la duración del archivo](/img/gamifier-reto-pr-audio-preview.png)

:::tip 👑 Para el Game Master
Sube audios de entre **20 y 60 segundos**. Pistas más largas alargan el Reto y pueden frustrar al Player. Si usas fragmentos de canciones comerciales, asegúrate de disponer de los derechos de uso para compartirlos en tu Aventura.
:::

## Experiencia del Player 🎮

### Pantalla del Reto

Cuando el Player abre el Reto desde la Misión, ve un diseño adaptable a su dispositivo. En **móvil**, el reproductor de audio ocupa la cabecera y el panel con la pregunta y las opciones aparece debajo. En **escritorio**, el reproductor queda a la izquierda y el panel a la derecha.

![Vista móvil del Reto Pregunta/Respuesta con Audio — reproductor de audio en cabecera con botón de play, ecualizador, barra de progreso, pregunta y opciones de respuesta debajo](/img/webapp-reto-pr-audio-mobile.png)

El reproductor tiene estética tipo Spotify: un **botón circular grande** de play en el centro, un **ecualizador** que muestra la forma de onda del audio y una **barra de progreso** con el tiempo transcurrido y la duración total. Al pulsar play, el audio empieza a sonar y el botón muestra un halo pulsante que refuerza visualmente la reproducción.

El Player puede **pausar y reanudar** cuantas veces quiera antes de seleccionar una respuesta.

### Flujo de respuesta

El Player escucha la pista de audio y selecciona una de las opciones de respuesta. Al pulsar **Continuar**, se evalúa la respuesta.

**Si acierta**: la pantalla muestra feedback verde con la puntuación obtenida y avanza al siguiente Reto.

**Si falla**: aparece el feedback de fallo habitual y el Player continúa al siguiente Reto sin obtener puntos.

La mecánica de respuesta es idéntica a la de una Pregunta/Respuesta clásica — la diferencia está en el estímulo (audio en lugar de imagen), no en el flujo de evaluación.

:::info Audio no disponible
Si el Game Master no subió audio para el idioma del Player, la cabecera muestra un mensaje **"Audio no disponible"** en lugar del reproductor. El Reto sigue siendo jugable: el Player ve la pregunta y las opciones y puede responder con normalidad, solo sin la pista sonora.
:::

## Cuándo usar este Reto 💡

La Pregunta/Respuesta con Audio brilla en estos escenarios: identificar canciones, artistas o instrumentos a partir de un fragmento, dinámicas de reconocimiento de idiomas o dialectos y preguntas basadas en entrevistas, podcasts o grabaciones de campo.

Cuándo **no** es la mejor elección: si la pista es un vídeo, usa **Pregunta/Respuesta con Vídeo**; si no necesitas audio y solo quieres una imagen con opciones, usa **Pregunta/Respuesta** clásica; si necesitas que el Player escriba una respuesta exacta, usa **Respuesta Exacta**.

:::tip 💡 Consejo de diseño
Elige fragmentos de audio cortos y reconocibles. Un intro de 10 segundos de una canción funciona mejor que 3 minutos completos. Si la pista es difícil, deja una pista en el enunciado: *"Escucha el fragmento e identifica el instrumento principal"*.
:::

## Continúa aprendiendo

- Catálogo completo de tipos en [Retos — los 10 tipos disponibles](./index.md).
- Variante con vídeo: [Pregunta/Respuesta con Vídeo](./pregunta-respuesta-video.md).
- Mecánica base sin audio ni vídeo: Pregunta/Respuesta.
