---
feature_name: Acceso directo "Añadir Aventura" en el menú lateral
date: 2026-04-23
components: [WEBAPP] [GAMIFIER]
docusaurus_path: docs/player/anadir-aventura.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Acceso directo "Añadir Aventura" desde el menú lateral
- **Descripción:** Los Players tienen ahora una entrada visible en el menú lateral para añadir una Aventura a partir de su Game PIN, sin tener que descubrir el botón "+" oculto en la barra de búsqueda.
- **Componentes afectados:** WEBAPP (nueva entrada de menú + diálogo reutilizable) y GAMIFIER (solo actualización del changelog de la webapp y número de versión mostrado).
- **Fecha de despliegue:** 2026-04-23

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Player (Webapp)

- Abrir el menú lateral y ver una nueva opción **"Añadir Aventura"** (con icono de círculo con "+") entre **Aventuras** e **Instalar la App**.
- Al pulsarla, aparece un diálogo limpio que pide el **Game PIN** de 9 dígitos. El campo solo acepta números y se limita automáticamente a 9 cifras.
- Al confirmar:
  - Si el Game PIN es válido, la webapp añade la Aventura al listado del Player, refresca la lista y navega automáticamente a **Aventuras** para que el Player vea la nueva entrada, con un aviso azul "Aventura añadida correctamente".
  - Si el Game PIN no es válido (longitud incorrecta o no reconocido), aparece un aviso claro en rojo "Game PIN no válido" y el Player puede reintentar.
- La acción sigue estando también disponible desde el botón "+" de la barra de búsqueda del listado de Aventuras — la nueva entrada de menú es un camino alternativo más visible.

### Desde el punto de vista del Game Master (Gamifier)

- Nada nuevo que configurar. La feature es puramente de UX de la Webapp.
- El Game Master puede indicar a sus Players: *"Abre el menú → Añadir Aventura → introduce el Game PIN"* en lugar de explicar el botón "+" de la barra de búsqueda, que era menos intuitivo.

## 3. PREREQUISITOS DEL USUARIO

- Tener una cuenta de Player activa y haber iniciado sesión en la Webapp.
- Conocer el **Game PIN** (9 dígitos) de la Aventura que se quiere añadir. El Game PIN lo proporciona el Game Master o aparece en el QR/enlace de acceso.

## 4. FLUJOS PASO A PASO

### Flujo Player — Añadir Aventura desde el menú lateral

1. Dentro de la Webapp, pulsar el icono de menú (hamburguesa) arriba a la izquierda para abrir el sidebar.
2. Pulsar **"Añadir Aventura"** (icono con "+").
3. En el diálogo, introducir los **9 dígitos** del Game PIN.
4. Pulsar **AÑADIR**.
5. La webapp navega a la sección **Aventuras** y muestra la nueva Aventura en el listado, junto con un aviso "Aventura añadida correctamente".

### Flujo alternativo — Añadir Aventura desde la barra de búsqueda (existente)

1. Estando en la sección **Aventuras**, pulsar el botón **"+"** a la izquierda de la barra de búsqueda.
2. Introducir el Game PIN de 9 dígitos.
3. Pulsar **AÑADIR**.

## 5. PANTALLAS PARA CAPTURAR

- [WEBAPP] Menú lateral abierto mostrando las 4 opciones (Perfil / Aventuras / Añadir Aventura / Instalar la App / Logout) → Nombre sugerido: `player/sidebar-anadir-aventura.png`
- [WEBAPP] Diálogo "Añadir Aventura" con el campo vacío → Nombre sugerido: `player/dialog-anadir-aventura-vacio.png`
- [WEBAPP] Diálogo con un Game PIN introducido (ej: `123456789`) → Nombre sugerido: `player/dialog-anadir-aventura-relleno.png`
- [WEBAPP] Listado de Aventuras tras añadir, con el snackbar "Aventura añadida correctamente" visible → Nombre sugerido: `player/aventura-anadida-correctamente.png`
- [WEBAPP] Diálogo con Game PIN inválido + snackbar rojo "Game PIN no válido" → Nombre sugerido: `player/game-pin-no-valido.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/player/`
- **Nombre del archivo:** `anadir-aventura.md`
- **sidebar_position sugerido:** justo después de la sección de acceso/login del Player, antes de la explicación del listado de Aventuras.
- **Tags sugeridos:** `player`, `webapp`, `aventura`, `game-pin`, `menu`
- **¿Es página nueva o actualización?** **Actualización** de la sección existente sobre cómo el Player accede a sus Aventuras, añadiendo el nuevo camino desde el menú lateral. Si no hay página específica sobre "Añadir Aventura", crear una página nueva corta.

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

- El diálogo aparece también si el Player abre el menú desde cualquier pantalla (no solo desde el listado). Si se añade con éxito, la webapp lleva siempre al Player al listado de Aventuras aunque estuviera en otra vista.
- El Game PIN debe tener exactamente **9 dígitos numéricos**; el campo no permite introducir letras ni más dígitos.
- Si la webapp no puede localizar la Aventura con ese Game PIN, el mensaje de error es genérico "Game PIN no válido". Las razones internas (PIN inexistente, Aventura despublicada, sin permiso) no se distinguen al usuario para simplificar el mensaje.
- La funcionalidad de añadir Aventura desde el botón "+" de la barra de búsqueda se mantiene intacta.
