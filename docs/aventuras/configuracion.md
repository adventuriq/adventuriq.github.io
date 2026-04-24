---
sidebar_position: 1
title: ⚙️ Configuración de una Aventura
description: Guía completa de configuración de una Aventura en AdventuriQ — estado, fechas, Game PIN, idiomas, imágenes, visibilidad, mapas, equipos y más. Todo desde el Gamifier.
keywords: [aventura, configuración, gamifier, estado, draft, published, game pin, idioma, zona horaria, licencia, equipos, clanes, visibilidad, mapas, condiciones, adventuriq]
---

# ⚙️ Configuración de una Aventura

:::info 🛠️ Quién puede hacer esto
**Game Master** y **Game Designer** (bajo supervisión del GM).
:::

La configuración de una Aventura es la zona más extensa del Gamifier. Desde aquí defines todo lo que necesita tu Aventura para funcionar: cuándo se juega, en qué idioma, cómo acceden los Players, qué ven en su Bitácora, si juegan en equipo o en solitario, y mucho más.

Esta página es tu **referencia centralizada**. Encontrarás cada apartado explicado brevemente con un enlace a su página específica donde se profundiza.

## 🎯 Para qué sirve

El editor de Aventura es el centro de control donde el Game Master y el Game Designer configuran todos los aspectos de la experiencia gamificada antes (y durante) su publicación. Desde el estado de la Aventura hasta las condiciones de finalización, todo se gestiona desde esta única pantalla del Gamifier.

## 📍 Dónde se configura

Desde el Gamifier, accede al **listado de Aventuras** y haz clic en la Aventura que quieras configurar. Se abrirá el editor con la cabecera, los indicadores de jugadores y todas las secciones de configuración en una página con scroll vertical.

![Cabecera del editor de Aventura en el Gamifier — imagen de la Aventura, nombre, botones de acción rápida e indicadores de jugadores](/img/gamifier/aventuras/gamifier-editor-cabecera.png)

## 🔧 Panel principal y acciones rápidas

La cabecera del editor ofrece acceso directo a las herramientas de gestión de la Aventura:

| Botón | Función |
|---|---|
| **Raze** | Resetea la Aventura: elimina todos los estados de juego y los Objetos Digitales entregados a los Players, pero NO elimina a los Players del sistema (siguen teniendo la Aventura asociada) |
| **Eliminar mis jugadas** | Borrado de los estados de juego del Game Designer actual |
| **Eliminar mis objetos** | Borrado de los Objetos Digitales obtenidos por el Game Designer actual |
| **Clasificación** | Acceso a las métricas de la Aventura (listado de Players) |
| **Game Board** | Acceso a las métricas basadas en los Retos |
| **Ranking HTML** | Mejores 10 Players en formato HTML publicable |
| **Descargar Galería** | Descarga en ZIP todas las imágenes que los Players han subido mediante Retos de tipo "Compartir Foto" |
| **Tags** | Etiquetado de Objetos Digitales. Cada Tag se muestra como una pestaña en el Baúl del Player, facilitando organizar los Objetos por tipo (Medallas, Pistas, Recompensas, etc.) |
| **Biblioteca de Medios** | Gestor unificado de archivos multimedia (imágenes, vídeos, audios) de la Aventura con arrastrar-soltar, vistas en cuadrícula o lista, y control de espacio ocupado |

:::danger Raze es irreversible
El botón **Raze** elimina **todos los estados de juego y los Objetos Digitales entregados a los Players** (los Players siguen en el sistema con la Aventura asociada, pero empezarán desde cero). Esta acción no se puede deshacer.

Además, cada Player que vuelva a iniciar la Aventura tras un Raze consumirá **otro Token**. Úsalo solo cuando necesites reiniciar la Aventura por completo.
:::

### Indicadores de jugadores

Justo debajo de la cabecera, cinco indicadores muestran el estado de participación en tiempo real:

| Indicador | Qué mide |
|---|---|
| **Han añadido la Aventura** | Players que han introducido el GamePIN |
| **Han iniciado Aventura (Tokens)** | Players que han pulsado "Adelante" y consumido un Token |
| **Han finalizado la Aventura** | Players que han cumplido las condiciones de finalización |
| **Con Ranking** | Players que han resuelto al menos un Reto y siguen jugando |
| **Sin Ranking** | Players que han accedido pero aún no han resuelto ningún Reto |

## 📋 Configuración general

Directamente debajo de los indicadores encontrarás los campos de configuración básica de la Aventura:

![Campos de configuración general — fechas, estado, idioma, zona horaria y licencia](/img/gamifier/aventuras/gamifier-config-general.png)

