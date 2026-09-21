---
feature_name: Términos y Condiciones por Aventura
date: 2026-09-21
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/aventuras/terminos-y-condiciones.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Términos y Condiciones por Aventura
- **Descripción:** Cada Aventura puede pedir a los jugadores que acepten unos Términos y Condiciones antes de entrar, y preguntarles si quieren recibir comunicaciones comerciales. Las respuestas quedan registradas y se exportan junto al resto de datos de la Clasificación.
- **Componentes afectados:** Gamifier (edición de la Aventura y Clasificación), Webapp (pantalla de aceptación del jugador), API.
- **Fecha de despliegue:** 2026-09-21

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Escribir un texto de Términos y Condiciones propio para cada Aventura, en **cada idioma** que tenga la Aventura, con el editor de texto habitual (permite negritas, listas y enlaces, por ejemplo a su propia política de privacidad).
- Dejar el campo vacío si no quiere pedir aceptación: en ese caso la Aventura funciona exactamente igual que antes.
- Ver en la Clasificación dos columnas nuevas por jugador: si acepta comunicaciones comerciales y la fecha en que aceptó los Términos y Condiciones.
- Exportar esas dos columnas a CSV y Excel junto al resto de datos de la Clasificación.
- Cambiar el consentimiento de comunicaciones comerciales de un jugador concreto, por si cambia de opinión después de jugar.
- Restablecer el registro de un jugador: se borra su aceptación y la próxima vez que entre se le vuelven a pedir los Términos y Condiciones.

### Desde el punto de vista del Player (Webapp)

- Al pulsar «Adelante» en una Aventura que tenga Términos y Condiciones, ver el texto en su idioma dentro de una ventana, con posibilidad de desplazarse para leerlo entero.
- Marcar que acepta los Términos y Condiciones (obligatorio para entrar) y, si quiere, marcar también que acepta recibir comunicaciones comerciales (opcional).
- Abrir los enlaces que contenga el texto (por ejemplo, la política de privacidad del organizador), que se abren en una pestaña nueva.
- No se le vuelven a pedir: solo se preguntan una vez por Aventura.

## 3. PREREQUISITOS DEL USUARIO

- Tener al menos una Aventura creada.
- Para que el texto salga en varios idiomas, tener esos idiomas añadidos en el bloque de Traducciones de la Aventura.
- Para ver las columnas nuevas en la Clasificación, la Aventura debe tener Términos y Condiciones escritos en algún idioma.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — escribir los Términos y Condiciones

1. Entrar en **Aventuras** y abrir la Aventura.
2. Bajar hasta el bloque **Traducciones** y seleccionar la pestaña del idioma.
3. Localizar el campo **Términos y Condiciones** (justo debajo de «Mensaje al acabar la Aventura»).
4. Escribir el texto legal. Se pueden añadir enlaces, por ejemplo a la política de privacidad propia.
5. Repetir en la pestaña de cada idioma de la Aventura.
6. Pulsar **Guardar Aventura**. Aparece el aviso «Aventura Actualizada».

### Flujo Gamifier — consultar y exportar el consentimiento

1. Entrar en la Aventura y abrir **Clasificación**.
2. Desplazar la tabla hacia la derecha hasta ver las columnas **Acepta com. comerciales** y **Fecha aceptación T&C**.
3. Los tres interruptores de arriba (**Solo Players**, **Han añadido la Aventura**, **No han jugado aún**) muestran las mismas columnas, útil para ver también a quien aceptó pero todavía no ha jugado.
4. Para exportar, abrir el menú de la tabla (icono de las tres líneas, arriba a la derecha) y elegir la exportación a CSV o Excel.

### Flujo Gamifier — rectificar o restablecer el consentimiento de un jugador

1. En la Clasificación, localizar la fila del jugador.
2. Para cambiar el consentimiento de comunicaciones comerciales, pulsar la **casilla** de la columna «Acepta com. comerciales». El cambio se guarda al momento.
   - La casilla aparece desactivada en los jugadores que todavía no han aceptado los Términos y Condiciones: no hay nada que rectificar.
3. Para dejar al jugador como al principio, pulsar el **icono de la goma** que aparece a la derecha de la casilla, y confirmar.
   - Se borra su aceptación completa. La próxima vez que entre en la Aventura se le volverán a pedir los Términos y Condiciones.
   - La fecha de aceptación de los Términos y Condiciones no se puede editar a mano: o es la fecha real en la que el jugador aceptó, o no hay registro.

