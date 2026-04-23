---
feature_name: Rediseño visual épico de Feedback, Premios y Aventura Completada
date: 2026-04-14
components: [WEBAPP]
docusaurus_path: docs/conceptos-basicos.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Rediseño visual de las pantallas de Feedback de Reto, Revelación de Premios y Aventura Completada
- **Descripción:** Las tres pantallas más emocionales que ve el Player durante y al final de una Aventura se han reescrito con animaciones, iconografía y efectos más épicos: iconos con brillo, destellos, confeti, trofeo dorado animado y una revelación tipo "loot-box" para los Premios.
- **Componentes afectados:** Webapp (v2.22.0)
- **Fecha de despliegue:** 2026-04-14

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Nada nuevo que configurar. Las mejoras son puramente visuales y se aplican automáticamente a todas las Aventuras.

### Desde el punto de vista del Player (Webapp)

- Al acabar un Reto, ver una pantalla de feedback renovada: icono de resultado (check verde o X roja) con brillo pulsante y animación "bounce-in", texto grande con desplazamiento y desvanecido, y la puntuación obtenida dentro de una tarjeta con gradiente y animación de escala.
- Ver confeti animado (Lottie) cayendo por toda la pantalla cuando acierta en los Retos de Pregunta/Respuesta, Pregunta/Respuesta con Audio, Pregunta/Respuesta con Vídeo y Respuesta Exacta (antes solo salía en Pregunta/Respuesta).
- Al obtener un Objeto Digital (Premio) de Reto o de Misión, ver una nueva **animación de revelación** tipo "loot-box" de 3 segundos: partículas doradas flotando, icono de regalo que tiembla, 16 rayos de luz radiales girando, flash blanco y aparición del contenido.
- Al completar una Aventura, ver una pantalla rediseñada con trofeo dorado animado en gradiente oro-naranja, doble brillo, animaciones escalonadas del título, del mensaje y del botón, confeti cayendo y layout adaptado a móvil y a escritorio. Desaparece el GIF de celebración antiguo.

## 3. PREREQUISITOS DEL USUARIO

- Ninguno. Las mejoras son automáticas para todos los Players desde la v2.22.0 de la Webapp.

## 4. FLUJOS PASO A PASO

### Flujo Webapp — Ver el nuevo feedback de Reto

1. El Player completa un Reto de Pregunta/Respuesta (cualquier variante) o Respuesta Exacta.
2. Aparece la pantalla de feedback:
   - Icono grande (check o X) con brillo pulsante y animación de rebote.
   - Texto "¡Correcto!" o "No es correcto" en grande.
   - Puntuación obtenida dentro de una tarjeta con gradiente.
   - Si ha acertado, confeti cayendo detrás de todo.
3. Tras unos segundos (o al pulsar), el Player continúa al siguiente Reto.

### Flujo Webapp — Recibir un Premio con la nueva animación de revelación

1. El Player acaba un Reto o una Misión que entrega un Objeto Digital que ha ganado.
2. Se lanza la animación de revelación de 3 s: fondo oscuro con partículas doradas, icono de regalo que rebota y tiembla, rayos de luz girando, flash blanco que cubre la pantalla.
3. Al disiparse el flash, aparece el Objeto Digital obtenido (imagen/audio/vídeo y su descripción).

### Flujo Webapp — Ver la pantalla rediseñada de Aventura Completada

1. El Player completa una Aventura.
2. Se lanza la animación de revelación (igual que la de Premios) como intro.
3. Al revelarse el contenido: trofeo dorado en el centro con animación de rebote, título "¡Aventura Completada!" que aparece con desvanecido, mensaje de finalización en tarjeta con sombra, confeti cayendo.
4. Al pulsar "Continuar", el Player vuelve al listado de Aventuras.

## 5. PANTALLAS PARA CAPTURAR

- [WEBAPP] Feedback de Reto con icono verde animado + confeti + puntuación → Nombre: `webapp/feedback-correcto.png`
- [WEBAPP] Feedback de Reto con icono rojo (incorrecto) → Nombre: `webapp/feedback-incorrecto.png`
- [WEBAPP] Animación de revelación de Premios (momento de los rayos girando) → Nombre: `webapp/reveal-premios-rayos.png`
- [WEBAPP] Animación de revelación de Premios (momento del flash blanco) → Nombre: `webapp/reveal-premios-flash.png`
- [WEBAPP] Pantalla Aventura Completada con trofeo dorado + confeti → Nombre: `webapp/aventura-completada.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** no requiere página propia. Actualizar la sección de conceptos básicos y/o las páginas existentes de "Finalización de Aventura" y "Objetos Digitales" para reflejar los cambios visuales.
- **Nombre del archivo:** n/a (actualizaciones)
- **sidebar_position sugerido:** n/a
- **Tags sugeridos:** `webapp`, `ui`, `animaciones`, `feedback`, `premios`
- **¿Es página nueva o actualización?** Actualización. Capturas existentes del manual pueden y deben reemplazarse por las nuevas.

## 7. NOTAS TÉCNICAS

- Cambio puramente visual; no altera la lógica de puntuación ni la entrega de Premios.
- El confeti es el mismo recurso Lottie que ya se usaba, ahora aplicado a más mecánicas.
- Las capturas del manual que muestren las pantallas antiguas deberían actualizarse para reflejar el nuevo look and feel.
