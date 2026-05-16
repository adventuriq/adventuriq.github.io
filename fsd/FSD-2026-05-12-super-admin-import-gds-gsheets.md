---
feature_name: Super Admin — Pestaña Game Designers + Importación masiva desde Google Sheets
date: 2026-05-12
components: [API] [GAMIFIER]
docusaurus_path: docs/super-admin/import-game-designers-gsheets.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Pestaña "Game Designers" en el detalle de Game Master del Super Admin + asistente de importación masiva de Game Designers desde una Google Sheet.
- **Descripción:** El Super Admin (Magic Mike) ya podía gestionar contratos, licencias y tokens de cada Game Master desde Super Admin Tools. Con esta entrega también puede **ver y gestionar la plantilla de Game Designers vinculados a cada Game Master** y, sobre todo, **importarlos en bloque desde una Google Sheet**. El asistente, en cinco pasos, lee la hoja, marca para cada fila qué va a hacer (crear nuevo, promocionar un Player existente a Game Designer, re-vincular un GD ya existente o saltar usuarios con rol Game Master / Administrador), y permite emitir opcionalmente, para cada usuario importado, una **licencia de Game Designer** y/o una **licencia de Aventura + Aventura dummy** (modo Individual, en borrador, con el GD como creador) heredando la fecha de caducidad del contrato Mundo o Luna más reciente activo del GM. Todo queda registrado en la auditoría del Super Admin.
- **Componentes afectados:** API (v4.31.0 → v4.33.1), Gamifier (v4.40.0 → v4.42.7). La Webapp del Player no cambia.
- **Fecha de despliegue:** 2026-05-12

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Super Admin (Gamifier)

**Listado de Game Masters más completo**
- En "Super Admin Tools → Contratos y Licencias" el listado de Game Masters incluye dos columnas adicionales:
  - **Lic. GD** — número de licencias de Game Designer activas que tiene el GM (badge azul, "—" si no tiene).
  - **GDs** — número de Game Designers vinculados al GM (badge verde, "—" si no tiene).
- Permite ver de un vistazo la plantilla y la capacidad contratada de cada cliente sin tener que abrir el detalle.

**Pestaña "Game Designers" en el detalle del GM**
- Dentro del detalle de un Game Master aparece una nueva pestaña **Game Designers** entre "Licencias Game Designer" y "Tokens".
- Lista exactamente los mismos Game Designers que vería el propio GM en su sección "Mis Game Designers", con la misma estética:
  - Tabla `ui-grid` con columnas: User Id, Acciones (botón editar), Avatar, Nickname, Nombre, e-mail, Fecha Alta, Último Login.
  - Filtros nativos por columna (cabecera con campo de texto + asterisco como comodín).
  - Paginación 8/16/32/64 (defecto 8).
  - Ordenación clicando cabeceras.
  - Doble-click en una fila o botón de Acciones → abre el formulario de edición del Game Designer (ruta `/gamedesigner/{id}`).
  - Exportador CSV / PDF desde el menú de la grid.

**Botón "Importar GDs desde GSheets"**
- En la cabecera de la pestaña, a la derecha, hay un botón verde **"Importar GDs desde GSheets"** (icono cloud_upload). Abre un asistente modal de 5 pasos.

**Asistente de importación — 5 pasos**

1. **Paso 1 — Enlace a la Google Sheet**
   - Pega la URL completa de la hoja (o solo el ID). El asistente detecta el ID en tiempo real y lo muestra como `ID detectado: 1jK_VTO3...`.
   - La hoja debe estar **compartida con la cuenta de servicio** de AdventuriQ (la misma que ya usa la importación de Players desde Google Sheets).
   - Recuadro azul explicando el formato esperado: 5 columnas (`A=nickname` opcional, `B=nombre`, `C=apellido` opcional, `D=email`, `E=password`). La fila 1 se trata como cabecera y se ignora.
   - Botón **"Verificar acceso"** lee la hoja en modo solo-preview (sin escribir en BD) y avanza al paso 2.

