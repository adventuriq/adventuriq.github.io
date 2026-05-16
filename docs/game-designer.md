---
sidebar_position: 5
title: 🎨 Game Designer
description: El rol Game Designer en AdventuriQ — qué puede hacer, qué no puede hacer, cómo se invita, permisos y relación con el Game Master.
keywords: [game-designer, rol, permisos, asignar, invitar, gamifier, adventuriq]
---

# 🎨 Game Designer

El **Game Designer** es el tercer rol de AdventuriQ, junto al Game Master y al Player. Es un colaborador que trabaja bajo la supervisión de un Game Master, con acceso al Gamifier para diseñar y configurar Aventuras que le sean asignadas. Su función principal es permitir que equipos de trabajo compartan la carga de diseño de contenido sin ceder el control total de la cuenta.

## Los tres roles de AdventuriQ

| Rol | Función | Accede a |
|---|---|---|
| **Game Master (GM)** | Crea y gestiona Aventuras, Players y Game Designers. Control total. | Gamifier |
| **Game Designer (GD)** | Diseña y configura Aventuras asignadas por un GM. Permisos limitados. | Gamifier |
| **Player** | Juega las Aventuras publicadas. | Webapp |

## Qué puede hacer un Game Designer 👑

Un Game Designer tiene acceso al Gamifier con permisos orientados al **diseño de contenido**:

- Editar las Aventuras que el Game Master le haya asignado (Misiones, Retos, configuración, contenido).
- Acceder a la Clasificación y al Game Board de las Aventuras asignadas para monitorizar el progreso.
- Jugar las Aventuras asignadas en estado **Draft** sin consumir Token — ideal para testear el contenido antes de publicar.
- Usar los botones **"Eliminar mis jugadas"** y **"Eliminar mis objetos"** para reiniciar sus propias partidas de test.

## Qué NO puede hacer un Game Designer

Las limitaciones del Game Designer garantizan que el control de la cuenta permanezca en manos del Game Master:

- **No puede crear Aventuras** — solo el GM puede crear nuevas Aventuras y luego asignarlas al GD.
- **No puede comprar Tokens ni Licencias** — la gestión económica es exclusiva del GM.
- **No puede gestionar otros Game Designers** — no puede invitar ni desvincular GDs.
- **No puede publicar Aventuras** — la publicación (cambiar de Draft a Published) requiere autorización del GM.
- **No puede acceder a la tienda** de AdventuriQ.
- **No puede usar el botón Raze** — la eliminación masiva de estados de juego está reservada al GM.

:::warning
Un Game Designer vinculado a un Game Master tiene acceso a **todas** las Aventuras que le sean asignadas. Antes de asignar una Aventura, asegúrate de que el GD debe tener acceso a su contenido y a los datos de los Players que participan en ella.
:::

## Cómo invitar a un Game Designer 👑

### Desde la lista de Aventuras

En la lista de Aventuras del Gamifier, cada Aventura tiene un botón **"Asignar Game Designer"**. Al pulsarlo, se abre un diálogo que muestra los Game Designers disponibles vinculados a tu cuenta. Selecciona uno y confirma para darle acceso a esa Aventura.

![Modal de asignación de Game Designer — listado de GDs disponibles con opción de seleccionar y asignar a la Aventura](/img/gamifier-game-designer-asignar-modal.png)

### Desde el menú lateral

El Gamifier incluye en el menú lateral la sección **"Mis Game Designers (GD)"** con el submenú **"Listado GD"**. Desde esta pantalla, el GM puede:

- Ver todos los Game Designers vinculados a su cuenta.
- Crear un nuevo Game Designer con el botón **"Nuevo Game Designer"**.
- Sincronizar el listado con el botón **"Sincronizar"**.
- Filtrar por nombre, email o nickname.

![Listado de Game Designers en el Gamifier — tabla con los GDs vinculados al Game Master, botón Nuevo y Sincronizar](/img/gamifier-game-designer-listado.png)

### Licencia de Game Designer

Para vincular un Game Designer a tu cuenta necesitas una **Licencia de Game Designer** activa. Las licencias se adquieren desde la tienda de AdventuriQ (producto "Game Designer Mensual" o "Game Designer Anual") o desde el botón **"Comprar Licencia GD"** en el resumen de la cuenta del Gamifier.

El contador de **"Game Designers"** en el resumen de la cuenta muestra cuántas licencias de GD tienes disponibles.

## Relación entre Game Master y Game Designer

Un Game Designer está **siempre vinculado** a al menos un Game Master. La relación permite:

- Un GD puede estar vinculado a **varios GMs** simultáneamente (trabaja para múltiples cuentas).
- Un GM puede tener **varios GDs** vinculados (equipo de diseño).
- La asignación es por Aventura: tener un GD vinculado no le da acceso automático a todas las Aventuras — el GM asigna explícitamente cuáles puede editar.

## Cómo se ve el Gamifier desde un Game Designer

Cuando un Game Designer inicia sesión en el Gamifier, la interfaz es similar a la del Game Master pero con elementos ausentes:

- No aparece el botón **"Nueva Aventura"** (no puede crear).
- No aparece la **tienda** ni los botones de compra.
- No aparece el botón **"Raze"** en las Aventuras.
- Solo ve las Aventuras que le han sido asignadas por su(s) GM(s).
- El menú lateral no incluye la sección de gestión de Game Designers.

:::tip 👑 Para el Game Master
El rol Game Designer es ideal para formadores que delegan el diseño de contenido a su equipo pedagógico, empresas con múltiples diseñadores instruccionales trabajando en la misma plataforma, o agencias que gestionan Aventuras para varios clientes y necesitan colaboradores con acceso limitado.
:::

## Continúa aprendiendo

- Licencias y precios del Game Designer: [Tokens y Licencias](./tokens.md).
- Clasificación y Game Board (accesibles por el GD): [Métricas](./metricas/).
- Crear Aventuras (paso previo a asignar al GD): [Crear una Aventura](./aventuras/crear-aventura.md).
