---
sidebar_position: 0.5
title: 📦 Exportar e importar una Aventura
description: Cómo descargar una copia completa de una Aventura en un archivo ZIP y volver a crearla después, en tu cuenta o en otra, con el asistente Importar Aventura del Gamifier.
keywords: [aventuras, exportar, importar, zip, copia de seguridad, backup, otra cuenta, licencias, gamifier, adventuriq]
---

# 📦 Exportar e importar una Aventura

:::info 👑 Quién puede hacer esto
**Exportar**: quien puede gestionar la Aventura (su Game Master propietario o el Game Designer asignado como creador). **Importar**: hace falta una Licencia de Aventura libre en la cuenta, así que normalmente lo hace el **Game Master**.
:::

Con **Exportar** descargas una copia completa de una Aventura en un archivo ZIP: todo su diseño y todos sus archivos multimedia. Con **Importar** vuelves a crearla a partir de ese archivo, en tu cuenta o en la de otro Game Master.

## 🎯 Para qué sirve

- **Copia de seguridad** guardada fuera de AdventuriQ, en tu ordenador o en tu nube.
- **Llevar una Aventura a otra cuenta**: por ejemplo, entregar a un cliente la Aventura que has diseñado para él, o pasarla a otro Game Master.
- **Recuperar una versión anterior**: exporta antes de un cambio grande y, si algo sale mal, importa la copia.

:::note ¿Exportar o Duplicar?
- **[Duplicar](crear-aventura.md#clonar-una-aventura-existente)** crea la copia al momento, dentro de la misma cuenta.
- **Exportar/importar** pasa por un archivo: sirve como copia de seguridad fuera de AdventuriQ y para llevar una Aventura a otra cuenta.

En los dos casos la Aventura nueva empieza limpia, sin Players ni partidas.
:::

## 📤 Exportar una Aventura

1. Ve al listado de Aventuras (**Aventuras** en el menú lateral).
2. En la fila de la Aventura, pulsa el botón **«Exportar (copia en ZIP)»**: icono de archivo comprimido, color cian, justo a la derecha de *Duplicar*.

![Listado de Aventuras con el botón Importar en la cabecera y el botón Exportar (copia en ZIP) en la fila de una Aventura](/img/gamifier-exportar-importar-listado.png)

3. Aparece el aviso de espera **«Exportando la Aventura»** mientras se prepara el ZIP. Puede tardar un poco si la Aventura tiene muchos vídeos.
4. Al terminar aparece **«Aventura exportada»**, con el tamaño del ZIP y el número de archivos, y la descarga empieza sola. Si no empieza, el mismo aviso trae un enlace **«pulsa aquí»**.

<!-- 📸 CAPTURA PENDIENTE: /img/gamifier-exportar-aventura-exito.png — Aviso «Aventura exportada» con el tamaño del ZIP, el número de archivos y el enlace pulsa aquí -->

:::warning El enlace de descarga caduca a los 7 días
El enlace para descargar el ZIP funciona durante **7 días**. Después hay que volver a exportar. Guarda el archivo en cuanto lo descargues.
:::

### Qué incluye el ZIP

Todo el diseño de la Aventura:

- **Misiones**, con sus llamadas y notificaciones.
- **Retos de todos los tipos** con su mecánica, incluidos Realidad Aumentada (con sus modelos 3D), Ruleta de la Fortuna, Preguntas Encadenadas y Nube de Palabras.
- **Objetos Digitales** y **Llaves digitales**.
- **Condiciones de finalización** y de entrega de Objetos.
- **Mapas** y puntos de localización, **Puntos de Interés** y **Clanes** (sin miembros).
- Etiquetas, tipos de voto, opciones del Modo Arena, Términos y Condiciones, traducciones y **todos los archivos multimedia**.

### Qué no incluye

| Elemento | Motivo |
|---|---|
| **Players inscritos, progreso, puntuaciones y Objetos conseguidos** | La Aventura importada empieza limpia, como al duplicar. |
| **Fotos subidas por los Players** | Son contenido de los participantes de la Aventura original. |
| **La Licencia y los Tokens** | Al importar eliges una Licencia de la cuenta de destino. |

:::danger No edites el ZIP a mano
El ZIP solo se puede importar tal y como lo genera «Exportar». Si se modifica o algún archivo llega dañado, la importación se rechaza con el mensaje «Algún archivo del ZIP está dañado o incompleto. Vuelve a exportar la Aventura.». Tampoco se admiten ZIP que no vengan de «Exportar».
:::

## 📥 Importar una Aventura

### Antes de empezar

- Un archivo **ZIP generado con «Exportar»** (máximo **2 GB**).
- Al menos una **Licencia de Aventura libre**: sin Aventura asignada, activa y sin caducar.
- Que los archivos del ZIP **quepan en el espacio** de esa Licencia. Las Licencias sin límite de espacio o de un Plan siempre valen.

### Paso a paso

1. Ve al listado de Aventuras y pulsa el botón verde **«Importar»** de la cabecera, junto a *Nueva Aventura*.
2. Se abre el asistente **«Importar Aventura»**, con tres pasos: *Subir el ZIP*, *Revisar y elegir licencia* y *Hecho*.

**Paso 1 — Subir el ZIP.** Arrastra el archivo a la zona de subida o haz clic para elegirlo. Verás el porcentaje de subida y, al terminar, «Comprobando el contenido del ZIP…».

![Asistente Importar Aventura, paso 1: zona para arrastrar el ZIP de la Aventura o hacer clic para elegirlo](/img/gamifier-importar-aventura-paso1.png)

**Paso 2 — Revisar y elegir licencia.**

- Arriba, el título de la Aventura, la fecha en que se exportó y sus idiomas.
- Cuatro recuadros con el número de **Misiones**, **Retos**, **Objetos** y **Archivos** (con los MB que ocupan).
- Debajo, **«Elige la licencia para la Aventura nueva»**, con tus Licencias libres. Cada una muestra su número, su tipo, la fecha de compra y su espacio. Las Licencias donde no caben los archivos salen desactivadas con la etiqueta **«Los archivos no caben»**.
- Elige una y pulsa **«Importar»**. Con **«Elegir otro archivo»** vuelves al paso 1.

<!-- 📸 CAPTURA PENDIENTE: /img/gamifier-importar-aventura-paso2.png — Asistente, paso 2: resumen del ZIP y Licencias, con una marcada como «Los archivos no caben» (requiere un ZIP exportado) -->

**Paso 3 — Hecho.** Aparece el mensaje **«Aventura importada»**:

- **«Abrir la Aventura»** te lleva directamente a su ficha.
- **«Cerrar»** vuelve al listado, donde ya aparece la Aventura nueva.

<!-- 📸 CAPTURA PENDIENTE: /img/gamifier-importar-aventura-paso3.png — Asistente, paso 3: Aventura importada, con Abrir la Aventura y Cerrar -->

La Aventura importada se crea en **Borrador** y con un **GamePIN nuevo**. Revísala y [publícala](publicar-aventura.md) cuando esté lista.

:::info Si algo falla, no se crea nada
Si la importación no termina, no queda ninguna Aventura a medias y la Licencia elegida sigue libre para volver a intentarlo.
:::

## 📚 Continúa aprendiendo

- [Crear una Aventura](crear-aventura.md) — incluye cómo clonar una Aventura dentro de tu cuenta.
- [Duplicar una Misión](../misiones/duplicar-misiones.md) y [Duplicar un Reto](../retos/duplicar-retos.md) — copiar solo una parte de la Aventura.
- [Tokens y Licencias](../tokens.md) — qué Licencia necesitas para importar.
