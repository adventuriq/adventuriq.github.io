---
sidebar_position: 3
title: 📢 Publicar una Aventura
description: Cómo publicar una Aventura en AdventuriQ para que los Players puedan jugarla — ciclo de vida Draft → Published, checklist previo, qué ocurre al publicar y cómo despublicar.
keywords: [aventura, publicar, published, draft, estado, licencia, caducidad, gamepin, gamifier, adventuriq]
---

# 📢 Publicar una Aventura

:::info 👑 Quién puede hacer esto
Solo el **Game Master** puede cambiar el estado de una Aventura entre Draft y Published.
:::
<!-- REVISAR: confirmar si un Game Designer asignado también ve el campo Estado (FSD 2026-10-30 cambiar-estado-aventura-desde-listado) -->

Publicar una Aventura es el paso que la hace accesible a los Players. Hasta ese momento, la Aventura permanece en **Draft** y solo es visible para el Game Master y los Game Designers asignados. El ciclo habitual es:

1. **Crear** la Aventura (ver [Crear una Aventura](crear-aventura.md)).
2. **Configurar** su contenido: Misiones, Retos, recompensas, mapas, etc.
3. **Publicar** cuando todo esté listo — es el paso que tratamos en esta página.

## ✅ Antes de publicar — Checklist

Antes de cambiar el estado a Published, asegúrate de haber completado estos puntos:

| Elemento | Dónde se configura | Por qué es importante |
|---|---|---|
| **Fechas (Empieza / Acaba)** | Editor de Aventura → Configuración general | Delimitan la ventana de juego. Los Players solo podrán acceder dentro de este intervalo. |
| **Al menos una Misión con Retos** | Editor de Aventura → Misiones | Sin Misiones ni Retos, los Players entrarán a una Aventura vacía. |
| **Título y descripción** | Editor de Aventura → Contenido | Es lo primero que ven los Players al acceder. |
| **Imagen de portada** | Editor de Aventura → Imágenes | Aparece en la pantalla de inicio de la Aventura en la Webapp. |
| **Tokens suficientes** | Panel de resumen / [Tienda de Tokens](/tokens) | Cada Player consume 1 Token al iniciar la Aventura. Si no hay Tokens, los Players no podrán jugar. |
| **GamePIN compartido** | Editor de Aventura → Acceso a la Aventura | Los Players necesitan el GamePIN (o el enlace directo / QR) para unirse. |

