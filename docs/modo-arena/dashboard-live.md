---
sidebar_position: 6
title: 📺 Dashboard Live de la Aventura
description: Proyecta en una pantalla grande todo lo que pasa en tu Aventura en tiempo real — ranking con confeti, orbe de puntos, actividad en directo, Equipos, Objetos Digitales entregados y una cuenta atrás opcional con gong final.
keywords: [dashboard, ranking, directo, proyector, eventos, pantalla grande, cuenta atrás, orbe, equipos, adventuriq]
---

# 📺 Dashboard Live de la Aventura

:::info 🌐 Quién puede usar esto
El panel lo abre el **Game Master** o el **Game Designer** desde el Gamifier. Los **Players** no interactúan con él: juegan la Aventura desde la Webapp con normalidad y ven su progreso reflejado en la pantalla proyectada casi al momento.
:::

El **Dashboard Live** es un panel visual en tiempo real pensado para **proyectar en una pantalla grande** mientras los Players juegan tu Aventura desde el móvil: ranking de jugadores, actividad al momento, clasificación por Misiones y por Equipos, Objetos Digitales entregados y una **cuenta atrás** opcional con gong final. Se actualiza solo — tú solo tienes que proyectarlo.

<!-- 📸 CAPTURA PENDIENTE: /img/modo-arena/dashboard-live-general.png — Dashboard completo proyectado: cabecera con orbe + QR + ranking + actividad + equipos -->
![Dashboard Live completo con la cabecera, el orbe de puntos, el QR de unión, el ranking y la actividad en directo](/img/modo-arena/dashboard-live-general.png)

:::tip No confundir con las partidas en directo del Modo Arena
Aunque el Dashboard Live vive en el mismo visor (`live.adventuriq.com`), **no requiere activar el Modo Live ni crear ninguna sesión**: funciona con **cualquier Aventura** — publicada o en Borrador — que se juegue de forma normal desde la Webapp. Es un marcador para el evento, no un modo de juego.
:::

## 🚀 Abrir el Dashboard Live

1. Ve al **listado de Aventuras** del Gamifier y entra en la Aventura.
2. Pulsa el botón **"Dashboard Live"** (icono de panel, junto a Clasificación y Game Board). Está disponible en todas las Aventuras.
3. Se abre `live.adventuriq.com/dashboard/{GamePIN}` en una pestaña nueva. Si es la primera vez en ese dispositivo, inicia sesión con tu cuenta de Game Master o Game Designer (el mismo login del visor AdventuriQ Arena; solo se pide una vez por dispositivo).
4. Proyecta la pestaña en la pantalla grande. El panel se refresca solo (cada 30 segundos por defecto).

<!-- 📸 CAPTURA PENDIENTE: /img/modo-arena/dashboard-live-boton-gamifier.png — Ficha de la Aventura en el Gamifier con el botón "Dashboard Live" -->
![Ficha de la Aventura en el Gamifier con el botón "Dashboard Live"](/img/modo-arena/dashboard-live-boton-gamifier.png)

El fondo del panel es la **imagen de cabecera de la Aventura**, con el título en grande y centrado. Con el selector de la esquina puedes cambiar el **idioma** del panel (ES / EN / CA / FR).

**¿Y si la Aventura está en Borrador?** El panel funciona igual, pero la cabecera muestra la etiqueta **"BORRADOR"** en lugar de "EN DIRECTO" — muy útil para preparar y ensayar la proyección antes de publicar.

<!-- 📸 CAPTURA PENDIENTE: /img/modo-arena/dashboard-live-borrador.png — Cabecera de una Aventura en Borrador con la etiqueta "BORRADOR" -->
![Cabecera del Dashboard Live de una Aventura en Borrador con la etiqueta "BORRADOR"](/img/modo-arena/dashboard-live-borrador.png)

:::note Este botón sustituye al antiguo "Ranking HTML"
Si usabas el botón **"Ranking HTML"** del Gamifier, ya no existe: el Dashboard Live lo reemplaza con mucha más información y en tiempo real.
:::

## 👀 Qué muestra el panel

Todo se actualiza automáticamente con cada refresco:

- **Ranking de la Aventura**: el top de jugadores con avatar, nombre, Retos realizados y puntos. Cuando cambia el número 1, el panel lo celebra con **confeti**.
- **Orbe de puntos**: un recipiente de cristal con líquido dorado animado. El nivel del líquido es el **progreso global** de la Aventura y dentro se muestran los **puntos totales** de todos los Players.
- **Actividad en directo**: los últimos Retos completados — quién, qué Reto, cuántos puntos y hace cuánto.
- **Rankings por Misión**: el top 5 de cada Misión, con los mismos datos que el ranking general.
- **Equipos**: ranking de Equipos en porcentaje (el mismo % que ven los Players en la Webapp), con su suma de puntos y número de jugadores.
- **Termómetro de Retos**: el Reto **estrella** (el más jugado) y el Reto **hueso** (el de menor porcentaje de acierto).
- **Objetos Digitales**: cuántas unidades se han entregado de cada Objeto, con su imagen. Por defecto se ven solo los ya entregados (conmutable a **"Todos"**) y puedes alternar entre vista de **cuadrícula** y de **lista** con los controles de su esquina.
- **Jugadores activos ahora**: los Players con actividad en los últimos ~10 minutos, frente al total.
- **QR de unión + GamePIN**: para que los rezagados entren desde el móvil escaneando la propia pantalla.

