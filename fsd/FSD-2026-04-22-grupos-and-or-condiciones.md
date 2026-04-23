---
feature_name: Grupos AND/OR en las 4 condiciones restantes
date: 2026-04-22
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/aventuras/condiciones-and-or.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Grupos AND/OR en las 4 condiciones restantes del sistema
- **Descripción:** La mecánica de combinar condiciones en grupos **AND dentro de un grupo / OR entre grupos** (introducida en v4.23.0 para los objetos digitales de Aventura) se extiende ahora a los 4 sitios del sistema donde quedaban listas planas de condiciones: Finalización de Aventura, Finalización de Misión, Obtención de Objetos de Misión y Obtención de Objetos de Reto. El Game Master puede expresar ahora reglas como *"acaba la Misión **si** (el Player supera 500 pts **Y** acaba antes de 10 min) **O BIEN** (acaba todos los retos)"* en cualquiera de las 4 secciones, con la misma UI que ya conocía de los objetos de Aventura.
- **Componentes afectados:** API (v4.24.0), Gamifier (v4.36.0), Webapp (v2.28.2 — fix de encadenamiento de ceremonias)
- **Fecha de despliegue:** 2026-04-22

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Combinar condiciones con lógica **AND/OR por grupos** en las 4 secciones que antes sólo soportaban "cumplir al menos una":
  - **Edición de Aventura → "Condiciones de Finalización de la Aventura"**: cuándo una Aventura se da por finalizada.
  - **Edición de Misión → "Condiciones de Finalización de la Misión"**: cuándo una Misión se da por finalizada.
  - **Edición de Objeto de Misión → "Condiciones de Obtención del Objeto"**: cuándo se entrega un objeto de Misión al Player.
  - **Edición de Objeto de Reto → "Condiciones de Obtención del Objeto"**: cuándo se entrega un objeto de Reto al Player.
- La UI es la misma en los 4 sitios: tarjetas por grupo con separador **"O BIEN"** entre ellos, botón **"+ Añadir nuevo grupo OR"**, iconos de regla (`rule`) y check, edición inline con lápiz, guardado automático.
- Dentro de un grupo todas las condiciones deben cumplirse (**AND**); entre grupos basta con que uno entero se cumpla (**OR**).
- **Aventuras publicadas antes de esta versión siguen funcionando exactamente igual**: la migración conserva el comportamiento OR puro original (cada condición existente queda en su propio grupo, así el OR-entre-grupos reproduce el OR-plano antiguo).

### Desde el punto de vista del Player (Webapp)

- No hay cambios visuales. Sí hay un fix importante:
- **Antes**: si al completar un reto terminaba simultáneamente la Misión *y* la Aventura (porque la condición OR de la Aventura se cumplía con ese mismo reto), el Player veía el feedback de Misión + objetos, pero la ceremonia de fin de Aventura no aparecía hasta minutos después (dependía de un polling interno cada ~3 minutos).
- **Ahora**: la ceremonia de fin de Aventura se encadena inmediatamente después de la de fin de Misión, sin esperas.

## 3. PREREQUISITOS DEL USUARIO

- Game Master con una Aventura creada. No requiere configuración adicional ni tokens.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Finalización de Aventura con AND/OR

1. Ir a Aventuras → abrir la Aventura.
2. Bajar al bloque **"Condiciones de Finalización de la Aventura"**.
3. Las aventuras antiguas aparecen con sus condiciones repartidas en un grupo por condición (preservando el OR antiguo). Las aventuras nuevas arrancan con un **Grupo 1** vacío.
4. Dentro de un grupo, seleccionar un tipo de condición del desplegable (ej. "Si han transcurrido el siguiente número de segundos"), rellenar el valor (ej. 600) y pulsar **"+ Añadir"**. Se guarda automáticamente.
5. Añadir más condiciones al mismo grupo si quieres obligar que *todas* se cumplan (AND).
6. Para ofrecer una alternativa (OR), pulsar **"+ Añadir nuevo grupo OR"** al final. Aparece un nuevo grupo precedido por el separador **"O BIEN"**.
7. Para editar una condición, pulsar el icono azul del lápiz en su fila. Se carga en el formulario del grupo al que pertenece.
8. Para eliminar un grupo entero, pulsar el botón rojo **"Eliminar grupo"** en su cabecera. Solo se permite si hay más de un grupo.

### Flujo Gamifier — Finalización de Misión con AND/OR

Idéntico al anterior pero en la pantalla de edición de Misión, en el bloque **"Condiciones de Finalización de la Misión"**. Los tipos de condición disponibles son los propios de Misión (retos finalizados, puntos de jugador, puntos de clan, tiempo transcurrido).

