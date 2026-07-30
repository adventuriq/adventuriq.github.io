---
sidebar_position: 4.5
title: 🙋 Jugar sin registro (nickname)
description: Activa el acceso por nickname para que tus Players entren a jugar una Aventura desde el enlace directo o el QR sin crear cuenta ni dar su email.
keywords: [aventura, acceso, nickname, sin registro, invitado, game pin, enlace directo, qr, modo arena, adventuriq]
last_updated: 2026-07-28
---

# 🙋 Jugar sin registro (nickname)

:::info 🛠️ Quién puede hacer esto
**Game Master** y **Game Designer** (bajo supervisión del GM).
:::

Con la opción **Jugar sin registro (nickname)** activada, cualquier Player que abra el enlace directo de tu Aventura entra a jugar tecleando solo un nickname. Sin email, sin contraseña y sin crear cuenta.

## 🎯 Para qué sirve

El registro es el punto donde más gente se cae. En un evento presencial, una feria o una gymkana escolar, pedirle a alguien que cree una cuenta y valide su email antes de empezar a jugar cuesta minutos y participantes.

Esta opción elimina esa fricción: el Player escanea el QR, escribe cómo quiere llamarse y ya está dentro. Es especialmente útil en:

- **Eventos presenciales y ferias**, donde el tiempo de atención es corto.
- **Partidas de [Modo Arena](../modo-arena/index.md)**, con todo el grupo entrando a la vez desde el QR proyectado (dinámica tipo Kahoot).
- **Público sin email**, como grupos escolares o familiares.
- **Aventuras abiertas al público**, donde no necesitas saber quién es cada participante.

:::note Los invitados son Players normales
Un Player que entra por nickname aparece en el Gameboard, en las Clasificaciones y en los listados exactamente igual que uno registrado. Se identifica por su nickname en lugar de por su nombre de cuenta.
:::

## 📍 Dónde se configura

En el Gamifier, abre tu Aventura desde el listado y baja hasta la sección **Opciones de la Aventura**. Ahí encontrarás el interruptor **Jugar sin registro (nickname)**, con el icono de una persona con "+".

![Sección Opciones de la Aventura en el Gamifier con el interruptor "Jugar sin registro (nickname)" activado](/img/gamifier/aventuras/gamifier-jugar-sin-registro-switch.png)

### Activarlo paso a paso

1. Entra en el Gamifier y abre la Aventura (menú **Aventuras** → clic en la Aventura).
2. Baja hasta **Opciones de la Aventura**.
3. Activa el interruptor **Jugar sin registro (nickname)**.
4. Pulsa **Guardar Aventura**.

A partir de ese momento, cualquiera que abra el enlace directo de la Aventura podrá entrar solo con un nickname.

![Tooltip del interruptor explicando el funcionamiento del acceso por nickname](/img/gamifier/aventuras/gamifier-jugar-sin-registro-tooltip.png)

:::note Tus Aventuras actuales no cambian
La opción nace **desactivada** en todas las Aventuras existentes. Nada cambia hasta que tú la actives, Aventura por Aventura.
:::

## ⚙️ Qué tienes que tener en cuenta

| Aspecto | Cómo funciona |
|---|---|
| **Unicidad del nickname** | Único **dentro de cada Aventura**, sin distinguir mayúsculas de minúsculas. Dos Aventuras distintas pueden tener un "Nuria" cada una. |
| **Recuperar la sesión** | Automática desde el **mismo navegador y dispositivo** con el que entró la primera vez. |
| **Cambiar de dispositivo** | El progreso **no se transfiere**. Desde otro móvil, ese nickname aparecerá como "en uso" y habrá que elegir otro. |
| **Correos de la plataforma** | Los invitados no tienen email real, así que **no reciben ningún correo** (por ejemplo, la copia de su respuesta en un Reto de Respuesta Libre). |
| **Bloqueo por código y Tokens de acceso** | Totalmente compatibles. Si los tienes activos, el invitado los tendrá que superar igual que un Player registrado. |

