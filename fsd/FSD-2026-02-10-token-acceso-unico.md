---
feature_name: Token de acceso unico por Player
date: 2026-02-10
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/aventuras/token-acceso-unico.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Token de acceso unico por Player
- **Descripcion:** Ademas del codigo de acceso compartido que ya existia, el Game Master ahora puede generar Tokens individuales de 9 caracteres para que cada Player tenga el suyo propio: un Token solo sirve para una persona y queda asociado a su cuenta la primera vez que lo usa. Permite controlar quien entra a la Aventura, opcionalmente vinculando cada Token a un email concreto, y ver en tiempo real quien ha accedido y cuando.
- **Componentes afectados:** API, Gamifier, Webapp
- **Fecha de despliegue:** 2026-02-12

## 2. QUE PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Activar en la edicion de una Aventura la opcion **"Tokens de acceso por Player"**, que sustituye al codigo de acceso compartido (son **mutuamente excluyentes**: si activas uno, el otro se desactiva automaticamente).
- Pulsar **"Generar Tokens"** y elegir cuantos Tokens quiere crear. El sistema los crea automaticamente como cadenas alfanumericas de 9 caracteres.
- Ver todos los Tokens generados en una tabla con: Token, estado (activo/inactivo), email asignado, nickname del Player que lo uso, fecha de creacion y fecha en que el Player entro.
- **Editar** un Token para cambiar su valor, asignarle un email concreto (asi solo podra usarlo el Player cuyo email coincida) o cambiar su estado activo/inactivo.
- **Eliminar** Tokens individualmente o en lote (seleccion multiple).
- **Actualizar** la tabla de Tokens bajo demanda para ver quien acaba de entrar.
- El sistema valida que **no puedas generar mas Tokens de los que tienes disponibles** en tu saldo. Si intentas pasarte, te avisa y limita la cantidad al saldo real.

### Desde el punto de vista del Player (Webapp)

- Al entrar en una Aventura protegida con Tokens, se le pide introducir su Token personal en la misma pantalla que ya conocia para codigos.
- Si el Token es valido y no se ha usado, **entra directamente a la Aventura** y queda vinculado a su cuenta.
- Si el Token esta asociado a un email concreto y el del Player no coincide, el sistema lo rechaza.
- Si intenta usar un Token que ya usa otro Player, el sistema lo rechaza con mensaje claro.
- Una vez validado, en proximas visitas ya no hace falta volver a introducir el Token (ver feature "Persistencia de desbloqueo de Aventura").

## 3. PREREQUISITOS DEL USUARIO

- Ser **Game Master** con al menos una Aventura creada.
- Tener **Tokens disponibles** en tu cuenta (saldo de licencia). Si tu saldo es 0, no podras generar Tokens y el sistema te avisara.
- Los Tokens y el Codigo de acceso clasico no pueden convivir en una misma Aventura: debes elegir uno de los dos metodos.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier - Generar Tokens para una Aventura

1. Ir al listado de Aventuras y abrir la Aventura que quieres proteger.
2. Bajar a la seccion **"Tokens de acceso por Player"**.
3. Activar el checkbox. Si tenias activado "Acceso por codigo", se desactivara automaticamente.
4. Pulsar **"Generar Tokens"**.
5. Introducir la cantidad deseada (el sistema muestra el maximo segun tu saldo disponible, por ejemplo *"Maximo: 50"*).
6. Confirmar. Los Tokens aparecen listados en la tabla inferior.
7. Pulsar **"Guardar"** en la Aventura para persistir la activacion.

### Flujo Gamifier - Editar un Token (asignar email concreto)

1. En la tabla de Tokens, pulsar el icono de **editar** en la fila deseada.
2. En el popup puedes:
   - Cambiar el valor del Token.
   - Introducir un email (el Token solo sera aceptado por ese Player).
   - Cambiar el estado a **Inactivo** para desactivarlo sin borrarlo.
