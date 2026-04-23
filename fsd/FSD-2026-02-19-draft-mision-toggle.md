---
feature_name: Marcar Misiones como Borrador desde el listado
date: 2026-02-19
components: [API] [GAMIFIER]
docusaurus_path: docs/misiones/borrador-mision.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Toggle de Borrador en la tabla de Misiones
- **Descripción:** Dentro del listado de Misiones de una Aventura, ahora puedes marcar o desmarcar una Misión como Borrador con un solo clic en un interruptor. No hace falta entrar a la edición de la Misión. Los cambios se guardan al instante y recibes un aviso visual de confirmación.
- **Componentes afectados:** API, Gamifier
- **Fecha de despliegue:** 2026-02-19

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Activar o desactivar el modo Borrador de cualquier Misión directamente desde la tabla de Misiones de la Aventura.
- Ver un aviso visual de confirmación cuando el cambio se ha guardado correctamente.
- Recibir un aviso de error (y que el interruptor vuelva a su estado anterior) si por cualquier motivo el cambio no se pudo guardar.

## 3. PREREQUISITOS DEL USUARIO

- Tener una Aventura con al menos una Misión creada.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Marcar una Misión como Borrador

1. Entra en Aventuras y abre la Aventura.
2. Desplázate al bloque de Misiones.
3. En la columna **"Borrador"** de la Misión, pulsa el interruptor.
4. Aparece un aviso de confirmación ("Borrador actualizado"). El interruptor se queda en la nueva posición.

### Flujo Gamifier — Volver a publicar una Misión

1. En la tabla de Misiones, pulsa el interruptor de **"Borrador"** para ponerlo en off.
2. La Misión deja de ser borrador y vuelve a estar disponible para los Players en la Aventura.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Tabla de Misiones con la columna "Borrador" visible — mezcla de Misiones en borrador y publicadas → Nombre: `misiones/tabla-borrador-columna.png`
- [GAMIFIER] Detalle del interruptor (iOS switch) en on y en off → Nombre: `misiones/borrador-toggle-detalle.png`
- [GAMIFIER] Aviso (toast) de "Borrador actualizado" tras el cambio → Nombre: `misiones/borrador-toast-ok.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/misiones/`
- **Nombre del archivo:** `borrador-mision.md` (o integrar como sección en la página existente de "Edición de Misiones").
- **sidebar_position sugerido:** cerca de las opciones generales de la Misión.
- **Tags sugeridos:** `misiones`, `borrador`, `publicacion`, `listado`
- **¿Es página nueva o actualización?** Puede ser Actualización de la página "Edición de Misiones" añadiendo una sección sobre el Borrador desde el listado.

## 7. NOTAS TÉCNICAS

- El cambio se persiste al instante: no hay botón "Guardar" para el Borrador.
- Las Misiones en Borrador no son visibles para los Players aunque la Aventura esté publicada.
