---
sidebar_position: 5
title: 🗺️ Mapas
description: Configuración del mapa de una Misión en AdventuriQ — geolocalización, mapa heredado de los Retos o mapa imagen, identificador y cómo hacer que la Misión se abra directamente en su mapa.
keywords: [misión, mapa, geolocalización, mapa heredado, google maps, mapa imagen, geoposición, POI, abrir en el mapa, jugar desde el mapa, gamifier, webapp, adventuriq]
---

# 🗺️ Mapas

Cada Misión puede tener un **mapa asociado** que se muestra al Player en la Webapp. El mapa puede ser un mapa con coordenadas reales (geolocalización), un mapa **heredado** que se compone solo con los puntos de los Retos de la Misión, o una imagen personalizada que actúa como recurso gráfico (plano de un edificio, mapa de fantasía, esquema de un recinto). Los Retos geoposicionados de la Misión pueden heredar sus coordenadas y pintarse como marcadores en el mapa.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

## Configuración en el Gamifier 👑

El apartado **Mapa** de la ficha de la Misión (entrada **Mapa** del índice lateral) se encuentra debajo de las Condiciones de Finalización. Los campos disponibles son:

| Campo | Descripción |
|---|---|
| **Tipo de mapa** | Selector con tres opciones: **Geolocalización** (mapa con coordenadas Latitud/Longitud), **Heredado (puntos de los Retos geolocalizados)** o **Mapa imagen** (recurso gráfico personalizado). Una vez creado el mapa, el tipo ya no se puede cambiar: para usar otro, elimina el mapa y créalo de nuevo. |
| **Identificador** | Título o nombre identificativo del mapa (texto libre). Se usa como referencia interna. |
| **Mapa de imagen (1200×1950)** | Si el tipo es "Mapa imagen", campo para subir la imagen. Tamaño recomendado: 1200 × 1950 px. Se puede subir mediante **Cambiar imagen** o seleccionar desde la **Biblioteca** de medios. |

Los botones **Guardar cambios** y **Eliminar Mapa** permiten guardar la configuración o eliminar el mapa de la Misión.

![Configuración del mapa de la Misión — tipo de mapa, identificador, mapa imagen con botones de cambiar imagen y biblioteca](/img/gamifier-mision-mapa-configuracion.png)

## Tipos de mapa

### Geolocalización

El mapa de geolocalización utiliza Google Maps con coordenadas Latitud/Longitud. Los Retos de esta Misión que tengan posición geográfica configurada aparecen como marcadores en el mapa, usando el **color** asignado a la Misión. Los Retos con indicadores "Es Inicio" o "Es Fin" se muestran con banderitas especiales.

### Heredado (puntos de los Retos geolocalizados) {#mapa-heredado}

El mapa heredado se compone **automáticamente** con los puntos de los Retos geolocalizados de la Misión (Retos con Localización de tipo **Geolocalización** o **Geolocalización + QR**) más los **POI de la Aventura**, y los dibuja todos juntos en un mismo mapa. No hay que poner coordenadas ni subir nada: **solo necesita un identificador**.

![Mapa de tipo Heredado en la ficha de la Misión: el tipo aparece bloqueado, el identificador y el aviso que explica de dónde salen los puntos, con los botones Eliminar Mapa y Guardar cambios](/img/gamifier-mision-mapa-heredado.png)

:::tip 👑 Si no asignas ningún mapa
Mientras la Misión no tenga mapa, el Gamifier avisa de que **se generará uno por defecto** a partir de los puntos geolocalizados de los Retos. Para eso es necesario que **todos** los Retos de la Misión tengan una Localización de tipo Geolocalización o Geolocalización + QR.
:::

