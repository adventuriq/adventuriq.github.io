---
feature_name: Reto de Realidad Aumentada (AR)
date: 2026-07-18
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/tipos-de-reto/realidad-aumentada.md
---

## 1. RESUMEN DE LA FEATURE
- **Nombre:** Reto de Realidad Aumentada (AR)
- **Descripción:** Un nuevo tipo de reto en el que el jugador apunta con la cámara del móvil a una imagen del decorado y aparece un objeto 3D en realidad aumentada, con opciones de respuesta debajo; al elegir, el objeto reproduce una animación.
- **Componentes afectados:** API (monolito), Gamifier, Webapp
- **Fecha de despliegue:** 2026-07-18

## 2. QUÉ PUEDE HACER EL USUARIO AHORA
### Desde el punto de vista del Game Master / Game Designer (Gamifier)
- Crear un nuevo tipo de reto **"Realidad Aumentada"** (desde el selector de tipos y desde el "Nuevo Reto" rápido dentro de una Misión).
- Subir un **modelo 3D** (archivo `.glb`/`.gltf`), una **imagen marcador** y su **target de reconocimiento** (`.mind`) que la cámara reconocerá.
- Ajustar la **escala** del objeto (valor seguro por defecto 0.01, editable) y su encuadre vertical.
- Elegir si el reto lleva **pregunta** (con opciones correcta/incorrecta bajo el objeto) o solo muestra el objeto ("visto").
- Asignar a **cada respuesta una animación distinta** del modelo 3D (por ejemplo, una animación de acierto y otra de error, o una por cada respuesta).
- Vincular un **objeto digital** al reto, que se entrega al completarlo (igual que en el resto de retos).

### Desde el punto de vista del Player (Webapp)
- Al entrar en el reto, la **cámara del móvil se activa dentro de la propia app** (sin instalar nada).
- Al apuntar a la imagen del decorado, aparece el **objeto 3D** encima y, debajo, las **opciones de respuesta**.
- Al responder, el objeto reproduce la **animación** correspondiente y se registra el resultado (puntos, progreso, objeto digital).

## 3. PREREQUISITOS DEL USUARIO
- Tener al menos una **Aventura** con una **Misión** donde añadir el reto.
- Tener preparados: un **modelo 3D `.glb`** (con animaciones nombradas si se quieren usar) y una **imagen marcador**.
- El **target `.mind`** se compila a partir de la imagen marcador con la herramienta oficial de MindAR (https://hiukim.github.io/mind-ar-js-doc/tools/compile) y se sube al reto. *(La compilación dentro del Gamifier queda como mejora futura.)*
- El jugador necesita un móvil con **cámara** y conceder el **permiso de cámara** al navegador.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier
1. Entrar en una Aventura → una Misión → **Nuevo Reto** (o "Añadir Reto") y elegir la tarjeta **"Realidad Aumentada"**.
2. Rellenar el título y la descripción del reto y **Guardar** (se crea el reto y su mecánica).
3. En el bloque **"Escena 3D / Realidad Aumentada"**: subir el **modelo (.glb)**, el **target (.mind)** y la **imagen marcador**.
4. Ajustar **Escala** (por defecto 0.01; subir/bajar para afinar el tamaño) y, si hace falta, el **Ajuste vertical**.
5. En **Mecánica**, elegir "Con pregunta"; escribir el **enunciado** y las **respuestas**, marcando la correcta.
6. En la columna **Animación** de cada respuesta, escribir el nombre del clip del modelo a reproducir (p. ej. una animación de acierto y otra de error).
7. (Opcional) Vincular un **objeto digital** al reto.
8. **Guardar cambios**.

### Flujo Webapp (Player)
1. Abrir la Aventura y entrar en el reto de Realidad Aumentada.
2. **Conceder el permiso de cámara** cuando el navegador lo pida.
3. Apuntar la cámara a la **imagen marcador** → aparece el aviso "Imagen detectada" y el **objeto 3D**.
4. Pulsar una de las **opciones de respuesta** → el objeto reproduce su animación y se muestra el **resultado** (acierto/fallo, puntos y progreso de la Misión).

## 5. PANTALLAS PARA CAPTURAR
- [GAMIFIER] Selector de tipos de reto con la tarjeta "Realidad Aumentada" → Nombre: `tipos-de-reto/realidad-aumentada-selector.png`
- [GAMIFIER] Editor del reto AR, bloque "Escena 3D / Realidad Aumentada" (modelo/target/marcador + escala) → Nombre: `tipos-de-reto/realidad-aumentada-editor-3d.png`
- [GAMIFIER] Editor del reto AR, pregunta + respuestas con la columna "Animación" → Nombre: `tipos-de-reto/realidad-aumentada-editor-respuestas.png`
- [WEBAPP] Player apuntando al marcador con el objeto 3D + opciones ("Imagen detectada") → Nombre: `tipos-de-reto/realidad-aumentada-webapp-objeto.png`
- [WEBAPP] Pantalla de resultado del reto AR → Nombre: `tipos-de-reto/realidad-aumentada-webapp-resultado.png`

## 6. UBICACIÓN EN DOCUSAURUS
- **Carpeta destino:** `docs/tipos-de-reto/`
- **Nombre del archivo:** `realidad-aumentada.md`
- **sidebar_position sugerido:** (al final de los tipos de reto existentes)
- **Tags sugeridos:** tipos de reto, realidad aumentada, AR, WebAR, cámara, 3D
- **¿Es página nueva o actualización?** Nueva

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)
- **Sin instalar app:** la realidad aumentada funciona dentro del navegador (WebAR con MindAR). Requiere HTTPS y permiso de cámara.
- **Compatibilidad:** validado en iPhone (Safari) y Android (Chrome).
- **Elección de la imagen marcador:** funcionan mucho mejor imágenes con **muchos detalles y buen contraste**; imágenes muy lisas, brillantes o uniformes se detectan peor.
- **Escala del modelo:** los modelos 3D se exportan a tamaños muy dispares. Por eso el campo "Escala" arranca en un valor seguro (0.01) y el Game Designer lo ajusta hasta que el objeto se vea bien sobre el marcador.
- **Animaciones:** para usar la columna "Animación", el modelo `.glb` debe traer clips de animación con nombre (se pueden consultar en un visor glTF).
- **Mejora futura prevista:** compilar el `.mind` automáticamente dentro del Gamifier al subir la imagen marcador (hoy se compila con la herramienta externa de MindAR).
