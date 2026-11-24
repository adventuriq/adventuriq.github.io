---
sidebar_position: 4
title: 🔔 Avisos de la app y problemas de conexión
description: Qué significan los avisos de la Webapp de AdventuriQ (sin conexión, servidor que no responde, GPS, ventana de Google bloqueada, versión nueva) y qué hacer en cada caso sin perder ninguna jugada.
keywords: [avisos, errores, conexión, servidor, reintentar, sin conexión, google, gps, versión nueva, actualizar, webapp, player, adventuriq]
---

# 🔔 Avisos de la app y problemas de conexión

Cuando algo falla (te quedas sin cobertura, el servidor tarda en responder, el GPS no encuentra tu posición…), la Webapp **te dice qué pasa y qué puedes hacer**. Y lo más importante: **tus jugadas no se pierden** aunque el servidor falle justo al enviar una respuesta.

:::info 🎮 Para el Player
Esta página describe la experiencia del Player en la Webapp. El **Game Master** no tiene que configurar nada: funciona en todas las Aventuras, descargadas o no. Al final de la página tienes una sección con lo que conviene contar en el briefing.
:::

## 🎯 Para qué sirve

- **Saber qué ha pasado**: el aviso dice el motivo real (sin conexión, servidor no disponible o sin permiso), no un error genérico.
- **No perder jugadas**: si tu respuesta no llega al servidor, se guarda en el dispositivo y se envía sola más tarde.
- **Tener siempre una salida**: reintentar, volver a las Misiones o recargar, en lugar de quedarte ante una pantalla gris.

## 📣 Cómo son los avisos

Los avisos de la app aparecen **arriba, bajo la barra superior**, con texto grande.

| Tipo de aviso | Cómo se cierra |
|---|---|
| **Error o advertencia** (rojo o naranja) | **No desaparece solo**: se queda hasta que pulsas la **X**, para que lo leas con calma. |
| **Informativo** | Se cierra solo a los pocos segundos. |

- **Sin avisos repetidos.** Si el mismo aviso se repite, se muestra una sola vez con un contador (por ejemplo, «x3»).
- **Varios avisos a la vez.** Con varios avisos abiertos aparece «N avisos más · Cerrar todos».
- **Un aviso abierto no bloquea nada.** Puedes seguir usando la pantalla que hay debajo.

![Aviso rojo de la app bajo la barra superior, con el contador x2 y la X para cerrarlo](/img/webapp-avisos-contador.png)

<!-- 📸 CAPTURA PENDIENTE: /img/webapp-avisos-varios-cerrar-todos.png — Dos avisos abiertos a la vez con «N avisos más · Cerrar todos» -->

:::note Avisos de la app ≠ avisos de la Aventura
Esta página trata solo los avisos de la app: conexión, servidor, GPS, archivos, acceso y versión nueva. Los avisos de la propia Aventura (el resultado de un Reto, «Misión finalizada», «Novedades al sincronizar»…) no cambian.
:::

## 🔌 Si algo no carga

El aviso te dice el motivo real (sin conexión, servidor no disponible o sin permiso) y la pantalla te ofrece el botón **Reintentar**. Por ejemplo, al abrir la lista de Misiones con el servidor sin responder:

1. Arriba aparece un aviso rojo: «El servidor no responde ahora mismo. Inténtalo de nuevo en un momento.». En la tarjeta de Misiones aparece el botón **Reintentar**.
2. El aviso sigue visible hasta que pulsas la **X**.
3. Pulsa **Reintentar**: cuando el servidor vuelve a estar disponible, se cargan las Misiones.

<!-- 📸 CAPTURA PENDIENTE: /img/webapp-avisos-servidor-no-responde.png — Lista de Misiones con el aviso rojo arriba y el botón Reintentar -->

### Si una pantalla no se puede mostrar

En lugar de una pantalla gris, aparece el panel **«Algo no ha ido bien en esta pantalla»** con tres botones: **Reintentar**, **Volver a las Misiones** y **Recargar**.

