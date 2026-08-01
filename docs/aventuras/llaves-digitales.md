---
sidebar_position: 10
title: 🔑 Llaves Digitales
description: Bloquea Misiones y Retos con una Llave digital — solo los Players que la consigan podrán abrirlos. Modos visible con candado u oculto, y desbloqueo compartido con el Clan.
keywords: [llave digital, llave, bloqueo, misión, reto, objeto digital, llavero, clan, oculto, candado, gamifier, webapp, adventuriq]
---

# 🔑 Llaves Digitales

:::info 🛠️ Quién puede hacer esto
**Game Master** y **Game Designer** (bajo supervisión del GM).
:::

Una **Llave digital** es un tipo especial de Objeto Digital que sirve para **cerrar puertas**: puedes bloquear una Misión o un Reto con una Llave, y solo los Players que la hayan conseguido jugando podrán abrirlos.

## 🎯 Para qué sirve

Hasta ahora podías controlar el acceso a una Misión con fechas, con el estado jugable o con un código. Las Llaves añaden algo distinto: el acceso depende de **lo que el Player ha logrado dentro del juego**, no del reloj ni de un código que alguien le puede soplar.

Con esto puedes montar progresiones reales — la Misión final solo se abre a quien haya conseguido la llave escondida en la primera —, mapas que se van revelando conforme el grupo avanza, o secretos que solo encuentra quien explora de más.

## Cómo funciona

El mecanismo tiene tres piezas:

1. **Creas la Llave** como un Objeto Digital de tipo Llave, con sus condiciones de obtención (por ejemplo, "al superar el Reto 1").
2. **Bloqueas** con ella una Misión o un Reto.
3. El Player **consigue la llave** jugando y **abre** la Misión o el Reto.

Una misma Llave puede bloquear **varias** Misiones y Retos. Cada Misión o Reto, en cambio, admite **una sola** Llave.

## 📍 Paso 1 — Crear la Llave 🛠️

Las Llaves se crean como cualquier otro Objeto Digital (a nivel de Reto, de Misión o de Aventura, incluida la Ruleta de la Fortuna). La diferencia está en el campo **Tipo de Objeto**: elige **Llave**.

| Campo | Descripción |
|---|---|
| **Tipo de Objeto** | Selecciona **Llave**. A partir de ahí el Objeto puede usarse para bloquear Misiones y Retos. |
| **Imagen** | Prácticamente obligatoria: es lo que ve el Player a pantalla completa cuando se topa con la puerta cerrada. Una llave sin imagen arruina el efecto. |
| **Desbloqueo de Clan** | Si lo activas, cuando un Player abra la Misión o el Reto con esta llave, sus compañeros de Clan también tendrán acceso. Solo aplica en Aventuras **Por Equipos**. |

![Editor de un Objeto Digital de tipo Llave en el Gamifier, con el campo Tipo de Objeto y el toggle de Desbloqueo de Clan](/img/gamifier-llaves-editor-objeto.png)

Las **condiciones de obtención** funcionan exactamente igual que en cualquier Objeto Digital, con sus grupos Y/O. Puedes verlas en detalle en [Objetos Digitales de Misión](../misiones/objetos-digitales.md).

:::tip 🛠️ Deja la llave sin límite de stock
Si pones una cantidad máxima, los Players que lleguen tarde se quedan sin llave y sin poder entrar. Salvo que busques exactamente ese efecto, deja la Llave con stock ilimitado — el Desbloqueo de Clan es la válvula de escape si el reparto se te queda corto.
:::

## 📍 Paso 2 — Bloquear la Misión o el Reto 🛠️

En el editor de la Misión (o del Reto) busca el bloque **🔑 Acceso por Llave digital**, justo debajo de **🔒 Acceso por Código**.

Activa el toggle **"Acceso con Llave digital"** y pulsa el botón de la llave para abrir el diálogo **"Selecciona una Llave digital"**, donde encuentras todas las Llaves de la Aventura con su ID, imagen y título. Puedes filtrar por cualquiera de esos campos.

