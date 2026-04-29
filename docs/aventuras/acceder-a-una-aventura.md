---
sidebar_position: 4
title: 🔗 Acceder a una Aventura
description: Las 3 rutas para que un Player vincule una Aventura a su cuenta de AdventuriQ — deep link, GamePIN manual y listado de Aventuras.
keywords: [player, webapp, gamepin, deep-link, qr, aventura, vinculacion, acceder, adventuriq]
---

# 🔗 Acceder a una Aventura

:::info 🎮 Vista del Player
Esta página describe cómo un **Player** vincula y accede a una Aventura desde la Webapp. Se incluye en el manual del Game Master para que sepa qué compartir con sus Players y pueda resolver sus dudas.
:::

El listado de Aventuras de un Player **solo muestra las Aventuras que ha vinculado a su cuenta**. No existe un catálogo global donde los Players puedan explorar todas las Aventuras disponibles en AdventuriQ. Si un Player no ve ninguna Aventura en su listado, significa que todavía no ha vinculado ninguna.

Existen **tres formas** de que una Aventura aparezca en el listado del Player:

| Ruta | Cómo funciona | Cuándo usarla |
|---|---|---|
| **Deep link** | El Player pulsa un enlace o escanea un QR que el GM le comparte | Ruta preferida — sin fricción, un solo clic |
| **GamePIN manual** | El Player teclea el código de 9 dígitos en la Webapp | Cuando el enlace no es práctico (dictado en persona, pantalla compartida) |
| **Listado** | El Player abre una Aventura que ya tiene vinculada | Acceso cotidiano a Aventuras ya conocidas |

Las dos primeras rutas son **mecanismos de vinculación**: asocian una Aventura nueva a la cuenta del Player. La tercera es simplemente **acceso recurrente** a una Aventura que ya fue vinculada en su momento.

## 🔗 Vincular con deep link

El deep link es la ruta más directa. El Game Master comparte con sus Players una URL (o un código QR que contiene esa URL) y el Player solo tiene que hacer clic — la Webapp se encarga de todo automáticamente.

**Formato del enlace**: `https://webapp.adventuriq.com/#/{GamePIN}`

Cuando el Player pulsa el enlace (o escanea el QR):

1. La Webapp se abre directamente en la pantalla de la Aventura.
2. La vinculación ocurre automáticamente en segundo plano — el Player no tiene que hacer nada más.
3. La Aventura queda añadida a su listado para futuras visitas.

![Pantalla de la Aventura tras pulsar un deep link — la vinculación ha ocurrido automáticamente y el Player ya ve la información de la Aventura](/img/webapp-acceder-deeplink-aterrizaje.png)

:::tip 👑 Para el Game Master
El deep link es la opción más cómoda tanto para ti como para tus Players. Comparte la URL por email, WhatsApp, intranet o cualquier canal digital. Si preparas una experiencia presencial (evento, gymkana, escape room), usa el **código QR** impreso en un cartel o folleto — funciona igual que el enlace.
:::

## 🔢 Vincular con GamePIN

El **GamePIN** es un código numérico de **9 dígitos** que la plataforma asigna automáticamente a cada Aventura cuando se crea. Es útil cuando compartir un enlace no resulta práctico — por ejemplo, si el Game Master dicta el código en voz alta durante una presentación.

### Cómo introducir el GamePIN

El Player tiene **dos caminos** para abrir el diálogo de vinculación:

**Desde el menú lateral** (recomendado): pulsar el icono de menú (☰) y seleccionar **+ Añadir Aventura**.

![Menú lateral de la Webapp con la opción "+ Añadir Aventura" visible entre "Aventuras" e "Instalar la App"](/img/webapp-acceder-menu-anadir-aventura.png)

**Desde la barra de búsqueda**: en el listado de Aventuras, pulsar el botón **+** a la izquierda de la barra de búsqueda.

En ambos casos se abre el mismo diálogo:

![Diálogo "Añadir Aventura" con el campo vacío mostrando el placeholder "GamePIN..." y el contador 0/9](/img/webapp-acceder-gamepin-dialog.png)

### Paso a paso

1. Abre el diálogo "Añadir Aventura" por cualquiera de los dos caminos.
2. Escribe los **9 dígitos** del GamePIN. El campo solo acepta números y el contador indica cuántos dígitos llevas (por ejemplo, 9/9 cuando está completo).
3. Pulsa **AÑADIR**.

