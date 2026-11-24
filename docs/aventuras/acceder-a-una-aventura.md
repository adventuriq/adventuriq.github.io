---
sidebar_position: 4
title: 🔗 Acceder a una Aventura
description: Las rutas para que un Player entre en una Aventura de AdventuriQ — enlace directo o QR, GamePIN (también sin haber iniciado sesión) y listado de Aventuras.
keywords: [player, webapp, gamepin, deep-link, acceso directo, qr, app instalada, aventura, vinculacion, acceder, adventuriq]
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
| **GamePIN manual** | El Player teclea el código de 9 dígitos (o pega el enlace, o escanea el QR) en la Webapp, con o sin sesión iniciada | Cuando el enlace no es práctico (dictado en persona, pantalla compartida) o en la App instalada en el ordenador |
| **Listado** | El Player abre una Aventura que ya tiene vinculada | Acceso cotidiano a Aventuras ya conocidas |

Las dos primeras rutas son **mecanismos de vinculación**: asocian una Aventura nueva a la cuenta del Player. La tercera es simplemente **acceso recurrente** a una Aventura que ya fue vinculada en su momento.

## 🔗 Vincular con deep link

El deep link es la ruta más directa. El Game Master comparte con sus Players una URL (o un código QR que contiene esa URL) y el Player solo tiene que hacer clic — la Webapp se encarga de todo automáticamente.

**Formato del enlace**: `https://play.adventuriq.com/#/{GamePIN}`

:::note Los enlaces antiguos siguen funcionando
Los enlaces para jugar estrenan la dirección `play.adventuriq.com`, más corta y fácil de dictar. Si tienes carteles, folletos o QR impresos con la dirección anterior (`webapp.adventuriq.com`), **siguen funcionando** igual: las dos direcciones abren la misma Webapp y no hay fecha de retirada de la antigua.
:::

Cuando el Player pulsa el enlace (o escanea el QR):

1. La Webapp se abre directamente en la pantalla de la Aventura.
2. La vinculación ocurre automáticamente en segundo plano — el Player no tiene que hacer nada más.
3. La Aventura queda añadida a su listado para futuras visitas.

:::info Si la Aventura tiene Términos y Condiciones
Al pulsar **Adelante**, el Player tiene que aceptar los [Términos y Condiciones](./terminos-y-condiciones.md) de la Aventura antes de entrar. Se piden **antes** que el código de acceso o el Token.
:::

![Pantalla de la Aventura tras pulsar un deep link — la vinculación ha ocurrido automáticamente y el Player ya ve la información de la Aventura](/img/webapp-acceder-deeplink-aterrizaje.png)

### 📲 Si el Player tiene la App instalada

Si el Player tiene la Webapp [instalada como App](../instalar-la-app.md) en **Android** o en el **ordenador** (Chrome o Edge), al pulsar el enlace o escanear el QR se abre **la App instalada** en lugar del navegador, y aterriza directamente en la Aventura. Si la App ya estaba abierta, no se abre una segunda ventana: la misma ventana navega a la Aventura.

<!-- 📸 CAPTURA PENDIENTE: /img/webapp-acceder-qr-app-instalada.png — App instalada en Android abierta en la Aventura tras escanear el QR (requiere un móvil Android con la App instalada) -->

:::warning Cuándo se sigue abriendo en el navegador
- **iPhone y iPad**: iOS no permite que un enlace abra una App instalada desde la web. El enlace y el QR se abren en Safari y la Aventura funciona igual.
- **App instalada desde la dirección antigua**: la App tiene que estar instalada desde `play.adventuriq.com`. Si se instaló desde `webapp.adventuriq.com`, los enlaces nuevos se abren en el navegador; basta con desinstalarla y volver a instalarla desde `play.adventuriq.com`.
- **Android con otro navegador**: en Android la App debe haberse instalado desde **Chrome**. Si se añadió desde otro navegador es un simple acceso directo y los enlaces se abren en el navegador.
- **Apps lectoras de QR**: algunas abren el enlace en su propio visor en lugar de pasarlo al sistema. Con la **cámara** del móvil funciona.

Quien ya tenía la App instalada recibe este cambio automáticamente (Chrome actualiza la App en segundo plano, normalmente en menos de un día): no hace falta reinstalarla.
:::

