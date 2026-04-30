---
sidebar_position: 10
title: ☁️ Nube de Palabras
description: Reto colaborativo donde cada Player aporta una palabra y todas se agregan en una nube visual en tiempo real. Ideal para warm-ups, encuestas grupales y recogida de impresiones.
keywords: [reto, nube-de-palabras, mentimeter, tiempo-real, colaborativo, gamifier, webapp, adventuriq]
---

# ☁️ Nube de Palabras

<img src="/img/retos-iconos/reto-icon-nube-de-palabras.png"
     alt="Icono del Reto Nube de Palabras"
     className="reto-icon" />

La **Nube de Palabras** es un tipo de Reto colaborativo donde cada Player responde a una pregunta con **una sola palabra**. Todas las palabras de todos los Players se agregan automáticamente en una nube visual: las más repetidas aparecen más grandes y con colores más intensos.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración del Reto en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

Casos de uso típicos: warm-ups en eventos pidiendo una palabra que represente cómo llegan los participantes, recogida de impresiones tras una formación, encuestas abiertas con visualización inmediata y dinámicas de team-building para identificar valores compartidos del equipo.

## Cómo funciona

El Game Master crea un Reto de tipo Nube de Palabras dentro de una Misión y escribe la pregunta que verán los Players. Opcionalmente activa el toggle **"Activar Nube de Palabras en la bitácora"** en las Opciones de la Aventura para que los Players puedan ver la nube agregada desde su Bitácora.

Cuando el Player abre el Reto, escribe **una sola palabra** (sin espacios, máximo 30 caracteres) y la envía. Su palabra se suma automáticamente a las del resto de participantes.

Si el Game Master activó la visualización, el Player puede acceder en cualquier momento a la pestaña **Nube de Palabras** de su Bitácora para ver la nube en tiempo real, con las palabras más repetidas destacadas en tamaño y color.

## Configuración del Reto en el Gamifier 👑

### Acceso al formulario

Para crear un Reto de Nube de Palabras, el Game Master abre una Aventura, entra en una Misión y pulsa **+ Nuevo Reto**. En el selector de tipos de Reto aparecen los 10 tipos disponibles — seleccionar la tarjeta **Nube de Palabras** (icono de nube, última posición).

![Selector de tipos de Reto — la tarjeta "Nube de Palabras" aparece destacada en la esquina inferior derecha](/img/gamifier-reto-seleccion-tipo-nube-palabras.png)

### Campos del formulario

Como cualquier Reto, la Nube de Palabras comparte los campos comunes (cabecera, título, descripción, mapa, recompensas). La sección **Mecánica** específica de este tipo incluye:

| Campo | Descripción |
|---|---|
| **Pregunta** | Texto que verá el Player al abrir el Reto. Soporta HTML enriquecido y se puede traducir a cada idioma de la Aventura. |
| **Imagen de cabecera** | Imagen visible junto a la pregunta. Una por idioma. |
| **Puntos** | Puntos otorgados al Player por responder. |

Al crear el Reto, la mecánica nace ya con una **traducción de ejemplo** en el idioma por defecto de la Aventura, lista para editar.

![Formulario de edición de un Reto Nube de Palabras — breadcrumb de navegación, campos de visibilidad, localización, color del fondo y traducciones por idioma](/img/gamifier-reto-nube-palabras-edicion.png)

### Activar la visualización en la Bitácora del Player

Por defecto, los Players solo pueden responder al Reto pero **no ven la nube agregada**. Para que la pestaña aparezca en su Bitácora:

1. Volver a la Aventura.
2. En el bloque **Opciones de la Aventura**, activar el toggle **Activar Nube de Palabras en la bitácora**.
3. Guardar.

![Opciones de la Aventura — los 9 toggles disponibles, con "Activar Nube de Palabras en la bitácora" visible y activado en la esquina inferior derecha](/img/gamifier-aventura-toggle-nube-palabras.png)