:::warning Si el Player borra los datos de navegación
La cuenta de invitado vive en el navegador. Si el Player borra los datos de navegación o juega en modo incógnito, puede perder el acceso a su cuenta y tendrá que empezar de nuevo con otro nickname.

Para Aventuras largas o de varios días, es más seguro pedir a los Players que se registren con una cuenta normal.
:::

:::tip Cuándo NO usarlo
Si necesitas saber quién es cada participante (formaciones internas, onboarding de RRHH, certificados) o la Aventura dura varios días, deja la opción desactivada y pide registro con cuenta.
:::

## 🎮 Así lo verá el Player

El Player abre el enlace directo de la Aventura o escanea su QR:

```
https://webapp.adventuriq.com/#/{GamePIN}
```

En lugar de la pantalla de acceso habitual, ve el nombre de la Aventura y un único campo: **Nickname**. Esta pantalla es deliberadamente mínima: la imagen de la Aventura y el resto de su identidad visual aparecen en cuanto entra.

![Pantalla de entrada de la Webapp con el nombre de la Aventura y el campo Nickname](/img/webapp/acceder/jugar-sin-registro-join.png)

1. Escribe un nickname.
2. Pulsa **Jugar**.
3. Entra directamente a la Aventura y juega con normalidad: Retos, Puntos, Clasificación y Premios.

Si ese nickname ya lo está usando otro Player de esa Aventura, la Webapp avisa y le pide elegir otro. Ojo: esto también le pasa a un Player que ya jugó con ese nickname pero vuelve **desde otro dispositivo**.

![Aviso de la Webapp indicando que el nickname ya está en uso en esa Aventura](/img/webapp/acceder/jugar-sin-registro-nickname-en-uso.png)

Desde esa misma pantalla, el Player que ya tenga cuenta de AdventuriQ puede iniciar sesión con ella, o crear una cuenta completa si lo prefiere.

![Player invitado ya dentro de la Aventura tras entrar con su nickname](/img/webapp/acceder/jugar-sin-registro-dentro.png)

Si vuelve a abrir el enlace desde el mismo dispositivo, entra directo y con todo su progreso. Y si había cerrado sesión, recupera su cuenta tecleando el mismo nickname desde ese mismo dispositivo.

## 🏟️ En una partida de Modo Arena

Es donde más se nota. Con la opción activada, el arranque de una partida en directo es inmediato:

1. El moderador proyecta el visor de Arena con el QR y el Game PIN.
2. Cada Player escanea el QR con su móvil, teclea su nickname y pulsa **Jugar**.
3. El nickname aparece al momento en la sala de espera del visor, junto al recuento de participantes.

En la pantalla grande, la sala de espera muestra la **imagen de la Aventura de fondo** con su **título**, el Game PIN, el QR y los participantes que se van uniendo. En el móvil del invitado, la Aventura se ve igual que para un Player registrado: su imagen de fondo, el título y su nickname.

A partir de ahí la partida transcurre exactamente igual que con Players registrados.

![Sala de espera del visor de Modo Arena con el Game PIN, el QR y el nickname de un Player invitado ya dentro](/img/modo-arena/arena-lobby-invitado.png)

:::tip Pruébalo antes del evento
Activa la opción, abre el enlace de la Aventura en el móvil y entra como invitado. En treinta segundos sabrás exactamente qué van a ver tus Players el día del evento.
:::

## 📚 Continúa aprendiendo

- [Acceder a una Aventura](acceder-a-una-aventura.md) — las rutas de acceso del Player: enlace directo, GamePIN y listado.
- [Acceso a la Aventura](game-pin-bloqueos.md) — GamePIN, enlace directo, QR y bloqueo por código.
- [Configuración de una Aventura](configuracion.md) — el resto de opciones del editor.
- [Modo Arena](../modo-arena/index.md) — partidas en directo con el grupo entero.