2. **Paso 2 — Revisar filas**
   - Tabla con todas las filas leídas. Por cada fila:
     - Número de fila en la hoja, nickname (con etiqueta `(auto)` si llegará autogenerado), nombre, email, **acción prevista** con badge de color:
       - **Crear** (verde): el email no existe en BD, se creará nuevo usuario con rol Game Designer.
       - **Promocionar** (azul): el email pertenece a un Player; se le sube el rol a Game Designer y se vincula a este GM.
       - **Re-vincular** (morado): el email ya es Game Designer (en cualquier GM); se añade un vínculo a este GM sin duplicar el usuario.
       - **Omitir** (gris): el email pertenece a un Game Master o Administrador, se salta por seguridad.
       - **Inválida** (rojo): falta nombre, email malformado, password vacío o email duplicado dentro de la propia hoja.
   - Contadores arriba: válidas / inválidas / totales. A la derecha, el contrato vigente del GM si lo tiene (tipo, plan, fecha de caducidad).
   - Si no hay ninguna fila válida, el botón "Siguiente" queda deshabilitado.

3. **Paso 3 — Opciones de emisión**
   - Dos tarjetas grandes, independientes (puedes activar las dos, una o ninguna):
     - **Generar licencias de Game Designer** (azul, icono headset_mic): una licencia de GD asignada a cada usuario importado, con caducidad = la del contrato Mundo/Luna más reciente activo del GM.
     - **Generar licencia de Aventura + Aventura dummy** (verde, icono card_membership): para cada usuario importado crea una Aventura nueva en modo borrador (idioma por defecto `es`, fechas inicio=hoy / fin=caducidad del contrato, título "Aventura de {nickname}", descripción placeholder) y emite una licencia de Aventura (modo Individual) bajo el contrato vigente del GM, con la Aventura recién creada como destino. El GD queda como `creator_id` y el GM como `propietario_id`, así que el GD puede editar la Aventura desde el primer momento.
   - Al activar/desactivar, la tarjeta muestra borde grueso de color, fondo tintado y un icono `check_circle` en la esquina superior derecha.
   - Si activas al menos una opción y el GM **no tiene contrato Mundo o Luna activo**, aparece un bloque rojo "**El Game Master no tiene ningún contrato Luna o Mundo activo. Crea uno antes de emitir licencias.**" y el botón Siguiente queda deshabilitado.
   - Si no activas ninguna opción, se muestra un aviso informativo: solo se crearán los usuarios + rol + vínculo al GM, sin licencias ni Aventuras (caso útil para preparar plantillas en seco).

4. **Paso 4 — Confirmación**
   - Resumen humano-legible: "Se importarán X usuarios. Se emitirán Y licencias GD (caducidad ...). Se generarán Z Aventuras dummy + licencias Aventura (caducidad ...)."
   - Aviso amarillo: "Esta operación no se puede deshacer automáticamente. Cada cambio queda registrado en la auditoría del Super Admin."
   - Botón **"Importar"** ejecuta la operación.

5. **Paso 5 — Resultado**
   - Cuatro tarjetas con contadores agregados: **Creados** (verde), **Promocionados** (azul), **Re-vinculados** (morado), **Omitidos** (naranja).
   - Tres tarjetas con totales: **Licencias GD emitidas**, **Licencias Aventura emitidas**, **Aventuras creadas**.
   - Tabla detalle por fila con el outcome, el ID de usuario asignado, IDs de la licencia GD, la licencia Aventura y la Aventura dummy si aplican.
   - Botón **"Cerrar"** cierra el modal y refresca el grid del tab para ver los GDs recién importados.

**Auditoría**
- Cada importación deja en `auditoria_super_admin`:
  - **1 entrada agregada** `IMPORT_GDS_BATCH` con el `gsheet_id`, las opciones marcadas, el contrato vigente y los contadores totales.
  - **1 entrada por fila procesada**: `CREATE_GD`, `UPGRADE_PLAYER_TO_GD`, `RELINK_GD` o `SKIP_PRIVILEGED`. El payload incluye los IDs generados (usuario, licencia GD, licencia Aventura, Aventura dummy).

