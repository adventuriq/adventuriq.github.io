---
feature_name: Super Admin Tools + Contratos Tarifa Plana (Luna / Mundo)
date: 2026-05-12
components: [API] [GAMIFIER]
docusaurus_path: docs/super-admin/super-admin-tools.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Super Admin Tools — Panel de Control con KPIs, contratos de tarifa plana (Luna/Mundo), gestión global de licencias y auditoría.
- **Descripción:** Se ha añadido al Gamifier una nueva zona de administración global accesible **solo para el Super Admin** (Magic Mike), pensada para gestionar el negocio completo de AdventuriQ desde una única dashboard. El Super Admin puede ver de un vistazo las métricas globales del sistema (Aventuras, Usuarios por rol, Tokens y Licencias), gestionar Game Masters individuales (contratos, licencias, tokens, auditoría por GM), trabajar con el listado global de TODAS las licencias del sistema (filtros por estado, edición individual, borrado), y consultar el log completo de acciones administrativas. Además, AdventuriQ pasa de soportar un solo modelo de cobro (Tokens prepago) a soportar también **contratos de tarifa plana** anuales tipo **Luna** (1 Aventura, espacio limitado, tokens ilimitados) y **Mundo** (varias Aventuras, espacio global limitado, tokens ilimitados).
- **Componentes afectados:** API (v4.30.0), Gamifier (v4.39.0). La Webapp del Player no cambia: los Players acceden a las Aventuras igual que antes, y el bypass de tokens o la cuota de espacio son transparentes para ellos.
- **Fecha de despliegue:** 2026-05-12

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Super Admin (Gamifier)

**Acceso a la sección**
- En el sidebar lateral del Gamifier aparece un nuevo item **"Super Admin Tools"** (icono escudo de usuario). Solo el usuario `usuario_id = 1` lo ve; al resto le sigue apareciendo el menú habitual.

**Panel de Control** (entrada principal)
- Cuatro KPIs en cabecera, con el mismo estilo visual que el "Resumen de tu cuenta" del listado de Aventuras (panel con header de color sólido + gráfico circular + footer descriptivo):
  - **Aventuras** (azul oscuro) — total de Aventuras del sistema no borradas.
  - **Usuarios** (púrpura) — total de usuarios con desglose por rol (Game Master / Game Designer / Player).
  - **Saldo de Tokens** (amarillo) — saldo actual + comprados acumulados + consumidos acumulados (excluyendo al Super Admin para que las cifras de negocio sean limpias).
  - **Licencias** (verde) — licencias activas como cifra principal, y en el footer el desglose por estado real (Activa / Caducada / Asignable / **Weird**) + por tipo de facturación (Tokens / Luna / Mundo) + Licencias de Game Designer activas/total + nº de contratos de tarifa plana activos. Si hay licencias en estado **Weird**, aparece un badge rojo clicable que abre directamente el listado filtrado.
- Debajo de los KPIs, una rejilla de **cinco pastillas grandes** (mismo estilo visual que las pastillas del wizard de creación de Aventura):
  - **Contratos y Licencias** — listado de Game Masters con sus contratos, licencias y tokens.
  - **Licencias Aventura** — listado global de TODAS las licencias del sistema con edición individual.
  - **Auditoría global** — log de acciones del Super Admin filtrable.
  - **Usuarios** — atajo al listado de usuarios del sistema (ya existente).
  - **Aventuras** — atajo al listado global de Aventuras (ya existente).

**Pastilla "Contratos y Licencias"** (gestión por Game Master)
- Listado de **todos los Game Masters** del sistema en una tabla paginada (25 por página por defecto, opciones 10/25/50/100), ordenable por cualquier columna y filtrable con filtros nativos por columna. Orden por defecto: más recientes arriba.
- Cada fila muestra: avatar + nickname (link al detalle), email, fecha de alta, número de Aventuras, saldo de Tokens (badge), nº de contratos Luna activos (badge), contrato Mundo activo con plan y barra de progreso de espacio usado vs límite.
- Tres acciones rápidas por fila: **Detalle** (entrar), **Contrato** (crear contrato Luna o Mundo para ese GM), **Tokens** (añadir o restar tokens manualmente).
- Botón **"Sincronizar"** en la cabecera para refrescar.

