---
feature_name: Contexto de usuario y Aventura para el chatbot LeChuck
date: 2026-03-10
components: [GAMIFIER]
docusaurus_path: docs/intro.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Envío de contexto al chatbot de ayuda del Gamifier
- **Descripción:** Mejora interna del chatbot de asistencia (LeChuck) del Gamifier. Ahora, cada consulta que el Game Master hace al chatbot envía también el identificador del usuario, su nombre y la Aventura en la que está trabajando. El chatbot puede así personalizar sus respuestas y entender desde qué Aventura le estás preguntando.
- **Componentes afectados:** Gamifier
- **Fecha de despliegue:** 2026-03-10

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Preguntar al chatbot y recibir respuestas más contextuales: si el Game Master está dentro de una Aventura concreta, el chatbot puede entenderlo y responder de forma más específica.
- No necesita hacer nada nuevo. La experiencia visible del chatbot no cambia.

## 3. PREREQUISITOS DEL USUARIO

- Haber iniciado sesión en el Gamifier.

## 4. FLUJOS PASO A PASO

No aplica un nuevo flujo. El Game Master abre el chatbot como hasta ahora y hace sus preguntas.

## 5. PANTALLAS PARA CAPTURAR

No requiere capturas nuevas.

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** —
- **Nombre del archivo:** —
- **sidebar_position sugerido:** —
- **Tags sugeridos:** —
- **¿Es página nueva o actualización?** **No requiere página de manual.** Es un cambio interno que mejora la calidad de las respuestas del chatbot pero no cambia la interfaz ni añade acciones nuevas.

## 7. NOTAS TÉCNICAS

- No afecta a la privacidad visible del Game Master: los datos que ya estaban disponibles en la sesión del Gamifier se transmiten ahora al chatbot para enriquecer sus respuestas.
- Si en el futuro se documenta explícitamente el comportamiento del chatbot LeChuck, conviene mencionar que las respuestas pueden tener en cuenta la Aventura abierta.
