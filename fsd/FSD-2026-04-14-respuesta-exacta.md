---
feature_name: Reto Respuesta Exacta
date: 2026-04-14
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/retos/respuesta-exacta.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Respuesta Exacta
- **Descripción:** Nuevo tipo de Reto (#10) en el que el Player debe escribir exactamente la palabra o frase correcta en un campo de texto. El Game Master configura cuántos reintentos permite y cuánta puntuación se obtiene en cada intento (tramos de bonus).
- **Componentes afectados:** API (v4.17.0), Gamifier (v4.30.0), Webapp (v2.19.0 + v2.20.0 con mejoras UX)
- **Fecha de despliegue:** 2026-04-14

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Crear un Reto de tipo **Respuesta Exacta** desde el selector de tipos de Reto o desde "Crear Reto Rápido" dentro de una Misión.
- Escribir la palabra o frase exacta que el Player debe introducir para acertar, por cada idioma de la Aventura.
- Configurar el número de **reintentos permitidos** (por defecto 2 reintentos → hasta 3 intentos en total).
- Definir **tramos de bonus por intento** en una tabla dinámica con porcentajes. Por ejemplo: 100% en el primer intento, 80% en el segundo, 50% en el tercero. El Game Master puede añadir o eliminar tramos libremente.
- Si solo se configura un tramo y vale 0%, la sección de bonus se oculta por completo al Player (útil para Retos donde simplemente se quiere validación sin penalización por intento).
- Al crear el Reto ya aparece con una traducción de ejemplo y los tramos por defecto (100, 80, 50), listos para personalizar.

### Desde el punto de vista del Player (Webapp)

- Ver el Reto con un diseño moderno y adaptable: imagen de cabecera arriba (en móvil) o a la izquierda (en escritorio), y panel oscuro con degradado dinámico basado en los colores de marca de la Aventura.
- Leer la pregunta y escribir la respuesta en un campo de texto con **autoenfoque** (el teclado aparece automáticamente al entrar).
- Ver los **tramos de bonus** (porcentajes por intento) como etiquetas, resaltando el tramo actual.
- Al fallar, ver el campo temblar (shake), un mensaje de error temporal y el foco volver al campo automáticamente a los pocos segundos para volver a intentarlo.
- Al acertar, ver el feedback verde permanente con la puntuación obtenida según el tramo alcanzado, y transición suave al siguiente Reto.
- Mejoras UX de v2.20.0: los tramos de bonus hacen salto de línea automático si son muchos (antes se podían salir de pantalla), los porcentajes inactivos tienen mejor contraste, el tamaño del texto es mayor y el autoenfoque es más agresivo para acelerar la escritura.

## 3. PREREQUISITOS DEL USUARIO

- Aventura con al menos una Misión.
- Tener clara la palabra o frase exacta que se quiere pedir, en cada idioma de la Aventura.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Crear un Reto de Respuesta Exacta

1. Abrir una Aventura → abrir una Misión → pulsar **"+ Nuevo Reto"**.
2. Seleccionar la tarjeta **Respuesta Exacta** en el selector de tipo.
3. En la edición del Reto:
   - Rellenar los datos generales.
   - Para cada idioma: escribir la **frase o palabra correcta** y el texto de la pregunta.
   - Ajustar el número de **reintentos permitidos**.
   - En la tabla de **tramos de bonus por intento**, definir el porcentaje de puntuación de cada intento. Usar los botones "+" y "–" para añadir o eliminar tramos.
4. Guardar.

### Flujo Webapp — Jugar un Reto de Respuesta Exacta

1. El Player entra en el Reto desde el listado de la Misión.
2. Se abre la pantalla con la imagen de cabecera, la pregunta y un campo de texto con el teclado ya abierto.
3. Debajo del campo, el Player ve los tramos de bonus (por ejemplo 100% / 80% / 50%), resaltando el tramo correspondiente al intento actual.
4. El Player escribe su respuesta y pulsa "Enviar".
5. Si **acierta**: la pantalla muestra feedback verde permanente, la puntuación obtenida (recompensa × porcentaje del tramo actual / 100) y al cabo de un momento avanza al siguiente Reto.
6. Si **falla**: aparece un mensaje de error temporal, el campo tiembla, el foco vuelve al campo y el Player puede volver a intentarlo consumiendo el siguiente tramo.
7. Si se agotan los reintentos, se registra fallo definitivo y se continúa al siguiente Reto sin puntos.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Selector de tipos de Reto con la tarjeta "Respuesta Exacta" visible → Nombre: `retos/seleccion-tipo-re.png`
- [GAMIFIER] Edición del Reto con frase correcta, pregunta y tabla de tramos de bonus → Nombre: `retos/respuesta-exacta-edicion.png`
- [GAMIFIER] Tabla de tramos de bonus con 3 filas (100, 80, 50) y botones de añadir/eliminar → Nombre: `retos/respuesta-exacta-tramos.png`
- [WEBAPP] Vista móvil del Reto con campo de texto enfocado y tramos visibles → Nombre: `retos/webapp-re-mobile.png`
- [WEBAPP] Vista escritorio del Reto con imagen a la izquierda y panel oscuro a la derecha → Nombre: `retos/webapp-re-desktop.png`
- [WEBAPP] Feedback de acierto con puntuación obtenida → Nombre: `retos/webapp-re-acierto.png`
- [WEBAPP] Estado de fallo con mensaje temporal y tramo siguiente resaltado → Nombre: `retos/webapp-re-fallo.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/retos/`
- **Nombre del archivo:** `respuesta-exacta.md`
- **sidebar_position sugerido:** después de "Respuesta Libre" (mecánica similar).
- **Tags sugeridos:** `reto`, `respuesta-exacta`, `mecanica`, `bonus`, `reintentos`
- **¿Es página nueva o actualización?** Nueva

## 7. NOTAS TÉCNICAS

- La comparación de la respuesta es **exacta**: se ignoran mayúsculas/minúsculas y espacios al inicio/final, pero no acentos ni errores ortográficos. Planifica las respuestas cortas y unívocas (una palabra o frase corta muy concreta).
- El cálculo de puntos por intento es: `recompensa_máxima × porcentaje_del_tramo_actual ÷ 100`. Si el primer tramo es 100%, el primer acierto da la recompensa completa.
- Un tramo con 0% significa que en ese intento no se obtendrá puntuación (pero sí se valida la respuesta).
- Si solo hay un tramo único con valor 0%, la sección de tramos se oculta en la Webapp (útil cuando el Game Master no quiere mostrar porcentajes al Player).
- Esta página cubre también las mejoras UX añadidas el mismo día (Webapp v2.20.0): salto de línea automático de tramos, mejor contraste, autoenfoque tras fallo.
