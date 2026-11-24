---
sidebar_position: 10
title: 🗺️ Mapas y Puntos de Interés
description: Configuración del mapa y los Puntos de Interés (POI) de una Aventura en AdventuriQ — geolocalización, mapa ilustrado, mapa imagen, premios en el mapa, jugar desde el mapa y «Cómo llegar».
keywords: [aventura, mapa, geolocalización, google maps, mapa ilustrado, mapa imagen, poi, punto de interés, cómo llegar, ruta, navegación, objetos digitales, gamifier, webapp, adventuriq]
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

La sección **Mapa** se encuentra en la ficha de la Aventura (entrada **Mapa** del índice lateral; los Puntos de Interés tienen su propia entrada, **POIs**).

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

Los POI se crean y gestionan desde el apartado **POIs** de la ficha de la Aventura (entrada **POIs** del índice lateral), con el botón **+ Nuevo POI**. Cada POI tiene su propia ficha con cabecera e índice lateral, igual que la Aventura. Se pueden crear tantos como sean necesarios para enriquecer la experiencia del mapa.

:::tip 👑 Para el Game Master
Usa los POI para señalar puntos de referencia, servicios (baños, cafetería, punto de información), ubicaciones de interés cultural o cualquier lugar relevante que el Player deba conocer pero donde no haya un Reto que completar. En una gymkana urbana, por ejemplo, un POI puede marcar "Aquí hay una fuente" o "Punto de encuentro".
:::

## Mapa del Player 👑 {#mapa-del-player}

En la ficha de la Aventura, dentro de **Opciones de la Aventura**, el bloque **«Mapa del Player»** decide cómo ve el Player el mapa geoposicionado y qué puede hacer desde él.

![Bloque Mapa del Player en las Opciones de la Aventura: Estilo del mapa con Ilustrado de noche marcado, el interruptor Con los colores de la marca activado, Premios en el mapa con Cubo sorpresa marcado y Al entrar en la Aventura, abrir con Misiones marcado](/img/gamifier-aventura-mapa-del-player.png)

| Opción | Valores | Qué hace |
|---|---|---|
| **Estilo del mapa** | **Ilustrado de día** (por defecto), **Ilustrado de noche** o **Clásico** | El mapa ilustrado es un mapa dibujado, con la cámara inclinada, edificios en relieve y los puntos de los Retos como medallones con su imagen. El clásico es el mapa de Google de siempre. |
| **Con los colores de la marca** | Interruptor, apagado por defecto. Solo aparece con un estilo ilustrado | El suelo, los edificios y las calles toman un tono del color de la marca, y las avenidas, el color de acento. El agua y los parques no cambian. |
| **Premios en el mapa** | **No mostrar** (por defecto), **Cubo sorpresa** u **Objeto a la vista** | Qué ve el Player sobre el punto de un Reto que da Objetos Digitales: nada, un cubo con «?» que no desvela el Objeto, o una miniatura del Objeto. Vale para toda la Aventura. |
| **Al entrar en la Aventura, abrir** | **Misiones** (por defecto) o **Mapa** | La primera pantalla que ve el Player al entrar. Si la Aventura no tiene mapa, se abre en Misiones. |

:::info El mapa ilustrado de día es ahora el mapa por defecto
Todas las Aventuras usan el estilo **Ilustrado de día** mientras no elijas otro, también las que creaste antes de que existiera esta opción. Si prefieres el mapa de Google de siempre, elige **Clásico**.
:::

Para configurarlo:

1. Ve a **Aventuras** y abre la ficha de la Aventura.
2. En el índice de la izquierda, pulsa **Opciones de la Aventura** y baja hasta el bloque **«Mapa del Player»**.
3. Elige el **Estilo del mapa**, los **Premios en el mapa** y qué se abre al entrar en la Aventura.
4. Pulsa **Guardar Aventura**.

### Un premio distinto en un Reto

