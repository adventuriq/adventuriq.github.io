---
feature_name: Migas de navegación inteligentes
date: 2026-06-08
components: [API] [GAMIFIER]
docusaurus_path: docs/gamifier/navegacion-breadcrumbs.md
---

## 1. RESUMEN DE LA FEATURE
- **Nombre:** Migas de navegación (breadcrumbs) inteligentes
- **Descripción:** En todo el Gamifier, la barra de migas ("Inicio > Aventura > Misión > Reto > Objeto") muestra ahora la ruta correcta y completa de cualquier elemento, con su título real, y siempre con la misma terminología.
- **Componentes afectados:** API (monolito v4.39.0 + adventuriq-api-8), Gamifier (v4.50.0)
- **Fecha de despliegue:** 2026-06-08

## 2. QUÉ PUEDE HACER EL USUARIO AHORA
### Desde el punto de vista del Game Master (Gamifier)
- Ver en cualquier pantalla una miga de navegación coherente: siempre empieza en **Inicio** y usa la terminología única **Aventura → Misión → Reto → Objeto** (antes alternaba "Evento/Itinerario/Prueba/Recompensa").
- Cada nivel muestra el **título real** del elemento (no sólo su número), y es un enlace que lleva directamente a ese nivel.
- Al editar un **Reto incluido dentro de unas Preguntas Encadenadas (Trivial)**, la miga muestra ahora el **Reto contenedor**: `Inicio > Aventura > Misión > Reto (Preguntas Encadenadas) > Reto`.
- Al abrir un **Objeto** desde la lista "Todos los Objetos de la Aventura", la miga muestra su **ruta completa** según dónde esté vinculado:
  - Objeto de Reto: `Inicio > Aventura > Misión > Reto > Objeto`
  - Objeto de Misión: `Inicio > Aventura > Misión > Objeto`
  - Objeto de Aventura: `Inicio > Aventura > Objeto`
- Migas consistentes también en las vistas de administración (Usuarios, Game Designers, Clanes, Puntos de Interés, Tablero de Juego, Clasificación, Super Admin, etc.).

## 3. PREREQUISITOS DEL USUARIO
- Tener acceso al Gamifier como Game Master / Game Designer.
- No requiere ninguna configuración: el comportamiento es automático en todas las pantallas.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Reto dentro de Preguntas Encadenadas
1. Abrir una Aventura → una Misión que contenga un Reto de tipo **Preguntas Encadenadas (Trivial)**.
2. Entrar en el Reto Trivial y abrir uno de sus Retos hijos.
3. Observar la miga: ahora incluye el Reto contenedor, p.ej. `Inicio > Aventura: Tesoro Maya > Misión: El Templo > Reto Trivial: Quiz Final > Reto: ¿Qué año?`.
4. Pulsar cualquier nivel para volver a él.

### Flujo Gamifier — Objeto desde "Todos los Objetos"
1. Editar una Aventura y bajar a la sección **Todos los Objetos**.
2. Pulsar **Editar** en un objeto vinculado a un Reto.
3. En el formulario del objeto, la miga muestra la ruta completa hasta ese Reto: `Inicio > Aventura > Misión > Reto > Objeto`.

## 5. PANTALLAS PARA CAPTURAR
- [GAMIFIER] Edición de un Reto hijo dentro de un Trivial, mostrando la miga con el Reto contenedor → Nombre: `navegacion/breadcrumb-reto-encadenado.png`
- [GAMIFIER] Formulario de un Objeto abierto desde "Todos los Objetos" con la ruta completa → Nombre: `navegacion/breadcrumb-objeto-ruta-completa.png`
- [GAMIFIER] Una pantalla de administración (p.ej. Super Admin) mostrando la miga consistente → Nombre: `navegacion/breadcrumb-admin.png`

## 6. UBICACIÓN EN DOCUSAURUS
- **Carpeta destino:** `docs/gamifier/`
- **Nombre del archivo:** `navegacion-breadcrumbs.md`
- **sidebar_position sugerido:** (al final de la sección Gamifier)
- **Tags sugeridos:** navegación, gamifier, breadcrumbs, usabilidad
- **¿Es página nueva o actualización?** Nueva

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)
- La ruta se calcula en el servidor (endpoint `GET /breadcrumb/{tipo}/{id}`), por lo que la miga es coherente venga el usuario de donde venga (no depende de cómo se haya llegado a la pantalla).
- Los títulos se muestran en el **idioma por defecto de la Aventura**; si un nivel no tiene título traducido se muestra `#<número>`.
- En los formularios de **creación** (un elemento que aún no existe), la miga muestra de momento sólo los niveles ya conocidos (p.ej. "Inicio"); se completa automáticamente cuando el elemento se guarda.
- En algunas vistas de administración el último nivel se muestra como etiqueta de sección fija en lugar de un nombre dinámico.
