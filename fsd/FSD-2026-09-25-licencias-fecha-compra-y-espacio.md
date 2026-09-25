---
feature_name: Licencias de Aventura — fecha de compra y espacio editable
date: 2026-09-25
components: [API] [GAMIFIER]
publicar: no   # Super Admin Tools = interno, ver aviso bajo el frontmatter
docusaurus_path: docs/super-admin/super-admin-tools.md
---

> ## ⛔ NO PUBLICAR — documentación interna
>
> **Decisión de Mike (2026-09-25): las Super Admin Tools NO se documentan en el
> manual público.** Son herramientas internas de un único usuario (el Super
> Admin), no funcionalidad de Game Master ni de Player.
>
> Este FSD se conserva como especificación interna de la feature. **Cowork no
> debe generar ninguna página a partir de él**, y la carpeta
> `docs/super-admin/` no debe crearse. El `docusaurus_path` del frontmatter
> queda como referencia histórica de dónde se habría ubicado.


## 1. RESUMEN DE LA FEATURE

- **Nombre:** Fecha de compra y espacio de la Licencia en el listado de Licencias de Aventura
- **Descripción:** En el listado global de Licencias de Aventura del Super Admin ahora se ve de un vistazo cuándo se compró cada Licencia y cuánto espacio permite a su Aventura, y ese espacio se puede cambiar desde la propia ficha de la Licencia.
- **Componentes afectados:** API (v4.63.0), Gamifier (v4.71.1). La Webapp del Player no cambia.
- **Fecha de despliegue:** 2026-09-25

Esta feature **amplía** la sección "Super Admin Tools" descrita en
`FSD-2026-05-12-super-admin-tools.md`, en concreto la pantalla **Licencias
Aventura** y su ventana de edición. No es una sección nueva del manual.

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Super Admin (Gamifier)

**En el listado de Licencias Aventura**

- Ver la columna **Espacio**: los MB de archivos que esa Licencia permite a su
  Aventura. Cuando el valor es 0 se muestra el símbolo de infinito (∞) con el
  texto "Sin límite" al pasar el ratón por encima.
- Ver la columna **Fecha de compra** de cada Licencia, en formato corto
  (dd/mm/aaaa).
- Las fechas del listado (Fecha de compra y Caducidad) se muestran ahora en
  formato corto. Antes la columna Caducidad mostraba la fecha en crudo, con la
  hora y los segundos (`2021-06-05 23:59:59`).

**En la ficha de la Licencia (botón Editar)**

- Consultar la **Fecha de compra** y la **Fecha de uso** de la Licencia. Son
  datos históricos: se muestran pero no se pueden modificar. Si la Licencia
  todavía no se ha usado, la Fecha de uso aparece como un guion.
- Editar el **Espacio máximo de la Aventura** en MB. El campo admite cualquier
  valor y ofrece tres atajos con los valores más habituales: **75**, **250** y
  **1024**. Guardar con el botón Guardar, como el resto de campos de la ficha.
- Poner **0** para que esa Aventura no tenga ningún límite de espacio.
- Si la Licencia pertenece a un contrato de tarifa plana (Plan Luna o Plan
  Mundo), la ficha muestra un aviso naranja recordando que el límite que se
  aplica de verdad es el del contrato, no el valor de la Licencia.

### Desde el punto de vista del Game Master

No hay cambios en su interfaz. El efecto es indirecto: si el Super Admin le
amplía el espacio de una Licencia, su Aventura deja de estar en riesgo de
despublicación por espacio y vuelve a poder publicarse.

## 3. PREREQUISITOS DEL USUARIO

- Ser **Super Admin**. La sección Super Admin Tools solo la ve ese usuario; al
  resto de roles ni siquiera le aparece en el menú lateral.
- Tener al menos una Licencia de Aventura en el sistema (el listado carga todas
  las del sistema, ya estén asignadas a una Aventura o libres).

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — consultar fecha de compra y espacio

