---
sidebar_position: 8
title: 🎬 Pregunta/Respuesta con Vídeo
description: Variante de Pregunta/Respuesta donde el Player ve un vídeo antes de responder. El Game Master sube un archivo de vídeo por idioma y configura las opciones como en una P/R clásica.
keywords: [reto, pregunta-respuesta, video, multi-idioma, reproductor, countdown, gamifier, webapp, adventuriq]
---

# 🎬 Pregunta/Respuesta con Vídeo

<img src="/img/retos-iconos/reto-icon-pregunta-respuesta-video.png"
     alt="Icono del Reto Pregunta/Respuesta con Vídeo"
     className="reto-icon" />

La **Pregunta/Respuesta con Vídeo** es una variante del Reto Pregunta/Respuesta clásico que sustituye la imagen de cabecera por un **reproductor de vídeo**. El Player ve un vídeo — un clip formativo, una escena, una demostración — y responde a la pregunta a partir de lo que ha visto.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración del Reto en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

Casos de uso típicos: preguntas sobre escenas de un vídeo formativo, análisis de situaciones grabadas en entornos corporativos, identificación de elementos visuales en un clip y dinámicas de team-building basadas en contenido audiovisual compartido.

## Cómo funciona

El Game Master crea un Reto de tipo Pregunta/Respuesta con Vídeo dentro de una Misión. Configura la pregunta y las opciones de respuesta exactamente igual que en una Pregunta/Respuesta clásica, pero en lugar de subir una imagen de cabecera, sube un **archivo de vídeo por cada idioma** de la Aventura. Opcionalmente puede activar un **contador de tiempo límite** y la opción de **ejecución única**.

Cuando el Player abre el Reto, ve el vídeo integrado en la cabecera con controles de reproducción y pantalla completa. Debajo (o a la derecha, en escritorio) aparece la pregunta con las opciones. El Player puede responder durante o después de ver el vídeo. Si el Game Master activó el contador, un anillo circular animado muestra el tiempo restante.

## Configuración del Reto en el Gamifier 👑

### Acceso al formulario

Para crear un Reto de Pregunta/Respuesta con Vídeo, el Game Master abre una Aventura, entra en una Misión y pulsa **+ Nuevo Reto**. En el selector de tipos de Reto aparecen los 10 tipos disponibles — seleccionar la tarjeta **Pregunta/Respuesta con Vídeo** (icono de cámara de vídeo).

![Selector de tipos de Reto — la tarjeta "Pregunta/Respuesta con Vídeo" aparece destacada con el icono de cámara](/img/gamifier-reto-seleccion-tipo-pr-video.png)

### Campos del formulario

Como cualquier Reto, la Pregunta/Respuesta con Vídeo comparte los campos comunes (cabecera, título, descripción, mapa, recompensas). La sección **Mecánica** específica de este tipo incluye:

| Campo | Descripción |
|---|---|
| **Archivo de vídeo** | Vídeo que verá el Player en la cabecera del Reto. Se sube **uno por cada idioma** de la Aventura. Formatos soportados: MP4, MPEG, AVI, MOV, WebM, MKV, M4V. Recomendado: MP4. |
| **Pregunta** | Texto que verá el Player junto al vídeo. Soporta HTML enriquecido y se puede traducir a cada idioma. |
| **Opciones de respuesta** | Respuestas entre las que el Player elige. Se marca cuál es la correcta. Configuración idéntica a Pregunta/Respuesta clásica. |
| **Contador (countdown)** | Tiempo límite opcional para responder. Si se activa, el Player ve un anillo circular animado con la cuenta atrás. |
| **Ejecución única** | Si se activa, el Player solo puede jugar este Reto una vez. |
| **Puntos** | Puntos otorgados al Player por acertar. |

Al crear el Reto, la mecánica nace ya con una **traducción de ejemplo** en el idioma por defecto de la Aventura, lista para personalizar.

![Formulario de edición de un Reto Pregunta/Respuesta con Vídeo — bloque de subida de vídeo por idioma, pregunta y opciones de respuesta](/img/gamifier-reto-pr-video-edicion.png)

### Vídeo por idioma

