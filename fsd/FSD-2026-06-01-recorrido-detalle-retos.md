---
feature_name: Detalle del recorrido del jugador
date: 2026-06-01
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/seguimiento-jugadores/detalle-recorrido.md
---

## 1. RESUMEN DE LA FEATURE
- **Nombre:** Detalle del recorrido del jugador ("¿Qué hizo en cada Reto?")
- **Descripción:** Al consultar el recorrido de un jugador, ahora puedes ver bajo cada Reto exactamente lo que hizo: las respuestas que eligió, la foto o vídeo que subió, la palabra o el texto que escribió, los intentos en la Respuesta Exacta o el resultado de cada giro de la Ruleta.
- **Componentes afectados:** Gamifier (vista de recorrido), API (datos del recorrido) y Webapp (guarda el detalle de Respuesta Exacta y Ruleta).
- **Fecha de despliegue:** 2026-06-01

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)
- Ver, dentro del recorrido de un jugador, un bloque de detalle **siempre visible** bajo cada Reto, adaptado al tipo de Reto.
- En **Pregunta/Respuesta** y **Trivial**: ver todas las opciones de la pregunta, cuál(es) eligió el jugador y si acertó o falló (con marcas de color verde/rojo cuando el Reto muestra la corrección).
- En **Compartir foto/vídeo**: ver una vista previa de la foto o el vídeo que subió el jugador, junto con sus hashtags y redes.
- En **Respuesta Libre**: leer el texto que escribió el jugador.
- En **Nube de Palabras**: ver la palabra que aportó.
- En **Respuesta Exacta**: ver la lista de intentos del jugador (el texto de cada intento y si acertó), además de la respuesta correcta.
- En **Ruleta de la Fortuna**: ver el historial de cada giro (los puntos ganados o perdidos y el objeto conseguido en cada uno) y el total de puntos.
- En **Aventuras con varios idiomas**: el detalle se muestra automáticamente en el idioma en que jugó ese jugador (sin mezclar idiomas).

### Desde el punto de vista del Player (Webapp)
- No cambia la experiencia de juego. Internamente, al jugar un Reto de **Respuesta Exacta** o de **Ruleta**, la app guarda ahora el detalle de la jugada (intentos / giros) para que el Game Master pueda consultarlo después.

## 3. PREREQUISITOS DEL USUARIO
- Tener al menos una Aventura con jugadores que la hayan jugado.
- Para ver el detalle completo de **Respuesta Exacta** y **Ruleta**, las partidas deben haberse jugado a partir de esta actualización (el detalle no es retroactivo: en partidas anteriores se muestra la información disponible y, en Respuesta Exacta, un aviso de que el texto no se registró).

## 4. FLUJOS PASO A PASO

### Flujo Gamifier
1. Entrar en una Aventura y abrir su **Clasificación**.
2. Hacer clic en un jugador (o en su número de objetos) para abrir su **recorrido**.
3. En la pestaña **Recorrido**, cada Reto de la línea de tiempo muestra bajo su tarjeta el bloque de detalle con lo que hizo el jugador.
4. Revisar el detalle según el tipo de Reto (opciones elegidas, foto/vídeo, palabra, texto, intentos o giros de ruleta).

### Flujo Webapp
1. El jugador juega normalmente un Reto de **Respuesta Exacta** (escribiendo y reintentando) o de **Ruleta** (girando una o varias veces).
2. Al terminar el Reto, la app guarda automáticamente el detalle de la jugada. No hay ningún paso adicional para el jugador.

## 5. PANTALLAS PARA CAPTURAR
- [GAMIFIER] Recorrido de un jugador con un Reto de Pregunta/Respuesta desplegado (opciones con acierto/fallo) → Nombre: seguimiento-jugadores/recorrido-pregunta-respuesta.png
- [GAMIFIER] Recorrido con un Reto de Compartir mostrando la foto/vídeo subido → Nombre: seguimiento-jugadores/recorrido-foto.png
- [GAMIFIER] Recorrido con un Reto de Respuesta Exacta mostrando la lista de intentos → Nombre: seguimiento-jugadores/recorrido-respuesta-exacta.png
- [GAMIFIER] Recorrido con un Reto de Ruleta mostrando el historial de giros → Nombre: seguimiento-jugadores/recorrido-ruleta.png
- [GAMIFIER] Recorrido con un Reto de Nube de Palabras o Respuesta Libre → Nombre: seguimiento-jugadores/recorrido-texto-palabra.png

## 6. UBICACIÓN EN DOCUSAURUS
- **Carpeta destino:** `docs/seguimiento-jugadores/`
- **Nombre del archivo:** `detalle-recorrido.md`
- **sidebar_position sugerido:** 2
- **Tags sugeridos:** recorrido, jugadores, seguimiento, clasificación, retos
- **¿Es página nueva o actualización?** Actualización (amplía la documentación del recorrido del jugador con el nuevo bloque de detalle por tipo de Reto).

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)
- El detalle de **Respuesta Exacta** (texto de los intentos) y de la **Ruleta** (historial de giros) solo está disponible para partidas jugadas a partir de esta versión. En partidas anteriores no aparecerá ese desglose.
- En Aventuras multi-idioma, el idioma del detalle se deduce de las respuestas que eligió el jugador; en Retos donde no eligió ninguna opción se usa el idioma por defecto de la Aventura.
- Los Retos de tipo Check-in y otros sin acción registrable no muestran bloque de detalle (para no recargar la línea de tiempo).
