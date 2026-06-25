---
feature_name: Conteo correcto de Tokens de acceso por Player
date: 2026-06-25
components: [API] [GAMIFIER]
docusaurus_path: docs/aventuras/token-acceso-unico.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Conteo correcto de Tokens de acceso por Player
- **Descripcion:** Se corrige como se contabilizan los Tokens cuando una Aventura usa "Tokens de acceso por Player". Ahora el Game Master no puede generar mas Tokens nominales de los que tiene comprados, y cada Token solo descuenta saldo cuando un Player lo canjea de verdad (no al generarlo). El saldo deja de poder gastarse de forma ilimitada.
- **Componentes afectados:** API, Gamifier (la Webapp no cambia)
- **Fecha de despliegue:** 2026-06-25

## 2. QUE PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Al pulsar **"Generar Tokens"**, el maximo que ofrece el sistema ya refleja los Tokens **realmente disponibles**: el saldo comprado menos los Tokens nominales que ya genero y aun no ha usado nadie.
- Si ya ha generado tantos Tokens como Tokens compro, **el sistema le impide generar mas** hasta que compre mas Tokens o libere Tokens sin usar (borrandolos).
- Si **borra Tokens nominales que aun nadie ha canjeado**, ese cupo vuelve a quedar disponible para generar otros.
- El **saldo de Tokens baja exactamente 1 por cada Player que entra** a la Aventura canjeando su Token (no antes). Generar Tokens de mas que nunca se usan ya no malgasta saldo.

### Comportamiento que NO cambia

- Las Aventuras **sin** "Tokens de acceso por Player" (acceso por codigo o abierto) siguen descontando 1 Token en el primer acceso de cada Player, igual que siempre.
- Las Aventuras bajo un **Plan Luna/Mundo (tarifa plana)** siguen sin consumir Tokens: ni al generar ni al entrar el Player.

## 3. PREREQUISITOS DEL USUARIO

- Ser **Game Master** con una Aventura configurada con "Tokens de acceso por Player".
- Tener **Tokens comprados** en tu cuenta. Si tu saldo (descontando los Tokens ya generados sin usar) es 0, no podras generar mas.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier - Generar Tokens respetando el saldo

1. Abrir la Aventura y bajar a la seccion **"Tokens de acceso por Player"**.
2. Pulsar **"Generar Tokens"**. El popup muestra el maximo disponible real (por ejemplo *"Maximo: 10"*).
3. Introducir una cantidad menor o igual a ese maximo y confirmar.
4. Si intentas pedir mas de lo disponible, el sistema lo rechaza con un aviso indicando cuantos te quedan.
5. Cuando hayas generado tantos Tokens como compraste, "Generar Tokens" deja de permitir crear nuevos.

### Flujo Gamifier - Recuperar cupo borrando Tokens sin usar

1. En la tabla de Tokens, identificar los Tokens **sin Player asignado** (aun no canjeados).
2. Borrarlos (individual o en lote).
3. Volver a **"Generar Tokens"**: el maximo disponible vuelve a incluir ese cupo liberado.

### Flujo Player (Webapp) - sin cambios visibles

1. El Player introduce su Token y entra a la Aventura como hasta ahora.
2. En ese momento (canje), se descuenta 1 Token del saldo del Game Master.
3. Si el mismo Player vuelve a entrar, **no se le cobra de nuevo**.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Popup "Generar Tokens" mostrando el maximo disponible real - Nombre: `aventuras/tokens-generar-maximo-real.png`
- [GAMIFIER] Aviso al intentar generar mas Tokens de los disponibles - Nombre: `aventuras/tokens-sin-disponibles.png`
- [GAMIFIER] Tabla de Tokens con filas sin canjear (cupo recuperable al borrar) - Nombre: `aventuras/tokens-sin-canjear.png`

## 6. UBICACION EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `token-acceso-unico.md`
- **sidebar_position sugerido:** sin cambio (actualizacion de pagina existente).
- **Tags sugeridos:** `aventura`, `acceso`, `token`, `licencia`, `saldo`
- **Es pagina nueva o actualizacion?** **Actualizacion** de la pagina existente "Token de acceso unico por Player". Revisar/ajustar el apartado de saldo: aclarar que (1) no se pueden generar mas Tokens de los comprados, contando los ya generados sin usar, y (2) el descuento ocurre cuando el Player canjea el Token, no al generarlo.

## 7. NOTAS TECNICAS

- **Modelo de cobro:** "cobro al conciliar". Generar un Token reserva cupo pero no descuenta saldo; el descuento real ocurre al canjearlo el Player. Un Token canjeado por el mismo Player varias veces solo descuenta una vez.
- **Calculo del maximo generable:** saldo comprado (`tokens`) menos las "promesas pendientes" = Tokens activos sin canjear (sin Player asignado) en **todas** las Aventuras del Game Master. Es un cupo a nivel de cuenta, no por Aventura.
- **Tarifa plana:** las Aventuras bajo contrato Luna/Mundo no aplican ni el limite de generacion ni el descuento por canje.
- **Limitacion conocida:** el conteo de "promesas pendientes" no excluye Tokens de Aventuras que esten bajo tarifa plana; para un Game Master que mezcle Aventuras con y sin tarifa plana podria ser ligeramente conservador. No afecta al caso habitual.
