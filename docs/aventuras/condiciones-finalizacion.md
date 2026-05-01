---
sidebar_position: 7
title: 🏁 Condiciones de Finalización
description: Condiciones de Finalización de una Aventura en AdventuriQ — las 6 condiciones automáticas que determinan cuándo una Aventura se considera completada para el Player.
keywords: [aventura, condiciones, finalización, completar, misiones, puntos, tiempo, clan, gamifier, adventuriq]
---

# 🏁 Condiciones de Finalización

Las **Condiciones de Finalización** determinan cuándo una Aventura se considera completada para cada Player. AdventuriQ ofrece un sistema de condiciones configurables que permite al Game Master definir criterios de finalización adaptados al diseño de su experiencia gamificada.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

## Comportamiento por defecto

Si no se configura ninguna condición específica, la Aventura finaliza cuando el Player ha completado **todas las Misiones** que la componen. Este es el comportamiento estándar y el más habitual.

## Las 6 condiciones disponibles 👑

La Aventura puede finalizar automáticamente según **seis tipos de condiciones**. Se puede programar más de una condición simultáneamente.

| Condición | Valor | Descripción |
|---|---|---|
| **Si ha finalizado todas las Misiones** | — | La Aventura finaliza cuando el Player completa todas las Misiones. Es el comportamiento por defecto. |
| **Si ha finalizado las Misiones seleccionadas** | IDs de Misiones | La Aventura finaliza cuando el Player completa las Misiones específicas indicadas por su ID. Permite que algunas Misiones sean opcionales. |
| **Si ha finalizado un número de Misiones** | Número entero | La Aventura finaliza cuando el Player ha completado al menos N Misiones, sin importar cuáles. |
| **Si han transcurrido un número de segundos** | Segundos | La Aventura finaliza cuando pasa el tiempo indicado desde que el Player la inició. Útil para limitar la duración. |
| **Si el Player ha conseguido un total de Puntos igual o mayor a** | Puntos | La Aventura finaliza cuando la puntuación total del Player alcanza el umbral indicado. |
| **Si el Clan ha conseguido un total de Puntos igual o mayor a** | Puntos | La Aventura finaliza cuando la puntuación total del Equipo del Player alcanza el umbral. Solo aplica en Aventuras en modo Equipo. |

:::warning Lógica OR entre condiciones
Cuando se programan varias condiciones simultáneamente, la primera que se cumpla finaliza la Aventura para ese Player. No es necesario que se cumplan todas — basta con una.
:::

## Configuración en el Gamifier 👑

La sección **Condiciones de Finalización** se encuentra en el formulario de edición de la Aventura.

![Sección Condiciones de Finalización en el Gamifier — selector de tipo de condición, campo de valor, botón para añadir y botón para añadir nuevo grupo OR](/img/gamifier-aventura-condiciones-finalizacion.png)

Para configurarlas:

1. Abre la Aventura en el Gamifier y desplázate hasta la sección **Condiciones de Finalización**.
2. Selecciona el **tipo de condición** en el desplegable.
3. Introduce el **valor** correspondiente (IDs de Misiones, número de segundos, puntos, etc.).
4. Pulsa el botón **"+"** para añadir la condición.
5. Repite para añadir más condiciones si lo deseas.
6. Cada condición añadida se puede **editar** o **eliminar** con los botones correspondientes.
7. **Guarda** los cambios.

### Diferencia con las Condiciones de Finalización de Misión

A nivel de Misión, las condiciones operan sobre **Retos** (p. ej. "si ha finalizado los Retos 757 y 758"). A nivel de Aventura, operan sobre **Misiones** y métricas globales (puntos totales, tiempo total, puntos del Clan). Además, a nivel de Misión se usa un sistema de [bloques AND/OR](../misiones/condiciones-finalizacion.md#sistema-de-bloques-andor-) donde las condiciones dentro de un grupo son AND y entre grupos OR. A nivel de Aventura, la lógica es más simple: todas las condiciones configuradas se evalúan con lógica **OR** — la primera que se cumpla finaliza la Aventura.

:::tip 👑 Para el Game Master
Combina condiciones para crear experiencias flexibles. Por ejemplo: "finalizar al completar las Misiones 1, 2 y 3" (Misiones seleccionadas) **o** "cuando pasen 60 minutos" (tiempo) — el Player que acabe las misiones antes del tiempo gana, y el que no, finaliza igualmente al agotarse el plazo. Otra combinación: "al alcanzar 1000 puntos" **o** "al completar 5 de 8 Misiones" — doble vía de finalización que premia tanto el rendimiento como la exploración.
:::

## Qué ocurre al finalizar la Aventura 🎮

Cuando se cumple alguna condición de finalización, ocurre la siguiente secuencia para el Player:

1. La Aventura se marca como **finalizada** para ese Player.
2. Se entregan los [Objetos Digitales de Aventura](./objetos-digitales.md) cuyas Condiciones de Obtención se cumplan.
3. En la [Bitácora](./bitacora.md), aparece el cuadrante **"Final Aventura"** con una pantalla de celebración, confeti y el Mensaje Final configurado por el GM.
4. Si el GM ha activado la opción "El Player puede volver a jugar", aparece también el cuadrante **"Volver a Jugar"** que permite reiniciar la Aventura desde cero.

![Pantalla de celebración del Final de Aventura — trofeo, mensaje configurado por el GM, imagen y confeti](/img/webapp-bitacora-final-aventura-mensaje.png)

![Pantalla de Volver a Jugar — aviso de que se eliminarán estados, puntos, objetos y progreso, con botón de confirmación](/img/webapp-bitacora-volver-jugar.png)

:::warning Condiciones de Finalización ≠ Condiciones de Obtención
Las Condiciones de Finalización determinan cuándo **termina** la Aventura. Las [Condiciones de Obtención](./objetos-digitales.md#condiciones-de-obtención-a-nivel-de-aventura-) determinan si un Objeto Digital concreto **se entrega** al Player. Son dos sistemas independientes.
:::

## Continúa aprendiendo

- Objetos entregados al finalizar: [Objetos Digitales de Aventura](./objetos-digitales.md).
- Pantalla de celebración y "Volver a Jugar": [Bitácora del Player](./bitacora.md#cuadrantes-por-estado-de-aventura).
- Condiciones de Finalización a nivel de Misión: [Condiciones de Finalización de Misión](../misiones/condiciones-finalizacion.md).
