---
sidebar_position: 11
title: 🎁 Objetos Digitales de Reto
description: Objetos Digitales entregados al completar un Reto en AdventuriQ — cómo asociar Objetos a un Reto y configurar sus Condiciones de Obtención con lógica AND/OR.
keywords: [reto, objeto digital, objeto, entrega, condiciones, obtención, AND, OR, resultado, gamifier, webapp, adventuriq]
---

# 🎁 Objetos Digitales de Reto

Cada Reto puede tener **Objetos Digitales** asociados que se entregan al Player cuando completa el Reto — siempre que se cumplan las **Condiciones de Obtención** configuradas en cada Objeto. A diferencia de los Objetos de Misión o de Aventura, los Objetos de Reto permiten entregar premios inmediatos tras cada prueba individual, con condiciones que pueden depender del resultado específico del Reto.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

## Sección Objetos en el Reto 👑

La sección **Objetos** se encuentra en el formulario de edición de cada Reto, con el listado de Objetos Digitales asociados. Funciona igual que en Misiones y Aventuras: se pueden crear nuevos Objetos, editar los existentes o eliminarlos.

| Acción | Descripción |
|---|---|
| **+ Nuevo Objeto** | Crea un nuevo Objeto Digital asociado al Reto. Se abre el formulario de edición del Objeto. |
| **Clic en el nombre** | Abre el formulario de edición del Objeto existente. |
| **Eliminar** (icono papelera) | Desvincula el Objeto del Reto. |

### Contenido de un Objeto Digital

Cada Objeto Digital se configura con imagen (JPG, PNG, GIF), vídeo (MP4), audio (MP3), traducciones multiidioma (título, descripción con HTML enriquecido) y opcionalmente un **Código Único** para control de unidades entregadas a nivel analógico. El editor del Objeto es idéntico en los tres niveles — para una descripción completa de todos los campos, consulta [Editor del Objeto Digital](../misiones/objetos-digitales.md#editor-del-objeto-digital).

## Cuándo se entregan los Objetos

La entrega de un Objeto Digital a nivel de Reto depende de **dos factores**:

1. **El Reto debe completarse** — el Player debe finalizar la interacción con el Reto (responder la pregunta, subir la foto, girar la ruleta, etc.).
2. **Las Condiciones de Obtención del Objeto deben cumplirse** — cada Objeto Digital tiene su propio conjunto de condiciones que determinan si efectivamente se entrega al Player.

Esto significa que **completar el Reto no garantiza recibir todos sus Objetos Digitales**. Un Objeto puede requerir, por ejemplo, un resultado concreto en el Reto o un mínimo de puntos obtenidos.

:::warning Diferencia clave con Misión y Aventura
A nivel de Reto, las condiciones de obtención pueden evaluar el **resultado específico** del Reto (si el Player ha acertado o no), además de los criterios de puntos y tiempo disponibles también a nivel de Misión y Aventura.
:::

## Condiciones de Obtención del Objeto 👑

Dentro del formulario de edición de cada Objeto Digital asociado a un Reto, se encuentra la sección **"Condiciones de Obtención del Objeto"**. El editor utiliza la misma lógica AND/OR de grupos que a nivel de Misión y Aventura.

### Comportamiento por defecto

Si no se añade ninguna condición, el Objeto Digital se entregará **siempre** que se complete el Reto.

### Editor AND/OR

Las condiciones se organizan en **grupos** con lógica AND dentro de cada grupo y OR entre grupos. Para una explicación detallada del editor AND/OR, cómo gestionar condiciones y ejemplos prácticos, consulta la documentación completa en [Objetos Digitales de Misión — Condiciones de Obtención](../misiones/objetos-digitales.md#condiciones-de-obtención-del-objeto-).

### Condiciones disponibles a nivel de Reto

Las condiciones a nivel de Reto incluyen los mismos criterios de puntos y tiempo que a nivel de Misión, más una condición exclusiva basada en el resultado del Reto:

| Condición | Valor requerido | Descripción |
|---|---|---|
| **Siempre** | — | El Objeto se entrega siempre al completar el Reto. Equivale a no tener condiciones. |
| **Si puntos obtenidos son =** | Número | El Player debe haber obtenido exactamente esa cantidad de puntos en este Reto. |
| **Si puntos obtenidos son &lt;** | Número | El Player debe haber obtenido menos de esa cantidad de puntos. |
| **Si puntos obtenidos son &lt;=** | Número | El Player debe haber obtenido esa cantidad de puntos o menos. |
| **Si puntos obtenidos son &gt;** | Número | El Player debe haber obtenido más de esa cantidad de puntos. |
| **Si puntos obtenidos son &gt;=** | Número | El Player debe haber obtenido esa cantidad de puntos o más. |
| **Si tiempo que ha transcurrido &gt;=** | Segundos | El Player debe haber tardado al menos ese número de segundos. |
| **Si tiempo transcurrido &lt;=** | Segundos | El Player debe haber tardado como máximo ese número de segundos. |
| **Nunca** | — | El Objeto no se entrega nunca. Útil para desactivar temporalmente. |
| **Dar hasta un máximo de "n"** | Número | El Objeto se entrega como máximo a "n" Players. Útil para stock limitado. |
| **Basada en resultado** | Según tipo de Reto | Evalúa el resultado concreto del Reto (si el Player ha acertado, cuántas respuestas correctas ha dado, etc.). Esta condición es **exclusiva del nivel de Reto** y no está disponible a nivel de Misión ni de Aventura. |

:::tip 👑 Para el Game Master
La condición **"Basada en resultado"** es muy potente para crear sistemas de recompensa granulares. Por ejemplo, en un Reto de Pregunta/Respuesta puedes configurar una medalla de oro si el Player acierta y una medalla de participación si falla — usando dos Objetos Digitales con condiciones distintas.
:::

## Diferencia con los Objetos de Misión y Aventura

| Característica | Nivel Reto | Nivel Misión | Nivel Aventura |
|---|---|---|---|
| **Momento de entrega** | Al completar el Reto | Al completar la Misión | Al completar la Aventura |
| **Condición exclusiva** | Basada en resultado del Reto | — | — |
| **Granularidad** | Control individual por prueba | Agregado de todos los Retos de la Misión | Agregado de toda la Aventura |
| **Caso de uso típico** | Pistas inmediatas, premios por acierto | Medallas de fase o capítulo | Certificados de finalización |
| **Notificaciones (llamadas)** | No disponible | Disponible | No disponible |

## Cómo lo ve el Player 🎮

Cuando el Player completa un Reto y cumple las Condiciones de Obtención de un Objeto Digital, este se presenta inmediatamente a pantalla completa con su imagen, título, descripción y un botón **Continuar** para avanzar al siguiente Reto o volver al listado de la Misión. El Objeto queda guardado en el **Baúl** del Player, accesible desde la Webapp.

## Continúa aprendiendo

- Editor del Objeto y condiciones AND/OR en detalle: [Objetos Digitales de Misión](../misiones/objetos-digitales.md).
- Objetos a nivel de Aventura: [Objetos Digitales de Aventura](../aventuras/objetos-digitales.md).
