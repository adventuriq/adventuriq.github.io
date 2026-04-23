---
feature_name: Reto Ruleta de la Fortuna
date: 2026-04-15
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/retos/ruleta-de-la-fortuna.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Ruleta de la Fortuna
- **Descripción:** Nuevo tipo de Reto (#13): una ruleta de la fortuna totalmente configurable. El Game Master define las porciones (con icono, color, texto y peso) y qué recompensa entrega cada una (puntos positivos, puntos negativos o un Objeto Digital). El Player gira la ruleta y recibe el premio correspondiente.
- **Componentes afectados:** API (v4.21.0), Gamifier (v4.33.0), Webapp (v2.25.0)
- **Fecha de despliegue:** 2026-04-15

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Crear un Reto de tipo **Ruleta de la Fortuna** desde el selector de tipos o desde "Crear Reto Rápido" dentro de una Misión. El Reto se crea con **4 porciones de ejemplo** con iconos y colores aleatorios.
- Editar las porciones libremente:
  - **Icono** seleccionable desde un popup flotante con iconos predefinidos.
  - **Color** de la porción con un selector.
  - **Peso** numérico (cuanto mayor, más probabilidad de que salga esa porción).
  - **Texto** multi-idioma con banderas por idioma.
  - **Recompensa** de la porción: puntos positivos, puntos negativos o un Objeto Digital (se elige en un modal con grid visual de objetos con imagen real y búsqueda).
- Añadir o eliminar porciones.
- Configurar el **número de giros** que el Player puede hacer en ese Reto.
- Activar el toggle **"Entrega única de objetos"** para impedir que un mismo Objeto Digital se entregue dos veces al mismo Player, incluso si vuelve a caer en esa porción.

### Desde el punto de vista del Player (Webapp)

- Ver la ruleta de la fortuna dibujada dinámicamente con las porciones, iconos y colores definidos por el Game Master.
- Pulsar el botón de girar y ver la animación:
  - La ruleta gira con una curva de desaceleración natural.
  - Sonido de "tick" al cruzar cada borde de porción, sincronizado con la velocidad real.
  - La posición de la ruleta se conserva entre giros (no se "reinicia" cada vez).
- Al parar, cabecera con feedback del resultado y **mini-animación tipo "loot-box"**: icono misterioso → temblor creciente → flash → revelación del premio.
- Si la porción entrega un Objeto Digital, se lanza la animación de revelación estándar de Premios y a continuación el carrusel del objeto obtenido.
- Hacer **múltiples giros** si el Game Master lo permite: los puntos se acumulan entre giros y solo al final se registra el resultado consolidado.
- Las porciones ya conseguidas (si "Entrega única" está activada) aparecen en **gris** a partir del tercer segundo tras el giro, para dejar claro que ya no están disponibles.
- Layout responsive: ruleta y panel en columna en móvil, en fila en escritorio.

## 3. PREREQUISITOS DEL USUARIO

- Aventura con al menos una Misión.
- Si vas a entregar Objetos Digitales, tenerlos creados previamente en la Aventura.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Configurar una Ruleta de la Fortuna

1. Abrir una Aventura → abrir una Misión → pulsar **"+ Nuevo Reto"**.
2. Seleccionar la tarjeta **Ruleta de la Fortuna** en el selector.
3. El Reto se crea automáticamente con 4 porciones de ejemplo.
4. Para cada porción:
   - Pulsar el icono para abrir el popup de iconos y elegir el que quieras.
   - Elegir el color de la porción.
   - Asignar un peso numérico (probabilidad relativa).
   - Escribir el texto por cada idioma de la Aventura.
   - Seleccionar la recompensa:
     - **Puntos**: introducir una cantidad (positiva o negativa).
     - **Objeto Digital**: pulsar el botón de selección, se abre un modal con grid de todos los Objetos Digitales de la Aventura con imagen y búsqueda; elegir uno.
5. Añadir o eliminar porciones con los botones correspondientes.
6. Ajustar el **Número de giros** (cuántas veces puede girar el Player).
7. Activar, si procede, el toggle **"Entrega única de objetos"**.
8. Guardar.

### Flujo Webapp — Jugar una Ruleta de la Fortuna

1. El Player abre el Reto desde el listado de la Misión.
2. Ve la ruleta dibujada con sus porciones (icono, color, texto).
3. Pulsa el botón **"Girar"**.
4. La ruleta gira con sonido de tick y desaceleración natural, y se detiene en una porción.
5. La cabecera cambia a feedback del resultado y se dispara la mini-animación de revelación.
6. Si el premio es un Objeto Digital, se lanza la animación de revelación estándar y el carrusel del objeto.
7. Si el Player aún tiene giros disponibles, vuelve a ver el botón "Girar" para continuar. Los puntos se van acumulando.
8. Al agotar los giros, se consolida el resultado y se avanza al siguiente Reto.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Selector de tipos de Reto con la tarjeta "Ruleta de la Fortuna" → Nombre: `retos/seleccion-tipo-ru.png`
- [GAMIFIER] Edición del Reto con 4 porciones visibles, iconos y colores → Nombre: `retos/ruleta-edicion.png`
- [GAMIFIER] Popup de selección de iconos flotante → Nombre: `retos/ruleta-popup-iconos.png`
- [GAMIFIER] Modal de selección de Objeto Digital con grid visual y búsqueda → Nombre: `retos/ruleta-modal-objetos.png`
- [GAMIFIER] Toggle "Entrega única de objetos" y campo "Número de giros" → Nombre: `retos/ruleta-opciones-avanzadas.png`
- [WEBAPP] Vista móvil de la ruleta antes de girar → Nombre: `retos/webapp-ruleta-mobile.png`
- [WEBAPP] Vista escritorio con ruleta a la izquierda y panel a la derecha → Nombre: `retos/webapp-ruleta-desktop.png`
- [WEBAPP] Animación de giro a medio giro → Nombre: `retos/webapp-ruleta-girando.png`
- [WEBAPP] Resultado con mini-animación de revelación tipo loot-box → Nombre: `retos/webapp-ruleta-reveal.png`
- [WEBAPP] Ruleta con porciones en gris (ya entregadas con "Entrega única") → Nombre: `retos/webapp-ruleta-agotada.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/retos/`
- **Nombre del archivo:** `ruleta-de-la-fortuna.md`
- **sidebar_position sugerido:** antes de Nube de Palabras (es el tipo #13).
- **Tags sugeridos:** `reto`, `ruleta`, `azar`, `puntos`, `objetos-digitales`, `mecanica`
- **¿Es página nueva o actualización?** Nueva

## 7. NOTAS TÉCNICAS

- El resultado de cada giro lo decide el servidor con una **selección ponderada por peso**: cuanto mayor sea el peso de una porción, más probable es que salga. No se puede predecir ni manipular desde el dispositivo del Player.
- Si se activa **"Entrega única de objetos"** y todas las porciones con Objeto Digital ya se han entregado al Player, el resto de giros caerán en las porciones con puntos o quedarán como porciones agotadas (visuales en gris tras 3 s de la animación).
- Los puntos pueden ser **negativos**: una porción de la ruleta puede restar puntos al Player.
- Los Objetos Digitales entregados por la ruleta se guardan en el Baúl del Player como cualquier otro Objeto Digital.
- Cada giro se anota en el servidor, pero el registro final (gamestate) del Reto se crea una única vez, cuando el Player agota sus giros.
