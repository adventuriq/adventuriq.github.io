---
feature_name: Todos los Objetos de la Aventura
date: 2026-06-03
components: [API] [GAMIFIER]
docusaurus_path: docs/objetos-digitales/todos-los-objetos.md
---

## 1. RESUMEN DE LA FEATURE
- **Nombre:** Todos los Objetos
- **Descripción:** Una nueva sección en la edición de la Aventura que reúne en una sola lista todos los objetos digitales que has creado, sin importar si están en un Reto, en una Misión o en la propia Aventura, para verlos, editarlos o eliminarlos desde un único sitio.
- **Componentes afectados:** API (v4.38.0), Gamifier (v4.49.0)
- **Fecha de despliegue:** 2026-06-03

## 2. QUÉ PUEDE HACER EL USUARIO AHORA
### Desde el punto de vista del Game Master (Gamifier)
- Ver de un vistazo **todos** los objetos digitales de una Aventura en una única lista, sin tener que entrar reto por reto ni misión por misión.
- Identificar rápidamente cada objeto: miniatura si es una imagen, o un icono si es de audio o de vídeo.
- Leer el título de cada objeto en el idioma por defecto de la Aventura.
- Saber el **origen** de cada objeto gracias a una etiqueta de color: Aventura, Misión #X o Reto #X.
- Ver, en la columna **Misión / Reto**, la **imagen de cabecera** y el **título** (en el idioma por defecto de la Aventura) del Reto o Misión al que pertenece el objeto. Ese título es un enlace que **abre el Reto o la Misión en una pestaña nueva**, con las migas de navegación bien puestas. (Para los objetos creados a nivel de Aventura esta columna aparece vacía.)
- **Editar** cualquier objeto directamente desde la lista; al hacerlo se abre el formulario del objeto **en una pestaña nueva**, con las migas de navegación correctas para volver a su Reto o a su Misión, manteniendo el listado de la Aventura a la vista.
- **Eliminar** cualquier objeto desde la lista, con una confirmación previa.

### Desde el punto de vista del Player (Webapp) — si aplica
- No aplica. Es una herramienta de gestión interna del Game Master; el Player no ve cambios.

## 3. PREREQUISITOS DEL USUARIO
- Necesitas tener al menos una Aventura creada y abierta en modo edición.
- Para que la lista muestre objetos, la Aventura debe tener objetos digitales creados en alguno de sus niveles (Aventura, Misión o Reto).

## 4. FLUJOS PASO A PASO

### Flujo Gamifier (si aplica)
1. Entra en el Gamifier y abre una Aventura existente (Aventuras → seleccionar una → editar).
2. Baja en el formulario de la Aventura hasta la sección **Retos**.
3. Justo debajo encontrarás la nueva sección **Todos los Objetos**, con el número total entre paréntesis.
4. Cada fila muestra: la miniatura o el icono del tipo de objeto, su ID, su título, la etiqueta de origen, la columna **Misión / Reto** (cabecera + título del Reto/Misión padre) y los botones de acción.
5. En la columna **Misión / Reto**, pulsa el título del Reto o Misión: se abre en una **pestaña nueva** ese Reto o Misión, con sus migas de navegación, dejando el listado de objetos en la pestaña original.
6. Para modificar un objeto, pulsa **Editar** (icono de lápiz) —o su miniatura, ID o título—: el formulario del objeto se abre **en una pestaña nueva**. Arriba verás las migas de navegación (p. ej. Inicio › Misión #X › Reto #X › Objeto) que te permiten volver al Reto o a la Misión de origen.
7. Para borrar un objeto, pulsa **Eliminar** (icono de papelera) y confirma. El objeto se elimina por completo y desaparece de la lista y de su Reto, Misión o Aventura.

### Flujo Webapp (si aplica)
- No aplica.

## 5. PANTALLAS PARA CAPTURAR
Lista explícita que Cowork usará para tomar capturas:
- [GAMIFIER] Edición de Aventura, sección "Todos los Objetos" con varias filas (imagen, audio y vídeo) → Nombre sugerido: objetos-digitales/todos-los-objetos-listado.png
- [GAMIFIER] Detalle de una fila mostrando la etiqueta de origen (Aventura / Misión / Reto), la columna "Misión / Reto" (cabecera + título enlazado) y los botones Editar / Eliminar → Nombre: objetos-digitales/todos-los-objetos-fila-acciones.png
- [GAMIFIER] Formulario de edición del objeto abierto desde "Editar", mostrando las migas de navegación arriba → Nombre: objetos-digitales/todos-los-objetos-breadcrumbs.png
- [GAMIFIER] Diálogo de confirmación al pulsar Eliminar → Nombre: objetos-digitales/todos-los-objetos-eliminar.png

## 6. UBICACIÓN EN DOCUSAURUS
- **Carpeta destino:** `docs/objetos-digitales/`
- **Nombre del archivo:** `todos-los-objetos.md`
- **sidebar_position sugerido:** al final de la sección de Objetos Digitales (tras las páginas de objetos por Aventura/Misión/Reto)
- **Tags sugeridos:** objetos digitales, recompensas, aventura, gestión
- **¿Es página nueva o actualización?** Nueva

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)
- El título mostrado es siempre el del **idioma por defecto de la Aventura**. Si un objeto no tiene traducción en ese idioma, se muestra la primera traducción disponible o un texto genérico "Objeto #ID".
- Para los objetos de **audio** y **vídeo** se muestra siempre un icono (no una miniatura), porque su archivo multimedia no es una imagen. Las miniaturas solo aparecen en objetos de tipo imagen.
- El botón **Eliminar** borra el objeto digital por completo (no solo lo desvincula): deja de estar disponible en el Reto, Misión o Aventura donde estuviera.
- Si un mismo objeto estuviera vinculado a más de un nivel, aparecería una fila por cada origen, cada una editable de forma independiente.
- Tanto los enlaces de la columna **Misión / Reto** como los de **editar el objeto** se abren en una **pestaña nueva** del navegador, de forma que el listado de objetos de la Aventura permanece abierto en la pestaña original.
