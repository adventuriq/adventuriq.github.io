---
feature_name: Rediseño responsive de la Webapp (desktop + móvil)
date: 2026-04-10
components: [WEBAPP]
docusaurus_path: docs/webapp/diseno-responsive.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Rediseño responsive integral de la Webapp
- **Descripción:** La Webapp del Player se adapta ahora de forma fluida al tamaño de la pantalla. En móvil mantiene el formato vertical clásico, y en tablets y pantallas de escritorio aprovecha el ancho con un diseño a dos columnas (imagen/contenido). Los Retos de Pregunta/Respuesta estrenan un estilo tipo Kahoot (botones grandes y coloridos con iconos geométricos). Las listas de Aventuras aparecen con una pequeña animación en cascada. Los tamaños de texto, imágenes y cards se ajustan automáticamente al ancho disponible.
- **Componentes afectados:** Webapp
- **Fecha de despliegue:** 2026-04-10

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Player (Webapp)

- Jugar cómodamente desde cualquier dispositivo: móvil en vertical, tablet en horizontal, portátil o monitor de escritorio.
- Ver las Aventuras, Misiones y Retos con imagen grande a la izquierda y descripción a la derecha cuando la pantalla lo permita, con tipografías más grandes y legibles.
- Responder Preguntas/Respuestas y Preguntas Encadenadas con botones grandes, en colores rotativos y con iconos geométricos distintos (estilo tipo Kahoot), fáciles de pulsar tanto con el dedo como con el ratón.
- Ver el contenido HTML enriquecido (negritas, imágenes, vídeos incrustados) integrado y con un aspecto consistente, sin saltos de estilo entre plataformas.
- Notar pequeños detalles de pulido: aparición escalonada de las Aventuras en el listado, barra inferior de navegación con mejor contraste, scrollbars visibles cuando haya más contenido.

### Desde el punto de vista del Game Master (Gamifier)

- No hay nada nuevo que configurar: todas las Aventuras existentes se benefician automáticamente del nuevo aspecto visual en la Webapp de sus Players.

## 3. PREREQUISITOS DEL USUARIO

- Ninguno. El nuevo diseño se aplica automáticamente a todos los Players desde la fecha de despliegue.

## 4. FLUJOS PASO A PASO

### Flujo Player — Jugar un Reto de Pregunta/Respuesta en móvil y en escritorio

1. Entrar a la Aventura y abrir una Misión.
2. Pulsar un Reto de tipo **Pregunta/Respuesta**.
3. En **móvil**: la imagen aparece arriba, la pregunta debajo y las opciones de respuesta en una sola columna, con colores rotativos.
4. En **escritorio**: la imagen queda a la izquierda y la pregunta más las opciones a la derecha, en dos columnas.
5. Pulsar la respuesta: el botón se resalta con una pequeña animación.
6. Pulsar **Continuar** para seguir.

### Flujo Player — Consultar el detalle de una Aventura o Misión

1. Abrir la Aventura.
2. En escritorio, ver imagen grande a la izquierda y descripción a la derecha (con scroll propio si hay mucho texto).
3. En móvil, ver imagen superior e información deslizable debajo.
4. Pulsar sobre una Misión: misma lógica aplicada a la vista de detalle de Misión y, dentro, a cada Reto.

### Flujo Player — Navegar listados con la nueva barra inferior

1. Al entrar en Misiones o Retos, ver la barra inferior de navegación con mejor contraste.
2. Cambiar de pestaña (Misiones / Retos / Clasificación / etc.): la pestaña activa muestra texto y fondo resaltado; las inactivas muestran solo icono.

## 5. PANTALLAS PARA CAPTURAR

- [WEBAPP] Listado de Aventuras con animación en cascada (móvil) → Nombre: `webapp/responsive/listado-aventuras-movil.png`
- [WEBAPP] Detalle de Aventura en escritorio (dos columnas) → Nombre: `webapp/responsive/aventura-detalle-desktop.png`
- [WEBAPP] Detalle de Aventura en móvil → Nombre: `webapp/responsive/aventura-detalle-movil.png`
- [WEBAPP] Reto Pregunta/Respuesta en móvil (botones Kahoot) → Nombre: `webapp/responsive/reto-pr-movil.png`
- [WEBAPP] Reto Pregunta/Respuesta en escritorio (dos columnas) → Nombre: `webapp/responsive/reto-pr-desktop.png`
- [WEBAPP] Reto Preguntas Encadenadas (Trivial) con botones Kahoot → Nombre: `webapp/responsive/reto-trivial.png`
- [WEBAPP] Barra inferior de navegación actualizada → Nombre: `webapp/responsive/bottom-nav.png`
- [WEBAPP] Cards de Aventura, Misión y Reto en distintas anchuras → Nombre: `webapp/responsive/cards-breakpoints.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/webapp/` (si existe una página introductoria de la Webapp para Players) o `docs/intro.md` / `docs/conceptos-basicos.md` como sección.
- **Nombre del archivo:** `diseno-responsive.md`
- **sidebar_position sugerido:** al principio del bloque Webapp.
- **Tags sugeridos:** `webapp`, `player`, `diseño`, `responsive`, `kahoot`, `desktop`, `movil`
- **Tono:** orientado al Player ("tú"), descriptivo. También puede enlazarse como nota desde las páginas de cada tipo de Reto.
- **¿Es página nueva o actualización?** Nueva página resumen + breves notas de actualización en las páginas de Reto Pregunta/Respuesta y Preguntas Encadenadas mencionando el nuevo aspecto.

## 7. NOTAS TÉCNICAS

- **Cambio puramente visual**: no modifica mecánicas, puntuaciones ni datos. No requiere acción del Game Master.
- **Compatibilidad con contenido existente**: el HTML enriquecido (negritas, imágenes, tablas, embeds de YouTube/Genially/Wordwall) se sigue mostrando, con un fallback automático a un reproductor integrado cuando hay `iframe` incrustado.
- **Scrollbars visibles**: en escritorio aparecen barras laterales cuando hay más contenido; es intencional, no un bug de maquetación.
- **Animación de listado**: las Aventuras entran en cascada (~150 ms entre cards); si el Player prefiere animaciones reducidas, seguirá la configuración del sistema operativo en versiones futuras.
- **Recomendación para capturas**: tomar dos sets (móvil ~400 px y escritorio ≥1280 px) para mostrar el contraste entre layouts.
