---
feature_name: Traducción por defecto al crear un Reto
date: 2026-04-14
components: [API] [GAMIFIER]
docusaurus_path: docs/retos/crear-reto.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Traducción por defecto al crear un Reto
- **Descripción:** Al crear un Reto nuevo de cualquiera de las mecánicas con pregunta/texto (Pregunta/Respuesta, Pregunta/Respuesta con Audio, Pregunta/Respuesta con Vídeo, Respuesta Exacta, Respuesta Libre y Llamada a la Acción), la mecánica ya nace con una traducción de ejemplo rellena en el idioma por defecto de la Aventura. Antes el Game Master tenía que añadir el idioma a mano y rellenar un texto mínimo antes de poder guardar.
- **Componentes afectados:** API (v4.18.x), Gamifier (v4.30.0)
- **Fecha de despliegue:** 2026-04-14

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Crear un Reto de tipo Pregunta/Respuesta, Pregunta/Respuesta con Audio, Pregunta/Respuesta con Vídeo, Respuesta Exacta, Respuesta Libre o Llamada a la Acción y **encontrarlo ya con contenido de ejemplo** en el idioma por defecto de la Aventura, sin necesidad de añadir manualmente la traducción ni rellenar el texto mínimo de la mecánica.
- Para las mecánicas de Pregunta/Respuesta (1, 11, 12): aparecen además **3 opciones de respuesta** de ejemplo listas para personalizar.
- Para Respuesta Exacta: los **tramos de bonus por intento** se inicializan con los valores típicos (100%, 80%, 50%).
- Ajustar todos los textos y opciones de ejemplo antes de publicar la Aventura.
- Se ha corregido además un detalle en Llamada a la Acción: por defecto el tipo de localización es ahora "Mapa imagen" (igual que el resto de mecánicas), en vez de "GPS + QR" que se aplicaba incorrectamente.

## 3. PREREQUISITOS DEL USUARIO

- Aventura creada con al menos un idioma configurado.
- Misión creada dentro de la Aventura.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Crear un Reto con traducción por defecto

1. Abrir una Aventura → abrir una Misión → pulsar **"+ Nuevo Reto"**.
2. Seleccionar una de las mecánicas afectadas: Pregunta/Respuesta, con Audio, con Vídeo, Respuesta Exacta, Respuesta Libre o Llamada a la Acción.
3. Al abrirse la pantalla de edición del Reto, comprobar que:
   - El idioma por defecto de la Aventura ya está presente en la pestaña de idiomas.
   - El campo de texto principal ("Pregunta", "Texto", etc.) trae un texto de ejemplo ("Lorem ipsum...").
   - En las mecánicas de Pregunta/Respuesta, hay 3 opciones de respuesta precargadas.
   - En Respuesta Exacta, los tramos de bonus están en 100% / 80% / 50% y el número de reintentos en 2.
4. Sustituir los textos e imágenes de ejemplo por los reales.
5. Guardar.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Reto P/R recién creado con pregunta y 3 opciones de ejemplo visibles → Nombre: `retos/default-translation-pr.png`
- [GAMIFIER] Reto Respuesta Exacta recién creado con tramos 100/80/50 precargados → Nombre: `retos/default-translation-re.png`
- [GAMIFIER] Reto Respuesta Libre recién creado con texto de ejemplo → Nombre: `retos/default-translation-rl.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/retos/`
- **Nombre del archivo:** actualización de la página existente de introducción a Retos (o crear una pequeña sección "Crear un Reto").
- **sidebar_position sugerido:** al principio de la sección de Retos.
- **Tags sugeridos:** `reto`, `crear`, `traduccion`, `mecanica`
- **¿Es página nueva o actualización?** Actualización. Es una mejora de calidad de vida, no justifica página propia; basta con una nota en la introducción de Retos explicando que las nuevas mecánicas ya nacen con traducción de ejemplo.

## 7. NOTAS TÉCNICAS

- Es una mejora puramente de calidad de vida. No cambia el modelo de datos ni el comportamiento de Retos ya creados.
- El texto de ejemplo se reemplaza por el texto real del Game Master al editar y guardar, sin ningún paso adicional.
