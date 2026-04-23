---
feature_name: Reto Pregunta / Respuesta con Vídeo
date: 2026-04-12
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/retos/pregunta-respuesta-video.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Pregunta / Respuesta con Vídeo
- **Descripción:** Nuevo tipo de Reto en el que el Player ve un vídeo antes de responder a una pregunta de opción múltiple. Funciona como la Pregunta / Respuesta clásica, pero sustituye la imagen de cabecera por un reproductor de vídeo.
- **Componentes afectados:** API (v4.16.0), Gamifier (v4.29.0), Webapp (v2.18.0)
- **Fecha de despliegue:** 2026-04-12

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Crear un nuevo Reto de tipo **Pregunta / Respuesta con Vídeo** desde la pantalla de selección de tipos de Reto, o desde el botón "Crear Reto Rápido" dentro de una Misión.
- Subir un vídeo distinto **por cada idioma** de la Misión (MP4, MPEG, AVI, MOV, WebM, MKV o M4V), con vista previa integrada en el propio editor.
- Escribir la pregunta y hasta varias opciones de respuesta marcando cuál es la correcta, igual que en el Reto de Pregunta / Respuesta clásico.
- Configurar tiempo límite (countdown) y ejecución única, como en los otros Retos de la familia P/R.
- Al crear el Reto, ya se inicializa con una traducción de ejemplo en el idioma por defecto de la Aventura (nueva mejora transversal del mismo día).

### Desde el punto de vista del Player (Webapp)

- Ver el vídeo del Reto con controles de reproducción y pantalla completa.
- Responder a la pregunta tras (o durante) la reproducción del vídeo pulsando la opción correcta, con los mismos botones estilo Kahoot que en los otros Retos de P/R.
- Ver el **nuevo contador circular animado** (con anillo luminoso) en lugar del texto plano; se aplica también a Pregunta / Respuesta y Pregunta / Respuesta con Audio.
- En escritorio, layout adaptado: vídeo a la izquierda (42%) y contenido de la pregunta a la derecha. En móvil, vídeo arriba (35%) y contenido desplazable abajo.

## 3. PREREQUISITOS DEL USUARIO

- Tener una Aventura con al menos una Misión.
- Tener un archivo de vídeo por cada idioma en el que la Aventura vaya a jugarse.
- Espacio de almacenamiento disponible en tu organización (los vídeos cuentan como cualquier otro recurso multimedia).

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Crear un Reto de Pregunta / Respuesta con Vídeo

1. Abrir una Aventura → abrir una Misión → pulsar **"+ Nuevo Reto"** (o "Crear Reto Rápido").
2. En la pantalla de selección de tipo, elegir **Pregunta / Respuesta con Vídeo** (icono de cámara de vídeo).
3. En la pantalla de edición del Reto, rellenar el título y la configuración general.
4. En la pestaña de cada idioma de la Misión:
   - Subir el vídeo correspondiente. Esperar a que termine la subida; aparece un reproductor de vista previa.
   - Escribir la pregunta.
   - Añadir las opciones de respuesta y marcar la correcta.
5. Opcional: activar el contador (tiempo límite) y la opción de ejecución única.
6. Guardar. El Reto queda listo para ser jugado.

### Flujo Webapp — Jugar un Reto de Pregunta / Respuesta con Vídeo

1. El Player entra en la Misión que contiene el Reto.
2. Pulsa el Reto en el listado.
3. Se abre la pantalla del Reto con el vídeo en la parte superior (móvil) o a la izquierda (escritorio).
4. El Player reproduce el vídeo (play/pause, fullscreen disponibles).
5. Al acabar o durante la reproducción, el Player pulsa la opción de respuesta correcta.
6. Aparece el feedback de Reto (correcto / incorrecto, puntos obtenidos) y se vuelve al listado de Retos.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Selector de tipos de Reto con la tarjeta "Pregunta / Respuesta con Vídeo" → Nombre: `retos/seleccion-tipo-prv.png`
- [GAMIFIER] Pantalla de edición del Reto con el reproductor de vídeo cargado y la pregunta → Nombre: `retos/prv-edicion.png`
- [GAMIFIER] Zona de subida de vídeo por idioma (con selector de idioma visible) → Nombre: `retos/prv-upload-video.png`
- [WEBAPP] Vista móvil del Reto: vídeo arriba + pregunta y opciones debajo → Nombre: `retos/webapp-prv-mobile.png`
- [WEBAPP] Vista escritorio del Reto: vídeo a la izquierda + pregunta a la derecha → Nombre: `retos/webapp-prv-desktop.png`
- [WEBAPP] Contador circular animado en acción → Nombre: `retos/webapp-contador-circular.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/retos/`
- **Nombre del archivo:** `pregunta-respuesta-video.md`
- **sidebar_position sugerido:** detrás de `pregunta-respuesta-audio.md`
- **Tags sugeridos:** `reto`, `pregunta-respuesta`, `video`, `mecanica`
- **¿Es página nueva o actualización?** Nueva

## 7. NOTAS TÉCNICAS

- Los vídeos se suben **por idioma**: si la Misión tiene 3 idiomas, el Game Master puede subir 3 vídeos distintos (o uno solo y dejar el resto vacíos).
- Formatos soportados para el vídeo: MP4, MPEG, AVI, MOV, WebM, MKV, M4V. Recomendado MP4 por compatibilidad universal.
- El nuevo contador circular animado es una mejora visual transversal: se aplica también a los Retos de Pregunta / Respuesta y Pregunta / Respuesta con Audio ya existentes. No requiere ninguna acción del Game Master; es automático.
