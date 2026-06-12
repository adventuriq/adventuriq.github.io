---
feature_name: Recuperación de permisos de GPS y cámara
date: 2026-06-12
components: [WEBAPP]
docusaurus_path: docs/webapp/recuperacion-permisos-gps-camara.md
---

## 1. RESUMEN DE LA FEATURE
- **Nombre:** Recuperación de permisos de GPS y cámara
- **Descripción:** Si el Player deniega (a menudo sin darse cuenta) el permiso de ubicación o de cámara del navegador, la Webapp ahora le ayuda a reactivarlo sin salir del juego, con un panel de estado y una guía paso a paso adaptada a su navegador.
- **Componentes afectados:** Webapp (v2.37.0)
- **Fecha de despliegue:** 2026-06-12

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)
- Nada cambia en el Gamifier. (Beneficio indirecto: menos Players "atascados" en Aventuras con retos geolocalizados o escaneo QR.)

### Desde el punto de vista del Player (Webapp)
- Abrir en cualquier momento la nueva entrada **"Permisos de GPS y cámara"** del menú lateral, que muestra el estado de cada permiso con un código de color: **Activado** (verde), **Pendiente** (gris) o **Bloqueado** (naranja).
- Si un permiso está **Pendiente** (cerró el aviso del navegador sin responder): pulsar **"Activar"** para que el navegador vuelva a preguntar al instante.
- Si un permiso está **Bloqueado** (lo denegó): seguir una **guía ilustrada de 3 pasos** adaptada a su navegador (icono del candado en Chrome/Edge, botón "aA" en Safari, icono de permisos en Firefox; en la app instalada en iOS, Ajustes → Apps → Safari) para reactivarlo **sin ir a los Ajustes del dispositivo**. En Chrome moderno aparece además un botón especial que re-concede la ubicación con un solo toque.
- **Continuar jugando justo donde estaba**: en cuanto el Player concede el permiso (por cualquier vía), la app lo detecta al instante, muestra una confirmación y reanuda la acción interrumpida automáticamente.
- El mismo panel aparece solo, donde antes había un error sin solución:
  - En el **mapa de retos geolocalizados** (sustituye al antiguo mensaje de error y recarga la posición ahí mismo).
  - Al pulsar **GO** en un reto con geolocalización si no se puede calcular la posición.
  - Al abrir el **escáner QR** (retos/localizaciones con código QR): se reabre el escáner automáticamente al conceder el permiso.
  - Antes de elegir foto en los retos de **Compartir Foto**, si la cámara está bloqueada (con opción "Continuar igualmente" para usar la galería).

## 3. PREREQUISITOS DEL USUARIO
- Ninguno especial: el panel del menú lateral está siempre disponible para cualquier Player.
- Para ver el flujo completo de recuperación se necesita una Aventura con retos geolocalizados, retos con QR o retos de Compartir Foto.
- El navegador debe soportar la consulta de permisos (todos los navegadores modernos; en navegadores muy antiguos el panel ofrece un botón "Comprobar" que lanza la petición directamente).

## 4. FLUJOS PASO A PASO

### Flujo Webapp — desde el menú lateral
1. Abrir el menú lateral de la Webapp.
2. Pulsar **"Permisos de GPS y cámara"**.
3. Se abre el panel con las dos tarjetas (Ubicación y Cámara) y su estado.
4. Si un permiso está Pendiente → pulsar **Activar** → responder al aviso del navegador → la tarjeta pasa a verde.
5. Si un permiso está Bloqueado → pulsar **"Cómo activarlo"** → seguir la guía de 3 pasos del navegador → pulsar **"Ya lo he activado"** (o simplemente conceder desde el candado: la app lo detecta sola).

### Flujo Webapp — recuperación durante el juego (ejemplo: mapa)
1. Entrar en una Aventura con retos geolocalizados con el permiso de ubicación bloqueado.
2. Donde antes aparecía un error genérico, ahora aparece el panel de recuperación.
3. Seguir la guía y conceder el permiso.
4. El mapa se carga automáticamente con la posición del Player, sin recargar la página ni perder el progreso.

### Flujo Webapp — escáner QR
1. Abrir el escáner QR con la cámara bloqueada.
2. El escáner se cierra y aparece el panel de recuperación de la cámara.
3. Al conceder el permiso, el escáner se reabre automáticamente.

## 5. PANTALLAS PARA CAPTURAR
- [WEBAPP] Menú lateral con la entrada "Permisos de GPS y cámara" → Nombre: webapp/permisos-menu-lateral.png
- [WEBAPP] Panel de permisos con ambos permisos Activados (tarjetas verdes) → Nombre: webapp/permisos-panel-activados.png
- [WEBAPP] Panel con la cámara Bloqueada (tarjeta naranja con botón "Cómo activarlo") → Nombre: webapp/permisos-panel-bloqueado.png
- [WEBAPP] Guía ilustrada de 3 pasos (Chrome) → Nombre: webapp/permisos-guia-chrome.png
- [WEBAPP] Mapa de retos mostrando el panel de recuperación inline → Nombre: webapp/permisos-mapa-recuperacion.png
- [WEBAPP] Confirmación "¡Listo! Permiso activado." → Nombre: webapp/permisos-confirmacion.png

## 6. UBICACIÓN EN DOCUSAURUS
- **Carpeta destino:** `docs/webapp/`
- **Nombre del archivo:** `recuperacion-permisos-gps-camara.md`
- **sidebar_position sugerido:** después de la página de instalación de la App (PWA)
- **Tags sugeridos:** [webapp, permisos, gps, cámara, qr, solución de problemas]
- **¿Es página nueva o actualización?** Nueva (y conviene enlazarla desde las páginas de retos geolocalizados, QR y Compartir Foto como "solución de problemas")

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)
- Los permisos se reactivan en los **ajustes del sitio del navegador** (icono candado/aA junto a la dirección), NO en los Ajustes del dispositivo. Excepción: la app instalada (PWA) en iOS, donde se gestionan en Ajustes de iOS → Apps → Safari.
- El botón de re-concesión en un toque para la ubicación solo aparece en Chrome 144 o superior; en el resto de navegadores se muestra la guía paso a paso.
- Al comprobar el permiso de cámara, la cámara se enciende un instante (el panel lo avisa); es normal y se apaga inmediatamente.
- En los retos de Compartir Foto, aunque la cámara esté bloqueada el Player siempre puede continuar y elegir una imagen de la galería.
