---
sidebar_position: 6
title: 🎁 Objetos Digitales
description: Objetos Digitales entregados al completar una Misión en AdventuriQ — cómo asociar Objetos a una Misión y cómo configurar las Condiciones de Obtención con lógica AND/OR.
keywords: [misión, objeto digital, objeto, entrega, condiciones, obtención, AND, OR, gamifier, webapp, adventuriq]
---

# 🎁 Objetos Digitales

La sección **Objetos** del formulario de la Misión permite asociar uno o varios Objetos Digitales que se entregarán al Player cuando complete la Misión — siempre que se cumplan las **Condiciones de Obtención** configuradas en cada Objeto. Un Objeto Digital puede representar una medalla, una pista, un código de descuento, una felicitación o cualquier elemento entregable dentro del juego.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

## Configuración en el Gamifier 👑

La sección **Objetos** muestra el listado de Objetos Digitales asociados a esta Misión con su imagen, ID y nombre. El subtítulo indica "Objetos asociados a esta Misión".

| Acción | Descripción |
|---|---|
| **+ Nuevo Objeto** | Crea un nuevo Objeto Digital asociado a la Misión. Se abre el formulario de creación del Objeto con sus campos de contenido, traducciones y multimedia. |
| **Clic en el nombre** | Abre el formulario de edición del Objeto existente. |
| **Eliminar** (icono papelera) | Desvincula el Objeto de la Misión. |

![Sección Objetos de la Misión — objeto asociado con ID, nombre e imagen, botones de nuevo objeto y eliminar](/img/gamifier-mision-recompensas.png)

### Editor del Objeto Digital

Al hacer clic sobre un Objeto Digital del listado (o al crear uno nuevo), se abre su editor con las siguientes secciones:

![Editor de Objeto Digital mostrando los campos de configuración: Aventura asociada, código único, tipo de objeto y traducciones](/img/gamifier-editor-objeto-digital-parte-superior.png)

**Campos generales:**

| Campo | Descripción |
|---|---|
| **Aventura** | Indica a qué Aventura está asociado el Objeto Digital. Campo informativo, no editable desde aquí. |
| **Genera código único** | Toggle que, al activarse, asigna un código único al Player cuando obtiene el Objeto Digital. Útil para controlar entregas físicas (camisetas, entradas, descuentos, etc.). Cada Player recibe un código diferente y exclusivo. |
| **Tipo de Objeto** | Determina el formato del contenido multimedia: **Imagen** (JPG / PNG / GIF), **Vídeo** (MP4) o **Audio** (MP3). |

**Traducciones:** el contenido del Objeto Digital (título, descripción e imagen/vídeo/audio) soporta hasta **10 idiomas** simultáneos. Cada traducción incluye un título, una descripción con editor HTML enriquecido y el contenido multimedia, que puede ser diferente para cada idioma. Para añadir un idioma, haz clic en **+ Nueva traducción**.

![Parte inferior del editor mostrando la previsualización de la imagen, los botones de gestión multimedia, y los botones Guardar y Eliminar](/img/gamifier-editor-objeto-digital-parte-inferior.png)

**Acciones:** el botón **Guardar** guarda la configuración y el botón **Eliminar** borra el Objeto Digital de forma permanente junto con todas sus traducciones.

:::danger Eliminar es irreversible
Al eliminar un Objeto Digital, se borra de forma permanente junto con todas sus traducciones y configuraciones. Esta acción no se puede deshacer.
:::

## Cuándo se entregan los Objetos

La entrega de un Objeto Digital a nivel de Misión depende de **dos factores independientes**:

1. **La Misión debe completarse** — es decir, deben cumplirse las [Condiciones de Finalización](./condiciones-finalizacion.md) configuradas en la Misión (o, si no hay condiciones específicas, que el Player finalice todos los Retos enlazados).
2. **Las Condiciones de Obtención del Objeto deben cumplirse** — cada Objeto Digital tiene su propio conjunto de condiciones que determinan si efectivamente se entrega al Player.

Esto significa que **completar la Misión no garantiza recibir todos sus Objetos Digitales**. Un Objeto puede requerir, por ejemplo, que el Player haya obtenido un mínimo de puntos o que haya completado la Misión dentro de un límite de tiempo.

Se pueden crear **múltiples Objetos Digitales** para entregar al final de una misma Misión. Cada Objeto se evalúa de forma independiente según sus propias condiciones.

:::warning Condiciones de Finalización ≠ Condiciones de Obtención
Son dos sistemas distintos. Las **Condiciones de Finalización** determinan cuándo se considera que la Misión ha terminado. Las **Condiciones de Obtención** determinan si un Objeto Digital concreto se entrega al Player una vez finalizada la Misión. Un Player puede completar la Misión pero no recibir un Objeto si no cumple sus condiciones de obtención.
:::

## Condiciones de Obtención del Objeto 👑

Dentro del formulario de edición de cada Objeto Digital, debajo de los campos de contenido y traducciones, se encuentra la sección **"Condiciones de Obtención del Objeto"**. Este editor permite configurar reglas que controlan si el Objeto se entrega al Player al completar la Misión.

![Editor AND/OR de Condiciones de Obtención del Objeto — Grupo 1 con lógica AND y botón para añadir nuevo grupo OR](/img/gamifier-mision-objetos-digitales-editor-andor.png)

### Comportamiento por defecto

