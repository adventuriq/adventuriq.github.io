---
feature_name: Saltar la pantalla de Detalle de Reto
date: 2026-04-14
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/misiones/opciones-mision.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Opción "Mostrar detalle de los Retos" en la Misión
- **Descripción:** Nueva opción a nivel de Misión que permite al Game Master saltarse la pantalla intermedia de detalle de cada Reto. Cuando el Player pulsa un Reto desde el listado, entra directamente a la mecánica (pregunta, ruleta, llamada a la acción...) sin ver antes la pantalla con la imagen, descripción y botón "Empezar".
- **Componentes afectados:** API (v4.19.0), Gamifier (v4.31.0), Webapp (v2.21.0)
- **Fecha de despliegue:** 2026-04-14

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Activar o desactivar el toggle **"Mostrar detalle de los Retos"** dentro de la edición de una Misión, justo debajo de **"La Misión es jugable"**.
- Por defecto la opción está **activada** (comportamiento clásico: el Player ve la pantalla de detalle del Reto antes de empezar).
- Al desactivarla, el Player salta la pantalla de detalle y entra directamente a la mecánica al pulsar un Reto desde el listado.
- Útil para Aventuras rápidas tipo trivial donde la pantalla intermedia añade fricción sin aportar valor.

### Desde el punto de vista del Player (Webapp)

- Si el Game Master ha desactivado la opción, al pulsar un Reto del listado, el Player llega directamente a la mecánica (pregunta, ruleta, etc.) sin pantalla intermedia.
- **Excepción importante:** los Retos con geolocalización (GPS, GPS+QR) **siempre** muestran la pantalla de detalle, porque allí es donde se enseña el mapa con el Punto de Interés al que hay que acudir. Esto es automático y no requiere configuración del Game Master.
- El botón "Atrás" sigue funcionando correctamente y devuelve al Player al listado de Retos.

## 3. PREREQUISITOS DEL USUARIO

- Aventura con al menos una Misión y uno o más Retos.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Desactivar la pantalla de detalle

1. Abrir Aventuras → abrir la Aventura → abrir la Misión.
2. En la edición de la Misión, buscar el toggle **"Mostrar detalle de los Retos"**, debajo de "La Misión es jugable".
3. Desactivar el toggle (pasa de azul/on a gris/off).
4. Guardar la Misión. El cambio tiene efecto inmediato para los Players que entren.
5. Opcional: pulsar el icono de interrogación junto al toggle para leer un tooltip explicativo con la excepción de geolocalización.

### Flujo Webapp — Entrar a un Reto sin pantalla de detalle

1. El Player abre la Misión.
2. Ve el listado de Retos.
3. Pulsa un Reto cualquiera (o su flecha).
4. **Sin la opción activada**: entra directamente a la mecánica del Reto (pregunta, ruleta, etc.).
5. **Con la opción activada** (comportamiento clásico): ve primero la pantalla de detalle con imagen y descripción, pulsa "Empezar" y entra a la mecánica.
6. Si el Reto tiene geolocalización, siempre ve la pantalla de detalle con el mapa, independientemente de la configuración.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Edición de Misión con el toggle "Mostrar detalle de los Retos" visible y tooltip abierto → Nombre: `misiones/toggle-mostrar-detalle-reto.png`
- [WEBAPP] Listado de Retos de una Misión → Nombre: `misiones/webapp-listado-retos.png`
- [WEBAPP] Pantalla de detalle de Reto (comportamiento clásico, opción activada) → Nombre: `retos/webapp-detalle-reto.png`
- [WEBAPP] Entrada directa a la mecánica de un Reto (opción desactivada) → Nombre: `retos/webapp-mecanica-directa.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/misiones/`
- **Nombre del archivo:** actualización de la página de opciones/configuración de Misión.
- **sidebar_position sugerido:** junto a las otras opciones de Misión (jugable, tiempo, etc.).
- **Tags sugeridos:** `mision`, `reto`, `opciones`, `navegacion`, `ux`
- **¿Es página nueva o actualización?** Actualización. Añadir una subsección con el nuevo toggle y la excepción de geolocalización.

## 7. NOTAS TÉCNICAS

- La excepción de geolocalización es **automática y no configurable**: un Reto con tipo de localización GPS o GPS+QR **siempre** enseña la pantalla de detalle, porque es donde se muestra el mapa con el Punto de Interés.
- Las Misiones existentes mantienen la pantalla de detalle activada por defecto (no cambia nada al actualizar).
- Esta opción se copia correctamente al clonar una Aventura.
