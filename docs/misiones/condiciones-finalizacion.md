---
sidebar_position: 8
title: 🏁 Condiciones de Finalización
description: Condiciones de Finalización de una Misión en AdventuriQ — sistema de bloques AND/OR para definir cuándo una Misión se considera completada por el Player.
keywords: [misión, condiciones, finalización, AND, OR, grupo, bloque, completar, gamifier, adventuriq]
---

# 🏁 Condiciones de Finalización

Las **Condiciones de Finalización** determinan cuándo una Misión se considera completada para el Player. AdventuriQ incluye un sistema de condiciones combinables mediante **bloques AND/OR** que permite al Game Master definir reglas de finalización simples o complejas según las necesidades del diseño del juego.

## Comportamiento por defecto

Si no se configura ninguna condición específica, la Misión se considera finalizada cuando el Player ha completado **todos los Retos** enlazados a ella. Este es el comportamiento estándar y el más habitual.

## Sistema de bloques AND/OR 👑

El editor de condiciones organiza las reglas en **Grupos**. Cada Grupo funciona como un bloque AND: **todas** las condiciones dentro de un mismo Grupo deben cumplirse para que ese Grupo se considere satisfecho. Entre Grupos, la relación es OR: basta con que **uno** de los Grupos se satisfaga para que la Misión se finalice.

### Estructura

La sección **Condiciones de Finalización de la Misión** muestra:

**Grupo 1 — "Todas estas condiciones deben cumplirse (AND)"**: contiene una tabla con las condiciones configuradas. Cada fila muestra el ID de la condición, su descripción, su valor y botones de editar/eliminar.

**Añadir condición al Grupo**: el selector "Selecciona una condición para añadir" permite elegir el tipo de condición. El campo "Valor de la condición, si aplica" permite introducir el parámetro (IDs de Retos, número de segundos, puntos, etc.). El botón **+ Añadir** la agrega al Grupo.

**+ Añadir nuevo grupo OR**: crea un segundo Grupo de condiciones. Este nuevo Grupo se evalúa de forma independiente — si cualquiera de los Grupos se cumple, la Misión finaliza.

![Condiciones de Finalización — Grupo AND con condición configurada y botón para añadir nuevo grupo OR](/img/gamifier-mision-finalizacion-condiciones.png)

### Ejemplo de lógica AND/OR

Supón que configuras dos Grupos:

**Grupo 1 (AND)**: "Si ha finalizado los siguientes Retos: 757, 758" **Y** "Si el Player ha conseguido 500 puntos o más".

**Grupo 2 (AND)**: "Si han transcurrido 3600 segundos desde el inicio".

El resultado: la Misión finaliza si el Player completa los Retos 757 y 758 **y** alcanza 500 puntos (Grupo 1 satisfecho), **o bien** si pasan 60 minutos desde que empezó (Grupo 2 satisfecho). Lo que ocurra primero.

## Tipos de condiciones disponibles

Las condiciones disponibles a nivel de Misión son análogas a las de nivel de Aventura, pero operan sobre Retos en lugar de Misiones:

| Condición | Valor | Descripción |
|---|---|---|
| **Si ha finalizado los siguientes Retos** | IDs de Retos (separados por coma) | La condición se cumple cuando el Player ha completado todos los Retos especificados. |
| **Si ha finalizado el siguiente número de Retos** | Número entero | La condición se cumple cuando el Player ha completado al menos N Retos de la Misión. |
| **Si han transcurrido un número de segundos** | Segundos | La condición se cumple cuando han pasado X segundos desde que el Player inició la Misión. |
| **Si el Player ha conseguido un total de Puntos igual o mayor a** | Puntos | La condición se cumple cuando la puntuación del Player en la Misión alcanza X puntos. |

:::warning Verificar con la UI
Los tipos de condiciones listados se basan en el análisis de la UI y la analogía con las condiciones de Aventura. Si detectas algún tipo adicional o diferente en tu Gamifier, consulta con el soporte de AdventuriQ.
:::

## Configuración paso a paso 👑

1. Abre el formulario de edición de la Misión y desplázate hasta la sección **Condiciones de Finalización de la Misión**.
2. En el selector **"Selecciona una condición para añadir"**, elige el tipo de condición.
3. En el campo **"Valor de la condición, si aplica"**, introduce el parámetro correspondiente (IDs de Retos separados por coma, número de segundos, puntos, etc.).
4. Pulsa **+ Añadir** para agregar la condición al Grupo actual.
5. Para añadir más condiciones AND al mismo Grupo, repite los pasos 2-4.
6. Para crear un nuevo Grupo OR, pulsa **+ Añadir nuevo grupo OR**.
7. Cada condición se puede **editar** o **eliminar** con los botones de la tabla.

## Impacto en la experiencia

Cuando se cumplen las Condiciones de Finalización, ocurre la siguiente secuencia:

1. La Misión se marca como **completada** para ese Player.
2. Se entregan los [Objetos Digitales](./objetos-digitales.md) asociados a la Misión.
3. Se disparan las [Notificaciones](./notificaciones.md) (llamadas) si están configuradas.
4. El Player puede continuar con la siguiente Misión de la Aventura.

Si la Aventura tiene [Condiciones de Finalización](../aventuras/configuracion.md#-condiciones-de-finalización) que dependen de la finalización de Misiones, completar esta Misión puede contribuir a la finalización de la Aventura.

:::tip 👑 Para el Game Master
El sistema AND/OR es una herramienta de diseño muy potente. Úsala para crear experiencias flexibles: "completa 3 de 5 Retos" (en vez de exigir todos), "alcanza 1000 puntos O completa todos los Retos" (doble vía de finalización) o "completa los Retos obligatorios Y acumula al menos 200 puntos" (combinación de progreso y rendimiento).
:::

## Continúa aprendiendo

- Objetos entregados al finalizar: [Objetos Digitales](./objetos-digitales.md).
- Notificaciones tras la finalización: [Notificaciones](./notificaciones.md).
- Condiciones de Finalización a nivel de Aventura: [Configuración de una Aventura](../aventuras/configuracion.md).
