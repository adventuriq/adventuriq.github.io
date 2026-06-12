---
sidebar_position: 3
title: 📍 Permisos de GPS y cámara
description: Cómo reactivar los permisos de ubicación y cámara del navegador si los denegaste por error, directamente desde la Webapp sin salir del juego.
keywords: [permisos, gps, ubicación, cámara, qr, navegador, solución, problemas, webapp, adventuriq]
---

# 📍 Permisos de GPS y cámara

Algunas Aventuras usan la **ubicación GPS** (para retos geolocalizados y mapas) o la **cámara** (para escanear códigos QR o subir fotos). El navegador pide permiso la primera vez, pero es muy habitual cerrarlo sin querer o pulsar "Denegar" por error. Cuando eso ocurre, la Webapp deja de funcionar correctamente en esas funciones y hasta ahora no había una forma sencilla de solucionarlo.

Con esta mejora, la Webapp incluye un **panel de estado de permisos** accesible desde el menú lateral que te muestra en todo momento si la ubicación y la cámara están activas, pendientes o bloqueadas, y te guía paso a paso para reactivarlas sin salir del juego.

:::info 🎮 Vista del Player
Esta función es exclusiva de la Webapp. El Game Master no necesita configurar nada — el panel de permisos está disponible automáticamente para todos los Players.
:::

## Acceder al panel de permisos

Abre el **menú lateral** de la Webapp y pulsa **"Permisos de GPS y cámara"**. Se abre un panel con dos tarjetas — una para la Ubicación y otra para la Cámara — cada una con un indicador de estado por colores:

| Estado | Color | Significado |
|---|---|---|
| **Activado** | Verde | El permiso está concedido y la función opera con normalidad. |
| **Pendiente** | Gris | Cerraste el aviso del navegador sin responder. Puedes reactivarlo con un toque. |
| **Bloqueado** | Naranja | Denegaste el permiso. Necesitas seguir una guía breve para reactivarlo. |

![Menú lateral de la Webapp con la entrada "Permisos de GPS y cámara"](/img/webapp-permisos-menu-lateral.png)

## Reactivar un permiso pendiente

Si un permiso está en estado **Pendiente** (gris), significa que el aviso del navegador se cerró sin que respondieras. En este caso basta con pulsar el botón **"Activar"** de esa tarjeta: el navegador vuelve a mostrar el aviso de permiso y, al aceptarlo, la tarjeta pasa a verde al instante.

## Reactivar un permiso bloqueado

Si un permiso está en estado **Bloqueado** (naranja), significa que lo denegaste activamente. En este caso, pulsa **"Cómo activarlo"** para ver una guía ilustrada de 3 pasos adaptada a tu navegador:

- **Chrome / Edge**: pulsa el icono del candado junto a la dirección, busca el permiso y cámbialo a "Permitir".
- **Safari**: pulsa el botón "aA" en la barra de dirección y modifica los permisos del sitio.
- **Firefox**: pulsa el icono de permisos en la barra de dirección.
- **App instalada en iOS**: ve a Ajustes → Apps → Safari → y habilita el permiso para el sitio.

En Chrome 144 o superior, la ubicación se puede re-conceder con un solo toque gracias a un botón especial que aparece directamente en la guía.

Cuando hayas seguido los pasos del navegador, pulsa **"Ya lo he activado"** o simplemente concede el permiso desde el candado — la app lo detecta automáticamente, muestra una confirmación y la tarjeta pasa a verde.

## Recuperación automática durante el juego

No siempre necesitas ir al menú lateral. Si la Webapp detecta que un permiso está bloqueado justo cuando lo necesita, te muestra el panel de recuperación en el mismo lugar donde antes aparecía un error sin solución:

**En el mapa de retos geolocalizados**: el panel de recuperación de ubicación sustituye al antiguo mensaje de error. En cuanto concedes el permiso, el mapa se carga con tu posición sin recargar la página ni perder el progreso.

**Al pulsar GO en un reto con geolocalización**: si no se puede calcular tu posición, aparece el panel de recuperación en lugar de un error genérico.

**En el escáner QR**: si la cámara está bloqueada al abrir el escáner, este se cierra y aparece el panel de recuperación de la cámara. Al conceder el permiso, el escáner se reabre automáticamente.

**En retos de Compartir Foto**: si la cámara está bloqueada, ves el panel de recuperación con una opción adicional **"Continuar igualmente"** que te permite elegir una imagen de la galería sin necesidad de activar la cámara.

:::tip 💡 Detección instantánea
No necesitas recargar la página ni volver atrás. En cuanto el Player concede el permiso por cualquier vía, la app lo detecta al instante, muestra una confirmación y reanuda la acción interrumpida automáticamente.
:::

## Notas importantes

La cámara se enciende brevemente al comprobar su permiso — es normal y se apaga de inmediato. El panel lo avisa para que no te preocupes.

Los permisos se gestionan en los **ajustes del sitio del navegador** (el icono del candado o "aA" junto a la dirección), no en los Ajustes generales del dispositivo. La única excepción es la app instalada (PWA) en iOS, donde los permisos se gestionan en Ajustes de iOS → Apps → Safari.

## Continúa aprendiendo

- Cómo instalar la app para jugar a pantalla completa: [Instalar la App](../instalar-la-app.md).
- Tu espacio personal dentro de la Webapp: [Perfil del Player](./perfil.md).
