---
sidebar_position: 3
title: 📚 Conceptos Básicos
description: Conceptos básicos de AdventuriQ — Aventuras, Misiones, Retos, Objetos Digitales, GamePIN, Tokens, Licencias, Clanes y Dinámicas de juego. Todo lo que necesitas saber para crear y jugar.
keywords: [aventura, misión, reto, token, game pin, licencia, clanes, equipos, objetos digitales, dinámicas, gamificación, conceptos, adventuriq]
---

# Conceptos Básicos

:::info 🌐 Quién debe leer esto
**Todos los roles**: Game Master, Game Designer y Player.
:::

Antes de crear o jugar tu primera Aventura, conviene dominar los conceptos que vertebran AdventuriQ. Esta página es tu referencia rápida: cuando encuentres un término desconocido en el manual, vuelve aquí.

## 🏗️ La jerarquía: Aventura → Misión → Reto

Toda experiencia en AdventuriQ sigue una estructura de tres niveles:

```
AVENTURA → LISTADO DE MISIONES → LISTADO DE RETOS → PUNTOS + OBJETOS DIGITALES
```

- **Aventura**: la experiencia gamificada completa. Es lo que el Player ve y juega.
- **Misión**: una agrupación temática de Retos dentro de la Aventura.
- **Reto**: la prueba individual que el Player debe superar.
- Al completar Retos, el Player puede obtener **Puntos** y **Objetos Digitales** (pistas, badges, códigos…).

:::info Contenido mínimo
La unidad mínima que hay que crear en AdventuriQ es: **una Aventura** que contiene **una Misión** que contiene al menos **un Reto** de cualquier tipo.
:::

```
AVENTURA → MISIÓN 1 → RETO 1
```

:::tip Diagrama visual
Puedes ver la jerarquía representada gráficamente en el [diagrama de la página principal](/).
:::

## 📋 Misiones

Las Misiones agrupan los Retos de una Aventura en bloques temáticos. Piensa en ellas como **capítulos, etapas, temporadas, fases o niveles** según el diseño de tu experiencia.

![Listado de Misiones en el Gamifier — cada Misión muestra su imagen, orden, número de Retos y estado](/img/gamifier/conceptos/gamifier-listado-misiones.png)

Características principales:

- Se pueden **activar y desactivar automáticamente** en una ventana temporal (fecha y hora concreta).
- Se pueden **bloquear** con códigos QR o códigos alfanuméricos.
- Permiten la **entrega de Objetos Digitales** cuando el Player las finaliza.
- Comparten una posición en el **mapa** y una **tabla de clasificación**.

## ⚔️ Retos

El Reto es la prueba que el Player debe superar. AdventuriQ ofrece **10 tipos de Reto** para diseñar experiencias variadas:

![Pantalla de selección de tipo de Reto en el Gamifier](/img/gamifier/conceptos/gamifier-tipos-reto.png)

| Tipo | Descripción |
|---|---|
| **Pregunta / Respuesta** | Preguntas con opciones de respuesta múltiple |
| **Preguntas Encadenadas** | Lista de preguntas entregadas de forma continua, con factor tiempo |
| **Compartir Foto** | El Player toma o carga una foto que se comparte en la Galería |
| **Respuesta Libre** | El Player escribe libremente su respuesta en un campo de texto |
| **Llamada a la Acción** | Instrucciones para realizar una acción (puede requerir escaneo de QR) |
| **Respuesta Exacta** | El Player debe escribir una respuesta textual que coincida exactamente |
| **Pregunta / Respuesta con Audio** | Variante de Pregunta/Respuesta con una pista de audio integrada |
| **Pregunta / Respuesta con Vídeo** | Variante de Pregunta/Respuesta con una pista de vídeo integrada |
| **Ruleta de la Fortuna** | El Player gira una ruleta y obtiene puntos u objetos según la posición |
| **Nube de Palabras** | Agregación visual de las respuestas de todos los Players |

:::tip
Cada tipo de Reto se explica en detalle en su página dedicada dentro de la sección [Retos](/category/retos).
:::

Además, todos los Retos comparten estas capacidades comunes:

- Se pueden bloquear con **códigos QR**, **códigos alfanuméricos** o **geoposición** (latitud/longitud en Google Maps, con distancia mínima configurable).
- No existe un límite de Retos ni dentro de una Aventura, ni dentro de una Misión.
- Cada Reto puede otorgar **Puntos** y entregar **Objetos Digitales** de forma condicional.

