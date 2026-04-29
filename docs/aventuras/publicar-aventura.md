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

:::warning No hay validación automática
La plataforma **no comprueba** si tu Aventura tiene Misiones, Retos o contenido configurado antes de publicarla. Puedes publicar una Aventura vacía sin recibir ningún aviso. Repasa el checklist de arriba antes de cambiar el estado.
:::

:::tip Prueba antes de publicar
Mientras la Aventura está en Draft, puedes jugarla como Game Master o Game Designer sin consumir Tokens. Aprovecha para recorrer toda la experiencia y verificar que los Retos, mapas y recompensas funcionan como esperas.
:::

## 🚀 Cómo publicar una Aventura

El estado de la Aventura se controla desde el campo **Estado** en la sección de configuración general del editor.

### Paso a paso

1. En el menú lateral del Gamifier, entra en **Aventuras** y haz clic en la Aventura que quieras publicar.
2. En el editor, localiza el campo **Estado** (justo debajo de las fechas).
3. Haz clic en el desplegable. Verás dos opciones: **draft** y **published**.
4. Selecciona **published**.

![Editor de la Aventura con el campo Estado en "draft" — la Aventura aún no es visible para los Players](/img/gamifier-estado-draft.png)

Al seleccionar **published**, el estado se actualiza en el formulario pero **aún no se ha guardado**. Para que el cambio sea efectivo, haz clic en el botón **Guardar aventura**.

![Editor de la Aventura con el campo Estado en "published" — la Aventura ya es accesible para los Players](/img/gamifier-estado-published.png)

:::warning Recuerda guardar
No hay un diálogo de confirmación al publicar. Una vez que seleccionas **published** y pulsas **Guardar aventura**, la Aventura queda visible para los Players de inmediato (si las fechas lo permiten). Asegúrate de haber completado el checklist de arriba antes de guardar.
:::

## 📌 Qué ocurre al publicar

Cuando cambias el estado a **published**, se producen varios efectos:

### La caducidad de la licencia arranca

Al publicar por primera vez, la licencia asignada a la Aventura comienza su periodo de validez. Puedes ver la fecha de caducidad en el apartado **Licencia de Aventura** del editor, donde aparece el campo **Caduca en** con la fecha exacta de expiración.

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

Cada Player que pulse **Adelante** en la pantalla de inicio de la Aventura consumirá **1 Token** de tu saldo. Asegúrate de tener suficientes Tokens antes de compartir el GamePIN.

## 🔄 Despublicar una Aventura (volver a Draft)

Puedes devolver una Aventura publicada al estado **Draft** en cualquier momento siguiendo el mismo proceso:

1. Abre el editor de la Aventura.
2. En el campo **Estado**, selecciona **draft**.

El cambio requiere pulsar **Guardar aventura** para hacerse efectivo. Al volver a Draft:

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
