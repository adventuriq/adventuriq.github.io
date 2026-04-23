---
feature_name: Reto Nube de Palabras
date: 2026-04-15
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/retos/nube-de-palabras.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Nube de Palabras
- **Descripción:** Nuevo tipo de Reto (#14) inspirado en Mentimeter: el Player responde a una pregunta con **una única palabra**. Todas las respuestas de todos los Players se agregan en tiempo real y se visualizan en forma de **nube de palabras**, donde las más repetidas aparecen más grandes y con colores más intensos.
- **Componentes afectados:** API (v4.22.0), Gamifier (v4.34.0), Webapp (v2.26.0)
- **Fecha de despliegue:** 2026-04-15

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Crear un Reto de tipo **Nube de Palabras** desde el selector de tipos o desde "Crear Reto Rápido" dentro de una Misión.
- Escribir la pregunta y subir una imagen de cabecera, por cada idioma de la Aventura.
- Activar el toggle **"Visualizar Nube de Palabras"** en las Opciones de la Aventura (junto a "Volver a jugar", "Enviar emails", etc.). Con él activado, aparece una nueva pestaña en la Bitácora del Player para ver todas las nubes de palabras de la Aventura.
- Al crear el Reto, la mecánica ya nace con una traducción de ejemplo en el idioma por defecto de la Aventura.

### Desde el punto de vista del Player (Webapp)

- Responder al Reto escribiendo **una sola palabra** (sin espacios; los espacios se bloquean automáticamente al teclear) en un campo de texto con la imagen de cabecera arriba.
- Desde la **Bitácora** de la Aventura, entrar en la nueva pestaña **Nube de Palabras** (icono de nube) si el Game Master la ha habilitado.
- Ver la lista de todos los Retos de Nube de Palabras de la Aventura; pulsar uno para entrar en su visualización.
- Ver la nube en tiempo real, con:
  - Tamaño de fuente proporcional a la frecuencia de cada palabra (entre 14 y 72 px).
  - Ocho colores distintos según frecuencia (del gris claro al rojo intenso).
  - Grosor tipográfico creciente con la frecuencia.
  - Contador de participantes en la cabecera.
  - Actualización automática cada 8 segundos.

## 3. PREREQUISITOS DEL USUARIO

- Aventura con al menos una Misión.
- Si se quiere que los Players vean la nube en directo, activar el toggle en Opciones de la Aventura.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Crear un Reto de Nube de Palabras

1. Abrir una Aventura → abrir una Misión → pulsar **"+ Nuevo Reto"**.
2. Seleccionar la tarjeta **Nube de Palabras** (icono de nube) en el selector de tipos.
3. En la edición del Reto:
   - Rellenar los datos generales (título, puntos, etc.).
   - Por cada idioma: escribir la pregunta y subir la imagen de cabecera.
4. Guardar.

### Flujo Gamifier — Activar la pestaña "Nube de Palabras" en la Bitácora

1. Ir a Aventuras → abrir la Aventura.
2. En el bloque **Opciones de la Aventura**, activar el toggle **"Visualizar Nube de Palabras"**.
3. Guardar.
4. A partir de ahora, los Players ven en la Bitácora la pestaña "Nube de Palabras".

### Flujo Webapp — Responder un Reto de Nube de Palabras

1. El Player abre la Misión y pulsa el Reto de Nube de Palabras.
2. Ve la imagen de cabecera y la pregunta.
3. Escribe **una única palabra** (máximo 30 caracteres, sin espacios).
4. Pulsa "Continuar". Su palabra se suma a las de los demás.

### Flujo Webapp — Ver la nube de palabras

1. Desde una Aventura, abrir la **Bitácora**.
2. Pulsar la pestaña **Nube de Palabras** (icono de nube).
3. Se muestra la lista de Retos de Nube de Palabras de la Aventura.
4. Pulsar el que se quiera visualizar.
5. Se abre la nube con las palabras agregadas. Las más frecuentes aparecen más grandes y más coloreadas.
6. La nube se refresca cada 8 segundos automáticamente. En la cabecera se ve el número de Players que han participado.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Selector de tipos de Reto con la tarjeta "Nube de Palabras" → Nombre: `retos/seleccion-tipo-np.png`
- [GAMIFIER] Edición del Reto con pregunta e imagen por idioma → Nombre: `retos/nube-palabras-edicion.png`
- [GAMIFIER] Toggle "Visualizar Nube de Palabras" en Opciones de la Aventura → Nombre: `aventuras/toggle-nube-palabras.png`
- [WEBAPP] Reto: Player escribiendo una palabra (vista móvil) → Nombre: `retos/webapp-np-respuesta.png`
- [WEBAPP] Bitácora con la pestaña "Nube de Palabras" seleccionada → Nombre: `bitacora/webapp-nube-palabras-tab.png`
- [WEBAPP] Lista de Retos de Nube de Palabras de la Aventura → Nombre: `bitacora/webapp-nube-palabras-lista.png`
- [WEBAPP] Visualización de la nube con muchas palabras de distintos tamaños → Nombre: `bitacora/webapp-nube-palabras-visual.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/retos/`
- **Nombre del archivo:** `nube-de-palabras.md`
- **sidebar_position sugerido:** al final del listado de mecánicas de Retos (tipo #14).
- **Tags sugeridos:** `reto`, `nube-de-palabras`, `tiempo-real`, `mentimeter`, `bitacora`
- **¿Es página nueva o actualización?** Nueva. Además, actualizar la página de Bitácora para mencionar la nueva pestaña "Nube de Palabras".

## 7. NOTAS TÉCNICAS

- El Player solo puede responder con **una palabra sin espacios** (límite de 30 caracteres). Si el teclado intenta introducir un espacio se ignora.
- Las palabras se normalizan en minúsculas antes de agregarse, de modo que "Madrid" y "madrid" cuentan como la misma palabra en la nube.
- La actualización de la nube es mediante consulta periódica cada 8 segundos; puede haber un pequeño desfase entre que un Player envía una palabra y aparece en la nube de los demás.
- La pestaña "Nube de Palabras" solo aparece en la Bitácora si el Game Master ha activado el toggle en Opciones de la Aventura **y** la Aventura tiene al menos un Reto de este tipo.