:::warning El contenido no se valida
Al publicar, la plataforma comprueba la **Licencia**, los **Tokens** y el **espacio** (ver [¿Por qué no se ha podido publicar?](#-por-qué-no-se-ha-podido-publicar)), pero **no comprueba** si tu Aventura tiene Misiones, Retos o contenido. Puedes publicar una Aventura vacía sin recibir ningún aviso. Repasa el checklist de arriba antes de cambiar el estado.
:::

:::tip Prueba antes de publicar
Mientras la Aventura está en Draft, puedes jugarla como Game Master o Game Designer sin consumir Tokens. Aprovecha para recorrer toda la experiencia y verificar que los Retos, mapas y recompensas funcionan como esperas.
:::

## 🚀 Cómo publicar una Aventura

Puedes cambiar el estado de una Aventura desde **dos sitios**: directamente en el **listado de Aventuras** o desde el **editor** de la Aventura. En los dos casos el cambio **se guarda al momento**, sin pulsar «Guardar aventura», y una ventana te confirma el resultado.

### Desde el listado de Aventuras

1. En el menú lateral del Gamifier, entra en **Aventuras**.
2. Localiza la Aventura. En la columna **Estado** verás un desplegable con el estado actual.
3. Elige **PUBLISHED**. Mientras se guarda aparece un pequeño indicador de carga junto al desplegable.

![Fila del listado de Aventuras con el desplegable de la columna Estado](/img/gamifier-listado-estado-desplegable.png)

4. Si la Aventura cumple las condiciones, aparece la ventana **«Estado actualizado»**: *La Aventura «[título]» está ahora en estado PUBLISHED.* Pulsa **OK**.

![Ventana Estado actualizado sobre el listado de Aventuras tras publicar una Aventura](/img/gamifier-listado-estado-publicada-ok.png)

Si no las cumple, aparece la ventana **«No se ha podido publicar la Aventura»** con los motivos y el desplegable vuelve a **DRAFT** (ver [¿Por qué no se ha podido publicar?](#-por-qué-no-se-ha-podido-publicar)).

### Desde el editor de la Aventura

1. Entra en **Aventuras** y haz clic en la Aventura para abrir el editor.
2. Localiza el campo **Estado** (justo debajo de las fechas) y elige **published**.

![Editor de la Aventura con el campo Estado en "draft" — la Aventura aún no es visible para los Players](/img/gamifier-estado-draft.png)

3. **No hace falta pulsar «Guardar aventura»**: la Aventura se guarda sola en ese momento y aparece la ventana **«Estado actualizado»**: *La Aventura está ahora en estado PUBLISHED. También se han guardado el resto de cambios del formulario.*

![Ventana Estado actualizado en el editor de la Aventura, indicando que también se han guardado el resto de cambios del formulario](/img/gamifier-editor-estado-autoguardado.png)

:::warning Al cambiar el estado se guarda todo el formulario
El guardado automático guarda **la Aventura entera**: si tenías otros cambios a medio hacer en el editor (fechas, textos…), también quedan guardados. Y si la publicación se bloquea, el estado vuelve a **draft**, pero **el resto de cambios sí se han guardado**.
:::

:::caution No hay confirmación previa
En cuanto eliges **PUBLISHED** (o **published** en el editor), la Aventura se publica y queda visible para los Players de inmediato (si las fechas lo permiten). Repasa el checklist de arriba antes de cambiar el estado.
:::

## ❓ ¿Por qué no se ha podido publicar?

Para pasar de **Draft** a **Published**, la Aventura tiene que cumplir estas condiciones. Si falla alguna, la ventana **«No se ha podido publicar la Aventura»** te muestra **todas** las que no se cumplen (no solo la primera) y la Aventura se queda en Draft:

| Condición | Mensaje si no se cumple | Cómo solucionarlo |
|---|---|---|
| Tener una Licencia asignada | «No tiene ninguna Licencia asignada.» | Asigna una Licencia en el apartado **Licencia de Aventura** del editor. |
| Que la Licencia no haya caducado | «Su Licencia ha caducado.» | Asigna una Licencia nueva (ver [Tokens y Licencias](/tokens)). |
| Que su propietario tenga Tokens disponibles (no aplica con Plan Luna o Plan Mundo) | «Su propietario no tiene Tokens disponibles.» | Compra Tokens en la [Tienda](/tokens). |
| No ocupar más espacio del que permite su Licencia | «Ocupa más espacio del que permite su Licencia.» | Borra archivos que no uses desde la [Biblioteca de Medios](../gamifier/biblioteca-de-medios.md). |

<!-- 📸 CAPTURA PENDIENTE: /img/gamifier-listado-estado-publicacion-bloqueada.png — Ventana «No se ha podido publicar la Aventura» con la lista de motivos (requiere una Aventura de prueba que no cumpla alguna condición) -->

:::note Licencias recién asignadas
Una Aventura con una Licencia recién asignada, que todavía no había empezado a contar, a veces no se dejaba publicar como si la Licencia estuviera caducada. Ya está corregido: se publica sin problemas y el periodo de la Licencia empieza a contar en ese momento.
:::

## 📌 Qué ocurre al publicar

Cuando cambias el estado a **published**, se producen varios efectos:

### La caducidad de la licencia arranca

Al publicar por primera vez, la licencia asignada a la Aventura comienza su periodo de validez. Lo mismo ocurre si asignas una licencia nueva (por ejemplo, al renovar) a una Aventura que **ya está publicada**: empieza a contar en ese momento. Puedes ver la fecha de caducidad en el apartado **Licencia de Aventura** del editor, donde aparece el campo **Caduca en** con la fecha exacta de expiración.

| Tipo de licencia | Duración desde la publicación |
|---|---|
| Licencia ANUAL | 12 meses |
| Licencia MENSUAL | 30 días |

Esto aplica a las cuatro variantes de licencia (individual y equipo). Consulta los detalles y precios en [Tokens y Licencias](/tokens).

:::danger La caducidad es irreversible
Una vez que publicas la Aventura, el contador de la licencia comienza y **no se detiene**. Aunque vuelvas a poner la Aventura en Draft, la fecha de caducidad sigue corriendo. Planifica bien el momento de la primera publicación.
:::

### El GamePIN se activa

El GamePIN de 9 dígitos (generado al crear la Aventura) pasa a estar operativo. Los Players pueden introducirlo en la Webapp, escanear el código QR o usar el enlace directo para unirse a la Aventura.

### Los Players pueden acceder (dentro de la ventana de fechas)

Si la fecha actual está dentro del intervalo configurado en **Empieza** y **Acaba**, los Players podrán acceder de inmediato. Si la fecha de inicio aún no ha llegado, la Aventura aparecerá como publicada pero los Players no podrán jugar hasta que se alcance esa fecha.

### Se consumen Tokens

Cada Player que pulse **Adelante** en la pantalla de inicio de la Aventura consumirá **1 Token** de tu saldo, también si entra por código de acceso, QR o Token de acceso único. Asegúrate de tener suficientes Tokens antes de compartir el GamePIN. Si tu Aventura está cubierta por un **Plan Luna o Plan Mundo**, no consume Tokens y el bloqueo por falta de Tokens no te afecta.

## 🔄 Despublicar una Aventura (volver a Draft)

Puedes devolver una Aventura publicada al estado **Draft** en cualquier momento, desde el **listado de Aventuras** (columna **Estado** → **DRAFT**) o desde el **editor** (campo **Estado** → **draft**). Volver a Draft no tiene condiciones y, como al publicar, se guarda al momento y aparece la ventana «Estado actualizado». Al volver a Draft:

- Los **Players que ya se unieron** conservan su progreso, pero no podrán continuar jugando hasta que vuelvas a publicar.
- Los **nuevos Players** no podrán unirse con el GamePIN.
- Solo el Game Master y los Game Designers asignados podrán acceder a la Aventura.
- Los Players que estén jugando en ese momento **no reciben ningún aviso** — simplemente dejarán de poder avanzar.

:::tip ¿Cuándo despublicar?
Volver a Draft es útil si detectas un error en los Retos o necesitas hacer ajustes sin que los Players se vean afectados.
:::

:::warning La caducidad no se pausa
Recuerda que al volver a Draft la caducidad de la licencia **sigue corriendo**. No uses Draft como forma de "pausar" la Aventura a largo plazo.
:::

## 📅 Fechas y ventana de juego

Las fechas **Empieza** y **Acaba** trabajan junto con el estado para determinar cuándo es jugable una Aventura:

| Estado | Dentro de fechas | Fuera de fechas |
|---|---|---|
| **Published** | ✅ Los Players pueden jugar | ❌ Los Players no pueden acceder |
| **Draft** | ❌ Solo Game Master y Game Designers | ❌ Solo Game Master y Game Designers |

Para que un Player pueda jugar, se deben cumplir **ambas condiciones**: que la Aventura esté en Published **y** que la fecha actual esté dentro del intervalo Empieza–Acaba.

Si un Player accede fuera de la ventana de fechas, verá un mensaje según el caso:

- **Antes de la fecha de inicio** → el Player ve el mensaje **"Próximamente"**.
- **Después de la fecha de fin** → el Player ve el mensaje **"Finalizada"**.

:::tip
Las fechas se pueden modificar en cualquier momento desde el editor, tanto en Draft como en Published. Si necesitas ampliar el periodo de juego, simplemente ajusta la fecha de **Acaba**.
:::

## 🔜 Siguientes pasos

Con la Aventura publicada, ya puedes:

1. **Compartir el GamePIN** con tus Players — envíales el código, el enlace directo o el QR desde la sección de acceso a la Aventura en el editor.
2. **Monitorizar la participación** en tiempo real desde los indicadores del editor y la Clasificación.
3. **Consultar el Game Board** para analizar los resultados por Reto.
