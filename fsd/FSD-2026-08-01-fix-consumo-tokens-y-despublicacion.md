---
feature_name: Consumo de Tokens y caducidad de Licencias — correcciones
date: 2026-08-01
components: [API]
docusaurus_path: docs/tokens.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Consumo de Tokens y caducidad de Licencias — correcciones
- **Descripción:** Las Aventuras protegidas con código de acceso, QR o token de acceso único ya descuentan correctamente un Token por cada Player que entra a jugar, y la Licencia que se asigna a una Aventura ya publicada empieza a contar su caducidad desde ese momento.
- **Componentes afectados:** API
- **Fecha de despliegue:** pendiente (desplegado a TEST el 2026-08-01)

> **Nota para Cowork:** esta entrega **no añade pantallas ni opciones nuevas**. Corrige el comportamiento del modelo económico que la página `docs/tokens.md` ya describe. Lo que cambia es que ahora la documentación existente es cierta en todos los casos: antes había situaciones en las que no se consumían Tokens ni caducaba la Licencia.

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- **El saldo de Tokens refleja ya todas las partidas.** Antes, si la Aventura tenía activado un bloqueo de acceso (Código de acceso, QR o Token de acceso único), los Players que entraban por esa vía **no consumían ningún Token**. Ahora cada Player consume 1 Token la primera vez que empieza a jugar, con bloqueo o sin él.
- **La Licencia asignada a una Aventura ya publicada arranca su caducidad en ese momento.** Antes, renovar la Licencia de una Aventura que ya estaba publicada dejaba la nueva Licencia sin fecha de caducidad, y esa Aventura no se despublicaba nunca.
- **La revisión automática nocturna detecta más casos.** Ahora también detecta a los Game Masters que nunca han tenido Tokens (antes solo a los que tenían saldo 0 o negativo), y ha dejado de despublicar por falta de Tokens las Aventuras cubiertas por un contrato de tarifa plana (Plan Luna / Plan Mundo), que por definición no consumen Tokens.

### Desde el punto de vista del Player (Webapp)

- Sin cambios visibles. El Player desbloquea y juega exactamente igual que antes.

## 3. PREREQUISITOS DEL USUARIO

- Ninguno. El cambio es automático y afecta a las Aventuras existentes desde el despliegue.
- Para ver el saldo: Gamifier → menú de usuario → **Mis consumos**.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — comprobar que una Aventura con bloqueo consume Tokens

1. Ir a **Aventuras → [tu Aventura] → Configuración** y activar un bloqueo de acceso (Código de acceso o QR).
2. Publicar la Aventura y anotar el saldo actual en **Mis consumos**.
3. Pedir a un Player que no haya jugado antes que entre con el código.
4. Volver a **Mis consumos**: el saldo debe haber bajado exactamente 1 Token.
5. Si ese mismo Player vuelve a entrar, el saldo **no** vuelve a bajar. Solo si reinicia su partida (y la Aventura permite volver a jugar) consumirá un Token nuevo.

### Flujo Gamifier — renovar la Licencia de una Aventura ya publicada

1. Comprar una Licencia de Aventura nueva (queda en estado **Asignable**, sin fecha de caducidad).
2. Ir a **Aventuras → [tu Aventura publicada] → Licencia** y asignarle la Licencia nueva.
3. La Licencia pasa a estado **Activa** y muestra ya su fecha de caducidad (1 mes o 1 año desde hoy según el tipo).
4. Si la Aventura estuviera en **borrador**, la Licencia se queda sin fecha: el reloj arranca cuando la publiques.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] **Mis consumos** con el saldo de Tokens y el histórico de consumos → Nombre sugerido: `tokens/mis-consumos-saldo.png`
- [GAMIFIER] Ficha de la Aventura, bloque **Licencia**, con una Licencia Activa y su fecha de caducidad visible → Nombre: `tokens/licencia-activa-caducidad.png`
- [GAMIFIER] Listado de Licencias del Game Master mostrando los estados **Asignable / Activa / Caducada** → Nombre: `tokens/licencias-estados.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/`
- **Nombre del archivo:** `tokens.md`
- **sidebar_position sugerido:** 4 (el que ya tiene)
- **Tags sugeridos:** tokens, licencias, caducidad, consumo, despublicación
- **¿Es página nueva o actualización?** **Actualización**

Páginas secundarias que conviene revisar por coherencia (no crear nada nuevo):

- `docs/aventuras/game-pin-bloqueos.md` — añadir que un Player que entra por Código de acceso o QR consume Token igual que cualquier otro.
- `docs/tokens-acceso-unico.md` — sigue siendo cierto que el Token se cobra al canjear el código, no al generarlo. Sin cambios.
- `docs/aventuras/publicar-aventura.md` — mencionar que la caducidad de la Licencia empieza a contar al publicar, y también al asignar una Licencia a una Aventura que ya está publicada.

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

- **Cuándo se cobra el Token:** la primera vez que el Player abre la Aventura y carga sus Misiones. Ni al registrarse, ni al añadir la Aventura por Game PIN, ni al desbloquearla con el código.
- **Rejugar:** un Token equivale a una partida por Player. Si la Aventura permite volver a jugar y el Player reinicia sus estados, la partida siguiente consume otro Token.
- **Tarifa plana:** las Aventuras bajo contrato Plan Luna o Plan Mundo activo no consumen Tokens; el límite es el espacio contratado.
- **Estados de la Licencia:** *Asignable* = comprada y sin caducidad (la Aventura aún no se ha publicado); *Activa* = asignada y con fecha futura; *Caducada* = fecha pasada. Una Aventura publicada cuya Licencia caduca se despublica automáticamente en la revisión nocturna, y el Game Master recibe un correo con los motivos.
- **Limitación conocida (no cubierta en esta entrega):** publicar una Aventura desde una cuenta de Administrador de AdventuriQ, o mediante integraciones que no pasen por la pantalla de edición del Gamifier, no arranca la caducidad de la Licencia. Solo afecta a uso interno.
