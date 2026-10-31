---
feature_name: Cambiar el estado de la Aventura desde el listado y guardado automático del estado
date: 2026-10-30
components: [API] [GAMIFIER]
docusaurus_path: docs/aventuras/publicar-aventura.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Publicar y despublicar Aventuras desde el listado, con guardado automático del estado
- **Descripción:** El estado de una Aventura (Draft o Published) ya se puede cambiar directamente desde el listado de Aventuras, y también desde el editor sin tener que pulsar «Guardar aventura»: el cambio se guarda al momento y una ventana confirma el resultado o explica qué condiciones impiden publicarla.
- **Componentes afectados:** API (v4.66.0), Gamifier (v4.72.0). La Webapp del Player no cambia.
- **Fecha de despliegue:** 2026-10-30

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- **Cambiar el estado desde el listado de Aventuras.** La columna **Estado** del listado ya no es una etiqueta fija: es un desplegable con las opciones **DRAFT** y **PUBLISHED**. Al elegir una opción, el cambio se guarda al instante, sin entrar en el editor.
- **Cambiar el estado desde el editor sin pulsar «Guardar aventura».** En el editor de la Aventura, al cambiar el campo **Estado** la Aventura se guarda automáticamente.
  - **Importante:** ese guardado automático guarda **toda la Aventura**, es decir, también cualquier otro cambio que haya en ese momento en el formulario (fechas, textos, etc.). La ventana de confirmación lo indica.
- **Saber al momento si se ha publicado o no.** Tanto en el listado como en el editor aparece una ventana emergente:
  - **Si se ha podido cambiar:** ventana de éxito «Estado actualizado» con el estado nuevo (en el listado incluye el título de la Aventura).
  - **Si NO se ha podido publicar:** ventana de aviso «No se ha podido publicar la Aventura» con la **lista de todas las condiciones que no cumple** (no solo la primera). El estado vuelve a **DRAFT** automáticamente.
- **Despublicar (volver a DRAFT)** desde el listado o desde el editor, igual que antes pero sin pulsar «Guardar aventura». Volver a Draft no tiene condiciones.

### Condiciones para poder publicar (las mismas que ya existían)

Para pasar una Aventura de **Draft** a **Published** debe cumplir todas estas condiciones. Si falla alguna, la ventana de aviso muestra el texto correspondiente:

| Condición | Mensaje que ve el usuario si no se cumple |
|---|---|
| Tener una Licencia asignada | «No tiene ninguna Licencia asignada.» |
| Que la Licencia no haya caducado | «Su Licencia ha caducado.» |
| Que su propietario tenga Tokens disponibles (no aplica a Aventuras con Plan Luna o Plan Mundo) | «Su propietario no tiene Tokens disponibles.» |
| No ocupar más espacio del que permite su Licencia | «Ocupa más espacio del que permite su Licencia.» |

### Corrección incluida

Una Aventura con una **Licencia recién asignada** (que todavía no había empezado a contar su periodo) a veces no se dejaba publicar, como si la Licencia estuviera caducada. Ahora se publica sin problemas y el periodo de la Licencia empieza a contar en ese momento, como indica el manual.

### Desde el punto de vista del Player (Webapp)

- Sin cambios. La Aventura pasa a estar disponible para los Players en el mismo momento en que se publica, como hasta ahora.

## 3. PREREQUISITOS DEL USUARIO

- Tener al menos una Aventura creada.
- Para publicar: que la Aventura cumpla las condiciones de la tabla anterior (Licencia vigente asignada, Tokens disponibles o Plan Luna/Mundo, y espacio dentro del límite de la Licencia).

## 4. FLUJOS PASO A PASO

### Flujo Gamifier A: publicar desde el listado de Aventuras

1. En el menú lateral del Gamifier, entra en **Aventuras** (listado).
2. Localiza la Aventura y, en la columna **Estado**, abre el desplegable (muestra **DRAFT**).
3. Selecciona **PUBLISHED**.
4. Mientras se guarda aparece un pequeño indicador de carga junto al desplegable.
5. Resultado:
   - Si cumple las condiciones: ventana «Estado actualizado» → «La Aventura «[título]» está ahora en estado PUBLISHED.». Pulsa **OK**. El desplegable queda en **PUBLISHED**.
   - Si no las cumple: ventana «No se ha podido publicar la Aventura» con la lista de condiciones que fallan. Pulsa **OK**. El desplegable vuelve a **DRAFT**.

