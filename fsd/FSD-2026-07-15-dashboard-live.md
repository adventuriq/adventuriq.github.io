---
feature_name: Dashboard Live de la Aventura
date: 2026-07-15
components: [API] [GAMIFIER]
docusaurus_path: docs/modo-arena/dashboard-live.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Dashboard Live — panel en directo de la Aventura
- **Descripción:** Un panel visual en tiempo real, pensado para proyectar en
  una pantalla grande, que muestra todo lo que está pasando en una Aventura
  mientras los Players juegan desde el móvil: ranking de jugadores, actividad
  al momento, clasificación por Misiones y por Equipos, Objetos digitales
  entregados y una cuenta atrás opcional con gong final.
- **Componentes afectados:** API, Gamifier y el visor AdventuriQ Arena
  (`live.adventuriq.com/dashboard/...`).
- **Fecha de despliegue:** 2026-07-15

> **Nota para Cowork/humano:** aunque el Dashboard Live vive en el visor
> AdventuriQ Arena (mismo dominio `live.adventuriq.com`), **NO requiere el
> Modo Live (Arena)**: funciona con **cualquier Aventura** (también en
> Borrador — el panel lo indica con una etiqueta "BORRADOR"), se juegue de
> forma normal desde la Webapp. Conviene dejar esto muy claro en el manual
> para no confundirlo con las partidas en directo del Modo Arena.
> Este panel **sustituye al antiguo botón "Ranking HTML"** del Gamifier.

---

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master / Game Designer (Gamifier)

- **Abrir el Dashboard Live de cualquier Aventura** (publicada o en Borrador)
  con el nuevo botón **"Dashboard Live"** de la ficha de la Aventura
  (sustituye al antiguo "Ranking HTML"). Se abre en una pestaña nueva, listo
  para proyectar. Si la Aventura está en Borrador, la cabecera del panel
  muestra la etiqueta **"BORRADOR"** en lugar de "EN DIRECTO" — útil para
  preparar la proyección antes de publicar.
- **Ver en tiempo real** (se actualiza solo, cada 30 segundos por defecto):
  - **Ranking de la Aventura**: top de jugadores con avatar, nombre, Retos
    realizados y puntos. El número 1 se celebra con confeti cuando cambia.
  - **Orbe de puntos**: un recipiente de cristal con líquido dorado animado;
    el nivel del líquido es el **progreso global** de la Aventura y dentro
    se muestran los **puntos totales** de todos los Players.
  - **Actividad en directo**: los últimos Retos completados («quién», «qué
    Reto», «cuántos puntos», «hace cuánto»).
  - **Rankings por Misión**: top 5 de cada Misión con los mismos datos que
    el ranking general.
  - **Equipos**: ranking de Equipos en porcentaje (el mismo % que ven los
    Players en la Webapp) con su suma de puntos y nº de jugadores.
  - **Termómetro de Retos**: el Reto estrella (más jugado) y el Reto hueso
    (menor porcentaje de acierto).
  - **Objetos digitales**: cuántas unidades se han entregado de cada Objeto,
    con su imagen. Por defecto solo se ven los ya entregados (conmutable a
    "Todos") y se puede alternar entre vista de cuadrícula y de lista.
  - **Jugadores activos ahora** (últimos ~10 minutos) frente al total.
  - **QR de unión + PIN** para que los rezagados entren desde el móvil.
- **Configurar el panel desde la rueda dentada** (esquina superior):
  - Cuántos jugadores muestra el ranking (3–50; por defecto 10). La
    actividad en directo muestra el mismo número de entradas.
  - Cada cuántos segundos se refresca (10–300; por defecto 30).
  - **Cuenta atrás** opcional: visible sí/no y duración en días, horas,
    minutos y segundos. Al guardar aparece en grande bajo la cabecera; el
    último minuto se pone en rojo y al llegar a cero suena un **repique de
    gong** y queda parpadeando en 00:00:00.
- **Controlar la cuenta atrás durante el evento**: al pasar el ratón por el
  contador aparecen tres botones (invisibles para el público en reposo):
  - **Pausar / Reanudar**: congela el tiempo restante (el marcador queda
    atenuado con un símbolo de pausa) y lo reanuda donde estaba.
  - **Reiniciar**: vuelve a empezar desde la duración configurada — ideal
    para dinámicas por rondas.
  - **Poner a cero**: corta el tiempo al momento, con el repique de gong y
    el 00:00:00 en rojo (como si el tiempo hubiera expirado).
- **Cambiar el idioma** del panel (ES/EN/CA/FR) con el selector de la esquina.
- El fondo del panel es la **imagen de cabecera de la Aventura** y el título
  se muestra en grande, centrado.

### Desde el punto de vista del Player (Webapp)

- El Player no interactúa con el Dashboard: juega la Aventura desde la Webapp
  con normalidad y ve su progreso reflejado en la pantalla proyectada casi al
  momento. Puede unirse escaneando el QR del panel.