### Desde el punto de vista del Game Master, Game Designer o Player
- **Sin cambios visibles directos**. Pero:
  - Los Game Designers que el Super Admin acabe de añadirles aparecen ya en su lista de "Mis Game Designers" sin necesidad de configurar nada.
  - Las Aventuras dummy generadas aparecen en el listado del GD como "Aventuras de las que soy propietario", listas para editar título, descripción, misiones, etc.
  - Las licencias de Aventura asociadas funcionan exactamente igual que cualquier otra licencia bajo contrato Mundo/Luna: tokens ilimitados al jugar y consumo del cupo de espacio del contrato.

## 3. PREREQUISITOS DEL USUARIO

- Estar identificado como **Super Admin** (`usuario_id = 1`). El resto de roles ni siquiera ve la sección.
- Tener una **Google Sheet** con el formato esperado (5 columnas: nickname opcional, nombre, apellido opcional, email, password) **compartida con la cuenta de servicio** de AdventuriQ (la misma cuenta de servicio que ya se usa para importar Players).
- Para emitir licencias durante la importación, el Game Master destino debe tener un **contrato Mundo o Luna activo** (estado `ACTIVO` y no caducado). De lo contrario el paso 3 bloquea las opciones de licencias; la importación seca (solo usuarios + rol + vínculo) sigue siendo posible.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Importar un equipo de Game Designers para un Game Master

1. Entrar en el Gamifier como Super Admin (`usuario_id = 1`).
2. Sidebar → **Super Admin Tools** → **Contratos y Licencias**.
3. Localizar el Game Master en la tabla (o buscarlo). Verificar en las columnas **Lic. GD** y **GDs** la plantilla actual.
4. Clicar **Detalle** en la fila del Game Master.
5. Abrir la pestaña **Game Designers**. Ver el listado actual paginado, ordenable y filtrable.
6. Pulsar el botón verde **"Importar GDs desde GSheets"** arriba a la derecha del tab.
7. **Paso 1**: Pegar la URL de la Google Sheet y pulsar **"Verificar acceso"**.
8. **Paso 2**: Revisar la lista. Comprobar que las acciones previstas son las esperadas. Las filas inválidas (rojas) no se importarán.
9. **Paso 3**: Activar (o no) las dos opciones de emisión de licencias. Si el GM no tiene contrato vigente, las dejará bloqueadas con aviso rojo.
10. **Paso 4**: Confirmar el resumen y pulsar **"Importar"**.
11. **Paso 5**: Revisar el resultado y cerrar.
12. El grid del tab Game Designers se refresca automáticamente con los nuevos GDs. Las Aventuras dummy quedan en estado borrador y los GDs ya pueden entrar a editarlas.

### Flujo Gamifier — Editar un Game Designer concreto desde el Super Admin

