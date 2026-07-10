---
feature_name: Modo Arena (partidas en directo)
date: 2026-07-11
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/aventuras/modo-arena-live.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Modo Arena — jugar una Aventura en directo
- **Descripción:** Permite jugar una Aventura como un concurso en directo: un
  moderador proyecta cada Reto en una pantalla grande (AdventuriQ Arena) mientras
  los Players responden a la vez desde el móvil, sincronizados con el moderador.
- **Componentes afectados:** API, Gamifier, Webapp, y el visor AdventuriQ Arena
  (nueva aplicación en `live.adventuriq.com`).
- **Fecha de despliegue:** 2026-07-11

> **Nota para Cowork/humano:** el Modo Arena es un concepto nuevo y amplio.
> Este FSD documenta tanto la **configuración** (que vive en el editor de la
> Aventura, sección `aventuras/`) como la **experiencia de juego en directo**
> (moderador + Player). Puede que convenga una **sección propia** en el manual
> (p. ej. `docs/modo-arena/`) en lugar de una sola página bajo `aventuras/`.
> Se deja la decisión al responsable de la estructura del manual.

---

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master / Game Designer (Gamifier)

- **Activar el Modo Live (Arena)** en una Aventura, desde el nuevo bloque
  **"Opciones de la Aventura en modo Arena"** del editor de la Aventura.
- **Definir los segundos de la cuenta atrás** de cada Reto en directo. Si se pone
  **0**, no hay cuenta atrás: el Reto queda abierto hasta que responden todos los
  Players o hasta que el moderador cierra las respuestas a mano.
- **Activar la "puntuación según rapidez"**: con ella, cada Reto da más puntos
  cuanto antes se responda (100% al instante, 0% al agotar la cuenta atrás).
- **Lanzar la Aventura en Arena** con un botón directo (solo si la Aventura está
  publicada y con el Modo Live activo), que abre el visor en directo.
- **Moderar la partida** desde el visor: lanzar cada Reto, cerrarlo, pasar al
  siguiente, mostrar la clasificación y el podio, y finalizar.
- **Elegir el idioma** de la partida (entre los idiomas traducidos de la
  Aventura) antes de empezar.

### Desde el punto de vista del Player (Webapp)

- **Unirse a la partida en directo** con el Game PIN (o escaneando el QR) desde la
  Webapp; entra en una sala de espera hasta que el moderador arranca.
- **Responder cada Reto a la vez** que el resto, sincronizado con la pantalla del
  moderador; ve al instante si ha acertado, sus puntos y su posición.
- **Ver el podio final** con los avatares de los tres primeros y una **corona**
  para el ganador.

---

## 3. PREREQUISITOS DEL USUARIO

- Tener una **Aventura creada y publicada**.
- La Aventura debe tener al menos un Reto compatible con el Modo Arena en sus
  Misiones activas (ver Notas técnicas): Pregunta/Respuesta (con texto, imagen,
  audio o vídeo), Respuesta Exacta o Nube de Palabras.
- Cumplir los mismos criterios de publicación habituales (licencia vigente,
  espacio y, si aplica, Tokens).
- Una **pantalla grande / proyector** para el visor y **móviles** para los Players.

---

## 4. FLUJOS PASO A PASO

### Flujo Gamifier (Game Master / Game Designer)

1. Entrar en el editor de una Aventura (sección **Aventuras** → abrir la Aventura).
2. Bajar hasta el bloque **"Opciones de la Aventura en modo Arena"**.
3. Activar el interruptor **"Modo Live (Arena)"**.
4. (Opcional) Ajustar **"Segundos de cuenta atrás"** — poner **0** para que no
   haya cuenta atrás.
5. (Opcional) Activar **"Puntos según rapidez"**.
6. Guardar la Aventura y **publicarla** (si aún está en borrador).
7. Pulsar **"Lanzar en Arena"** (aparece en el mismo bloque y en la cabecera de la
   Aventura cuando está publicada con Modo Live). Se abre el visor en directo.

### Flujo del moderador (AdventuriQ Arena, pantalla grande)

1. En el visor aparece el **Game PIN** grande y un **QR** para que los Players se
   unan.
2. Elegir el **idioma** de la partida (si la Aventura tiene más de uno).
3. Cuando estén los Players en la sala, pulsar **empezar** (a partir de ahí no
   entran nuevos Players).