## 🎁 Objetos Digitales

Los Objetos Digitales son elementos que el Player recibe al completar Retos o Misiones. Su significado depende del diseño de la Aventura: pueden representar una **recompensa, una pista, una felicitación, un código de desbloqueo** de otra Misión u otro Reto, un enlace externo, y más.

![Vista del Baúl en la Webapp — donde el Player consulta los Objetos Digitales que ha conseguido](/img/webapp/conceptos/webapp-baul.png)

Configuración:

- A **nivel de Reto**: entrega condicional (solo si el Player cumple ciertos criterios).
- A **nivel de Misión**: entrega directa al finalizar la Misión, con opción de asociarla a una **simulación de llamada telefónica**.

El Player consulta todos sus Objetos en el **Baúl**, accesible desde la Bitácora de la Webapp.

## 🔑 GamePIN — acceso a las Aventuras

Cada Aventura tiene un **GamePIN**: un código numérico único que el Player introduce en la Webapp para unirse a la Aventura. Es como la "llave de entrada" al juego.

El Game Master encuentra el GamePIN en la configuración de la Aventura dentro del Gamifier, junto con un **enlace directo** y un **código QR** que pueden compartirse con los Players.

## 🎟️ Tokens y Licencias

AdventuriQ utiliza dos elementos para gestionar el acceso a la plataforma:

- **Licencia**: permite al Game Master **crear Aventuras**. Sin licencia activa, no se pueden crear nuevas Aventuras.
- **Token**: permite al Player **jugar una Aventura**. Cada Player consume **un Token por cada partida** que inicia (incluido repetir una Aventura tras un Raze).

:::info Tokens y roles de prueba
Los Tokens **no se gastan** si juegas con un usuario que tenga rol de **Game Master** o que sea el **Game Designer** asignado a esa Aventura. Aprovecha esto para probar tus Aventuras antes de publicarlas.
:::

## 👥 Clanes (opcional)

Si una Aventura está configurada en modo **"Por Equipos"**, los Players se agrupan en **Clanes** (también llamados Equipos). Los Clanes tienen su propia puntuación conjunta y aparecen en el **Ranking global** de la Aventura.

En modo **Individual**, los Clanes no aplican. Esta es una funcionalidad opcional que depende del diseño del juego.

## 🏆 Dinámicas de juego

Según el diseño de la experiencia, puedes configurar diferentes dinámicas combinando la visibilidad de Puntos, Ranking y Objetos:

- **Aventura Competitiva**: con Puntos y Ranking visibles, feedback de obtención de Puntos.
- **Aventura Auto-competitiva**: con Puntos pero sin Ranking visible.
- **Aventura sin puntos visibles**: con entrega de Objetos Digitales y Baúl visible.
- **Aventuras mixtas**: diferentes combinaciones de las mecánicas anteriores.

## 🖥️ Componentes y zonas de contenido

AdventuriQ se compone de dos aplicaciones: el **Gamifier** (donde se crean las Aventuras) y la **Webapp** (donde se juegan). Para más detalles, consulta [¿Qué es AdventuriQ?](/).

Desde la perspectiva del Player, la Webapp se organiza en estas zonas principales:

![Bitácora del Player en la Webapp — panel central con Retos completados, Puntos y accesos a Baúl, Galería y Clasificación](/img/webapp/conceptos/webapp-bitacora.png)

- **Misiones y Retos**: donde el Player avanza resolviendo las pruebas de cada Misión.
- **Bitácora**: el panel personal del Player con su progreso (Retos realizados, Puntos), acceso al Baúl, Galería de fotos, Clasificación, Muro y Nube de Palabras.
- **Mapa**: visualización geográfica de los Retos geoposicionados.

Desde la perspectiva del Game Master, el contenido se introduce en cuatro zonas del Gamifier:

| Zona | Qué se configura |
|---|---|
| **Configurador de Aventura** | Tipo de juego, visibilidad, GamePIN, idioma, mapa, dinámicas |
| **Misiones** | Agrupación de Retos, temporización, bloqueos |
| **Retos** | Mecánicas de juego, puntos, geoposición |
| **Objetos Digitales** | Recompensas vinculadas a Misiones o Retos |

---

¿Todo claro? Continúa con la sección del [Gamifier](/category/gamifier) para aprender a crear tu primera Aventura.
