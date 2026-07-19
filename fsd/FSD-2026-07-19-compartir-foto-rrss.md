---
feature_name: Compartir en Redes Sociales (reto Compartir Foto)
date: 2026-07-19
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/tipos-de-reto/compartir-foto.md
---

## 1. RESUMEN DE LA FEATURE
- **Nombre:** Compartir en Redes Sociales (ampliación del reto Compartir Foto)
- **Descripción:** El reto Compartir Foto puede ahora pedir al jugador que, además de subir su foto, la publique en sus redes sociales (Instagram, X, Facebook) con un texto y hashtags preparados por el Game Master, y que valide su publicación pegando el enlace. El Game Master ve los enlaces publicados y puede verificarlos o rechazarlos.
- **Componentes afectados:** API (monolito), Gamifier, Webapp
- **Fecha de despliegue:** 2026-07-19

## 2. QUÉ PUEDE HACER EL USUARIO AHORA
### Desde el punto de vista del Game Master / Game Designer (Gamifier)
- Activar en cualquier reto **Compartir Foto** el paso opcional **"Compartir en Redes Sociales"** (los retos existentes no cambian si no se activa).
- Definir el **texto del post** (con los hashtags) **por idioma**: al activar el toggle se crea automáticamente la traducción del idioma por defecto de la Aventura con un texto de ejemplo editable.
- Decidir si el **enlace de la publicación es obligatorio** para que el jugador pueda continuar (útil por ejemplo para sorteos o validación del staff).
- Ver en el **Gameboard**, junto a la galería del reto, la tabla **"Enlaces publicados en RRSS"**: jugador, enlace clicable a su publicación y estado de verificación.
- **Verificar o rechazar** cada enlace con un clic. Los enlaces de X/Twitter se verifican automáticamente si el post existe; los de Instagram y Facebook quedan "Pendiente de revisión" hasta que el staff los revisa (limitación de esas plataformas, no de AdventuriQ).

### Desde el punto de vista del Player (Webapp)
- Tras subir su foto, ve una pantalla completa con instrucciones en 3 pasos: copiar el texto, publicar la foto en su red favorita y volver para pegar el enlace.
- **Tocar el cuadro del texto** lo copia al portapapeles (confirmación visual en verde).
- El botón **"Compartir en mis redes"** abre el panel nativo del móvil con la foto adjunta (y copia el texto automáticamente, porque Instagram y Facebook no aceptan texto pre-rellenado: hay que pegarlo).
- Botón **"Descargar foto"** para guardarla en el dispositivo y publicarla más tarde.
- En la pantalla de validación, **pega el enlace de su publicación** (botón "Pegar" integrado) y lo envía. Si el Game Master marcó el enlace como obligatorio, no puede continuar sin enviarlo.

## 3. PREREQUISITOS DEL USUARIO
- Tener una Aventura con un reto de tipo **Compartir Foto**.
- Activar el toggle "Compartir en Redes Sociales" en el editor del reto y escribir el texto del post (con hashtags) en los idiomas de la Aventura.
- El jugador necesita tener instalada la app de la red social donde quiera publicar (o usar su web) y jugar desde un móvil para que aparezca el panel nativo de compartir (en ordenador puede descargar la foto y publicar manualmente).

## 4. FLUJOS PASO A PASO

### Flujo Gamifier
1. Entrar en la Aventura → Misión → reto **Compartir Foto** (o crear uno nuevo).
2. Activar el toggle **"Compartir en Redes Sociales"** → aparece la traducción del idioma por defecto con un texto de ejemplo.
3. Editar el **texto del post** (incluyendo los hashtags de la dinámica) y añadir más idiomas con el botón "+ Traducción" si la Aventura es multi-idioma.
4. (Opcional) Activar **"Enlace obligatorio"** si el jugador debe validar su publicación para continuar.
5. **Guardar**.
6. Durante/después del juego: ir al **Gameboard** → desplegar el reto → tabla **"Enlaces publicados en RRSS"** → abrir cada enlace y pulsar ✓ (verificar) o ✗ (rechazar).

### Flujo Webapp (Player)
1. Jugar el reto Compartir Foto: seleccionar/hacer la foto y subirla (pasos 1 y 2 de siempre).
2. En la pantalla **"¡Publica tu foto en tus redes y participa!"**: tocar el cuadro del texto para copiarlo (o directamente el botón compartir, que también lo copia).
3. Pulsar **"Compartir en mis redes"** → elegir la red (p. ej. Instagram) → pegar el texto en la publicación → publicar.
4. En la red social, copiar el enlace de la publicación (en Instagram: abrir el post → icono de compartir ✈ → "Copiar enlace").
5. Volver a la webapp, pulsar **"3. Ya la he publicado"**, pegar el enlace (botón "Pegar") y enviarlo → "¡Enlace recibido! Publicación validada."
6. Pulsar **"4. Continuar"** para cerrar el reto y recibir los puntos.

## 5. PANTALLAS PARA CAPTURAR
- [GAMIFIER] Editor del reto Compartir Foto con el bloque "Compartir en Redes Sociales" (toggles + texto del post por idioma) → Nombre: `tipos-de-reto/compartir-foto-rrss-editor.png`
- [GAMIFIER] Gameboard: tabla "Enlaces publicados en RRSS" con estados y botones verificar/rechazar → Nombre: `tipos-de-reto/compartir-foto-rrss-gameboard.png`
- [WEBAPP] Pantalla "¡Publica tu foto en tus redes!" con checklist, cuadro del texto y botones → Nombre: `tipos-de-reto/compartir-foto-rrss-webapp-publicar.png`
- [WEBAPP] Cuadro del texto en estado "copiado" (verde) → Nombre: `tipos-de-reto/compartir-foto-rrss-webapp-copiado.png`
- [WEBAPP] Pantalla "Valida tu publicación pegando el enlace aquí" → Nombre: `tipos-de-reto/compartir-foto-rrss-webapp-validar.png`

## 6. UBICACIÓN EN DOCUSAURUS
- **Carpeta destino:** `docs/tipos-de-reto/`
- **Nombre del archivo:** `compartir-foto.md`
- **sidebar_position sugerido:** (el actual de Compartir Foto)
- **Tags sugeridos:** tipos de reto, compartir foto, redes sociales, Instagram, sorteo, hashtags
- **¿Es página nueva o actualización?** Actualización (nueva sección "Compartir en Redes Sociales" dentro de la página del reto Compartir Foto)

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)
- **Instagram y Facebook no aceptan texto pre-rellenado** al compartir: por eso la webapp copia el texto al portapapeles y el jugador debe pegarlo en su publicación. X/Twitter y WhatsApp sí lo aceptan directamente.
- **Verificación automática solo en X/Twitter**: AdventuriQ comprueba que el post existe. En Instagram/Facebook no es técnicamente posible sin permisos especiales de Meta, así que quedan "Pendiente de revisión" para el staff.
- **Cuentas privadas**: si el jugador tiene la cuenta privada, su enlace solo será visible para sus seguidores; el staff verá una pantalla de login al abrirlo. Para dinámicas con premio conviene pedir cuentas públicas.
- **La publicación no se detecta sola**: ninguna red social notifica a una web externa que se ha publicado. La validación por enlace es el mecanismo fiable.
- **En ordenador** el panel nativo de compartir con archivos no suele estar disponible: el jugador puede descargar la foto y publicarla manualmente.
- La foto subida queda siempre en la **galería** de la Aventura, independientemente de que se comparta o no en redes.