**Detalle de un Game Master** (vista con 6 tabs con iconos)
1. **Resumen** — agregados rápidos (Aventuras totales, Licencias Aventura, Licencias Game Designer).
2. **Contratos Luna/Mundo** — tarjetas con cada contrato del GM, mostrando tipo + plan + estado, barra de espacio usado vs límite, fecha de caducidad, notas. Botones para **editar** (cambiar `max_espacio_mb`, fecha de caducidad, notas) o **cancelar** el contrato (la cancelación marca también todas sus licencias hijas como inactivas).
3. **Licencias Aventura** — todas las licencias del GM con su tipo (Mensual/Anual, Individual/Equipo), facturación (TOKENS/LUNA/MUNDO con badge de color), Aventura asignada (miniatura + título en idioma por defecto + ID) y **estado real calculado**: Activa (verde), Caducada (amarillo), Asignable (azul), Weird (rojo).
4. **Licencias Game Designer** — listado de licencias de GD del GM.
5. **Tokens** — saldo actual, historial de compras (`buyed_tokens`) y consumos agregados por Aventura, botones "Añadir Tokens" y "Quitar Tokens" con modal de operación.
6. **Auditoría** — acciones del Super Admin que han afectado a este GM concretamente.

**Crear un contrato Luna o Mundo**
- Desde la tabla de GMs o desde el detalle del GM, el botón "Crear Contrato" abre un modal con:
  - **Tipo de contrato**: dos botones grandes lado a lado (**Luna** azul / **Mundo** morado con icono de check cuando está seleccionado).
  - **Plan**: selector filtrado por tipo (Luna: Fandom 100MB / Endor 250MB; Mundo: Oz 1024MB / Pandora 4096MB / Arrakis 8192MB). Al elegir el plan, el campo de espacio máximo se autorrellena con el default editable.
  - **Máximo espacio (MB)**: editable.
  - **Fecha de caducidad**: por defecto +1 año desde hoy, editable con date picker.
  - **Notas**: texto libre.
- Si se elige **Luna**, al guardar se crea el contrato Y se emite automáticamente UNA Licencia de Aventura asociada (1:1) que queda libre en el inventario del GM (Asignable).
- Si se elige **Mundo**, solo se crea el contrato; las licencias se emitirán bajo demanda al crear Aventuras. **Máximo un contrato Mundo activo por GM**: si ya tiene uno activo, el sistema lo impide con un mensaje claro.

**Añadir o restar Tokens a un Game Master**
- Modal "Ajustar Tokens" con:
  - Resumen del saldo actual.
  - Selector **Añadir** (verde) / **Restar** (rojo) con icono de check en el activo.
  - Cantidad numérica.
- Al aplicar, el saldo se actualiza y queda registrado en la auditoría.

**Pastilla "Licencias Aventura"** (gestión global por licencia individual)
- Listado de **TODAS las licencias** del sistema (todos los Game Masters) en una tabla `ui-grid` paginada con filtros nativos por columna y orden por ID descendente.
- Columnas: ID (link al editor) · Propietario (avatar + nickname, link a su detalle de GM) · Aventura asignada (miniatura + título + ID o "—") · Facturación (badge) · Modo (icono Individual/Equipo) · Caducidad · Estado calculado (badge color) · Acciones (Editar).
- **Cinco filtros rápidos** por estado en la cabecera, cada uno con su contador: Todas / Activa / Caducada / Asignable / **Weird**. La pastilla también es accesible directamente con `?filter=weird` desde el KPI del Panel cuando hay licencias "raras".
- Click en una fila o en el botón "Editar" abre el **modal de edición de licencia** con:
  - Resumen no editable arriba: tipo de facturación + contrato vinculado (si lo hay) + estado calculado en tiempo real conforme se editan los campos.
  - **ID del Propietario** (editable, muestra el nickname actual del owner).
  - **ID de la Aventura asignada** (editable, muestra el título de la Aventura actual; botón "Desasignar" para ponerla a -1).
  - **Fecha de caducidad** (date picker, botón "Limpiar" para dejarla vacía → la licencia se considera Asignable si no está asignada).
  - **Modo de juego** (Individual / Equipo con botones grandes y check en el activo).
  - **Estado interno** (Activa / Inactiva).
  - Botón **Eliminar** (rojo, abajo a la izquierda) que pide confirmación y borra **físicamente** la fila de la base de datos. El registro queda guardado completo en la auditoría como `DELETE_LICENCIA` con el snapshot de la licencia entera por si fuera necesario reconstruirla.