1. Entrar en el Gamifier como Super Admin.
2. En el menú lateral, abrir **Super Admin Tools** → **Licencias Aventura**
   (ruta `#/admin/super-tools/licencias`).
3. El listado muestra, para cada Licencia: Id, Propietario, Aventura,
   Facturación, Modo, **Espacio**, **Fecha de compra**, Caducidad, Estado y
   Acciones.
4. Opcional: usar los filtros por estado de la parte superior (Todas / Activa /
   Caducada / Asignable / Weird) o las cajas de búsqueda de cada columna para
   localizar una Licencia concreta.

### Flujo Gamifier — cambiar el espacio de una Licencia

1. En el listado, pulsar **Editar** en la fila de la Licencia (o pulsar sobre su
   número de Id).
2. Se abre la ficha **Editar Licencia**. En la parte superior, además de la
   Facturación y el Estado calculado, se ven la **Fecha de compra** y la **Fecha
   de uso**.
3. Bajar hasta el campo **Espacio máximo de la Aventura**.
4. Escribir los MB deseados, o pulsar uno de los atajos (75, 250, 1024). Poner
   0 si no se quiere aplicar ningún límite.
5. Pulsar **Guardar**. La ventana se cierra y el listado se recarga con el valor
   nuevo en la columna Espacio.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Listado de Licencias Aventura con las columnas Espacio y Fecha de
  compra visibles (filtro "Todas") → Nombre sugerido:
  `super-admin/licencias-listado-espacio-fecha-compra.png`
- [GAMIFIER] Detalle de una fila con el símbolo ∞ en la columna Espacio (una
  Licencia con el valor a 0) → Nombre sugerido:
  `super-admin/licencias-espacio-sin-limite.png`
- [GAMIFIER] Ficha "Editar Licencia", parte superior, mostrando Fecha de compra
  y Fecha de uso → Nombre sugerido:
  `super-admin/licencia-ficha-fechas.png`
- [GAMIFIER] Ficha "Editar Licencia", campo Espacio máximo de la Aventura con
  los atajos 75 / 250 / 1024 → Nombre sugerido:
  `super-admin/licencia-ficha-espacio-maximo.png`
- [GAMIFIER] Ficha "Editar Licencia" de una Licencia de Plan Luna o Plan Mundo,
  con el aviso naranja del contrato → Nombre sugerido:
  `super-admin/licencia-ficha-aviso-contrato.png`

## 6. UBICACIÓN EN DOCUSAURUS

**Ninguna: no va al manual.** Ver el aviso del principio.

La pregunta que dejó abierta `FSD-2026-05-12-super-admin-tools.md` — si la
sección Super Admin se publica o se queda interna — **está resuelta
(2026-09-25): se queda interna.** La carpeta `docs/super-admin/` nunca llegó a
existir en el árbol y no debe crearse.

El `docusaurus_path` del frontmatter y los nombres de captura de la sección 5
se conservan solo como referencia histórica.

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

- **Qué cuenta como espacio:** los archivos subidos a la Aventura (imágenes,
  audios, vídeos). Es la misma cuota que ya vigilaba el aviso de espacio del
  Game Master y el proceso nocturno de despublicación.
- **El 0 significa "sin límite"**, no "cero megas". Es la forma de dejar una
  Aventura sin tope de espacio.
- **Las Licencias de tarifa plana son la excepción:** en los Planes Luna y
  Mundo el espacio que se aplica es el contratado (y en Mundo se reparte entre
  todas las Aventuras del contrato). Cambiar el valor en la Licencia no altera
  ese límite; por eso la ficha muestra el aviso.
- **Consecuencias de bajar el espacio por debajo de lo ya ocupado:** la Aventura
  pasa a incumplir el criterio de espacio, con lo que no se podrá publicar y, si
  está publicada, el proceso nocturno la despublicará y avisará a su
  propietario. Conviene comprobar el espacio ocupado antes de reducir la cuota.
- **La fecha de compra y la fecha de uso no son editables.** Son el histórico de
  la Licencia: cuándo se emitió y cuándo se vinculó a una Aventura.
