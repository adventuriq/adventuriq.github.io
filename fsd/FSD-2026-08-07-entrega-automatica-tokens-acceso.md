---
feature_name: Entrega automática de Tokens de acceso
date: 2026-08-07
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/tokens-acceso-unico.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Entrega automática de Tokens de acceso
- **Descripción:** Cuando alguien compra tu Aventura, AdventuriQ puede enviarle
  automáticamente por correo su código de acceso y el enlace directo para
  empezar a jugar, sin que tengas que buscar un código libre y escribir el
  correo a mano.
- **Componentes afectados:** API (v4.60.0), Gamifier (v4.68.0), Webapp (v2.48.1)
- **Fecha de despliegue:** 2026-08-07

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- **Enviar un código por correo con un clic.** En la tabla de Tokens de acceso de
  la Aventura, cada código tiene un botón de sobre. Escribes el correo del
  comprador y AdventuriQ le envía el mensaje con su código y el enlace de juego.
  El código queda vinculado a ese correo: solo esa persona podrá canjearlo.
- **Descargar los códigos libres en CSV.** Un botón exporta los códigos aún sin
  usar junto a su enlace de juego, listos para subirlos a plataformas de venta
  que entregan códigos automáticamente al comprador.
- **Ver por dónde salió cada código.** La tabla muestra una columna nueva con el
  canal de entrega (por ejemplo `gamifier` si lo enviaste con el botón, o el
  nombre que tu tienda envíe: `atrapalo`, `woocommerce`…).
- **Conectar su tienda online.** En su perfil de usuario aparece una sección
  nueva, «API Key — Venta externa de Tokens», donde genera una clave secreta.
  Con esa clave, su tienda (WooCommerce, Shopify, Zapier, Make…) puede pedir a
  AdventuriQ que entregue un código automáticamente cada vez que se confirma una
  compra. La clave se puede copiar, regenerar o revocar en cualquier momento.

### Desde el punto de vista del Player (Webapp)

- **Recibe un correo con su código y un enlace directo.** El correo lleva la
  imagen de cabecera de la Aventura, su título y el código bien visible.
- **Entra con un solo clic.** Al pulsar el enlace del correo, la app abre la
  Aventura con el código ya escrito: solo tiene que confirmar.
- **Sabe a quién escribir si algo falla.** El correo va firmado por el creador de
  la Aventura y lleva su dirección; si responde al mensaje, le contesta quien
  organiza la experiencia, no la plataforma.

## 3. PREREQUISITOS DEL USUARIO

- Tener una Aventura con la opción **Tokens de acceso por player** activada.
- Tener **Tokens disponibles** en la cuenta: cada código entregado se cobra
  cuando el comprador lo canjea.
- Para la entrega automática desde una tienda: haber generado la **API Key**
  en el perfil y que quien mantenga la tienda la configure en ella.
- La persona que compra debe registrarse o iniciar sesión **con el mismo correo
  de la compra**, porque el código queda vinculado a esa dirección.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — enviar un código por correo (venta manual)

1. Entrar en la Aventura → pestaña de datos, sección **Tokens de acceso por player**.
2. Pulsar **Actualizar** para ver la tabla de códigos.
3. En la fila de un código libre, pulsar el botón del **sobre** (Enviar token por email).
4. Escribir el correo del comprador y confirmar con **Enviar**.
5. Resultado: aviso de «Token enviado a …», la columna e-mail se rellena con esa
   dirección y la columna Canal muestra `gamifier`. El comprador recibe el correo.

### Flujo Gamifier — exportar códigos libres a CSV

1. En la misma sección, pulsar **Exportar CSV (libres)**.
2. Se descarga un archivo con dos columnas: el código y su enlace de juego.
3. Ese archivo se sube a la plataforma de venta que entrega códigos automáticamente.
4. Nota: solo se exportan los códigos que siguen libres (sin usar y sin correo
   asignado) en ese momento.

### Flujo Gamifier — conectar la tienda online

1. Abrir el **perfil de usuario** (menú superior derecho → tu nombre).
2. Bajar hasta la sección **API Key — Venta externa de Tokens**.
3. Pulsar **Generar API key**. Aparece la clave y un ejemplo de configuración
   listo para copiar.