En la ficha de cada Reto, en el apartado **Opciones y disponibilidad**, la opción **«Premio en el mapa»** permite que ese Reto enseñe su premio de forma distinta al resto de la Aventura. Lo tienes en [Bloqueos y Mapa del Reto](../retos/bloqueos-mapa.md#premio-en-el-mapa).

:::note Qué necesita
- La Aventura tiene un **mapa geoposicionado** con los Retos localizados. El mapa ilustrado y «Cómo llegar» no se aplican al **mapa imagen**.
- Los premios en el mapa solo se ven en los Retos con localización que dan **Objetos Digitales**.
:::

:::tip 👑 Con marcas muy claras
Con colores de marca muy claros (amarillos, por ejemplo), el mapa ilustrado de noche con los colores de la marca puede verse poco natural. En ese caso conviene dejar el interruptor apagado.
:::

## Relación con los mapas de Misión

El mapa de la Aventura es **independiente** de los mapas configurados en cada Misión. Sin embargo, los Retos geoposicionados de las Misiones pueden heredar sus coordenadas y pintarse como marcadores tanto en el mapa de la Aventura (visión global) como en el mapa de su propia Misión (visión local).

Para más detalle sobre la configuración de mapas a nivel de Misión, consulta [Mapas de Misión](../misiones/mapas.md).

## Cómo lo ve el Player 🎮 {#como-lo-ve-el-player}

El Player abre el mapa de la Aventura desde **Mapa**: en la barra de navegación inferior en vertical y en el menú lateral en horizontal. Si lo has elegido así en el Gamifier, la Aventura se abre directamente en el mapa.

- Con un **mapa imagen**, ve la imagen del mapa en un visor a pantalla completa con zoom. No hay puntos ni rutas.
- Con un **mapa geoposicionado**, ve el mapa que hayas elegido (si no has elegido nada, el ilustrado de día) con los puntos de los Retos y los POI.

:::note Lo que necesita el Player
Permiso de **ubicación** y **conexión a Internet**: el mapa ilustrado y las rutas no funcionan sin conexión.
:::

### Mapa ilustrado y mapa clásico

El botón de arriba a la derecha del mapa, siempre visible, cambia entre **«Mapa clásico»** y **«Mapa ilustrado»**.

![Mapa ilustrado de noche con los colores de la marca: los puntos de los Retos como medallones con su imagen, cubos sorpresa sobre los que dan premio, el botón Mapa clásico arriba y los botones de calidad, ver todos los puntos y centrar a la derecha](/img/webapp-mapa-ilustrado-noche.png)

<!-- 📸 CAPTURA PENDIENTE: /img/webapp-mapa-ilustrado.png — Mapa ilustrado de día con medallones -->

| Mapa | Cómo se ven los puntos | Botones propios |
|---|---|---|
| **Ilustrado** | Medallones con la imagen del Reto. | **Ajustar la calidad** (engranaje: automática, alta, media o baja), **ver todos los puntos** y **centrar en su posición**. |
| **Clásico** | Chinchetas con el color del punto y su número de orden dentro. La punta señala el sitio exacto. El punto de inicio lleva una estrella y el final, una bandera. | — |

En los dos mapas, la posición del Player aparece como un punto con el color de la marca.

![Mapa clásico en horizontal: chinchetas numeradas, el punto de inicio con una estrella, cubos sorpresa sobre los Retos que dan premio y el menú lateral con Misiones, Mapa, Bitácora e Info](/img/webapp-mapa-chinchetas.png)

La calidad del mapa ilustrado se ajusta sola a la potencia del dispositivo. Si el dispositivo no puede con el mapa ilustrado, se ve el clásico.

### Qué indica cada punto

| El Player ve… | Qué significa |
|---|---|
| Un **cubo con «?»** o la **miniatura de un Objeto** | El Reto da un Objeto Digital y has activado los premios en el mapa. Se ve en los dos mapas y desaparece en cuanto el Player juega ese Reto. |
| El punto **atenuado y con un check** | El Reto ya está jugado. |
| Una **bandera** | El Reto pertenece a una Misión o una Aventura finalizada. |

![Mapa centrado en un Reto ya jugado: el punto 6 se ve atenuado y con un check verde, y otro punto pendiente conserva su cubo sorpresa](/img/webapp-mapa-premios-y-check.png)

### La ficha de un punto

Al tocar un punto se abre su ficha: la imagen del Reto arriba, el título, un aviso si ya lo ha realizado, el premio si se enseña (por ejemplo, «Aquí hay un premio sorpresa») y la descripción. Debajo están los botones **«Jugar»** y **«Cómo llegar»**. Si la descripción no cabe, aparece una flecha abajo para seguir leyendo. La ficha se cierra con la **✕** de arriba a la derecha.

![Ficha de un punto del mapa: imagen del Reto, título, aviso Aquí hay un premio sorpresa, descripción y los botones Jugar y Cómo llegar, con la X de cerrar arriba a la derecha](/img/webapp-mapa-ficha-jugar.png)

### Jugar desde el mapa

1. El Player toca el punto de un Reto pendiente: se abre su ficha.
2. Pulsa **«Jugar»** y va directamente al Reto. El botón solo aparece si el Reto se puede jugar en ese momento.
3. Al terminar (resultado, Objetos y, si el Reto cierra la Misión, su final), la Webapp vuelve al mismo mapa, centrada en ese punto, que ya se ve atenuado y con su check.

Así se puede hacer la Aventura entera desde el mapa. Funciona desde cualquier mapa: el de la Aventura, el de una Misión o el de un Reto. Si el Player empezó el Reto desde el listado, vuelve al listado, como siempre.

- Los mapas que se abren desde la portada de la Aventura, de una Misión o de un Reto tienen un botón **«Bitácora»**.
- En horizontal, la barra lateral tiene una **flecha para volver** a la entrada de la Aventura (o de la Misión).

<!-- 📸 CAPTURA PENDIENTE: /img/webapp-mapa-bitacora.png — Mapa abierto desde una portada con el botón «Bitácora» -->

### «Cómo llegar» y modo navegando

1. En el mapa, el Player toca un punto y pulsa **«Cómo llegar»**: la Webapp dibuja la ruta desde su posición hasta el punto, con la **Distancia** y el **Tiempo**.
2. Elige **A pie** (por defecto), **En coche** o **En bici**.
3. Pulsa **«Empezar»**: el mapa le acompaña mirando hacia donde camina, borra el tramo ya andado y actualiza la distancia y el tiempo que faltan.
4. Al llegar aparece **«¡Has llegado!»** y, si el Reto se puede jugar, el botón **«Jugar»**.

![Ruta a pie dibujada en el mapa desde la posición del Player hasta el punto, con el panel que muestra A pie, En coche y En bici, la distancia, el tiempo y los botones Empezar e Ir con Google Maps](/img/webapp-mapa-como-llegar.png)

![Modo navegando: el mapa gira hacia donde camina el Player, queda solo el tramo de ruta pendiente y el panel muestra la distancia y el tiempo que faltan](/img/webapp-mapa-navegando.png)

![Panel Has llegado con el nombre del punto y el botón Jugar](/img/webapp-mapa-has-llegado.png)

- Si el Player se sale de la ruta, aparece «Recalculando la ruta…» y se dibuja una nueva desde donde está.
- Si mueve el mapa con el dedo, **«Mi posición»** vuelve a seguirle.
- La **✕** del panel sale de la navegación.
- **«Ir con Google Maps»** abre la ruta en la app de Google Maps.

:::warning Dónde funciona «Cómo llegar»
El punto tiene que estar en **España (incluidas Canarias), Andorra o Portugal**. Fuera de esa zona, el panel indica que no se puede dibujar la ruta y queda el botón «Ir con Google Maps». Los tiempos en coche no tienen en cuenta el tráfico.
:::

### Cosas que conviene saber

- **Qué puntos se ven.** El mapa de la Aventura no muestra los Retos de Misiones ocultas, en borrador o bloqueadas por Llave o código. Los de una Misión visible pero aún no jugable se ven sin «Jugar».
- **Batería.** La ubicación deja de usarse cuando un Reto tapa el mapa o la Webapp pasa a segundo plano, y la pantalla se mantiene encendida solo mientras se navega.
- **Al girar el móvil** o cambiar de pestaña dentro de la Aventura, la ruta se conserva.
- **Imágenes ampliadas.** Cualquier imagen que el Player amplía (portada, Reto, Galería, premio) se abre en el mismo visor a pantalla completa con zoom, con un aviso y **Reintentar** si no carga.

## Continúa aprendiendo

- Mapas a nivel de Misión: [Mapas de Misión](../misiones/mapas.md).
- Configuración general de la Aventura: [Configuración de una Aventura](./configuracion.md).
- Premio en el mapa de un Reto concreto: [Bloqueos y Mapa del Reto](../retos/bloqueos-mapa.md#premio-en-el-mapa).
- El mapa con el móvil tumbado: [La Webapp en horizontal](../webapp/webapp-en-horizontal.md).
