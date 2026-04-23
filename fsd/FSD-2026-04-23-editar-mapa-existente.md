---
feature_name: Editar Mapa existente de Aventura o Misión
date: 2026-04-23
components: [API] [GAMIFIER]
docusaurus_path: docs/aventuras/mapa-de-aventura.md
---

## 1. RESUMEN DE LA FEATURE
- **Nombre:** Editar Mapa existente de Aventura o Misión
- **Descripción:** Ahora puedes modificar el Mapa de una Aventura o de una Misión sin necesidad de eliminarlo y crearlo desde cero. Puedes reemplazar la imagen (subiendo otra o eligiéndola desde la Biblioteca de medios), renombrar el identificador o actualizar los datos GPS.
- **Componentes afectados:** API, Gamifier
- **Fecha de despliegue:** 2026-04-23

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)
- Reemplazar la imagen del Mapa de una Aventura sin eliminar el mapa. Se conserva el identificador y el tipo.
- Reemplazar la imagen del Mapa de una Misión sin eliminar el mapa.
- Elegir la nueva imagen desde la Biblioteca de medios del Aventura (en vez de tener que subirla de nuevo).
- Renombrar el identificador de un Mapa ya creado.
- Actualizar los datos de un Mapa GPS (dirección, latitud, longitud, altitud) de una Aventura sin borrar y rehacer el mapa.
- Guardar los cambios con el nuevo botón **Guardar cambios**.

### Desde el punto de vista del Player (Webapp)
- No hay cambios visibles: seguirá viendo el Mapa actualizado cuando abra la Aventura o la Misión.

## 3. PREREQUISITOS DEL USUARIO
- Tener una Aventura o una Misión con un Mapa ya creado y asociado.
- Para reemplazar desde la Biblioteca, haber subido previamente algún fichero de imagen a la Biblioteca de medios de esa Aventura.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Reemplazar la imagen del Mapa de una Aventura
1. Ir a **Aventuras** → seleccionar una Aventura con Mapa → scroll hasta el bloque **Mapa**.
2. Junto a la miniatura actual de la imagen aparecen ahora dos botones:
   - **Cambiar imagen** — abre el selector de ficheros para subir una nueva.
   - **Biblioteca** — abre la Biblioteca de medios de la Aventura para elegir una existente.
3. Al elegir o subir, la imagen se reemplaza automáticamente. Verás una barra de progreso si se está subiendo.
4. Al terminar aparece un mensaje "Mapa actualizado" y la miniatura se refresca.

### Flujo Gamifier — Renombrar el identificador de un Mapa
1. Abrir el bloque **Mapa** de la Aventura o Misión.
2. Editar el campo **Identificador** (ya no está bloqueado).
3. Pulsar **Guardar cambios**.

### Flujo Gamifier — Actualizar un Mapa GPS
1. Abrir el bloque **Mapa** de la Aventura con tipo GPS.
2. Editar **Dirección**, **Latitud**, **Longitud** o **Altitud** (también se puede arrastrar el marcador de Google Maps para reposicionar).
3. Pulsar **Guardar cambios**. El mapa se recalcula y persiste.

## 5. PANTALLAS PARA CAPTURAR
- [GAMIFIER] Bloque Mapa de una Aventura con imagen — estado inicial mostrando botones "Cambiar imagen", "Biblioteca", "Guardar cambios" y "Eliminar Mapa" → Nombre sugerido: `aventuras/mapa-aventura-editar-botones.png`
- [GAMIFIER] Mismo bloque tras pulsar "Biblioteca" — Media Library picker abierto → Nombre: `aventuras/mapa-aventura-editar-biblioteca.png`
- [GAMIFIER] Mismo bloque mientras se sube una imagen nueva (barra de progreso visible) → Nombre: `aventuras/mapa-aventura-editar-progreso.png`
- [GAMIFIER] Bloque Mapa de tipo GPS con campos editables y botón "Guardar cambios" → Nombre: `aventuras/mapa-aventura-editar-gps.png`
- [GAMIFIER] Bloque Mapa de una Misión (con imagen) — análogo al de Aventura → Nombre: `misiones/mapa-mision-editar-botones.png`

## 6. UBICACIÓN EN DOCUSAURUS
- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `mapa-de-aventura.md` (actualizar si ya existe; alternativamente crear sección nueva `editar-mapa.md`)
- **sidebar_position sugerido:** dentro de la sección de Aventura, junto a las páginas de configuración
- **Tags sugeridos:** aventura, misión, mapa, edición, biblioteca de medios
- **¿Es página nueva o actualización?** Actualización (la página del Mapa debía documentar solo crear/eliminar; añadir la sección "Editar Mapa")

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)
- **No se permite cambiar el tipo de mapa** (Imagen ↔ GPS) en un mapa ya creado. Si necesitas cambiar el tipo, elimínalo y vuelve a crearlo. Esta limitación es intencional: reconvertir el contenido entre formatos es propenso a errores.
- El reemplazo de imagen sustituye de forma inmediata la referencia en el Mapa; los jugadores que abran la Aventura o la Misión verán la nueva imagen en cuanto abran la pantalla.
- La validación del nombre de fichero (solo letras y números, sin espacios) sigue aplicándose igual que al crear por primera vez.
