---
feature_name: Gestión de idiomas en las porciones de la Ruleta de la Fortuna (fix)
date: 2026-07-27
components: [API] [GAMIFIER]
docusaurus_path: docs/retos/ruleta-de-la-fortuna.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Gestión de idiomas en las porciones de la Ruleta de la Fortuna
- **Descripción:** Corrección del comportamiento del editor de porciones: cada porción admite ahora un único texto por idioma, el selector de idiomas solo ofrece los que faltan y la eliminación de un idioma es fiable.
- **Componentes afectados:** API (v4.54.1), Gamifier (v4.58.1)
- **Fecha de despliegue:** 2026-07-27

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Al pulsar "Nueva traducción" en una porción, el selector de idiomas ya solo muestra los idiomas que la porción todavía no tiene. Cuando la porción tiene todos los idiomas disponibles, el botón desaparece.
- Si por cualquier vía se intenta añadir un idioma que ya existe en esa porción, aparece un aviso ("Ese idioma ya existe en esta porción") en lugar de crearse una pestaña duplicada.
- Al eliminar un idioma de una porción, la pestaña desaparece solo cuando el borrado se ha confirmado en el servidor; si falla, se muestra un error y no se pierde nada.
- Los textos de cada porción quedan siempre asociados a su porción e idioma: editar una porción ya no puede alterar los textos de otra.

### Desde el punto de vista del Player (Webapp)

- Sin cambios visibles. El Player sigue viendo el texto de cada porción en su idioma.

## 3. PREREQUISITOS DEL USUARIO

- Tener una Aventura con al menos un Reto de tipo Ruleta de la Fortuna.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier

1. Ir a la Aventura → Misión → Reto de tipo Ruleta de la Fortuna.
2. En una porción, pulsar "Nueva traducción": el selector solo ofrece idiomas que la porción no tiene aún.
3. Elegir un idioma → se crea la pestaña con el texto de ejemplo, listo para editar. El idioma elegido desaparece del selector.
4. Pulsar el botón de borrar en la pestaña de un idioma → la pestaña desaparece al confirmarse el borrado y el idioma vuelve a estar disponible en el selector.
5. Guardar la porción: cada idioma conserva un único texto.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Editor de porción con selector de idiomas abierto (solo idiomas no usados) → Nombre sugerido: retos/ruleta-selector-idiomas.png
- [GAMIFIER] Aviso "Ese idioma ya existe en esta porción" → Nombre sugerido: retos/ruleta-aviso-idioma-duplicado.png

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/retos/`
- **Nombre del archivo:** `ruleta-de-la-fortuna.md`
- **sidebar_position sugerido:** 9 (sin cambio)
- **Tags sugeridos:** los existentes de la página
- **¿Es página nueva o actualización?** Actualización (sección de configuración de porciones / texto por idioma)

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

- Es una corrección de comportamiento: no hay opciones nuevas que documentar, solo conviene que la página refleje que cada porción tiene **un** texto por idioma y que el selector solo ofrece idiomas pendientes.
