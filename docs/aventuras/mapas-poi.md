---
sidebar_position: 10
title: 🗺️ Mapas y Puntos de Interés
description: Configuración del mapa y los Puntos de Interés (POI) de una Aventura en AdventuriQ — geolocalización con Google Maps, mapa imagen y POI informativos.
keywords: [aventura, mapa, geolocalización, google maps, mapa imagen, poi, punto de interés, gamifier, webapp, adventuriq]
---

# 🗺️ Mapas y Puntos de Interés

Cada Aventura puede tener un **mapa asociado** que se muestra al Player en la Webapp, y opcionalmente **Puntos de Interés (POI)** que enriquecen la experiencia del mapa con información adicional. El mapa puede ser un mapa de Google Maps con coordenadas reales (geolocalización) o una imagen personalizada.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

## Tipos de mapa 👑

Al crear un mapa para la Aventura, el Game Master elige entre dos tipos:

| Tipo | Descripción | Caso de uso |
|---|---|---|
| **Mapa imagen** | Imagen personalizada (recurso gráfico) que se muestra como mapa. | Plano de un edificio, mapa de fantasía, esquema de un recinto ferial, pistas visuales. |
| **Mapa Google Maps** | Mapa interactivo de Google Maps con coordenadas Latitud/Longitud. | Gymkanas urbanas, rutas turísticas, eventos al aire libre. |

### Mapa imagen

El mapa imagen permite usar cualquier recurso gráfico como mapa visual de la Aventura. No tiene funcionalidad de geolocalización — es puramente visual. El GM sube la imagen y le asigna un título identificativo.

No tiene por qué ser literalmente un mapa: puede ser una pista, un diagrama, una fotografía aérea o cualquier elemento visual que guíe la experiencia.

### Mapa Google Maps (geoposicionado)

El mapa geoposicionado utiliza Google Maps con coordenadas Latitud/Longitud. Los Retos geoposicionados de las Misiones de esta Aventura pueden **heredar sus coordenadas** y pintarse como marcadores en el mapa de la Aventura, consolidando en una sola vista todas las ubicaciones del juego.

Cada marcador utiliza el **color** de la Misión a la que pertenece el Reto, lo que permite distinguir visualmente qué Retos pertenecen a qué Misión.

## Configuración del mapa 👑

La sección **Mapa** se encuentra en el formulario de edición de la Aventura.

![Sección Mapa en el Gamifier — selector de tipo de mapa, campo Identificador y botón Crear Mapa y Vincular a la Aventura](/img/gamifier-aventura-mapa.png)

Los campos disponibles son:

| Campo | Descripción |
|---|---|
| **Tipo de mapa** | Selector: **Mapa imagen** o **Geolocalización** (Google Maps). |
| **Identificador** | Título o nombre identificativo del mapa (texto libre). |
| **Imagen del mapa** | Si el tipo es "Mapa imagen", campo para subir la imagen. |
| **Latitud / Longitud** | Si el tipo es "Geolocalización", coordenadas del centro del mapa. |

Los botones **Guardar cambios** y **Eliminar Mapa** permiten gestionar la configuración.

### Restricciones

A nivel de Aventura, los mapas **no se pueden bloquear** por códigos alfanuméricos ni códigos QR. Esta funcionalidad de bloqueo solo está disponible a nivel de Reto.

El mapa de la Aventura también es accesible desde la pestaña **Mapa** de la barra de navegación inferior de la Webapp, además de desde la vista de Misiones.

## Puntos de Interés (POI) 👑

![Sección POIs en el Gamifier — listado de Puntos de Interés creados para la Aventura con botón Nuevo POI](/img/gamifier-aventura-pois.png)

Un **POI** (Point of Interest) es un marcador informativo que aparece en el mapa geoposicionado de la Aventura. A diferencia de los Retos, los POI **no tienen interacción** con el Player — son puramente informativos.

### Configuración de un POI

Cada POI se configura con los siguientes campos:

| Campo | Descripción |
|---|---|
| **Título** | Nombre del punto de interés visible en el mapa. |
| **Descripción** | Texto descriptivo que se muestra al pulsar el marcador. |
| **Imagen** | Imagen asociada al POI. |
| **Coordenadas** | Latitud y Longitud para posicionar el marcador en el mapa. |

Los POI se crean y gestionan desde la sección de POI del formulario de la Aventura. Se pueden crear tantos como sean necesarios para enriquecer la experiencia del mapa.

:::tip 👑 Para el Game Master
Usa los POI para señalar puntos de referencia, servicios (baños, cafetería, punto de información), ubicaciones de interés cultural o cualquier lugar relevante que el Player deba conocer pero donde no haya un Reto que completar. En una gymkana urbana, por ejemplo, un POI puede marcar "Aquí hay una fuente" o "Punto de encuentro".
:::

## Relación con los mapas de Misión

El mapa de la Aventura es **independiente** de los mapas configurados en cada Misión. Sin embargo, los Retos geoposicionados de las Misiones pueden heredar sus coordenadas y pintarse como marcadores tanto en el mapa de la Aventura (visión global) como en el mapa de su propia Misión (visión local).

Para más detalle sobre la configuración de mapas a nivel de Misión, consulta [Mapas de Misión](../misiones/mapas.md).

## Cómo lo ve el Player 🎮

El Player accede al mapa de la Aventura desde la pestaña **Mapa** en la barra de navegación inferior de la Webapp. Si la Aventura tiene un mapa geoposicionado, ve un mapa interactivo de Google Maps con los marcadores de los Retos y los POI. Si tiene un mapa imagen, ve la imagen personalizada a pantalla completa.

## Continúa aprendiendo

- Mapas a nivel de Misión: [Mapas de Misión](../misiones/mapas.md).
- Configuración general de la Aventura: [Configuración de una Aventura](./configuracion.md).