<!-- 📸 CAPTURA PENDIENTE: /img/webapp-avisos-panel-recuperacion.png — Panel «Algo no ha ido bien en esta pantalla» con Reintentar, Volver a las Misiones y Recargar -->

Las esperas largas («Comprobando respuesta»…) te ofrecen **Seguir esperando** o **Salir**.

## 💾 Tus jugadas no se pierden

Si el servidor no responde o la conexión se queda colgada al enviar una respuesta, la jugada **se guarda en tu dispositivo y se envía sola** en cuanto es posible. Antes esto solo ocurría cuando no había conexión.

1. Respondes un Reto y pulsas el botón de enviar.
2. El servidor falla: la jugada queda guardada en el dispositivo y ves tu resultado con **Continuar**, como siempre.
3. En la barra superior, el **icono de la nube** muestra cuántas jugadas faltan por enviar.
4. Cuando el servidor vuelve, la jugada se envía sola y aparece la ventana **«Novedades al sincronizar»**.

<!-- 📸 CAPTURA PENDIENTE: /img/webapp-avisos-jugada-pendiente.png — Resultado de un Reto con jugadas pendientes (icono de la nube con número) -->

Para que una jugada guardada se envíe solo tienes que volver a abrir la app con conexión. Tienes todo el detalle en [Jugar sin conexión](./jugar-sin-conexion.md#-sincronizar).

### Cuando te quedas en el Reto

Si la respuesta no se ha podido enviar, o el Reto exige una [Llave](../aventuras/llaves-digitales.md) que no tienes, te quedas en el Reto con un aviso en lugar de pasar a la pantalla de resultado.

## 🆕 Versión nueva de la app

Cuando hay una versión nueva aparece el aviso **«Hay una versión nueva de la app»** con el botón **Actualizar**. Nunca aparece en mitad de un Reto.

<!-- 📸 CAPTURA PENDIENTE: /img/webapp-avisos-version-nueva.png — Aviso «Hay una versión nueva de la app» con el botón Actualizar -->

## 🔑 Entrar con Google

1. En la pantalla de acceso, pulsa **Sign in with Google**.
2. Se abre la ventana de Google para elegir la cuenta, aunque el navegador no tuviera una sesión de Google abierta.
3. Si el navegador bloquea la ventana, aparece el aviso «No se ha podido abrir la ventana de Google. Permite las ventanas emergentes para esta página e inténtalo de nuevo.». Permite las ventanas emergentes y vuelve a pulsar el botón.

<!-- 📸 CAPTURA PENDIENTE: /img/webapp-avisos-google-ventana-bloqueada.png — Pantalla de acceso con el aviso de ventana de Google bloqueada -->

## 📍 Retos con GPS

Mientras la app busca tu posición, te lo indica en pantalla. Si no la consigue, te explica qué hacer y puedes reintentarlo. Si el problema es el permiso de ubicación, consulta [Permisos de GPS y cámara](./recuperacion-permisos-gps-camara.md).

## 🛠️ Para el Game Master

No hay nada nuevo en el Gamifier, pero te interesa saberlo para el briefing de tu Aventura:

- Una jugada hecha con mala cobertura **ya no se pierde**: se guarda en el dispositivo del Player y se envía sola.
- Si un Player te enseña un aviso rojo o naranja que no se va, basta con que pulse la **X**. Mientras tanto puede seguir jugando.
- Si un Reto exige una Llave que el Player no tiene, el Player se queda en el Reto con el aviso correspondiente. Ahora ocurre igual en todos los tipos de Reto.

## 📚 Continúa aprendiendo

- Jugar sin cobertura y sincronizar después: [Jugar sin conexión](./jugar-sin-conexion.md).
- Reactivar la ubicación o la cámara: [Permisos de GPS y cámara](./recuperacion-permisos-gps-camara.md).
- Conseguir y abrir Llaves: [Llaves Digitales](../aventuras/llaves-digitales.md).