![Diálogo Selecciona una Llave digital, con la tabla de llaves disponibles filtrable por Id y Título](/img/gamifier-llaves-selector.png)

Una vez elegida, verás la imagen y el nombre de la Llave, un aviso si comparte acceso con el Clan y un enlace **Editar Llave** para saltar directamente a su configuración.

![Bloque Acceso por Llave digital en el editor de una Misión, con la llave seleccionada y los dos modos de bloqueo](/img/gamifier-llaves-editor-mision.png)

En el editor de Reto el bloque es idéntico:

![Bloque Acceso por Llave digital en el editor de un Reto](/img/gamifier-llaves-editor-reto.png)

### Los dos modos de bloqueo

| Modo | Qué ve el Player |
|---|---|
| **Visible con candado** (por defecto) | La Misión o el Reto **aparece** en el listado con un icono de candado. Al intentar entrar sin la llave, una pantalla a toda página le muestra qué llave necesita. Genera expectación: el Player sabe que hay algo ahí. |
| **Oculto hasta poseer la llave** | La Misión o el Reto **no aparece** en el listado hasta que el Player consigue la llave (o un compañero de Clan, si la llave comparte desbloqueo). Funciona como un mapa que se va revelando. |

:::tip 🛠️ Cuál elegir
**Visible con candado** para crear tensión narrativa — el Player ve la puerta y quiere abrirla. **Oculto** para sorpresas y contenido secreto: el Player no sabe siquiera que existe hasta que lo desbloquea.
:::

## Cómo se ve en el Gamifier

No hace falta entrar en cada editor para saber qué está bloqueado: los listados te lo marcan con un icono de llave 🔑.

### Misiones

En el listado de Misiones de la Aventura, la columna **Bloqueada** muestra la llave en las Misiones bloqueadas, y además un ojo tachado si están configuradas como ocultas.

![Listado de Misiones en el Gamifier — la segunda Misión muestra el icono de llave y el de oculta en la columna Bloqueada](/img/gamifier-llaves-badges-listado.png)

### Retos

Los Retos bloqueados muestran la llave junto al título, tanto en el listado de Retos **de la Aventura** —en la columna **Propiedades**— como en el listado de Retos **de cada Misión**.

![Listado de Retos de la Aventura — el Reto bloqueado muestra el icono de llave en la columna Propiedades](/img/gamifier-llaves-badge-retos-aventura.png)

![Listado de Retos dentro de una Misión — el segundo Reto muestra el icono de llave junto al título](/img/gamifier-llaves-badge-retos-mision.png)

## 👥 Desbloqueo de Clan

Con el **Desbloqueo de Clan** activado en la Llave, el primer Player del Clan que abra la puerta la abre **para todos sus compañeros**.

Conviene entender bien el matiz: lo que se comparte es la **apertura**, no la llave. Un compañero de Clan ve aparecer la Misión oculta en cuanto alguien del equipo recoge la llave, pero **no puede entrar hasta que ese Player la abra** de forma explícita.

:::warning Solo en Aventuras Por Equipos
En Aventuras en modo Individual el Desbloqueo de Clan **se ignora**, aunque lo dejes activado en la Llave. Además, quien se une al Clan más tarde no hereda las aperturas anteriores — sí ve, en cambio, las Misiones ocultas que el Clan ya haya revelado.
:::

## 🎮 Así lo verá el Player

### La puerta cerrada

Una Misión o un Reto en modo **visible con candado** aparece en el listado con un icono de llave dorada y la etiqueta **"Con llave"**.

![Listado de Retos en la Webapp — el segundo Reto muestra el icono de llave y la etiqueta Con llave](/img/webapp-llaves-card-candado.png)

Al tocarlo sin tener la llave, el Player se encuentra la pantalla de bloqueo a toda página: la imagen de la llave que necesita, su nombre y el mensaje **"Necesitas esta llave digital para entrar"**. Aquí es donde se nota si has cuidado la imagen de la Llave.