**Pastilla "Auditoría global"**
- Tabla del log de todas las acciones realizadas por el Super Admin (creación/edición/cancelación de contratos, ajustes de tokens, emisión de licencias Mundo, edición de licencias, etc.) sobre cualquier Game Master.
- Filtros: por tipo de acción (selector con catálogo conocido) y por ID del Game Master afectado. Botones "Aplicar filtros" y "Limpiar".
- Paginación incremental con botón "Cargar más" (50 por bloque).
- Cada fila muestra: fecha, super_admin_id, acción (badge), GM afectado (link al detalle), entidad + ID y payload JSON con todos los detalles del cambio.

### Desde el punto de vista del Game Master (Gamifier)

**Flujo de "Nueva Aventura" mejorado**
- Cuando el GM hace clic en "Nueva Aventura", el selector de licencia muestra como siempre el listado de sus licencias disponibles. **Si tiene un contrato Mundo activo**, encima del listado aparece un bloque informativo con el plan del Mundo, el espacio usado vs límite, la caducidad, y un botón **"+ Emitir nueva Licencia Mundo"**.
- Al pulsarlo, mini-prompt con dos opciones: **Individual** o **Equipo**.
- Al elegir, se emite al instante una nueva Licencia bajo el paraguas del Mundo, que aparece autoseleccionada en el listado para que el GM pueda continuar con el wizard de creación.
- Si el espacio del Mundo está agotado, el botón aparece deshabilitado con un tooltip explicativo.

### Cobro: convivencia de los dos modelos

- **Modelo A (Tokens)**: cuando un Player accede por primera vez a una Aventura cuyo Licencia es `TOKENS` (lo de siempre), se descuenta 1 Token del saldo del GM propietario.
- **Modelo B (Tarifa plana)**: cuando la Licencia de la Aventura está bajo un contrato Luna o Mundo vigente, **no se descuenta** ningún Token. El acceso se registra como log para métrica, pero el saldo del GM queda intacto.
- **Cuota de espacio**: cuando un GM (o un Player en retos tipo Compartir Foto) sube un archivo a una Aventura bajo contrato, el sistema valida que el espacio que ocuparía no supere la cuota del contrato. Si la supera, la subida se rechaza con un mensaje específico de "cuota de espacio del contrato superada", informando del límite y del espacio usado actual. Para Mundo el límite es **global** (suma del espacio de TODAS las Aventuras del GM bajo licencias de ese Mundo).

## 3. PREREQUISITOS DEL USUARIO

### Super Admin
- Solo el usuario con `usuario_id = 1` (Magic Mike) tiene acceso. El item "Super Admin Tools" del sidebar y todas las rutas `/admin/super-tools/*` están protegidas por este check tanto en frontend como en backend (403 si lo intenta otro usuario).

### Game Master
- Para poder emitir Licencias Mundo bajo demanda, necesita tener un contrato Mundo activo creado por el Super Admin.
- Para que sus Aventuras bajo licencia Luna/Mundo se beneficien del bypass de Tokens, no se requiere ninguna acción adicional: la facturación se mira automáticamente a través de la Licencia.

### Player
- Sin prerequisitos: el Player accede a las Aventuras igual que antes. La diferencia entre modelos de cobro es invisible para él.

## 4. FLUJOS PASO A PASO

### Flujo Super Admin: dar de alta un contrato Luna

