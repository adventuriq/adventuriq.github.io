---
feature_name: Indicadores de carga y gráficos circulares de métricas
date: 2026-08-04
components: [GAMIFIER]
docusaurus_path: docs/metricas/game-board.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Indicadores de carga y gráficos circulares de métricas
- **Descripción:** Las pantallas del Gamifier que consultan muchos datos avisan ahora de que están trabajando en lugar de mostrarse vacías, y los gráficos circulares de los paneles de métricas vuelven a dibujarse con su anillo de color.
- **Componentes afectados:** Gamifier (listado de Aventuras, ficha de la Aventura, Game Board)
- **Fecha de despliegue:** 2026-08-04

:::warning Aviso para Cowork — esto NO añade funciones nuevas
Este despliegue **no da ninguna capacidad nueva al usuario**: no hay botones nuevos,
ni opciones nuevas, ni pantallas nuevas. Cambia únicamente **cómo se ve** lo que ya
existía. No inventes funcionalidad a partir de este FSD.

Su valor real para el manual es que **las capturas actuales están desactualizadas**:
en ellas los paneles de métricas salen como un número dentro de un recuadro vacío,
porque los anillos de colores no llegaban a dibujarse. Ahora sí se dibujan. La tarea
principal aquí es **volver a tomar esas capturas**.
:::

:::warning Aviso para Cowork — qué NO documentar de este despliegue
En el mismo despliegue se ha corregido, **solo para el rol Admin**, qué saldo de
Tokens se muestra en la ficha de una Aventura. Según DOCS_STRUCTURE.md el rol Admin
**no se documenta en el manual**, así que ese cambio **queda fuera por completo**:
no crear página, no mencionarlo y no incluirlo en capturas.

Para las capturas de la ficha de la Aventura, usar una cuenta **Game Master**.
:::

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Al abrir el **listado de Aventuras**, ver un aviso de *"Cargando tus Aventuras…"*
  con una animación mientras se preparan los datos, en vez de un listado vacío que
  se rellenaba de golpe. Se nota sobre todo con muchas Aventuras.
- Al abrir el **Game Board**, ver *"Cargando los datos de la partida…"* hasta que
  todos los datos están listos. Antes aparecían primero todos los contadores a cero,
  lo que podía hacer pensar que la Aventura no tenía actividad.
- Ver una **barra fina de progreso en la parte superior** de la pantalla, en
  cualquier sección, mientras haya consultas en curso. Se enciende y se apaga sola;
  no hay que hacer nada con ella.
- Ver de nuevo el **anillo de color** de los gráficos circulares en los paneles de
  métricas: el listado de Aventuras, la ficha de la Aventura y el Game Board. Antes
  solo se veía el número, sin el anillo que indica la proporción.

### Desde el punto de vista del Player (Webapp)

No aplica. Este despliegue no toca la Webapp: el Player no percibe ningún cambio.

## 3. PREREQUISITOS DEL USUARIO

- Ninguno. No hay nada que activar ni configurar: el comportamiento es automático
  en todas las cuentas.
- Para que los indicadores se aprecien conviene usar una Aventura con datos reales
  (Players que hayan jugado); en una Aventura recién creada la carga es tan rápida
  que el indicador apenas se ve.
- Tras el despliegue puede hacer falta **recargar la página forzando la caché**
  (Ctrl+F5) la primera vez.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — indicador del listado de Aventuras

1. Iniciar sesión en el Gamifier. La pantalla de inicio es el listado de Aventuras.
2. Durante la carga aparece, en el lugar de la tabla, la animación de puntos con el
   texto **"Cargando tus Aventuras…"**. El contador "Total Aventuras" permanece
   oculto mientras tanto.
3. Cuando los datos llegan, el indicador desaparece y se muestra el listado completo
   junto con el número total de Aventuras.

### Flujo Gamifier — indicador del Game Board

1. Entrar en una Aventura que ya tenga partidas jugadas.
2. En la cabecera del formulario, pulsar el botón **"Game Board"**.
3. Mientras se preparan los datos aparece la animación con el texto
   **"Cargando los datos de la partida…"**, y los paneles de métricas permanecen
   ocultos en lugar de mostrarse con los contadores a cero.
