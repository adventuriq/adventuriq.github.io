---
sidebar_position: 3
title: Configuración de Objetos Digitales
description: Cómo configurar el contenido, las traducciones y las condiciones de obtención de un Objeto Digital en AdventuriQ.
keywords: [objeto digital, recompensa, configuración, contenido, condiciones, gamifier]
---
# ⚙️ Configuración de Objetos Digitales

:::info 🛠️ Quién puede hacer esto
**Game Master** y **Game Designer** (bajo supervisión del GM).
:::

Un **Objeto Digital** es una recompensa virtual que el Player recibe en su Baúl al completar una Aventura, una Misión o un Reto. Puede contener una imagen, un vídeo o un audio, y opcionalmente un código único para controlar entregas en el mundo real.

En esta página se explica cómo configurar el contenido de un Objeto Digital individual una vez que ya ha sido creado dentro de una Aventura.

## 🗂️ Cómo acceder a los Objetos Digitales

Desde el Gamifier, sigue esta ruta de navegación:

1. Entra en la **Aventura** que quieras editar desde el listado de Aventuras.
2. Haz scroll hacia abajo en la página de la Aventura hasta encontrar la sección **"Objetos Digitales de la Aventura"**.
3. Desde ahí puedes crear un nuevo Objeto Digital con el botón **+ Nuevo objeto**, o hacer clic sobre uno existente para editarlo.

![Sección de Objetos Digitales dentro de la vista de una Aventura, mostrando el listado con un Objeto Digital creado y el botón para añadir uno nuevo](/img/recompensas/listado-objetos-digitales.png)

## 🎁 Editor del Objeto Digital

Al hacer clic sobre un Objeto Digital del listado, se abre su editor. Este editor tiene un diseño de scroll continuo con varias secciones.

### Campos generales

![Editor de Objeto Digital mostrando los campos de configuración: Aventura asociada, código único, tipo de objeto y traducciones](/img/recompensas/editor-objeto-digital-parte-superior.png)

En la parte superior del editor encontrarás los campos principales:

| Campo | Descripción |
|---|---|
| **Aventura** | Indica a qué Aventura está asociado el Objeto Digital. Este campo es informativo y no se puede modificar desde aquí. |
| **Genera código único** | Toggle que, al activarse, asigna un código único al Player cuando obtiene el Objeto Digital. Útil para controlar entregas físicas (camisetas, entradas, etc.). |
| **Tipo de Objeto** | Determina el formato del contenido multimedia asociado. Las opciones son **Imagen**, **Vídeo** o **Audio**. |

### 🖼️ Tipos de contenido

Un Objeto Digital se puede configurar con uno de estos tipos de contenido multimedia:

| Tipo | Formato |
|---|---|
| **Imagen** | JPG / PNG / GIF |
| **Vídeo** | MP4 |
| **Audio** | MP3 |

La imagen se muestra como miniatura de **300×300** píxeles en el editor. Para gestionarla puedes usar los botones **Nueva imagen** (subir desde tu equipo), **Media Library** (seleccionar desde la biblioteca de medios de la Aventura) o **Eliminar imagen**.

![Parte inferior del editor mostrando la previsualización de la imagen, los botones de gestión multimedia, y los botones Guardar y Eliminar](/img/recompensas/editor-objeto-digital-parte-inferior.png)

### 🔑 Código Único

Se puede generar un **Código Único** por Objeto Digital, útil para controlar unidades entregadas en el mundo real (a nivel analógico). Cuando el toggle **"Genera código único"** está activo, cada Player que obtenga este Objeto Digital recibirá un código diferente y exclusivo.

:::tip ¿Cuándo usar el Código Único?
Es ideal para escenarios donde el Objeto Digital representa un premio físico con stock limitado: entradas a un evento, descuentos, merchandising, etc. El código permite verificar que cada entrega es única.
:::

### 🌍 Traducciones

La configuración de contenido del Objeto Digital (título, descripción e imagen) soporta hasta **10 idiomas** simultáneos, igual que cualquier otra caja de contenido en AdventuriQ. Cada traducción incluye:

- **Título**: nombre del Objeto Digital que verá el Player.
- **Descripción**: texto enriquecido (con editor HTML) que acompaña al Objeto Digital.
- **Imagen/Vídeo/Audio**: el contenido multimedia puede ser diferente para cada idioma.

Para añadir un nuevo idioma, haz clic en **+ Nueva traducción** y selecciona el idioma deseado.

### Acciones

- **Guardar**: Guarda la configuración del Objeto Digital.
- **Eliminar**: Elimina el Objeto Digital de la Aventura.

:::danger Eliminar es irreversible
Al eliminar un Objeto Digital, se borra de forma permanente junto con todas sus traducciones y configuraciones. Esta acción no se puede deshacer.
:::

## 🎯 Condiciones de Obtención

![Sección de Condiciones de Obtención mostrando la configuración de grupos con lógica AND/OR](/img/recompensas/condiciones-obtencion.png)

Debajo del editor del Objeto Digital se encuentra la sección **"Condiciones de Obtención a Nivel de Aventura"**. Esta sección permite controlar **cuándo** se entrega el Objeto Digital al Player, más allá de simplemente completar la Aventura.

:::note Comportamiento por defecto
Si no se añade ninguna condición, el Objeto Digital se entregará **siempre** al finalizar la Aventura.
:::

### Cómo funcionan las condiciones

Las condiciones se organizan en **grupos** con dos niveles de lógica:

| Nivel | Lógica | Significado |
|---|---|---|
| **Dentro de un grupo** | **AND** | Todas las condiciones del grupo deben cumplirse. |
| **Entre grupos** | **OR** | Basta con que se cumpla un grupo entero para entregar el Objeto Digital. |

Esto permite crear reglas flexibles. Por ejemplo: "entregar si el Player supera todos los Retos de la Misión 1 **Y** obtiene más de 500 puntos" **O** "si el Player completa la Aventura en menos de 30 minutos".

### Gestionar condiciones

Para añadir una condición:

1. En el **Grupo 1**, selecciona una condición del desplegable.
2. Introduce el **valor** correspondiente (si aplica).
3. Haz clic en **+ Añadir condición**.

Si necesitas una lógica alternativa (OR), haz clic en **+ Añadir nuevo grupo OR** para crear un grupo adicional con sus propias condiciones.