![Diálogo con el GamePIN válido introducido — el contador muestra 9/9 y el botón AÑADIR está listo para confirmar](/img/webapp-acceder-gamepin-input.png)

Si el GamePIN es correcto, la Aventura se añade al listado y la Webapp navega automáticamente a la sección Aventuras para que veas la nueva entrada.

![Listado de Aventuras actualizado tras la vinculación — la nueva Aventura aparece junto con las que ya tenías](/img/webapp-acceder-gamepin-confirmacion.png)

### Si el GamePIN no es válido

Cuando el código introducido no corresponde a ninguna Aventura (por error tipográfico, porque la Aventura fue despublicada o por cualquier otro motivo), la Webapp muestra un aviso en rojo en la parte inferior de la pantalla. El mensaje es genérico para simplificar: la Webapp no distingue entre un PIN que no existe y uno que apunta a una Aventura no disponible.

![Aviso en rojo "Aventura inexistente o incorrecta" tras introducir un GamePIN no válido](/img/webapp-acceder-gamepin-error.png)

Si ves este error, verifica que has escrito los 9 dígitos correctamente y, si persiste, contacta con tu Game Master para confirmar el código.

## 📋 Acceder desde el listado

Una vez que una Aventura está vinculada a tu cuenta (ya sea por deep link o por GamePIN), aparece en tu **listado de Aventuras**. Este listado es la pantalla principal de la Webapp tras iniciar sesión.

![Listado de Aventuras del Player con varias Aventuras vinculadas — cada tarjeta muestra el nombre, la imagen de portada, el idioma y el estado de juego](/img/webapp-acceder-listado-aventuras.png)

Para jugar, simplemente pulsa la tarjeta de la Aventura que quieras abrir. Si la Aventura está dentro de sus fechas de juego y tienes Tokens disponibles, entrarás directamente a la experiencia.

El listado incluye una **barra de búsqueda** en la parte superior que te permite filtrar por nombre si tienes muchas Aventuras vinculadas. También desde aquí puedes añadir nuevas Aventuras pulsando el botón **+** junto a la barra.

## 🎟️ Vinculación, jugabilidad y Tokens

Vincular una Aventura, poder jugarla y consumir un Token son **tres cosas que ocurren en momentos distintos**. Entender esta separación evita confusiones:

| Momento | Qué ocurre | ¿Se consume Token? |
|---|---|---|
| **Vinculación** | La Aventura se asocia a tu cuenta y aparece en tu listado | No |
| **Primera partida** | Abres la Aventura por primera vez y empiezas a jugar | Sí — se consume 1 Token |
| **Partidas posteriores** | Vuelves a abrir la misma Aventura para continuar o revisarla | No |

:::info Vincular no cuesta nada
Puedes vincular tantas Aventuras como quieras sin gastar Tokens. El Token solo se consume cuando **inicias la primera partida** de una Aventura. Si vinculas una Aventura pero nunca la abres para jugar, no se descuenta ningún Token.
:::

Para más detalles sobre cómo funcionan los Tokens y cómo adquirirlos, consulta [Tokens](../tokens.md).

## 👑 Para el Game Master

Como Game Master, tú decides qué mecanismo de acceso compartir con tus Players. Los tres están disponibles en la sección **Acceso a la Aventura** del editor del Gamifier:

- **Deep link (URL)**: copia el enlace con el botón "Copiar enlace" y compártelo por el canal que prefieras. Es la opción con menos fricción para el Player.
- **Código QR**: haz clic en el QR para descargarlo como imagen. Úsalo en cartelería, pantallas o materiales impresos para experiencias presenciales.
- **GamePIN**: un código numérico de 9 dígitos asignado automáticamente. Útil para dictar en voz alta cuando no puedes compartir un enlace.

:::tip Recomendación
Siempre que sea posible, comparte el **deep link** o el **QR** en lugar del GamePIN. Para el Player es mucho más cómodo pulsar un enlace que teclear 9 dígitos, y se evitan errores de transcripción.
:::

## 📚 Continúa aprendiendo

- [Publicar una Aventura](publicar-aventura.md) — cómo hacer que tu Aventura sea accesible para los Players.
- [Bitácora del Player](bitacora.md) — lo que el Player ve una vez dentro de la Aventura.
- [Tokens](../tokens.md) — el modelo de acceso y consumo de Tokens.
