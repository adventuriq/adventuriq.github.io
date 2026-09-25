---
feature_name: Compilación automática del marcador (.mind) del Reto de Realidad Aumentada
date: 2026-08-04
components: [GAMIFIER]
docusaurus_path: docs/retos/realidad-aumentada.md
---

## 1. RESUMEN DE LA FEATURE
- **Nombre:** Compilación automática del marcador y mejoras del editor del Reto de Realidad Aumentada
- **Descripción:** Al crear un Reto de Realidad Aumentada ya no hace falta preparar el archivo de reconocimiento con una herramienta externa: al subir la imagen marcador, el editor lo genera solo. Además ahora ves el progreso de cada subida y puedes quitar o reemplazar los archivos.
- **Componentes afectados:** Gamifier (editor del Reto AR)
- **Fecha de despliegue:** 2026-08-04

## 2. QUÉ PUEDE HACER EL USUARIO AHORA
### Desde el punto de vista del Game Master (Gamifier)
- Subir **solo la imagen marcador** y que el editor **genere automáticamente en el navegador** el target de reconocimiento (`.mind`), sin usar la herramienta externa de MindAR ni subirlo por separado.
- Ver una **barra de progreso con porcentaje** mientras se sube el modelo 3D, la imagen marcador o el `.mind`, y un **aviso claro si la subida falla**.
- Ver el progreso de **generación del target** mientras se compila.
- **Quitar o reemplazar** cualquiera de los archivos (modelo, imagen marcador, `.mind`) con el botón «Quitar». Al quitar la imagen marcador también se elimina su `.mind` asociado.
- Apoyarse en la nueva **guía del Ajuste vertical (Y)**: usar valores pequeños (0.05, 0.1, -0.1); 1 unidad equivale al tamaño del marcador, así que valores como 1, 2 o 3 sacan el objeto de cuadro (positivo = arriba, negativo = abajo).
- Como alternativa, sigue disponible la **subida manual** de un `.mind` ya compilado (fallback).

### Desde el punto de vista del Player (Webapp) — si aplica
- No cambia nada en la experiencia del Player. (Además, en una entrega paralela, el objeto 3D se muestra ahora más estable sobre el marcador — webapp v2.47.1.)

## 3. PREREQUISITOS DEL USUARIO
- Tener una Aventura con una Misión donde crear el Reto.
- Tener a mano el **modelo 3D** (`.glb`/`.gltf`) y una **imagen marcador** con suficiente detalle y contraste (las imágenes planas o muy brillantes se reconocen peor).

## 4. FLUJOS PASO A PASO

### Flujo Gamifier
1. Dentro de una Misión, crear un Reto de tipo **Realidad Aumentada**.
2. En el editor, **subir el modelo 3D** (`.glb`/`.gltf`) — se ve la barra de progreso.
3. **Subir la imagen marcador** — se ve la barra de subida y, a continuación, el mensaje de **«Generando target…»** con su progreso.
4. Al terminar, el campo del target (`.mind`) queda **relleno automáticamente**: aparece «Target generado automáticamente».
5. (Opcional) Ajustar **escala** y **Ajuste vertical (Y)** siguiendo la guía; definir la pregunta y las respuestas si el reto tiene pregunta.
6. (Opcional) Para cambiar un archivo, pulsar **«Quitar»** y subir otro.
7. Guardar el Reto.

## 5. PANTALLAS PARA CAPTURAR
- [GAMIFIER] Editor del Reto AR con el bloque de Escena 3D → Nombre: retos/ar-editor-escena-3d.png
- [GAMIFIER] Barra de progreso durante la subida de un archivo → Nombre: retos/ar-subida-progreso.png
- [GAMIFIER] Mensaje «Generando target…» tras subir la imagen marcador → Nombre: retos/ar-generando-target.png
- [GAMIFIER] Target generado automáticamente + botones «Quitar» → Nombre: retos/ar-target-generado.png
- [GAMIFIER] Campo «Ajuste vertical (Y)» con su texto de ayuda → Nombre: retos/ar-ajuste-y-ayuda.png

## 6. UBICACIÓN EN DOCUSAURUS
- **Carpeta destino:** `docs/retos/`
- **Nombre del archivo:** `realidad-aumentada.md`
- **sidebar_position sugerido:** (el que ya tenga la página del Reto AR)
- **Tags sugeridos:** realidad aumentada, AR, marcador, mind, modelo 3D, retos
- **¿Es página nueva o actualización?** Actualización (amplía la página del Reto de Realidad Aumentada creada en el FSD-2026-07-18)

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)
- La generación del `.mind` ocurre **en el navegador del Game Master** (equipo de escritorio), por lo que es cuestión de segundos; se muestra el progreso.
- La **calidad del marcador importa**: imágenes con mucho detalle y contraste generan targets que se reconocen mejor y con menos temblor.
- Si el navegador no pudiera compilar el `.mind`, el editor lo avisa y permite **subir manualmente** un `.mind` ya compilado.
