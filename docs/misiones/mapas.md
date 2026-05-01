---
sidebar_position: 5
title: 🗺️ Mapas
description: Configuración del mapa de una Misión en AdventuriQ — geolocalización con Google Maps o mapa imagen personalizado, identificador y relación con Retos geoposicionados.
keywords: [misión, mapa, geolocalización, google maps, mapa imagen, geoposición, POI, gamifier, webapp, adventuriq]
---

# 🗺️ Mapas

Cada Misión puede tener un **mapa asociado** que se muestra al Player en la Webapp. El mapa puede ser un mapa de Google Maps con coordenadas reales (geolocalización) o una imagen personalizada que actúa como recurso gráfico (plano de un edificio, mapa de fantasía, esquema de un recinto). Los Retos geoposicionados de la Misión pueden heredar sus coordenadas y pintarse como marcadores en el mapa.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

## Configuración en el Gamifier 👑

La sección **Mapa** se encuentra en el formulario de edición de la Misión, debajo de las Condiciones de Finalización. Los campos disponibles son:

| Campo | Descripción |
|---|---|
| **Tipo de mapa** | Selector con dos opciones: **Geolocalización** (mapa de Google Maps con coordenadas Latitud/Longitud) o **Mapa imagen** (recurso gráfico personalizado). |
| **Identificador** | Título o nombre identificativo del mapa (texto libre). Se usa como referencia interna. |
| **Mapa de imagen (1200×1950)** | Si el tipo es "Mapa imagen", campo para subir la imagen. Tamaño recomendado: 1200 × 1950 px. Se puede subir mediante **Cambiar imagen** o seleccionar desde la **Biblioteca** de medios. |

Los botones **Guardar cambios** y **Eliminar Mapa** permiten guardar la configuración o eliminar el mapa de la Misión.

![Configuración del mapa de la Misión — tipo de mapa, identificador, mapa imagen con botones de cambiar imagen y biblioteca](/img/gamifier-mision-mapa-configuracion.png)

## Tipos de mapa

### Geolocalización

El mapa de geolocalización utiliza Google Maps con coordenadas Latitud/Longitud. Los Retos de esta Misión que tengan posición geográfica configurada aparecen como marcadores en el mapa, usando el **color** asignado a la Misión. Los Retos con indicadores "Es Inicio" o "Es Fin" se muestran con banderitas especiales.

### Mapa imagen

El mapa imagen es un recurso gráfico personalizado que se muestra al Player en lugar de un mapa real. Casos de uso típicos: plano de un edificio con las salas donde se ubican los Retos, mapa de fantasía de un mundo ficticio o esquema de un recinto ferial.

:::tip 👑 Para el Game Master
El mapa imagen no tiene por qué ser literalmente un mapa. Puede ser cualquier imagen que sirva como pista, guía visual o ambientación para la Misión. Un "mapa del tesoro" envejecido, un diagrama de un circuito o una fotografía aérea del campus funcionan igual de bien.
:::

## Restricciones

A nivel de Misión y de Aventura, los mapas **no se pueden bloquear** por códigos alfanuméricos ni códigos QR. Esta funcionalidad de bloqueo por mapa solo está disponible a nivel de Reto.

Los Retos geoposicionados de las Misiones pueden **heredar sus coordenadas** y pintarse como marcadores en el mapa de la Aventura (nivel superior), además de en el mapa de la propia Misión.

## Cómo lo ve el Player 🎮

El Player accede al mapa de la Misión desde la pestaña **Mapa** en la interfaz de la Webapp. Si la Misión tiene un mapa de geolocalización, ve un mapa interactivo con marcadores en las ubicaciones de los Retos. Si tiene un mapa imagen, ve la imagen personalizada a pantalla completa.

![Vista del Player — mapa imagen de una Misión mostrando un plano isométrico personalizado](/img/webapp-mision-mapa.png)

## Continúa aprendiendo

- Objetos entregados al completar la Misión: [Objetos Digitales](./objetos-digitales.md).
- Descripción y textos: [Descripción](./descripcion.md).
