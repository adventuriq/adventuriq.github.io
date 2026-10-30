---
sidebar_position: 5
title: 🔑 Token de acceso único
description: Cómo generar códigos de acceso único para monetizar tus Aventuras — el GM compra Tokens, genera códigos, los vende y el Player los canjea para desbloquear la Aventura.
keywords: [token, acceso-unico, monetizacion, codigo, bloqueo, gamifier, webapp, adventuriq]
---

# 🔑 Token de acceso único

El **Token de acceso único** es un código alfanumérico de un solo uso que permite al Game Master monetizar sus Aventuras. El GM genera códigos individuales desde el Gamifier, los vende por el canal que prefiera (su web, email, en persona) y cada Player usa su código para desbloquear la Aventura. Una vez canjeado, el código queda vinculado a ese Player y no puede ser reutilizado por nadie más.

:::info 👑 Quién necesita leer esto
**Game Master** — esta página te explica cómo generar y gestionar Tokens de acceso único para tus Aventuras. Si eres **Player**, lo único que necesitas saber es que tu Game Master te proporcionará un código que deberás introducir para entrar a jugar.
:::

## Cómo funciona — las dos llaves

Para acceder a una Aventura protegida con Tokens de acceso único, el Player necesita **dos llaves**:

| Llave | Qué hace | Cuándo se usa | ¿Se consume? |
|---|---|---|---|
| **GamePIN o enlace directo** | Vincula la Aventura a la cuenta del Player | Al descubrir la Aventura | No — la vinculación es gratuita |
| **Token de acceso único** | Desbloquea la Aventura para poder jugarla | Al intentar entrar por primera vez | Sí — un solo uso, se invalida tras canjearlo |

Sin la primera llave, el Player no ve la Aventura en su listado. Sin la segunda, la ve pero no puede entrar — le aparece una pantalla de bloqueo pidiéndole el código.

:::warning Vincular ≠ Acceder
**Vincular** una Aventura (con el GamePIN o enlace directo) simplemente la añade al listado del Player. Es gratis y está documentada en [Acceder a una Aventura](./aventuras/acceder-a-una-aventura.md). **Acceder** (con el Token de acceso único) es lo que desbloquea el juego. Son dos pasos distintos.
:::

## Generar códigos de acceso único 👑

### Activar los Tokens en la Aventura

1. En el Gamifier, abre el editor de la Aventura.
2. Localiza la sección **"Tokens de acceso por player"** (debajo de la sección "Bloqueo por código de acceso").
3. Activa el toggle. Aparece el texto: *"Cada jugador necesita un token único para acceder a la Aventura."*
4. Guarda la Aventura.

![Sección de acceso en el editor de Aventura — bloqueo por código de acceso (arriba) y Tokens de acceso por player (abajo), mostrando los dos métodos mutuamente excluyentes](/img/gamifier-token-acceso-bloqueo-section.png)

Al activar los Tokens de acceso, se despliega un panel con los botones **"Generar Tokens"** y **"Actualizar"**, y la tabla de Tokens generados (inicialmente vacía).

![Panel de Tokens de acceso activado — botones Generar Tokens y Actualizar, mensaje indicando que no hay tokens generados](/img/gamifier-token-acceso-unico-panel.png)

:::note Tokens y código de acceso son mutuamente excluyentes
No se pueden tener activados a la vez el "Bloqueo por código de acceso" (código compartido) y los "Tokens de acceso por player" (códigos individuales). Al activar uno, el otro se desactiva automáticamente.
:::

### Generar los códigos

1. Pulsa **"Generar Tokens"**.
2. En el diálogo que aparece, indica cuántos Tokens quieres generar. El sistema muestra el máximo disponible según tu saldo de Tokens (ej. "máx. 450").
3. Pulsa **"Generar Tokens"** para confirmar.
4. Los códigos aparecen en la tabla inferior, listos para distribuir.

![Diálogo de generación de Tokens — campo numérico con el máximo permitido según el saldo disponible del GM](/img/gamifier-token-acceso-unico-generar.png)

Cada Token generado es una cadena alfanumérica de **9 caracteres en mayúsculas**, única por Aventura. El sistema genera los códigos automáticamente — no se pueden elegir manualmente.

:::info Límite de generación según tu saldo
El número máximo de códigos que puedes generar está limitado por tu saldo de Tokens de precompra (los mismos que compras a 1 € en la [tienda de Tokens](./tokens.md)). Generar códigos **no consume** tu saldo — solo establece el tope. El consumo real del Token ocurre cuando el Player accede a la Aventura por primera vez, siguiendo el flujo estándar.
:::

### La tabla de Tokens

Una vez generados, los Tokens aparecen en una tabla con las siguientes columnas:

| Columna | Descripción |
|---|---|
| **Token** | El código alfanumérico de 9 caracteres. |
| **Estado** | Activo o Inactivo. Solo los Tokens activos pueden ser canjeados por un Player. |
| **E-Mail** | Email asignado al Token (opcional). Si se rellena, solo el Player con ese email podrá usarlo. |
| **Nickname** | Nickname del Player que canjeó el Token (vacío si aún no se ha usado). |
| **Fecha Creación** | Cuándo se generó el Token. |
| **Fecha Unión** | Cuándo el Player canjeó el Token (vacío si aún no se ha usado). |
| **Canal** | Por dónde salió el código: `gamifier` si lo enviaste tú con el botón del sobre, o el nombre que envíe tu tienda (`woocommerce`, `atrapalo`…). |

