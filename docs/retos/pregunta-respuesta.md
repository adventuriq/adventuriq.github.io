---
sidebar_position: 1
title: ❓ Pregunta / Respuesta
description: Reto clásico de trivia donde el Player selecciona respuestas correctas entre opciones predefinidas. El Game Master configura preguntas, opciones, puntuación y comportamiento.
keywords: [reto, pregunta-respuesta, trivia, quiz, opciones, puntos, gamifier, webapp, adventuriq]
---

# ❓ Pregunta / Respuesta

<img src="/img/retos-iconos/reto-icon-pregunta-respuesta.png"
     alt="Icono del Reto Pregunta/Respuesta"
     className="reto-icon" />

**Pregunta / Respuesta** es el Reto más versátil y utilizado de AdventuriQ. El Game Master formula una pregunta y define un conjunto de respuestas posibles — una o varias correctas — y el Player selecciona la que cree acertada. Admite cuenta atrás, orden aleatorio, multirespuesta y feedback configurable.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración del Reto en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

Casos de uso típicos: tests de conocimiento en formaciones, trivias competitivas en eventos, evaluaciones rápidas en onboarding corporativo y dinámicas de grupo donde se quiere validar aprendizaje de forma inmediata.

## Cómo funciona

El Game Master crea un Reto de tipo Pregunta / Respuesta dentro de una Misión. Define la pregunta (con imagen opcional), añade las respuestas posibles marcando cuáles son correctas y configura el comportamiento: puntos por acierto y fallo, si se muestra la respuesta correcta al fallar, si admite multirespuesta y si las opciones aparecen en orden aleatorio.

Cuando el Player abre el Reto, ve la pregunta con su imagen de cabecera y las respuestas como botones de colores estilo Kahoot — cada uno con un icono geométrico distintivo (triángulo, cuadrado, círculo…). Selecciona su respuesta, pulsa "Continuar" y recibe feedback inmediato si el Game Master lo ha configurado. Los puntos se asignan automáticamente según el resultado.

## Configuración del Reto en el Gamifier 👑

### Acceso al formulario

Para crear un Reto de Pregunta / Respuesta, el Game Master abre una Aventura, entra en una Misión y pulsa **+ Nuevo Reto**. En el selector de tipos, selecciona la tarjeta **Pregunta / Respuesta**. Se abre el formulario de edición con la mecánica específica de este tipo.

### Campos del formulario

Como cualquier Reto, Pregunta / Respuesta comparte los campos comunes (cabecera, título, descripción, mapa, recompensas). La sección **Mecánica** específica de este tipo incluye:

| Campo | Descripción |
|---|---|
| **Puntos si acierta** | Puntos que recibe el Player al responder correctamente. Admite valores positivos y negativos. |
| **Puntos si falla** | Puntos que recibe el Player al responder incorrectamente. Admite valores positivos y negativos. |
| **Mostrar la respuesta correcta si se falla** | Toggle que muestra al Player cuál era la respuesta correcta tras fallar. Útil en contextos educativos. |
| **Es Multirespuesta** | Toggle que obliga al Player a marcar TODAS las respuestas correctas para considerar el Reto como acertado. |
| **Mostrar las respuestas en orden aleatorio** | Toggle que baraja el orden de las opciones en cada sesión de juego. |
| **Mostrar Correcto!/Incorrecto! en la pantalla de feedback** | Toggle que controla si se muestra feedback visual tras responder. Desactivarlo es útil en Aventuras narrativas. |
| **Puntuar cada respuesta de manera independiente** | Toggle que permite puntuar por cada respuesta individual en lugar de evaluar el conjunto como un todo. |
| **Imagen en la cabecera** | Imagen de 1200×640 px que aparece sobre la pregunta. Puede ser distinta de la imagen de cabecera del Reto. |

![Formulario de edición de un Reto Pregunta/Respuesta — sección de mecánica con puntos, toggles y traducciones](/img/gamifier-reto-pregunta-respuesta-mecanica.png)

### Respuestas

Debajo de los toggles, el Game Master configura las respuestas posibles:

**Traducciones**: cada pregunta y sus respuestas se traducen a los idiomas activos de la Aventura, con pestañas de banderas por idioma.

**Enunciado pregunta**: texto de la pregunta en HTML enriquecido.

**Respuestas**: se pueden añadir tantas como se necesite. Cada respuesta tiene un toggle **"Es correcta"** y un **#id** único (útil para condicionar la entrega de Recompensas según el ID de la respuesta elegida). Cada respuesta se puede eliminar individualmente.

:::tip 👑 Para el Game Master
Configura **"Puntos si falla"** con un valor positivo bajo (p. ej. 1) si quieres que el Player reciba puntos de participación incluso al fallar. Esto fomenta la participación en dinámicas donde no quieres penalizar el error.
:::

## Experiencia del Player 🎮

### Pantalla del Reto

Cuando el Player abre el Reto desde la Misión, ve la imagen de cabecera en la parte superior (si el Game Master la ha configurado), seguida del enunciado de la pregunta y las respuestas como **botones de colores** — cada uno con un icono geométrico distinto (triángulo, cuadrado, círculo…) al estilo Kahoot. En la parte inferior aparece el botón **"Continuar"**.

![Vista móvil del Reto Pregunta/Respuesta — pregunta con opciones de colores estilo Kahoot y botón Continuar](/img/webapp-reto-pregunta-respuesta-mobile.png)

### Flujo de juego

El Player selecciona una o varias respuestas (según la configuración) y pulsa **"Continuar"**. Si el Game Master ha activado la cuenta atrás, un cronómetro visible marca el tiempo restante — al agotarse, se evalúa automáticamente lo que el Player haya marcado.

Tras responder, si el feedback está activado, la pantalla muestra **"¡Correcto!"** o **"¡Incorrecto!"** con los puntos obtenidos. Si "Mostrar la respuesta correcta" está activado y el Player ha fallado, se resalta cuál era la opción correcta.

Si el Reto forma parte de una secuencia de Misión, el Player avanza automáticamente al siguiente Reto.

## Cuándo usar este Reto 💡

Pregunta / Respuesta es la elección natural en estos escenarios: formaciones donde se quiere evaluar conocimiento adquirido con feedback inmediato, trivias competitivas en eventos donde el ranking añade emoción y tests de onboarding donde se valida que el nuevo empleado ha asimilado información clave.

Cuándo **no** es la mejor elección: si necesitas que el Player escriba su propia respuesta, usa **[Respuesta Libre](./respuesta-libre.md)** o **[Respuesta Exacta](./respuesta-exacta.md)**; si quieres encadenar varias preguntas con bonificación por rapidez, usa **[Preguntas Encadenadas](./preguntas-encadenadas.md)**; si la pregunta incluye un audio o vídeo como enunciado, usa **[PR con Audio](./pregunta-respuesta-audio.md)** o **[PR con Vídeo](./pregunta-respuesta-video.md)**.

:::tip 💡 Consejo de diseño
Combina preguntas fáciles (para generar confianza) con preguntas difíciles (para generar desafío). Una Aventura donde todo es obvio aburre; una donde todo es imposible frustra. El equilibrio está en alternar dificultades.
:::

## Continúa aprendiendo

- Catálogo completo de tipos en [Retos — los 11 tipos disponibles](./index.md).
- Variante con bonificación por rapidez: [Preguntas Encadenadas](./preguntas-encadenadas.md).
- Variantes multimedia: [PR con Audio](./pregunta-respuesta-audio.md) · [PR con Vídeo](./pregunta-respuesta-video.md).
- Validación con texto libre: [Respuesta Exacta](./respuesta-exacta.md).
