---
feature_name: Botones de creación homogéneos y aviso al crear Reto sin Misión
date: 2026-02-24
components: [GAMIFIER]
docusaurus_path: docs/aventuras/edicion-aventura.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Homogeneización de botones de creación en la edición de Aventura + aviso al crear Reto sin Misión
- **Descripción:** En la edición de una Aventura, los botones "Nueva Traducción", "Nuevo Clan", "Nueva Misión", "Nuevo Reto" y "Nuevo POI" tienen ahora el mismo estilo (verde, tamaño pequeño). Además, el botón "Nuevo Reto" que hay a nivel de Aventura (fuera de cualquier Misión) ahora muestra un aviso explicativo antes de crearlo, recordando que ese Reto no quedará enlazado a ninguna Misión.
- **Componentes afectados:** Gamifier
- **Fecha de despliegue:** 2026-02-24

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Ver todos los botones de creación ("Nueva Traducción", "Nuevo Clan", "Nueva Misión", "Nuevo Reto", "Nuevo POI") con el mismo aspecto, lo que facilita localizar las acciones de creación dentro de la pantalla.
- Recibir un aviso claro cuando intenta crear un Reto a nivel de Aventura (no dentro de una Misión): el diálogo explica que el Reto se creará **sin enlazarlo a ninguna Misión** y pide confirmación para continuar.
- Cancelar la creación si se pulsó por error el botón.

## 3. PREREQUISITOS DEL USUARIO

- Estar editando una Aventura.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Crear un Reto sin Misión (con aviso)

1. Entra en Aventuras y abre la Aventura.
2. En el bloque de Retos a nivel de Aventura, pulsa **"Nuevo Reto"**.
3. Aparece un aviso amarillo: **"Nuevo Reto sin Misión"**. El mensaje explica que el Reto no quedará enlazado a ninguna Misión y que deberás enlazarlo manualmente después si así lo deseas.
4. Si realmente quieres crearlo, pulsa **"Continuar"**. Se abre la pantalla de creación del Reto.
5. Si lo has pulsado por error, pulsa **"Cancelar"** y no ocurre nada.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Bloques de la Aventura con los 5 botones verdes homogéneos ("Nueva Traducción", "Nuevo Clan", "Nueva Misión", "Nuevo Reto", "Nuevo POI") → Nombre: `aventuras/botones-creacion-homogeneos.png`
- [GAMIFIER] Diálogo "Nuevo Reto sin Misión" con botón Continuar → Nombre: `aventuras/aviso-reto-sin-mision.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** integrar en la página existente de "Edición de Aventura".
- **sidebar_position sugerido:** el de la página existente.
- **Tags sugeridos:** `aventuras`, `retos`, `misiones`, `ux`
- **¿Es página nueva o actualización?** Actualización. Añadir un recuadro informativo sobre el aviso del Reto sin Misión.

## 7. NOTAS TÉCNICAS

- La recomendación general es crear los Retos desde dentro de una Misión (para mantener organizadas las Aventuras). Crear Retos "sueltos" a nivel de Aventura tiene sentido cuando el Reto se va a reutilizar después en varias Misiones (usar "Enlazar Reto" desde la Misión correspondiente).
