---
feature_name: Llaves digitales
date: 2026-07-31
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/aventuras/llaves-digitales.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Llaves digitales
- **Descripción:** Un nuevo tipo de Objeto Digital, la "Llave", permite bloquear Misiones y Retos: solo los Players que consiguen la llave (jugando, como cualquier Objeto Digital) pueden abrirlos, y opcionalmente el que abre comparte el acceso con su Clan. Las Misiones/Retos bloqueados pueden verse con candado o permanecer totalmente ocultos hasta conseguir la llave.
- **Componentes afectados:** API, Gamifier, Webapp
- **Fecha de despliegue:** 2026-07-31 (producción)
- **Versiones:** API v4.56.0 · Gamifier v4.60.0 · Webapp v2.45.0

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master / Game Designer (Gamifier)

- Crear Objetos Digitales de tipo **Llave**: como los de tipo Imagen (con su propia imagen, muy recomendable porque se muestra a lo grande al Player), con las mismas condiciones de obtención (grupos Y/O) y entrega en Reto, Misión o Aventura, incluida la Ruleta de la Fortuna.
- Activar en una Llave el **Desbloqueo de Clan**: cuando un Player la use para abrir, sus compañeros de Clan también podrán pasar (solo en Aventuras por Equipos).
- **Bloquear una Misión o un Reto con una Llave** desde su editor, en el bloque "Acceso por Llave digital" (junto al bloque "Acceso por Código"). La Llave se elige en un **diálogo de búsqueda** paginado y filtrable (ID, imagen y título), y una vez elegida se ve su imagen y su título, con un aviso de si comparte acceso con el Clan y un enlace para editarla. Modos:
  - **Visible con candado**: el Player ve la Misión/Reto en el listado con un candado; al intentar entrar sin la llave, una pantalla espectacular le muestra qué llave necesita.
  - **Oculta hasta poseer la llave**: la Misión/Reto NO aparece en el listado del Player hasta que él (o un compañero de Clan, si la llave comparte con el Clan) consigue la llave. Funciona como un mapa que se va revelando.
- Ver en los listados del Gamifier qué Misiones y Retos están bloqueados por llave (badge de llave; con ojo tachado si además están ocultos).
- Una misma Llave puede bloquear varias Misiones y Retos. Cada Misión/Reto admite una Llave.

### Desde el punto de vista del Player (Webapp)

- Al intentar entrar en una Misión/Reto bloqueado **sin la llave**: pantalla "Wow" a pantalla completa con la imagen y el nombre de la llave necesaria.
- Al conseguir la llave (jugando): aparece en el carrusel de premios **marcada como "Llave digital"** (distintivo sobre la imagen y un icono junto al título, para que se distinga de un Objeto común) y se guarda en el nuevo **Llavero** de la Bitácora, no en el Baúl.
- **Abrir** la Misión/Reto con su llave: animación de apertura (giro de llave, candado que se abre). Si la llave tiene Desbloqueo de Clan, se abre también para su Clan.
- **Misiones/Retos secretos**: los ocultos aparecen en el listado (con efecto de aparición) en cuanto el Player o su Clan consigue la llave. El compañero de Clan ve aparecer la Misión con candado cuando el poseedor recoge la llave, pero no puede entrar hasta que este la abra.
- **Llavero** (nueva pastilla en la Bitácora, visible solo en Aventuras que usan llaves): colección de llaves obtenidas con imagen, fecha, indicador de Clan y la lista de qué abre cada una (con su estado ✓ abierta / bloqueada). Al tocar una llave se abre su ficha completa, igual que un Objeto del Baúl.

## 3. PREREQUISITOS DEL USUARIO

- Tener una Aventura creada con al menos una Misión y un Reto.
- Para el Desbloqueo de Clan: la Aventura debe estar en modo **Por Equipos** y con Clanes creados.
- Crear primero el Objeto Digital de tipo Llave antes de poder seleccionarlo como bloqueo en Misiones/Retos.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier

1. En la Aventura, crear un Objeto Digital nuevo y elegir Tipo de Objeto = **Llave**; subir su imagen y configurar sus condiciones de obtención (por ejemplo, "al superar el Reto 1").
2. (Opcional) Activar el toggle **Desbloqueo de Clan**.
3. Ir al editor de la Misión (o del Reto) que se quiere bloquear → bloque **Bloqueo por Llave digital** → activar "Requiere Llave" → seleccionar la Llave en el desplegable.
4. Elegir el modo: **Visible con candado** (por defecto) u **Oculta hasta poseer la llave**.
5. Guardar. En el listado de la Aventura, la Misión/Reto muestra el badge de llave.

