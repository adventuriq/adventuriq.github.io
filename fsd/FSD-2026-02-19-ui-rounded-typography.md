---
feature_name: Rediseño visual del Gamifier (esquinas redondeadas y tipografía Nunito)
date: 2026-02-19
components: [GAMIFIER]
docusaurus_path: docs/intro.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Rediseño visual del Gamifier
- **Descripción:** Actualización del aspecto general del Gamifier. Todos los componentes (tarjetas, botones, formularios, modales, diálogos, etc.) tienen ahora esquinas redondeadas, una tipografía más legible (Nunito) y botones de acción homogéneos. La tabla de Misiones se hace horizontalmente desplazable en pantallas más estrechas y el listado de Aventuras oculta la columna de imagen en pantallas pequeñas para mejor lectura.
- **Componentes afectados:** Gamifier
- **Fecha de despliegue:** 2026-02-19

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Trabajar con una interfaz visualmente más consistente: tarjetas y diálogos con esquinas redondeadas, tipografía Nunito en toda la aplicación, botones de acción con el mismo tamaño e iconos.
- Ver el listado de Aventuras y la tabla de Misiones correctamente en monitores pequeños y portátiles: el listado se adapta al ancho disponible y aparece un desplazamiento horizontal si la tabla no cabe.
- Disfrutar de un layout más coherente en los botones superiores de una Aventura (licencias, tienda, etc.).

## 3. PREREQUISITOS DEL USUARIO

- Usar un navegador moderno. No se requiere ninguna acción del usuario: la actualización es automática al abrir el Gamifier.

## 4. FLUJOS PASO A PASO

No aplica un flujo concreto. Es un rediseño visual global.

### Flujo Gamifier — Comprobar el nuevo aspecto

1. Abre el Gamifier.
2. Observa que las tarjetas, los botones y los modales tienen esquinas redondeadas (radio de 5 px).
3. Abre el listado de Aventuras en un monitor estrecho (o reduce la ventana por debajo de 1200 px de ancho): la columna de imagen se oculta automáticamente y el resto de la tabla se adapta.
4. Entra en una Aventura y desplázate al bloque de Misiones: si la tabla supera el ancho disponible, aparece un desplazamiento horizontal dentro del bloque en lugar de romper el diseño.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Listado de Aventuras con el nuevo aspecto (esquinas redondeadas, tipografía Nunito) → Nombre: `aventuras/listado-nuevo-aspecto.png`
- [GAMIFIER] Listado de Aventuras en ventana estrecha — columna de imagen oculta → Nombre: `aventuras/listado-responsive.png`
- [GAMIFIER] Edición de Aventura con tabla de Misiones desplazable → Nombre: `misiones/tabla-scroll-horizontal.png`
- [GAMIFIER] Botones superiores de la Aventura homogeneizados (licencias, tienda, etc.) → Nombre: `aventuras/botones-aventura-homogeneos.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/intro.md` (nota breve) y/o Novedades/Changelog.
- **Nombre del archivo:** actualizar `intro.md` con una mención visual o añadir una nota de cambios visuales.
- **sidebar_position sugerido:** —
- **Tags sugeridos:** `gamifier`, `ui`, `rediseño`
- **¿Es página nueva o actualización?** Actualización. Se recomienda refrescar las capturas de cualquier página del manual tras este rediseño para que coincidan con el nuevo aspecto.

## 7. NOTAS TÉCNICAS

- No se introduce un modo oscuro. Se intentó durante el desarrollo pero se descartó.
- Si las capturas del manual son previas a esta fecha, se verán con el aspecto antiguo. Al capturar nuevas pantallas, usar una ventana de al menos 1280 px para el Gamifier.
- Este cambio afecta prácticamente a todas las capturas del manual. Como es un refresco visual, no requiere una página nueva en el manual.