| Campo | Descripción |
|---|---|
| **Empieza / Acaba** | Fechas y horas que delimitan cuándo la Aventura es jugable. Fuera de este intervalo, los Players no pueden acceder. |
| **Estado** | **Published** (jugable por Players) o **Draft** (solo jugable por Game Masters y Game Designers asignados). |
| **Idioma por defecto** | Idioma principal de la Aventura. Se pueden añadir hasta 9 traducciones adicionales (10 idiomas en total). |
| **Zona Horaria** | Zona horaria que aplica a las fechas de la Aventura. |
| **Licencia de Aventura** | Información sobre la Licencia activa, número de Tokens restantes, y accesos a "Asignar licencia" e "Ir a la Tienda". |

:::warning Estado Draft vs Published
Mientras la Aventura esté en **Draft**, solo tú y los Game Designers asignados podréis jugarla (sin gastar Tokens). Cambia a **Published** cuando esté lista para los Players.
:::

:::tip
Configura las fechas **Empieza / Acaba** antes de publicar. Si no defines fechas, la Aventura estará disponible indefinidamente una vez publicada.
:::

## 🔑 Acceso a la Aventura

Cada Aventura tiene un **GamePIN** único de 9 dígitos que se genera automáticamente al crearla. Es el código que los Players introducen en la Webapp para unirse a tu Aventura.

![Sección Acceso a la Aventura — Game PIN, enlace directo, código QR y bloqueo por código alfanumérico](/img/gamifier/aventuras/gamifier-gamepin.png)

Desde esta sección puedes:

- Consultar el **GamePIN** y copiarlo para compartirlo con los Players.
- Obtener un **enlace directo** a la Aventura (URL con el GamePIN incluido).
- Descargar un **código QR** que los Players pueden escanear para unirse directamente.
- Activar un **bloqueo por código de acceso** alfanumérico para restringir el acceso.

> Ver detalle en [Acceso a la Aventura](game-pin-bloqueos).

## 🖼️ Imágenes de la Aventura

Tres imágenes configuran la identidad visual de tu Aventura en la Webapp:

| Imagen | Tamaño recomendado | Dónde aparece |
|---|---|---|
| **Imagen listado** | 725 × 490 px | Listado de Aventuras del Player |
| **Imagen cabecera** | 1200 × 640 px | Cabecera de la Aventura |
| **Logo del Patrocinador** | 400 × 125 px | Zonas promocionales |

Formatos permitidos: JPEG, PNG, GIF.

> Ver detalle en [Imágenes de la Aventura](imagenes).

## 🌍 Idiomas y traducciones

AdventuriQ soporta hasta **10 idiomas simultáneos** por Aventura. El idioma por defecto se establece en la configuración general, y las traducciones adicionales se gestionan desde la sección **Traducciones** del editor.

Los campos traducibles incluyen: Título, Resumen, Descripción visible, Descripción extendida y Mensaje final de la Aventura. Todos admiten formato enriquecido (negritas, colores, iFrames, listas).

> Ver detalle en [Idiomas y traducciones](idiomas-traducciones).

## 👁️ Opciones de la Aventura

Esta sección contiene los toggles que controlan qué ve el Player en su experiencia. Son interruptores que activas o desactivas según el diseño de tu Aventura:

![Toggles de opciones — visibilidad de Puntos, Ranking, Baúl, Galería, Muro y más](/img/gamifier/aventuras/gamifier-toggles-visibilidad.png)

| Toggle | Efecto si se desactiva |
|---|---|
| **Visualizar Puntos** | El Player no verá feedback de Puntos |
| **Visualizar Posición y Ranking** | El Player no verá su posición ni la clasificación |
| **Visualizar Ranking Diario** | Se oculta el ranking del día |
| **Visualizar Baúl** | El Player no tendrá acceso al Baúl de Objetos Digitales |
| **Visualizar Galería de imágenes** | Se oculta la Galería de fotos compartidas |
| **Visualizar Muro** | Se oculta el Muro de actividad |
| **Volver a jugar** | El Player no podrá reiniciar la Aventura |
| **Activar envío de emails** | Controla las notificaciones por correo |
| **Activar Nube de Palabras en la bitácora** | Muestra u oculta la Nube de Palabras en la Bitácora |

