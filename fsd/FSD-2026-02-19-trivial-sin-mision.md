---
feature_name: Indicador "Preguntas Encadenadas" en Retos sin Misión
date: 2026-02-19
components: [API] [GAMIFIER]
docusaurus_path: docs/retos/listado-retos-aventura.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Identificación de Retos que pertenecen a un Reto de Preguntas Encadenadas
- **Descripción:** En el listado de Retos de una Aventura, los Retos que estaban marcados como "Sin Misión" ahora se distinguen correctamente: si pertenecen a un Reto de Preguntas Encadenadas, muestran un icono de enlace y el tooltip "Preguntas encadenadas" en lugar de la etiqueta "Sin Misión". Así el Game Master entiende que no son Retos huérfanos, sino parte de un Trivial.
- **Componentes afectados:** API, Gamifier
- **Fecha de despliegue:** 2026-02-19

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Diferenciar de un vistazo entre:
  - Retos realmente huérfanos (no enlazados a ninguna Misión ni a ninguna otra estructura): etiqueta **"Sin Misión"**.
  - Retos que forman parte de un Reto de **Preguntas Encadenadas**: icono de cadena + tooltip "Preguntas encadenadas".
- Entender por qué ciertos Retos no aparecen directamente en el listado de ninguna Misión: están actuando como preguntas dentro de un Trivial.

## 3. PREREQUISITOS DEL USUARIO

- Tener una Aventura con al menos un Reto de tipo "Preguntas Encadenadas".

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Ver el origen de cada Reto en el listado

1. Entra en Aventuras y abre la Aventura.
2. Desplázate al bloque de Retos (listado completo).
3. En la columna de Misión de cada fila:
   - Los Retos enlazados a una Misión muestran el nombre de la Misión.
   - Los Retos que forman parte de un Reto de Preguntas Encadenadas muestran el icono de cadena; al pasar el ratón, aparece el tooltip **"Preguntas encadenadas"**.
   - Los Retos realmente sin Misión muestran la etiqueta **"Sin Misión"**.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Listado de Retos de una Aventura mostrando los 3 casos (con Misión / Preguntas Encadenadas / Sin Misión) → Nombre: `retos/listado-retos-origen.png`
- [GAMIFIER] Detalle con tooltip "Preguntas encadenadas" visible → Nombre: `retos/preguntas-encadenadas-tooltip.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/retos/`
- **Nombre del archivo:** integrar en la página de "Listado de Retos de la Aventura" o en la página de "Preguntas Encadenadas".
- **sidebar_position sugerido:** el de la página existente.
- **Tags sugeridos:** `retos`, `preguntas-encadenadas`, `listado`
- **¿Es página nueva o actualización?** Actualización de la página de Preguntas Encadenadas o del Listado de Retos.

## 7. NOTAS TÉCNICAS

- Los Retos que forman parte de un Trivial (Preguntas Encadenadas) no se editan desde el listado general de Retos: ábrelos desde el propio Reto Preguntas Encadenadas para mantener el contexto.