<!-- 📸 CAPTURA PENDIENTE: /img/modo-arena/dashboard-live-orbe-puntos.png — Detalle del orbe de puntos con el líquido dorado animado -->
![Detalle del orbe de puntos con el líquido dorado animado y los puntos totales](/img/modo-arena/dashboard-live-orbe-puntos.png)

<!-- 📸 CAPTURA PENDIENTE: /img/modo-arena/dashboard-live-misiones-objetos.png — Sección de Rankings por Misión + Objetos Digitales en cuadrícula -->
![Rankings por Misión y panel de Objetos Digitales en vista de cuadrícula](/img/modo-arena/dashboard-live-misiones-objetos.png)

## ⚙️ Configurar el panel

Pulsa la **rueda dentada** (esquina superior derecha) para ajustar:

- **Jugadores en el ranking**: de 3 a 50 (por defecto 10). La actividad en directo muestra el mismo número de entradas.
- **Refresco (segundos)**: cada cuántos segundos se actualiza el panel, de 10 a 300 (por defecto 30).
- **Cuenta atrás** opcional: visible sí/no y duración en días, horas, minutos y segundos.

Los cambios se aplican al momento y **se recuerdan en ese navegador**: cada pantalla o equipo de proyección puede tener su propia configuración sin afectar a las demás.

<!-- 📸 CAPTURA PENDIENTE: /img/modo-arena/dashboard-live-ajustes.png — Rueda dentada abierta con los ajustes: ranking, refresco y cuenta atrás -->
![Panel de ajustes del Dashboard Live con jugadores del ranking, refresco y cuenta atrás](/img/modo-arena/dashboard-live-ajustes.png)

## ⏱️ La cuenta atrás

Si marcas la cuenta atrás como **Visible**, pones la duración y pulsas **Guardar**, el contador aparece **en grande bajo la cabecera** y empieza a descontar. El **último minuto** se muestra en rojo, y al llegar a cero suena un **repique de gong** y el contador queda parpadeando en 00:00:00.

<!-- 📸 CAPTURA PENDIENTE: /img/modo-arena/dashboard-live-cuenta-atras.png — Cuenta atrás visible en grande bajo la cabecera -->
![Cuenta atrás del Dashboard Live en grande bajo la cabecera](/img/modo-arena/dashboard-live-cuenta-atras.png)

Durante el evento puedes **controlar el contador sin que el público lo note**: al pasar el ratón por encima aparecen tres botones (invisibles en reposo):

- **Pausar / Reanudar**: congela el tiempo restante (el marcador queda atenuado con un símbolo de pausa) y lo reanuda donde estaba. La pausa sobrevive incluso a una recarga de la página.
- **Reiniciar**: vuelve a empezar desde la duración configurada — ideal para dinámicas por rondas.
- **Poner a cero**: corta el tiempo al momento, con el repique de gong y el 00:00:00 en rojo, como si el tiempo hubiera expirado.

<!-- 📸 CAPTURA PENDIENTE: /img/modo-arena/dashboard-live-cuenta-atras-controles.png — Cuenta atrás con el ratón encima mostrando los botones pausar/reiniciar/a-cero -->
![Cuenta atrás con los controles de pausar, reiniciar y poner a cero visibles al pasar el ratón](/img/modo-arena/dashboard-live-cuenta-atras-controles.png)

:::note La cuenta atrás es informativa
Llegar a cero **no cierra la Aventura ni bloquea nada**: es un elemento de dinamización para el evento. La pausa y el reinicio solo afectan al contador de esa pantalla. Para que suene el gong, el navegador debe permitir el audio (al pulsar "Guardar" ya queda habilitado); si la pestaña está silenciada por el navegador, no sonará.
:::

## 🧭 Bueno saberlo

- El Dashboard es de **solo lectura**: no permite moderar ni modificar nada de la Aventura.
- El nivel del orbe (progreso global) es la **media de Retos completados por jugador** sobre los Retos jugables de la Aventura.
- Puedes abrir el panel directamente con `https://live.adventuriq.com/dashboard/{GamePIN}` (el mismo GamePIN de unión de la Aventura), y admite `?top=15&refresh=20` en la URL para fijar los ajustes al abrir.

## 📚 Continúa aprendiendo

- Las métricas completas de la Aventura, Player a Player: [Clasificación](../metricas/clasificacion.md) y [Game Board](../metricas/game-board.md).
- Si lo que quieres es conducir un **concurso en directo** dirigido por un moderador: [Modo Arena](./index.md).
- Cómo se unen los Players con el GamePIN o el QR: [Acceder a una Aventura](../aventuras/acceder-a-una-aventura.md).
