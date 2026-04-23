---
feature_name: Sistema de Votaciones entre Players
date: 2026-03-03
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/aventuras/votaciones.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Votaciones entre Players con cinco Tipos de Voto configurables
- **Descripción:** Los Players de una Aventura pueden ahora votarse entre sí con diferentes Tipos de Voto (estrellas, corazones, rayos, etc.). El Game Master activa la funcionalidad para cada Aventura y personaliza los cinco Tipos de Voto: nombre, icono, color, puntos que otorga y si está activo. Los Players acceden a la votación desde la sección de Clasificación y ven una media de votos recibida junto a su posición. El Game Master dispone de un apartado de estadísticas de votaciones en el Game Board.
- **Componentes afectados:** API, Gamifier, Webapp
- **Fecha de despliegue:** 2026-03-03

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Activar o desactivar las **Votaciones** en cada Aventura con un interruptor.
- Al activarse, se crean automáticamente **cinco Tipos de Voto** por defecto. El Game Master los personaliza uno a uno:
  - Nombre del voto (ej. "Más creativo", "Más amable").
  - Icono (elegido entre más de 60 iconos disponibles).
  - Color (selector cromático).
  - Puntos que otorga cada voto recibido al Player votado.
  - Activar/desactivar ese Tipo de Voto.
- Consultar estadísticas de votaciones en el **Game Board** de la Aventura: quién ha recibido más votos por tipo, total de votos emitidos, etc.

### Desde el punto de vista del Player (Webapp)

- Ver una nueva tarjeta **"Votar"** en la Clasificación de la Aventura (si el Game Master ha activado las votaciones).
- Al pulsarla, acceder al listado de Players de la Aventura con un buscador para localizar rápidamente a un Player.
- Entrar en el perfil de un Player y **emitir un voto** por uno de los Tipos de Voto activos (solo un voto por Tipo hacia ese Player).
- Añadir opcionalmente un **motivo** al voto.
- **Revocar** un voto emitido.
- Ver en la Clasificación su propia media de estrellas (o del Tipo de Voto que muestre el ranking) recibida de los demás Players.

## 3. PREREQUISITOS DEL USUARIO

- Game Master: tener una Aventura creada.
- Player: estar registrado en una Aventura en la que el Game Master haya activado las Votaciones.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Activar Votaciones y personalizar los Tipos de Voto

1. Entra en Aventuras y abre la Aventura.
2. Activa el interruptor **"Visualizar Votaciones"**. Se crean automáticamente los 5 Tipos de Voto por defecto.
3. En el bloque **"Tipos de Voto"** que aparece, pulsa el lápiz de uno de los tipos para abrir el editor.
4. Configura: nombre del voto, icono, color, puntos por voto recibido, activo (sí/no).
5. Guarda. El Tipo de Voto queda listo para los Players.
6. Repite para los demás tipos según necesites.

### Flujo Gamifier — Consultar estadísticas de Votaciones

1. Desde el listado de Aventuras, entra al **Game Board** de la Aventura.
2. Desplázate al bloque **"Estadísticas de Votaciones"**.
3. Consulta los totales de votos emitidos por Tipo de Voto y los Players más votados en cada categoría.

### Flujo Webapp — Emitir un voto

1. Entra a una Aventura como Player.
2. Abre la Bitácora y ve a **Clasificación**.
3. Pulsa la tarjeta **"Votar"**.
4. En el listado de Players, localiza al Player que quieres votar (usa el buscador si hace falta).
5. Pulsa sobre su nombre. Se muestran los Tipos de Voto activos con su icono y color.
6. Pulsa el Tipo de Voto que quieres darle. (Opcional) Escribe un motivo.
7. Confirma. El voto queda registrado.

### Flujo Webapp — Revocar un voto

1. En la pantalla de votación del Player al que votaste, verás marcado el Tipo de Voto ya emitido.
2. Pulsa sobre ese mismo Tipo de Voto. Se te preguntará si quieres revocar el voto.
3. Confirma. El voto se elimina y puedes volver a votar con ese Tipo o con otro.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Edición de Aventura con el interruptor **"Visualizar Votaciones"** activado → Nombre: `aventuras/votaciones-activar.png`
- [GAMIFIER] Bloque "Tipos de Voto" con los 5 tipos por defecto → Nombre: `aventuras/votaciones-tipos-listado.png`
- [GAMIFIER] Modal de edición de un Tipo de Voto (nombre, icono, color, puntos, activo) → Nombre: `aventuras/votaciones-editar-tipo.png`
- [GAMIFIER] Game Board → bloque "Estadísticas de Votaciones" → Nombre: `metricas/gameboard-votaciones.png`
- [WEBAPP] Clasificación con la tarjeta "Votar" visible → Nombre: `webapp/clasificacion-boton-votar.png`
- [WEBAPP] Listado de Players con el buscador → Nombre: `webapp/votaciones-listado-players.png`
- [WEBAPP] Pantalla de votar a un Player con los Tipos de Voto → Nombre: `webapp/votaciones-pantalla-voto.png`
- [WEBAPP] Caja de media de estrellas junto a la posición en la Clasificación → Nombre: `webapp/votaciones-media-estrellas.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/` (principal) + referencia desde `docs/metricas/` (Game Board).
- **Nombre del archivo:** `votaciones.md`
- **sidebar_position sugerido:** dentro de Aventuras, cerca de la Clasificación y el Muro.
- **Tags sugeridos:** `aventuras`, `votaciones`, `players`, `clasificacion`, `gameboard`
- **¿Es página nueva o actualización?** Nueva página. Enlazar también desde la página de Clasificación.

## 7. NOTAS TÉCNICAS

- Cada Player solo puede emitir un voto por Tipo de Voto a otro Player (ej. un único "Más creativo" para cada compañero). Pero puede votar al mismo Player con varios Tipos distintos.
- Un Player no puede votarse a sí mismo.
- Desactivar una Aventura con votos ya emitidos no los borra; si se vuelve a activar, los votos siguen existiendo.
- Los Tipos de Voto desactivados dejan de ofrecerse a los Players, pero los votos emitidos previamente en ese Tipo se conservan en el Game Board.
- Los avatares de Players registrados con Google funcionan correctamente con Google SignIn (no se confunden con los avatares cargados manualmente).