Si no se añade ninguna condición, el Objeto Digital se entregará **siempre** que se complete la Misión. El subtítulo del editor lo indica expresamente: "Si no se añade ninguna, el Objeto se obtendrá siempre."

### Cómo funciona el editor AND/OR

Las condiciones se organizan en **grupos** con dos niveles de lógica:

| Nivel | Lógica | Significado |
|---|---|---|
| **Dentro de un grupo** | **AND** | Todas las condiciones del grupo deben cumplirse. |
| **Entre grupos** | **OR** | Basta con que se cumpla un grupo entero para entregar el Objeto Digital. |

Cada grupo se muestra con el encabezado **"Grupo N — todas estas condiciones deben cumplirse (AND)"**. El botón **+ Añadir nuevo grupo OR** crea un grupo adicional con sus propias condiciones independientes.

**Ejemplo práctico:** si configuras dos grupos:
- **Grupo 1:** "Si puntos obtenidos son &gt;= 500" AND "Si tiempo transcurrido &lt;= 300 segundos"
- **Grupo 2:** "Si puntos obtenidos son &gt;= 1000"

El Player recibirá el Objeto si obtiene al menos 500 puntos y tarda menos de 5 minutos **O** si obtiene al menos 1000 puntos independientemente del tiempo.

### Gestionar condiciones

Para añadir una condición:

1. En el grupo deseado, selecciona una condición del desplegable **"Selecciona una condición para añadir"**.
2. Introduce el **valor** correspondiente en el campo "Valor de la condición, si aplica".
3. Haz clic en **+ Añadir condición**.

Para crear lógica alternativa (OR), haz clic en **+ Añadir nuevo grupo OR** y configura condiciones en el nuevo grupo.

### Condiciones disponibles a nivel de Misión

![Desplegable de condiciones disponibles a nivel de Misión — 10 tipos de condición](/img/gamifier-mision-objetos-digitales-condiciones-lista.png)

A nivel de Misión, el selector ofrece las siguientes condiciones:

| Condición | Valor requerido | Descripción |
|---|---|---|
| **Siempre** | — | El Objeto se entrega siempre al completar la Misión. Equivale a no tener condiciones. |
| **Si puntos obtenidos son =** | Número | El Player debe haber obtenido exactamente esa cantidad de puntos en la Misión. |
| **Si puntos obtenidos son &lt;** | Número | El Player debe haber obtenido menos de esa cantidad de puntos. |
| **Si puntos obtenidos son &lt;=** | Número | El Player debe haber obtenido esa cantidad de puntos o menos. |
| **Si puntos obtenidos son &gt;** | Número | El Player debe haber obtenido más de esa cantidad de puntos. |
| **Si puntos obtenidos son &gt;=** | Número | El Player debe haber obtenido esa cantidad de puntos o más. |
| **Si tiempo que ha transcurrido &gt;=** | Segundos | El Player debe haber tardado al menos ese número de segundos en completar la Misión. |
| **Si tiempo transcurrido &lt;=** | Segundos | El Player debe haber tardado como máximo ese número de segundos en completar la Misión. |
| **Nunca** | — | El Objeto no se entrega nunca. Útil para desactivar temporalmente la entrega sin eliminar el Objeto. |
| **Dar hasta un máximo de "n"** | Número | El Objeto se entrega como máximo a "n" Players. Una vez alcanzado el límite, no se entrega más. Útil para stock limitado. |

:::tip 👑 Para el Game Master
Combina condiciones de puntos y tiempo para crear Objetos "premium" que solo reciben los Players más hábiles. Por ejemplo: una medalla de oro para quien supere 800 puntos en menos de 5 minutos, y una medalla de plata para quien supere 500 puntos sin límite de tiempo — cada una como un Objeto Digital independiente con sus propias condiciones.
:::

## Diferencia entre Objetos a nivel de Misión y de Reto

| Característica | Nivel Misión | Nivel Reto |
|---|---|---|
| **Entrega** | Al completar la Misión (según Condiciones de Finalización) | Configurable según condiciones específicas del Reto (puntuación, aciertos, etc.) |
| **Condiciones de Obtención** | Basadas en puntos y tiempo de la Misión completa | Configurables individualmente por Reto, con condiciones específicas del tipo de Reto |
| **Editor AND/OR** | Disponible con lógica de grupos AND/OR | Disponible con la misma lógica de grupos AND/OR |

## Cómo lo ve el Player 🎮

Cuando el Player completa la Misión y cumple las Condiciones de Obtención de un Objeto Digital, este se presenta a pantalla completa con su imagen, título, descripción y un botón **Continuar** para avanzar. El Objeto también queda guardado en el **Baúl** del Player (accesible desde la Webapp). Si la Misión también tiene una [Notificación](./notificaciones.md) configurada, esta se muestra después de la entrega del Objeto.

![Vista del Player — Objeto Digital entregado al completar una Misión, con imagen, ID, descripción y botón Continuar](/img/webapp-mision-objeto.png)

## Continúa aprendiendo

- Condiciones que determinan cuándo se completa la Misión: [Condiciones de Finalización](./condiciones-finalizacion.md).
- Objetos Digitales a nivel de Aventura: [Objetos Digitales de Aventura](../aventuras/objetos-digitales.md).
- Objetos Digitales a nivel de Reto: [Objetos Digitales de Reto](../retos/objetos-digitales.md).
- Notificaciones tras la entrega: [Notificaciones](./notificaciones.md).
