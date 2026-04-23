---
feature_name: Media Library en el mapa Indoor de Retos
date: 2026-03-20
components: [GAMIFIER]
docusaurus_path: docs/retos/localizacion-mapa-indoor.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Botón Media Library en el mapa Indoor de Retos
- **Descripción:** Al configurar un Reto con localización de tipo **Mapa Imagen (Indoor)**, el Game Master puede ahora elegir la imagen del mapa directamente desde la Media Library de la Aventura, sin tener que volver a subirla. Se corrige así una omisión: los demás puntos donde se asigna una imagen ya tenían este botón, pero faltaba en el mapa Indoor.
- **Componentes afectados:** Gamifier
- **Fecha de despliegue:** 2026-03-20

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Reutilizar una imagen ya presente en la Media Library de la Aventura como mapa Indoor de un Reto, en vez de subirla de nuevo.
- Elegir la imagen del mapa con dos opciones complementarias: subir una nueva (como hasta ahora) o escoger una ya existente desde la Media Library.
- El cambio se guarda automáticamente al seleccionar la imagen, sin tener que pulsar "Guardar" al final.

## 3. PREREQUISITOS DEL USUARIO

- Una Aventura creada con al menos un Reto.
- Que ese Reto tenga la localización configurada como **Mapa Imagen (Indoor)**.
- Tener imágenes ya en la Media Library de la Aventura si se quiere reutilizar alguna.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Asignar un mapa Indoor desde la Media Library

1. Ir a Aventuras y abrir la Aventura.
2. Abrir la Misión y el Reto al que quieras asignar un mapa Indoor.
3. En la sección de localización, elegir el tipo **Mapa Imagen (Indoor)**.
4. Donde antes solo veías el botón **"Nueva imagen"**, ahora aparece también **"Media Library"**.
5. Pulsar **"Media Library"**: se abre el selector con todas las imágenes subidas a la Aventura.
6. Elegir la imagen deseada. Se asigna al Reto como mapa Indoor y el cambio se guarda automáticamente.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Sección de localización del Reto con tipo Indoor y los dos botones ("Nueva imagen" + "Media Library") → Nombre: `retos/mapa-indoor-botones.png`
- [GAMIFIER] Selector de Media Library abierto desde mapa Indoor → Nombre: `retos/mapa-indoor-media-library.png`
- [GAMIFIER] Reto con imagen Indoor asignada tras elegirla de la Media Library → Nombre: `retos/mapa-indoor-asignado.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/retos/`
- **Nombre del archivo:** `localizacion-mapa-indoor.md` (si existe ya) o inclusión en la página existente sobre localizaciones de Reto.
- **sidebar_position sugerido:** dentro del apartado de localización del Reto.
- **Tags sugeridos:** `retos`, `localizacion`, `mapa-indoor`, `media-library`
- **¿Es página nueva o actualización?** Actualización de la página existente sobre localizaciones Indoor en Retos (si existe). Si no existe página específica, añadir un apartado en la página general de Retos.

## 7. NOTAS TÉCNICAS

- La imagen elegida desde Media Library se guarda inmediatamente, a diferencia del flujo clásico de "Nueva imagen" donde el guardado se confirma al pulsar "Guardar" de la sección. No hace falta cambiar hábitos: el resultado es el mismo.
- La feature es puramente de conveniencia; no afecta a cómo ven el mapa los Players.
