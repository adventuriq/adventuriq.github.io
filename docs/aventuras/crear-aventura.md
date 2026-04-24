---
sidebar_position: 0
title: 🚀 Crear una Aventura
description: Cómo crear una nueva Aventura en AdventuriQ usando el asistente de creación paso a paso — selección de licencia, fechas, idioma, título y estructura inicial.
keywords: [aventura, crear, nueva, asistente, wizard, licencia, gamifier, adventuriq]
---

# 🚀 Crear una Aventura

:::info 👑 Quién puede hacer esto
Solo el **Game Master** puede crear nuevas Aventuras.
:::

Crear una Aventura es el primer paso para construir tu experiencia gamificada en AdventuriQ. El proceso se realiza desde el Gamifier mediante un asistente guiado de tres pasos que te llevará desde la selección de la licencia hasta tener tu Aventura lista para diseñar.

## 📋 Antes de empezar

Para crear una Aventura necesitas:

- Tener una **Licencia disponible** (sin asignar). Si no tienes ninguna, puedes comprarla desde el panel de resumen o desde la [Tienda de Tokens](/tokens).
- Contar con **Tokens** suficientes para que los Players puedan acceder cuando publiques la Aventura. Los Tokens no se consumen al crear la Aventura, solo cuando los Players la inician.

:::tip ¿No tienes licencias?
Desde el listado de Aventuras puedes ver cuántas licencias tienes disponibles en la tarjeta **Licencias Disponibles**. Si el número es 0, haz clic en **Comprar Licencias** para adquirir una nueva.
:::

## 🎯 Iniciar el asistente

1. En el menú lateral del Gamifier, entra en **Aventuras**.
2. En el panel **Resumen de tu cuenta**, haz clic en el botón **+ Nueva Aventura**.

![Listado de Aventuras con el panel de resumen mostrando Mis Aventuras, Saldo de Tokens, Licencias Disponibles y Game Designers, junto al botón + Nueva Aventura](/img/gamifier/aventuras/gamifier-listado-aventuras.png)

### Seleccionar una Licencia

Al hacer clic en **+ Nueva Aventura** se abre un modal con el listado de tus licencias disponibles. Selecciona la licencia que quieras asignar a tu nueva Aventura y haz clic en **Crear Aventura**.

![Modal de selección de licencia mostrando las licencias disponibles con columnas de ID, Tipo, Temporalidad y fecha de compra](/img/gamifier/aventuras/gamifier-crear-seleccionar-licencia.png)

Cada licencia muestra su tipo y temporalidad. Existen cuatro variantes según el modo de juego y la duración:

| Tipo | Duración | Modo de juego | Rankings disponibles |
|---|---|---|---|
| **Licencia de Aventura ANUAL (juego equipo)** | 12 meses desde la publicación | Equipo | Ranking individual + ranking por equipos + ranking del jugador en su equipo |
| **Licencia de Aventura ANUAL (juego individual)** | 12 meses desde la publicación | Individual | Solo ranking individual |
| **Licencia de Aventura MENSUAL (juego equipo)** | 30 días desde la publicación | Equipo | Ranking individual + ranking por equipos + ranking del jugador en su equipo |
| **Licencia de Aventura MENSUAL (juego individual)** | 30 días desde la publicación | Individual | Solo ranking individual |

:::info Precios y modelo económico
Consulta los precios de cada tipo de licencia y el funcionamiento de los Tokens en [Tokens y Licencias](/tokens).
:::

:::note
La licencia queda vinculada a la Aventura en el momento de crearla. Puedes ver qué licencia tiene asignada cada Aventura desde su editor, en el apartado **Licencia de Aventura**.
:::

## 📅 Paso 1 — Fechas e idioma

El primer paso del asistente te pide configurar cuándo estará disponible tu Aventura y en qué idioma se mostrará por defecto.

![Paso 1 del asistente: Fechas e idioma de la Aventura con campos de fecha de inicio, fin, idioma por defecto y zona horaria](/img/gamifier/aventuras/gamifier-wizard-paso1-fechas.png)

| Campo | Obligatorio | Descripción |
|---|---|---|
| **Empieza** | Sí | Fecha y hora en que la Aventura se activará. Los Players no podrán jugar antes de esta fecha. |
| **Acaba** | Sí | Fecha y hora en que la Aventura finalizará automáticamente. |
| **Idioma por defecto** | Sí | Idioma principal de la Aventura. Determina en qué idioma verán el contenido los Players. Puedes añadir más idiomas después desde el editor. |
| **Zona Horaria** | No | Por defecto se establece en `Europe/Madrid (UTC+02:00)`. Ajústala si tu Aventura se juega en otra zona geográfica. |

:::tip
Las fechas se pueden modificar después desde el editor de la Aventura. No te preocupes si aún no tienes las fechas definitivas — puedes poner unas fechas orientativas y cambiarlas antes de publicar.
:::

