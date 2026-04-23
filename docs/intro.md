---
slug: /
sidebar_position: 1
title: ¿Qué es AdventuriQ?
description: AdventuriQ es una plataforma de gamificación para crear aventuras interactivas. Ideal para turismo, RRHH, educación y eventos corporativos.
keywords: [adventuriq, gamificación, aventuras, plataforma gamificación, turismo gamificado, team building, retos, misiones, webapp, gamifier]
---

# ¿Qué es AdventuriQ?

:::info 🌐 Quién puede leer esto
**Todos los roles**: Game Master, Game Designer y Player.
:::

AdventuriQ es una plataforma tecnológica de **Gamificación** que permite crear **Aventuras** usando mecánicas y componentes de juego. Los participantes juegan desde un navegador web en sus móviles, tablets u ordenadores — sin necesidad de instalar nada.

Con AdventuriQ puedes diseñar experiencias interactivas completas: desde yincanas turísticas hasta formaciones corporativas gamificadas, pasando por eventos de team building o actividades educativas.

## Los cuatro roles

Dependiendo de lo que necesites hacer, usarás AdventuriQ con uno de estos roles:

| Icono | Rol | Qué hace | Accede a |
|---|---|---|---|
| 👑 | **Game Master** | Compra licencias y tokens, crea Aventuras, gestiona Game Designers | Gamifier |
| 🛠️ | **Game Designer** | Diseña y configura Aventuras bajo supervisión de un Game Master | Gamifier |
| 🎮 | **Player** | Juega las Aventuras | Webapp |

:::tip
Si acabas de llegar, lo más probable es que seas **Game Master** (creas tus propias Aventuras) o **Player** (juegas Aventuras que otros han creado).
:::

## Las dos partes de AdventuriQ

AdventuriQ se compone de dos aplicaciones web:

| Componente | URL | Para quién | Descripción |
|---|---|---|---|
| **Gamifier** | [gamifier.adventuriq.com](https://gamifier.adventuriq.com) | Game Master / Game Designer | Administrador de contenidos donde se crean y configuran las Aventuras |
| **Webapp** | [webapp.adventuriq.com](https://webapp.adventuriq.com) | Player | Progressive Web App donde los jugadores participan en las Aventuras |

### Gamifier — donde se crean las Aventuras

Desde el Gamifier, el Game Master y el Game Designer diseñan toda la experiencia: crean Aventuras, organizan Misiones, configuran Retos y asignan recompensas. Se puede usar desde escritorio, tablet o móvil.

![Vista general del Gamifier — listado de Aventuras](/img/gamifier/intro/gamifier-vista-general.png)

### Webapp — donde se juegan las Aventuras

La Webapp es la aplicación que usan los Players. Desde ahí acceden a las Aventuras, completan Retos, acumulan puntos y consultan su progreso en la Bitácora.

![Vista de la Webapp — Bitácora del Player en formato móvil](/img/webapp/intro/webapp-vista-player.png)

## La jerarquía: Aventura → Misión → Reto

Toda experiencia en AdventuriQ sigue una estructura jerárquica de tres niveles:

```mermaid
flowchart TD
    A["🎮 Aventura"]:::aventura --> M1["📋 Misión 1"]:::mision
    A --> M2["📋 Misión N"]:::mision
    M1 --> R1["⚔️ Reto 1"]:::reto
    M1 --> R2["⚔️ Reto N"]:::reto
    M2 --> R3["⚔️ Retos..."]:::reto
    R1 --> P["🏆 Puntos"]:::objeto
    R1 --> O["🎁 Objeto Digital"]:::objeto

    classDef aventura fill:#2d324f,stroke:#2d324f,color:#fff
    classDef mision fill:#4a5078,stroke:#2d324f,color:#fff
    classDef reto fill:#fc4a27,stroke:#2d324f,color:#fff
    classDef objeto fill:#ffeedd,stroke:#fc4a27,color:#2d324f
```

- **Aventura**: la experiencia gamificada completa. Es lo que el Player ve y juega.
- **Misión**: una agrupación temática de Retos dentro de la Aventura. Permite organizar el contenido por fases o temas.
- **Reto**: la prueba individual que el Player debe superar. Puede ser una pregunta, una foto, un QR, una respuesta libre y más.
- Al completar Retos, el Player obtiene **Puntos**, **Objetos Digitales** (pistas, badges, códigos…) y otras recompensas.

## Casos de uso

AdventuriQ se adapta a múltiples contextos. Estos son los más habituales:

| Caso de uso | Ejemplo |
|---|---|
| **Turismo** | Yincanas urbanas, rutas culturales gamificadas, escape rooms al aire libre |
| **Team Building** | Dinámicas de equipo con retos colaborativos y clasificación en tiempo real |
| **Educación** | Micro-aprendizaje interactivo, evaluaciones gamificadas, gymkanas escolares |
| **Eventos corporativos** | Actividades para congresos, ferias o convenciones con engagement digital |
| **RRHH y Onboarding** | Procesos de incorporación gamificados, formaciones internas interactivas |

## Cómo usar este manual

Este manual te guiará por todas las funcionalidades de AdventuriQ. Algunos consejos para aprovecharlo al máximo:

- **Tenlo a mano** mientras navegas por el Gamifier o juegas en la Webapp.
- Cada página indica con un icono **quién puede hacer lo que se describe** (👑 Game Master, 🛠️ Game Designer, 🎮 Player).
- Usa el **buscador** de la barra superior para encontrar cualquier tema rápidamente.
- Recuerda hacer clic en **Guardar** cada vez que modifiques algo en el Gamifier.
- Sigue el orden del menú lateral para una lectura progresiva, o salta directamente al tema que necesites.

:::tip ¿Primera vez?
Te recomendamos empezar por [Conceptos básicos](conceptos-basicos) para entender la estructura de Aventuras, Misiones y Retos antes de lanzarte a crear.
:::
