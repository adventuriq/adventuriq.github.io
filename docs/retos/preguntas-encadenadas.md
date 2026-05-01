---
sidebar_position: 2
title: ⛓️ Preguntas Encadenadas
description: Reto que encadena varias Preguntas/Respuesta en secuencia, con puntos extra por rapidez y opción de aleatorizar el orden y la selección de preguntas.
keywords: [reto, preguntas-encadenadas, trivial, quiz, rapidez, cadena, gamifier, webapp, adventuriq]
---

# ⛓️ Preguntas Encadenadas

<img src="/img/retos-iconos/reto-icon-preguntas-encadenadas.png"
     alt="Icono del Reto Preguntas Encadenadas"
     className="reto-icon" />

**Preguntas Encadenadas** es un Reto que agrupa varios Retos de tipo Pregunta / Respuesta en una secuencia continua, entregados al Player uno tras otro sin feedback intermedio. Es el único tipo de Reto que puede otorgar **puntos extra por rapidez**: cuanto más rápido responda el Player, mayor bonificación recibe. Al finalizar la secuencia se muestra un resultado consolidado.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración del Reto en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

Casos de uso típicos: gincanas competitivas donde la velocidad importa tanto como el conocimiento, quiz contrarreloj en formaciones corporativas y trivias de equipo donde se quiere añadir presión temporal para aumentar la emoción.

## Cómo funciona

El Game Master crea un Reto de tipo Preguntas Encadenadas dentro de una Misión y enlaza uno o más Retos de tipo Pregunta / Respuesta ya existentes en la Aventura. Configura el porcentaje de puntos extra por rapidez, cuántas preguntas mostrar del total disponible y si el orden es fijo o aleatorio.

Cuando el Player abre el Reto, las preguntas enlazadas se presentan una a una en secuencia. El Player responde cada pregunta y pasa directamente a la siguiente. Al completar todas, se calcula la puntuación total: los puntos base de cada pregunta más la bonificación por rapidez, y se muestra el resultado consolidado.

## Configuración del Reto en el Gamifier 👑

### Acceso al formulario

Para crear un Reto de Preguntas Encadenadas, el Game Master abre una Aventura, entra en una Misión y pulsa **+ Nuevo Reto**. En el selector de tipos, selecciona la tarjeta **Preguntas Encadenadas**. Se abre el formulario de edición con la mecánica específica de este tipo.

### Campos del formulario

Como cualquier Reto, Preguntas Encadenadas comparte los campos comunes (cabecera, título, descripción, mapa, recompensas). La sección **Mecánica** específica de este tipo incluye:

| Campo | Descripción |
|---|---|
| **Porcentaje de puntos extra a sumar (solo si acierta)** | Slider de 0 a 100 % que define la bonificación por rapidez. El porcentaje se aplica sobre los puntos base de cada pregunta acertada, en función del tiempo que tarde el Player en responder. Si responde al instante, recibe el 100 % del bonus; si tarda mucho, el bonus tiende a cero. |
| **Preguntas a mostrar** | Número de preguntas que verá el Player. Si el valor es 0, se muestran TODAS las preguntas enlazadas. Si es N > 0, se eligen N preguntas aleatoriamente del total disponible. |
| **Orden de las preguntas** | Toggle que controla si las preguntas se muestran en el orden asignado o en orden aleatorio por jugador. |

![Formulario de edición de un Reto Preguntas Encadenadas — slider de porcentaje, preguntas a mostrar y retos enlazados](/img/gamifier-reto-preguntas-encadenadas-edicion.png)

### Retos Relacionados

Debajo de la configuración, aparece la sección **Retos Relacionados** donde el Game Master enlaza los Retos de tipo Pregunta / Respuesta que formarán parte de la cadena. Solo se pueden enlazar Retos de tipo P/R — no se admiten otros tipos.

De cada Reto enlazado se usa **únicamente la mecánica** (pregunta, respuestas, puntos). La cabecera, título y descripción del Reto P/R individual no se muestran al Player durante la secuencia encadenada.

Se pueden añadir tantos Retos P/R como se quiera, reordenarlos o desenlazarlos individualmente.

:::warning Recompensas en Retos enlazados
No tiene sentido configurar Recompensas en los Retos P/R que se van a usar dentro de Preguntas Encadenadas, ya que el Player no los jugará de forma individual. Las Recompensas deben configurarse a nivel del Reto Preguntas Encadenadas o de la Misión.
:::

:::tip 👑 Para el Game Master
Usa el campo **"Preguntas a mostrar"** con un valor menor al total de preguntas enlazadas para que cada Player reciba un subconjunto diferente. Por ejemplo, si enlazas 10 preguntas y configuras "Preguntas a mostrar: 5", cada Player responderá a 5 preguntas aleatorias — esto reduce las posibilidades de copiar entre compañeros.
:::

## Experiencia del Player 🎮

### Pantalla del Reto

Cuando el Player abre el Reto desde la Misión, las preguntas enlazadas se presentan una a una. Cada pregunta muestra el enunciado y las opciones de respuesta con el mismo estilo visual que un Reto Pregunta / Respuesta estándar — botones de colores con iconos geométricos. Un contador de progreso (p. ej. "1 / 3") indica en qué pregunta se encuentra el Player.

![Vista móvil del Reto Preguntas Encadenadas — pregunta con opciones de colores, imagen de cabecera y contador de progreso](/img/webapp-reto-preguntas-encadenadas-mobile.png)

### Flujo de juego

El Player responde cada pregunta y avanza directamente a la siguiente sin ver si ha acertado o fallado (no hay feedback intermedio). El ritmo es continuo, lo que genera sensación de velocidad y presión.

Al completar todas las preguntas de la secuencia, se calcula el resultado consolidado: los puntos base obtenidos por aciertos y fallos, más la bonificación por rapidez si el Game Master la ha configurado. El Player ve su puntuación total y avanza al siguiente Reto de la Misión.

## Cuándo usar este Reto 💡

Preguntas Encadenadas brilla en estos escenarios: gincanas competitivas donde se quiere premiar no solo el conocimiento sino también la velocidad, sesiones de repaso rápido donde se encadenan muchas preguntas para cubrir un temario amplio y actividades de team-building donde la presión temporal añade diversión.

Cuándo **no** es la mejor elección: si necesitas que el Player reciba feedback tras cada pregunta, usa Retos de **[Pregunta / Respuesta](./pregunta-respuesta.md)** individuales; si la evaluación no es de opciones cerradas, usa **[Respuesta Libre](./respuesta-libre.md)** o **[Respuesta Exacta](./respuesta-exacta.md)**.

:::tip 💡 Consejo de diseño
Configura el slider de bonificación al 50 % como punto de partida. Un porcentaje demasiado alto (100 %) puede hacer que la rapidez pese más que el conocimiento; demasiado bajo (10 %) hace que la bonificación sea irrelevante. Ajusta según lo competitiva que quieras la dinámica.
:::

## Continúa aprendiendo

- Catálogo completo de tipos en [Retos — los 10 tipos disponibles](./index.md).
- Mecánica base que se encadena: [Pregunta / Respuesta](./pregunta-respuesta.md).
- Evaluación con texto libre: [Respuesta Exacta](./respuesta-exacta.md).