4. Cuando todos los datos están listos, el indicador desaparece y aparecen de una vez
   las Métricas de la Aventura y las Estadísticas por Misión, ya con sus valores
   correctos y sus anillos de color.

### Flujo Gamifier — gráficos circulares

1. Abrir el listado de Aventuras: los cuatro paneles del "Resumen de tu cuenta"
   (Mis Aventuras, Saldo de Tokens, Licencias Disponibles, Game Designers) muestran
   el número dentro de un anillo de color.
2. Entrar en una Aventura: los paneles de participación muestran el número, su
   porcentaje y el anillo proporcional a ese porcentaje.
3. Abrir el Game Board: los paneles de Participación, Finalización y Retos
   completados de cada Misión muestran el anillo relleno según su porcentaje.

## 5. PANTALLAS PARA CAPTURAR

Prioridad alta — **sustituyen capturas existentes donde los anillos salen vacíos**:

- [GAMIFIER] Game Board, sección "Métricas de esta Aventura", con los anillos ya
  dibujados → Nombre sugerido: `metricas/game-board-metricas-aventura.png`
- [GAMIFIER] Game Board, sección "Estadísticas por Misión" de una Misión con datos
  (Participación, Finalización, Retos completados) → Nombre sugerido:
  `metricas/game-board-estadisticas-mision.png`
- [GAMIFIER] Listado de Aventuras, panel "Resumen de tu cuenta" con los cuatro
  anillos → Nombre sugerido: `aventuras/listado-resumen-cuenta.png`
- [GAMIFIER] Ficha de la Aventura, fila de paneles de participación con anillos
  (cuenta Game Master) → Nombre sugerido: `aventuras/aventura-paneles-participacion.png`

Prioridad media — capturas nuevas, solo si se quiere ilustrar la espera:

- [GAMIFIER] Listado de Aventuras durante la carga, con "Cargando tus Aventuras…"
  → Nombre sugerido: `aventuras/listado-cargando.png`
- [GAMIFIER] Game Board durante la carga, con "Cargando los datos de la partida…"
  → Nombre sugerido: `metricas/game-board-cargando.png`

:::note Cómo capturar la pantalla de carga
El indicador dura poco. Para poder capturarlo conviene usar una Aventura con muchos
Players y, si hace falta, limitar la velocidad de red desde las herramientas de
desarrollo del navegador.
:::

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/metricas/`
- **Nombre del archivo:** `game-board.md`
- **sidebar_position sugerido:** 2 (el que ya tiene; no cambiarlo)
- **Tags sugeridos:** game-board, métricas, gráficos, carga
- **¿Es página nueva o actualización?** **Actualización.**

No hace falta crear ninguna página. El trabajo consiste en:

1. Renovar en `docs/metricas/game-board.md` las capturas de los paneles de métricas.
2. Renovar las capturas equivalentes que aparezcan en las páginas de `docs/aventuras/`.
3. Opcionalmente, añadir en `docs/metricas/game-board.md` una frase breve indicando
   que el panel muestra un aviso de carga mientras reúne los datos.

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

- El aviso de carga del Game Board espera a que estén **todos** los datos, no solo
  una parte. Por eso en Aventuras con muchos Players la espera puede ser de varios
  segundos antes de que aparezca nada; es el comportamiento correcto y buscado.
- La barra fina de progreso superior solo aparece si la consulta tarda más de un
  cuarto de segundo, para no parpadear en cada acción rápida.
- En la ficha de la Aventura, el saldo de Tokens muestra ahora **un guion (`-`)**
  cuando la cuenta todavía no tiene ningún movimiento de Tokens, en lugar del valor
  sin sentido que aparecía antes. Si se documenta el saldo en algún punto del manual,
  conviene reflejar que un guion significa "sin movimientos todavía", no "cero".
- El aviso *"No se puede publicar una Aventura sin Tokens"* ya no aparece por error
  a los clientes con contrato de tarifa plana (planes Luna y Mundo), que no consumen
  Tokens. Si `docs/aventuras/publicar-aventura.md` menciona ese aviso, revisar que no
  dé a entender que afecta a los planes de tarifa plana.