### Flujo Webapp (Player)

1. Entrar en la Aventura: la Misión bloqueada aparece con candado/llave (o no aparece, si es oculta).
2. Tocar la Misión bloqueada sin tener la llave → pantalla de bloqueo con la imagen y nombre de la llave necesaria.
3. Jugar y conseguir la llave (se muestra como premio y va al Llavero).
4. Si la Misión era oculta, aparece en el listado con efecto de aparición.
5. Volver a tocar la Misión → pantalla de apertura → botón **Abrir** → animación → acceso. Si la llave comparte con el Clan, los compañeros ya pueden entrar directamente.
6. Consultar el **Llavero** desde la Bitácora para ver las llaves y qué abre cada una.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Editor de Objeto Digital con Tipo "Llave" y toggle Desbloqueo de Clan → Nombre: aventuras/llave-editor-objeto.png
- [GAMIFIER] Bloque "Bloqueo por Llave digital" en el editor de Misión (con selector y modos) → Nombre: aventuras/llave-editor-mision.png
- [GAMIFIER] Bloque de llave en el editor de Reto → Nombre: aventuras/llave-editor-reto.png
- [GAMIFIER] Listado de Misiones/Retos con badge de llave y de oculta → Nombre: aventuras/llave-badges-listado.png
- [WEBAPP] Pantalla de bloqueo sin llave (imagen de llave desaturada + candado) → Nombre: aventuras/webapp-llave-bloqueada.png
- [WEBAPP] Pantalla de apertura con botón "Abrir" (llave a color) → Nombre: aventuras/webapp-llave-abrir.png
- [WEBAPP] Card de Misión con icono de llave en el listado → Nombre: aventuras/webapp-llave-card.png
- [WEBAPP] Llavero en la Bitácora con llaves y lista "Abre" → Nombre: aventuras/webapp-llavero.png
- [WEBAPP] Carrusel de premio mostrando una Llave obtenida → Nombre: aventuras/webapp-llave-premio.png

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `llaves-digitales.md`
- **sidebar_position sugerido:** después de la página de Objetos Digitales
- **Tags sugeridos:** [objetos-digitales, misiones, retos, clanes, bloqueos]
- **¿Es página nueva o actualización?** Nueva (+ actualización menor de la página de Objetos Digitales para mencionar el tipo Llave, y de la página de la Bitácora para la pastilla Llavero)

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

- **Cómo probar el modo oculto**: desde la **webapp**, un Admin/Game Master/Game Designer ve la Aventura EXACTAMENTE como un player (las Misiones y Retos ocultos no aparecen hasta conseguir la llave). En el **Gamifier** se sigue viendo todo el contenido, para poder gestionarlo. No hace falta una cuenta de player para testear.

- La validación es en servidor: el Player no puede saltarse el bloqueo aunque manipule la aplicación.
- El "abrir" es un acto explícito y queda registrado; el Desbloqueo de Clan se comparte a partir de ese momento (un Player que se une al Clan después NO hereda las aperturas anteriores, aunque sí ve las Misiones ocultas que el Clan haya revelado).
- El Desbloqueo de Clan solo tiene efecto en Aventuras Por Equipos; en modo Individual se ignora.
- Si se borra una Llave desde el Gamifier, las Misiones/Retos que bloqueaba quedan automáticamente desbloqueados (nunca queda una puerta cerrada sin llave existente).
- Al clonar una Aventura, los bloqueos se clonan apuntando a las llaves clonadas. Excepción: si la llave era un Objeto Digital a nivel de Aventura (que hoy no se clona), el bloqueo se elimina en el clon.
- Las condiciones de finalización tipo "superar todos los Retos" cuentan también los Retos ocultos: el Game Designer debe asegurarse de que las llaves sean alcanzables (evitar cadenas imposibles, como esconder una llave dentro de la propia Misión que abre).
- Las llaves NO se aplican en sesiones Live (Arena) en esta versión; se desaconseja combinar ambas.
- Se recomienda dejar la cantidad máxima de la Llave sin límite: un stock limitado puede dejar Players sin acceso (el Desbloqueo de Clan es la válvula de escape).
- Los invitados de "Jugar sin registro" funcionan exactamente igual que los Players registrados.
