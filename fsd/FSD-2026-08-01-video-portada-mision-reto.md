---
feature_name: Vídeo de portada en Misiones y Retos
date: 2026-08-01
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/misiones/contenido-imagenes.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Vídeo de portada en Misiones y Retos
- **Descripción:** Las Misiones y los Retos también pueden tener su propio vídeo de portada subido, igual que las Aventuras, con la opción de mostrarlo a pantalla completa.
- **Componentes afectados:** API, Gamifier, Web App
- **Fecha de despliegue:** 2026-08-01

Es la continuación de **Vídeo de portada de la Aventura** (desplegada el mismo día, ver `FSD-2026-08-01-video-portada-aventura.md`). Funciona exactamente igual, pero a nivel de Misión y de Reto. Esta entrega incorpora además mejoras del reproductor que **también aplican a la portada de la Aventura**.

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Subir un vídeo de portada propio a cada **Misión**, uno por idioma.
- Subir un vídeo de portada propio a cada **Reto**, uno por idioma.
- Reutilizar un vídeo ya subido desde la **Media Library**, o aplicar el mismo a todos los idiomas de una vez.
- Activar **"Portada a pantalla completa"** en la Misión o en el Reto.
- Activar esa opción **aunque todavía no haya vídeo subido**: se guarda y avisa de que no tendrá efecto hasta que se suba uno.

### Desde el punto de vista del Player (Web App)

- Ver el vídeo de portada de la Misión o del Reto en su idioma.
- Con la portada a pantalla completa: ver el vídeo ocupando toda la pantalla, con el botón de entrar encima.
- **Novedad que también afecta a la Aventura:**
  - El vídeo **intenta arrancar con sonido**. Si el navegador lo bloquea, arranca en silencio y se puede activar con el botón del altavoz.
  - El vídeo ya **no se repite en bucle**: se ve una vez y, al terminar, el botón de entrar **se ilumina** para guiar al jugador.
  - Hay **controles**: repetir, reproducir/pausar, detener y saltar al final.
  - El **botón de pantalla completa de los reproductores ya funciona** (antes la imagen se quedaba en negro): afecta también a los objetos digitales de tipo vídeo, la galería, el vídeo de finalización y el reto de Pregunta/Respuesta con Vídeo.

## 3. PREREQUISITOS DEL USUARIO

- Tener la Misión o el Reto ya creados y guardados (el bloque no aparece mientras se está creando).
- Tener al menos un idioma configurado.
- Espacio libre en la cuota de la licencia o contrato.
- El vídeo en formato **MP4, WEBM, MOV u OGG**.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — vídeo de portada en una Misión

1. Entrar en la Aventura y abrir la **Misión**.
2. Bajar hasta **Traducciones** y elegir la pestaña del idioma.
3. En **Vídeo de portada**, pulsar **Nuevo vídeo** o **Media Library** para reutilizar uno ya subido.
4. Al terminar, aparece un reproductor debajo para revisarlo.
5. Repetir por idioma, o usar **Usar el mismo vídeo en todos los idiomas** (está en el bloque de opciones, fuera de las pestañas).

### Flujo Gamifier — vídeo de portada en un Reto

Igual que en la Misión, dentro del editor del **Reto**, en su bloque de Traducciones.

### Flujo Gamifier — portada a pantalla completa

1. En la Misión o el Reto, activar el interruptor **Portada a pantalla completa**.
2. Si aún no hay vídeo subido, aparece un aviso: la opción se guarda pero no tendrá efecto hasta subir uno.
3. Guardar.

### Flujo Web App (Player)

