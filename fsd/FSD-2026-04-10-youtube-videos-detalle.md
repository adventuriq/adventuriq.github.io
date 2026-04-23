---
feature_name: Vídeos de YouTube en Misión, Reto e Información de Aventura
date: 2026-04-10
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/aventuras/videos-youtube-detalle.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Vídeos de YouTube en detalle de Misión, Reto e Información de Aventura
- **Descripción:** Las pantallas de detalle de Misión, Reto e Información de la Aventura pueden mostrar ahora un vídeo de YouTube incrustado. El vídeo se configura **por idioma**, igual que los textos: cada idioma puede tener su propio vídeo. Esta capacidad extiende la que ya existía en la vista principal de la Aventura a los demás niveles del recorrido del Player.
- **Componentes afectados:** API, Gamifier, Webapp
- **Fecha de despliegue:** 2026-04-10

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Añadir un **ID de vídeo de YouTube** a:
  - Cada Misión, por idioma.
  - Cada Reto, por idioma.
  - La sección Información de la Aventura, por idioma (ya existía, se corrige y unifica).
- Dejar el campo vacío cuando no se quiera mostrar vídeo. Si está vacío, en la Webapp simplemente no aparece el reproductor.
- Usar vídeos diferentes por idioma: el Player verá el vídeo correspondiente a su idioma, o ninguno si no se ha configurado para ese idioma.

### Desde el punto de vista del Player (Webapp)

- Ver un reproductor de YouTube integrado en la cabecera del detalle de la Misión, del Reto y de la Información de la Aventura cuando el Game Master haya asociado un vídeo a ese idioma.
- Reproducir el vídeo con los controles estándar de YouTube.
- Poner el vídeo a **pantalla completa** sin que se reinicie al maximizar.
- Al salir de la pantalla (atrás, ir al mapa, avanzar a la siguiente vista) el vídeo se detiene automáticamente y no sigue sonando en segundo plano.

## 3. PREREQUISITOS DEL USUARIO

- Una Aventura con al menos un idioma configurado.
- Tener el **ID de vídeo de YouTube** (la parte que aparece tras `v=` en la URL; p. ej., en `https://www.youtube.com/watch?v=dQw4w9WgXcQ` el ID es `dQw4w9WgXcQ`).
- Que el vídeo sea público o "no listado" con inserción permitida. Los vídeos privados no se reproducirán dentro de la Webapp.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Añadir un vídeo a una Misión

1. Ir a Aventuras y abrir la Aventura.
2. Entrar en la Misión.
3. Abrir la pestaña de idioma deseada (p. ej. Español).
4. Localizar el campo **"YouTube Video ID"** (aparece justo debajo del bloque de audio).
5. Pegar el ID del vídeo (solo el ID, no la URL completa).
6. Guardar la Misión.
7. Repetir en otros idiomas si quieres vídeos distintos por idioma.

### Flujo Gamifier — Añadir un vídeo a un Reto

1. Abrir el Reto dentro de la Misión.
2. En la pestaña del idioma, campo **"YouTube Video ID"**.
3. Pegar el ID, guardar.

### Flujo Gamifier — Añadir un vídeo a la Información de la Aventura

1. Abrir la Aventura.
2. En la sección Información, pestaña del idioma, pegar el ID en el campo correspondiente.
3. Guardar.

### Flujo Player — Ver un vídeo en la Misión

1. Abrir una Misión que tenga vídeo asociado en tu idioma.
2. El reproductor de YouTube aparece en la cabecera.
3. Pulsar Play para reproducir; usar el botón de pantalla completa si se desea.
4. Al pulsar atrás o avanzar a un Reto, el vídeo se detiene.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Campo "YouTube Video ID" en pestaña de idioma de Misión → Nombre: `videos/gamifier-mision-youtube.png`
- [GAMIFIER] Campo "YouTube Video ID" en pestaña de idioma de Reto → Nombre: `videos/gamifier-reto-youtube.png`
- [GAMIFIER] Campo "YouTube Video ID" en Información de la Aventura por idioma → Nombre: `videos/gamifier-info-aventura-youtube.png`
- [WEBAPP] Vista de Misión con reproductor de YouTube en la cabecera → Nombre: `videos/webapp-mision-video.png`
- [WEBAPP] Vista de Reto con reproductor de YouTube → Nombre: `videos/webapp-reto-video.png`
- [WEBAPP] Información de Aventura con reproductor de YouTube → Nombre: `videos/webapp-info-aventura-video.png`
- [WEBAPP] Vídeo a pantalla completa desde la Webapp → Nombre: `videos/webapp-fullscreen.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/` (página principal de la feature, por ser transversal).
- **Nombre del archivo:** `videos-youtube-detalle.md`
- **sidebar_position sugerido:** cerca de la página existente sobre vídeo en la Aventura.
- **Tags sugeridos:** `video`, `youtube`, `multi-idioma`, `mision`, `reto`, `aventura`
- **¿Es página nueva o actualización?** Nueva página transversal + nota breve en las páginas existentes de "Editar Misión", "Editar Reto" e "Información de la Aventura" indicando que ahora también admiten vídeo de YouTube por idioma.

## 7. NOTAS TÉCNICAS

- **Solo ID, no URL**: el campo espera el ID limpio del vídeo (11 caracteres típicamente). Si se pega la URL completa, el vídeo no cargará.
- **Vídeos privados**: no funcionarán dentro de la Webapp. Usar "no listados" o públicos.
- **Restricciones de inserción**: algunos vídeos bloquean la inserción externa por configuración del propietario. En ese caso, el Player verá un mensaje de YouTube indicando que el vídeo no se puede reproducir aquí.
- **Vídeo por idioma independiente**: no hay fallback automático al idioma por defecto en los detalles (a diferencia de los audios). Si un idioma no tiene vídeo configurado, el reproductor simplemente no aparece para los Players en ese idioma.
