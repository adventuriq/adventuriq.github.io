---
sidebar_position: 5
title: 🎮 Bitácora del Player
description: La Bitácora es el centro de control del Player dentro de una Aventura — progreso, Baúl, Galería, Clasificación, Muro y mecánicas sociales.
keywords: [player, webapp, bitacora, aventura, baul, galeria, clasificacion, muro, votar, equipo, nube-palabras, adventuriq]
---

# 🎮 Bitácora del Player

:::info 🎮 Vista del Player
Esta página describe lo que el **Player** ve en la Webapp. Se incluye en el manual del Game Master para que pueda diseñar la experiencia sabiendo qué verán los Players y resolver sus dudas durante el juego.
:::

La **Bitácora** es el centro de control del Player dentro de una Aventura. Desde aquí consulta su progreso, accede a los objetos que ha ganado, ve la clasificación, interactúa con otros Players y gestiona su pertenencia a un equipo cuando aplica.

El Player accede a la Bitácora pulsando el icono **Bitácora** en la barra de navegación inferior de la Webapp, que está siempre visible durante el juego.

![Vista general de la Bitácora con todas las zonas activas — cabecera con avatar y puntos, botón de equipo, estrellas de votos, y los seis cuadrantes de navegación](/img/webapp-bitacora-vista-general.png)

## Anatomía de la Bitácora

La Bitácora se compone de **zonas fijas** que siempre están presentes y **zonas condicionales** que aparecen según la configuración del Game Master y el estado de la Aventura.

### Zonas fijas

Toda Bitácora muestra siempre tres elementos: la **cabecera** con los datos del Player, la **cuadrícula de cuadrantes** principales (Baúl, Galería, Clasificación y Muro) y la **barra de navegación inferior** con las pestañas Misiones, Mapa, Bitácora e Info.

### Zonas condicionales

Además de las zonas fijas, pueden aparecer hasta cinco zonas adicionales organizadas en tres categorías según la causa de su aparición:

| Categoría | Zona | Aparece cuando… |
|---|---|---|
| **Modo de juego** | Botón "+ Unirse a un Equipo" | La Aventura está en modo Equipo |
| **Feature del GM** | Bloque de estrellas (votos recibidos) | El GM activa el sistema de Votaciones |
| **Feature del GM** | Cuadrante "Votar" | El GM activa el sistema de Votaciones |
| **Feature del GM** | Cuadrante "Nube de Palabras" | La Aventura tiene al menos un Reto de tipo Nube de Palabras |
| **Estado de Aventura** | Cuadrante "Final de Aventura" | Se cumplen las condiciones de finalización configuradas por el GM |
| **Estado de Aventura** | Cuadrante "Volver a Jugar" | Se cumplen las condiciones de finalización **y** el GM ha activado "El Player puede volver a jugar" |

Las categorías son independientes entre sí. Una Aventura puede mostrar cualquier combinación: solo los cuadrantes fijos, fijos más algunos condicionales, o todos a la vez. Los cuadrantes condicionales se añaden a la cuadrícula sin reemplazar los existentes, por lo que la rejilla puede crecer hasta un máximo de **8 cuadrantes**.

## Cabecera

La parte superior de la Bitácora muestra la información del Player: su **avatar**, su **nickname** (nombre elegido al unirse a la Aventura), un círculo central con los **puntos totales** acumulados y dos contadores: **Retos realizados** y **Puntos**.

![Detalle de la cabecera de la Bitácora — avatar, nickname "Dooku", puntos totales en el círculo central, y contadores de Retos realizados y Puntos](/img/webapp-bitacora-cabecera.png)

## Equipo

Cuando la Aventura está configurada en **modo Equipo**, debajo de la cabecera aparece el botón **"+ Unirse a un Equipo"**. Al pulsarlo, el Player ve un carrusel con los equipos disponibles. Cada tarjeta muestra el escudo del equipo, su nombre y el número de miembros actuales, junto con un botón **"Unirme"** para incorporarse.

![Pantalla de selección de equipo — carrusel de tarjetas con el escudo, nombre y número de miembros de cada equipo disponible](/img/webapp-bitacora-equipo-unirse.png)

