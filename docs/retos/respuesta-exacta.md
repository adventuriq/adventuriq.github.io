---
sidebar_position: 9
title: ✏️ Respuesta Exacta
description: Reto donde el Player debe escribir la palabra o frase exacta que ha configurado el Game Master. Admite reintentos con tramos de bonus decrecientes por intento.
keywords: [reto, respuesta-exacta, validacion, texto, reintentos, bonus, tramos, gamifier, webapp, adventuriq]
---

# ✏️ Respuesta Exacta

<img src="/img/retos-iconos/reto-icon-respuesta-exacta.png"
     alt="Icono del Reto Respuesta Exacta"
     className="reto-icon" />

La **Respuesta Exacta** es un tipo de Reto en el que el Player debe escribir exactamente la palabra o frase correcta en un campo de texto. El Game Master define la respuesta válida, el número de reintentos permitidos y un sistema de **tramos de bonus** que reduce la puntuación con cada intento fallido.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración del Reto en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

Casos de uso típicos: códigos secretos que el Player debe descubrir en un lugar físico, contraseñas ocultas en pistas previas, palabras clave al final de un recorrido formativo y respuestas concretas a acertijos donde solo vale la solución exacta.

## Cómo funciona

El Game Master crea un Reto de tipo Respuesta Exacta dentro de una Misión y escribe la palabra o frase que el Player debe acertar, en cada idioma de la Aventura. Configura cuántos reintentos permite y qué porcentaje de la puntuación se obtiene en cada intento mediante una tabla de **tramos de bonus** (por ejemplo: 100 % en el primer intento, 80 % en el segundo, 50 % en el tercero).

Cuando el Player abre el Reto, ve la pregunta y un campo de texto con el teclado ya abierto. Debajo del campo aparecen los tramos de bonus, resaltando el correspondiente al intento actual. Si acierta, recibe la puntuación del tramo activo y avanza. Si falla, el campo tiembla, aparece un mensaje de error temporal y el foco vuelve automáticamente al campo para que vuelva a intentarlo. Si agota todos los reintentos sin acertar, se registra fallo y continúa sin puntos.

## Configuración del Reto en el Gamifier 👑

### Acceso al formulario

Para crear un Reto de Respuesta Exacta, el Game Master abre una Aventura, entra en una Misión y pulsa **+ Nuevo Reto**. En el selector de tipos de Reto aparecen los 10 tipos disponibles — seleccionar la tarjeta **Respuesta Exacta**.

![Selector de tipos de Reto — la tarjeta "Respuesta Exacta" aparece destacada](/img/gamifier-reto-seleccion-tipo-respuesta-exacta.png)

### Campos del formulario

Como cualquier Reto, la Respuesta Exacta comparte los campos comunes (cabecera, título, descripción, mapa, recompensas). La sección **Mecánica** específica de este tipo incluye:

| Campo | Descripción |
|---|---|
| **Respuesta correcta** | Palabra o frase exacta que el Player debe escribir para acertar. Se configura por cada idioma de la Aventura. |
| **Pregunta** | Texto que verá el Player al abrir el Reto. Soporta HTML enriquecido y se puede traducir a cada idioma. |
| **Imagen de cabecera** | Imagen visible junto a la pregunta. Una por idioma. |
| **Reintentos permitidos** | Número de intentos adicionales tras el primero (por defecto 2 → hasta 3 intentos en total). |
| **Tramos de bonus por intento** | Tabla dinámica con el porcentaje de puntuación de cada intento. |

Al crear el Reto, la mecánica nace ya con una **traducción de ejemplo** en el idioma por defecto de la Aventura y los tramos por defecto (100, 80, 50), listos para personalizar.

![Formulario de edición de un Reto Respuesta Exacta — respuesta correcta, pregunta por idioma y configuración de reintentos](/img/gamifier-reto-respuesta-exacta-edicion.png)

### Tramos de bonus por intento

Los tramos de bonus determinan qué porcentaje de la recompensa máxima obtiene el Player según en qué intento acierta. La tabla es dinámica: el Game Master puede añadir o eliminar filas con los botones **+** y **–**.

![Tabla de tramos de bonus con tres filas — 100 %, 80 % y 50 % — y botones para añadir o eliminar tramos](/img/gamifier-reto-respuesta-exacta-tramos.png)

El cálculo de puntos es: **recompensa máxima × porcentaje del tramo actual ÷ 100**. Si el primer tramo es 100 %, el primer acierto da la recompensa completa.

