---
feature_name: Objetos Digitales a nivel de Aventura
date: 2026-04-21
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/aventuras/objetos-digitales-aventura.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Objetos Digitales a nivel de Aventura
- **Descripción:** Los Game Masters ahora pueden asociar objetos digitales (imagen, audio o vídeo) a la Aventura completa, con condiciones de obtención combinables en lógica AND/OR por grupos. Los Players los reciben al finalizar la Aventura con una animación épica exclusiva (trofeo dorado + fuegos artificiales).
- **Componentes afectados:** API (v4.23.0), Gamifier (v4.35.0), Webapp (v2.28.0)
- **Fecha de despliegue:** 2026-04-21

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Añadir objetos digitales a una Aventura entera (no sólo a Misiones o Retos). Aparece un bloque nuevo en la edición de Aventura, titulado **"Objetos Digitales de la Aventura"**, justo encima del bloque de Misiones.
- Crear, editar y eliminar objetos (imagen / audio / vídeo) con traducciones multi-idioma, código único opcional y todos los atributos ya existentes para objetos digitales.
- Configurar **condiciones de obtención** que combinan lógica **AND** (dentro de un grupo) y **OR** (entre grupos), visualizadas como tarjetas separadas con el separador "O BIEN" entre ellas. Ejemplo real: *"Entrega el cromo si (ha terminado todas las misiones **Y** ha conseguido ≥ 1000 pts) **O BIEN** si (acabó las misiones 1 y 3 **Y** lo hizo en menos de 30 min)"*.
- Seleccionar misiones concretas desde un modal con checkboxes (condición #2) y respuestas de retos P/R desde otro modal (condición #7), sin tener que escribir IDs a mano.
- Editar cualquier condición ya guardada pulsando el icono de lápiz; se carga en el formulario con los valores actuales y con los nombres legibles de misiones/respuestas en vez de IDs crudos.
- Ver el título legible de cada misión/respuesta en la tabla de condiciones activas (no sólo el ID numérico).

### Desde el punto de vista del Player (Webapp)

- Al finalizar una Aventura ver una **animación épica exclusiva** (4,5 s) distinta a la de recompensas de Misión: cielo nocturno estrellado, trofeo dorado gigante con flip 3D, 3 fuegos artificiales multicolor en cascada, rayos solares giratorios y banner "¡AVENTURA COMPLETADA!" en gradiente oro-naranja-rojo.
- Si la Aventura tiene objetos digitales configurados y el Player cumple sus condiciones, aparece un botón **"Objetos obtenidos"** en la pantalla de finalización.
- Al pulsarlo, se lanza una **segunda animación** más sobria (variante púrpura con estrellas, 3 s) y a continuación un carrusel con los objetos obtenidos (imagen/audio/vídeo), navegables con flechas o puntos.
- Los objetos obtenidos quedan guardados en el **Baúl** del Player, categorizados por la tag del objeto.
- **Idempotencia**: aunque el Player vuelva a la pantalla de finalización de la misma Aventura, los objetos no se duplican en el Baúl — se entregan una sola vez por Aventura finalizada.

## 3. PREREQUISITOS DEL USUARIO

- Game Master con una Aventura creada (en cualquier estado: borrador o publicada).
- No necesitas tokens adicionales para esta feature; usa los mismos recursos de almacenamiento que los objetos de Misión/Reto.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Crear un objeto digital de Aventura con condiciones AND/OR

1. Ir a Aventuras → abrir la Aventura que quieras editar.
2. Bajar al bloque **"Objetos Digitales de la Aventura"** (está justo encima del bloque de Misiones).
3. Pulsar **"+ Nuevo objeto"** en la cabecera del bloque.
4. Se abre la pantalla de creación del objeto. Rellenar:
   - Tipo (Imagen / Audio / Vídeo).
   - Traducciones (título y descripción por idioma).
   - Subir el archivo correspondiente (imagen 300x300, audio MP3 o vídeo MP4).
   - Opcional: activar "Generar código único" si el objeto debe ser único por Player.
5. Pulsar **"Crear"**. El objeto queda creado y se redirige a su edición completa.
6. Bajar al bloque **"Condiciones de Obtención a Nivel de Aventura"**.
7. Por defecto hay un **Grupo 1** vacío (dentro del grupo, todas las condiciones se combinan con AND).
8. En el desplegable seleccionar una condición (ej. "Si ha finalizado todas las Misiones") y pulsar **"+ Añadir condición"**. Se guarda automáticamente.
9. Repetir para añadir más condiciones al mismo grupo (todas deben cumplirse).
10. Para añadir una alternativa (OR), pulsar **"+ Añadir nuevo grupo OR"** al final del bloque. Aparece un nuevo grupo precedido por el separador **"O BIEN"**.
11. Añadir condiciones al Grupo 2 del mismo modo. El Player obtendrá el objeto si cumple Grupo 1 **o bien** Grupo 2 entero.
12. Para editar una condición existente, pulsar el icono de lápiz azul de su fila.
13. Para eliminar un grupo entero, pulsar el botón rojo **"Eliminar grupo"** en la cabecera del grupo. Confirmar.

### Flujo Webapp — Ver la animación épica y recibir los objetos

1. El Player termina una Aventura que cumple las condiciones de finalización (como siempre).
2. Aparece automáticamente la pantalla de **finalización de Aventura** con la nueva animación épica de 4,5 s.
3. Terminada la animación, si la Aventura tiene objetos digitales configurados y el Player cumple al menos un grupo de condiciones de obtención, se muestra un botón **"Objetos obtenidos"** con icono de estrellas (junto al botón "Continuar" de siempre).
4. Al pulsar **"Objetos obtenidos"** se lanza una segunda animación (variante púrpura con estrellas, 3 s).
5. Al terminar la animación se muestra un carrusel con los objetos, uno a uno, navegables con flechas izquierda/derecha o puntos. Para cada objeto se ve su imagen / se reproduce su audio / se ve su vídeo.
6. Al pulsar **"Continuar"** en el carrusel, el Player vuelve al listado de Misiones de la Aventura. Los objetos ya están guardados en su Baúl (menú lateral → Baúl → pestaña correspondiente a la tag del objeto).

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Edición de Aventura con el nuevo bloque "Objetos Digitales de la Aventura" visible → `aventura/bloque-objetos-aventura.png`
- [GAMIFIER] Creación/edición de un objeto digital de Aventura → `aventura/objeto-aventura-edicion.png`
- [GAMIFIER] Bloque "Condiciones de Obtención a Nivel de Aventura" con 2 grupos visibles (mostrando el separador "O BIEN") → `aventura/condiciones-grupos-and-or.png`
- [GAMIFIER] Modal de selección múltiple de misiones (al pulsar el botón del picker en condición tipo 2) → `aventura/modal-seleccionar-misiones.png`
- [WEBAPP] Animación épica de finalización de Aventura (captura del momento del trofeo + fuegos artificiales) → `webapp/finalizacion-aventura-animacion.png`
- [WEBAPP] Pantalla de finalización de Aventura mostrando los dos botones: "Continuar" y "Objetos obtenidos" → `webapp/finalizacion-aventura-botones.png`
- [WEBAPP] Segunda animación (variante púrpura con estrellas) al pulsar "Objetos obtenidos" → `webapp/reveal-objetos-aventura.png`
- [WEBAPP] Carrusel con un objeto digital obtenido de Aventura → `webapp/carrusel-objeto-aventura.png`
- [WEBAPP] Baúl del Player mostrando los objetos obtenidos → `webapp/baul-objetos-aventura.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `objetos-digitales-aventura.md`
- **sidebar_position sugerido:** junto a la sección de objetos digitales existente, detrás de los objetos de Misión y Reto
- **Tags sugeridos:** aventura, objetos-digitales, recompensas, condiciones-obtencion, gamificacion
- **¿Es página nueva o actualización?** Nueva (documenta un tercer nivel de objetos — Aventura — adicional a los ya documentados de Misión y Reto).

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

- La condición **"Si ha finalizado el siguiente número de Misiones"** requiere valor ≥ 1 (con valor 0 no entrega el objeto). Esto es intencional.
- La condición **"Si el jugador/a ha seleccionado un ID de respuesta concreto"** admite múltiples IDs separados por comas; basta con que el Player haya seleccionado **al menos uno** de ellos en algún momento de la Aventura.
- **Mecánica futura — Coleccionar cromos:** aunque ahora mismo los objetos se entregan una sola vez por Player y Aventura (idempotencia), el diseño está preparado para que en una futura feature los Players puedan intercambiar objetos repetidos entre sí. Por eso el modelo permite guardar múltiples entregas si así se quisiera en el futuro, pero de momento queda bloqueado a una entrega por Aventura.
- La animación épica de finalización de Aventura se muestra **en toda finalización** de Aventura, tenga o no objetos digitales asociados. El botón "Objetos obtenidos" sólo aparece si realmente hay objetos a entregar y el Player cumple condiciones.
- El Game Master no tiene que hacer nada especial para que las condiciones de obtención **respeten OR entre grupos** — basta con pulsar "+ Añadir nuevo grupo OR" y el sistema lo gestiona automáticamente.