### Flujo Webapp — el jugador acepta

1. Abrir la Aventura y pulsar **Adelante**.
2. Leer el texto en la ventana que aparece (se puede desplazar).
3. Marcar **He leído y acepto los términos y condiciones**. Hasta marcarlo, el botón «Aceptar» está desactivado.
4. Opcionalmente, marcar **Acepto recibir comunicaciones comerciales**.
5. Pulsar **Aceptar**: se entra en la Aventura con normalidad (si la Aventura pide código o token de acceso, se pide después, como siempre).
   - Pulsando **Cancelar** no se entra en la Aventura.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Bloque Traducciones de la Aventura con el campo **Términos y Condiciones** relleno → Nombre sugerido: `aventuras/terminos-condiciones-editor.png`
- [GAMIFIER] El mismo campo en la pestaña de un segundo idioma, mostrando las pestañas con banderas → Nombre: `aventuras/terminos-condiciones-idiomas.png`
- [GAMIFIER] Clasificación con las columnas «Acepta com. comerciales» y «Fecha aceptación T&C» visibles, con la casilla marcada en un jugador → Nombre: `metricas/clasificacion-consentimiento-columnas.png`
- [GAMIFIER] Detalle de la celda: casilla marcada + icono de la goma, y otra fila con la casilla desactivada → Nombre: `metricas/clasificacion-consentimiento-controles.png`
- [GAMIFIER] Ventana de confirmación al pulsar la goma («Restablecer consentimiento») → Nombre: `metricas/clasificacion-consentimiento-restablecer.png`
- [GAMIFIER] Menú de la tabla abierto con las opciones de exportación → Nombre: `metricas/clasificacion-exportar-consentimiento.png`
- [WEBAPP] Ventana de Términos y Condiciones con el texto y las dos casillas, botón «Aceptar» desactivado → Nombre: `aventuras/webapp-terminos-condiciones.png`
- [WEBAPP] La misma ventana con la casilla de Términos marcada y el botón «Aceptar» ya activo → Nombre: `aventuras/webapp-terminos-condiciones-aceptar.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `terminos-y-condiciones.md`
- **sidebar_position sugerido:** 13
- **Tags sugeridos:** aventura, términos y condiciones, consentimiento, privacidad, datos, comunicaciones comerciales, idiomas, clasificación, gamifier, webapp
- **¿Es página nueva o actualización?** **Nueva**.
  - Además, conviene **actualizar dos páginas existentes**:
    - `docs/metricas/clasificacion.md` → añadir las dos columnas nuevas, su exportación y los controles para rectificar o restablecer el consentimiento de un jugador.
    - `docs/aventuras/acceder-a-una-aventura.md` → mencionar que, si la Aventura tiene Términos y Condiciones, se piden antes que el código o el token de acceso.

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

- **Si el campo está vacío, no cambia nada**: no se muestra ninguna ventana al jugador y el acceso funciona como siempre. Solo las Aventuras con texto muestran las columnas en la Clasificación.
- **El texto se muestra en el idioma del jugador**; si no hay texto en su idioma, se usa el del idioma por defecto de la Aventura.
- **Se pregunta una sola vez por Aventura**. Si el Game Master restablece el registro de un jugador, se le vuelve a preguntar.
- **El enlace a la política de privacidad lo pone el Game Master dentro del propio texto**; AdventuriQ no añade ninguno.
- **La aceptación no se pierde al reiniciar la partida de un jugador**: se conserva aunque se borren sus estados de juego o vuelva a jugar. Solo desaparece si se elimina su cuenta o si el Game Master la restablece a mano.
- **La fecha de aceptación no es editable**, para que siga sirviendo como prueba de cuándo aceptó esa persona.
- **Al clonar una Aventura** se copian los Términos y Condiciones, pero no las aceptaciones: los jugadores de la copia deben aceptarlos de nuevo.
- **Jugadores que aceptaron pero aún no han jugado**: no aparecen en la vista «Solo Players» de la Clasificación, sino en «Han añadido la Aventura» y «No han jugado aún», que también muestran y exportan las columnas.
