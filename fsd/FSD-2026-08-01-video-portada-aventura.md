---
feature_name: Vídeo de portada de la Aventura
date: 2026-08-01
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/aventuras/video-portada.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Vídeo de portada de la Aventura
- **Descripción:** Ahora puedes subir tu propio vídeo para la portada de una Aventura, en lugar de enlazar un vídeo de YouTube, y decidir si ocupa toda la pantalla del jugador.
- **Componentes afectados:** API, Gamifier, Web App
- **Fecha de despliegue:** 2026-08-01

Hasta ahora la portada de una Aventura solo podía mostrar un vídeo alojado en YouTube, indicando su ID. Eso obligaba a publicar el vídeo fuera de AdventuriQ y mostraba la interfaz y el branding de YouTube al jugador. Con esta mejora el vídeo se sube igual que el vídeo de finalización: uno por idioma, o el mismo para todos reutilizándolo desde la Media Library.

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Subir un vídeo propio de portada para cada idioma de la Aventura.
- Reutilizar un vídeo ya subido eligiéndolo desde la **Media Library**, que ahora también permite seleccionar vídeos y no solo imágenes.
- Aplicar de una vez el mismo vídeo a **todos los idiomas** de la Aventura.
- Previsualizar el vídeo dentro del propio editor antes de publicar.
- Activar **"Portada a pantalla completa"**: la portada pasa a ser únicamente el vídeo, sin título, fechas ni descripción.
- Seguir usando el ID de YouTube como antes: si en un idioma hay vídeo subido, ese tiene prioridad; si no lo hay, se sigue mostrando el de YouTube.

### Desde el punto de vista del Player (Web App)

- Ver el vídeo de portada de la Aventura en su idioma, sin interfaz de YouTube.
- Con la portada a pantalla completa: ver el vídeo ocupando toda la pantalla, tanto si es vertical como horizontal, con el botón **Adelante** encima para entrar en la Aventura y la flecha de volver siempre accesible.
- El vídeo **intenta arrancar con sonido**; si el navegador lo bloquea arranca en silencio y se activa con el botón del altavoz.
- Manejar el vídeo con los **controles** de la portada a pantalla completa: repetir, reproducir/pausar, detener e ir al final.
- Ver el botón **Adelante iluminarse** cuando el vídeo termina, como indicación de que ya puede continuar.

## 3. PREREQUISITOS DEL USUARIO

- Tener una Aventura ya creada y guardada (el bloque de vídeo no aparece mientras la Aventura es nueva y no se ha guardado).
- Tener al menos un idioma configurado en la Aventura.
- Disponer de espacio libre en la cuota de tu licencia o contrato: el vídeo ocupa espacio como cualquier otro archivo. Si no queda espacio, la subida se rechaza avisando del límite.
- Tener el vídeo en formato **MP4, WEBM, MOV u OGG**.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — subir un vídeo de portada

1. Entrar en **Aventuras** y abrir la Aventura que quieras editar.
2. Bajar hasta el bloque **Traducciones** y seleccionar la pestaña del idioma.
3. Localizar el campo **Vídeo de portada**, justo encima del campo de YouTube.
4. Pulsar **Nuevo vídeo** y seleccionar el archivo, o pulsar **Media Library** para elegir un vídeo ya subido a esta Aventura.
5. Al terminar la subida aparece un aviso de confirmación y, debajo, un reproductor para revisar el vídeo.
6. Repetir en cada idioma, o usar el botón **Usar el mismo vídeo en todos los idiomas** (está en el bloque de opciones de la portada, fuera de las pestañas de idioma) para aplicar el mismo vídeo a todos de una vez.

### Flujo Gamifier — activar la portada a pantalla completa

1. En la misma Aventura, localizar el bloque **Vídeo de portada** que hay junto a las imágenes.
2. Activar el interruptor **Portada a pantalla completa**.
   - Se puede activar aunque todavía no haya ningún vídeo subido: en ese caso aparece un aviso
     explicando que la opción se guarda pero **no tendrá efecto** hasta subir un vídeo, y queda una
     advertencia visible bajo el interruptor.
3. Guardar la Aventura.

### Flujo Gamifier — quitar el vídeo

1. En la pestaña del idioma, pulsar **Eliminar vídeo** en el campo Vídeo de portada.
2. La Aventura vuelve a mostrar el vídeo de YouTube si lo tenía configurado, o la imagen de cabecera.

### Flujo Web App (Player)