3. Pulsar **"Guardar"**.

### Flujo Gamifier - Eliminar Tokens

- **Uno a uno**: pulsar el icono de **papelera** en la fila, confirmar.
- **En lote**: seleccionar las filas con el checkbox de la cabecera o individualmente, pulsar el boton **"Eliminar seleccionados"**, confirmar.

### Flujo Gamifier - Refrescar la tabla

- Pulsar el boton **"Actualizar"** encima de la tabla para ver en tiempo real quien acaba de validar su Token.

### Flujo Player (Webapp) - Entrar con un Token

1. Abrir AdventuriQ y seleccionar la Aventura.
2. Pulsar **"Adelante"**.
3. Se muestra la pantalla de acceso con el titulo **"Introduce tu Token de acceso"**.
4. Teclear el Token recibido del Game Master y pulsar validar.
5. Si es correcto, entra directamente al listado de Misiones.
6. Si es incorrecto, el sistema muestra uno de estos mensajes:
   - *"Token invalido o no encontrado."*
   - *"Este Token ya ha sido utilizado por otro jugador."*
   - *"El email asignado al Token no coincide con el del jugador."*

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Edicion de Aventura - bloque "Tokens de acceso por Player" activado, con tabla y botones - Nombre: `aventuras/tokens-bloque-completo.png`
- [GAMIFIER] Popup "Generar Tokens" con indicador de maximo disponible - Nombre: `aventuras/tokens-popup-generar.png`
- [GAMIFIER] Tabla de Tokens con filas mixtas (usados/sin usar/inactivos) - Nombre: `aventuras/tokens-tabla-estados.png`
- [GAMIFIER] Popup de edicion de Token (con email y estado) - Nombre: `aventuras/tokens-popup-editar.png`
- [GAMIFIER] Mensaje de saldo insuficiente al generar - Nombre: `aventuras/tokens-saldo-insuficiente.png`
- [GAMIFIER] Seleccion multiple + boton "Eliminar seleccionados" - Nombre: `aventuras/tokens-seleccion-multiple.png`
- [WEBAPP] Pantalla de Player introduciendo su Token - Nombre: `webapp/acceso-token.png`
- [WEBAPP] Mensaje de error de Token ya utilizado - Nombre: `webapp/acceso-token-error.png`

## 6. UBICACION EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `token-acceso-unico.md`
- **sidebar_position sugerido:** al lado de la pagina existente de "codigo de acceso" (si existe), o detras de "configuracion-aventura".
- **Tags sugeridos:** `aventura`, `acceso`, `token`, `seguridad`, `player`, `licencia`
- **Es pagina nueva o actualizacion?** **Nueva**. Ademas, actualizar la pagina existente de "Codigo de acceso" con una nota que mencione que es mutuamente excluyente con Tokens y que enlace a esta pagina.

## 7. NOTAS TECNICAS

- **Formato de los Tokens:** 9 caracteres alfanumericos en mayusculas, unicos por Aventura. No hay espacios ni caracteres especiales.
- **Exclusion mutua:** activar Tokens desactiva automaticamente el Codigo de acceso clasico, y viceversa. Es una regla de UI que previene configuraciones incoherentes.
- **Email en el Token:** campo opcional. Si lo dejas vacio, cualquier Player puede usar ese Token (el primero que lo teclee). Si lo rellenas, el sistema exige que el email del Player coincida (comparacion sin distinguir mayusculas).
- **Saldo de Tokens:** los Tokens consumen saldo de licencia del Game Master. El Gamifier lee el saldo via el endpoint de consumos y limita la generacion.
- **Cobertura de esta pagina:** esta misma funcionalidad se reparte entre 3 sesiones de desarrollo (`2026-02-10_feature-token-unico.md`, `2026-02-12_mejoras-token-acceso.md` y `2026-02-12_session-completa-tokens-y-mejoras.md`); el manual las cubre con una sola pagina unificada.
