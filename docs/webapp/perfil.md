---
sidebar_position: 1
title: 👤 Perfil del Player
description: Perfil del Player en la Webapp de AdventuriQ — edición de datos personales, historial de Aventuras con estadísticas, código QR personal, preferencias de idioma e información de versión.
keywords: [perfil, player, cuenta, avatar, mis-aventuras, qr, preferencias, webapp, adventuriq]
---

# 👤 Perfil del Player

El **Perfil** es el espacio personal del Player dentro de la Webapp. Desde aquí puedes editar tus datos (nombre, nickname, email, contraseña y avatar), consultar todas las Aventuras en las que participas con sus estadísticas, mostrar tu código QR personal y configurar el idioma de las Aventuras.

:::info 🎮 Vista del Player
Esta página describe la vista del Player en la Webapp. El Game Master no interviene en la configuración del perfil — cada Player gestiona el suyo de forma autónoma.
:::

## Acceder al Perfil

Para abrir tu perfil, pulsa tu **avatar** en la esquina superior derecha de la Webapp o entra desde el **menú lateral**. El perfil se organiza en cinco pestañas: Cuenta, Mis Aventuras, QR, Preferencias y Acerca de.

## Pestaña Cuenta

La pestaña Cuenta muestra tus datos personales con un campo editable por fila:

| Campo | Editable | Notas |
|---|---|---|
| **Avatar** | Sí | Toca el badge naranja de la cámara sobre la foto para cambiar la imagen. |
| **Nombre** | Sí | Tu nombre real. |
| **Nickname** | Sí | Nombre visible para otros Players en la Clasificación. Permite espacios (mín. 3 caracteres). |
| **Email** | Sí | Correo asociado a tu cuenta. |
| **Contraseña** | Sí | Se edita mediante un diálogo con 3 campos: actual, nueva y repetir nueva. |

### Editar un campo

1. Pulsa el **icono del lápiz** naranja a la derecha del campo que quieres cambiar.
2. Escribe el nuevo valor en el diálogo que aparece.
3. Pulsa **Guardar**.
4. Si el email o nickname ya están en uso por otro Player, aparece un mensaje de error y el cambio no se guarda.
5. Tras guardar con éxito, aparece un aviso verde "Actualizado correctamente".

### Cambiar la contraseña

1. Pulsa el lápiz en la fila **Contraseña**.
2. Rellena los 3 campos: contraseña actual, nueva contraseña, repetir nueva contraseña. Cada campo tiene un icono de "ojo" para mostrar/ocultar el texto.
3. Pulsa **Guardar**.
4. Si la contraseña actual es incorrecta o las nuevas no coinciden (mínimo 6 caracteres), aparece un error.

### Cambiar el avatar

1. Toca el **badge naranja de la cámara** (esquina inferior derecha de tu foto circular en el hero banner del perfil).
2. Selecciona una imagen de tu dispositivo.
3. Mientras sube, aparece un indicador de progreso.
4. Al terminar, la nueva imagen se muestra inmediatamente.

## Pestaña Mis Aventuras

Muestra todas las Aventuras en las que estás apuntado, en un grid de tarjetas con la imagen de cada Aventura como fondo. Cada tarjeta incluye un badge de estado:

| Badge | Significado |
|---|---|
| **Finalizada** (dorado, icono trofeo) | Has completado la Aventura según sus condiciones de finalización. |
| **En curso** (naranja, icono play) | La Aventura está activa y has empezado a jugar. |
| **No jugada** (blanco, icono "nuevo") | Te has apuntado pero aún no has completado ningún Reto. |

### Resumen de una Aventura

Al pulsar sobre una tarjeta se abre una pantalla de resumen con:

- **Hero banner** con la imagen de cabecera de la Aventura y el badge de estado.
- **Cuatro tarjetas de estadísticas**: Misiones finalizadas, Retos completados, Puntos obtenidos y Posición en el ranking (cada una muestra tu valor y el total entre paréntesis).
- **Botón "Objetos conseguidos"** que abre el baúl de esa Aventura con todos los Objetos Digitales que has obtenido. Desde ahí puedes abrir el detalle de cada objeto.

El botón **atrás** (flecha en círculo naranja) del hero banner te devuelve al punto exacto desde donde entraste al perfil.

## Pestaña QR

Muestra tu **código QR personal**, un identificador único y aleatorio representado como un QR grande y de alto contraste. Este código está preparado para futuras mecánicas entre Players (duelos, intercambio de objetos, etc.).

El QR **no es una credencial** — contiene un identificador aleatorio sin información sensible. Es seguro mostrarlo en pantalla o dejar que otro Player lo escanee.

:::note
El código QR se genera automáticamente con tu cuenta. Si tu cuenta es anterior a esta funcionalidad, se genera la primera vez que entras en la pestaña QR.
:::

## Pestaña Preferencias

Permite elegir el **idioma de las Aventuras** entre los disponibles. La selección se guarda en el servidor, así que el idioma que elijas se mantiene aunque cambies de dispositivo.

Los idiomas de la interfaz de la Webapp son: Español, Inglés, Català y Francés. Si el idioma de tu dispositivo no coincide con ninguno de estos, se usa Inglés por defecto.

## Pestaña Acerca de

Muestra la **versión y número de build** de la Webapp y una nota informativa sobre los idiomas disponibles en la interfaz.

## Navegación del Perfil

El botón atrás del hero banner siempre te devuelve al lugar exacto desde donde entraste al perfil (menú lateral, listado de Aventuras, una pantalla de juego, etc.). Si entras directamente por un enlace, te lleva por defecto al listado de Aventuras.

## Continúa aprendiendo

- Cómo funciona la Clasificación y tu posición: [Clasificación](../metricas/clasificacion.md).
- Qué son los Objetos Digitales: [Objetos Digitales](../aventuras/objetos-digitales.md).
- Instalar la app para jugar a pantalla completa: [Instalar la App](../instalar-la-app.md).
