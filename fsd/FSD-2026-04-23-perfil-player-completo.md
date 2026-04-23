---
feature_name: Perfil del Player rediseñado + Mis Aventuras + QR
date: 2026-04-23
components: [API] [WEBAPP]
docusaurus_path: docs/webapp/perfil.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Perfil del Player completo: edición de datos, historial de aventuras y código QR personal
- **Descripción:** La vista de Perfil del Player en la Webapp se ha rediseñado por completo. Ahora el Player puede editar sus datos personales (nombre, nickname, email y contraseña), ver el listado de todas las Aventuras en las que participa con su estado, entrar en cada una para ver un resumen con estadísticas (misiones, retos, puntos, posición) y sus objetos conseguidos, y mostrar un **código QR único** para futuras mecánicas entre Players (duelos, intercambio de objetos). Todo el texto del perfil está disponible en los 4 idiomas soportados (Inglés, Español, Català y Francés).
- **Componentes afectados:** API (v4.25.0 → v4.26.0 → v4.27.0), Webapp (v2.29.0 → v2.30.0 → v2.31.0)
- **Fecha de despliegue:** 2026-04-23

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Player (Webapp)

**Pestaña Cuenta**
- Editar su **nombre**, su **nickname** (permite espacios) y su **email** mediante un diálogo modal por campo. Si introduce un email o nickname ya ocupado por otro usuario, el servidor responde con un mensaje claro y el cambio no se guarda.
- **Cambiar su contraseña** introduciendo la actual + la nueva dos veces, con validación de coincidencia y longitud mínima.
- **Cambiar su avatar** haciendo tap en el badge de cámara naranja sobre la foto; la imagen se sustituye al instante en el hero banner.

**Pestaña Mis Aventuras**
- Ver **todas las Aventuras en las que está apuntado**, en un grid responsive con la imagen de la Aventura como fondo y un badge de estado en cada tarjeta:
  - **Finalizada** (dorado, icono de trofeo)
  - **En curso** (naranja, icono de play)
  - **No jugada** (blanco, icono "nuevo")
- Entrar en cualquier Aventura para ver una **pantalla de resumen** con:
  - Hero banner con la imagen de cabecera de la Aventura y el badge de estado.
  - Cuatro tarjetas grandes de estadísticas: **Misiones finalizadas / Retos completados / Puntos obtenidos / Posición en ranking** (cada una con su total entre paréntesis).
  - Un **botón grande "Objetos conseguidos"** que abre el baúl de esa Aventura concreta con todos los objetos digitales obtenidos. Desde ahí se puede abrir el detalle individual de cada objeto.
- El botón **atrás corporativo** (flecha en círculo naranja) del hero banner devuelve al Player al sitio exacto desde donde entró al perfil (listado de aventuras, una Aventura concreta, etc.).

**Pestaña QR**
- Ver su propio **código QR único** (32 caracteres hexadecimales opacos), representado como un QR grande y legible con alto contraste. El QR se escala al ancho del dispositivo (entre 220 y 340 px).
- El código NO es una credencial, es un identificador aleatorio sin información sensible, preparado para futuras mecánicas entre Players donde dos jugadores interactúen escaneándose.

**Pestaña Preferencias**
- Elegir el **idioma de las Aventuras** entre los soportados. La elección se guarda **en el servidor** (no solo en el navegador), así el idioma persiste aunque el Player cambie de dispositivo.

**Pestaña Acerca de**
- Consultar la **versión y número de build** de la Webapp.
- Leer la nota explicativa sobre en qué idiomas está traducida la interfaz (**ahora incluye francés**; antes solo mencionaba inglés, español y català aunque el francés ya estaba disponible).

**Navegación coherente**
- El botón atrás del hero banner del perfil lleva siempre al sitio donde el Player estaba antes de entrar (sidebar, listado de aventuras, pantalla de juego, etc.), no al listado genérico.

## 3. PREREQUISITOS DEL USUARIO

- Ser Player con una cuenta AdventuriQ activa (estar logueado en la Webapp).
- Para ver algo en "Mis Aventuras" hay que estar apuntado al menos a una Aventura (vía PIN de acceso, QR, token, etc.).

## 4. FLUJOS PASO A PASO

### Flujo Webapp — Editar nombre/nickname/email

1. En la Webapp, abrir el perfil desde el avatar arriba a la derecha o desde el menú lateral.
2. La pestaña **Cuenta** está activa por defecto. Pulsar el icono del lápiz naranja a la derecha del campo a editar.
3. En el diálogo que aparece, escribir el nuevo valor y pulsar **Guardar**.
4. Si el email o el nickname ya están en uso por otro usuario, el diálogo mantiene el campo editable y muestra un mensaje de error específico ("Ese email ya está registrado..." / "Ese nickname ya está cogido...").
5. Tras guardar con éxito, aparece un **snackbar verde "Actualizado correctamente"** y el valor en la ficha se actualiza al instante.

### Flujo Webapp — Cambiar contraseña

1. Pestaña **Cuenta** → pulsar el lápiz naranja de la fila **Contraseña**.
2. Rellenar los 3 campos: contraseña actual, nueva contraseña, repetir nueva contraseña.
3. Cada campo tiene su icono de "ojo" para mostrar/ocultar el texto.
4. Pulsar **Guardar**.
5. Si la contraseña actual es incorrecta, aparece un error bajo el campo. Si las dos nuevas no coinciden o son menores de 6 caracteres, también.
6. Al tener éxito: snackbar **"Contraseña actualizada"** y se cierra el diálogo.

