---
feature_name: Audios multi-idioma en Aventura, Misión y Reto
date: 2026-03-21
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/aventuras/audios-multiidioma.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Audios de descripción multi-idioma
- **Descripción:** El audio de descripción (que el Player escucha al entrar a una Aventura, Misión o Reto) deja de ser único y pasa a ser **por idioma**: cada traducción puede tener su propio archivo de audio. Además, ahora también las **Aventuras** pueden tener audio de descripción (antes solo Misiones y Retos lo tenían). El Player escucha automáticamente el audio correspondiente a su idioma, con fallback al idioma por defecto si no existe traducción. Se corrige también un bug que hacía que el audio siguiera sonando al navegar entre pantallas.
- **Componentes afectados:** API, Gamifier, Webapp
- **Fecha de despliegue:** 2026-03-21

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Subir un archivo de audio de descripción **diferente por cada idioma** de la Aventura, la Misión o el Reto.
- Subir por primera vez audio en la **Aventura** (hasta ahora solo se podía en Misiones y Retos).
- El bloque de audio aparece dentro de la pestaña de cada idioma en el editor: gestionar audios en varios idiomas es tan sencillo como cambiar de pestaña.
- Sustituir o eliminar el audio de un idioma concreto sin tocar los demás.
- Seguir teniendo, si se desea, un único audio que sirva de "por defecto": basta con subirlo solo en el idioma principal de la Aventura.

### Desde el punto de vista del Player (Webapp)

- Escuchar la descripción hablada de la Aventura, la Misión o el Reto en su propio idioma, si el Game Master lo ha grabado.
- Si no hay audio en su idioma, escucha el audio del idioma por defecto de la Aventura (si existe), o bien la lectura sintética del texto (TTS) como hasta ahora.
- El audio **deja de continuar sonando** al salir de una pantalla: al pulsar atrás o avanzar a la siguiente pantalla, se detiene.

## 3. PREREQUISITOS DEL USUARIO

- Una Aventura con al menos un idioma configurado.
- Archivos de audio en formato estándar (MP3 recomendado) para subir por cada idioma.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Subir audio por idioma en una Misión

1. Ir a Aventuras, abrir la Aventura y entrar en la Misión.
2. Bajar a la sección de traducciones. Cada idioma tiene su propia pestaña.
3. Abrir la pestaña del idioma deseado (p.ej. Español).
4. Dentro de esa pestaña, localizar el bloque **"Audio de descripción"**.
5. Pulsar el botón de subir archivo y seleccionar el MP3. Al terminar la subida, el audio queda vinculado a ese idioma.
6. Opcional: cambiar de pestaña al siguiente idioma y repetir el proceso con un archivo diferente.
7. Guardar la Misión.

### Flujo Gamifier — Añadir audio a una Aventura (nuevo)

1. Ir a Aventuras y abrir la Aventura.
2. En cada pestaña de idioma aparece ahora el bloque **"Audio de descripción"** (antes no existía en Aventuras).
3. Subir el audio para el idioma deseado.
4. Repetir para otros idiomas si se quiere.
5. Guardar la Aventura.

### Flujo Gamifier — Sustituir o borrar el audio de un idioma

1. Abrir la Aventura / Misión / Reto.
2. Abrir la pestaña del idioma cuyo audio quieres cambiar.
3. En el bloque de audio, pulsar el botón de eliminar para quitar el audio actual.
4. Subir uno nuevo si procede.
5. Guardar.

### Flujo Player — Escuchar la descripción

1. Entrar a la Aventura (o abrir una Misión o un Reto).
2. Pulsar el botón de audio (altavoz) junto al título.
3. Se reproduce el audio en el idioma del Player.
4. Al salir de la pantalla (atrás, avanzar, abrir un mapa), el audio se detiene automáticamente.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Bloque "Audio de descripción" dentro de la pestaña de un idioma en Misión → Nombre: `audios/gamifier-audio-mision-idioma.png`
- [GAMIFIER] Pestañas de idiomas con audios diferentes → Nombre: `audios/gamifier-audio-varios-idiomas.png`
- [GAMIFIER] Bloque de audio en la edición de una Aventura (nuevo) → Nombre: `audios/gamifier-audio-aventura.png`
- [GAMIFIER] Botón de eliminar audio subido en un idioma → Nombre: `audios/gamifier-audio-eliminar.png`
- [WEBAPP] Botón altavoz reproduciendo audio en vista de Misión → Nombre: `audios/webapp-audio-mision.png`
- [WEBAPP] Botón altavoz en vista de Aventura → Nombre: `audios/webapp-audio-aventura.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/` (página principal de la feature, al ser la capacidad común a los tres niveles).
- **Nombre del archivo:** `audios-multiidioma.md`
- **sidebar_position sugerido:** junto a las demás páginas de traducciones / multi-idioma.
- **Tags sugeridos:** `audio`, `multi-idioma`, `traducciones`, `aventura`, `mision`, `reto`, `accesibilidad`
- **¿Es página nueva o actualización?** Nueva página transversal. Además, actualizar las páginas existentes de "Edición de Misión", "Edición de Reto" y "Configuración de Aventura" con una nota breve que enlace a la nueva página y mencione que el audio ahora es por idioma (y que Aventura admite audio).

## 7. NOTAS TÉCNICAS

- **Migración sin pérdida**: los audios que ya existían en Misiones y Retos se asignan automáticamente al idioma por defecto de la Aventura durante la actualización. Nada desaparece.
- **Fallback automático**: si el Player tiene configurado un idioma para el que no hay audio, se usa el del idioma por defecto. Si tampoco existe ahí, se lee el texto con voz sintética (TTS) como antes.
- **Formato recomendado**: MP3. La duración no tiene tope fijo pero se recomienda mantener los audios por debajo de 1-2 min para no penalizar la carga en móviles.
- **Limitación conocida**: el audio se descarga al reproducirlo, no se cachea de forma persistente; conviene preparar a los Players para tener conexión al arrancar cada pantalla.
