---
feature_name: Clasificación rediseñada con barra del jugador y ficha de detalle
date: 2026-04-11
components: [WEBAPP]
docusaurus_path: docs/webapp/clasificacion.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Clasificación responsive con barra del jugador y ficha de detalle
- **Descripción:** La pantalla de Clasificación (Ranking) de la Webapp estrena rediseño en sus cuatro variantes (general, diaria, mi equipo, por Misiones): textos e iconos más grandes, escalado responsive según el tamaño de pantalla, una **barra fija inferior con la posición y los datos del Player actual** (siempre visible aunque haya muchas páginas de ranking), y una nueva **ficha de detalle** que se abre al pulsar cualquier jugador del listado mostrando su avatar grande, equipo, posición, Retos completados y puntuación.
- **Componentes afectados:** Webapp
- **Fecha de despliegue:** 2026-04-11

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Player (Webapp)

- Ver la Clasificación con tipografías y avatares más grandes, más fáciles de leer especialmente en pantallas grandes (tablet, escritorio). El tamaño se ajusta automáticamente al ancho del dispositivo.
- Ver **siempre** su propia posición en una **barra fija** justo encima de la barra inferior de navegación, con:
  - Posición en la Clasificación
  - Avatar
  - Nickname
  - Número de Retos completados (con un icono de dado)
  - Puntuación total
- Consultar cualquier **ficha de detalle** pulsando sobre un jugador del listado: avatar grande, nickname, equipo (si tiene), posición, Retos completados y puntos, con un botón **"Atrás"** para volver al listado.
- Cambiar de pestaña (general / diaria / mi equipo / Misiones) sin perder el contexto: el listado se resetea a su estado normal al cambiar.
- Disfrutar de una barra inferior de navegación renovada: sin el hueco central antiguo del botón flotante, con colores coherentes (fondo azul oscuro, icono activo blanco, iconos inactivos en naranja corporativo).

### Desde el punto de vista del Game Master (Gamifier)

- Sin cambios en la configuración: todas las Aventuras aprovechan automáticamente el nuevo diseño en la Webapp de sus Players.

## 3. PREREQUISITOS DEL USUARIO

- Estar dentro de una Aventura y acceder a la pestaña **Clasificación**.
- Para ver la barra del jugador actual correctamente, estar identificado como Player en la Aventura (no acceder como invitado anónimo).

## 4. FLUJOS PASO A PASO

### Flujo Player — Ver la barra fija de tu propia posición

1. Entrar a la Aventura y abrir la pestaña **Clasificación**.
2. Independientemente de tu posición real (incluso si estás muy abajo en el ranking), tu tarjeta aparece **siempre visible** en la barra inferior (entre el listado y la barra de navegación).
3. La barra muestra: tu posición · avatar · nickname · número de Retos completados · puntos.

### Flujo Player — Abrir la ficha de detalle de un jugador

1. En el listado de Clasificación, pulsar sobre la fila de cualquier jugador.
2. El listado se reemplaza por la **ficha de detalle** del jugador:
   - Avatar grande circular
   - Nickname
   - Equipo (si pertenece a uno)
   - Stats: Posición · Retos · Puntuación
3. Pulsar el botón **"Atrás"** para volver al listado.

### Flujo Player — Alternar entre las cuatro clasificaciones

1. Desde la pestaña Clasificación, usar los tabs: **General**, **Diaria**, **Mi equipo**, **Por Misiones**.
2. Al cambiar de tab, el listado vuelve a su estado normal (sin ficha de detalle abierta).
3. La barra fija del Player actual se adapta al ranking correspondiente.

## 5. PANTALLAS PARA CAPTURAR

- [WEBAPP] Clasificación general con barra fija del jugador → Nombre: `clasificacion/general-barra-fija.png`
- [WEBAPP] Clasificación diaria con barra fija → Nombre: `clasificacion/diaria-barra-fija.png`
- [WEBAPP] Clasificación Mi equipo con barra fija → Nombre: `clasificacion/miequipo-barra-fija.png`
- [WEBAPP] Clasificación por Misiones con barra fija → Nombre: `clasificacion/misiones-barra-fija.png`
- [WEBAPP] Ficha de detalle de un jugador tras pulsar fila → Nombre: `clasificacion/ficha-detalle-player.png`
- [WEBAPP] Clasificación en pantalla ancha (tablet/desktop) con escalado responsive → Nombre: `clasificacion/responsive-tablet.png`
- [WEBAPP] Barra inferior de navegación renovada (sin notch central) → Nombre: `clasificacion/bottom-nav-renovada.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/webapp/` o `docs/metricas/` según esté organizado el sidebar (página de Clasificación).
- **Nombre del archivo:** `clasificacion.md` (actualización de la página existente)
- **sidebar_position sugerido:** mantener el existente.
- **Tags sugeridos:** `clasificacion`, `ranking`, `webapp`, `player`, `responsive`
- **¿Es página nueva o actualización?** **Actualización** extensa de la página existente de Clasificación. Reemplazar las capturas antiguas y añadir los apartados "Barra fija del jugador actual" y "Ficha de detalle del jugador".

## 7. NOTAS TÉCNICAS

- **Responsive automático**: el escalado se basa en el ancho real de la pantalla (tope de escala +40 % respecto al tamaño base). No hay ajustes manuales por parte del Game Master ni del Player.
- **Ficha de detalle en Mi equipo y Misiones**: en estas dos variantes, el detalle muestra solo Posición y Puntos (no número de Retos), porque esos modelos no registran la cifra. Es intencional.
- **Compatibilidad con la feature del botón Atrás**: la ficha de detalle tiene su propio botón "Atrás" que cierra la ficha y vuelve al listado; el botón de atrás de cabecera (añadido el mismo día en v2.14.0) sigue funcionando para salir de toda la pantalla de Clasificación.
