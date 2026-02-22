---
sidebar_position: 3
title: 📚 Conceptos Básicos
description: Conceptos básicos de AdventuriQ - Aventuras, Misiones, Retos, Tokens, Game Pin, Clanes, POI y más. Todo lo que necesitas saber para empezar.
keywords: [aventura, misión, reto, token, game pin, gamificación, conceptos]
---
# Conceptos Básicos

## Aventuras, Misiones y Retos

![Gamificación - aventuras interactivas con misiones y retos](/img/img-017.png)


Las **Aventuras** se organizan en **Misiones** que contienen **Retos** a superar.

```
AVENTURA → LISTADO DE MISIONES → LISTADO DE RETOS → PUNTOS + OBJETOS CONDICIONALES
```

- Un Reto puede otorgar **Puntos** y entregar (de manera condicional) **Objetos**.

## Contenido mínimo de una Aventura

:::info Contenido mínimo
La unidad mínima de elementos que hay que crear en AdventuriQ es: **Una Aventura** que contiene **una Misión** que contiene al menos **un Reto** de cualquier tipo.
:::

```
AVENTURA → MISIÓN 1 → RETO 1
```

## Sobre las Misiones

![Ejemplo de cabecera de Misión 1](/img/img-085.png)


- Las Misiones se pueden **activar/desactivar automáticamente** en una ventana temporal (Fecha/Hora) concreta.
- Se pueden **bloquear** con códigos QR y códigos alfanuméricos.
- Las podemos usar como **Capítulos, Etapas, Temporadas, Fases, Niveles**, etc.
- Permiten la **entrega de Objetos** cuando se finalizan.

## Sobre los Retos

- Se pueden bloquear con **códigos QR**, **códigos alfanuméricos** y **geoposicionar** en Google Maps, donde bloquearlos por distancia mínima a su posición (Latitud / Longitud).
- No existe un límite de retos ni dentro de una Aventura, ni dentro de una Misión.

### Los 5 tipos de Retos disponibles

![Ejemplo de cabecera de Misión 2](/img/img-088.png)


| Tipo | Descripción |
|---|---|
| **Pregunta/Respuestas** | Preguntas con opciones de respuesta múltiple |
| **Preguntas Encadenadas** | Saco de preguntas entregadas de manera continua |
| **Respuesta Libre** | El jugador escribe libremente su respuesta |
| **Llamada a la Acción** | Instrucciones para hacer algo fuera de AdventuriQ |
| **Compartir Foto** | Tomar o cargar una foto y compartirla en la galería |

## Sobre los Objetos

- Los Objetos son elementos que adquieren significado según el diseño de una Aventura.
- Pueden representar una **Recompensa, una Pista, una Felicitación, un Código de desbloqueo** de una Misión u otro Reto, etc.
- Su consecución se puede configurar a **nivel de Misión** (entrega directa al terminar) y a **nivel de Reto** (entrega condicional).
- A nivel de Misión, una recompensa se puede asociar a una **simulación de llamada telefónica**.

## Configuración de una Aventura

![Vista de una aventura desde la perspectiva del jugador](/img/img-064.png)


Según el diseño de la experiencia, puedes configurar diferentes dinámicas:

- **Aventura Competitiva**: con Puntos y Ranking visibles, feedback de obtención de Puntos.
- **Aventura Auto Competitiva**: con Puntos pero sin Ranking visible.
- **Aventura sin puntos visibles**: con entrega de Objetos y Baúl visible.
- **Aventuras mixtas**: diferentes combinaciones de mecánicas de juego.

## Componentes de una Aventura

| Componente | Descripción |
|---|---|
| **Misiones** | Organizan los Retos. Comparten posiciones en el mapa y tabla de clasificación. |
| **Retos** | Mecánicas de juego con descripción, ubicación y mecánica concreta. |
| **Objetos** | Elementos entregables: recompensas, premios, pistas, códigos de descuento, etc. |

## ¿Cómo introducir contenidos?

Existen cuatro zonas donde introducir los contenidos:

1. **Configurador de Aventura**: organización del tipo de juego y visibilidad.
2. **Misiones**: organización de los Retos y visibilidad.
3. **Retos**: mecánicas de juego.
4. **Objetos**: vinculados a una Misión o a un Reto.
