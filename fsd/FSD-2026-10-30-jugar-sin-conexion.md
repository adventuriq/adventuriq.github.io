---
feature_name: Jugar sin conexión
date: 2026-10-30
components: [API] [WEBAPP]
docusaurus_path: docs/webapp/jugar-sin-conexion.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Jugar sin conexión (Aventura descargada)
- **Descripción:** El Player descarga la Aventura entera en su dispositivo y
  puede jugarla sin cobertura; su progreso se guarda en el dispositivo y se
  envía solo cuando vuelve Internet, sin perder ninguna jugada.
- **Componentes afectados:** API (v4.64.0 y v4.65.0), Webapp (v3.0.0)
- **Fecha de despliegue:** 2026-10-30

:::warning Aviso importante para Cowork
Hay dos páginas del manual que hoy dicen lo contrario y deben corregirse:

- `docs/instalar-la-app.md`, línea *"Funcionalidad offline parcial — ... pero
  necesitas internet para jugar Retos y sincronizar puntos"* y la lista de
  ventajas (*"uso parcial offline"*). Ahora una Aventura descargada se juega
  entera sin conexión; Internet solo hace falta para descargarla la primera vez
  y para sincronizar después.
- `docs/warnings.md`, aviso *"La Webapp necesita una conexión a Internet con
  suficiente calidad para funcionar correctamente"*. Sigue siendo cierto para
  entrar en una Aventura por primera vez y para lo que es en directo (Modo
  Arena, votaciones, Galería), pero ya no para jugar una Aventura descargada.
  Enlazar a la página nueva.

Además, `docs/aventuras/llaves-digitales.md` puede añadir una nota: las Llaves
también se consiguen y se usan sin conexión (ver sección 7).
:::

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)
- No hay nada que configurar: todas las Aventuras se pueden jugar sin conexión.
- Conviene saberlo al diseñar: lo que el Player juega sin conexión se envía al
  servidor más tarde, con la fecha y hora en que lo jugó: el orden de la
  Clasificación general no cambia por sincronizar tarde, pero una jugada que se
  sincroniza otro día puede no contar en la clasificación diaria.

### Desde el punto de vista del Player (Webapp)
- **Descargar la Aventura** al entrar por primera vez: textos, imágenes, audios,
  vídeos propios, modelos de Realidad Aumentada, Objetos Digitales y Llaves.
- **Jugar sin cobertura** todos los tipos de Reto, incluidos la Ruleta de la
  Fortuna, la Realidad Aumentada y Subir Foto (la foto se envía al volver la
  conexión).
- **Ver su progreso** al momento: Retos jugados, puntos de la Bitácora, barra de
  progreso de la Misión.
- **Conseguir Objetos Digitales y Llaves sin conexión.** Aparecen ya en el Baúl
  y el Llavero como provisionales hasta sincronizar. Con una Llave conseguida
  así se ven y se abren las Misiones y los Retos que tenía ocultos.
- **Sincronizar automáticamente** al volver Internet, y ver en la ventana
  **«Novedades al sincronizar»** los Objetos Digitales recibidos y las Misiones
  finalizadas, con acceso directo al Baúl.
- **Gestionar las descargas** desde el menú lateral, sección **«Descargas»**:
  espacio ocupado, jugadas pendientes de enviar, borrar una descarga y la
  opción **«Jugar sin conexión»** para usar siempre lo descargado aunque haya
  algo de cobertura (útil con cobertura mala).
- **Arrancar la app sin conexión** con la sesión iniciada.

## 3. PREREQUISITOS DEL USUARIO
- Tener conexión la primera vez que entra en la Aventura (para descargarla) y
  haber aceptado antes, con conexión, los Términos y Condiciones si la Aventura
  los tiene, el código de acceso o el Token, y el Clan si la Aventura es por
  equipos.
- Espacio libre en el dispositivo: la pantalla de descarga muestra el progreso;
  una Aventura típica ocupa entre 5 y 60 MB.
- Recomendado: **instalar la app en la pantalla de inicio** (ver
  `docs/instalar-la-app.md`). En iPhone, si no se instala, Safari puede borrar
  los datos de una web que no se abre en varios días.

## 4. FLUJOS PASO A PASO

### Flujo Webapp — descargar
1. Abrir la ficha de la Aventura y pulsar **«Adelante»**.
2. Si la Aventura lo pide: introducir el código de acceso o el Token.
3. Se abre la **pantalla de descarga** con una barra de progreso. Se puede
   **«Cancelar»** (botón naranja); si falla, **«Reintentar»** o seguir sin
   descargar.
4. Al terminar, la app entra en la lista de Misiones.
5. Las siguientes veces, **«Adelante»** lleva directamente a las Misiones.

### Flujo Webapp — jugar sin conexión
1. Sin cobertura (o en modo avión), abrir la app: arranca con la sesión
   iniciada y muestra la franja **«Sin conexión»** bajo la barra superior.
