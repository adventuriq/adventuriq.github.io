---
feature_name: Botón "Atrás" en la Clasificación
date: 2026-04-11
components: [WEBAPP]
docusaurus_path: docs/webapp/clasificacion.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Botón "Atrás" en la vista de Clasificación
- **Descripción:** La vista de Clasificación (Ranking) tiene ahora un botón de atrás en la esquina superior izquierda, como el resto de vistas. Al pulsarlo, el Player vuelve al sitio de donde venía: al listado de Misiones si entró desde ahí, o al detalle de la Misión si entró desde el listado de Retos. Hasta ahora la única forma de salir era la barra inferior de navegación.
- **Componentes afectados:** Webapp
- **Fecha de despliegue:** 2026-04-11

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Player (Webapp)

- Pulsar el botón circular de flecha atrás (esquina superior izquierda) en la pantalla de Clasificación para volver al paso anterior con un solo toque.
- El botón es coherente con el resto de vistas de la Webapp (mismo estilo, misma posición, mismo color).
- El comportamiento es contextual: si se abrió la Clasificación desde el listado de Misiones, al pulsar atrás se vuelve a ese listado; si se abrió desde dentro de una Misión (listado de Retos), se vuelve al detalle de la Misión.

## 3. PREREQUISITOS DEL USUARIO

- Estar dentro de una Aventura y acceder a la pestaña Clasificación.

## 4. FLUJOS PASO A PASO

### Flujo Player — Volver desde la Clasificación al listado de Misiones

1. Entrar en la Aventura.
2. En el listado de Misiones, pulsar la pestaña **Clasificación** en la barra inferior.
3. Pulsar el botón circular de atrás en la esquina superior izquierda.
4. Vuelves al listado de Misiones.

### Flujo Player — Volver desde la Clasificación al detalle de la Misión

1. Entrar en una Misión (listado de Retos).
2. Pulsar la pestaña **Clasificación** en la barra inferior.
3. Pulsar el botón de atrás.
4. Vuelves al detalle de la Misión desde la que entraste.

## 5. PANTALLAS PARA CAPTURAR

- [WEBAPP] Vista de Clasificación con el botón de atrás visible → Nombre: `clasificacion/botonback-presente.png`
- [WEBAPP] Antes/después (opcional, vista comparativa) → Nombre: `clasificacion/botonback-comparativa.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/webapp/` (si existe) o dentro de la sección de Clasificación / Métricas.
- **Nombre del archivo:** `clasificacion.md` (actualización de la página existente)
- **sidebar_position sugerido:** mantener el actual.
- **Tags sugeridos:** `clasificacion`, `ranking`, `navegacion`, `webapp`, `player`
- **¿Es página nueva o actualización?** Actualización. Añadir un párrafo corto o nota mencionando el botón de atrás en la página existente de Clasificación.

## 7. NOTAS TÉCNICAS

- Cambio exclusivamente de navegación; no afecta a puntuaciones ni a cómo se calcula el ranking.
- Alternativa sigue disponible: la barra inferior de navegación permite saltar a cualquier pestaña como antes.
