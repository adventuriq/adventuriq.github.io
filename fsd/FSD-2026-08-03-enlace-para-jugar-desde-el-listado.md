---
feature_name: Enlace para jugar desde el listado y nueva dirección play.adventuriq.com
date: 2026-08-03
components: [API] [GAMIFIER]
docusaurus_path: docs/aventuras/acceder-a-una-aventura.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Enlace para jugar desde el listado de Aventuras (y nueva dirección `play.adventuriq.com`)
- **Descripción:** El listado de Aventuras del Gamifier muestra ahora el enlace directo para jugar de cada Aventura, con un botón para copiarlo al portapapeles, sin tener que entrar en el detalle. Además, los enlaces para jugar estrenan una dirección más corta y fácil de recordar para los Players: `play.adventuriq.com`.
- **Componentes afectados:** Gamifier (listado de Aventuras), API (dato auxiliar del listado)
- **Fecha de despliegue:** 2026-08-03

:::warning Aviso para Cowork — qué NO documentar de este despliegue
En el mismo despliegue se ha añadido una herramienta interna llamada **Asignar Propietario**, visible **solo para el rol Admin** del equipo AdventuriQ. Según DOCS_STRUCTURE.md el rol Admin **no se documenta en el manual**, así que esa funcionalidad **queda fuera del manual por completo**: no crear página, no mencionarla, y no incluirla en capturas.

Al tomar capturas del listado de Aventuras, hacerlo con una cuenta **Game Master** (no Admin). Con cuenta Admin aparecen la línea "Propietario" y un botón extra que no deben salir en el manual.
:::

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Ver el enlace para jugar de cada Aventura directamente en el listado, junto a los datos de la Aventura.
- Copiar ese enlace al portapapeles con un solo clic (aparece la confirmación "¡Enlace copiado!") y pegarlo en un email, WhatsApp o donde quiera compartirlo con sus Players.
- Abrir el enlace en una pestaña nueva para comprobar cómo lo verá el Player.
- El enlace del detalle de la Aventura (sección "Acceso a la Aventura", con su código QR) sigue existiendo y funcionando igual: lo del listado es un atajo, no un reemplazo.

### Desde el punto de vista del Player (Webapp)

- Los enlaces para jugar apuntan ahora a `play.adventuriq.com`, más corto y fácil de dictar o recordar que la dirección anterior.
- **Los enlaces antiguos siguen funcionando**: quien tenga guardado un enlace o un QR con la dirección anterior puede seguir usándolo sin problemas.
- El comportamiento al abrir el enlace no cambia en absoluto: la Aventura se vincula automáticamente y se abre.

## 3. PREREQUISITOS DEL USUARIO

- Tener al menos una Aventura creada. El enlace se genera solo, a partir del GamePIN que la plataforma asigna a cada Aventura al crearla.
- No hay nada que configurar ni activar: el enlace aparece en el listado de todas las Aventuras.
- Para que el Player pueda jugar, la Aventura debe estar publicada (si está en borrador, el enlace no le sirve todavía).

## 4. FLUJOS PASO A PASO

### Flujo Gamifier

1. Iniciar sesión en el Gamifier y quedarse en la pantalla de inicio, que es el **listado de Aventuras**.
2. Localizar la Aventura que se quiere compartir (se puede usar el buscador de la parte superior).
3. En la columna **AVENTURA**, bajo los datos de la Aventura, aparece el enlace para jugar con el icono de eslabón: `https://play.adventuriq.com/#/{GamePIN}`.
4. Pulsar el botón con el icono de copiar que hay a la derecha del enlace.
5. Aparece el mensaje **"¡Enlace copiado!"** durante unos segundos: el enlace ya está en el portapapeles y se puede pegar donde se quiera.
6. Alternativa: pulsar sobre el propio enlace lo abre en una pestaña nueva, para comprobarlo.

### Flujo Webapp

1. El Player recibe el enlace y lo pulsa.
2. Se abre la Webapp en `play.adventuriq.com` directamente en la pantalla de la Aventura.
3. La Aventura queda vinculada a su cuenta automáticamente, igual que antes.

## 5. PANTALLAS PARA CAPTURAR

Capturar con una cuenta **Game Master** (ver el aviso del punto 1).

- [GAMIFIER] Listado de Aventuras, con el enlace para jugar visible en una fila → Nombre sugerido: `aventuras/acceder-listado-enlace-jugar.png`
- [GAMIFIER] Detalle de una fila del listado tras pulsar el botón de copiar, con el mensaje "¡Enlace copiado!" → Nombre sugerido: `aventuras/acceder-listado-enlace-copiado.png`

Las capturas existentes de la página de destino que muestren la dirección antigua conviene rehacerlas para que se lea la nueva.

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `acceder-a-una-aventura.md`
- **sidebar_position sugerido:** 4 (el que ya tiene la página; no cambiar)
- **Tags sugeridos:** player, gamepin, deep-link, enlace, compartir, aventura
- **¿Es página nueva o actualización?** **Actualización**

### Cambios concretos en esa página

1. En la sección **"🔗 Vincular con deep link"**, la línea *"Formato del enlace"* (línea 30) dice `https://webapp.adventuriq.com/#/{GamePIN}` → sustituir por `https://play.adventuriq.com/#/{GamePIN}`.
2. Añadir en esa misma sección una nota indicando que los enlaces con la dirección anterior (`webapp.adventuriq.com`) siguen funcionando, para tranquilizar a quien tenga carteles o QR ya impresos.
3. En el bloque `:::tip 👑 Para el Game Master`, añadir de dónde sacar el enlace: **desde el listado de Aventuras** (con el botón de copiar) o desde el detalle de la Aventura, sección "Acceso a la Aventura", donde además está el QR.

### Otras páginas a revisar

- `docs/aventuras/game-pin-bloqueos.md` y `docs/aventuras/publicar-aventura.md`: revisar si mencionan la dirección de juego y actualizarla.
- Cualquier página con capturas donde se lea la URL antigua en la barra del navegador.
- Fuera de `docs/`, el enlace "Webapp" del menú de navegación (`docusaurus.config.ts`) sigue apuntando a la dirección antigua; conviene apuntarlo a `https://play.adventuriq.com`. **Esto lo decide el humano**, no es contenido del manual.

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

- El enlace se construye a partir del **GamePIN** de la Aventura, que no cambia nunca una vez creada. Cambiar de dirección no invalida ningún GamePIN.
- Ambas direcciones (`play.adventuriq.com` y la anterior) sirven exactamente la misma aplicación, así que conviven sin problema. No hay fecha de retirada prevista para la antigua.
- El botón de copiar usa el portapapeles del navegador: requiere una conexión segura (https), que es siempre el caso en el Gamifier. En navegadores muy antiguos podría no estar disponible; en ese caso el enlace se puede seleccionar y copiar a mano.
- El enlace solo aparece en las Aventuras que tienen GamePIN asignado (todas las creadas con la plataforma actual).