2. Entrar en la Aventura descargada y jugar los Retos como siempre.
3. La primera vez que se pulsa **«Continuar»** tras un Reto, aparece la
   pantalla **«Jugar sin conexión»**, que explica qué se guarda y qué se
   confirmará al sincronizar. Se puede marcar **«No volver a mostrar este
   aviso»** y pulsar **«Entendido»**. Para volver a leerla: icono ⓘ de la
   franja «Sin conexión».
4. El icono de la nube con un número (arriba a la derecha) indica cuántas
   jugadas faltan por enviar.

### Flujo Webapp — Llaves sin conexión
1. Al terminar el Reto o la Misión que da una Llave, la Llave aparece en el
   Llavero (provisional) y la Misión o Reto oculto aparece en la lista.
2. Al tocarlo se abre la pantalla de la Llave: **«¡Tienes la llave! Ábrela para
   entrar»** → **«Abrir»**.
3. Se juega con normalidad; la apertura se envía al sincronizar, antes que las
   jugadas de ese contenido.

### Flujo Webapp — sincronizar
1. Al volver la conexión, la app envía sola las jugadas, en el orden en que se
   hicieron. También al abrir la Clasificación, el Baúl o el Llavero.
2. Si se han conseguido Objetos Digitales o se ha finalizado alguna Misión,
   aparece la ventana **«Novedades al sincronizar»** con el botón **«Ver en el
   Baúl»**. Pulsando el icono de la nube también se abre el panel de
   sincronización.

### Flujo Webapp — gestionar descargas
1. Menú lateral → **«Descargas»**.
2. Ver el espacio usado y las jugadas pendientes; activar **«Jugar sin
   conexión»**; **«Borrar descarga»** (no se permite mientras haya jugadas sin
   enviar).

## 5. PANTALLAS PARA CAPTURAR
Todas en formato móvil (~400 px). Aventura de ejemplo con al menos una Misión
oculta por Llave.
- [WEBAPP] Pantalla de descarga con la barra de progreso → `webapp/sin-conexion-descargando.png`
- [WEBAPP] Lista de Misiones con la franja «Sin conexión» y la nube con pendientes → `webapp/sin-conexion-misiones.png`
- [WEBAPP] Pantalla «Jugar sin conexión» (aviso con la casilla «No volver a mostrar») → `webapp/sin-conexion-aviso.png`
- [WEBAPP] Llavero con una Llave conseguida sin conexión → `webapp/sin-conexion-llavero.png`
- [WEBAPP] Pantalla de la Llave en modo «Abrir» sin conexión → `webapp/sin-conexion-abrir-llave.png`
- [WEBAPP] Ventana «Novedades al sincronizar» → `webapp/sin-conexion-novedades.png`
- [WEBAPP] Menú lateral → Descargas → `webapp/sin-conexion-descargas.png`

## 6. UBICACIÓN EN DOCUSAURUS
- **Carpeta destino:** `docs/webapp/`
- **Nombre del archivo:** `jugar-sin-conexion.md`
- **sidebar_position sugerido:** 2 (tras Perfil)
- **Tags sugeridos:** sin-conexion, offline, descargas, sincronizar, webapp, player, llaves
- **¿Es página nueva o actualización?** Nueva (más las correcciones de
  `instalar-la-app.md` y `warnings.md` indicadas arriba)

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)
- **Las jugadas no se pierden** aunque se cierre el navegador o se apague el
  móvil sin batería: siguen en el dispositivo hasta que se envían. Solo se
  pierden si el Player borra los datos del navegador, usa una ventana de
  incógnito o desinstala la app.
- **Jugar sin registro:** un Player invitado con jugadas pendientes no puede
  cerrar sesión hasta sincronizarlas (si lo hiciera, solo podría recuperarlas
  entrando con el mismo apodo en el mismo dispositivo).
- **Qué se confirma al sincronizar** (sin conexión no se puede saber): la
  posición en la Clasificación, los Objetos Digitales que dependen de los
  puntos del Clan, de un límite de tiempo de la Misión o de un número máximo de
  entregas, y el fin de Misión por puntos del Clan o por tiempo. Lo demás
  (Objetos por acertar, por puntos, Llaves, fin de Misión por Retos o por
  puntos del Player) se ve ya sin conexión, como provisional.
- **Qué necesita conexión siempre:** Modo Arena (en directo), votaciones,
  Galería y Muro, unirse a un Clan, canjear un Token, aceptar los Términos y
  Condiciones, los mapas de Google y los vídeos de YouTube o contenidos
  incrustados de otras webs (Genially, Wordwall…).
- **Si el Game Master cambia la Aventura** mientras un Player la tiene
  descargada, el Player juega con lo descargado; las jugadas se evalúan en el
  servidor al sincronizar con las condiciones vigentes en ese momento (igual
  que si el cambio se hiciera a mitad de partida con conexión).
- **Un Player que ya tenía la Aventura descargada antes del 2026-10-30** debe
  borrarla en «Descargas» y volver a entrar para poder conseguir Llaves sin
  conexión.
- **Con varios dispositivos**, si se juega el mismo Reto en dos, vale la última
  jugada que se sincroniza.
