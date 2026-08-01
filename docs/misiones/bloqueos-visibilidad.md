---
sidebar_position: 2
title: 🔒 Bloqueos y Visibilidad
description: Controles de visibilidad, jugabilidad y ventanas temporales de una Misión en AdventuriQ — cuándo el Player puede ver y acceder a cada Misión.
keywords: [misión, bloqueo, visibilidad, jugabilidad, fecha, ventana temporal, borrador, gamifier, webapp, adventuriq]
---

# 🔒 Bloqueos y Visibilidad

Los controles de visibilidad y jugabilidad determinan **cuándo y cómo** un Player puede ver y acceder a una Misión dentro de una Aventura. El Game Master puede combinar estados, fechas y ventanas temporales para crear secuencias narrativas, desbloqueos progresivos o activaciones por sorpresa.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

## Controles disponibles en el Gamifier 👑

La sección de visibilidad se encuentra en el formulario de edición de la Misión, justo debajo de los campos de configuración general. Incluye los siguientes controles:

| Control | Tipo | Descripción |
|---|---|---|
| **Misión en estado borrador** | Toggle | Si está activado, la Misión no es visible ni jugable para los Players, independientemente del resto de ajustes. Solo el GM y los GD pueden verla. |
| **La Misión es visible** | Toggle | Controla si la Misión aparece en el listado de Misiones de la Webapp. Si se desactiva, la Misión queda completamente oculta para el Player. |
| **Fecha a partir de la cual será visible** | Fecha + hora | Si se configura, la Misión permanece oculta hasta que se alcanza esta fecha. Útil para desbloqueos temporales. |
| **La Misión es jugable** | Toggle | Controla si el Player puede interactuar con la Misión. Si se desactiva, la Misión aparece en el listado pero está bloqueada — el Player la ve pero no puede entrar. |
| **La Misión será jugable a partir de** | Fecha + hora | Fecha de inicio de la ventana de jugabilidad. |
| **La Misión será jugable hasta** | Fecha + hora | Fecha de fin de la ventana de jugabilidad. Pasada esta fecha, la Misión se bloquea automáticamente. |
| **Mostrar el detalle de los Retos** | Toggle | Controla si el Player ve la pantalla intermedia de detalle de cada Reto (imagen, descripción y botón "Empezar") antes de acceder a la mecánica. Si se desactiva, al pulsar un Reto desde el listado el Player entra directamente a la mecánica (pregunta, ruleta, etc.) sin pantalla intermedia. Activado por defecto. |

![Controles de visibilidad y jugabilidad — toggles de visible, jugable, detalle de retos, imágenes de listado y cabecera](/img/gamifier-mision-visibilidad-jugabilidad.png)

## Combinaciones de estados

Los toggles de visibilidad y jugabilidad se combinan para crear diferentes comportamientos:

| Visible | Jugable | Resultado para el Player |
|:---:|:---:|---|
| Sí | Sí | La Misión aparece en el listado y el Player puede entrar y jugar sus Retos. Comportamiento normal. |
| Sí | No | La Misión aparece en el listado pero está **bloqueada**. El Player la ve pero no puede acceder. Útil para crear expectación. |
| No | — | La Misión **no aparece** en el listado. El Player no sabe que existe. Útil para preparar contenido futuro. |
| Borrador | — | Igual que "No visible", pero además indica al GM que la Misión está en construcción. |

## Ventanas temporales

Las fechas permiten automatizar los cambios de estado sin intervención manual del GM durante el evento:

La **fecha de visibilidad** controla cuándo aparece la Misión en el listado. Si configuras "visible a partir del 15 de junio a las 10:00", la Misión estará oculta hasta ese momento y aparecerá automáticamente.

La **ventana de jugabilidad** (desde/hasta) define la franja temporal en la que el Player puede jugar la Misión. Fuera de esa franja, la Misión será visible pero estará bloqueada. Esto es útil para eventos con varias fases: "La Misión 1 se juega de 10:00 a 11:00, la Misión 2 de 11:00 a 12:00".

:::tip 👑 Para el Game Master
Combina ventanas temporales con múltiples Misiones para crear una **experiencia por fases**. Cada Misión se activa a su hora sin que tengas que estar pendiente de activarlas manualmente durante el evento.
:::

## Cómo lo ve el Player 🎮

Cuando una Misión está **visible y jugable**, el Player la ve en el listado de Misiones con su imagen, título y descripción. Puede pulsar para entrar y acceder a los Retos.

![Vista del Player — listado de Misiones visibles y jugables en la Webapp, cada una con su imagen, nombre, número de retos y puntos acumulados](/img/webapp-misiones-listado.png)

Cuando una Misión está **visible pero no jugable** (bloqueada), el Player la ve en el listado pero con un indicador de bloqueo (una X roja sobre la tarjeta). No puede acceder hasta que se cumpla la condición de desbloqueo (fecha, código de acceso u otro criterio).

![Vista del Player — listado de Misiones con la tercera Misión bloqueada (no jugable), marcada con una X roja](/img/webapp-misiones-listado-mision-no-jugable.png)

Cuando una Misión está **oculta** (no visible o en borrador), el Player no la ve en absoluto — el listado de Misiones solo muestra las Misiones visibles.

## Bloqueo por Llave digital

Además de los controles de esta página, una Misión puede bloquearse con una **Llave digital**: un Objeto Digital que el Player consigue jugando y que le da acceso. Se configura en el bloque **🔑 Acceso por Llave digital** del editor de la Misión, justo debajo de "Acceso por Código".

La diferencia con los controles de arriba es de naturaleza: la visibilidad y las ventanas temporales dependen del **reloj** o de una decisión del GM, mientras que la Llave depende de **lo que el Player haya conseguido dentro del juego**.

Admite dos modos: la Misión se ve con un candado, o permanece **oculta** hasta que el Player consigue la llave. Lo tienes explicado en [🔑 Llaves Digitales](../aventuras/llaves-digitales.md).

## Cuándo usar cada combinación 💡

Usa **visible + no jugable** cuando quieras que los Players sepan que hay una Misión esperándoles pero que aún no pueden jugar — genera expectación y anticipación.

Usa **no visible** cuando la Misión aún no existe para el Player — por ejemplo, una Misión que se revelará como sorpresa en mitad de un evento presencial.

Usa **ventanas temporales** cuando el evento tiene un horario definido y quieres que las Misiones se activen y desactiven automáticamente.

Usa **Mostrar el detalle de los Retos = No** cuando quieras que el Player entre directamente a la mecánica del Reto al pulsarlo, sin pasar por la pantalla intermedia de detalle (imagen + descripción + botón "Empezar"). Ideal para Aventuras rápidas tipo trivial donde la pantalla intermedia añade fricción sin aportar valor.

:::note Excepción: Retos con geolocalización
Los Retos con localización tipo GPS o GPS+QR **siempre** muestran la pantalla de detalle, independientemente de este toggle. La razón es que la pantalla de detalle es donde se muestra el mapa con el Punto de Interés al que el Player debe acudir. Este comportamiento es automático y no requiere configuración adicional.
:::

## Continúa aprendiendo

- Configuración básica de la Misión: [Configuración General](./configuracion-general.md).
- Assets visuales: [Contenido e Imágenes](./contenido-imagenes.md).
- Bloqueos por código de acceso: ver sección "Códigos de acceso y QR" en [Configuración General](./configuracion-general.md).
- Bloqueo por Objeto Digital que el Player debe conseguir: [🔑 Llaves Digitales](../aventuras/llaves-digitales.md).
