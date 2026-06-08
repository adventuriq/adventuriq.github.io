---
sidebar_position: 9
title: 🎰 Ruleta de la Fortuna
description: Reto de azar donde el Player gira una ruleta configurable y obtiene puntos o un Objeto Digital. El Game Master define porciones, pesos, recompensas y número de giros.
keywords: [reto, ruleta, azar, puntos, objetos-digitales, porciones, giros, gamifier, webapp, adventuriq]
---

# 🎰 Ruleta de la Fortuna

<img src="/img/retos-iconos/reto-icon-ruleta-de-la-fortuna.png"
     alt="Icono del Reto Ruleta de la Fortuna"
     className="reto-icon" />

La **Ruleta de la Fortuna** es un Reto basado en el azar donde el Player gira una ruleta y recibe un premio aleatorio: puntos (positivos o negativos) o un Objeto Digital. El Game Master diseña las porciones de la ruleta — cada una con su icono, color, texto, peso y recompensa — y decide cuántas veces puede girar el Player.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración del Reto en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

Casos de uso típicos: dinámicas de grupo donde se asignan roles o premios al azar, mecánicas de "caja misteriosa" en formaciones gamificadas, sistemas de recompensas aleatorias en eventos corporativos y actividades de team-building donde el factor suerte añade emoción.

## Cómo funciona

El Game Master crea un Reto de tipo Ruleta de la Fortuna dentro de una Misión. El Reto nace con 4 porciones de ejemplo que el Game Master personaliza: icono, color, peso (probabilidad relativa), texto por idioma y recompensa (puntos o un Objeto Digital). Puede añadir o eliminar porciones, configurar cuántos giros tiene el Player y activar la entrega única de objetos para evitar duplicados.

Cuando el Player abre el Reto, ve la ruleta dibujada con las porciones configuradas. Pulsa el botón "Girar" y la ruleta gira con animación de desaceleración y sonido de tick sincronizado. Al detenerse, se revela el premio con una mini-animación tipo "loot-box". Si hay más giros disponibles, el Player continúa girando y los puntos se acumulan. Al agotar los giros, se consolida el resultado y se avanza al siguiente Reto.

## Configuración del Reto en el Gamifier 👑

### Acceso al formulario

Para crear un Reto de Ruleta de la Fortuna, el Game Master abre una Aventura, entra en una Misión y pulsa **+ Nuevo Reto**. En el selector de tipos de Reto aparecen los 10 tipos disponibles — seleccionar la tarjeta **Ruleta de la Fortuna** (icono de ruleta). El Reto se crea automáticamente con **4 porciones de ejemplo** con iconos y colores aleatorios, listas para personalizar.

![Selector de tipos de Reto — la tarjeta "Ruleta de la Fortuna" aparece destacada con el icono de ruleta](/img/gamifier-reto-seleccion-tipo-ruleta.png)

### Campos del formulario

Como cualquier Reto, la Ruleta de la Fortuna comparte los campos comunes (cabecera, título, descripción, mapa, recompensas). La sección **Mecánica** específica de este tipo incluye:

| Campo | Descripción |
|---|---|
| **Porciones** | Cada porción de la ruleta se configura individualmente con icono, color, peso, texto por idioma y recompensa. Se pueden añadir o eliminar libremente. |
| **Icono** | Icono visual de la porción, seleccionable desde un popup flotante con iconos predefinidos. |
| **Color** | Color de la porción en la ruleta, elegido con un selector de color. |
| **Peso** | Número que define la probabilidad relativa de que esa porción salga. Cuanto mayor es el peso respecto al total, más probable es que la ruleta se detenga ahí. |
| **Texto** | Texto descriptivo de la porción, traducible a cada idioma de la Aventura. |
| **Recompensa** | Lo que recibe el Player si cae en esa porción: puntos positivos, puntos negativos o un Objeto Digital. |
| **Número de giros** | Cuántas veces puede girar el Player en este Reto. |
| **Entrega única de objetos** | Toggle que impide que un mismo Objeto Digital se entregue dos veces al mismo Player, incluso si vuelve a caer en esa porción. |

![Formulario de edición de un Reto Ruleta de la Fortuna — porciones con icono, color, peso, texto y recompensa](/img/gamifier-reto-ruleta-edicion.png)

### Porciones y recompensas

Cada porción define un resultado posible de la ruleta. El Game Master tiene tres opciones de recompensa por porción:

**Puntos positivos**: el Player suma puntos a su marcador. Es la opción más común para dinámicas competitivas.

**Puntos negativos**: el Player pierde puntos. Añade un componente de riesgo que hace más emocionante el giro.

**Objeto Digital**: el Player recibe un Objeto Digital que se guarda en su Baúl. Al seleccionar esta opción, se abre un modal con un grid visual de todos los Objetos Digitales de la Aventura — con imagen real y buscador — para elegir cuál entregar.