1. Abrir la Misión (o el Reto) desde su listado.
2. Si la portada es a pantalla completa, el vídeo ocupa toda la pantalla y arranca solo.
3. Si arrancó en silencio, pulsar el **altavoz** para activar el sonido.
4. Con los controles de abajo a la izquierda se puede pausar, repetir o saltar al final.
5. Al terminar el vídeo, el botón de entrar se ilumina. Pulsarlo para continuar.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Editor de **Misión**, bloque **Vídeo de portada** dentro de una pestaña de idioma, con vídeo subido → Nombre: `misiones/video-portada-editor.png`
- [GAMIFIER] Editor de **Reto**, mismo bloque, con el aviso sobre "Mostrar detalle del Reto" visible → Nombre: `retos/video-portada-editor.png`
- [GAMIFIER] Interruptor **Portada a pantalla completa** y el aviso que sale al activarlo sin vídeo → Nombre: `misiones/video-portada-fullscreen-aviso.png`
- [WEBAPP] Portada de Misión a pantalla completa, con el botón de entrar y los controles del vídeo → Nombre: `misiones/webapp-video-portada-fullscreen.png`
- [WEBAPP] Botón de entrar **iluminado** tras terminar el vídeo → Nombre: `misiones/webapp-video-portada-boton-iluminado.png`
- [WEBAPP] Portada de Reto con el vídeo en modo normal (con título y descripción) → Nombre: `retos/webapp-video-portada-normal.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/misiones/` y `docs/retos/`
- **¿Es página nueva o actualización?** **Actualización** de dos páginas existentes:
  - `docs/misiones/contenido-imagenes.md` — añadir el vídeo de portada de la Misión.
  - `docs/retos/cabecera.md` — añadir el vídeo de portada del Reto, **con el aviso del apartado 7**.
- Ambas deben enlazar a `docs/aventuras/video-portada.md` (la página de la Fase 1), que conviene ampliar con las novedades del reproductor descritas en el punto 2.
- **Tags sugeridos:** misiones, retos, vídeo, portada, multimedia, idiomas

## 7. NOTAS TÉCNICAS (relevantes para el manual)

- **AVISO IMPORTANTE PARA LOS RETOS.** Si la Misión que contiene el Reto tiene desactivada la opción **"Mostrar detalle del Reto"**, el jugador entra directamente a la mecánica sin pasar por la portada, así que **no verá el vídeo**. La única excepción son los Retos geolocalizados, que siempre pasan por el detalle. Conviene documentarlo junto a la opción, porque de lo contrario parece que la función no funciona.
- **Sonido al arrancar.** El vídeo intenta reproducirse con sonido. Los navegadores solo lo permiten si el jugador ya ha interactuado con la página, así que:
  - Llegando desde el listado de Aventuras o Misiones: **normalmente suena**.
  - Entrando por primera vez desde un **enlace directo (Game PIN)**: arranca **en silencio**, porque el navegador aún no ha dado permiso. A partir de la segunda visita ya suele sonar.
  - En cualquier caso el jugador puede activarlo con el botón del altavoz. Conviene diseñar el vídeo de modo que se entienda también sin audio.
- **El vídeo no se repite.** Se reproduce una vez. Al terminar, el botón de entrar se ilumina y el jugador puede volver a verlo con el botón de repetir.
- **Formatos.** MP4, WEBM, MOV u OGG. Recomendado **MP4 (H.264 + AAC)**, menos de 15 segundos y menos de 10 MB: el vídeo se descarga cada vez que se abre la portada.
- **Cuota de disco.** Ahora puede haber un vídeo por Aventura, uno por Misión y uno por Reto. Todos cuentan para el espacio de la licencia.
- **Prioridad sobre YouTube.** Si hay vídeo subido para un idioma, se usa ese; el ID de YouTube solo se usa si no hay vídeo subido.
- **Si falta el vídeo en el idioma del jugador**, se usa el del idioma por defecto de la Aventura y, si tampoco, el de cualquier otro idioma que sí lo tenga: un vídeo subido nunca queda invisible.
- **Eliminar el vídeo del campo no borra el archivo** del servidor; sigue ocupando cuota hasta borrarlo desde la Media Library.
- **Al duplicar una Aventura** se conserva el nombre del vídeo configurado, pero el archivo no se copia: hay que volver a subirlo.
