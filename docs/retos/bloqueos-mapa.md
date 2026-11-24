---
sidebar_position: 4
title: Bloqueos y Mapa
---
# Bloqueos y Mapa del Reto

En los Retos, las opciones de bloqueo **aumentan** respecto a las Misiones. Los bloqueos son siempre opcionales.

## Tipos de bloqueo



- **Código Alfanumérico o QR**: como en las Misiones.
- **Distancia a punto geográfico**: usando el GPS de los dispositivos móviles.

## Opciones del componente Mapa

| Opción | Descripción |
|---|---|
| **Geolocalización** | Mapa Google Maps con posición Lat/Long |
| **Mapa Imagen** | Imagen como recurso gráfico |
| **Geolocalización y QR** | Geoposición + bloqueo automático por código |
| **Mapa Imagen y QR** | Imagen + bloqueo automático por código |

## Premio en el mapa {#premio-en-el-mapa}

En el apartado **Opciones y disponibilidad** de la ficha del Reto, debajo de **Visualizar Localización**, la opción **«Premio en el mapa»** decide qué ve el Player sobre el punto de este Reto en el mapa mientras lo tiene por jugar:

| Valor | Qué ve el Player sobre el punto |
|---|---|
| **Como la Aventura** (por defecto) | Lo que hayas elegido para toda la Aventura en el bloque [«Mapa del Player»](../aventuras/mapas-poi.md#mapa-del-player). |
| **No mostrar** | Nada. |
| **Cubo sorpresa** | Un cubo con «?» que no desvela el Objeto. |
| **Objeto a la vista** | Una miniatura del Objeto. |

![Opción Premio en el mapa en la ficha de un Reto, con Como la Aventura marcado y las opciones No mostrar, Cubo sorpresa y Objeto a la vista](/img/gamifier-reto-premio-en-el-mapa.png)

Solo afecta a los Retos con localización que dan algún Objeto Digital. El premio desaparece del punto en cuanto el Player juega el Reto.

## Combinaciones de bloqueo

Con las opciones "Geolocalización y QR" y "Mapa Imagen y QR", se crea un **Bloqueo Automático** por Código Alfanumérico / Código QR adicional.

:::tip Ejemplo
Puedes llevar a un jugador hasta un punto geográfico, obligar a que esté a X metros de distancia, y luego pedirle un Código Alfanumérico (el nombre de una estatua), o que escanee un Código QR dentro de un local.
:::