:::tip 👑 Para el Game Master
El **peso** de cada porción define su probabilidad relativa, no un porcentaje absoluto. Si tienes tres porciones con pesos 1, 1 y 2, la tercera saldrá aproximadamente el 50 % de las veces. El resultado lo calcula el servidor — no se puede manipular desde el dispositivo del Player.
:::

### Objetos digitales a entregar

El **Objeto digital** a entregar en una porción, **se tiene que crear en el propio reto** (Ruleta de la Fortuna) que se está diseñando y, lógicamente, tiene que existir previamente a la asignación de entrega del objeto por una porción de la ruleta.

Aún así, el buscador de Objetos digitales de la porción busca TODOS los objetos creados en la Aventura y también los puede entregar, independientemente de sus condiciones de obtención.

:::warning Condiciones de obtención
La **condición de obtención** de un Objeto digital dentro del propio reto "Ruleta de la Fortuna" y **asignado a una porción**, tiene que ser necesariamente **"Nunca"** (no entregar nunca) para que lo entregue la "suerte" de la propia ruleta y no las condiciones de finalización del propio reto.
:::

![Vista Gamifier Objeto digital del Reto Ruleta de la Fortuna — condiciones de entrega](/img/gamifier-reto-ruleta-condiciones-entrega-objeto.png)

**Resumen**: una porción que entregue un Objeto, puede entregar un Objeto propio o cualquiera que ya exista en la Aventura.



## Experiencia del Player 🎮

### Pantalla del Reto

Cuando el Player abre el Reto desde la Misión, ve la ruleta dibujada dinámicamente con las porciones configuradas por el Game Master: cada una muestra su icono, color y texto. En **móvil**, la ruleta ocupa la parte superior y el panel de información aparece debajo. En **escritorio**, la ruleta queda a la izquierda y el panel a la derecha.

![Vista móvil del Reto Ruleta de la Fortuna — ruleta con porciones de colores, iconos y botón de girar](/img/webapp-reto-ruleta-mobile.png)

Debajo de la ruleta (o junto a ella en escritorio) aparece el botón **"Girar"** que activa la animación.

### Flujo de juego

El Player pulsa **Girar** y la ruleta arranca con velocidad alta que va decreciendo con una curva de desaceleración natural. Mientras gira, se reproduce un **sonido de tick** cada vez que se cruza el borde de una porción, sincronizado con la velocidad real de la ruleta. La posición de la ruleta se conserva entre giros — no se reinicia al punto de partida.

Al detenerse, la cabecera muestra el feedback del resultado y se dispara una **mini-animación tipo "loot-box"**: un icono misterioso tiembla con intensidad creciente, hace un flash y revela el premio obtenido.

**Si el premio es un Objeto Digital**, se lanza la animación de revelación estándar de Premios seguida del carrusel del objeto obtenido, igual que cuando se entrega un Objeto Digital en cualquier otro contexto de AdventuriQ.

**Si el Player tiene más giros disponibles**, vuelve a ver el botón "Girar". Los puntos se van acumulando entre giros y solo al agotar todos los giros se registra el resultado consolidado.

**Si "Entrega única" está activada**, las porciones cuyo Objeto Digital ya se haya entregado al Player aparecen en **gris** a partir del tercer segundo tras el giro, dejando claro que ya no están disponibles. Los giros restantes solo podrán caer en porciones activas (con puntos o con Objetos aún no entregados).

:::warning Porciones agotadas
Si se activa "Entrega única de objetos" y todas las porciones con Objeto Digital ya se han entregado al Player, los giros restantes solo caerán en porciones con puntos. Las porciones agotadas siguen visibles en gris pero ya no son accesibles.
:::

## Cuándo usar este Reto 💡

La Ruleta de la Fortuna brilla en estos escenarios: dinámicas de grupo donde el azar añade emoción y rompe la rutina, sistemas de "caja misteriosa" que motivan al Player a participar por la expectativa del premio y asignación aleatoria de roles o recursos en actividades de team-building.

Cuándo **no** es la mejor elección: si necesitas evaluar conocimiento, usa **Pregunta/Respuesta** o **[Respuesta Exacta](./respuesta-exacta.md)**; si necesitas que el Player aporte contenido creativo, usa **Respuesta Libre** o **Subir Foto**; si quieres recoger ideas del grupo de forma visual, usa **[Nube de Palabras](./nube-de-palabras.md)**.

:::tip 💡 Consejo de diseño
Mezcla porciones de puntos positivos con alguna de puntos negativos o con un Objeto Digital raro para crear tensión y emoción en cada giro. Una ruleta donde todo es premio pierde la gracia — el riesgo de "perder" hace que ganar sea más satisfactorio.
:::

## Continúa aprendiendo

- Catálogo completo de tipos en [Retos — los 10 tipos disponibles](./index.md).
- Mecánica con evaluación de conocimiento: [Respuesta Exacta](./respuesta-exacta.md).
- Reto colaborativo visual: [Nube de Palabras](./nube-de-palabras.md).