1. Super Admin Tools → Detalle del Game Master → pestaña Game Designers.
2. Click en el botón Acciones (lápiz) de la fila o doble-click sobre la fila.
3. Navega a `/gamedesigner/{id}` con el formulario de edición habitual (mismo que ve el propio GM).

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Listado de Game Masters con las columnas **Lic. GD** y **GDs** visibles → `super-admin/contratos-licencias-listado-gm-con-gds.png`.
- [GAMIFIER] Detalle de un Game Master, pestaña **Game Designers** con el grid lleno → `super-admin/gm-detail-tab-game-designers.png`.
- [GAMIFIER] Wizard de importación, **Paso 1** con URL pegada y el `ID detectado` visible → `super-admin/import-gds-step1.png`.
- [GAMIFIER] Wizard, **Paso 2** con preview de filas y badges de acciones previstas → `super-admin/import-gds-step2-preview.png`.
- [GAMIFIER] Wizard, **Paso 3** con las dos opciones activas (tarjetas con check_circle) y la caja verde de caducidad calculada → `super-admin/import-gds-step3-opciones.png`.
- [GAMIFIER] Wizard, **Paso 3** con el bloqueo rojo "Sin contrato activo" → `super-admin/import-gds-step3-sin-contrato.png`.
- [GAMIFIER] Wizard, **Paso 4** confirmación → `super-admin/import-gds-step4-confirm.png`.
- [GAMIFIER] Wizard, **Paso 5** resultado con contadores y tabla detalle → `super-admin/import-gds-step5-resultado.png`.

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/super-admin/`
- **Nombre del archivo:** `import-game-designers-gsheets.md`
- **sidebar_position sugerido:** 4 (después de la página general de Super Admin Tools, contratos y licencias)
- **Tags sugeridos:** `super-admin`, `game-designers`, `google-sheets`, `import`, `licencias`, `aventura-dummy`, `auditoria`
- **¿Es página nueva o actualización?** Nueva.

## 7. NOTAS TÉCNICAS

- **Formato de la Google Sheet**: 5 columnas en orden estricto. Solo el **email** y la **password** son obligatorios y deben ser válidos (email con formato correcto, password no vacía). El **nickname** y el **apellido** son opcionales: si no se rellenan, el sistema autogenera el nickname con el generador de nombres ya usado en otras partes del backend, y el nombre queda solo con la columna de nombre. Si nickname existe y choca con otro nickname en BD, se le añade un sufijo `_NNNNNN` para mantenerlo único.
- **Duplicados en la propia hoja**: si dos filas comparten email, solo la primera se procesa; la segunda se marca como inválida.
- **Detección por email**: el árbol de decisiones se ejecuta tras buscar al usuario por email exacto. Comportamiento garantizado:
  - Email nuevo → CREATE_GD (crea usuario con rol Game Designer, hash de password con el mismo `encryptPassword()` que el registro estándar, authtoken nuevo, avatar placeholder copiado al disco).
  - Email existente con rol PLAYER → UPGRADE_PLAYER_TO_GD (UPDATE en `usuario_has_role` de role 4 → 3, sin duplicar filas).
  - Email existente con rol GAME DESIGNER → RELINK_GD (solo añade fila a `usuario_has_gamemaster` si no existe ya el vínculo a este GM; multi-GM permitido).
  - Email existente con rol GAME MASTER o ADMIN → SKIP_PRIVILEGED, no se toca nada.
- **Caducidad heredada**: el sistema usa el contrato Mundo o Luna activo MÁS RECIENTE del GM (orden por `fecha_alta DESC`). Si el GM tiene a la vez un Luna y un Mundo activos, el más reciente es el que decide la caducidad heredada.
- **Aventura dummy**: se crea con `borrador = 1` (no aparece como publicada), `idioma_defecto = 'es'`, sin login ni código requeridos, gamepin nuevo único (9 dígitos), `time_zone = 'Europe/Madrid'`. Solo crea la traducción en `es`; cualquier otro idioma se añade después editando manualmente.
- **Licencia de Aventura emitida**: queda asignada (`fk_aventuraid = id_aventura_dummy`), modo Individual, tipo de licencia 13 (default consistente con `emitLicenciaLuna` / `emitLicenciaMundo`), `tipo_facturacion` heredado del contrato (LUNA o MUNDO), `woo_order_id = -999` para diferenciar las licencias emitidas vía Super Admin de las compradas en WooCommerce.
- **Auditoría**: una importación de N filas deja 1 + N entradas en `auditoria_super_admin` (1 batch + 1 por fila), con payloads en JSON que incluyen todos los IDs creados para poder reconstruir la operación si fuera necesario.
- **Endpoint nuevo accesible para visualización**: `GET /admin/gamemaster/{id}/gamedesigners` devuelve los GDs vinculados al GM concreto, equivalente al endpoint `/gamemaster/{id}/linkedusers` que ya usaban los Game Masters para su propio listado, pero protegido con `abortIfNotSuperAdmin`.
- **Limitación conocida**: si el Super Admin importa la misma Google Sheet dos veces seguidas, la segunda pasada marcará todos los emails ya importados como `RELINK_GD` (no creará usuarios duplicados). Las licencias GD y Aventuras dummy SÍ se crean otra vez si las opciones están marcadas — diseñado así adrede para permitir múltiples licencias/Aventuras por GD si se quiere.
- **Sin BD migration**: la feature reutiliza tablas existentes (`usuario`, `usuario_has_role`, `usuario_has_gamemaster`, `licencia_gamedesigner`, `licencia_aventura`, `evento`, `evento_translation`, `contrato_tarifa_plana`, `auditoria_super_admin`). No hay nuevas columnas ni nuevas tablas.