Es el tipo que mejor encaja con una ruta: cada Reto ya tiene su sitio, y el mapa de la Misión los enseña juntos sin trabajo extra. También sirve para [abrir la Misión directamente en su mapa](#abrir-la-mision-en-su-mapa).

### Mapa imagen

El mapa imagen es un recurso gráfico personalizado que se muestra al Player en lugar de un mapa real. Casos de uso típicos: plano de un edificio con las salas donde se ubican los Retos, mapa de fantasía de un mundo ficticio o esquema de un recinto ferial.

:::tip 👑 Para el Game Master
El mapa imagen no tiene por qué ser literalmente un mapa. Puede ser cualquier imagen que sirva como pista, guía visual o ambientación para la Misión. Un "mapa del tesoro" envejecido, un diagrama de un circuito o una fotografía aérea del campus funcionan igual de bien.
:::

## Restricciones

A nivel de Misión y de Aventura, los mapas **no se pueden bloquear** por códigos alfanuméricos ni códigos QR. Esta funcionalidad de bloqueo por mapa solo está disponible a nivel de Reto.

Los Retos geoposicionados de las Misiones pueden **heredar sus coordenadas** y pintarse como marcadores en el mapa de la Aventura (nivel superior), además de en el mapa de la propia Misión.

## Abrir la Misión en su mapa {#abrir-la-mision-en-su-mapa}

Puedes hacer que una Misión se abra **directamente en su mapa**, en lugar de en el listado de Retos, para que el Player la juegue entera desde el mapa: toca un punto, juega el Reto y vuelve al mapa.

### Configuración en el Gamifier 👑

1. Ve a **Aventuras**, abre la Aventura y, en su listado de Misiones, abre la ficha de la Misión.
2. En el índice lateral, pulsa **Opciones y disponibilidad** y baja hasta el final, al bloque **«Al entrar en la Misión, abrir»**.
3. Elige **Mapa**. La opción por defecto es **Retos**.
4. Pulsa **Guardar cabecera**.

![Bloque «Al entrar en la Misión, abrir» al final de Opciones y disponibilidad, con las opciones Retos y Mapa y Mapa seleccionada](/img/gamifier-mision-abrir-en-mapa.png)

| Opción | Qué ve el Player al entrar en la Misión |
|---|---|
| **Retos** (por defecto) | El listado de Retos, como siempre. |
| **Mapa** | El mapa de la Misión, con los puntos de sus Retos. |

:::note Qué necesita
- La Misión tiene que tener un **mapa** (apartado **Mapa** de la ficha) con los Retos localizados en él. Si no lo tiene, se abre en **Retos** aunque hayas elegido **Mapa**.
- El bloque solo aparece en Misiones **ya creadas**, porque el mapa se asigna después de crear la Misión.
- Las Misiones que ya existían siguen abriéndose en **Retos** hasta que elijas **Mapa**.
:::

Esta opción es **independiente** de la equivalente de la Aventura ([«Al entrar en la Aventura, abrir»](../aventuras/mapas-poi.md#mapa-del-player)): una Aventura que se abre en Misiones puede tener Misiones que se abren en su mapa, y al revés. **Duplicar** la Misión o la Aventura y **exportar/importar** la Aventura conservan la opción.

### Cómo lo juega el Player 🎮

1. El Player entra en la Misión y, tras su portada, pulsa **Adelante**: se abre la pestaña **Mapa** en lugar del listado de Retos.
2. Toca el punto de un Reto pendiente y pulsa **«Jugar»**.
3. Al terminar el Reto (resultado, Objetos Digitales y, si cierra la Misión, su final), vuelve al mapa, centrado en ese punto, que ya se ve con su check.

![Misión abierta directamente en la pestaña Mapa: mapa ilustrado de noche con los puntos de los Retos y la barra inferior con Mapa marcado](/img/webapp-mision-abre-en-mapa.png)

![Vuelta al mapa tras jugar un Reto: el mapa centrado en su punto, que ya muestra el check verde](/img/webapp-mision-vuelta-al-mapa.png)

El Player puede cambiar a la pestaña **Retos** cuando quiera. Si juega un Reto desde el listado, al terminar vuelve al listado, como siempre. La Misión solo le lleva al mapa **al entrar**: si cambia a **Retos**, no vuelve al mapa hasta la próxima vez que entre en la Misión.

:::tip 👑 Retos sin punto en el mapa
Los Retos que no tienen punto en el mapa solo se pueden jugar desde la pestaña **Retos**. Si eliges **Mapa**, comprueba que todos los Retos de la Misión estén localizados, o avisa a los Players de que algunos están en el listado.
:::

## Cómo lo ve el Player 🎮

El Player accede al mapa de la Misión desde la pestaña **Mapa** en la interfaz de la Webapp, o entra directamente en él si la Misión está configurada para [abrirse en su mapa](#abrir-la-mision-en-su-mapa). Si la Misión tiene un mapa de geolocalización o heredado, ve un mapa interactivo con marcadores en las ubicaciones de los Retos. Si tiene un mapa imagen, ve la imagen personalizada a pantalla completa.

En el mapa de geolocalización, el Player puede abrir la ficha de cada punto, jugar el Reto desde el mapa y pedir la ruta con «Cómo llegar», igual que en el mapa de la Aventura: ver [Cómo lo ve el Player](../aventuras/mapas-poi.md#como-lo-ve-el-player).

![Vista del Player — mapa imagen de una Misión mostrando un plano isométrico personalizado](/img/webapp-mision-mapa.png)

## Continúa aprendiendo

- Objetos entregados al completar la Misión: [Objetos Digitales](./objetos-digitales.md).
- Descripción y textos: [Descripción](./descripcion.md).
- Estilo del mapa, premios en el mapa y abrir la Aventura en el mapa: [Mapa del Player](../aventuras/mapas-poi.md#mapa-del-player).
- El resto de opciones del apartado Opciones y disponibilidad: [Bloqueos y Visibilidad](./bloqueos-visibilidad.md).