Cuando hayas completado los campos, haz clic en **Siguiente →**.

## ✏️ Paso 2 — Título y descripción

En este paso defines cómo se llamará tu Aventura y, opcionalmente, una breve descripción.

![Paso 2 del asistente: Título y descripción, con indicador de idioma por defecto, campo de título y área de descripción](/img/gamifier/aventuras/gamifier-wizard-paso2-titulo.png)

| Campo | Obligatorio | Descripción |
|---|---|---|
| **Título** | Sí | Nombre de tu Aventura. Es lo que verán los Players al acceder. Elige algo descriptivo y atractivo. |
| **Descripción** | No | Texto introductorio que aparece junto al título. Puedes usarla para explicar brevemente de qué trata la Aventura. |

En la parte superior del formulario verás un indicador con el **idioma por defecto** que elegiste en el paso anterior. El título y la descripción que escribas aquí corresponden a ese idioma.

:::note
Si necesitas que tu Aventura esté disponible en varios idiomas, podrás añadir traducciones del título y la descripción más adelante desde el apartado [Idiomas y traducciones](idiomas-traducciones.md) del editor.
:::

Haz clic en **Siguiente →** para continuar.

## 🏗️ Paso 3 — Estructura de la Aventura

El último paso te permite elegir cómo empezar a diseñar tu Aventura. Tienes dos opciones:

![Paso 3 del asistente: Estructura de la Aventura con dos opciones — Aventura en blanco y Generar estructura](/img/gamifier/aventuras/gamifier-wizard-paso3-estructura.png)

### Aventura en blanco

Crea una Aventura vacía sin ningún contenido. Tú diseñarás las Misiones y los Retos desde cero. Es la opción recomendada si ya tienes claro lo que quieres construir.

### Generar estructura

Genera automáticamente Misiones y Retos de ejemplo para que tengas una base sobre la que trabajar. Es útil si quieres explorar las posibilidades de la plataforma o necesitas un punto de partida rápido.

Al seleccionar **Generar estructura**, aparece un panel de configuración donde puedes indicar cuántos elementos crear:

| Parámetro | Descripción |
|---|---|
| **Núm. Misiones** | Cantidad de Misiones a generar. |
| **Núm. Pregunta/Respuesta** | Retos de tipo Pregunta/Respuesta por Misión. |
| **Núm. Check In** | Retos de tipo Llamada a la Acción por Misión. |
| **Núm. Compartir Foto** | Retos de tipo Compartir Foto por Misión. |
| **Núm. Respuesta Libre** | Retos de tipo Respuesta Libre por Misión. |
| **Núm. Trivial** | Retos de tipo Preguntas Encadenadas por Misión. |
| **Núm. PR en Trivial** | Preguntas dentro de cada Trivial. |
| **Usar mapas Geolocalizados** | Si se activa, se generarán mapas GPS en lugar de mapas imagen. |

Una vez elegida la opción, haz clic en **Crear Aventura** para finalizar.

## ✅ Resultado: tu Aventura en estado Draft

Tras hacer clic en **Crear Aventura**, el sistema muestra un mensaje de confirmación: **¡Aventura creada!** A continuación, se abre el editor de la Aventura con toda la configuración lista para que empieces a diseñar.

![Editor de la Aventura recién creada mostrando el estado Draft, fechas, idioma, zona horaria y la licencia asignada](/img/gamifier/aventuras/gamifier-aventura-creada-draft.png)

Tu nueva Aventura se crea con estas características:

- **Estado: Draft** — La Aventura no es visible para los Players hasta que la publiques.
- **GamePIN asignado** — Se genera automáticamente un código numérico de 9 dígitos que los Players usarán para unirse.
- **Licencia vinculada** — La licencia que seleccionaste aparece en el apartado *Licencia de Aventura* del editor.
- **Indicadores a cero** — Los contadores de jugadores empiezan todos en 0 porque aún no hay Players.

:::warning El GamePIN se genera al crear la Aventura
El GamePIN se asigna en el momento de la creación y no se puede cambiar después. Compártelo con tus Players solo cuando estés listo para que empiecen a jugar.
:::

## 🔜 Siguientes pasos

Con la Aventura creada, ya puedes empezar a diseñar su contenido:

1. **[Configuración](configuracion.md)** — Ajusta los parámetros generales: visibilidad, controles del Player, condiciones de finalización, etc.
2. **[Publicar Aventura](publicar-aventura.md)** — Cuando estés listo, cambia el estado de Draft a Published para que los Players puedan acceder.
3. **Crear Misiones y Retos** — Empieza a diseñar la experiencia añadiendo Misiones y Retos a tu Aventura.

:::tip Prueba tu Aventura antes de publicar
Mientras la Aventura esté en estado Draft, puedes probar los Retos tú mismo como Game Designer. Usa los botones **Eliminar mis jugadas** y **Eliminar mis objetos** del editor para reiniciar tus pruebas sin afectar a otros.
:::