A partir de ese momento, los Players verán en su Bitácora el cuadrante **Nube de Palabras**, desde donde podrán acceder a las nubes de todos los Retos de este tipo de la Aventura.

:::info Doble condición
La pestaña **Nube de Palabras** solo aparece en la Bitácora del Player si se cumplen **dos condiciones simultáneas**: el Game Master ha activado el toggle "Activar Nube de Palabras en la bitácora" en Opciones de la Aventura **y** la Aventura tiene al menos un Reto de tipo Nube de Palabras. Si solo se activa el toggle pero no hay Retos de este tipo, la pestaña no aparece.
:::

## Experiencia del Player 🎮

### Responder al Reto

Cuando el Player abre el Reto desde la Misión, ve la imagen de cabecera y la pregunta. Debajo, un campo de texto donde escribir **una sola palabra**.

![Pantalla del Reto Nube de Palabras — imagen de cabecera, pregunta "Escribe cómo te sientes jugando esta Aventura", campo de texto y botón Continuar](/img/webapp-reto-nube-palabras-respuesta.png)

Restricciones del campo: máximo 30 caracteres, sin espacios (si el Player intenta introducir un espacio, se ignora automáticamente) y una sola palabra por participación.

Al pulsar **Continuar**, la palabra se envía y se suma a las del resto de participantes.

### Ver la nube de palabras

Si el Game Master ha activado la visualización, el Player puede acceder a la nube desde su Bitácora:

1. Desde la Aventura, pulsar **Bitácora** en la barra inferior.
2. Pulsar el cuadrante **Nube de Palabras** (icono de nube).
3. Se muestra la lista de Retos de Nube de Palabras de la Aventura.

![Lista de Retos de tipo Nube de Palabras en la Bitácora — header "NUBE DE PALABRAS" con un reto disponible](/img/webapp-bitacora-nube-palabras-lista.png)

4. Pulsar el Reto cuya nube se quiera visualizar.

![Nube de palabras generada — las palabras más repetidas como "increíble", "feliz" o "emocionante" aparecen en mayor tamaño y color más intenso, con el contador "126 participantes" en la cabecera](/img/webapp-bitacora-nube-palabras-visual.png)

La nube tiene estas propiedades visuales: **tamaño de fuente** proporcional a la frecuencia de cada palabra (entre 14 y 72 px), **ocho colores distintos** según frecuencia (del gris claro para las menos repetidas al rojo intenso para las más populares), **grosor tipográfico** creciente con la frecuencia y un **contador de participantes** en la cabecera.

La nube se **actualiza automáticamente cada 8 segundos**. Puede haber un pequeño desfase entre el envío de una palabra y su aparición en la nube de los demás participantes.

## Cuándo usar este Reto 💡

La Nube de Palabras brilla en estos escenarios: recoger impresiones grupales en directo (al inicio o al final de una formación, pedir una palabra que resuma la sensación), warm-ups inclusivos donde todos pueden participar sin presión de "respuesta correcta" y visualizar consenso o diversidad (una nube con palabras concentradas muestra acuerdo, una nube dispersa muestra variedad).

Cuándo **no** es la mejor elección: si necesitas respuestas largas o argumentadas, usa **Respuesta Libre**; si necesitas validar conocimiento con respuesta correcta, usa **Pregunta/Respuesta** o **Respuesta Exacta**; si quieres competición individual con puntos por rapidez, usa **Preguntas Encadenadas**.

:::tip 💡 Consejo de diseño
Una pregunta abierta como *"En una palabra, ¿qué te llevas de hoy?"* funciona mejor que *"Escribe una palabra"* a secas. Cuanto más sugerente la pregunta, más rica la nube resultante.
:::

## Continúa aprendiendo

- Catálogo completo de tipos en [Retos — los 10 tipos disponibles](./index.md).
- Cómo el Player navega la Bitácora y accede a la pestaña de Nube de Palabras en [Bitácora del Player](../aventuras/bitacora.md).
