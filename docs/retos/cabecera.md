---
sidebar_position: 3
title: Cabecera del Reto
---
# Cabecera del Reto

La cabecera es **común a todos los Retos**, excepto para la Mecánica de Pregunta/Respuesta que permite crear un Límite de Tiempo.

## Campos de la cabecera



| Campo | Descripción |
|---|---|
| **Código** | Control para la creación de Retos (solo para codificación de diseñadores) |
| **Distancia de desbloqueo** | Si el Mapa es geoposicionado, configura la distancia mínima del jugador |
| **Cuenta atrás** | Número positivo para configurar un temporizador (solo para Pregunta/Respuesta) |
| **Imagen listado** | 100x100 pixels, visible en el listado de Retos |
| **Imagen cabecera** | 1200x640 pixels, visible en la cabecera del Reto |
| **Audio** | Formato MP3, reproducible a nivel Reto |
| **Vídeo de portada** | Vídeo propio por idioma (MP4, WEBM, MOV u OGG), con opción de **Portada a pantalla completa**. Tiene prioridad sobre el Id de YouTube. Ver [Vídeo de portada](../aventuras/video-portada.md). |

:::warning El vídeo de portada del Reto depende de la Misión
Si la Misión tiene desactivado **«Mostrar el detalle de los Retos»**, el Player entra directo a la mecánica y no verá el vídeo de portada del Reto (salvo en Retos geolocalizados).
:::

## Título y Descripción

- **Título del Reto**: nombre visible en la Web App.
- **Descripción del Reto**: contenido narrativo con soporte HTML e iFrames.

## Cómo se ve la imagen de cabecera 🎮

La **Imagen cabecera** se usa de fondo a pantalla completa en la portada del Reto y en su pantalla de resultado. En horizontal, si el Reto tiene descripción, la imagen se ve entera en un panel junto al texto, y el Player puede tocarla para ampliarla; al jugar, queda a un lado y el enunciado y las respuestas al otro. Ver [La Webapp en horizontal](../webapp/webapp-en-horizontal.md).