La tabla incluye filtros por columna y paginación. El botón **"Actualizar"** refresca los datos para ver en tiempo real quién acaba de canjear su Token.

### Editar un Token

Desde la columna de acciones de la tabla, puedes editar un Token individual para:

- **Cambiar su valor** — reemplazar el código por otro distinto.
- **Asignar un email** — vincular el Token a un email concreto. Solo el Player cuyo email coincida podrá canjearlo (la comparación no distingue mayúsculas).
- **Desactivar el Token** — cambiar su estado a Inactivo sin borrarlo. El Player no podrá usarlo mientras esté inactivo.

### Eliminar Tokens

Puedes eliminar Tokens de dos formas: individualmente con el icono de papelera en cada fila, o en lote seleccionando varias filas con los checkboxes y pulsando **"Eliminar seleccionados"**.

## Entrega automática de códigos 📧

Cuando alguien compra tu Aventura, AdventuriQ puede **enviarle por correo su código y el enlace directo para empezar a jugar**, sin que tengas que buscar un código libre y escribir el correo a mano. Tienes tres formas de hacerlo, de más manual a más automática.

### Enviar un código por correo con un clic

1. En la Aventura, sección **Tokens de acceso por player**, pulsa **Actualizar** para ver la tabla.
2. En la fila de un código libre, pulsa el botón del **sobre** (Enviar token por email).
3. Escribe el correo del comprador y pulsa **Enviar**.
4. Aparece el aviso «Token enviado a…», la columna **E-Mail** se rellena con esa dirección y la columna **Canal** muestra `gamifier`.

<!-- 📸 CAPTURA PENDIENTE: /img/gamifier-tokens-acceso-tabla-envio-email.png — Tabla de Tokens con el botón del sobre y la columna Canal (requiere generar Tokens en la Aventura de prueba) -->
<!-- 📸 CAPTURA PENDIENTE: /img/gamifier-tokens-acceso-dialogo-enviar-email.png — Diálogo «Enviar token por email» con el campo de correo -->

El código queda **vinculado a ese correo**: solo esa persona podrá canjearlo.

### Exportar los códigos libres a CSV

Si vendes en una plataforma que entrega códigos automáticamente al comprador, pulsa **Exportar CSV (libres)**. Se descarga un archivo con dos columnas, el código y su enlace de juego, listo para subirlo a esa plataforma. Solo se exportan los códigos que siguen libres (sin usar y sin correo asignado) en ese momento.

### Conectar tu tienda online

Tu tienda (WooCommerce, Shopify, Zapier, Make…) puede pedir a AdventuriQ que entregue un código automáticamente **cada vez que se confirma una compra**. Para ello necesita una clave secreta:

1. Abre tu **perfil de usuario** en el Gamifier (menú superior derecho → tu nombre).
2. Baja hasta la sección **API Key — Venta externa de Tokens**.
3. Pulsa **Generar API key**. Aparecen la clave y un ejemplo de configuración listo para copiar.
4. Entrega esa clave a quien mantiene tu tienda para que la configure.

![Sección API Key — Venta externa de Tokens del perfil, con el botón Generar API key](/img/gamifier-perfil-api-key.png)

Si la clave se filtra o quieres cambiarla, pulsa **Regenerar** (crea una nueva e invalida la anterior) o **Revocar** (la desactiva).

:::caution La clave es secreta
Compártela solo con quien configura tu tienda. No la pegues en correos, documentos compartidos ni capturas de pantalla.
:::

Si la tienda avisa dos veces de la misma compra (algo habitual en las notificaciones automáticas), AdventuriQ entrega el **mismo código** en lugar de gastar uno nuevo, siempre que la tienda envíe la referencia del pedido.

### Lo que recibe el comprador

- Un correo con la **imagen de cabecera** de la Aventura, su título, el **código bien visible** y el botón **Empezar la Aventura**.
- El correo va **firmado por el creador de la Aventura** y lleva su dirección: si el comprador responde, te escribe a ti, no a la plataforma.
- Al pulsar el botón, se registra o inicia sesión **con el correo de la compra**, la Webapp abre la Aventura con el **código ya escrito** y solo tiene que pulsar **Comprobar código**.

<!-- 📸 CAPTURA PENDIENTE: /img/tokens-acceso-correo-entrega.png — Correo que recibe el comprador con la cabecera, el código y el botón Empezar la Aventura -->
<!-- 📸 CAPTURA PENDIENTE: /img/webapp-token-acceso-prerelleno.png — Pantalla del código de acceso con el Token ya relleno tras abrir el enlace del correo -->

:::warning El comprador tiene que entrar con el mismo correo
Es una protección antifraude: el código solo se canjea con el correo al que se envió. No sirve jugar como invitado ni con otra cuenta. Si el comprador quiere **regalar** la experiencia, envía el código al correo de quien vaya a jugar.
:::