4. **Lanzar cada Reto**: se muestra la pregunta con su cuenta atrás (o el símbolo
   de "sin cuenta atrás") y el contador de respuestas en vivo.
5. Al cerrarse el Reto (por tiempo, porque han respondido todos, o pulsando
   **cerrar respuestas**), se muestra la **respuesta correcta** y la
   **clasificación parcial**.
6. Pulsar **siguiente** hasta terminar los Retos.
7. Se muestra el **podio** (top 3 con avatares y corona para el #1) y el botón
   **Finalizar**.

### Flujo Webapp (Player)

1. Abrir la Webapp e **introducir el Game PIN** (o escanear el QR / abrir el
   enlace `play.adventuriq.com/#/{GamePIN}`).
2. Esperar en la **sala de espera** a que el moderador arranque.
3. Cuando el moderador lanza un Reto, **responder desde el móvil**.
4. Ver el resultado del Reto (acierto/puntos) y la **posición**.
5. Al final, ver el **podio** y poder reentrar o salir.

---

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Editor de la Aventura → bloque "Opciones de la Aventura en modo
  Arena" con el interruptor, el campo de segundos y el de puntos por rapidez →
  Nombre: `aventuras/modo-arena-opciones.png`
- [GAMIFIER] El mismo bloque con el botón **"Lanzar en Arena"** visible (Aventura
  publicada) → Nombre: `aventuras/modo-arena-lanzar.png`
- [ARENA] Pantalla de **sala/lobby** con Game PIN + QR → Nombre:
  `aventuras/arena-lobby-gamepin.png`
- [ARENA] Pantalla de **Reto en directo** (pregunta + cuenta atrás + contador de
  respuestas) → Nombre: `aventuras/arena-reto-directo.png`
- [ARENA] Pantalla de **respuesta correcta / clasificación parcial** → Nombre:
  `aventuras/arena-clasificacion.png`
- [ARENA] Pantalla de **podio final** (avatares + corona del ganador) → Nombre:
  `aventuras/arena-podio.png`
- [WEBAPP] Pantalla del Player en **sala de espera** → Nombre:
  `aventuras/webapp-arena-espera.png`
- [WEBAPP] Pantalla del Player **respondiendo un Reto** en directo → Nombre:
  `aventuras/webapp-arena-reto.png`

---

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/` (o una sección nueva `docs/modo-arena/`
  si se decide dedicarle su propio apartado — ver nota del apartado 1).
- **Nombre del archivo:** `modo-arena-live.md`
- **sidebar_position sugerido:** al final de `aventuras/` (tras las páginas
  existentes) o como primera página de la sección nueva.
- **Tags sugeridos:** `modo-arena`, `live`, `directo`, `game-master`, `player`
- **¿Es página nueva o actualización?** Nueva.

---

## 7. NOTAS TÉCNICAS (relevantes para el manual)

- **Retos compatibles con el Modo Arena:** se juegan todos los Retos de las
  Misiones **activas** de tipo **Pregunta/Respuesta** (con texto, imagen, audio o
  vídeo), **Respuesta Exacta** y **Nube de Palabras**. El resto de tipos de Reto
  se **omiten** automáticamente de la partida. Los Retos incompletos también se
  omiten.
- **Cuenta atrás = 0 (sin cuenta atrás):** el Reto no vence por tiempo; se cierra
  cuando responden **todos** los Players unidos o cuando el moderador **cierra las
  respuestas** manualmente. En pantalla se muestra un símbolo de infinito en lugar
  del cronómetro.
- **La cuenta atrás la manda la Aventura:** el valor configurado a nivel de
  Aventura tiene prioridad sobre cualquier límite de tiempo propio del Reto (que
  solo aplica al juego clásico, no al directo).
- **Puntos según rapidez:** el cálculo lo hace el servidor al registrar cada
  respuesta, por lo que no se puede manipular desde el móvil. Si no hay cuenta
  atrás, no hay escalado por tiempo (se da la puntuación completa).
- **Una vez empezada la partida, no entran nuevos Players.**
- **En Modo Arena no se muestra la pantalla de feedback clásica** de cada Reto ni
  se entregan premios/objetos: el resultado se ve en la propia experiencia en
  directo.
- **Idioma de la partida:** lo elige el moderador antes de empezar, entre los
  idiomas traducidos de la Aventura; afecta al contenido que se ve en el visor.
- Direcciones: el visor del moderador está en `live.adventuriq.com`; los Players
  juegan desde la Webapp habitual.