### Flujo Webapp — Cambiar el avatar

1. En cualquier pestaña del perfil, tocar el **badge naranja de la cámara** sobre la foto del avatar (esquina inferior derecha de la foto circular).
2. Se abre el selector de archivos del dispositivo. Elegir una imagen.
3. Mientras sube, aparece un diálogo "Subiendo archivo...".
4. Al terminar, snackbar **"Avatar actualizado"** y la nueva imagen aparece inmediatamente en el hero banner.

### Flujo Webapp — Ver estadísticas y objetos de una Aventura

1. Pestaña **Mis Aventuras**.
2. Tap en la tarjeta de cualquier Aventura del listado.
3. Se abre la **pantalla de resumen** con el hero banner de la Aventura + las 4 tarjetas de stats + botón "Objetos conseguidos".
4. Pulsar **Objetos conseguidos** → se abre el baúl filtrado a esa Aventura con los objetos digitales obtenidos.
5. Tap en cualquier objeto → se abre el detalle individual (texto, imagen, audio o vídeo según el tipo).
6. El botón atrás de cada nivel (flecha en círculo naranja) vuelve al nivel anterior.

### Flujo Webapp — Ver el código QR personal

1. En el perfil, pestaña **QR**.
2. El QR aparece grande y centrado, con la explicación debajo.
3. Otra persona puede escanearlo con la cámara del dispositivo; lo que devuelve es un hash opaco (ej: `c0a78ac9954799b0d488ceb5946e4947`), no datos sensibles.

### Flujo Webapp — Cambiar el idioma de las Aventuras

1. Pestaña **Preferencias** → desplegable **Idioma de las Aventuras**.
2. Seleccionar un idioma de la lista.
3. Snackbar **"Idioma actualizado"**. El cambio se persiste en la cuenta del Player en el servidor (se conserva al cambiar de dispositivo).

## 5. PANTALLAS PARA CAPTURAR

- [WEBAPP] Perfil — pestaña Cuenta con los 4 campos editables → Nombre: `perfil/cuenta-vista-general.png`
- [WEBAPP] Perfil — diálogo "Editar nickname" → Nombre: `perfil/editar-nickname-dialog.png`
- [WEBAPP] Perfil — diálogo "Cambiar contraseña" con los 3 campos → Nombre: `perfil/cambiar-contrasena-dialog.png`
- [WEBAPP] Perfil — pestaña Mis Aventuras (grid) → Nombre: `perfil/mis-aventuras-grid.png`
- [WEBAPP] Perfil — resumen de una Aventura concreta (hero + 4 stats + CTA objetos) → Nombre: `perfil/resumen-aventura.png`
- [WEBAPP] Perfil — pestaña QR con el código → Nombre: `perfil/qr-tab.png`
- [WEBAPP] Perfil — pestaña Preferencias con el selector de idioma → Nombre: `perfil/preferencias.png`
- [WEBAPP] Perfil — hero banner con el badge de la cámara sobre el avatar → Nombre: `perfil/avatar-badge-camara.png`
- [WEBAPP] Perfil — vista en móvil portrait (una columna) → Nombre: `perfil/responsive-mobile.png`
- [WEBAPP] Perfil — vista en desktop ancho (dos columnas en la tab Cuenta, si aplica) → Nombre: `perfil/responsive-desktop.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/webapp/`
- **Nombre del archivo:** `perfil.md`
- **sidebar_position sugerido:** 1 (o el que corresponda en el orden de la sección Webapp)
- **Tags sugeridos:** `webapp`, `player`, `perfil`, `cuenta`, `qr`, `mis-aventuras`
- **¿Es página nueva o actualización?** Nueva (o actualización profunda si ya existía una página mínima del perfil en el manual actual)

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

- **Seguridad del código QR:** el QR contiene un identificador aleatorio (no el authtoken). No es una credencial; no permite suplantar al Player. Es seguro enseñarlo en pantalla o escanearlo.
- **Edición de nickname con espacios:** a diferencia de antes, el nickname puede contener espacios (ej. "Mike AdventuriQ"). El resto de validaciones se mantienen (no vacío, mínimo 3 caracteres, único en el sistema).
- **Idioma de interfaz de la App:** la interfaz de la Webapp está traducida a Inglés, Español, Català y Francés. Si el idioma del dispositivo del Player no está entre estos, se usa Inglés por defecto.
- **Avatar tras subir imagen:** en algunos navegadores con caché agresiva, la imagen puede tardar unos segundos en actualizarse del todo. En cualquier caso, cerrando y reabriendo la Webapp siempre se muestra la última foto.
- **Navegación atrás desde el perfil:** el botón naranja de atrás del hero banner vuelve a la ruta exacta desde la que el Player entró al perfil. Desde un enlace directo o tras recargar, por defecto lleva al listado de Aventuras.
- **El campo `player_qr_code` se rellena automáticamente** al crear una cuenta nueva. Cuentas antiguas lo reciben la primera vez que entran en su perfil (se genera on-the-fly y se persiste en ese momento).
