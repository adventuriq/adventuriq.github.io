---
feature_name: Pregunta / Respuesta con Audio
date: 2026-04-11
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/retos/pregunta-respuesta-audio.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Pregunta / Respuesta con Audio (nuevo tipo de Reto)
- **Descripción:** Nuevo tipo de Reto — **Pregunta / Respuesta con Audio** — que funciona exactamente igual que una Pregunta / Respuesta clásica, pero sustituye la imagen de cabecera por un reproductor de audio grande con estética tipo Spotify (botón circular con halo pulsante, ecualizador animado y barra de progreso). El Player escucha una pista (un fragmento de canción, una grabación, una pista sonora…) y responde a la pregunta a partir de lo que ha oído. El audio se configura **por idioma**, como los textos.
- **Componentes afectados:** API, Gamifier, Webapp
- **Fecha de despliegue:** 2026-04-11

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Elegir, al crear un nuevo Reto, el tipo **"Pregunta / Respuesta con Audio"** (con icono de auriculares en la pantalla de selección de tipo).
- Configurar la pregunta y sus respuestas exactamente igual que una Pregunta / Respuesta clásica (opciones múltiples, respuesta correcta, puntuación, bonus, etc.).
- Subir un archivo de audio **por cada idioma** de la Aventura; el Player escuchará el audio correspondiente al suyo.
- Previsualizar el audio subido dentro del editor antes de guardar.
- Sustituir o eliminar el audio de un idioma sin tocar los demás.
- Crear este tipo de Reto desde el creador rápido de Retos dentro de una Misión.

### Desde el punto de vista del Player (Webapp)

- Ver, al entrar a un Reto de este tipo, un reproductor de audio grande que ocupa la cabecera (en lugar de una imagen).
- Pulsar el botón circular de play: el audio empieza a sonar y se anima un ecualizador + halo pulsante; la barra de progreso avanza mostrando tiempo transcurrido / total.
- Pausar y reanudar cuantas veces quiera antes de responder.
- Ver debajo la pregunta y las opciones con el mismo estilo grande y colorido que en la Pregunta / Respuesta clásica.
- Responder y recibir la retroalimentación habitual (acierto / fallo, puntos).
- Si el Game Master no subió audio para su idioma, ve un mensaje "Audio no disponible" — el Reto sigue jugándose igual (texto + opciones).

## 3. PREREQUISITOS DEL USUARIO

- Una Aventura con al menos una Misión.
- Archivos de audio (MP3 recomendado), uno por cada idioma en que se quiera ofrecer la pista.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Crear un Reto Pregunta / Respuesta con Audio

1. Ir a Aventuras y abrir la Aventura.
2. Entrar en la Misión.
3. Pulsar **"Añadir Reto"** (o el creador rápido).
4. En la selección de tipo de Reto, elegir la card **"Pregunta / Respuesta con Audio"** (icono de auriculares).
5. Rellenar el título y configuración general del Reto.
6. En la sección de traducciones, abrir la pestaña de un idioma.
7. Subir el **archivo de audio** del Reto en ese idioma. Aparece un reproductor de previsualización.
8. Escribir la **pregunta** y las **respuestas** en ese idioma; marcar la correcta.
9. Repetir en los demás idiomas (audio + pregunta + respuestas).
10. Guardar.

### Flujo Gamifier — Sustituir el audio de un idioma

1. Abrir el Reto en cuestión.
2. En la pestaña del idioma, pulsar el botón de eliminar del audio actual.
3. Subir uno nuevo.
4. Guardar.

### Flujo Player — Jugar un Reto Pregunta / Respuesta con Audio

1. Abrir el Reto dentro de una Misión.
2. Pulsar el botón circular grande de **Play** en la cabecera.
3. Escuchar la pista (se puede pausar, reanudar y reiniciar con los mismos controles).
4. Bajo el reproductor, leer la pregunta y seleccionar una de las opciones.
5. Pulsar **Continuar** para confirmar.
6. Recibir la retroalimentación de acierto / fallo y los puntos correspondientes.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Pantalla "Selección de tipo de Reto" con la card "Pregunta / Respuesta con Audio" resaltada (icono auriculares) → Nombre: `retos/seleccion-tipo-pra.png`
- [GAMIFIER] Editor del Reto con el bloque de subida de audio por idioma → Nombre: `retos/pra-editor-audio-idioma.png`
- [GAMIFIER] Previsualización del audio subido dentro del editor → Nombre: `retos/pra-editor-preview.png`
- [GAMIFIER] Varios idiomas con audios diferentes (pestañas) → Nombre: `retos/pra-editor-multi-idioma.png`
- [WEBAPP] Reto P/R con Audio en móvil (reproductor en cabecera) → Nombre: `retos/webapp-pra-movil.png`
- [WEBAPP] Reto P/R con Audio en escritorio (dos columnas) → Nombre: `retos/webapp-pra-desktop.png`
- [WEBAPP] Reproductor reproduciendo (halo pulsante + ecualizador + barra de progreso) → Nombre: `retos/webapp-pra-playing.png`
- [WEBAPP] Mensaje "Audio no disponible" cuando el idioma no tiene pista → Nombre: `retos/webapp-pra-sin-audio.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/retos/`
- **Nombre del archivo:** `pregunta-respuesta-audio.md`
- **sidebar_position sugerido:** junto a las demás mecánicas P/R (después de "Pregunta/Respuesta" y antes de "Pregunta/Respuesta con Vídeo").
- **Tags sugeridos:** `retos`, `pregunta-respuesta`, `audio`, `multi-idioma`, `mecanica`
- **¿Es página nueva o actualización?** **Nueva** página (nuevo tipo de Reto). Actualizar además la página general de tipos de Retos / selector de tipo para incluirlo en la lista de mecánicas disponibles (ID 11).

## 7. NOTAS TÉCNICAS

- **Misma mecánica que P/R clásica**: la configuración de pregunta, opciones, respuesta correcta, puntos y bonus es idéntica. Solo cambia la pieza de cabecera (audio en lugar de imagen).
- **Formato recomendado**: MP3. Duración sugerida 20-60 s para no alargar el Reto.
- **Derechos de audio**: si se usan fragmentos de canciones comerciales, asegúrate de disponer de licencia para compartirlos en las Aventuras.
- **Fallback sin audio por idioma**: si en un idioma no se sube audio, el Reto se juega solo con texto + opciones. No bloquea ni impide completar la mecánica.