:::tip
Combina estos toggles para crear diferentes [dinámicas de juego](/conceptos-basicos#-dinámicas-de-juego): competitiva (todo visible), auto-competitiva (Puntos sí, Ranking no), o exploratoria (sin puntos, solo Objetos Digitales).
:::

> Ver detalle en [Opciones de la Aventura](visibilidad-controles).

## 🗺️ Mapas y geolocalización

Tu Aventura puede tener un Mapa que se muestra en la Webapp. Existen dos tipos:

| Tipo | Descripción |
|---|---|
| **Geolocalización** | Mapa de Google Maps con posición Latitud/Longitud |
| **Mapa Imagen** | Recurso gráfico personalizado (tamaño recomendado 1200 × 1950 px) |

Los Retos geoposicionados de las Misiones pueden heredar sus coordenadas y pintarse como marcadores en el Mapa de la Aventura.

> Ver detalle en [Mapas de la Aventura](mapas).

## 🏁 Condiciones de finalización

La Aventura finaliza automáticamente para cada Player cuando se cumple alguna de las condiciones configuradas. AdventuriQ ofrece **6 tipos de condición**:

1. Si ha finalizado **todas las Misiones** (por defecto).
2. Si ha finalizado **las Misiones seleccionadas** (por ID).
3. Si ha finalizado **un número determinado** de Misiones.
4. Si han transcurrido **un número de segundos** desde el inicio.
5. Si el Player ha conseguido un total de **Puntos igual o mayor** a X.
6. Si el **Clan** ha conseguido un total de Puntos igual o mayor a X.

Se pueden programar **múltiples condiciones simultáneamente**. La primera que se cumpla finaliza la Aventura para ese Player.

> Ver detalle en [Condiciones de finalización](condiciones-finalizacion).

## 👥 Modo de juego y Equipos

Las Aventuras pueden jugarse en dos modos:

| Modo | Característica |
|---|---|
| **Individual** | Cada Player compite por su cuenta. Solo existe clasificación individual. |
| **Por Equipos** | La puntuación individual se suma a la del Equipo (Clan). Aparecen clasificaciones adicionales: dentro del Equipo y por Equipos (Ranking global). |

![Sección Modo de Juego configurada "En equipo" con 5 Clanes — la captura muestra una Aventura en modo Por Equipos con Clanes configurados; si tu Aventura está en modo Individual, no verás los Clanes](/img/gamifier/aventuras/gamifier-modo-juego.png)

:::info Clanes opcionales
El modo Por Equipos y los Clanes son completamente opcionales. Solo aplican si el diseño de tu Aventura lo requiere. Consulta la [sección de Clanes en Conceptos Básicos](/conceptos-basicos#-clanes-opcional) para más contexto.
:::

> Ver detalle en [Equipos (Clanes)](equipos).

## 🎮 Así lo verá el Player

Una vez publicada, el Player accede a la Aventura desde la Webapp introduciendo el GamePIN o escaneando el código QR. Verá la lista de Misiones con su imagen, nombre, número de Retos y puntos acumulados:

![Vista del Player en la Webapp — listado de Misiones de la Aventura en formato móvil](/img/webapp/aventuras/webapp-aventura-player.png)

Todo lo que configuras en el Gamifier tiene impacto directo en esta experiencia: las fechas determinan cuándo puede jugar, los toggles de visibilidad controlan qué secciones aparecen en su Bitácora, y las imágenes definen la identidad visual de la Aventura.

:::tip Pruébalo tú mismo
Antes de publicar tu Aventura, juégala con un usuario con rol de Game Master o Game Designer asignado. No gastarás Tokens y podrás verificar que todo se ve y funciona como esperas.
:::

## 📚 Continúa aprendiendo

Cada aspecto de la configuración tiene su página dedicada con explicación detallada:

| Sección | Qué encontrarás |
|---|---|
| [Publicación y fechas](publicacion-fechas) | Estado Draft/Published, automatización temporal |
| [Acceso a la Aventura](game-pin-bloqueos) | GamePIN, enlace directo, QR, bloqueos por código |
| [Opciones de la Aventura](visibilidad-controles) | Toggles de visibilidad para la Bitácora del Player |
| [Imágenes](imagenes) | Imagen de listado, cabecera y logo del patrocinador |
| [Idiomas y traducciones](idiomas-traducciones) | Contenido multiidioma y campos traducibles |
| [Contenido y descripción](contenido-descripcion) | Textos enriquecidos de la Aventura |
| [Condiciones de finalización](condiciones-finalizacion) | Las 6 condiciones de fin de Aventura |
| [Mapas](mapas) | Geolocalización y mapas imagen |
| [Equipos (Clanes)](equipos) | Modo Individual vs Por Equipos |
| [Retos de la Aventura](retos-aventura) | Listado y gestión de Retos |
| [Puntos de Interés (POI)](poi) | Marcadores en el mapa |
