---
sidebar_position: 8
title: 🗳️ Votaciones entre Players
description: Sistema de Votaciones entre Players en AdventuriQ — 5 Tipos de Voto personalizables, mecánica de votación, puntuación, revocación y estadísticas en el Game Board.
keywords: [aventura, votaciones, votos, players, tipos de voto, icono, puntuación, clasificación, gamifier, webapp, adventuriq]
---

# 🗳️ Votaciones entre Players

El sistema de **Votaciones** permite que los Players de una Aventura se voten entre sí con diferentes Tipos de Voto personalizados por el Game Master. Cada Tipo de Voto tiene su propio nombre, icono, color y puntuación asociada. Los votos recibidos se reflejan en la [Bitácora](./bitacora.md) del Player y contribuyen a su posición en la Clasificación.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

## Activar las Votaciones 👑

Las Votaciones se activan desde el formulario de edición de la Aventura con el interruptor **"Activar sistema de votaciones"**. Al activarlo por primera vez, el sistema crea automáticamente **5 Tipos de Voto por defecto** que el Game Master puede personalizar.

![Sección de Votaciones en el Gamifier — toggle de activación y los 5 Tipos de Voto con su icono, nombre, puntos a entregar, estado activo y botón Editar](/img/gamifier-aventura-votaciones-activar.png)

Si se desactivan las Votaciones, los votos ya emitidos se conservan. Al reactivarlas, los votos siguen existiendo.

## Tipos de Voto 👑

El bloque **"Tipos de Voto"** muestra los 5 tipos disponibles. Para editar uno, pulsa el botón **"Editar"** junto al tipo. El editor permite configurar:

| Campo | Descripción |
|---|---|
| **Nombre del voto** | Nombre visible para el Player (ej. "Más creativo", "Más amable", "Mejor compañero"). Soporta traducciones multiidioma. |
| **Icono** | Icono representativo del tipo de voto, elegido entre más de 60 iconos disponibles. |
| **Color** | Color del icono y del badge, configurable con selector cromático. |
| **Puntos** | Puntos que otorga cada voto recibido al Player votado. |
| **Activo** | Toggle para activar o desactivar este Tipo de Voto. Los tipos desactivados dejan de ofrecerse a los Players, pero los votos emitidos previamente se conservan. |

### Traducciones de los Tipos de Voto

El nombre de cada Tipo de Voto se puede traducir a varios idiomas. En el editor del tipo, el campo "Nombre del voto" muestra pestañas con banderas por idioma. Para añadir un idioma, pulsa **"+ Nueva traducción"** y selecciona la bandera. El Player verá el nombre en su idioma si hay traducción disponible; si no, verá el idioma por defecto de la Aventura.

:::tip 👑 Para el Game Master
Personaliza los Tipos de Voto para que encajen con la narrativa de tu Aventura. En una gymkana de team building podrían ser "Más colaborador", "Más resolutivo", "Más creativo", "Más divertido" y "MVP". En una formación corporativa: "Mejor aportación", "Más innovador", "Mejor comunicador", etc.
:::

## Emitir un voto 🎮

El Player accede a las Votaciones desde el cuadrante **"Votar"** en la [Bitácora](./bitacora.md#votar). El flujo es:

1. Pulsa el cuadrante **"Votar"** en la Bitácora.
2. Aparece el **listado de Players** de la Aventura con una barra de búsqueda flotante naranja para localizar rápidamente a un participante.
3. Pulsa sobre el nombre de un Player. Se muestran los **Tipos de Voto activos** con su icono y color.
4. Pulsa el Tipo de Voto que quieras darle. Opcionalmente, escribe un **motivo** para el voto.
5. Confirma. El voto queda registrado.

![Pantalla de votación en la Webapp — lista alfabética de Players con campo de búsqueda y valoraciones recibidas](/img/webapp-bitacora-votar.png)

### Reglas de votación

| Regla | Descripción |
|---|---|
| **Un voto por Tipo** | Cada Player puede emitir un solo voto de cada Tipo hacia otro Player. Puede votar al mismo Player con varios Tipos distintos. |
| **No autovotos** | Un Player no puede votarse a sí mismo. |
| **Revocable** | Un voto emitido se puede revocar: pulsa sobre el Tipo de Voto ya marcado y confirma la revocación. Después puedes volver a votar con ese Tipo o con otro. |

### Buscador de Players

La pantalla de votación incluye una **barra de búsqueda flotante** naranja, idéntica a la del listado de Aventuras. Permite filtrar Players por nombre al instante. El botón **X** limpia el texto de búsqueda y el botón de **refrescar** actualiza el listado de Players y votos.

## Votos recibidos y Clasificación 🎮

Los votos recibidos se reflejan en dos zonas de la Bitácora:

**Bloque de estrellas**: debajo de la cabecera de la Bitácora aparece un bloque con estrellas y el número de votos recibidos. La cantidad de estrellas refleja la valoración media.

![Bloque de 5 estrellas con el contador de votos recibidos en la Bitácora del Player](/img/webapp-bitacora-estrellas-votos.png)

**Clasificación**: en la pestaña de Clasificación, junto a la posición y los puntos, se muestra la media de votos recibidos. Los puntos otorgados por los votos (según la configuración del GM) se suman a la puntuación total del Player.

## Estadísticas en el Game Board 👑

El Game Master puede consultar las estadísticas de votaciones desde el **Game Board** de la Aventura. Este bloque muestra los totales de votos emitidos por Tipo de Voto y los Players más votados en cada categoría.

## Continúa aprendiendo

- Cuadrante "Votar" en la Bitácora: [Bitácora del Player](./bitacora.md#votar).
- Estrellas de votos recibidos: [Bitácora del Player](./bitacora.md#estrellas-de-votos-recibidos).
- Activación de features: [Configuración de una Aventura](./configuracion.md).