:::tip 👑 Para el Game Master
El deep link es la opción más cómoda tanto para ti como para tus Players. Lo tienes a mano en dos sitios: en el **listado de Aventuras** del Gamifier, en la tarjeta **Acceso directo a la Aventura** de cada fila, junto al **GamePIN**, con un botón para copiarlo y otro para **descargar su QR listo para imprimir** (ver [Copiar el enlace o descargar el QR](#copiar-el-enlace-o-descargar-el-qr-desde-el-listado-de-aventuras)); y en el detalle de la Aventura, sección **Acceso a la Aventura**. Comparte la URL por email, WhatsApp, intranet o cualquier canal digital. Si preparas una experiencia presencial (evento, gymkana, escape room), usa el **código QR** impreso en un cartel o folleto — funciona igual que el enlace.
:::

:::note Sin cuenta: entrar solo con un nickname
Si activas la opción **Jugar sin registro (nickname)** en las Opciones de la Aventura, el Player que llegue por este enlace no necesita cuenta: teclea un nickname y entra a jugar. Ver [Jugar sin registro (nickname)](jugar-sin-registro.md).
:::

## 🔢 Vincular con GamePIN

El **GamePIN** es un código numérico de **9 dígitos** que la plataforma asigna automáticamente a cada Aventura cuando se crea. Es útil cuando compartir un enlace no resulta práctico — por ejemplo, si el Game Master dicta el código en voz alta durante una presentación.

El mismo campo donde se escribe el GamePIN acepta también:

- el **enlace directo** completo de la Aventura (también el que incluye un [Token de acceso único](../tokens-acceso-unico.md); en ese caso el token aparece ya escrito en la pantalla del código de acceso);
- el **QR** de la Aventura, leído con la cámara pulsando el icono de QR del campo (en el ordenador, con la webcam).

El GamePIN se puede escribir con espacios o guiones: la Webapp los ignora.

### Sin haber iniciado sesión

No hace falta tener cuenta ni haber iniciado sesión para unirse a una Aventura. En la **pantalla de acceso** de la Webapp, el botón **«¿Tienes un GamePIN, enlace o QR?»** (entre «He olvidado la contraseña» y «Crear una cuenta») lleva a una pantalla propia para unirse.

![Pantalla de acceso de la Webapp con el botón ¿Tienes un GamePIN, enlace o QR? sobre Crear una cuenta](/img/webapp-acceso-boton-unirse.png)

1. Pulsa **«¿Tienes un GamePIN, enlace o QR?»**.
2. Escribe el GamePIN o pega el enlace en el campo **GamePIN o enlace** (o pulsa el icono de QR y enfoca el QR con la cámara).
3. Pulsa **Unirme**. Con **«< Ir al Login»** vuelves a la pantalla de acceso.

![Pantalla ¿Tienes un GamePIN, enlace o QR? con el campo GamePIN o enlace, el icono para escanear el QR y el botón Unirme](/img/webapp-acceso-unirse-gamepin.png)

Lo que pasa después depende de cómo esté configurada la Aventura:

| Si la Aventura… | El Player ve… |
|---|---|
| Tiene activado [Jugar sin registro (nickname)](jugar-sin-registro.md) | La pantalla del **nickname**: escribe uno, pulsa **Jugar** y entra. |
| Requiere iniciar sesión | El aviso **«Esta Aventura requiere iniciar sesión. Accede o crea una cuenta para jugarla.»** y vuelve a la pantalla de acceso. Al iniciar sesión o crear la cuenta, el aviso se cierra solo y entra **directamente en esa Aventura**. |
| No existe (GamePIN equivocado) | El aviso **«Game PIN no válido»**. |

Si lo escrito no contiene ningún GamePIN, el propio campo lo indica.

![Pantalla del nickname tras pulsar Unirme en una Aventura con Jugar sin registro: nombre de la Aventura, campo Nickname y botón Jugar](/img/webapp-acceso-unirse-nickname.png)

![Aviso Atención: Esta Aventura requiere iniciar sesión, con el botón Aceptar](/img/webapp-aviso-requiere-login.png)

:::tip 🖥️ Imprescindible en la App instalada en el ordenador
La App instalada en el ordenador no tiene barra de direcciones donde pegar un enlace. Si tus Players la usan, indícales que escriban el GamePIN o peguen el enlace con el botón **«¿Tienes un GamePIN, enlace o QR?»** de la pantalla de acceso.
:::

### Con la sesión iniciada

El Player tiene **dos caminos** para abrir el diálogo **Añadir Aventura**:

**Desde el menú lateral** (recomendado): pulsar el icono de menú (☰) y seleccionar **+ Añadir Aventura**.

![Menú lateral de la Webapp con la opción "+ Añadir Aventura" visible entre "Aventuras" e "Instalar la App"](/img/webapp-acceder-menu-anadir-aventura.png)

**Desde la barra de búsqueda**: en el listado de Aventuras, pulsar el botón **+** a la izquierda de la barra de búsqueda.

En ambos casos se abre el mismo diálogo, con el campo **GamePIN o enlace** y el icono para escanear el QR:

![Diálogo Añadir Aventura con un enlace de Aventura pegado en el campo GamePIN o enlace, el icono de QR y el botón Añadir](/img/webapp-anadir-aventura-enlace.png)

1. Abre el diálogo «Añadir Aventura» por cualquiera de los dos caminos.
2. Escribe el GamePIN, pega el enlace o pulsa el icono de QR para escanearlo.
3. Pulsa **AÑADIR**.

La Aventura se añade a tu listado y la Webapp **entra directamente en ella**. Si ya estaba en tu listado, también entra en ella.

### Avisos y errores

Los avisos y errores de estas pantallas (acceso, registro, recuperar la contraseña, unirse, nickname y «Añadir Aventura») aparecen en una **ventana con el texto completo y un botón «Aceptar»**. La ventana no se cierra sola: el Player la cierra al pulsar **Aceptar**.

Si el GamePIN no corresponde a ninguna Aventura disponible, el aviso es **«Game PIN no válido»**:

![Ventana de aviso Error: Game PIN no válido, con el botón Aceptar](/img/webapp-aviso-ventana-gamepin-no-valido.png)

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

Como Game Master, tú decides qué mecanismo de acceso compartir con tus Players. Los tres están disponibles en la sección **Acceso a la Aventura** del editor del Gamifier y en el listado de Aventuras:

- **Deep link (URL)**: copia el enlace con el botón "Copiar enlace" y compártelo por el canal que prefieras. Es la opción con menos fricción para el Player.
- **Código QR**: descárgalo como imagen para cartelería, pantallas o materiales impresos de experiencias presenciales. El del listado de Aventuras está pensado para imprimir (ver abajo).
- **GamePIN**: un código numérico de 9 dígitos asignado automáticamente. Útil para dictar en voz alta cuando no puedes compartir un enlace.

### Copiar el enlace o descargar el QR desde el listado de Aventuras

No hace falta entrar en cada Aventura para conseguir su enlace o su QR. En el **listado de Aventuras** (la pantalla de inicio del Gamifier), junto al **GamePIN** de cada Aventura, la tarjeta **«Acceso directo a la Aventura»** muestra su enlace para jugar con dos botones a la derecha: **Copiar enlace** (naranja) y **Descargar QR para imprimir** (violeta, icono de QR).

![Tarjeta Acceso directo a la Aventura en el listado del Gamifier, con el enlace, el botón de copiar y el botón Descargar QR para imprimir](/img/gamifier-listado-acceso-directo-qr.png)

**Copiar el enlace:**

1. Localiza la Aventura (puedes usar el buscador de la parte superior).
2. Pulsa el botón de copiar que hay a la derecha del enlace.
3. Aparece **«¡Enlace copiado!»** durante unos segundos: ya puedes pegarlo en un email, un WhatsApp o donde quieras.

![Mensaje ¡Enlace copiado! junto al enlace para jugar en el listado de Aventuras](/img/gamifier-listado-enlace-copiado.png)

Si pulsas sobre el propio enlace, se abre en una pestaña nueva para que compruebes cómo lo verá el Player. Recuerda que la Aventura tiene que estar **publicada** para que el Player pueda jugar.

**Descargar el QR para imprimir:**

1. Localiza la Aventura y pulsa el botón violeta con el icono de **QR**.
2. El navegador descarga al momento una imagen PNG del QR del enlace.
3. Ábrela o insértala en el diseño de tu cartel, folleto o tarjeta e imprímela.

La imagen está preparada para imprenta:

- **Alta resolución** (unos 2400 × 2400 píxeles), apta para carteles grandes.
- **Margen blanco de seguridad** alrededor, necesario para que los móviles lo lean bien.
- **Sin texto**: ni título ni GamePIN dentro de la imagen, para que la integres en tu propio diseño y añadas lo que necesites.
- **Nombre de archivo** con el título de la Aventura y su GamePIN (p. ej. `QR-Mi-Aventura-123456789.png`), para distinguir los QR de varias Aventuras.
- **Corrección de errores alta**: se sigue leyendo aunque coloques un pequeño logo encima o el papel se deteriore un poco.

Al escanearlo, el Player aterriza directamente en la Aventura, igual que con el enlace. El QR de la sección **Acceso a la Aventura** del detalle codifica el mismo enlace; el del listado es el pensado para imprimir.

:::tip Recomendación
Siempre que sea posible, comparte el **deep link** o el **QR** en lugar del GamePIN. Para el Player es mucho más cómodo pulsar un enlace que teclear 9 dígitos, y se evitan errores de transcripción.
:::

## 📚 Continúa aprendiendo

- [Publicar una Aventura](publicar-aventura.md) — cómo hacer que tu Aventura sea accesible para los Players.
- [Bitácora del Player](bitacora.md) — lo que el Player ve una vez dentro de la Aventura.
- [Tokens](../tokens.md) — el modelo de acceso y consumo de Tokens.
