---
feature_name: Persistencia del idioma seleccionado en el Gamifier
date: 2026-02-13
components: [GAMIFIER]
docusaurus_path: docs/conceptos-basicos.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Persistencia del idioma seleccionado en el Gamifier
- **Descripcion:** El idioma elegido por el Game Master en el Gamifier se respeta y se mantiene entre vistas y sesiones. Antes, varias pantallas (login, Game Board, listado de Aventuras) imponian silenciosamente el idioma del navegador, lo que provocaba que un usuario que hubiera elegido Ingles se encontrara con parte de la interfaz en Espanol (o al reves) al cambiar de pantalla o tras volver a entrar.
- **Componentes afectados:** Gamifier
- **Fecha de despliegue:** 2026-02-13

## 2. QUE PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Elegir el idioma del Gamifier una sola vez (en la pantalla de login o desde el selector de idioma) y verlo aplicado de forma coherente en **todas** las vistas: listado de Aventuras, edicion, Game Board, Clasificaciones, Players, etc.
- Cerrar sesion y volver a entrar: el Gamifier recuerda su eleccion y la vuelve a aplicar automaticamente.
- Si nunca ha elegido idioma, el Gamifier usa como fallback el idioma del navegador; si el navegador esta en un idioma no soportado, muestra **Ingles** por defecto.

## 3. PREREQUISITOS DEL USUARIO

- Ser Game Master o Game Designer con acceso al Gamifier.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier - Cambiar y persistir idioma

1. Desde la pantalla de login, seleccionar el idioma en el selector **antes** de autenticarte.
2. Hacer login.
3. Navegar a Aventuras, Game Board, Clasificaciones, etc.: el idioma se mantiene.
4. Cerrar sesion.
5. Volver a entrar: la pantalla de login y el resto aparecen en el idioma elegido previamente.

### Flujo Gamifier - Primera visita

1. Entrar al Gamifier por primera vez en un navegador nuevo (sin historial).
2. El Gamifier muestra el idioma del navegador si esta soportado.
3. Si no esta soportado, muestra Ingles.
4. En cualquier momento, cambiar con el selector de idioma guarda la preferencia para sesiones futuras.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Selector de idioma en pantalla de login - Nombre: `general/selector-idioma-login.png`
- [GAMIFIER] Misma vista (Game Board) en dos idiomas distintos para mostrar coherencia - Nombre: `general/gameboard-ES.png` y `general/gameboard-EN.png`

## 6. UBICACION EN DOCUSAURUS

- **Carpeta destino:** raiz `docs/` (pagina "Conceptos basicos" o "Primeros pasos en el Gamifier").
- **Nombre del archivo:** integrar como seccion dentro de `conceptos-basicos.md`.
- **sidebar_position sugerido:** no requiere nueva entrada de sidebar.
- **Tags sugeridos:** `gamifier`, `idioma`, `configuracion`
- **Es pagina nueva o actualizacion?** **Actualizacion** menor. Anadir o ampliar la seccion sobre idioma en la pagina de conceptos basicos.

## 7. NOTAS TECNICAS

- Funcionalidad transversal con impacto visible minimo pero importante para usuarios bilingues o de cuentas compartidas. No requiere una pagina dedicada en el manual: basta con una nota en la seccion general de configuracion del Gamifier.
- El orden de prioridad aplicado para decidir el idioma es: (1) preferencia guardada del usuario, (2) idioma del navegador, (3) Ingles como fallback.
- El cambio de idioma desde el selector es inmediato y se aplica a toda la interfaz sin necesidad de recargar la pagina.