:::tip 👑 Para el Game Master
Si configuras un único tramo con valor **0 %**, la sección de tramos se oculta por completo en la Webapp. Es útil cuando quieres que el Player valide una respuesta sin que vea porcentajes ni penalización por intento.
:::

### Comportamiento de la validación

La comparación de la respuesta es **exacta con tolerancia mínima**: se ignoran mayúsculas/minúsculas y espacios al inicio y al final, pero **no se ignoran acentos ni errores ortográficos**. Es importante que el Game Master elija respuestas cortas y unívocas — una palabra o frase muy concreta — para evitar frustraciones innecesarias.

:::warning Acentos y ortografía
Si la respuesta correcta es *"café"*, el Player que escriba *"cafe"* **no acertará**. Planifica respuestas que no dependan de caracteres especiales o avisa en el enunciado del formato esperado.
:::

## Experiencia del Player 🎮

### Pantalla del Reto

Cuando el Player abre el Reto desde la Misión, ve un diseño adaptable a su dispositivo: en **móvil**, la imagen de cabecera aparece arriba y el panel oscuro con la pregunta debajo; en **escritorio**, la imagen queda a la izquierda y el panel a la derecha. El panel usa un degradado dinámico basado en los colores de marca de la Aventura.

![Vista móvil del Reto Respuesta Exacta — imagen de cabecera, pregunta, campo de texto con el teclado abierto y tramos de bonus visibles debajo](/img/webapp-reto-respuesta-exacta-mobile.png)

![Vista escritorio del Reto Respuesta Exacta — imagen a la izquierda y panel oscuro con pregunta y campo de texto a la derecha](/img/webapp-reto-respuesta-exacta-desktop.png)

Debajo del campo de texto, el Player ve los **tramos de bonus** como etiquetas con el porcentaje de cada intento. El tramo correspondiente al intento actual aparece resaltado. Si hay muchos tramos, hacen salto de línea automático para no salirse de la pantalla.

El campo de texto tiene **autoenfoque**: al abrir el Reto, el teclado aparece automáticamente para que el Player pueda empezar a escribir sin tocar la pantalla.

### Flujo de respuesta

El Player escribe su respuesta y pulsa **Enviar**.

**Si acierta**: la pantalla muestra feedback verde permanente con la puntuación obtenida (recompensa × porcentaje del tramo actual). Tras un momento, avanza automáticamente al siguiente Reto.

![Feedback de acierto — mensaje verde con la puntuación obtenida según el tramo de bonus alcanzado](/img/webapp-reto-respuesta-exacta-acierto.png)

**Si falla**: el campo de texto tiembla (efecto shake), aparece un mensaje de error temporal y a los pocos segundos el foco vuelve automáticamente al campo para que el Player vuelva a intentarlo. El tramo de bonus avanza al siguiente, reduciendo la puntuación disponible.

![Estado de fallo — mensaje de error temporal y tramo siguiente resaltado](/img/webapp-reto-respuesta-exacta-fallo.png)

Si el Player agota todos los reintentos sin acertar, se registra fallo definitivo y continúa al siguiente Reto sin obtener puntos.

## Cuándo usar este Reto 💡

La Respuesta Exacta brilla en estos escenarios: códigos secretos o contraseñas que el Player descubre en el entorno físico (un cartel, un QR, una pista escondida), validación de conocimiento específico donde solo hay una respuesta posible (una fecha, un nombre propio, un término técnico) y acertijos o enigmas cuya solución es una palabra concreta.

Cuándo **no** es la mejor elección: si la respuesta admite variaciones o sinónimos, usa **Respuesta Libre** (se revisa manualmente); si quieres ofrecer opciones entre las que elegir, usa **Pregunta/Respuesta**; si necesitas una secuencia de preguntas con bonificación por rapidez, usa **Preguntas Encadenadas**.

:::tip 💡 Consejo de diseño
Elige respuestas cortas, sin acentos problemáticos ni ambigüedad. *"Roma"* funciona mejor que *"la ciudad de Roma"*. Si la respuesta tiene caracteres especiales, inclúyelos como pista en el enunciado: *"Escribe el nombre de la ciudad (una sola palabra, sin artículos)"*.
:::

## Continúa aprendiendo

- Catálogo completo de tipos en [Retos — los 10 tipos disponibles](./index.md).
- Mecánica similar sin validación automática: [Respuesta Libre](./respuesta-libre.md).
- Validación con opciones predefinidas: [Pregunta / Respuesta](./pregunta-respuesta.md).