:::note Cuándo se cobra el Token
El saldo se descuenta cuando el comprador **canjea** el código, no al generarlo ni al enviarlo. Los códigos generados y aún sin canjear cuentan como reservados y reducen los que puedes generar.
:::

## Qué ve el Player 🎮

### Aventura visible pero bloqueada

Cuando el Player vincula una Aventura protegida con Tokens (usando el GamePIN o enlace directo), la Aventura aparece en su listado con normalidad. Sin embargo, al pulsar para entrar, se le muestra una **pantalla de bloqueo** con el título "Introduce tu Token de acceso" y un campo de texto.

### Canjear el Token

1. El Player introduce el código de 9 caracteres que le proporcionó el Game Master.
2. Pulsa validar.
3. Si el Token es válido y no ha sido usado, el Player accede directamente a la Aventura y el Token queda vinculado a su cuenta de forma permanente.
4. En futuras visitas, el Player entra directamente sin necesidad de volver a introducir el código.

### Errores posibles

Si el Token no es válido, el sistema muestra un mensaje claro según el caso:

| Situación | Mensaje |
|---|---|
| Token no existe o está mal escrito | "Token inválido o no encontrado." |
| Token ya canjeado por otro Player | "Este Token ya ha sido utilizado por otro jugador." |
| Email no coincide con el asignado | "El email asignado al Token no coincide con el del jugador." |

## El modelo de monetización 💰

El Token de acceso único es la herramienta que permite al Game Master **vender acceso** a sus Aventuras. El flujo económico es sencillo:

1. **Compra**: el GM adquiere Tokens estándar en la [tienda de AdventuriQ](./tokens.md) a 1 € por Token.
2. **Genera**: desde el Gamifier, genera códigos de acceso único para la Aventura. La cantidad de códigos está limitada por su saldo de Tokens, pero generarlos no consume el saldo.
3. **Vende**: distribuye los códigos a sus clientes/alumnos/participantes por el canal que prefiera (web propia, email, marketplace, en persona) al precio que decida.
4. **El Player canjea**: cada comprador introduce su código y desbloquea la Aventura. En ese momento se consume 1 Token del saldo del GM (flujo estándar de consumo).

El margen de beneficio lo fija el GM. El coste unitario del Token es siempre 1 € (se consume cuando el Player accede); el precio de venta del código lo decide el GM según el mercado y la propuesta de valor de la Aventura.

:::tip 👑 Para el Game Master
El Token de acceso único es especialmente útil para formadores que venden cursos gamificados, organizadores de rutas turísticas, creadores de gymkanas con inscripción de pago, o cualquier escenario donde cada participante paga individualmente por su acceso.
:::

## Relación con Tokens estándar

El Token de acceso único y el Token estándar son dos usos del mismo recurso económico (el saldo de Tokens del GM), pero funcionan de forma diferente:

| Aspecto | Token estándar (sin código de acceso) | Token de acceso único |
|---|---|---|
| **Cuándo se consume el Token** | Cuando el Player accede a la Aventura | Cuando el Player accede a la Aventura (igual) |
| **Quién gestiona el acceso** | Acceso directo — el Player entra sin barrera | El GM genera un código y controla quién puede entrar |
| **Formato** | Automático, transparente | Código alfanumérico de 9 caracteres que el Player introduce |
| **Monetización** | No directa | Sí — el GM vende los códigos al precio que decida |
| **Pantalla de bloqueo** | No | Sí — el Player debe introducir el código antes de acceder |

En ambos casos, el consumo del Token ocurre en el mismo momento: cuando el Player accede a la Aventura por primera vez. La diferencia es que el Token de acceso único añade una **barrera de entrada** (el código) que el GM puede vender, controlando así quién accede y monetizando la experiencia.

## Notas importantes

- **Los Tokens no caducan.** Una vez generados, los códigos son válidos indefinidamente hasta que alguien los canjee o el GM los elimine.
- **Formato del código:** 9 caracteres alfanuméricos en mayúsculas, sin espacios ni caracteres especiales. Únicos por Aventura.
- **Email opcional pero recomendable.** Si asignas un email a un Token, te aseguras de que solo esa persona pueda usarlo. Si no, el primero que lo teclee se lo queda.
- **Usa el enlace del correo.** Si alguien que ya había desbloqueado esa Aventura antes introduce un código a mano (sin usar el enlace del correo), la app le deja entrar sin canjearlo. Con el enlace del correo —el flujo normal de compra— el código siempre se canjea y queda registrado.
- **Aventuras existentes no se ven afectadas.** Activar Tokens en una Aventura que ya tiene Players no bloquea a los Players que ya están jugando — solo afecta a nuevos accesos.

## Continúa aprendiendo

- Modelo económico general: [Tokens y Licencias](./tokens.md).
- Cómo vincula el Player una Aventura (llave 1): [Acceder a una Aventura](./aventuras/acceder-a-una-aventura.md).
- Configuración general de la Aventura: [Configuración](./aventuras/configuracion.md).