1. Abrir la Aventura desde el listado o desde el enlace directo.
2. Si la portada es a pantalla completa, el vídeo ocupa toda la pantalla y arranca solo. **Se reproduce una vez, sin repetirse.**
3. Si ha arrancado en silencio, pulsar el icono del **altavoz** (arriba a la derecha) para activar el sonido.
4. Con los controles de abajo a la izquierda se puede pausar, volver a verlo, detenerlo o saltar al final.
5. Al terminar el vídeo, el botón **Adelante** se ilumina. Pulsarlo para entrar en la Aventura, o usar la flecha de arriba a la izquierda para volver al listado.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Editor de Aventura, bloque **Vídeo de portada** dentro de una pestaña de idioma, con vídeo ya subido y su reproductor visible → Nombre sugerido: `aventuras/video-portada-editor.png`
- [GAMIFIER] Ventana de la **Media Library** abierta desde el botón del vídeo, mostrando los vídeos disponibles → Nombre: `aventuras/video-portada-media-library.png`
- [GAMIFIER] Bloque de opciones con el interruptor **Portada a pantalla completa** activado y el botón "Usar el mismo vídeo en todos los idiomas" → Nombre: `aventuras/video-portada-opciones.png`
- [GAMIFIER] Aviso bajo el campo de YouTube indicando que el vídeo subido tiene prioridad → Nombre: `aventuras/video-portada-aviso-youtube.png`
- [WEBAPP] Portada de la Aventura en móvil con el vídeo a pantalla completa, el botón Adelante y el botón de sonido → Nombre: `aventuras/webapp-video-portada-fullscreen.png`
- [WEBAPP] Portada de la Aventura con el vídeo en modo normal (con título, fechas y descripción) → Nombre: `aventuras/webapp-video-portada-normal.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `video-portada.md`
- **sidebar_position sugerido:** 6 (justo después de `imagenes.md`, que ocupa la 5)
- **Tags sugeridos:** aventuras, vídeo, portada, multimedia, idiomas, media library
- **¿Es página nueva o actualización?** **Nueva.** Conviene además añadir un enlace desde `docs/aventuras/imagenes.md` (la portada puede ser imagen o vídeo) y desde `docs/aventuras/contenido-descripcion.md`, donde hoy se explica el vídeo de YouTube.

## 7. NOTAS TÉCNICAS (relevantes para el manual)

- **Sonido al arrancar: depende del navegador.** El vídeo intenta reproducirse con sonido, pero los navegadores solo lo permiten si el jugador ya ha interactuado con la página:
  - Llegando desde el listado de Aventuras: **normalmente suena**.
  - Entrando **por primera vez desde un enlace directo (Game PIN)**: arranca **en silencio**, porque el navegador todavía no ha dado permiso a la web. A partir de la segunda visita ya suele sonar.
  - En cualquier caso el jugador puede activarlo con el botón del altavoz. Aun así, conviene diseñar el vídeo de forma que se entienda también sin audio (por ejemplo, con texto o subtítulos incrustados).
- **El vídeo no se repite en bucle.** Se reproduce una vez y se queda en el último fotograma; al terminar, el botón Adelante se ilumina. El jugador puede volver a verlo con el botón de repetir.
- **En iPhone con el modo de bajo consumo activado** el navegador puede bloquear también la reproducción automática silenciada. En ese caso aparece un botón de play en el centro para que el jugador arranque el vídeo.
- **Formatos.** Se aceptan MP4, WEBM, MOV y OGG. Se recomienda **MP4 (H.264 + AAC)**: es el que reproducen todos los dispositivos.
- **Peso del vídeo.** El vídeo se descarga cada vez que un jugador abre la portada. Recomendación: menos de 15 segundos y menos de 10 MB. Un vídeo pesado hace que la portada tarde en cargar con datos móviles y consume cuota de disco de la licencia.
- **Prioridad entre vídeos.** Se usa, por este orden: el vídeo subido en el idioma del jugador; si no hay, el vídeo subido en el idioma por defecto de la Aventura; si no hay, el vídeo de YouTube de su idioma; y si tampoco, la imagen de cabecera.
- **La pantalla completa oculta el resto de la portada.** Con esa opción activada el jugador no ve el título, las fechas ni la descripción de la Aventura antes de entrar. Si esa información es importante para tu Aventura, deja la opción desactivada.
- **Si activas la pantalla completa pero no hay vídeo** para ningún idioma, la portada se muestra como siempre (imagen o vídeo de YouTube): nunca queda en negro.
- **Eliminar el vídeo del campo no borra el archivo del servidor**, igual que ocurre con el vídeo de finalización. El archivo sigue ocupando cuota hasta que lo borres desde la Media Library.
- **Al duplicar una Aventura** se conserva el nombre del vídeo configurado, pero el archivo en sí no se copia a la Aventura nueva: hay que volver a subirlo. Es el mismo comportamiento que ya tenían las imágenes.

---

> **Actualizado el 2026-08-01 (misma fecha, tras las pruebas).** Este FSD se revisó al desplegar la
> Fase 2 (Misiones y Retos), porque varios ajustes del reproductor afectan **también** a la portada
> de la Aventura: autoplay con sonido y fallback, fin del bucle, controles del vídeo, botón Adelante
> iluminado al terminar, y el interruptor de pantalla completa que ya no se bloquea. Ver
> `FSD-2026-08-01-video-portada-mision-reto.md`.