![Pantalla de bloqueo en la Webapp — imagen de la llave, candado y el mensaje Necesitas esta llave digital para entrar](/img/webapp-llaves-bloqueo.png)

### Conseguir la llave

La Llave se entrega como cualquier otro premio, pero se distingue: lleva el distintivo **"Llave digital"** sobre la imagen y un icono de llave junto al título, para que el Player entienda que eso no es un objeto más.

![Carrusel de premios mostrando una Llave obtenida, con el distintivo Llave digital sobre la imagen](/img/webapp-llaves-premio.png)

### Lo oculto aparece

Este es el efecto del modo **oculto**. Antes de conseguir la llave, el Player ve el listado con un hueco — aquí faltan la Misión 2 y su número:

![Listado de Misiones antes de conseguir la llave — la Misión 2 no aparece](/img/webapp-llaves-listado-oculta.png)

En cuanto consigue la llave, la Misión aparece en el listado con su icono de llave:

![Listado de Misiones después de conseguir la llave — la Misión 2 ya aparece con su icono de llave](/img/webapp-llaves-listado-revelada.png)

### Abrir

Con la llave en el bolsillo, al tocar la Misión el Player ve la pantalla de apertura: **"¡Tienes la llave! Ábrela para entrar"** y el botón **Abrir**. Si la Llave comparte desbloqueo con el Clan, se le avisa aquí.

Abrir es un **acto explícito**: hasta que el Player pulsa el botón no entra, y es en ese momento cuando se comparte el acceso con el Clan.

![Pantalla de apertura en la Webapp — Tienes la llave, ábrela para entrar, con el botón Abrir](/img/webapp-llaves-abrir.png)

### El Llavero

Las llaves no se guardan en el Baúl, sino en el **Llavero**, una pastilla de la [Bitácora](./bitacora.md) que solo aparece en Aventuras que usan llaves.

Cada llave muestra su imagen, cuándo la consiguió, si comparte acceso con el Clan y —lo más útil— la lista **"Abre:"** con todas las puertas que esa llave abre y el estado de cada una.

![Llavero en la Bitácora — una llave con su fecha, distintivo de Clan y la lista de qué abre](/img/webapp-llaves-llavero.png)

## Cosas que conviene saber antes de montarlo

:::warning Léelo antes de diseñar la progresión
- **Las llaves no funcionan en Modo Arena.** En sesiones Live se ignoran; no combines ambas cosas.
- **Cuidado con las cadenas imposibles.** Las condiciones de finalización del tipo "superar todos los Retos" cuentan también los Retos ocultos. Asegúrate de que toda llave es alcanzable — el error clásico es esconder una llave dentro de la propia Misión que abre.
- **Si borras una Llave**, las Misiones y Retos que bloqueaba quedan automáticamente desbloqueados. Nunca se queda una puerta cerrada sin llave existente.
- **Al clonar una Aventura** los bloqueos se clonan apuntando a las llaves clonadas. Excepción: si la llave era un Objeto Digital a nivel de Aventura, el bloqueo desaparece en el clon.
- **El bloqueo se valida en el servidor**: el Player no puede saltárselo manipulando la aplicación.
- Los invitados de [Jugar sin registro](./jugar-sin-registro.md) funcionan igual que los Players registrados.
:::

:::tip 🛠️ Cómo probarlo sin crear una cuenta de Player
Entra tú mismo en la **Webapp**: como Game Master o Game Designer verás la Aventura **exactamente igual que un Player**, con las Misiones y Retos ocultos escondidos hasta que consigas la llave. En el Gamifier, en cambio, sigues viendo todo el contenido para poder gestionarlo.
:::

## 📚 Continúa aprendiendo

- Crear y configurar Objetos Digitales: [Objetos Digitales de Misión](../misiones/objetos-digitales.md).
- Otros controles de acceso a una Misión: [Bloqueos y Visibilidad](../misiones/bloqueos-visibilidad.md).
- Equipos y Clanes: [Equipos y Clanes](./equipos-clanes.md).
- Dónde consulta el Player sus objetos y llaves: [Bitácora](./bitacora.md).
