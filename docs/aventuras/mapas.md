---
sidebar_position: 9
title: Mapas
---
# Mapas de la Aventura

## Tipos de mapa

![Configuración del mapa en la aventura](/img/img-060.png)


Un Mapa puede ser:

- **Recurso Gráfico (Mapa Imagen)**: una imagen que sirve como mapa visual.
- **Mapa Google Maps (Geoposicionado)**: requiere una Latitud y una Longitud.

:::info Obligatorio
A nivel Aventura, Misión y Reto, se tiene que **crear el Recurso Mapa**, aunque no se use como un mapa funcional.
:::

## Mapa imagen

- Se pueden usar **recursos gráficos** que no sean un mapa si el juego no requiere mapas.
- Los recursos gráficos en la zona del componente Mapa pueden ser elementos del juego, como **Pistas, Enigmas**, etc.

## Mapa geoposicionado

![Icono de mapa - punto de interés](/img/img-135.png)


- Los Mapas Geoposicionados requieren de una **Latitud** y una **Longitud**.
- Las posiciones Latitud/Longitud de los Retos se muestran sobre un **Mapa Google Maps** en forma de lágrima invertida.
- Los componentes Mapa a Nivel Aventura y Misión que tengan Retos Geoposicionados pueden **heredar los puntos Geoposicionados** y pintarlos en el Mapa de la Web App.

## Restricciones

- A nivel Aventura y Misión, los Mapas **no se pueden bloquear** por Códigos Alfanuméricos ni Códigos QR.
- Un Componente Mapa siempre necesita un **título**.
- El Componente Mapa a Nivel Aventura también es accesible desde el **Menú de la Aventura** una vez se ha empezado a jugar.
