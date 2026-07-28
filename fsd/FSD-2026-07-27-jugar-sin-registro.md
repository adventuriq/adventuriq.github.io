---
feature_name: Jugar sin registro (nickname)
date: 2026-07-27
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/aventuras/jugar-sin-registro.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Jugar sin registro (nickname)
- **Descripción:** Los players pueden entrar a jugar una Aventura desde su enlace directo (Game PIN) tecleando solo un nickname, sin crear cuenta ni dar su email.
- **Componentes afectados:** API v4.55.0, Gamifier v4.59.0, Webapp v2.44.0
- **Fecha de despliegue:** 2026-07-27

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Activar la opción **"Jugar sin registro (nickname)"** en las Opciones de la Aventura, para que los players entren solo con un nickname.
- Compartir el enlace directo o el QR del Game PIN sabiendo que el player entra a jugar en segundos, sin fricción de registro.
- Usarlo también en partidas del modo Arena: los players escanean el QR del visor, teclean su nickname y aparecen en el lobby (estilo Kahoot).
- Ver a los players invitados en el Gameboard, rankings y listados exactamente igual que a los registrados (se identifican por su nickname).

### Desde el punto de vista del Player (Webapp)

- Abrir el enlace directo de una Aventura y entrar tecleando solo un nickname (único dentro de esa Aventura), sin email ni contraseña.
- Si vuelve a abrir el enlace desde el mismo dispositivo, recupera su sesión y su progreso automáticamente.
- Si perdió la sesión (por ejemplo cerró sesión), puede recuperar su cuenta tecleando el mismo nickname desde el mismo dispositivo.
- Desde la misma pantalla puede optar por iniciar sesión con su cuenta de siempre o crear una cuenta completa.

## 3. PREREQUISITOS DEL USUARIO

- Tener una Aventura creada y publicada, con su Game PIN (todas lo tienen automáticamente).
- Activar el interruptor "Jugar sin registro (nickname)" en las Opciones de la Aventura.
- El player solo necesita el enlace directo (o QR) de la Aventura: `https://webapp.adventuriq.com/#/{gamepin}`.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier

1. Entrar en el Gamifier y abrir la Aventura (menú Aventuras → clic en la Aventura).
2. Bajar hasta la sección **Opciones de la Aventura**.
3. Activar el interruptor **"Jugar sin registro (nickname)"** (icono de persona con "+").
4. Pulsar **Guardar Aventura**.
5. Resultado: cualquier player que abra el enlace directo de la Aventura podrá entrar solo con un nickname.

### Flujo Webapp (Player)

1. Abrir el enlace directo de la Aventura (o escanear su QR): `https://webapp.adventuriq.com/#/{gamepin}`.
2. Aparece la pantalla de la Aventura (imagen y título) con un único campo: **Nickname**.
3. Teclear un nickname y pulsar **Jugar**.
   - Si el nickname ya lo usa otro player de esa Aventura, se muestra un aviso y se pide elegir otro.
4. Resultado: el player entra directamente a la Aventura y puede jugar con normalidad (retos, puntos, ranking, premios).
5. Si vuelve a abrir el enlace desde el mismo dispositivo, entra directo con su progreso; con el mismo nickname y el mismo dispositivo también recupera su cuenta aunque hubiera cerrado sesión.

### Flujo modo Arena (si la Aventura está en modo Arena)

1. El moderador proyecta el visor de Arena con el QR y el Game PIN.
2. Cada player escanea el QR con su móvil, teclea su nickname y pulsa **Jugar**.
3. El nickname aparece al momento en el lobby del visor; la partida transcurre igual que con players registrados.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Sección Opciones de la Aventura con el switch "Jugar sin registro (nickname)" activado → Nombre sugerido: aventuras/jugar-sin-registro-switch.png
- [GAMIFIER] Tooltip del switch visible (hover) → Nombre: aventuras/jugar-sin-registro-tooltip.png
- [WEBAPP] Pantalla de join con la tarjeta de la Aventura y el campo Nickname → Nombre: aventuras/webapp-jugar-sin-registro-join.png
- [WEBAPP] Mensaje de "nickname ya en uso" → Nombre: aventuras/webapp-jugar-sin-registro-nickname-en-uso.png
- [WEBAPP] Player invitado dentro de la Aventura tras el join → Nombre: aventuras/webapp-jugar-sin-registro-dentro.png
- [WEBAPP] Lobby de Arena con un nickname de invitado visible → Nombre: modo-arena/arena-lobby-invitado.png

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `jugar-sin-registro.md`
- **sidebar_position sugerido:** junto a las demás opciones de acceso de la Aventura (código de acceso, tokens de acceso)
- **Tags sugeridos:** aventuras, acceso, game-pin, nickname, arena
- **¿Es página nueva o actualización?** Nueva (y añadir una mención breve en la página del modo Arena y en la de acceso directo por Game PIN)

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

- El nickname es único **dentro de cada Aventura** (sin distinguir mayúsculas/minúsculas): dos Aventuras distintas pueden tener players con el mismo nickname.
- La recuperación automática de la cuenta funciona solo desde **el mismo navegador/dispositivo** con el que se entró la primera vez. Desde otro dispositivo, el mismo nickname aparecerá como "en uso" y habrá que elegir otro (el progreso no se transfiere entre dispositivos).
- Si el player borra los datos de navegación, puede perder el acceso a su cuenta de invitado y tendrá que empezar con otro nickname.
- Los players invitados no tienen email real: no reciben correos de la plataforma (p. ej. el correo con su respuesta de un reto de Respuesta Libre no se envía).
- La opción es compatible con "Bloqueo por código" y "Tokens de acceso": si están activos, el invitado deberá superarlos igual que un player registrado.
- Las Aventuras existentes NO cambian: la opción nace desactivada en todas y cada Game Designer decide activarla.