Si el Player ya pertenece a un equipo, el botón refleja esa pertenencia.

:::info
El modo de juego (Individual o Equipo) se establece en el formulario de Aventura del Gamifier.
:::

## Estrellas de votos recibidos

Cuando el Game Master activa el sistema de **Votaciones**, debajo del bloque de equipo (o directamente debajo de la cabecera si no hay equipo) aparece un bloque con **5 estrellas** y el número de votos que el Player ha recibido de otros participantes.

![Bloque de 5 estrellas con el contador de votos recibidos](/img/webapp-bitacora-estrellas-votos.png)

Este bloque aparece desde el inicio de la Aventura con "0 votos" y se actualiza conforme otros Players voten. Las estrellas reflejan la valoración media recibida.

## Los cuatro cuadrantes principales

La cuadrícula de la Bitácora muestra siempre cuatro cuadrantes fijos organizados en dos columnas. Cada cuadrante da acceso a una funcionalidad distinta de la Aventura.

### Baúl

El Baúl muestra los **Objetos Digitales** que el Player ha obtenido como recompensa al completar Retos y Misiones. La pantalla tiene pestañas para filtrar por categoría (en este ejemplo, "Todos" y "Teletransport"). Cada objeto aparece con su icono y nombre.

![Pantalla del Baúl — lista de Objetos Digitales obtenidos como recompensa, con pestañas de filtro por categoría](/img/webapp-bitacora-baul.png)

### Galería

La Galería recopila las **imágenes** generadas durante la Aventura, típicamente fotos que los Players suben al completar Retos de tipo "Compartir foto". Las imágenes se organizan en tres pestañas: **Todas** (todas las de la Aventura), **Mías** (solo las del Player) y **Mi Clan** (las del equipo del Player, si aplica).

![Pantalla de la Galería — pestañas Todas, Mías y Mi Clan para filtrar las imágenes de la Aventura](/img/webapp-bitacora-galeria.png)

:::warning
Las imágenes de la Galería solo son accesibles dentro de la Aventura. Solo el Game Master puede descargarlas desde el Gamifier.
:::

### Clasificación

La Clasificación muestra el **ranking** de todos los Players de la Aventura, ordenados por puntuación. Cada entrada incluye la posición, el avatar, el nombre y los puntos acumulados. En la parte inferior aparece una barra fija con los datos del Player actual para que siempre pueda ver su posición sin necesidad de buscar.

![Clasificación por Jugador/a — ranking con posición, nombre y puntos de cada Player, más barra inferior con los datos del Player actual](/img/webapp-bitacora-clasificacion.png)

La Clasificación cuenta con cinco pestañas en la parte inferior que permiten visualizar el ranking desde distintas perspectivas: clasificación general, diaria, por progreso, lista ordenada y clasificación global. En modo Equipo, también está disponible la vista de ranking por equipos.

### Muro

El Muro es el **feed social** de la Aventura. Muestra las respuestas públicas de los Players a los Retos, creando un tablón donde los participantes pueden ver lo que otros han respondido. Cada entrada muestra el nombre del Player, el Reto al que respondió, su respuesta y la fecha.

El Muro tiene tres pestañas para filtrar el contenido: **Público** (todas las publicaciones), **Mías** (solo las del Player) y **Mi Clan** (las del equipo). También incluye un campo de búsqueda para filtrar mensajes.

![Pantalla del Muro — feed de respuestas públicas con filtros Público, Mías y Mi Clan, y campo de búsqueda](/img/webapp-bitacora-muro.png)

## Cuadrantes por feature del GM

Cuando el Game Master activa determinadas features en la configuración de la Aventura, aparecen cuadrantes adicionales en la cuadrícula.

### Votar

Cuando el GM activa el **sistema de Votaciones**, aparece el cuadrante "Votar" en la cuadrícula. Al pulsarlo, el Player accede a un listado alfabético de todos los participantes de la Aventura con un campo de búsqueda para localizarlos. Desde aquí puede votar a otros Players usando una escala de hasta 5 niveles, cada uno con un icono personalizado por el GM y una puntuación asociada. El Player puede añadir opcionalmente un comentario con su voto.

