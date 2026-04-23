---
feature_name: Biblioteca de Medios de la Aventura
date: 2026-02-12
components: [API] [GAMIFIER]
docusaurus_path: docs/aventuras/biblioteca-de-medios.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Biblioteca de Medios de la Aventura
- **Descripcion:** Cada Aventura dispone ahora de una biblioteca de archivos multimedia al estilo de los gestores de contenidos clasicos (WordPress). El Game Master puede subir imagenes, videos y audios por arrastrar y soltar, verlos en vista cuadricula o lista, renombrarlos, eliminarlos, copiar su URL y consultar el espacio total ocupado por la Aventura, todo desde una misma ventana.
- **Componentes afectados:** Gamifier (UI principal) y API (endpoints de soporte)
- **Fecha de despliegue:** 2026-02-12

## 2. QUE PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Abrir la **Biblioteca de Medios** desde un nuevo boton en la pantalla de edicion de una Aventura.
- **Subir archivos** arrastrandolos sobre la zona de drop o pulsando el boton de seleccion (admite varios archivos a la vez).
- Ver todos los archivos subidos en una **galeria visual**: imagenes como miniaturas y videos/audios como iconos representativos.
- Alternar entre **vista cuadricula** (con previsualizaciones) y **vista lista** (tabla con icono, nombre, fecha y tamano, al estilo del explorador de ficheros).
- Seleccionar un archivo para ver en un panel lateral un preview grande, su nombre, tamano, dimensiones (en imagenes) y fecha de subida. Cerrar ese panel con la **"x"** cuando estorbe.
- **Renombrar** archivos con validacion automatica (nombres seguros).
- **Eliminar** archivos con confirmacion previa para evitar borrados accidentales.
- **Copiar la URL** del archivo al portapapeles con un clic (para usarla en editores de texto enriquecido, por ejemplo).
- **Navegar a una subcarpeta** `player_images/` (fotos compartidas por los Players) y volver atras.
- Ver en la cabecera de la biblioteca el **espacio total ocupado** por la Aventura, calculado recursivamente incluyendo subcarpetas.

## 3. PREREQUISITOS DEL USUARIO

- Ser Game Master o Game Designer con una Aventura creada.
- Tener archivos para subir (imagenes, videos, audios) o archivos ya generados por los Players en sesiones anteriores.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier - Subir archivos a la biblioteca

1. Entrar a la edicion de una Aventura.
2. Pulsar el boton **"Biblioteca de Medios"**.
3. Arrastrar los archivos sobre la zona punteada o pulsar **"Seleccionar archivos"** y elegirlos desde el ordenador.
4. Los archivos aparecen en la galeria a medida que se suben.

### Flujo Gamifier - Alternar vistas

1. Con la biblioteca abierta, localizar en la barra superior los dos iconos de vista.
2. Pulsar el icono de **lista** para ver los archivos como una tabla.
3. Pulsar el icono de **cuadricula** para volver a la vista visual con miniaturas.

### Flujo Gamifier - Ver propiedades de un archivo

1. En la galeria, hacer clic sobre una miniatura o fila.
2. El panel de propiedades se abre a la derecha mostrando preview grande, nombre, tamano, dimensiones y fecha.
3. Pulsar la **"x"** del panel si quieres volver a ver la galeria a tamano completo.

### Flujo Gamifier - Renombrar un archivo

1. Seleccionar el archivo.
2. Pulsar **"Renombrar"** en el panel de propiedades.
3. Escribir el nuevo nombre y confirmar. Si el nombre ya existe o contiene caracteres no permitidos, el sistema lo avisa.

### Flujo Gamifier - Eliminar un archivo

1. Seleccionar el archivo y pulsar **"Eliminar"**.
2. Confirmar la accion en el popup.

### Flujo Gamifier - Copiar URL

1. Seleccionar el archivo.
2. Pulsar **"Copiar URL"**. Un mensaje confirma que la URL esta en el portapapeles.
3. Pegarla donde la necesites (descripcion de Reto, email, etc.).

### Flujo Gamifier - Navegar a `player_images/`

1. Si la Aventura tiene imagenes compartidas por Players, aparece un acceso a la subcarpeta **`player_images`**.
2. Entrar para verlas. Usar el boton **Volver** o la miga de pan para regresar al directorio principal.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Boton "Biblioteca de Medios" en la edicion de Aventura - Nombre: `biblioteca/boton-abrir.png`
- [GAMIFIER] Vista cuadricula de la biblioteca con varias imagenes y videos - Nombre: `biblioteca/vista-cuadricula.png`
- [GAMIFIER] Vista lista al estilo explorador de archivos - Nombre: `biblioteca/vista-lista.png`
- [GAMIFIER] Archivo seleccionado + panel de propiedades abierto - Nombre: `biblioteca/panel-propiedades.png`
- [GAMIFIER] Zona de arrastrar y soltar con archivo en vuelo - Nombre: `biblioteca/drag-and-drop.png`
- [GAMIFIER] Popup de confirmacion al eliminar - Nombre: `biblioteca/eliminar-confirmacion.png`
- [GAMIFIER] Cabecera mostrando el espacio total ocupado - Nombre: `biblioteca/espacio-total.png`
- [GAMIFIER] Subcarpeta `player_images/` con fotos de jugadores - Nombre: `biblioteca/player-images.png`

## 6. UBICACION EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `biblioteca-de-medios.md`
- **sidebar_position sugerido:** tras "configuracion-aventura", antes de "misiones".
- **Tags sugeridos:** `aventura`, `media`, `imagenes`, `videos`, `biblioteca`, `gamifier`
- **Es pagina nueva o actualizacion?** **Nueva**.

## 7. NOTAS TECNICAS

- La modal de la biblioteca se abre al 75% del ancho de la pantalla (maximo 1400 px) para dar espacio a la galeria.
- Los nombres de archivo estan validados (solo caracteres seguros, proteccion contra path traversal) y las subcarpetas estan limitadas a una lista blanca.
- El espacio total es un calculo recursivo: incluye la carpeta principal y sus subcarpetas (`player_images/` incluida).
- La biblioteca **no** es compartida entre Aventuras: cada Aventura tiene su propio espacio de archivos.
