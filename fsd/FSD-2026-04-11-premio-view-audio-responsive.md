---
feature_name: Rediseño de los Objetos Digitales de tipo Audio
date: 2026-04-11
components: [WEBAPP]
docusaurus_path: docs/recompensas/objetos-digitales-audio.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Rediseño de la vista de Objeto Digital con Audio
- **Descripción:** Cuando el Player recibe un Objeto Digital (recompensa) que incluye un audio, la pantalla se muestra ahora con un reproductor moderno tipo Spotify/SoundCloud: botón circular grande, halo animado que pulsa mientras suena, ecualizador, barra de progreso con tiempos y fondo oscuro que pone el audio en el centro. En escritorio, la información del Objeto queda a la derecha y el reproductor a la izquierda.
- **Componentes afectados:** Webapp
- **Fecha de despliegue:** 2026-04-11

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Player (Webapp)

- Recibir un Objeto Digital con audio y verlo con un diseño moderno y cómodo, tanto en móvil como en escritorio.
- Reproducir, pausar y reiniciar el audio con un botón circular grande. Aparece un halo pulsante alrededor mientras suena, más un pequeño ecualizador animado y una barra de progreso con el tiempo transcurrido y el total (`MM:SS`).
- En escritorio, ver el reproductor a la izquierda y la descripción del Objeto a la derecha, con scroll propio si hay mucho texto.
- En móvil, ver el reproductor ocupando la parte superior con la descripción del Objeto desplazable debajo.

### Desde el punto de vista del Game Master (Gamifier)

- Sin cambios en la configuración: los Objetos Digitales con audio que ya hayas creado muestran automáticamente el nuevo diseño en la Webapp del Player.

## 3. PREREQUISITOS DEL USUARIO

- Ninguno por parte del Player: el rediseño se aplica automáticamente.
- Por parte del Game Master: tener configurados Objetos Digitales con un audio asociado para que los Players puedan verlo.

## 4. FLUJOS PASO A PASO

### Flujo Player — Ver un Objeto Digital con audio

1. Completar un Reto o Misión que entrega un Objeto Digital con audio como recompensa.
2. El Baúl se abre y muestra el nuevo Objeto; o bien el Player entra al Baúl y lo pulsa.
3. Se abre la ficha del Objeto:
   - En móvil: reproductor ocupando la parte superior; debajo, título, descripción y botón de atrás.
   - En escritorio: reproductor a la izquierda, ficha a la derecha.
4. Pulsar el botón circular grande de **Play**: el halo empieza a pulsar, el ecualizador se anima y la barra de progreso avanza.
5. Pausar con el mismo botón. Reiniciar con el botón de replay cuando termine.
6. Pulsar **Atrás** para volver al Baúl.

## 5. PANTALLAS PARA CAPTURAR

- [WEBAPP] Objeto Digital con audio en móvil (reproductor + descripción debajo) → Nombre: `objetos/objeto-audio-movil.png`
- [WEBAPP] Objeto Digital con audio en escritorio (dos columnas) → Nombre: `objetos/objeto-audio-desktop.png`
- [WEBAPP] Reproductor reproduciendo (halo pulsante + ecualizador + barra de progreso) → Nombre: `objetos/objeto-audio-playing.png`
- [WEBAPP] Botón de replay al terminar la pista → Nombre: `objetos/objeto-audio-replay.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/recompensas/` (o `docs/objetos/` según esté organizado el sidebar).
- **Nombre del archivo:** `objetos-digitales-audio.md`
- **sidebar_position sugerido:** dentro del apartado Objetos Digitales, junto a los demás tipos (texto, imagen, vídeo…).
- **Tags sugeridos:** `objetos-digitales`, `recompensas`, `audio`, `webapp`, `player`
- **¿Es página nueva o actualización?** Actualización. Si ya existe página de Objetos Digitales con audio, reemplazar la captura/descripción de la vista del Player con las nuevas pantallas. Si no hay sección específica, añadir un apartado dentro de la página general de Objetos Digitales.

## 7. NOTAS TÉCNICAS

- Rediseño puramente visual del reproductor: no cambian los formatos admitidos, la duración máxima ni la forma de configurar los audios desde el Gamifier.
- **Audio detenido al navegar**: si el Player pulsa atrás o cambia de pantalla mientras suena, el audio se detiene automáticamente (ya aplicado en la feature de audios multi-idioma del 2026-03-21).
