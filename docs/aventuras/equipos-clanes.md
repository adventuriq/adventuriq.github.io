---
sidebar_position: 9
title: 👥 Equipos (Clanes)
description: Configuración de Equipos (Clanes) en AdventuriQ — cómo crear equipos, asignar Players, gestionar miembros y cómo afecta el modo Equipo a la Clasificación y la puntuación.
keywords: [aventura, equipos, clanes, modo equipo, clasificación, ranking, gamifier, webapp, adventuriq]
---

# 👥 Equipos (Clanes)

Las Aventuras pueden jugarse en dos modos: **Individual** o **Por Equipos**. En el modo Por Equipos, los Players se agrupan en **Clanes** y sus puntuaciones individuales se suman a la puntuación del equipo. Esto desbloquea clasificaciones adicionales y fomenta la colaboración entre los miembros del mismo Clan.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

## Modo de juego 👑

El modo de juego se establece en el formulario de edición de la Aventura, en la sección **Modo de Juego**. Las dos opciones son:

| Modo | Comportamiento |
|---|---|
| **Individual** | Cada Player compite por su cuenta. Solo existe clasificación individual. No se muestran Clanes. |
| **Por Equipos** | La puntuación individual se suma a la del Clan. Aparecen clasificaciones adicionales: dentro del Equipo y ranking global por Equipos. |

![Sección Modo de Juego configurada "En equipo" con Clanes — la captura muestra una Aventura en modo Por Equipos con Clanes configurados](/img/gamifier-modo-juego.png)

:::info
El modo de juego también se elige al [crear la Aventura](./crear-aventura.md) en el asistente inicial. Se puede cambiar posteriormente desde el formulario de configuración.
:::

## Crear y configurar un Equipo (Clan) 👑

Cuando la Aventura está en modo **Por Equipos**, aparece la sección de gestión de Clanes. El Game Master puede crear tantos Equipos como necesite.

### Campos de un Equipo

| Campo | Descripción |
|---|---|
| **Nombre del Equipo** | Nombre visible del Clan para el Player (ej. "Los Guardianes", "Equipo Rojo"). |
| **Descripción del Equipo** | Texto descriptivo. No se muestra en la Webapp — sirve como referencia interna o para storytelling del GM. |
| **Icono del Equipo** | Imagen que actúa como escudo o logo del Clan. Se muestra en el carrusel de selección de equipo de la Webapp. |

### Gestión de miembros

El Game Master puede asignar Players a un Clan manualmente desde el Gamifier. Para poder añadir un Player, este **debe haber empezado a jugar** la Aventura (haber introducido el GamePIN y consumido un Token).

Desde la gestión del Equipo, el GM puede desvincular miembros del Clan o eliminar el Equipo por completo. Los botones **Guardar** y **Eliminar** permiten gestionar los cambios.

:::tip 👑 Para el Game Master
Si prefieres que los Players elijan su equipo en lugar de asignarlos manualmente, publica la Aventura con los Clanes creados (con nombre e icono) pero sin asignar miembros. Los Players verán el carrusel de equipos en su Bitácora y podrán unirse al que prefieran.
:::

## Cómo elige el Player su equipo 🎮

Cuando la Aventura está en modo Equipo, el Player ve en su [Bitácora](./bitacora.md#equipo) el botón **"+ Unirse a un Equipo"** debajo de la cabecera. Al pulsarlo, aparece un **carrusel de tarjetas** con los equipos disponibles. Cada tarjeta muestra el escudo del equipo, su nombre y el número de miembros actuales, junto con un botón **"Unirme"**.

![Pantalla de selección de equipo — carrusel de tarjetas con el escudo, nombre y número de miembros de cada equipo disponible](/img/webapp-bitacora-equipo-unirse.png)

Si el Player ya pertenece a un equipo, el botón refleja esa pertenencia.

## Impacto en la Clasificación 🎮

El modo Equipo añade nuevas vistas a la Clasificación de la Bitácora:

**Clasificación dentro del Equipo**: ranking de los miembros del propio Clan, ordenados por puntuación individual. Permite ver cómo contribuye cada miembro al esfuerzo colectivo.

**Clasificación Global por Equipos**: ranking de todos los Clanes de la Aventura, ordenados por la suma de puntuaciones de sus miembros.

![Clasificación en la Webapp — ranking con posición, nombre y puntos de cada Player](/img/webapp-bitacora-clasificacion.png)

La puntuación individual del Player se suma automáticamente a la del Clan. Cada punto obtenido en un Reto contribuye tanto al ranking individual como al ranking del equipo.

## Relación con las Licencias

El modo Equipo tiene implicación en las [Licencias (Tokens)](../tokens.md). Una Aventura configurada en modo Equipo consume **el doble de Tokens** por Player que una Aventura individual, dado que gestiona tanto el ranking individual como el ranking por equipos.

## Continúa aprendiendo

- Selección de equipo en la Bitácora: [Bitácora del Player](./bitacora.md#equipo).
- Clasificación del Player: [Bitácora del Player](./bitacora.md#clasificación).
- Modo de juego en la creación: [Crear una Aventura](./crear-aventura.md).
- Condición de finalización por Clan: [Condiciones de Finalización](./condiciones-finalizacion.md).
