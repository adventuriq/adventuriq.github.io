---
feature_name: Ruleta de la Fortuna — Información dentro de las porciones
date: 2026-05-30
components: [WEBAPP]
docusaurus_path: docs/retos/ruleta-de-la-fortuna.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Información dentro de las porciones de la Ruleta de la Fortuna
- **Descripción:** En los Retos de tipo Ruleta de la Fortuna, cada porción de la ruleta ahora muestra de un vistazo lo que hay en juego: su icono y, debajo, los puntos que otorga (por ejemplo +50 o −20) o un icono de regalo cuando esa porción entrega un Objeto Digital en lugar de puntos. Se ve igual en móvil y en pantallas grandes. El texto descriptivo de la porción premiada sigue mostrándose en grande en la cabecera de la ruleta cuando se detiene el giro.
- **Componentes afectados:** Webapp (v2.34.0)
- **Fecha de despliegue:** 2026-05-30

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)
- No hay cambios en el Gamifier. La configuración de la ruleta (porciones, iconos, colores, puntos, objetos, peso) sigue igual. Lo que cambia es cómo el Player ve esa información dentro de la rueda en la Webapp.

### Desde el punto de vista del Player (Webapp)
- Antes de girar, en cada porción de la ruleta ve:
  - El **icono** que el Game Master asignó a esa porción.
  - Los **puntos** que otorga (con signo: `+50`, `−20`), o
  - Un **icono de regalo** si esa porción entrega un Objeto Digital en lugar de puntos.
- Esta información es legible tanto en el móvil como en el ordenador.
- Al detenerse el giro, el **texto** de la porción ganadora aparece en grande en la cabecera de la ruleta (como hasta ahora), junto con la animación de premio.
- La cabecera y el centro de la ruleta ya no muestran el icono de dado anterior; el diseño es más limpio.

## 3. PREREQUISITOS DEL USUARIO
- Estar jugando una Aventura que contenga un Reto de tipo **Ruleta de la Fortuna**.
- No requiere ninguna configuración nueva por parte del Game Master.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier
- No aplica (sin cambios en el Gamifier).

### Flujo Webapp (Player)
1. Entrar en una Aventura y abrir un Reto de tipo **Ruleta de la Fortuna**.
2. Observar la ruleta: cada porción muestra su icono y, debajo, los puntos (`+50` / `−20`) o el icono de regalo si entrega un objeto.
3. Pulsar **Girar**.
4. Cuando la ruleta se detiene, en la cabecera se muestra en grande el texto de la porción ganadora y el premio obtenido (puntos u objeto).
5. Repetir si quedan giros disponibles; al terminar, pulsar **Ver resultados**.

## 5. PANTALLAS PARA CAPTURAR
- [WEBAPP] Ruleta antes de girar (móvil) mostrando iconos + puntos/regalo en las porciones → Nombre: retos/ruleta-porciones-movil.png
- [WEBAPP] Ruleta antes de girar (escritorio) → Nombre: retos/ruleta-porciones-desktop.png
- [WEBAPP] Cabecera con el texto de la porción ganadora en grande tras el giro → Nombre: retos/ruleta-resultado-cabecera.png

## 6. UBICACIÓN EN DOCUSAURUS
- **Carpeta destino:** `docs/retos/`
- **Nombre del archivo:** `ruleta-de-la-fortuna.md`
- **sidebar_position sugerido:** (mantener el existente de la página de Ruleta)
- **Tags sugeridos:** ruleta, retos, porciones, puntos, objetos digitales
- **¿Es página nueva o actualización?** Actualización (ampliar la página existente de la Ruleta de la Fortuna con cómo se ve la información en cada porción).

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)
- Por defecto, el **texto** de cada porción NO se dibuja dentro de la rueda: solo se muestran icono + puntos/regalo, y el texto aparece en grande en la cabecera al ganar. Está preparada (pero todavía no disponible para el Game Master) una opción a nivel de Reto para mostrar también el texto dentro de cada porción; cuando se habilite se documentará aparte. **No mencionar esta opción en el manual todavía**, ya que aún no es configurable.
- Cuando la opción "evitar duplicados" está activada y una porción ya entregó su objeto, esa porción se muestra en gris (comportamiento existente, sin cambios).
