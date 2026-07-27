---
feature_name: Gestión de idiomas unificada en todos los editores
date: 2026-07-27
components: [API] [GAMIFIER]
docusaurus_path: docs/aventuras/idiomas-traducciones.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Gestión de idiomas unificada en todos los editores
- **Descripción:** Todos los editores del Gamifier gestionan ahora los idiomas de la misma forma segura: el selector solo ofrece idiomas pendientes, cada elemento tiene un único texto por idioma y eliminar un idioma es fiable en todos los tipos de contenido.
- **Componentes afectados:** API (v4.54.2), Gamifier (v4.58.2)
- **Fecha de despliegue:** 2026-07-27

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- En **todos** los editores con traducciones — Aventura, Misión, todos los tipos de Reto (incluidas las porciones de la Ruleta y los textos RRSS de Compartir Foto), Objetos, Objetos de Aventura, Notificaciones, POIs, Tipos de Voto y System Mails (Super Admin) — el botón "Nueva traducción" solo ofrece los idiomas que ese elemento todavía no tiene; cuando están todos, el botón desaparece.
- Si por cualquier vía se intenta repetir un idioma, aparece el aviso "Ese idioma ya existe" (en las porciones de la Ruleta: "Ese idioma ya existe en esta porción") en lugar de crearse una pestaña duplicada.
- Al eliminar un idioma, la pestaña desaparece solo cuando el servidor confirma el borrado; si falla, se muestra un error y no se pierde nada. Esto ahora funciona también en Nube de Palabras y Notificaciones, donde antes el borrado no se guardaba realmente.
- Al eliminar un idioma de un reto Pregunta/Respuesta ya no se pierden las respuestas del resto de idiomas.
- Editar las traducciones de un elemento nunca afecta a las de otro (cada texto queda ligado a su elemento e idioma).

### Desde el punto de vista del Player (Webapp)

- Sin cambios visibles; el Player sigue viendo cada contenido en su idioma.

## 3. PREREQUISITOS DEL USUARIO

- Tener una Aventura con contenido editable (retos, misiones, objetos...).

## 4. FLUJOS PASO A PASO

### Flujo Gamifier

1. Abrir cualquier elemento con bloque de Traducciones (por ejemplo, un Reto).
2. Pulsar "Nueva traducción": el selector solo muestra idiomas que el elemento no tiene.
3. Elegir un idioma → se crea la pestaña; el idioma desaparece del selector.
4. Pulsar el icono de eliminar en la pestaña de un idioma → confirmar → la pestaña desaparece al confirmarse el borrado en el servidor y el idioma vuelve al selector.
5. Guardar: cada idioma conserva un único texto.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Selector de idiomas de un Reto con solo los idiomas pendientes → Nombre sugerido: aventuras/traducciones-selector-idiomas.png
- [GAMIFIER] Aviso "Ese idioma ya existe" → Nombre sugerido: aventuras/traducciones-aviso-duplicado.png
- [GAMIFIER] Bloque de Traducciones sin botón (todos los idiomas creados) → Nombre sugerido: aventuras/traducciones-todos-los-idiomas.png

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `idiomas-traducciones.md`
- **sidebar_position sugerido:** sin cambio
- **Tags sugeridos:** los existentes de la página
- **¿Es página nueva o actualización?** Actualización (comportamiento del selector de idiomas y del borrado, aplicable a todos los editores)

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

- El comportamiento es idéntico en todos los editores; el manual puede describirlo una sola vez en la página de idiomas y traducciones en lugar de por tipo de contenido.
- Las porciones de la Ruleta de la Fortuna tienen su propio selector por porción con el mismo comportamiento (ya documentado en el FSD del 2026-07-27 de la Ruleta).
