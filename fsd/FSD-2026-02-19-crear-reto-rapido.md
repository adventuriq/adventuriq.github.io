---
feature_name: Crear Reto rápido desde una Misión
date: 2026-02-19
components: [GAMIFIER]
docusaurus_path: docs/misiones/crear-reto-rapido.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Crear Reto rápido desde una Misión (y acciones rápidas en el listado)
- **Descripción:** Ahora puedes crear un Reto sin salir de la Misión en la que estás trabajando. Un diálogo de dos pasos te pide el tipo de Reto y un título, y el Reto queda creado y enlazado automáticamente. Además, cada Reto del listado de la Misión muestra botones directos para editar, desvincular o eliminar.
- **Componentes afectados:** Gamifier
- **Fecha de despliegue:** 2026-02-19

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Crear un Reto nuevo desde la edición de una Misión con solo dos pasos, sin perder la vista de la Misión.
- Ver el Reto recién creado resaltado en verde al final del listado, con desplazamiento automático.
- Editar, desvincular o eliminar cualquier Reto del listado sin navegar a otra pantalla.
- Confirmar la eliminación mediante un diálogo para evitar borrados accidentales.

## 3. PREREQUISITOS DEL USUARIO

- Tener al menos una Aventura con una Misión creada.
- Estar en la pantalla de edición de la Misión.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Crear un Reto rápido desde la Misión

1. Entra en Aventuras y abre la Aventura.
2. Entra en una Misión.
3. En el bloque de Retos, pulsa **"Crear Reto"**.
4. Paso 1: elige el tipo de Reto pulsando sobre la imagen que lo representa (Pregunta/Respuesta, Preguntas Encadenadas, Compartir Foto, Respuesta Libre, Llamada a la Acción).
5. Paso 2: escribe el título (obligatorio) y, si quieres, una descripción breve. El idioma por defecto de la Aventura aparece con su bandera.
6. Pulsa **"Crear"**. El diálogo se cierra, el listado se refresca y el Reto recién creado aparece resaltado en verde al final.

### Flujo Gamifier — Editar un Reto desde el listado

1. En el listado de Retos de la Misión, pulsa el botón azul con el icono de lápiz del Reto que quieras modificar.
2. Se abre el formulario completo del Reto para que edites su mecánica, textos, recompensas, etc.

### Flujo Gamifier — Desvincular un Reto de la Misión

1. En el listado de Retos de la Misión, pulsa el botón con el icono de enlace tachado.
2. El Reto deja de estar enlazado a la Misión, pero sigue existiendo y se puede enlazar a otra Misión.

### Flujo Gamifier — Eliminar un Reto

1. En el listado de Retos de la Misión, pulsa el botón rojo con el icono de papelera.
2. Confirma en el diálogo de aviso. El Reto y todos sus datos asociados se eliminan definitivamente.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Listado de Retos de una Misión con botón "Crear Reto" visible → Nombre: `misiones/crear-reto-boton.png`
- [GAMIFIER] Diálogo paso 1 — selección visual del tipo de Reto → Nombre: `misiones/crear-reto-paso1-tipo.png`
- [GAMIFIER] Diálogo paso 2 — título y descripción con bandera de idioma → Nombre: `misiones/crear-reto-paso2-titulo.png`
- [GAMIFIER] Listado de Retos con el nuevo Reto resaltado en verde → Nombre: `misiones/crear-reto-resaltado.png`
- [GAMIFIER] Detalle de la fila de un Reto con los tres botones (editar/desvincular/eliminar) → Nombre: `misiones/reto-botones-accion.png`
- [GAMIFIER] Diálogo de confirmación al eliminar un Reto → Nombre: `misiones/eliminar-reto-confirmacion.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/misiones/`
- **Nombre del archivo:** `crear-reto-rapido.md`
- **sidebar_position sugerido:** entre las páginas de gestión de la Misión, antes de la página detallada de cada tipo de Reto.
- **Tags sugeridos:** `misiones`, `retos`, `creacion-rapida`, `ux`
- **¿Es página nueva o actualización?** Nueva página. Puede también incorporarse como sección dentro de la página existente de edición de Misiones si Cowork lo prefiere.

## 7. NOTAS TÉCNICAS

- Solo los 5 tipos de Retos activos se ofrecen en el paso 1 del diálogo. Los tipos más recientes (Respuesta Exacta, PR con audio/vídeo, Ruleta, Nube de Palabras) se añaden en otros FSDs y pueden completar la oferta con el tiempo.
- El botón **"Eliminar"** en el listado elimina el Reto de forma definitiva: desaparece también de cualquier otra Misión donde estuviera enlazado.
- El botón **"Desvincular"** es el equivalente suave: quita el Reto de esta Misión pero lo preserva para usarlo en otro sitio.
