---
feature_name: Galeria de fotos y videos compartidos en el Game Board
date: 2026-02-12
components: [API] [GAMIFIER]
docusaurus_path: docs/metricas/galeria-gameboard.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Galeria de fotos y videos compartidos en el Game Board
- **Descripcion:** Los Retos de tipo **Compartir Foto** acumulan fotos y videos que envian los Players durante la Aventura. Ahora el Game Master puede ver todo ese material directamente en el Game Board, dentro del panel de cada Reto: una galeria con miniaturas, lightbox a pantalla completa con navegacion por teclado y opcion para eliminar imagenes inadecuadas con un clic.
- **Componentes afectados:** Gamifier (UI del Game Board) y API (endpoints de listado y borrado)
- **Fecha de despliegue:** 2026-02-12

## 2. QUE PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- En el Game Board, al expandir un Reto de tipo **Compartir Foto**, ver una galeria de **miniaturas** con todas las fotos y videos enviados por los Players para ese Reto.
- Cada miniatura muestra el **nickname** del Player autor superpuesto.
- Pulsar cualquier miniatura para abrir un **lightbox** a pantalla completa con:
  - Imagen o video en tamano real (los videos se pueden reproducir).
  - Botones **anterior / siguiente** para navegar por toda la galeria.
  - Barra inferior con nickname, fecha, hashtags y contador (ej. *3 de 17*).
  - Cierre con el boton **"x"**, con clic fuera de la imagen o con la tecla **Escape**.
  - Navegacion con las **flechas del teclado**.
- **Eliminar** una foto o video cuestionable desde dos sitios:
  - Boton **"x"** en la esquina superior derecha de la miniatura.
  - Boton **"Eliminar"** en la barra info del lightbox.
- Tras confirmar el borrado, el archivo desaparece tanto del panel como del servidor (la Galeria publica que ven los Players en la Webapp deja de mostrarlo).
- Si el Reto aun no tiene imagenes, se muestra un **mensaje de galeria vacia**; si estan cargando, un **spinner**.

## 3. PREREQUISITOS DEL USUARIO

- Ser Game Master o Game Designer con acceso al Game Board.
- La Aventura debe contener al menos un Reto de tipo **Compartir Foto**.
- Para ver contenido, los Players ya deben haber enviado alguna foto o video.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier - Ver la galeria de un Reto

1. Abrir la Aventura y entrar en **Game Board**.
2. Localizar en la lista de Retos uno de tipo **Compartir Foto**.
3. Expandir el panel del Reto. La galeria se carga automaticamente (miniaturas de fotos y/o videos con nickname superpuesto).

### Flujo Gamifier - Ver a pantalla completa

1. Pulsar una miniatura.
2. Se abre el lightbox.
3. Usar los botones laterales o las **flechas del teclado** para navegar.
4. Cerrar con la **"x"**, con clic fuera de la imagen o con **Escape**.

### Flujo Gamifier - Eliminar una foto o video

1. Localizar la miniatura a borrar.
2. **Opcion A**: pulsar la **"x"** de la esquina superior derecha.
3. **Opcion B**: abrir el lightbox y pulsar **"Eliminar"** en la barra info.
4. Confirmar en el popup.
5. El archivo desaparece de la galeria y del servidor.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Game Board expandido con la galeria de un Reto "Compartir Foto" - Nombre: `metricas/galeria-reto-completa.png`
- [GAMIFIER] Miniatura con overlay de nickname y boton "x" - Nombre: `metricas/galeria-miniatura.png`
- [GAMIFIER] Lightbox mostrando una foto a pantalla completa - Nombre: `metricas/galeria-lightbox-foto.png`
- [GAMIFIER] Lightbox reproduciendo un video - Nombre: `metricas/galeria-lightbox-video.png`
- [GAMIFIER] Barra info del lightbox con boton "Eliminar" resaltado - Nombre: `metricas/galeria-lightbox-eliminar.png`
- [GAMIFIER] Popup de confirmacion de borrado - Nombre: `metricas/galeria-confirmar-eliminar.png`
- [GAMIFIER] Estado vacio: Reto "Compartir Foto" sin envios aun - Nombre: `metricas/galeria-vacia.png`

## 6. UBICACION EN DOCUSAURUS

- **Carpeta destino:** `docs/metricas/`
- **Nombre del archivo:** `galeria-gameboard.md` o anadir seccion en la pagina existente de Game Board.
- **sidebar_position sugerido:** despues de "estadisticas-gameboard".
- **Tags sugeridos:** `gameboard`, `compartir-foto`, `galeria`, `moderacion`, `metricas`
- **Es pagina nueva o actualizacion?** Preferentemente **actualizacion** de la pagina del Reto "Compartir Foto" y/o la pagina del Game Board, anadiendo esta seccion.

## 7. NOTAS TECNICAS

- La galeria se carga **bajo demanda** al expandir el panel del Reto (no se precarga al abrir el Game Board entero), para no penalizar rendimiento en Aventuras con mucho contenido.
- El borrado afecta tanto al registro de datos como al **archivo fisico** en el servidor: la foto o video deja de estar disponible para los Players en la Galeria publica.
- El borrado es **irreversible**. El popup de confirmacion es la ultima barrera; una vez aceptado, no hay papelera ni restauracion.
- El responsive de la cuadricula se adapta al tamano de pantalla: 2 columnas en movil, hasta 6 en escritorio.
