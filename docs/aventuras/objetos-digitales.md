---
sidebar_position: 9
title: 🎁 Objetos Digitales
description: Objetos Digitales entregados al completar una Aventura en AdventuriQ — cómo asociar Objetos a una Aventura y configurar sus Condiciones de Obtención con lógica AND/OR.
keywords: [aventura, objeto digital, objeto, entrega, condiciones, obtención, AND, OR, gamifier, webapp, adventuriq]
---

# 🎁 Objetos Digitales de Aventura

Las Aventuras pueden tener **Objetos Digitales** asociados que se entregan al Player cuando completa la Aventura — siempre que se cumplan las **Condiciones de Obtención** configuradas en cada Objeto. A este nivel, los Objetos funcionan como premios "de campaña": recompensan al Player por completar toda la experiencia gamificada.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

## Sección Objetos en la Aventura 👑

La sección **"Objetos Digitales de la Aventura"** se encuentra en la parte inferior del formulario de edición de la Aventura, accesible mediante scroll. Muestra el listado de Objetos Digitales asociados con su imagen, ID y nombre.

| Acción | Descripción |
|---|---|
| **+ Nuevo objeto** | Crea un nuevo Objeto Digital asociado a la Aventura. Se abre el formulario de edición del Objeto. |
| **Clic en el nombre** | Abre el formulario de edición del Objeto existente. |
| **Eliminar** (icono papelera) | Desvincula el Objeto de la Aventura. |

![Sección de Objetos Digitales dentro de la vista de una Aventura, mostrando el listado con un Objeto Digital creado y el botón para añadir uno nuevo](/img/gamifier-listado-objetos-digitales.png)

### Contenido de un Objeto Digital

Cada Objeto Digital se configura con imagen (JPG, PNG, GIF), vídeo (MP4), audio (MP3), traducciones multiidioma (título, descripción con HTML enriquecido) y opcionalmente un **Código Único** para control de unidades entregadas a nivel analógico. El editor del Objeto es idéntico en los tres niveles — para una descripción completa de todos los campos, consulta [Editor del Objeto Digital](../misiones/objetos-digitales.md#editor-del-objeto-digital).

### El tipo Llave

El campo **Tipo de Objeto** admite el valor **Llave**. Una Llave se comporta como cualquier otro Objeto Digital —mismas condiciones de obtención, misma entrega— pero además sirve para **bloquear Misiones y Retos**: solo el Player que la consiga podrá abrirlos. Las Llaves no se guardan en el Baúl del Player, sino en el **Llavero**.

Todo el detalle está en [🔑 Llaves Digitales](./llaves-digitales.md).

## Cuándo se entregan los Objetos

La entrega de un Objeto Digital a nivel de Aventura depende de **dos factores independientes**:

1. **La Aventura debe completarse** — es decir, deben cumplirse las [Condiciones de Finalización](./condiciones-finalizacion.md) configuradas en la Aventura (o, si no hay condiciones específicas, que el Player finalice todas las Misiones).
2. **Las Condiciones de Obtención del Objeto deben cumplirse** — cada Objeto Digital tiene su propio conjunto de condiciones que determinan si efectivamente se entrega al Player.

Se pueden crear **múltiples Objetos Digitales** para entregar al final de una misma Aventura. Cada Objeto se evalúa de forma independiente según sus propias condiciones.

:::warning Condiciones de Finalización ≠ Condiciones de Obtención
Son dos sistemas distintos. Las **Condiciones de Finalización** determinan cuándo se considera que la Aventura ha terminado. Las **Condiciones de Obtención** determinan si un Objeto Digital concreto se entrega al Player una vez finalizada la Aventura. Un Player puede completar la Aventura pero no recibir un Objeto si no cumple sus condiciones de obtención.
:::

## Condiciones de Obtención a Nivel de Aventura 👑

Dentro del formulario de edición de cada Objeto Digital, debajo de los campos de contenido y traducciones, se encuentra la sección **"Condiciones de Obtención a Nivel de Aventura"**. Este editor permite configurar reglas que controlan si el Objeto se entrega al Player al completar la Aventura.

![Sección de Condiciones de Obtención a Nivel de Aventura mostrando la configuración de grupos con lógica AND/OR](/img/gamifier-condiciones-obtencion.png)

### Comportamiento por defecto

Si no se añade ninguna condición, el Objeto Digital se entregará **siempre** al finalizar la Aventura.

### Editor AND/OR

Las condiciones se organizan en **grupos** con dos niveles de lógica, exactamente igual que a nivel de Misión:

| Nivel | Lógica | Significado |
|---|---|---|
| **Dentro de un grupo** | **AND** | Todas las condiciones del grupo deben cumplirse. |
| **Entre grupos** | **OR** | Basta con que se cumpla un grupo entero para entregar el Objeto Digital. |

Para una explicación detallada del editor AND/OR, cómo gestionar condiciones y ejemplos prácticos, consulta la documentación completa en [Objetos Digitales de Misión — Condiciones de Obtención](../misiones/objetos-digitales.md#condiciones-de-obtención-del-objeto-).

### Condiciones disponibles a nivel de Aventura

Las condiciones disponibles a nivel de Aventura evalúan el rendimiento del Player a lo largo de toda la Aventura:

| Condición | Valor requerido | Descripción |
|---|---|---|
| **Siempre** | — | El Objeto se entrega siempre al completar la Aventura. Equivale a no tener condiciones. |
| **Si puntos obtenidos son =** | Número | El Player debe haber obtenido exactamente esa cantidad de puntos en toda la Aventura. |
| **Si puntos obtenidos son &lt;** | Número | El Player debe haber obtenido menos de esa cantidad de puntos. |
| **Si puntos obtenidos son &lt;=** | Número | El Player debe haber obtenido esa cantidad de puntos o menos. |
| **Si puntos obtenidos son &gt;** | Número | El Player debe haber obtenido más de esa cantidad de puntos. |
| **Si puntos obtenidos son &gt;=** | Número | El Player debe haber obtenido esa cantidad de puntos o más. |
| **Si tiempo que ha transcurrido &gt;=** | Segundos | El Player debe haber tardado al menos ese número de segundos en completar la Aventura. |
| **Si tiempo transcurrido &lt;=** | Segundos | El Player debe haber tardado como máximo ese número de segundos en completar la Aventura. |
| **Nunca** | — | El Objeto no se entrega nunca. Útil para desactivar temporalmente la entrega. |
| **Dar hasta un máximo de "n"** | Número | El Objeto se entrega como máximo a "n" Players. Útil para stock limitado. |

:::tip 👑 Para el Game Master
Usa los Objetos Digitales a nivel de Aventura para premiar la experiencia completa — por ejemplo, una medalla de finalización, un certificado de participación o un código de descuento que solo reciben quienes superen un umbral de puntos en toda la Aventura. Reserva los Objetos a nivel de Misión para premios parciales de cada fase.
:::

## Cómo lo ve el Player 🎮

Cuando el Player completa la Aventura y cumple las Condiciones de Obtención de un Objeto Digital, este se presenta a pantalla completa con su imagen, título, descripción y un botón **Continuar**. El Objeto queda guardado en el **Baúl** del Player, accesible desde la Webapp.

## Continúa aprendiendo

- Editor del Objeto y condiciones AND/OR en detalle: [Objetos Digitales de Misión](../misiones/objetos-digitales.md).
- Condiciones que determinan cuándo se completa la Aventura: [Condiciones de Finalización](./condiciones-finalizacion.md).