### Flujo Gamifier — Obtención de Objetos de Misión con AND/OR

Idéntico pero en la pantalla de edición del **Objeto de Misión**, bloque **"Condiciones de Obtención de esta Recompensa"**. Los tipos son los específicos de objetos de Misión (puntos de la Misión, tiempo en la Misión, máximo N recompensas, Siempre / Nunca).

### Flujo Gamifier — Obtención de Objetos de Reto con AND/OR

Idéntico pero en la pantalla de edición del **Objeto de Reto**, bloque **"Condiciones de Obtención de esta Recompensa"**. Incluye tipos propios de P/R (ha acertado, no ha acertado, respuesta concreta).

### Flujo Webapp — Fin de Misión + fin de Aventura en el mismo reto

1. El Player completa un Reto.
2. Se muestra el feedback del Reto (aciertos, puntos).
3. Inmediatamente después, la animación de fin de Misión (cohete + estadísticas).
4. Si la Misión tiene objetos y el Player los ha ganado, carrusel de objetos de Misión.
5. **Nuevo**: si en ese mismo momento también se ha cumplido alguna condición de fin de Aventura, al pulsar "Continuar" ya **no** se vuelve al listado de misiones: se encadena directamente la animación épica de fin de Aventura.
6. Si la Aventura tiene objetos y el Player los ha ganado, botón "Objetos obtenidos" + carrusel.
7. Al terminar, se vuelve al listado con la Aventura marcada como finalizada.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Edición de Aventura → bloque "Condiciones de Finalización de la Aventura" con 2 grupos y separador "O BIEN" → Nombre: `aventuras/finalizacion-aventura-grupos.png`
- [GAMIFIER] Edición de Misión → bloque "Condiciones de Finalización de la Misión" con 1 grupo y 2 condiciones AND → Nombre: `aventuras/finalizacion-mision-grupos.png`
- [GAMIFIER] Edición de Objeto de Misión → bloque de condiciones con grupos → Nombre: `objetos/obtencion-objeto-mision-grupos.png`
- [GAMIFIER] Edición de Objeto de Reto → bloque de condiciones con grupos → Nombre: `objetos/obtencion-objeto-reto-grupos.png`
- [GAMIFIER] Botón "+ Añadir nuevo grupo OR" (detalle) → Nombre: `aventuras/boton-anadir-grupo-or.png`
- [GAMIFIER] Modal de confirmación al eliminar un grupo → Nombre: `aventuras/eliminar-grupo-confirmacion.png`
- [WEBAPP] Encadenado fin Misión → fin Aventura (si se puede capturar la transición) → Nombre: `webapp/encadenado-fin-mision-aventura.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/` (principal) + referencias cruzadas desde `docs/misiones/` y `docs/objetos/`.
- **Nombre del archivo:** `condiciones-and-or.md`
- **sidebar_position sugerido:** después de la página existente de "objetos-digitales-aventura".
- **Tags sugeridos:** `condiciones`, `aventura`, `mision`, `objetos`, `and-or`, `grupos`.
- **¿Es página nueva o actualización?** **Nueva** página transversal que explica la mecánica AND/OR aplicada a las 4 secciones. Además, las páginas existentes de "Finalización de Aventura", "Finalización de Misión", "Objetos de Misión" y "Objetos de Reto" deben **actualizarse** con una nota que enlace a la nueva página y mencione que ahora admiten grupos.

## 7. NOTAS TÉCNICAS

- **Retrocompatibilidad total**: aventuras publicadas antes de 2026-04-22 siguen comportándose exactamente igual. La migración SQL (`ALTER TABLE ... ADD COLUMN grupo_id INT NOT NULL DEFAULT 1` + `UPDATE ... SET grupo_id = id`) coloca cada condición preexistente en su propio grupo, de modo que el OR-entre-grupos reproduce el OR-plano antiguo.
- **Default sin condiciones** (preservado):
  - Una Aventura sin condiciones configuradas sigue finalizando cuando se acaban todas sus Misiones.
  - Una Misión sin condiciones configuradas sigue finalizando cuando se completan todos sus Retos.
- **Límite práctico**: dentro de un mismo grupo no se puede añadir dos veces el mismo tipo de condición (el desplegable los filtra automáticamente). Entre grupos sí.
- **Edición en vivo**: los cambios se persisten al backend en cuanto se pulsa "+ Añadir", "Guardar" (edición) o "Eliminar" — no hay un botón de "Guardar todo" general.
- **Sobre la webapp**: el fix del encadenado solo cubre el flujo sin `FakeCall` (llamadas intermedias). Si una Misión tiene llamadas configuradas, la ceremonia de Aventura sigue disparándose pero tras la(s) llamada(s) (comportamiento aceptable).
