---
sidebar_position: 5
title: 📢 Llamada a la Acción
description: Reto que propone una acción al Player sin validación automática. El Game Master define una frase enriquecida con HTML y el Player confirma haberla completado.
keywords: [reto, llamada-a-la-accion, check-in, acción, gincana, gamifier, webapp, adventuriq]
---

# 📢 Llamada a la Acción

<img src="/img/retos-iconos/reto-icon-llamada-a-la-accion.png"
     alt="Icono del Reto Llamada a la Acción"
     className="reto-icon" />

**Llamada a la Acción** es un Reto que propone al Player una acción real — ir a un lugar, hacer algo, hablar con alguien — sin validación automática por parte del sistema. El Game Master redacta una frase en HTML enriquecido (con texto formateado, imágenes incrustadas o vídeos embebidos) y el Player simplemente confirma haberla completado pulsando "Continuar".

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración del Reto en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

Casos de uso típicos: gincanas y gymkanas donde se proponen acciones físicas ("dirígete a la salida norte y consigue un globo rojo"), retos de networking en eventos ("pregunta el nombre a alguien de otro equipo"), instrucciones de seguridad en formaciones industriales ("ponte el casco y hazte una foto") y cualquier dinámica donde la acción no se puede verificar digitalmente.

## Cómo funciona

El Game Master crea un Reto de tipo Llamada a la Acción dentro de una Misión. Redacta la frase que verá el Player usando un editor HTML enriquecido — puede incluir texto con formato, imágenes y vídeos embebidos (iFrames). Configura los puntos que recibe el Player al confirmar la acción y opcionalmente añade una imagen de cabecera.

Cuando el Player abre el Reto, ve la frase formateada con todo su contenido multimedia. Al pulsar "Continuar", confirma haber realizado la acción, recibe los puntos y avanza al siguiente Reto. No hay validación — el sistema confía en que el Player ha completado lo que se le pedía.

## Configuración del Reto en el Gamifier 👑

### Acceso al formulario

Para crear un Reto de Llamada a la Acción, el Game Master abre una Aventura, entra en una Misión y pulsa **+ Nuevo Reto**. En el selector de tipos, selecciona la tarjeta **Llamada a la Acción**. Se abre el formulario de edición con la mecánica específica de este tipo.

### Campos del formulario

Como cualquier Reto, Llamada a la Acción comparte los campos comunes (cabecera, título, descripción, mapa, recompensas). La sección **Mecánica** específica de este tipo incluye:

| Campo | Descripción |
|---|---|
| **Puntos si hace check-in** | Puntos que recibe el Player al acceder al Reto y confirmar la acción pulsando "Continuar". |
| **Imagen de cabecera** | Imagen de 1200×640 px que acompaña a la frase de acción. |
| **Frase que leerá el jugador cuando desbloquee el Reto** | Texto en HTML enriquecido, traducible a los idiomas activos de la Aventura. Admite formato, imágenes incrustadas e iFrames (p. ej. vídeos de YouTube). |

![Formulario de edición de un Reto Llamada a la Acción — puntos, imagen de cabecera y editor HTML con frase enriquecida](/img/gamifier-reto-llamada-a-la-accion-edicion.png)

### Editor HTML enriquecido

La frase de acción se edita con un editor WYSIWYG completo que incluye formato de texto (negrita, cursiva, subrayado, tachado), listas, alineación, fuentes, tamaños, colores e inserción de imágenes y tablas. También permite editar directamente el **código fuente HTML** para incrustar iFrames de vídeo u otro contenido embebido.

:::tip 👑 Para el Game Master
Aprovecha el editor HTML para crear instrucciones visualmente ricas. Puedes incrustar un vídeo de YouTube con las instrucciones de la acción, añadir una imagen de referencia de lo que el Player debe buscar o formatear el texto con colores y tamaños para destacar lo importante.
:::

## Experiencia del Player 🎮

### Pantalla del Reto

Cuando el Player abre el Reto desde la Misión, ve la frase de acción renderizada con todo su formato HTML: texto enriquecido, imágenes incrustadas y vídeos embebidos si los hay. En la parte inferior aparece el botón **"Continuar"**.

![Vista móvil del Reto Llamada a la Acción — frase HTML con texto formateado, vídeo embebido y botón Continuar](/img/webapp-reto-llamada-a-la-accion-mobile.png)

### Flujo de juego

El Player lee la propuesta de acción y la ejecuta en el mundo real (o no — no hay validación). Cuando pulsa **"Continuar"**, el sistema registra el check-in, asigna los puntos configurados y avanza al siguiente Reto de la Misión.

Si el Reto tiene un **Mapa** configurado con bloqueo por geolocalización o QR, el Player deberá estar en la ubicación correcta o escanear el código antes de poder acceder a la acción — esto añade una capa de verificación indirecta.

## Cuándo usar este Reto 💡

Llamada a la Acción es ideal en estos escenarios: gincanas y gymkanas donde se proponen acciones físicas que no se pueden validar digitalmente, instrucciones paso a paso donde el Player necesita leer contenido multimedia antes de continuar y puntos de control en recorridos donde basta con que el Player confirme haber llegado.

Cuándo **no** es la mejor elección: si necesitas que el Player demuestre que ha hecho algo con una foto, usa **[Subir Foto](./subir-foto.md)**; si quieres que escriba una respuesta, usa **[Respuesta Libre](./respuesta-libre.md)**; si necesitas validar conocimiento, usa **[Pregunta / Respuesta](./pregunta-respuesta.md)**.

:::tip 💡 Consejo de diseño
Combina este Reto con **bloqueo por geolocalización** o **bloqueo por QR** en la sección Mapa del Reto para añadir una verificación indirecta: el Player solo puede confirmar la acción si está en el lugar correcto o ha escaneado el código. Esto convierte una simple confirmación en una prueba real de presencia.
:::

## Continúa aprendiendo

- Catálogo completo de tipos en [Retos — los 10 tipos disponibles](./index.md).
- Acción con evidencia fotográfica: [Subir Foto](./subir-foto.md).
- Respuesta abierta del Player: [Respuesta Libre](./respuesta-libre.md).
- Evaluación con opciones cerradas: [Pregunta / Respuesta](./pregunta-respuesta.md).
