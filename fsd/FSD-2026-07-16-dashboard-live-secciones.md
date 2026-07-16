---
feature_name: Dashboard Live — Secciones de contenido (Galería, Muro, Votaciones y Nube de palabras)
date: 2026-07-16
components: [API]
docusaurus_path: docs/modo-arena/dashboard-live.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Dashboard Live — vistas de Galería, Muro, Votaciones y Nube de
  palabras
- **Descripción:** El Dashboard Live incorpora botones de acceso a cuatro
  vistas de contenido a pantalla completa, pensadas para proyectar: la
  **Galería de imágenes** que comparten los Players (con modo presentación y
  ampliación al hacer clic), el **Muro** de respuestas libres, las
  **Votaciones entre Players** (de forma anónima) y la **Nube de palabras**
  que crece en directo.
- **Componentes afectados:** API y el visor AdventuriQ Arena
  (`live.adventuriq.com/dashboard/...`). El Gamifier no cambia (solo recibe
  la entrada de changelog).
- **Fecha de despliegue:** 2026-07-16

> **Nota para Cowork/humano:** esta feature **amplía la página existente del
> Dashboard Live** (`docs/modo-arena/dashboard-live.md`); no es una página
> nueva. Igual que el resto del Dashboard, funciona con cualquier Aventura
> (también en Borrador) sin necesidad del Modo Live (Arena).

---

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master / Game Designer (visor del Dashboard)

- **Ver botones de acceso** a las secciones de contenido, justo debajo de la
  cabecera del Dashboard (y de la cuenta atrás, si está visible). Cada botón
  lleva un **contador** con el volumen de contenido: «📷 Galería · 42»,
  «💬 Muro · 12», «⭐ Votaciones · 9», «☁️ Nube de palabras · 25».
  - Los botones **solo aparecen si la Aventura tiene ese contenido**: la
    Galería si hay fotos compartidas, el Muro si hay Retos de Respuesta Libre
    configurados para publicarse en el muro, las Votaciones si la Aventura
    las tiene activadas y la Nube si hay Retos de Nube de Palabras. Si no hay
    nada, el Dashboard se ve exactamente igual que antes.
- **Abrir cada sección a pantalla completa**: la vista ocupa toda la
  pantalla, mantiene la etiqueta EN DIRECTO (o BORRADOR), **se actualiza sola
  cada pocos segundos** y tiene un botón **"← Volver"** (o la tecla Escape)
  que devuelve al panel principal tal y como estaba. Mientras una sección
  está abierta, el panel principal sigue actualizándose por debajo.
- **Galería de imágenes**: mosaico con las fotos y vídeos que los Players
  comparten en los Retos de tipo "Compartir foto", los más recientes primero,
  con el autor y el «hace cuánto» en cada pieza. Las fotos nuevas van
  entrando con una pequeña animación según llegan.
  - **Clic en una foto o vídeo** → se amplía a pantalla completa en una
    ventana modal; los **vídeos se reproducen con los controles habituales**
    (play/pausa, barra de progreso, volumen) y con sonido. Se cierra con la
    ✕, con Escape o haciendo clic fuera.
  - **Modo "Presentación"**: un botón de la cabecera pasa las fotos y vídeos
    a pantalla completa de forma automática (una cada ~6 segundos), ideal
    para dejar la pantalla sola durante una pausa o la entrega de premios.
    Las fotos nuevas se van incorporando al pase. Se sale con un clic o
    Escape.
- **Muro**: las respuestas de los Retos de Respuesta Libre marcados para
  publicarse en el muro (las públicas), como tarjetas con el autor, el Reto
  al que responden y el texto en grande, legible a distancia. Las más
  recientes, primero.
- **Votaciones**: dos columnas —
  - el **ranking de valoraciones**: los Players ordenados por su media de
    estrellas, con el número de votos recibidos;
  - los **últimos votos** recibidos (quién lo ha recibido, tipo de voto y
    estrellas). **Es anónimo a propósito**: en pantalla grande nunca se
    muestra quién emitió cada voto ni el motivo que escribió.
- **Nube de palabras**: la nube del Reto de tipo Nube de Palabras en grande,
  con cada palabra más grande cuantos más Players la han dicho, creciendo en
  directo, y la pregunta del Reto como subtítulo. Si la Aventura tiene varias
  Nubes, aparecen pestañas para cambiar de una a otra.
- **Cambiar el idioma** dentro de una sección con el selector de siempre:
  los títulos de Retos, tipos de voto y preguntas se retraducen al momento.

### Desde el punto de vista del Player (Webapp)

