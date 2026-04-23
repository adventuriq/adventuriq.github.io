---
feature_name: Acceso directo a la Aventura (GamePIN, enlace y QR)
date: 2026-03-20
components: [GAMIFIER]
docusaurus_path: docs/aventuras/acceso-directo-aventura.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Acceso directo a la Aventura
- **Descripción:** En la pantalla de edición de cada Aventura aparece ahora un bloque "Acceso a la Aventura" con el GamePIN en grande, el enlace directo para jugar (copiable con un clic) y un código QR descargable. El Game Master puede enviar cualquiera de los tres a sus Players para que entren a la Aventura sin pasos intermedios.
- **Componentes afectados:** Gamifier
- **Fecha de despliegue:** 2026-03-20

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Ver el GamePIN de la Aventura destacado en grande dentro de la propia pantalla de edición (sin tener que buscarlo en otro sitio).
- Copiar al portapapeles, con un solo clic, el enlace directo que lleva al Player a esa Aventura concreta. Al pulsar el botón de copiar aparece un mensaje breve de confirmación "¡Enlace copiado!".
- Descargar un código QR de la Aventura como imagen para imprimirlo, pegarlo en un cartel, incluirlo en un email o compartirlo en redes. El QR apunta al mismo enlace directo.
- Compartir cualquiera de los tres con sus Players (GamePIN para introducirlo manualmente, enlace para email/WhatsApp, QR para soporte físico o pantalla).

### Desde el punto de vista del Player (Webapp)

- No requiere pasos nuevos: al abrir el enlace directo o escanear el QR, el Player aterriza ya dentro de la Aventura sin tener que introducir el GamePIN manualmente.

## 3. PREREQUISITOS DEL USUARIO

- Tener una Aventura ya creada y guardada (el bloque solo aparece en Aventuras existentes, no al crear una nueva).

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Copiar el enlace directo

1. Ir a Aventuras y abrir la Aventura que quieras compartir.
2. Bajar hasta el bloque **"Acceso a la Aventura"**.
3. Pulsar el botón **"Copiar enlace"** junto al enlace mostrado.
4. Aparece durante unos segundos el mensaje **"¡Enlace copiado!"**.
5. Pegar el enlace en un email, WhatsApp, Telegram o donde se quiera compartir con los Players.

### Flujo Gamifier — Descargar el QR

1. Ir a Aventuras y abrir la Aventura.
2. Bajar al bloque **"Acceso a la Aventura"**.
3. Hacer clic sobre el código QR mostrado: se descarga automáticamente como imagen.
4. Imprimirlo, insertarlo en un cartel, proyectarlo en pantalla, etc.

### Flujo Gamifier — Usar el GamePIN

1. Ir a Aventuras y abrir la Aventura.
2. Leer el GamePIN en grande dentro del bloque **"Acceso a la Aventura"**.
3. Dictarlo a los Players o mostrarlo en pantalla para que lo introduzcan manualmente al entrar a AdventuriQ.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Bloque "Acceso a la Aventura" completo con GamePIN, enlace y QR → Nombre: `aventuras/acceso-directo-bloque-completo.png`
- [GAMIFIER] Detalle del botón "Copiar enlace" y mensaje "¡Enlace copiado!" → Nombre: `aventuras/acceso-directo-copiado.png`
- [GAMIFIER] Detalle del código QR de la Aventura → Nombre: `aventuras/acceso-directo-qr.png`
- [WEBAPP] Llegada directa a la Aventura tras abrir el enlace → Nombre: `aventuras/acceso-directo-webapp.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `acceso-directo-aventura.md`
- **sidebar_position sugerido:** después de "Configuración de Aventura" y antes de "Compartir con Players".
- **Tags sugeridos:** `aventura`, `gamepin`, `qr`, `enlace`, `compartir`, `acceso`
- **¿Es página nueva o actualización?** Nueva

## 7. NOTAS TÉCNICAS

- El enlace directo y el QR funcionan sobre la Webapp pública: cualquier persona con el enlace puede entrar a la Aventura (sujeto a las condiciones de juego que configures).
- Recomendación: no publicar el enlace/QR abiertamente si la Aventura es privada o tiene tokens limitados.
- El QR se descarga a tamaño fijo (150 px); si se necesita mayor calidad de impresión, regenerarlo en una herramienta externa a partir del enlace copiado.
