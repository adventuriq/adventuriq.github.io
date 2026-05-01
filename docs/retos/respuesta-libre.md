---
sidebar_position: 3
title: ✍️ Respuesta Libre
description: Reto abierto donde el Player escribe su respuesta en un campo de texto libre. El Game Master recoge las respuestas para revisarlas después.
keywords: [reto, respuesta-libre, texto, abierta, creatividad, encuesta, gamifier, webapp, adventuriq]
---

# ✍️ Respuesta Libre

<img src="/img/retos-iconos/reto-icon-respuesta-libre.png"
     alt="Icono del Reto Respuesta Libre"
     className="reto-icon" />

**Respuesta Libre** es un Reto abierto donde el Player escribe su respuesta en un campo de texto, sin validación automática. No hay respuesta correcta ni incorrecta — el objetivo es recoger la opinión, reflexión o creatividad del Player para que el Game Master la revise después. El sistema envía una copia al correo del Player y las respuestas se pueden consultar en el Game Board.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración del Reto en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

Casos de uso típicos: encuestas abiertas donde se quiere recoger opiniones del grupo, reflexiones escritas en formaciones (p. ej. "¿Qué has aprendido hoy?"), brainstorming textual donde cada Player aporta una idea y recogida de feedback cualitativo en eventos corporativos.

## Cómo funciona

El Game Master crea un Reto de tipo Respuesta Libre dentro de una Misión. Define el enunciado o pregunta (con imagen opcional) y configura los puntos que recibe el Player por responder o por no responder. No hay validación automática — cualquier texto que escriba el Player se acepta.

Cuando el Player abre el Reto, ve el enunciado y un área de texto donde escribir su respuesta. Pulsa "Continuar" para enviarla. El sistema envía automáticamente una copia al correo del Player y registra la respuesta. El Game Master puede consultar todas las respuestas desde la vista Game Board de las Métricas.

## Configuración del Reto en el Gamifier 👑

### Acceso al formulario

Para crear un Reto de Respuesta Libre, el Game Master abre una Aventura, entra en una Misión y pulsa **+ Nuevo Reto**. En el selector de tipos, selecciona la tarjeta **Respuesta Libre**. Se abre el formulario de edición con la mecánica específica de este tipo.

### Campos del formulario

Como cualquier Reto, Respuesta Libre comparte los campos comunes (cabecera, título, descripción, mapa, recompensas). La sección **Mecánica** específica de este tipo incluye:

| Campo | Descripción |
|---|---|
| **Puntos si responde** | Puntos que recibe el Player cuando escribe una respuesta y la envía. |
| **Puntos si no responde** | Puntos que recibe el Player si deja el campo en blanco. Permite incentivar la participación configurando 0 puntos aquí y puntos positivos en "Puntos si responde". |
| **Imagen en la cabecera** | Imagen de 1200×640 px que acompaña al enunciado. |
| **Enunciado pregunta** | Texto de la pregunta o propuesta en HTML enriquecido, traducible a los idiomas activos de la Aventura. |

![Formulario de edición de un Reto Respuesta Libre — puntos si responde, puntos si no responde y traducciones](/img/gamifier-reto-respuesta-libre-edicion.png)

:::tip 👑 Para el Game Master
Usa **"Puntos si no responde" = 0** y **"Puntos si responde"** con un valor alto para incentivar que los Players escriban. Si quieres que todos avancen sin penalización, pon puntos positivos en ambos campos pero mayor en "Puntos si responde".
:::

## Experiencia del Player 🎮

### Pantalla del Reto

Cuando el Player abre el Reto desde la Misión, ve la imagen de cabecera (si se ha configurado) seguida del enunciado de la pregunta y un **área de texto** con el placeholder "Escriba su respuesta". En la parte inferior aparece el botón **"Continuar"**.

![Vista móvil del Reto Respuesta Libre — enunciado, área de texto y botón Continuar](/img/webapp-reto-respuesta-libre-mobile.png)

### Flujo de juego

El Player escribe su respuesta en el área de texto y pulsa **"Continuar"**. El sistema registra la respuesta, asigna los puntos correspondientes y envía una **copia al correo electrónico** del Player con un código único generado por la plataforma y el texto de su respuesta.

Si el Player no escribe nada y pulsa "Continuar", recibe los puntos configurados en "Puntos si no responde" y avanza al siguiente Reto.

Las respuestas de todos los Players se pueden consultar desde la vista **Game Board** de las Métricas de la Aventura.

## Cuándo usar este Reto 💡

Respuesta Libre es ideal en estos escenarios: recogida de opiniones abiertas donde no hay una respuesta correcta predefinida, ejercicios de reflexión en formaciones donde el Player escribe lo que ha aprendido y encuestas cualitativas donde se quiere recoger feedback textual del grupo.

Cuándo **no** es la mejor elección: si necesitas validar automáticamente la respuesta contra un valor exacto, usa **[Respuesta Exacta](./respuesta-exacta.md)**; si quieres opciones cerradas con feedback inmediato, usa **[Pregunta / Respuesta](./pregunta-respuesta.md)**; si prefieres recoger ideas del grupo de forma visual, usa **[Nube de Palabras](./nube-de-palabras.md)**.

:::tip 💡 Consejo de diseño
Formula la pregunta de forma que invite a escribir más de una palabra. En lugar de "¿Te ha gustado?", prueba "¿Qué es lo que más te ha sorprendido de la sesión de hoy y por qué?". Las preguntas abiertas y específicas generan respuestas más ricas.
:::

## Continúa aprendiendo

- Catálogo completo de tipos en [Retos — los 10 tipos disponibles](./index.md).
- Validación automática de texto: [Respuesta Exacta](./respuesta-exacta.md).
- Recoger ideas del grupo visualmente: [Nube de Palabras](./nube-de-palabras.md).
- Evaluación con opciones cerradas: [Pregunta / Respuesta](./pregunta-respuesta.md).
