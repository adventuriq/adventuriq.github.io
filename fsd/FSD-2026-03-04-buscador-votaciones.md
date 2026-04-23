---
feature_name: Buscador mejorado en la pantalla de Votaciones
date: 2026-03-04
components: [WEBAPP]
docusaurus_path: docs/aventuras/votaciones.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Barra de búsqueda flotante en el listado de Players de las Votaciones
- **Descripción:** La pantalla donde el Player elige a quién votar usa ahora una barra de búsqueda flotante idéntica a la del listado de Aventuras: naranja, centrada, con botón de limpiar texto y botón de refrescar. Reemplaza al antiguo campo de texto incrustado en la cabecera.
- **Componentes afectados:** Webapp
- **Fecha de despliegue:** 2026-03-04

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Player (Webapp)

- Buscar un Player con la misma barra flotante que ya conoce del listado de Aventuras.
- Limpiar el texto buscado con un solo toque.
- Refrescar la lista de Players y sus votos con el nuevo botón de refresco (arriba a la derecha).

## 3. PREREQUISITOS DEL USUARIO

- Estar en una Aventura con **Votaciones** activadas por el Game Master.

## 4. FLUJOS PASO A PASO

### Flujo Webapp — Buscar a un Player para votarlo

1. Entra a la Aventura.
2. Abre la Bitácora y ve a **Clasificación**.
3. Pulsa **"Votar"**.
4. En la parte superior aparece la barra de búsqueda flotante naranja. Escribe parte del nombre del Player.
5. El listado se filtra al instante. Pulsa el botón de limpiar (X) para volver al listado completo.
6. Pulsa el botón de refrescar para volver a cargar los Players y los votos desde cero.

## 5. PANTALLAS PARA CAPTURAR

- [WEBAPP] Listado de Players con la barra de búsqueda flotante naranja → Nombre: `webapp/votaciones-buscador.png`
- [WEBAPP] Listado filtrado con texto escrito y botón X visible → Nombre: `webapp/votaciones-buscador-filtrado.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** añadir sección en la página principal `votaciones.md` (ver FSD-2026-03-03-sistema-votaciones).
- **sidebar_position sugerido:** dentro de la página de Votaciones.
- **Tags sugeridos:** `votaciones`, `buscador`, `player`, `webapp`
- **¿Es página nueva o actualización?** Actualización de la página de Votaciones.

## 7. NOTAS TÉCNICAS

- El botón de refrescar hace una nueva petición para actualizar tanto el listado de Players como los votos ya emitidos y recibidos.
- Si acabas de llegar a la Aventura, quizá necesites refrescar para que aparezcan Players recién registrados.
