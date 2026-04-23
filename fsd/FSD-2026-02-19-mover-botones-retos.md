---
feature_name: Reubicación de botones Crear/Enlazar Reto en una Misión
date: 2026-02-19
components: [GAMIFIER]
docusaurus_path: docs/misiones/edicion-mision.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Botones "Crear Reto" y "Enlazar Reto" al pie del bloque de Retos
- **Descripción:** Pequeña mejora visual en la edición de una Misión. Los botones para crear o enlazar Retos estaban en la cabecera del bloque de Retos; ahora están al pie, al lado del botón "Guardar relaciones y orden". Además, el icono de "Enlazar Reto" se actualiza a un icono de enlace más reconocible.
- **Componentes afectados:** Gamifier
- **Fecha de despliegue:** 2026-02-19

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Encontrar los botones **"Crear Reto"** y **"Enlazar Reto"** al pie del bloque de Retos, agrupados con el botón de guardar el orden.
- Identificar más fácilmente el botón **"Enlazar Reto"** gracias a su nuevo icono de cadena.

## 3. PREREQUISITOS DEL USUARIO

- Tener una Aventura con una Misión abierta en edición.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Crear o Enlazar un Reto desde la Misión

1. Entra en Aventuras y abre la Aventura.
2. Entra en la Misión.
3. Desplázate al pie del bloque de Retos.
4. En la misma fila que **"Guardar relaciones y orden"** encontrarás:
   - **"Enlazar Reto"** (icono de cadena, azul): te permite añadir un Reto ya existente.
   - **"Crear Reto"** (verde): abre el diálogo de creación rápida.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Pie del bloque de Retos con los tres botones alineados ("Guardar relaciones y orden", "Enlazar Reto", "Crear Reto") → Nombre: `misiones/botones-retos-pie.png`
- [GAMIFIER] Detalle del botón "Enlazar Reto" con el nuevo icono de cadena → Nombre: `misiones/enlazar-reto-icono.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/misiones/`
- **Nombre del archivo:** integrar dentro de la página existente de "Edición de Misiones".
- **sidebar_position sugerido:** el de la página ya existente.
- **Tags sugeridos:** `misiones`, `retos`, `ux`
- **¿Es página nueva o actualización?** Actualización. No requiere página nueva.

## 7. NOTAS TÉCNICAS

- Es un cambio puramente visual y de ubicación. No afecta a la lógica ni a los datos.
