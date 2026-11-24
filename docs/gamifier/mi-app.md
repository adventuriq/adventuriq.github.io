---
sidebar_position: 3
title: "📲 Mi App"
description: Mi App del Gamifier de AdventuriQ — la versión de tu Webapp con marca propia, el ZIP de cada versión para descargar, las novedades y el correo de aviso de versión nueva.
keywords: [mi app, webapp, marca, dominio, versión, zip, descargar, alojamiento, novedades, game master, gamifier, adventuriq]
---

# 📲 Mi App

:::info 👑 Quién puede usarlo
Solo el **Game Master** que tiene contratada la Webapp con su marca y la tiene activa. Los Game Designers no ven esta pantalla.
:::

Si tienes contratada la **Webapp con tu propia marca**, el Gamifier te enseña en **Mi App** qué versión tienes, el ZIP de cada versión listo para descargar y las novedades de las últimas versiones. Además, te avisamos por correo cada vez que hay una versión nueva.

## 🎯 Para qué sirve

- **¿Qué versión tiene mi App?** La versión actual y, si la aloja AdventuriQ, la fecha de la última actualización.
- **¿Tengo que hacer algo?** Un aviso te lo dice según quién aloje tu App.
- **¿Qué trae cada versión?** Las novedades de la Webapp, con las que ya incluye tu App marcadas.

:::note Antes de empezar
- La Webapp con tu marca (la [branderización](../tokens.md#branderizacion-del-webapp)) es un **servicio que se contrata aparte** y que puedes añadir a cualquier Licencia o Plan. Incluye tu propio dominio o un subdominio de AdventuriQ. Lo activa AdventuriQ.
- Hasta que AdventuriQ genera la primera versión de tu App, la pantalla lo indica: «Todavía no hemos generado ninguna versión de tu App. Te avisaremos por correo en cuanto esté lista.».
:::

## 📍 Cómo acceder

En el menú lateral del Gamifier, pulsa **Mi App**. La entrada solo aparece si tienes una Webapp con tu marca activa.

![Menú lateral del Gamifier con la entrada Mi App, entre Aventuras y Mis Game Designers](/img/gamifier-mi-app-menu.png)

## 🪪 La cabecera

En la parte superior verás el **nombre de tu App**, su **dominio**, la etiqueta **«Alojada por AdventuriQ»** o **«Alojamiento propio»** y **«Tu versión»**. Debajo, un aviso te explica qué tienes que hacer, y la tabla **«Versiones de tu App»** lista cada versión con las columnas **Versión**, **Disponible desde**, **Actualizada en tu dominio**, **Tamaño** y **ZIP**.

## 🏠 Dos modalidades

La pantalla se adapta a quién aloja tu App:

| | Alojada por AdventuriQ | Alojamiento propio |
|---|---|---|
| **Quién publica cada versión** | AdventuriQ, en tu dominio | Tú, en tu servidor |
| **Qué tienes que hacer** | Nada | Descargar el ZIP y subir su contenido a tu alojamiento |
| **Aviso en Mi App** | «Tu App está al día. La alojamos nosotros y la actualizamos cada vez que sale una versión: no tienes que hacer nada.» La fecha de cada actualización aparece en la columna **Actualizada en tu dominio**. | «Tú alojas tu App» |
| **Para qué sirve el ZIP** | Para guardar una copia, si quieres | Es lo que subes a tu servidor |
| **Qué dice el correo de aviso** | Que tu App ya está actualizada en tu dominio | Que tienes una versión nueva para descargar |

![Mi App de un cliente alojado por AdventuriQ: cabecera con el nombre de la App, su dominio, la etiqueta Alojada por AdventuriQ y Tu versión, el aviso Tu App está al día y la tabla Versiones de tu App con el botón Descargar](/img/gamifier-mi-app-alojada.png)
<!-- 📸 CAPTURA PENDIENTE: /img/gamifier-mi-app-alojamiento-propio.png — «Mi App» con alojamiento propio (cabecera, aviso «Tú alojas tu App» y tabla de versiones con «Descargar») -->

## ⬇️ Actualizar tu App (alojamiento propio)

1. Cuando recibas el correo de versión nueva, pulsa su botón o abre **Mi App**.
2. En **«Versiones de tu App»**, localiza la fila marcada como **«La más reciente»**.
3. Pulsa **«Descargar»**: se descarga un ZIP con la App completa.
4. Descomprímelo y sube **todo su contenido** a tu alojamiento, sustituyendo los ficheros de la versión anterior.

:::warning Sube todo el contenido del ZIP
No subas solo algunos ficheros: la App comprueba la integridad de sus ficheros para el modo [sin conexión](../webapp/jugar-sin-conexion.md).
:::

Tras actualizar, los Players reciben la versión nueva la siguiente vez que abren la App con conexión.

## 🗂️ Versiones de tu App

Se conservan los ZIP de las **tres últimas versiones**. Las anteriores siguen en la lista, pero aparecen como **«Ya no disponible»** y no se pueden descargar.

<!-- 📸 CAPTURA PENDIENTE: /img/gamifier-mi-app-version-no-disponible.png — Tabla de versiones con una fila «Ya no disponible» -->

## 📰 Novedades de cada versión

1. En **Mi App**, baja hasta **«Novedades de cada versión»**.
2. Cada versión de la Webapp lista sus cambios, etiquetados como **Nueva funcionalidad** o **Mejora**. Las que ya incluye tu App llevan la marca **«En tu App»**.
3. **«Ver el historial completo»** abre el historial de versiones de la Webapp.

![Bloque Novedades de cada versión: la versión v3.12.0 con la marca En tu App, sus cambios etiquetados como Nueva funcionalidad o Mejora y el botón Ver el historial completo](/img/gamifier-mi-app-novedades.png)

## 📧 El correo de aviso

Cada vez que hay una versión nueva de tu App recibes un correo en la cuenta de tu Game Master, en tu idioma (español o inglés). El correo indica la versión, las novedades principales y un botón que abre **Mi App**.

<!-- 📸 CAPTURA PENDIENTE: /img/gamifier-mi-app-correo-nueva-version.png — Correo «nueva versión de tu App» (versión alojamiento propio) -->

## 🎮 Así lo verá el Player

El Player no nota ningún cambio: sigue jugando en la Webapp con tu marca, en tu dominio.

## 📚 Continúa aprendiendo

- Qué ve el Player en la Webapp: [La Webapp en horizontal](../webapp/webapp-en-horizontal.md).
- Avisos de versión nueva dentro de la App: [Avisos de la app y problemas de conexión](../webapp/avisos-y-problemas-de-conexion.md#-versión-nueva-de-la-app).
- Tu saldo, tus Licencias y tus avisos: [Perfil de usuario](./perfil-de-usuario.md).