## 3. PREREQUISITOS DEL USUARIO

- Tener una **Aventura** creada (publicada o en Borrador; en Borrador el
  panel indica el estado con la etiqueta "BORRADOR").
- Iniciar sesión en el visor con una cuenta de **Game Master o Game
  Designer** (mismo login que AdventuriQ Arena; una vez por dispositivo).
- NO hace falta activar el Modo Live (Arena) ni crear ninguna sesión.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier

1. Ir al **listado de Aventuras** y entrar en la Aventura.
2. Pulsar el botón **"Dashboard Live"** (icono de panel, junto a Clasificación
   y Gameboard; disponible en todas las Aventuras).
3. Se abre `live.adventuriq.com/dashboard/{PIN}` en una pestaña nueva. Si es
   la primera vez en ese dispositivo, iniciar sesión con la cuenta de GM/GD.
4. Proyectar la pestaña en la pantalla grande. El panel se refresca solo.

### Flujo de configuración del panel (opcional)

1. Pulsar la **rueda dentada** (esquina superior derecha).
2. Ajustar "Jugadores en el ranking" y/o "Refresco (segundos)". Se aplican
   al momento y se recuerdan en ese navegador.
3. Para la cuenta atrás: marcar **Visible**, poner días/horas/min/seg y
   pulsar **Guardar**. El contador aparece bajo la cabecera y empieza a
   descontar. Al llegar a cero: gong + parpadeo en rojo.
4. Durante el evento, pasar el ratón por el contador para **pausar/reanudar**,
   **reiniciar** al tiempo configurado o **ponerlo a cero** (gong incluido).
5. En el panel de **Objetos digitales**: alternar «Solo entregados / Todos»
   y la vista lista/cuadrícula con los controles de su esquina.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Ficha de la Aventura con el botón "Dashboard Live" →
  Nombre sugerido: modo-arena/dashboard-live-boton-gamifier.png
- [ARENA] Dashboard completo proyectado (cabecera con orbe + QR + ranking +
  actividad + equipos) → Nombre: modo-arena/dashboard-live-general.png
- [ARENA] Detalle del orbe de puntos con el líquido animado →
  Nombre: modo-arena/dashboard-live-orbe-puntos.png
- [ARENA] Rueda dentada abierta con los ajustes (ranking, refresco, cuenta
  atrás) → Nombre: modo-arena/dashboard-live-ajustes.png
- [ARENA] Cuenta atrás visible en grande bajo la cabecera →
  Nombre: modo-arena/dashboard-live-cuenta-atras.png
- [ARENA] Cuenta atrás con el ratón encima mostrando los botones
  pausar/reiniciar/a-cero → Nombre: modo-arena/dashboard-live-cuenta-atras-controles.png
- [ARENA] Cabecera de una Aventura en Borrador con la etiqueta "BORRADOR" →
  Nombre: modo-arena/dashboard-live-borrador.png
- [ARENA] Sección de Rankings por Misión + Objetos digitales (cuadrícula) →
  Nombre: modo-arena/dashboard-live-misiones-objetos.png

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/modo-arena/`
- **Nombre del archivo:** `dashboard-live.md`
- **sidebar_position sugerido:** después de las páginas de partidas en
  directo del Modo Arena (última de la sección).
- **Tags sugeridos:** dashboard, ranking, directo, proyector, eventos
- **¿Es página nueva o actualización?** Nueva. Además, si el manual menciona
  el antiguo "Ranking HTML" en alguna página, hay que **actualizarla**: ese
  botón ya no existe (lo sustituye el Dashboard Live).

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

- El Dashboard es de **solo lectura**: no permite moderar ni modificar nada
  de la Aventura.
- "Activos ahora" cuenta los Players con actividad en los **últimos 10
  minutos** (aproximado).
- El nivel del orbe (progreso global) es la media de Retos completados por
  jugador sobre los Retos jugables de la Aventura.
- Los ajustes del panel (top del ranking, refresco, cuenta atrás, filtro y
  vista de Objetos) se guardan **en el navegador de ese dispositivo**, no en
  la Aventura: cada pantalla/equipo puede tener su propia configuración.
- La cuenta atrás es **informativa** (no cierra la Aventura ni bloquea nada
  al llegar a cero). La pausa y el reinicio solo afectan al contador de esa
  pantalla; la pausa sobrevive a una recarga de la página.
- El gong final requiere que el navegador permita audio; al pulsar "Guardar"
  ya queda habilitado. Si la pestaña está silenciada por el navegador, no
  sonará.
- Se puede abrir el panel directamente con
  `https://live.adventuriq.com/dashboard/{PIN}` (mismo PIN de unión de la
  Aventura) y admite `?top=15&refresh=20` en la URL para fijar los ajustes
  al abrir.