### Flujo Gamifier B: despublicar desde el listado

1. En el listado, en la columna **Estado** de una Aventura publicada, selecciona **DRAFT**.
2. Ventana «Estado actualizado» → «La Aventura «[título]» está ahora en estado DRAFT.».

### Flujo Gamifier C: publicar desde el editor (guardado automático)

1. Entra en **Aventuras** y haz clic en la Aventura para abrir el editor.
2. En el campo **Estado** (debajo de las fechas), abre el desplegable y elige **published**.
3. **No hace falta pulsar «Guardar aventura»**: la Aventura se guarda sola en ese momento.
4. Resultado:
   - Éxito: ventana «Estado actualizado» → «La Aventura está ahora en estado PUBLISHED. También se han guardado el resto de cambios del formulario.».
   - Bloqueo: ventana «No se ha podido publicar la Aventura» con la lista de condiciones que fallan; el campo **Estado** vuelve a **draft**. El resto de cambios del formulario sí quedan guardados.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Listado de Aventuras con el desplegable de la columna Estado abierto (opciones DRAFT / PUBLISHED) → Nombre sugerido: `aventuras/listado-estado-desplegable.png`
- [GAMIFIER] Listado tras publicar con éxito, con la ventana «Estado actualizado» → Nombre: `aventuras/listado-estado-publicada-ok.png`
- [GAMIFIER] Listado al intentar publicar una Aventura que no cumple las condiciones, con la ventana «No se ha podido publicar la Aventura» y la lista de motivos → Nombre: `aventuras/listado-estado-publicacion-bloqueada.png`
- [GAMIFIER] Editor de la Aventura tras cambiar el campo Estado, con la ventana «Estado actualizado» (guardado automático) → Nombre: `aventuras/editor-estado-autoguardado.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `publicar-aventura.md`
- **sidebar_position sugerido:** 3 (se mantiene el actual)
- **Tags sugeridos:** aventura, publicar, published, draft, estado, listado, licencia, tokens, espacio
- **¿Es página nueva o actualización?** Actualización

**Partes de la página actual que quedan desactualizadas y hay que reescribir:**

- Sección «Cómo publicar una Aventura» → «Paso a paso»: dice que al seleccionar **published** el cambio «aún no se ha guardado» y que hay que pulsar **Guardar aventura**. Ahora se guarda solo y aparece una ventana de confirmación. Añadir también la vía del **listado de Aventuras**.
- Aviso «Recuerda guardar»: ya no aplica (sigue siendo cierto que no hay diálogo de confirmación previo: se publica en cuanto se elige la opción).
- Sección «Despublicar una Aventura»: dice que «el cambio requiere pulsar Guardar aventura». Ya no hace falta; también se puede hacer desde el listado.
- Añadir una sección nueva «¿Por qué no se ha podido publicar?» con la tabla de condiciones y mensajes del apartado 2.
- El aviso «No hay validación automática» sigue siendo correcto **en cuanto al contenido** (Misiones, Retos, textos), pero conviene matizar que sí se comprueban Licencia, Tokens y espacio.

**Otras páginas que mencionan el guardado del estado** (revisar coherencia): `docs/aventuras/configuracion.md` (fila «Estado» de la tabla de configuración) y `docs/aventuras/publicacion-fechas.md`.

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

- Al publicar desde el **editor**, el guardado automático guarda el formulario **completo**: si el usuario tenía otros cambios a medio hacer, también se guardan. Conviene avisarlo en el manual.
- Si la publicación se bloquea desde el editor, el estado vuelve a Draft, pero **el resto de cambios del formulario sí se han guardado**.
- El periodo de la Licencia empieza a contar en el momento de publicar (sin cambios respecto a lo que ya explica el manual), tanto si se publica desde el listado como desde el editor.
- El desplegable del listado lo tienen los mismos usuarios que ya podían cambiar el estado desde el editor. La página actual dice «Solo el Game Master puede cambiar el estado»; **verificar en el Gamifier** si un Game Designer asignado también ve el campo Estado antes de mantener esa frase.
- Si una Aventura está eliminada, su desplegable del listado aparece desactivado.
