---
feature_name: Filtro de búsqueda en el listado de Aventuras
date: 2026-02-19
components: [GAMIFIER]
docusaurus_path: docs/aventuras/busqueda-aventuras.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Búsqueda en el listado de Aventuras
- **Descripción:** El listado de Aventuras del Gamifier tiene ahora un campo de búsqueda que filtra en tiempo real mientras escribes. Busca simultáneamente en el título, la descripción, el creador, el GamePIN y el estado de cada Aventura, de modo que no necesitas recordar cómo se llamaba exactamente una Aventura para encontrarla.
- **Componentes afectados:** Gamifier
- **Fecha de despliegue:** 2026-02-19

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Escribir en el campo de búsqueda del listado de Aventuras para filtrar el listado al instante (sin esperar a recargar).
- Ver cuántas Aventuras coinciden con la búsqueda y cuántas hay en total ("filtradas / total").
- Limpiar la búsqueda con el botón "X" que aparece mientras haya texto escrito.
- Buscar por cualquier dato visible de la Aventura: su nombre, su creador, su GamePIN o su estado de publicación.

## 3. PREREQUISITOS DEL USUARIO

- Tener acceso al Gamifier con un rol que permita ver el listado de Aventuras (Game Master o Game Designer).

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Buscar una Aventura

1. Entra al Gamifier. Abre la sección de Aventuras (listado).
2. Pulsa en el campo **"Buscar aventura..."** situado encima del listado.
3. Escribe parte del nombre, del GamePIN o del creador. El listado se va filtrando a medida que escribes.
4. El contador superior pasa de mostrar el total a mostrar "filtradas / total".
5. Pulsa la **X** del campo para borrar la búsqueda y recuperar el listado completo.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Listado de Aventuras con el campo de búsqueda vacío → Nombre: `aventuras/busqueda-vacia.png`
- [GAMIFIER] Listado filtrado escribiendo un texto y contador "X / Y" arriba → Nombre: `aventuras/busqueda-filtrada.png`
- [GAMIFIER] Detalle de la X para limpiar la búsqueda → Nombre: `aventuras/busqueda-limpiar.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `busqueda-aventuras.md` (o sección en la página de "Listado de Aventuras").
- **sidebar_position sugerido:** al principio de la sección de Aventuras.
- **Tags sugeridos:** `aventuras`, `listado`, `busqueda`, `filtro`
- **¿Es página nueva o actualización?** Actualización recomendada de la página existente de "Listado de Aventuras", añadiendo un bloque sobre la búsqueda.

## 7. NOTAS TÉCNICAS

- La búsqueda se hace en tu navegador: es instantánea, pero solo busca entre las Aventuras que ya están cargadas en la pantalla.
- Si tienes muchas Aventuras, la búsqueda combina bien con la ordenación para acotar resultados.
