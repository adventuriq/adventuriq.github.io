---
sidebar_position: 1
title: ⚙️ Configuración General de Misiones
description: Cómo crear y configurar una Misión en AdventuriQ — campos básicos, orden, color, códigos de acceso, estado borrador y opciones generales del formulario en el Gamifier.
keywords: [misión, configuración, crear, orden, color, código, acceso, QR, borrador, gamifier, adventuriq]
---

# ⚙️ Configuración General de Misiones

:::info 🛠️ Quién puede hacer esto
**Game Master** y **Game Designer** (bajo supervisión del GM).
:::

La configuración general de una Misión es el punto de partida del formulario de edición en el Gamifier. Desde aquí defines los campos básicos que identifican la Misión (orden, color, estado) y los mecanismos de acceso (códigos alfanuméricos y QR). El resto de aspectos — visibilidad, imágenes, descripción, mapa, objetos digitales, notificaciones, condiciones de finalización y retos enlazados — se configuran en secciones específicas documentadas en sus páginas correspondientes.

## Crear una Misión

Para crear una nueva Misión, abre una Aventura en el Gamifier y localiza el apartado **Misiones** en la página de la Aventura. Pulsa el botón **+ Nueva Misión**. Se creará una Misión vacía con valores por defecto y se abrirá su formulario de edición.

El formulario de una Misión es una **página única con scroll vertical** que contiene todas las secciones de configuración, similar al editor de Aventura. En la cabecera se muestra el nombre de la Misión, la imagen de cabecera y el botón **Ver Aventura** para volver al editor de la Aventura padre.

![Formulario de edición de una Misión — cabecera con imagen y nombre, campos de configuración general, códigos de acceso con QR](/img/gamifier-mision-configuracion-general.png)

## Campos de configuración general 👑

La parte superior del formulario contiene los campos que identifican y controlan el acceso a la Misión:

| Campo | Descripción |
|---|---|
| **Aventura** | Referencia a la Aventura padre (solo lectura). Muestra el nombre de la Aventura a la que pertenece esta Misión. |
| **Requiere código** | Toggle que activa el bloqueo por código de acceso. Si se activa, el Player deberá introducir uno de los códigos configurados (o escanear un QR) para acceder a la Misión. |
| **Código de acceso** | Área de texto donde se escriben los códigos alfanuméricos, uno por línea. Cada código es válido para desbloquear la Misión. Admite emojis. |
| **Tamaño imágenes QR** | Tamaño en píxeles para la descarga de los códigos QR generados automáticamente a partir de los códigos de acceso. Valor por defecto: 150. |
| **Orden** | Posición numérica de la Misión en el listado de la Webapp. Determina en qué orden ve el Player las Misiones dentro de la Aventura. |
| **Tipo de Fondo para el listado** | Estilo visual del fondo de la tarjeta de la Misión en el listado de la Webapp. Opciones: "Color propio" (usa el color configurado) u otras variantes disponibles. |
| **Color** | Color hexadecimal asignado a la Misión. Se usa como fondo en la tarjeta del listado (si el tipo de fondo es "Color propio") y como color del marcador en los Mapas Geoposicionados. |

### Códigos de acceso y QR

Cuando se activa **Requiere código**, el Gamifier genera automáticamente un **código QR** por cada línea del campo de códigos de acceso. Los QR se muestran debajo del campo y se pueden descargar individualmente. El Player puede desbloquear la Misión escribiendo el código manualmente o escaneando el QR desde la Webapp.

:::tip 👑 Para el Game Master
Los códigos de acceso son útiles para gincanas presenciales donde los equipos encuentran el código en el mundo real (impreso, oculto, dicho por un animador). Configura un código distinto por equipo si quieres que cada grupo solo pueda acceder con "su" código.
:::

## Estado borrador

El toggle **Misión en estado borrador** permite mantener una Misión en construcción sin que sea visible ni jugable para los Players, independientemente de los ajustes de visibilidad y jugabilidad. Mientras esté en borrador, solo el Game Master y los Game Designers podrán verla.

## Listado de Misiones en la Aventura

Desde la página de la Aventura, el apartado Misiones muestra todas las Misiones creadas con su imagen en miniatura, número de Retos enlazados, ID, nombre, fechas de creación y última modificación, y un botón para eliminar.

El **orden** de las Misiones se puede cambiar arrastrando las filas en el listado o editando el campo Orden en el formulario de cada Misión. En la Webapp, el Player ve las Misiones en el orden configurado:

![Vista del Player — listado de Misiones en la Webapp, ordenadas por su número de orden, con imágenes y nombres](/img/webapp-misiones-listado.png)

:::warning Eliminar una Misión
Eliminar una Misión **no elimina los Retos** que contiene — solo los desenlaza. Los Retos siguen existiendo a nivel de Aventura y se pueden enlazar a otra Misión.
:::

## Estructura del formulario

El formulario completo de una Misión está organizado en las siguientes secciones, cada una documentada en su propia página:

1. **Configuración general** — campos básicos, códigos de acceso (esta página).
2. **[Bloqueos y Visibilidad](./bloqueos-visibilidad.md)** — estado borrador, visibilidad, jugabilidad, ventanas temporales.
3. **[Contenido e Imágenes](./contenido-imagenes.md)** — imagen de listado e imagen de cabecera.
4. **[Descripción](./descripcion.md)** — traducciones multiidioma con HTML enriquecido, audio y vídeo.
5. **[Mapas](./mapas.md)** — geolocalización o mapa imagen.
6. **[Objetos Digitales](./objetos-digitales.md)** — Objetos entregados al completar la Misión, con condiciones AND/OR.
7. **[Notificaciones](./notificaciones.md)** — llamadas simuladas al completar la Misión.
8. **[Condiciones de Finalización](./condiciones-finalizacion.md)** — cuándo se considera finalizada.

Al final del formulario aparece la sección **Retos**, que muestra los Retos enlazados a esta Misión con su orden, tipo, nombre e indicadores "Es Inicio" / "Es Fin" para los Mapas Geolocalizados.

## Continúa aprendiendo

- Siguiente paso: [Bloqueos y Visibilidad](./bloqueos-visibilidad.md).
- Cómo crear la Aventura padre: [Crear una Aventura](../aventuras/crear-aventura.md).
- Catálogo de Retos para enlazar: [Retos — los 10 tipos disponibles](../retos/index.md).
