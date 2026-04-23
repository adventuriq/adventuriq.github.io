---
feature_name: Panel de estadísticas del Game Master en el listado de Aventuras
date: 2026-02-19
components: [API] [GAMIFIER]
docusaurus_path: docs/aventuras/panel-game-master.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Panel de estadísticas de la cuenta en el listado de Aventuras
- **Descripción:** Al entrar al listado de Aventuras del Gamifier, los Game Masters (y Admins) ven ahora un panel superior con cuatro indicadores circulares: número de Aventuras propias, saldo de Tokens, Licencias de Aventura disponibles y Licencias de Game Designer disponibles. Es una visión de un vistazo del estado de la cuenta.
- **Componentes afectados:** API, Gamifier
- **Fecha de despliegue:** 2026-02-19

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Ver, nada más entrar al listado de Aventuras, cuatro paneles con datos clave de su cuenta:
  - **Mis Aventuras** (azul): cuántas Aventuras tiene creadas.
  - **Saldo de Tokens** (dorado): tokens disponibles para invitar a Players.
  - **Licencias Disponibles** (verde): Licencias de Aventura sin asignar.
  - **Game Designers** (morado): Licencias de Game Designer sin asignar.
- Comprobar rápidamente si necesita adquirir más tokens o licencias antes de lanzar una nueva Aventura.

## 3. PREREQUISITOS DEL USUARIO

- Ser Game Master o Admin. Los Game Designers no ven este panel.
- Haber iniciado sesión en el Gamifier.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Consultar el panel

1. Inicia sesión en el Gamifier como Game Master.
2. Entra a la sección de Aventuras. El listado carga y, sobre la tabla, aparecen los cuatro paneles circulares con los contadores.
3. Si uno de los contadores está en 0 (por ejemplo, Licencias Disponibles), es una señal de que necesitas adquirir más para poder crear o publicar una Aventura nueva.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Listado de Aventuras con los 4 paneles circulares arriba (vista completa) → Nombre: `aventuras/panel-gm-completo.png`
- [GAMIFIER] Detalle del panel "Mis Aventuras" → Nombre: `aventuras/panel-mis-aventuras.png`
- [GAMIFIER] Detalle del panel "Saldo de Tokens" → Nombre: `aventuras/panel-tokens.png`
- [GAMIFIER] Detalle del panel "Licencias Disponibles" → Nombre: `aventuras/panel-licencias.png`
- [GAMIFIER] Detalle del panel "Game Designers" → Nombre: `aventuras/panel-gamedesigners.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `panel-game-master.md` (o sección en la página existente de "Listado de Aventuras").
- **sidebar_position sugerido:** al principio, como parte de la primera pantalla que ve un Game Master.
- **Tags sugeridos:** `aventuras`, `game-master`, `tokens`, `licencias`, `dashboard`
- **¿Es página nueva o actualización?** Actualización de la página de "Listado de Aventuras" recomendada; alternativamente, página independiente.

## 7. NOTAS TÉCNICAS

- El panel solo lo ven Admin y Game Master. Un Game Designer que trabaje en las Aventuras de un GM no verá estos contadores (no le aplican).
- Los valores de Tokens y Licencias se refrescan al recargar la pantalla. Después de una compra o asignación, recarga el listado para ver el nuevo valor.