El vídeo se gestiona dentro de la pestaña de cada idioma de la Aventura, junto con la pregunta y las opciones. El Game Master puede:

- **Subir** un archivo de vídeo arrastrándolo o seleccionándolo desde el explorador. Hay que esperar a que termine la subida antes de guardar.
- **Previsualizar** el vídeo directamente en el editor con un reproductor integrado.
- **Sustituir** el vídeo de un idioma sin afectar a los demás idiomas.
- **Eliminar** el vídeo de un idioma concreto pulsando el botón de eliminar.

![Zona de subida de vídeo por idioma — reproductor de previsualización con el vídeo cargado y selector de idioma visible](/img/gamifier-reto-pr-video-preview.png)

:::tip 👑 Para el Game Master
Usa **MP4** siempre que puedas — es el formato con mejor compatibilidad en todos los dispositivos. Los vídeos consumen espacio de almacenamiento de tu organización, así que optimiza la resolución: 720p suele ser suficiente para móvil.
:::

## Experiencia del Player 🎮

### Pantalla del Reto

Cuando el Player abre el Reto desde la Misión, ve un diseño adaptable a su dispositivo. En **móvil**, el vídeo ocupa la parte superior (aproximadamente un tercio de la pantalla) y el panel con la pregunta y las opciones aparece debajo con scroll. En **escritorio**, el vídeo queda a la izquierda y el panel a la derecha.

![Vista móvil del Reto Pregunta/Respuesta con Vídeo — vídeo en la parte superior, pregunta y opciones de respuesta debajo](/img/webapp-reto-pr-video-mobile.png)

El reproductor de vídeo ofrece controles estándar: **play/pause**, **barra de progreso** y **pantalla completa**. El Player puede ver el vídeo completo antes de responder o empezar a responder mientras se reproduce.

Si el Game Master activó el contador de tiempo límite, aparece un **anillo circular animado** que muestra visualmente el tiempo restante. Este contador sustituye al texto plano anterior y se aplica también a otros Retos de la familia Pregunta/Respuesta.

### Flujo de respuesta

El Player ve el vídeo y selecciona una de las opciones de respuesta. Al pulsar **Continuar**, se evalúa la respuesta.

**Si acierta**: la pantalla muestra feedback verde con la puntuación obtenida y avanza al siguiente Reto.

**Si falla**: aparece el feedback de fallo habitual y el Player continúa al siguiente Reto sin obtener puntos.

Si el contador llega a cero antes de que el Player responda, se registra como fallo automáticamente.

La mecánica de respuesta es idéntica a la de una Pregunta/Respuesta clásica — la diferencia está en el estímulo (vídeo en lugar de imagen), no en el flujo de evaluación.

:::warning Ejecución única
Si el Game Master activó la opción de ejecución única, el Player solo tiene **una oportunidad** para jugar este Reto. Si falla o se le acaba el tiempo, no podrá volver a intentarlo.
:::

## Cuándo usar este Reto 💡

La Pregunta/Respuesta con Vídeo brilla en estos escenarios: preguntas sobre contenido de un vídeo formativo o corporativo, análisis de escenas o situaciones grabadas y dinámicas donde el contenido visual en movimiento aporta contexto que una imagen estática no puede dar.

Cuándo **no** es la mejor elección: si la pista es solo audio (una canción, un sonido), usa **[Pregunta/Respuesta con Audio](./pregunta-respuesta-audio.md)**; si no necesitas multimedia y solo quieres una imagen con opciones, usa **Pregunta/Respuesta** clásica; si necesitas que el Player escriba una respuesta exacta, usa **[Respuesta Exacta](./respuesta-exacta.md)**.

:::tip 💡 Consejo de diseño
Vídeos cortos (30-90 segundos) mantienen la atención del Player. Si el vídeo es largo, formula la pregunta de forma que el Player sepa qué buscar antes de darle al play: *"Mira el vídeo y cuenta cuántas veces aparece el logo"*.
:::

## Continúa aprendiendo

- Catálogo completo de tipos en [Retos — los 10 tipos disponibles](./index.md).
- Variante con audio: [Pregunta/Respuesta con Audio](./pregunta-respuesta-audio.md).
- Mecánica base sin multimedia: Pregunta/Respuesta.
