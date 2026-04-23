---
feature_name: Audio y Vídeo en la Finalización de una Aventura
date: 2026-04-14
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/aventuras/audio-video-finalizacion.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Audio y Vídeo en la pantalla de Finalización de Aventura
- **Descripción:** La pantalla que ve el Player al terminar una Aventura ahora puede incluir un audio y un vídeo de despedida, configurables por idioma. Son el cierre emocional perfecto: una felicitación grabada por el Game Master, un vídeo de resumen, un agradecimiento patrocinado, etc.
- **Componentes afectados:** API (v4.20.0), Gamifier (v4.32.0), Webapp (v2.24.0)
- **Fecha de despliegue:** 2026-04-14

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Subir un archivo de **audio** (MP3) y/o un archivo de **vídeo** (MP4, MPEG, AVI, MOV, WebM, MKV, M4V) por cada idioma de la Aventura, que se reproducirán automáticamente cuando el Player complete la Aventura.
- Los archivos se configuran desde la pantalla de edición de la Aventura, en el bloque de textos multi-idioma, justo debajo del "Mensaje de finalización".
- Previsualizar el audio y el vídeo desde el propio editor antes de guardar.
- Eliminar audio o vídeo de un idioma en cualquier momento sin afectar a los demás idiomas.
- Las Aventuras que no configuren audio ni vídeo se comportan igual que antes (solo se muestra el mensaje de texto de finalización).

### Desde el punto de vista del Player (Webapp)

- Al completar una Aventura, además del mensaje de felicitación de siempre, ver y/o escuchar los contenidos multimedia configurados por el Game Master.
- Si hay **audio**, se muestra un mini reproductor con botón circular animado, un ecualizador visual de 14 barras y una barra de progreso. Se reproduce automáticamente.
- Si hay **vídeo**, se muestra un mini reproductor 16:9 con controles. Se reproduce automáticamente.
- Si hay **audio y vídeo al mismo tiempo**, el vídeo se silencia automáticamente para que solo suene el audio.
- Al pulsar "Continuar", ambos reproductores se detienen y el Player vuelve al listado de Aventuras.

## 3. PREREQUISITOS DEL USUARIO

- Aventura ya creada y publicable.
- Archivos de audio en formato MP3 o de vídeo en los formatos soportados, uno por idioma si se quieren versiones traducidas.
- No requiere tokens adicionales; el almacenamiento usa los recursos habituales de la organización.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Añadir audio y vídeo de finalización

1. Ir a Aventuras → abrir la Aventura.
2. Bajar al bloque de textos por idioma (donde se edita el título, descripción y "Mensaje de finalización").
3. Justo debajo del "Mensaje de finalización" encontrarás dos zonas nuevas: **Audio de finalización** y **Vídeo de finalización**.
4. Pulsar **"Subir audio"** y seleccionar un MP3 desde el ordenador. Esperar a que termine la subida; aparece un reproductor de vista previa.
5. Opcional: pulsar **"Subir vídeo"** y seleccionar un vídeo (MP4 recomendado). Esperar a que termine la subida; aparece un reproductor de vista previa.
6. Repetir para cada idioma en la pestaña correspondiente.
7. Guardar la Aventura.

### Flujo Webapp — Ver la pantalla de finalización con multimedia

1. El Player completa la Aventura (cumple las condiciones de finalización).
2. Aparece automáticamente la pantalla de **Finalización de la Aventura** con la animación épica del trofeo.
3. Se muestra el título de finalización.
4. Si hay audio configurado, aparece el mini reproductor con el botón animado y el ecualizador, y empieza a reproducirse automáticamente.
5. Si hay vídeo configurado, aparece el mini reproductor 16:9 y empieza a reproducirse automáticamente (silenciado si ya hay audio sonando).
6. Se muestra el mensaje HTML de finalización.
7. El Player pulsa **"Continuar"** y ambos reproductores se detienen; el Player vuelve al listado de Aventuras.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Edición de Aventura con los bloques de audio y vídeo de finalización visibles por idioma → Nombre: `aventuras/audio-video-finalizacion-edicion.png`
- [GAMIFIER] Reproductor de vista previa del audio con el audio cargado → Nombre: `aventuras/audio-finalizacion-preview.png`
- [GAMIFIER] Reproductor de vista previa del vídeo con el vídeo cargado → Nombre: `aventuras/video-finalizacion-preview.png`
- [WEBAPP] Pantalla de finalización con mini reproductor de audio (botón circular + ecualizador) → Nombre: `webapp/finalizacion-audio.png`
- [WEBAPP] Pantalla de finalización con mini reproductor de vídeo 16:9 → Nombre: `webapp/finalizacion-video.png`
- [WEBAPP] Pantalla de finalización con audio y vídeo simultáneos → Nombre: `webapp/finalizacion-audio-video.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `audio-video-finalizacion.md`
- **sidebar_position sugerido:** junto a la página existente de "Mensaje de finalización" o "Configuración de Aventura"; actualizar también esa página para incluir los nuevos campos.
- **Tags sugeridos:** `aventura`, `finalizacion`, `audio`, `video`, `multimedia`
- **¿Es página nueva o actualización?** Actualización de la página existente de finalización de Aventura + referencia a los nuevos campos.

## 7. NOTAS TÉCNICAS

- Los campos son **independientes** del audio/vídeo de descripción de la Aventura (los que se muestran al presentarla). Son archivos distintos con propósitos distintos.
- Es perfectamente válido configurar solo audio, solo vídeo, ambos o ninguno, por cada idioma.
- Formatos soportados: audio solo MP3; vídeo MP4, MPEG, AVI, MOV, WebM, MKV, M4V. Recomendado MP4 para vídeo por compatibilidad.
- El comportamiento silencia-el-vídeo-si-hay-audio es automático y no configurable.