1. Loguearse en el Gamifier como el usuario Super Admin (usuario_id = 1).
2. En el sidebar lateral, hacer click en **"Super Admin Tools"**.
3. En el Panel de Control, hacer click en la pastilla **"Contratos y Licencias"**.
4. En la tabla de Game Masters, localizar al GM destinatario y hacer click en el botón **"Contrato"** de su fila (o entrar a su detalle y pulsar "Crear Contrato").
5. En el modal:
   - Seleccionar tipo **Luna**.
   - Elegir plan: **Fandom** (100 MB) o **Endor** (250 MB).
   - Revisar el espacio máximo autorrellenado (se puede cambiar).
   - Confirmar la fecha de caducidad (default +1 año).
   - Opcionalmente añadir notas.
   - Pulsar **Guardar**.
6. El sistema crea el contrato Y emite automáticamente la Licencia Luna asociada. Esa licencia aparece ya en el inventario del GM marcada como facturación "LUNA".

### Flujo Super Admin: dar de alta un contrato Mundo

1. Mismos pasos 1-4 que en el flujo Luna.
2. En el modal, seleccionar tipo **Mundo** y plan **Oz / Pandora / Arrakis**.
3. Pulsar **Guardar**.
4. El sistema crea el contrato. No se emite ninguna licencia todavía. El GM podrá emitir Licencias Mundo bajo demanda al crear Aventuras nuevas.
5. **Importante:** un mismo GM no puede tener dos contratos Mundo activos a la vez. Si ya tiene uno, el modal devuelve un error claro.

### Flujo Game Master: crear una Aventura bajo contrato Mundo

1. Loguearse en el Gamifier como el Game Master que tiene un contrato Mundo activo.
2. En el sidebar, **Aventuras → Nueva Aventura**.
3. En el selector de licencias, se ven todas las licencias disponibles del GM. Encima del listado aparece un bloque informativo con el plan del Mundo (p.ej. "Mundo Pandora · 250 / 4096 MB · caduca 2027-05-12") y un botón **"+ Emitir nueva Licencia Mundo (Pandora)"**.
4. Pulsar el botón. Aparece un mini-prompt: **Individual** o **Equipo**.
5. Elegir la modalidad. La licencia se emite en ese momento y queda autoseleccionada en el listado.
6. Pulsar **"Crear Aventura"** y continuar con el wizard normal.

### Flujo Super Admin: editar una licencia individual

1. En el Panel de Control, hacer click en la pastilla **"Licencias Aventura"**.
2. Buscar la licencia (filtros por estado, búsqueda por columna).
3. Click en el ID o en el botón **"Editar"** de la fila.
4. En el modal de edición, cambiar los campos necesarios: propietario, Aventura asignada, fecha de caducidad, modo de juego, estado.
5. Pulsar **Guardar**. El cambio queda registrado en la auditoría.
6. Si en su lugar se pulsa el botón rojo **"Eliminar"** (esquina inferior izquierda), aparece una confirmación y, al aceptar, la licencia se borra físicamente. El snapshot completo queda guardado en la auditoría.

### Flujo Super Admin: ajustar el saldo de Tokens de un GM