4. Entregar esa clave a quien mantiene la tienda para que la configure.
5. Si la clave se filtra o se quiere cambiar: **Regenerar** (crea una nueva e
   invalida la anterior) o **Revocar** (la desactiva).

### Flujo Webapp — el comprador entra a jugar

1. Recibe el correo con su código y pulsa **Empezar la Aventura**.
2. Si no tiene sesión, se registra o inicia sesión **con el correo de la compra**.
3. La app abre la Aventura y muestra la pantalla del código **ya relleno**.
4. Pulsa **Comprobar código** y entra a jugar. El código queda registrado a su
   nombre y no puede reutilizarse.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Tabla de Tokens de acceso con los botones nuevos (sobre) y la
  columna Canal → Nombre sugerido: `tokens-acceso-unico/tabla-tokens-envio-email.png`
- [GAMIFIER] Diálogo «Enviar token por email» con el campo de correo →
  Nombre: `tokens-acceso-unico/dialogo-enviar-token-email.png`
- [GAMIFIER] Botón «Exportar CSV (libres)» en la barra de acciones →
  Nombre: `tokens-acceso-unico/boton-exportar-csv-libres.png`
- [GAMIFIER] Sección «API Key — Venta externa de Tokens» del perfil, con la clave
  generada y el ejemplo de integración →
  Nombre: `tokens-acceso-unico/perfil-api-key-venta-externa.png`
- [CORREO] Correo que recibe el comprador (cabecera con imagen de la Aventura,
  código y botón) → Nombre: `tokens-acceso-unico/correo-entrega-token.png`
- [WEBAPP] Pantalla del código de acceso con el token ya pre-rellenado tras
  abrir el enlace del correo →
  Nombre: `tokens-acceso-unico/webapp-token-prerelleno.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/`
- **Nombre del archivo:** `tokens-acceso-unico.md`
- **sidebar_position sugerido:** 5 (el que ya tiene la página)
- **Tags sugeridos:** token, acceso-unico, monetizacion, venta, automatizacion,
  tienda-online, email
- **¿Es página nueva o actualización?** **Actualización** — se añade una sección
  nueva sobre entrega automática de códigos a la página existente de Token de
  acceso único, después de la parte de generación de códigos.

## 7. NOTAS TÉCNICAS (relevantes para el manual)

- **El código queda vinculado al correo del comprador.** Es una protección
  antifraude, pero tiene una consecuencia que conviene explicar: quien compra
  debe entrar con **ese mismo correo**. No sirve jugar como invitado ni con otra
  cuenta. Si el comprador quiere regalar el acceso, hay que enviárselo al correo
  de quien vaya a jugar.
- **Cuándo se cobra el Token.** El saldo se descuenta cuando el comprador canjea
  el código, no al generarlo ni al enviarlo. Los códigos generados y aún sin
  canjear cuentan como «reservados» y reducen los que se pueden generar.
- **Reenvíos y compras duplicadas.** Si la tienda avisa dos veces de la misma
  compra (algo habitual en las notificaciones automáticas), AdventuriQ devuelve
  el mismo código en lugar de gastar uno nuevo, siempre que la tienda envíe la
  referencia del pedido.
- **Correo editable.** El texto del correo se puede modificar en español e inglés
  desde las herramientas de Super Admin (Mails del Sistema, plantilla
  «Venta externa — entrega de tokens»).
- **Contacto del correo.** El correo muestra y responde a la dirección del
  creador de la Aventura; si no se puede determinar, usa la del propietario.
- **Integración de tienda (para quien la configure).** La tienda debe hacer una
  llamada `POST` a `https://api.adventuriq.com/v4/shop/token/dispense` con la
  cabecera `X-Api-Key` (la clave del perfil) y un cuerpo con el `gamepin` de la
  Aventura, el `email` del comprador y, opcionalmente, `cantidad`, `canal`,
  `locale` y `pedido_ref`. El propio Gamifier muestra el ejemplo listo para
  copiar. La llamada puede tardar unos segundos porque envía el correo.
- **Limitación conocida.** Si alguien que ya había desbloqueado esa Aventura
  anteriormente introduce un código a mano (sin usar el enlace del correo), la
  app le deja entrar sin canjearlo. Usando el enlace del correo —el flujo normal
  de compra— el código siempre se canjea y queda registrado.