![Pantalla de votación — lista alfabética de Players con campo de búsqueda y valoraciones recibidas](/img/webapp-bitacora-votar.png)

El detalle del sistema de Votaciones se documentará en una página dedicada.

### Nube de Palabras

Cuando la Aventura incluye al menos un Reto de tipo **Nube de Palabras**, aparece el cuadrante correspondiente en la cuadrícula. Al pulsarlo, el Player accede a la vista agregada de palabras aportadas por todos los participantes. Si la Aventura tiene varios Retos de este tipo, se muestra un selector para elegir cuál consultar.

![Pantalla de Nube de Palabras — vista inicial pidiendo seleccionar un Reto para ver la nube generada](/img/webapp-bitacora-nube-palabras.png)

El tipo de Reto Nube de Palabras se documentará en su propia página dentro de la sección de Retos.

## Cuadrantes por estado de Aventura

Cuando la Aventura alcanza su estado de **finalización** (porque se cumplen las condiciones configuradas por el Game Master), pueden aparecer hasta dos cuadrantes adicionales en la cuadrícula. Los nuevos cuadrantes se insertan en la rejilla junto a los existentes, que pueden reorganizarse para acomodarlos.

![Bitácora en estado finalizado — la cuadrícula muestra ocho cuadrantes: los seis habituales más "Final Aventura" y "Volver a jugar"](/img/webapp-bitacora-final-aventura-pastilla.png)

### Final de Aventura

Cuando se cumplen las **condiciones de finalización** de la Aventura, aparece la pastilla "Final Aventura" en la cuadrícula. Al pulsarla, el Player ve una pantalla de celebración con el **Mensaje Final** que el Game Master ha configurado desde el formulario de Aventura, acompañado de un icono de trofeo, la imagen configurada y una animación de confeti. Este mensaje puede incluir texto enriquecido y estar disponible en varios idiomas.

![Pantalla de celebración del Final de Aventura — trofeo, mensaje "¡Felicidades! Has finalizado la Aventura", imagen configurada por el GM y confeti](/img/webapp-bitacora-final-aventura-mensaje.png)

La primera vez que el Player accede a la Aventura tras cumplirse las condiciones de finalización, esta pantalla de celebración se muestra automáticamente a pantalla completa. Después, el Player puede volver a consultarla en cualquier momento desde la pastilla "Final Aventura" de la Bitácora.

Las condiciones de finalización y el campo «Mensaje Final Aventura» se configuran desde el formulario de Aventura en el Gamifier.

### Volver a Jugar

Cuando la Aventura ha finalizado **y** el Game Master ha activado la opción "El Player puede volver a jugar", aparece además la pastilla "Volver a Jugar". Al pulsarla, el Player accede a una pantalla informativa que explica las consecuencias del reinicio y solicita confirmación antes de proceder.

![Pantalla de Volver a Jugar — aviso de que se eliminarán estados, puntos, objetos y progreso, con botón de confirmación](/img/webapp-bitacora-volver-jugar.png)

La pantalla indica que al volver a jugar se eliminarán **todos los estados de juego, los puntos, los objetos y todo el progreso** del Player en la Aventura. El reinicio es completo: el Player comienza la Aventura desde cero como si fuera la primera vez.

:::warning
El reinicio es irreversible. Una vez confirmado, no se pueden recuperar los puntos, objetos ni el progreso anterior del Player en esa Aventura.
:::

:::info
La pastilla "Volver a Jugar" requiere dos condiciones simultáneas: que la Aventura haya alcanzado su estado de finalización y que el GM haya activado explícitamente la opción. Si la Aventura finaliza pero esta opción no está activa, la pastilla no aparece.
:::

## Cómo controla el Game Master lo que ve el Player

:::tip 👑 Para el Game Master
La Bitácora se adapta automáticamente según tres factores: el **modo de juego** (Individual o Equipo), las **features activadas** por el GM (Votaciones, tipos de Reto) y el **estado de la Aventura** (en curso o finalizada). Todos estos parámetros se configuran desde el formulario de Aventura en el Gamifier.
:::