- El Player no interactúa con estas vistas: sus fotos, respuestas del muro,
  votos y palabras aparecen proyectados casi al momento mientras juega con
  normalidad desde la Webapp.

## 3. PREREQUISITOS DEL USUARIO

- Los del Dashboard Live: una **Aventura** (publicada o en Borrador) y
  sesión de **Game Master / Game Designer** en el visor.
- Para que aparezca cada botón:
  - **Galería**: al menos una foto/vídeo compartido por un Player.
  - **Muro**: al menos un Reto de **Respuesta Libre** con la opción de
    visualizar en el muro (visibilidad pública).
  - **Votaciones**: tener **activadas las Votaciones entre Players** en la
    Aventura.
  - **Nube de palabras**: al menos un Reto de **Nube de Palabras** en una
    Misión publicada (no en borrador).

## 4. FLUJOS PASO A PASO

### Flujo del visor (Dashboard)

1. Abrir el Dashboard Live de la Aventura (botón "Dashboard Live" del
   Gamifier o `live.adventuriq.com/dashboard/{PIN}`).
2. Bajo la cabecera, pulsar uno de los botones de sección (p. ej.
   **📷 Galería**).
3. La sección ocupa la pantalla y se actualiza sola. Proyectarla el tiempo
   que se quiera.
4. Pulsar **"← Volver"** (o Escape) para regresar al panel principal, que
   sigue como estaba.

### Flujo del modo presentación de la Galería

1. Dentro de la Galería, pulsar **"▶ Presentación"** (en la cabecera).
2. Las fotos y vídeos van pasando a pantalla completa automáticamente, con
   el nombre del autor debajo. Los vídeos se reproducen en silencio.
3. Hacer clic (o Escape) para volver al mosaico de la Galería.

### Flujo de ampliación de una foto/vídeo

1. En el mosaico de la Galería, hacer clic sobre cualquier pieza.
2. Se abre ampliada en una ventana modal; si es un vídeo, reproducirlo con
   sus controles (con sonido).
3. Cerrar con la ✕, Escape o clic fuera de la imagen.

## 5. PANTALLAS PARA CAPTURAR

- [ARENA] Dashboard principal con la fila de botones de sección visibles
  (Galería/Muro/Votaciones/Nube con contadores) →
  Nombre sugerido: modo-arena/dashboard-live-secciones-botones.png
- [ARENA] Galería en mosaico con varias fotos y un vídeo (badge ▶) →
  Nombre: modo-arena/dashboard-live-galeria.png
- [ARENA] Foto ampliada en el modal (con la ✕ y el autor debajo) →
  Nombre: modo-arena/dashboard-live-galeria-ampliada.png
- [ARENA] Modo presentación de la Galería a pantalla completa →
  Nombre: modo-arena/dashboard-live-galeria-presentacion.png
- [ARENA] Muro con varias tarjetas de respuestas →
  Nombre: modo-arena/dashboard-live-muro.png
- [ARENA] Votaciones: ranking de valoraciones + últimos votos →
  Nombre: modo-arena/dashboard-live-votaciones.png
- [ARENA] Nube de palabras en grande (si hay varias, con las pestañas) →
  Nombre: modo-arena/dashboard-live-nube-palabras.png

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/modo-arena/`
- **Nombre del archivo:** `dashboard-live.md`
- **sidebar_position sugerido:** el actual (misma página).
- **Tags sugeridos:** dashboard, galería, muro, votaciones, nube de palabras,
  directo, proyector
- **¿Es página nueva o actualización?** **Actualización** de la página
  existente del Dashboard Live: añadir una sección "Vistas de contenido"
  con las cuatro subsecciones.

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

- Todas las vistas son de **solo lectura**: no se puede borrar ni moderar
  contenido desde el Dashboard.
- Las secciones se refrescan cada **10–15 segundos** mientras están
  abiertas (más rápido que el panel principal, que sigue en su ritmo de
  ~30 s).
- En el **mosaico** de la Galería los vídeos se muestran en pausa (con el
  distintivo ▶); el sonido y los controles aparecen al ampliarlos. En el
  modo presentación se reproducen **en silencio**.
- El feed de **Votaciones** muestra los últimos 20 votos y es **anónimo por
  diseño**: la información de quién votó y el motivo existe (se puede
  consultar en el Gameboard del Gamifier) pero nunca se envía a esta
  pantalla.
- El contador del botón del Muro cuenta las respuestas publicadas; el de la
  Nube, las palabras enviadas; el de Votaciones, los votos emitidos; el de
  la Galería, las fotos/vídeos compartidos.
- Las palabras de la Nube se agrupan ignorando mayúsculas/minúsculas y
  espacios sobrantes («Sol» y « sol » cuentan como la misma palabra).