1. En el Panel de Control → **Contratos y Licencias**.
2. En la fila del GM, click en el botón **"Tokens"** (o desde el detalle del GM, en la tab "Tokens", botones "Añadir Tokens" / "Quitar Tokens").
3. En el modal, elegir **Añadir** o **Restar**, indicar la cantidad y aplicar.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Sidebar lateral con el item "Super Admin Tools" → Nombre: `super-admin/sidebar-item.png`
- [GAMIFIER] Panel de Control completo con los 4 KPIs y las 5 pastillas → Nombre: `super-admin/panel-control.png`
- [GAMIFIER] Detalle del KPI Licencias mostrando los 4 estados (Activa/Caducada/Asignable/Weird) → Nombre: `super-admin/kpi-licencias-detalle.png`
- [GAMIFIER] Pastilla "Contratos y Licencias" — tabla paginada de Game Masters con avatar + columnas → Nombre: `super-admin/gamemasters-tabla.png`
- [GAMIFIER] Detalle de un Game Master con la tab "Resumen" → Nombre: `super-admin/gm-detalle-resumen.png`
- [GAMIFIER] Detalle de un Game Master con la tab "Contratos Luna/Mundo" mostrando al menos un contrato de cada tipo → Nombre: `super-admin/gm-detalle-contratos.png`
- [GAMIFIER] Detalle de un Game Master con la tab "Licencias Aventura" mostrando los 4 estados → Nombre: `super-admin/gm-detalle-licencias.png`
- [GAMIFIER] Modal "Crear Contrato" con tipo **Luna** seleccionado → Nombre: `super-admin/modal-crear-contrato-luna.png`
- [GAMIFIER] Modal "Crear Contrato" con tipo **Mundo** seleccionado → Nombre: `super-admin/modal-crear-contrato-mundo.png`
- [GAMIFIER] Modal "Ajustar Tokens" con la operación "Añadir" → Nombre: `super-admin/modal-tokens.png`
- [GAMIFIER] Pastilla "Licencias Aventura" — tabla global con filtros por estado → Nombre: `super-admin/licencias-tabla.png`
- [GAMIFIER] Modal "Editar Licencia" → Nombre: `super-admin/modal-licencia-edit.png`
- [GAMIFIER] Pastilla "Auditoría global" con filtros activos → Nombre: `super-admin/auditoria.png`
- [GAMIFIER] Flujo "Nueva Aventura" del GM con el bloque del Mundo + botón "Emitir Licencia Mundo" → Nombre: `super-admin/gm-nueva-aventura-mundo.png`
- [GAMIFIER] Mini-prompt Individual / Equipo al emitir la licencia Mundo → Nombre: `super-admin/gm-emit-mundo-prompt.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/super-admin/`
- **Nombre del archivo:** `super-admin-tools.md`
- **sidebar_position sugerido:** 1 (sección nueva, primer documento)
- **Tags sugeridos:** super-admin, contratos, tarifa-plana, luna, mundo, licencias, auditoria, tokens
- **¿Es página nueva o actualización?** Nueva (es la primera página de una sección nueva "Super Admin" del manual, que muy probablemente NO sea visible para el público general — confirmar con Mike si esta sección se publica abierta o se mantiene como documentación interna).

## 7. NOTAS TÉCNICAS

- **Acceso restringido al Super Admin (usuario_id = 1)**. El check es hardcoded a propósito (no se ha creado un nuevo rol). Las URLs `/admin/super-tools/*` redirigen al inicio si las accede otro usuario; los endpoints API devuelven 403.
- **Convivencia con el modelo clásico de Tokens**: cualquier Aventura cuya Licencia no esté bajo un contrato sigue funcionando exactamente como antes. La distinción se hace por la columna `licencia_aventura.tipo_facturacion` (`TOKENS` por defecto).
- **Cuota Mundo es global**: si un Mundo Pandora tiene 4 GB y el GM tiene 3 Aventuras bajo ese Mundo, los archivos de cualquiera de esas 3 Aventuras se contabilizan contra el mismo total. Cuando una Aventura concreta sube algo que provocaría que la suma global supere los 4 GB, el upload se rechaza.
- **Categoría "Weird"**: una licencia se considera "Weird" si está sin asignar a ninguna Aventura **pero** tiene una fecha de caducidad en el futuro. Es un estado raro (no debería ocurrir en operativa normal) que el sistema expone explícitamente para que el Super Admin pueda revisarlo y limpiarlo si conviene.
- **Borrado de licencia**: el botón "Eliminar" del modal de licencia hace `DELETE FROM licencia_aventura` real, no soft delete. Antes del borrado se guarda en la auditoría un snapshot completo de la fila (incluyendo `fk_ownerid`, `fk_aventuraid`, `caduca_on`, `tipo_facturacion`, etc.) para preservar trazabilidad.
- **Renovación de contratos**: no automática en esta versión. Cuando un contrato caduca, el Super Admin debe cancelarlo manualmente y crear uno nuevo si procede.
- **Integración WooCommerce**: el alta de contratos es 100% manual desde el dashboard. El campo `woo_order_id` queda previsto en la BD para una iteración futura cuando se conecte la tienda online.
- **Limitación conocida**: la edición del propietario y de la Aventura asignada en el modal de licencia se hace por ID (entero). En una iteración futura se puede mejorar con un selector con autocomplete.
