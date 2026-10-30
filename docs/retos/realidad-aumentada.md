---
sidebar_position: 10.5
title: 🥽 Realidad Aumentada
description: Reto en el que el Player apunta con la cámara del móvil a una imagen del decorado y aparece un objeto 3D con opciones de respuesta; al responder, el objeto se anima. Sin instalar nada.
keywords: [reto, realidad aumentada, ar, webar, 3d, glb, marcador, mind, cámara, gamifier, webapp, adventuriq]
---

# 🥽 Realidad Aumentada

<img src="/img/retos-iconos/reto-icon-realidad-aumentada.png"
     alt="Icono del Reto Realidad Aumentada"
     className="reto-icon" />

En el Reto de **Realidad Aumentada** el Player apunta con la cámara de su móvil a una **imagen del decorado** (un cartel, una lámina, una página impresa…) y sobre ella aparece un **objeto 3D**. Debajo, las opciones de respuesta; al elegir una, el objeto reproduce una **animación** y el Player recibe sus puntos, como en cualquier otro Reto.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master / Game Designer** (configuración del Reto en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 🛠️ o 🎮 según corresponda.
:::

Casos de uso típicos: museos y rutas turísticas donde un cartel "cobra vida", escape rooms con pistas escondidas en el decorado, formación técnica en la que el Player identifica una pieza en 3D y eventos de marca con un objeto que aparece sobre un photocall.

## Cómo funciona

El Reto se apoya en tres piezas que preparas tú:

1. **Un modelo 3D** (archivo `.glb` o `.gltf`), con animaciones si quieres que se mueva al responder.
2. **Una imagen marcador**: la imagen que la cámara tiene que reconocer. Es la misma que vas a imprimir o colocar en el decorado.
3. **Una pregunta con sus respuestas** (opcional): si no la pones, el Reto solo muestra el objeto.

La realidad aumentada funciona **dentro del navegador del Player**, sin instalar ninguna app. Está validada en iPhone (Safari) y Android (Chrome).

:::note Antes de empezar
- Necesitas una Aventura con al menos una **Misión** donde añadir el Reto.
- Ten a mano el **modelo 3D** y la **imagen marcador**. Si quieres usar animaciones, el modelo debe traer **clips de animación con nombre** (puedes consultarlos en cualquier visor de archivos glTF).
- El Player necesita un móvil con **cámara** y tendrá que **dar permiso de cámara** al navegador.
:::

## Configuración del Reto en el Gamifier 🛠️

### Crear el Reto

Dentro de una Misión, pulsa **+ Nuevo Reto** y elige la tarjeta **Realidad Aumentada** en el selector de tipos.

![Tarjeta Realidad Aumentada en el selector de tipos de Reto del Gamifier](/img/gamifier-reto-ar-selector.png)

Rellena el título y la descripción y guarda: se crea el Reto y aparece el bloque de su mecánica.

### Escena 3D / Realidad Aumentada

En el bloque **Escena 3D / Realidad Aumentada** subes los archivos y ajustas cómo se coloca el objeto:

![Bloque Escena 3D / Realidad Aumentada: modelo 3D subido, imagen marcador, target generado automáticamente y campos de escala y ajuste vertical](/img/gamifier-reto-ar-escena-3d.png)

| Campo | Descripción |
|---|---|
| **Modelo 3D (.glb)** | Pulsa **Subir modelo (.glb/.gltf)**. Verás una barra de progreso mientras se sube. |
| **Imagen marcador** | Pulsa **Subir marcador**. Al terminar la subida, el editor **genera automáticamente** el archivo de reconocimiento (verás «Generando target…» con su progreso). |
| **Target de reconocimiento (.mind)** | Se rellena solo: aparece **«Target generado automáticamente»**. Si lo prefieres, puedes **subir manualmente** un `.mind` ya compilado. |
| **Escala del modelo** | Arranca en un valor seguro (**0.01**). Súbelo o bájalo hasta que el objeto tenga buen tamaño sobre el marcador. |
| **Ajuste vertical (Y)** | Sube o baja el objeto respecto al marcador (ver la guía más abajo). |
| **Girar automáticamente** | Hace que el objeto gire sobre sí mismo. |
| **Animación por defecto** | Clip que se reproduce si el Reto no tiene pregunta. |

Cada archivo tiene su botón **«Quitar»** para eliminarlo o reemplazarlo por otro. Al quitar la imagen marcador también se elimina su target asociado. Si una subida falla, el editor te avisa.

:::tip 🛠️ Elige bien la imagen marcador
La calidad del marcador lo es todo. Funcionan mucho mejor las imágenes **con mucho detalle y buen contraste**. Las imágenes lisas, muy brillantes o uniformes se reconocen peor y hacen que el objeto "tiemble".
:::

#### Cómo usar el ajuste vertical

![Campo Ajuste vertical (Y) con su texto de ayuda](/img/gamifier-reto-ar-ajuste-y.png)

Usa **valores pequeños**: 0.05, 0.1, -0.1. Una unidad equivale aproximadamente al tamaño del marcador, así que valores como 1, 2 o 3 sacan el objeto del encuadre. Los valores **positivos** suben el objeto y los **negativos** lo bajan.

:::caution Los modelos 3D vienen a tamaños muy distintos
Cada programa exporta los modelos a una escala diferente. Por eso la escala empieza en 0.01: pruébalo en tu móvil y ajústala poco a poco hasta que el objeto se vea bien.
:::

### Mecánica: con pregunta o solo el objeto

En el campo **Mecánica** eliges:

- **Con pregunta (opciones bajo el objeto)**: el Player responde eligiendo una opción.
- **Solo mostrar el objeto (sin pregunta)**: el Player ve el objeto y el Reto se da por visto.

Con pregunta, indica los **Puntos si acierta** y los **Puntos si falla**, y en el bloque de **Traducciones** escribe el **enunciado** y las **respuestas**, marcando la correcta. En la columna **Animación** de cada respuesta escribe el nombre del clip del modelo que se reproducirá al elegirla: por ejemplo, una animación de acierto y otra de error, o una distinta por cada respuesta.

![Mecánica Con pregunta: puntos por acierto y fallo, enunciado y respuestas con la columna Animación](/img/gamifier-reto-ar-respuestas.png)

Pulsa **Guardar cambios** al terminar. Como en el resto de Retos, puedes vincular un **Objeto Digital** que se entrega al completarlo.

## 🎮 Así lo verá el Player

1. El Player abre el Reto y **concede el permiso de cámara** cuando el navegador se lo pida. La cámara se activa dentro de la propia Webapp.
2. Apunta a la **imagen marcador**: aparece el aviso **«Imagen detectada»** y el **objeto 3D** sobre ella, con las opciones de respuesta debajo.
3. Pulsa una opción: el objeto reproduce su **animación** y se muestra el resultado (acierto o fallo, puntos y progreso de la Misión).

<!-- 📸 CAPTURA PENDIENTE: /img/webapp-reto-ar-objeto.png — Móvil apuntando al marcador, con el objeto 3D, el aviso «Imagen detectada» y las opciones de respuesta (requiere un móvil real con cámara) -->
<!-- 📸 CAPTURA PENDIENTE: /img/webapp-reto-ar-resultado.png — Pantalla de resultado del Reto de Realidad Aumentada -->

:::tip 🛠️ Pruébalo tú mismo
Imprime el marcador (o ábrelo en otra pantalla) y juega el Reto desde tu móvil antes de publicar la Aventura. Es la forma más rápida de afinar la escala y el ajuste vertical.
:::

:::warning Si el Player no ve la cámara
Casi siempre es un permiso de cámara denegado. Mándale a [Permisos de GPS y cámara](../webapp/recuperacion-permisos-gps-camara.md), donde se explica cómo reactivarlo sin salir del juego.
:::

## Cuándo usar este Reto 💡

La Realidad Aumentada brilla cuando hay un **lugar o un objeto físico** que quieres convertir en parte del juego: un cartel en una ruta, una lámina en un aula, el stand de un evento. El efecto sorpresa es enorme y no requiere que el Player instale nada.

Cuándo **no** es la mejor elección: si el Player va a jugar desde casa sin acceso al marcador, o si la pregunta no necesita el objeto 3D para entenderse. En ese caso, una [Pregunta / Respuesta](./pregunta-respuesta.md) clásica es más directa.

## Continúa aprendiendo

- Catálogo completo de tipos en [Retos — los 11 tipos disponibles](./index.md).
- Entregar un premio al completar el Reto: [Objetos Digitales de Reto](./objetos-digitales.md).
- Si el Player ha denegado la cámara: [Permisos de GPS y cámara](../webapp/recuperacion-permisos-gps-camara.md).
