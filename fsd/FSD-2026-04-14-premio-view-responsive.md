---
feature_name: Responsividad de la pantalla de Objeto Digital
date: 2026-04-14
components: [WEBAPP]
docusaurus_path: docs/recompensas/objetos-digitales.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Responsividad de la pantalla de Objeto Digital (Premio) en la Webapp
- **Descripción:** La pantalla que muestra un Objeto Digital obtenido al Player ahora aprovecha mejor el espacio disponible, tanto en móvil como en escritorio, y permite desplazarse con naturalidad cuando el contenido es largo.
- **Componentes afectados:** Webapp (v2.23.0)
- **Fecha de despliegue:** 2026-04-14

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Player (Webapp)

- Ver el contenido de un Objeto Digital (imagen, texto HTML, vídeo embebido de YouTube, contenido Genially, etc.) correctamente adaptado al ancho de la pantalla en cualquier dispositivo.
- En **escritorio**, el panel derecho con el contenido se ajusta al espacio disponible y es desplazable con scroll cuando el contenido es más alto que la pantalla, sin barras de scroll "incrustadas" y con una sombra sutil que lo separa del fondo.
- En **móvil**, la pantalla completa es desplazable, sin corte de contenido por debajo del borde visible.

### Desde el punto de vista del Game Master (Gamifier)

- Nada nuevo que configurar. Sigue editando el contenido HTML del Objeto Digital como siempre, y la Webapp se encarga de presentarlo de forma responsive.
- Tip: como el contenido HTML simple ahora se renderiza de forma nativa, la tipografía y los colores siguen los del tema de la Aventura.

## 3. PREREQUISITOS DEL USUARIO

- Ninguno. Es una mejora visual automática para todos los Objetos Digitales ya configurados.

## 4. FLUJOS PASO A PASO

### Flujo Webapp — Consultar un Objeto Digital

1. El Player obtiene un Objeto Digital como recompensa (de Reto, de Misión o de Aventura) o lo abre desde el Baúl.
2. Se abre la pantalla del Objeto Digital. En móvil, la pantalla entera es desplazable. En escritorio, el panel derecho con el contenido es desplazable.
3. El Player puede leer/ver todo el contenido sin cortes ni barras de scroll molestas.
4. Al pulsar el botón de retorno, vuelve al punto anterior (carrusel de objetos, Baúl o pantalla de finalización).

## 5. PANTALLAS PARA CAPTURAR

- [WEBAPP] Vista escritorio de un Objeto Digital con contenido HTML largo, panel derecho con scroll → Nombre: `recompensas/objeto-digital-desktop.png`
- [WEBAPP] Vista móvil de un Objeto Digital con contenido largo desplazado → Nombre: `recompensas/objeto-digital-mobile.png`
- [WEBAPP] Objeto Digital con vídeo de YouTube embebido, correctamente dimensionado → Nombre: `recompensas/objeto-digital-youtube.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/recompensas/`
- **Nombre del archivo:** actualización de la página existente de Objetos Digitales.
- **sidebar_position sugerido:** n/a (actualización).
- **Tags sugeridos:** `webapp`, `objetos-digitales`, `responsive`, `ui`
- **¿Es página nueva o actualización?** Actualización menor. No requiere página nueva; basta con refrescar capturas de la página existente. Cambio puramente visual de calidad de vida.

## 7. NOTAS TÉCNICAS

- Es una mejora de presentación; no cambia qué Objetos Digitales existen, ni cómo se configuran ni cómo se entregan.
- Recomendación editorial para el equipo de documentación: refrescar las capturas existentes que muestren la pantalla de Objeto Digital para que reflejen el nuevo look responsive.
