---
feature_name: Respuesta Exacta — Feedback mejorado y respuesta correcta en resultados
date: 2026-05-29
components: [WEBAPP]
docusaurus_path: docs/retos/respuesta-exacta.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Feedback mejorado en el Reto "Respuesta Exacta"
- **Descripción:** En los Retos de tipo "Respuesta Exacta", el aviso de acierto o fallo ahora se muestra a pantalla completa, grande y muy visible, y permanece en pantalla hasta que el Player decide continuar. Además, en la pantalla de puntos y progreso ya se muestra la respuesta correcta cuando se ha fallado (si el Game Master lo ha activado).
- **Componentes afectados:** Webapp (v2.33.0)
- **Fecha de despliegue:** 2026-05-29

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)
- No hay cambios de configuración. Las dos opciones que gobiernan este comportamiento ya existían en la edición del Reto "Respuesta Exacta":
  - "Mostrar si es correcto / incorrecto"
  - "Mostrar la respuesta correcta si se falla"
- La opción "Mostrar la respuesta correcta si se falla", que antes no surtía efecto en este tipo de Reto, ahora funciona igual que en los Retos de Pregunta / Respuesta.

### Desde el punto de vista del Player (Webapp)
- Al enviar una respuesta, ve un aviso **grande y a pantalla completa** indicando si ha acertado o fallado, en lugar de un mensaje pequeño que desaparecía casi al instante.
- El aviso **permanece** hasta que el Player pulsa el botón:
  - Si todavía le quedan intentos, el aviso indica cuántos quedan y ofrece el botón **"Reintentar"**, que devuelve al campo de texto para volver a intentarlo.
  - Si acierta o agota los intentos, el aviso ofrece el botón **"Continuar"**, que lleva a la pantalla de puntos y progreso.
- En la pantalla de puntos y progreso, cuando ha fallado y el Game Master activó "Mostrar la respuesta correcta si se falla", el Player ve cuál era la respuesta correcta.

## 3. PREREQUISITOS DEL USUARIO
- Tener una Aventura con al menos un Reto de tipo "Respuesta Exacta".
- Para ver la respuesta correcta tras fallar, el Reto debe tener activada la opción "Mostrar la respuesta correcta si se falla".

## 4. FLUJOS PASO A PASO

### Flujo Webapp (Player)
1. Entrar en un Reto de tipo "Respuesta Exacta".
2. Escribir una respuesta y pulsar "Comprobar".
3. Aparece un aviso grande a pantalla completa:
   - **Acierto:** mensaje de correcto en verde con botón "Continuar".
   - **Fallo con intentos restantes:** mensaje de incorrecto en rojo, número de intentos que quedan y botón "Reintentar".
   - **Fallo final (sin más intentos):** mensaje de incorrecto y, si está activado, la respuesta correcta; botón "Continuar".
4. El aviso no desaparece solo: el Player debe pulsar el botón para avanzar.
5. Al pulsar "Continuar" se llega a la pantalla de puntos y progreso, donde —si se ha fallado y la opción está activada— se muestra la respuesta correcta.

## 5. PANTALLAS PARA CAPTURAR
- [WEBAPP] Aviso grande de acierto en un Reto Respuesta Exacta → Nombre: retos/respuesta-exacta-feedback-acierto.png
- [WEBAPP] Aviso grande de fallo con intentos restantes (botón Reintentar) → Nombre: retos/respuesta-exacta-feedback-reintentar.png
- [WEBAPP] Aviso grande de fallo final con la respuesta correcta → Nombre: retos/respuesta-exacta-feedback-fallo-final.png
- [WEBAPP] Pantalla de puntos y progreso mostrando la respuesta correcta → Nombre: retos/respuesta-exacta-resultado-respuesta-correcta.png

## 6. UBICACIÓN EN DOCUSAURUS
- **Carpeta destino:** `docs/retos/`
- **Nombre del archivo:** `respuesta-exacta.md`
- **sidebar_position sugerido:** (mantener el actual de la página existente)
- **Tags sugeridos:** retos, respuesta-exacta, feedback, player
- **¿Es página nueva o actualización?** Actualización (la página de "Respuesta Exacta" ya existe).

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)
- El aviso grande de correcto/incorrecto se muestra siempre tras enviar una respuesta; las opciones del Game Master controlan principalmente qué se ve en la pantalla de resultados posterior.
- La mejora de "mostrar la respuesta correcta al fallar" alinea el comportamiento de "Respuesta Exacta" con el de los Retos de Pregunta / Respuesta (incluidas sus variantes con Audio y Vídeo).
