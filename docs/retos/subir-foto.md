---
sidebar_position: 4
title: 📸 Subir Foto
description: Reto donde el Player toma o sube una foto o vídeo que se comparte automáticamente en la Galería de la Aventura. Opcionalmente puede publicarla en sus redes sociales y validar el enlace.
keywords: [reto, subir-foto, compartir-foto, galería, imagen, vídeo, redes sociales, instagram, hashtags, sorteo, gamifier, webapp, adventuriq]
---

# 📸 Subir Foto

<img src="/img/retos-iconos/reto-icon-subir-foto.png"
     alt="Icono del Reto Subir Foto"
     className="reto-icon" />

**Subir Foto** es un Reto visual donde el Player toma o selecciona una foto (o vídeo) desde su dispositivo. La imagen se comparte automáticamente en la Galería de la Aventura, visible para todos los participantes. El proceso está guiado en 3 fases para facilitar la experiencia en cualquier dispositivo.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración del Reto en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

Casos de uso típicos: actividades de team-building donde los equipos documentan sus logros con fotos, eventos presenciales donde se quiere crear un álbum colectivo, retos creativos tipo "hazte un selfie con…" y dinámicas de grupo que involucran disfraces, construcciones o pruebas físicas.

## Cómo funciona

El Game Master crea un Reto de tipo Subir Foto dentro de una Misión. La configuración es mínima: solo define los puntos que recibe el Player al subir la foto. No hay validación automática del contenido — cualquier imagen o vídeo que suba el Player se acepta.

Cuando el Player abre el Reto, ve un proceso guiado en 3 fases: seleccionar o tomar la foto/vídeo, previsualizarla y confirmar el envío. La imagen se sube al servidor y aparece automáticamente en la Galería de fotos de la Aventura, accesible por todos los Players.

Opcionalmente puedes añadir un paso más: pedir al Player que publique esa foto en sus redes sociales y valide el enlace de su publicación. Lo tienes en [Compartir en Redes Sociales](#compartir-en-redes-sociales).

## Configuración del Reto en el Gamifier 👑

### Acceso al formulario

Para crear un Reto de Subir Foto, el Game Master abre una Aventura, entra en una Misión y pulsa **+ Nuevo Reto**. En el selector de tipos, selecciona la tarjeta **Subir Foto** (aparece como "Compartir Foto" en el Gamifier). Se abre el formulario de edición.

### Campos del formulario

Como cualquier Reto, Subir Foto comparte los campos comunes (cabecera, título, descripción, mapa, recompensas). La sección **Mecánica** específica de este tipo es la más sencilla de todos los Retos:

| Campo | Descripción |
|---|---|
| **Puntos si hace la foto** | Puntos que recibe el Player al completar el envío de la foto o vídeo. |

![Formulario de edición de un Reto Subir Foto — campo de puntos por hacer la foto](/img/gamifier-reto-subir-foto-edicion.png)

No hay más campos de mecánica. La simplicidad es intencionada: el valor de este Reto está en la acción del Player (tomar y compartir la foto), no en una evaluación.

:::tip 👑 Para el Game Master
Combina este Reto con una **descripción rica en HTML** en la cabecera para dar instrucciones creativas al Player: "Hazte un selfie con tu equipo haciendo una pirámide humana", "Fotografía el código QR que encontrarás en la sala norte", etc. La mecánica es simple pero el enunciado marca la diferencia.
:::

## Experiencia del Player 🎮

### Pantalla del Reto

Cuando el Player abre el Reto desde la Misión, ve un área de previsualización de imagen (inicialmente con un icono de placeholder), una **barra de progreso de 3 fases** numeradas (1, 2, 3) y el botón **"Seleccionar Foto/Vídeo"**.

![Vista móvil del Reto Subir Foto — placeholder de imagen, barra de 3 fases y botón Seleccionar Foto/Vídeo](/img/webapp-reto-subir-foto-mobile.png)

### Flujo de juego

El proceso es guiado en **3 fases**:

**Fase 1 — Seleccionar**: el Player pulsa "Seleccionar Foto/Vídeo" y el dispositivo ofrece las opciones disponibles según la plataforma: acceder a la fototeca, hacer una foto con la cámara, grabar un vídeo o seleccionar un archivo.

**Fase 2 — Previsualizar**: la imagen o vídeo seleccionado aparece en el área de previsualización para que el Player confirme que es la correcta.

**Fase 3 — Enviar**: el Player confirma el envío. La imagen se sube al servidor, se asignan los puntos y la foto aparece automáticamente en la **Galería de la Aventura**, visible para todos los participantes.

## Vista en la Galería

Las fotos enviadas por los Players a través de este tipo de Reto se agregan a la **Galería de fotos de la Aventura**, un espacio compartido donde todos los participantes pueden ver las imágenes del grupo. La Galería es accesible desde la Webapp.

## 📣 Compartir en Redes Sociales {#compartir-en-redes-sociales}

Además de enviar la foto a la Galería, el Reto Subir Foto puede pedir al Player que **publique esa misma foto en sus redes sociales** (Instagram, X o Facebook) con un texto y unos hashtags que tú preparas, y que después **valide su publicación pegando el enlace**. Tú ves todos los enlaces y decides cuáles das por buenos.

Es el paso que convierte una Aventura en una campaña: sorteos con requisito de publicación, dinámicas de marca en eventos o gincanas donde la difusión forma parte del juego.

:::note Es un paso opcional
Los Retos Subir Foto que ya tengas creados **no cambian**. El paso de redes sociales solo aparece si activas el toggle en el Reto.
:::

### Configuración en el Gamifier 🛠️

Entra en la Aventura → Misión → el Reto **Subir Foto** (o crea uno nuevo) y activa el toggle **"Compartir en Redes Sociales"** dentro de la sección Mecánica.

| Campo | Descripción |
|---|---|
| **Compartir en Redes Sociales** | Activa el paso extra de publicación. Al activarlo se crea automáticamente la traducción del idioma por defecto de la Aventura con un texto de ejemplo editable. |
| **Texto del post** | El texto (con los hashtags de la dinámica) que el Player copiará y pegará en su publicación. Se define **por idioma**: usa **+ Traducción** para añadir el resto de idiomas si la Aventura es multi-idioma. |
| **Enlace obligatorio** | Si lo activas, el Player **no puede continuar** hasta enviar el enlace de su publicación. Úsalo cuando la publicación sea condición para participar (sorteos, validación del staff). |

Cuando termines, pulsa **Guardar**.

![Editor del Reto Subir Foto en el Gamifier — bloque Compartir en Redes Sociales con los toggles y el texto del post por idioma](/img/gamifier-reto-subir-foto-rrss-edicion.png)

:::tip 🛠️ Escribe el texto del post pensando en el Player
El Player va a pegar ese texto tal cual. Que sea corto, que se entienda fuera del contexto del juego y que lleve los hashtags al final. Si la Aventura es multi-idioma, revisa que los hashtags tengan sentido en cada idioma — muchos funcionan mejor sin traducir.
:::

### Así lo verá el Player 🎮

Con este paso activo, la barra de progreso del Reto pasa de 3 a **4 fases**: a las de siempre (seleccionar, previsualizar, enviar) se le suma la de publicar y validar.

Tras subir su foto, el Player ve la pantalla **"¡Publica tu foto en tus redes y participa!"** con las instrucciones numeradas:

**1 — Copiar el texto**: toca el cuadro del texto ("Toca para copiar el texto") y se copia al portapapeles.

**2 — Publicar**: el botón **"Compartir en mis redes"** abre el panel nativo del móvil con la foto adjunta y copia el texto automáticamente. El Player elige su red, pega el texto y publica. También tiene un botón **"Descargar foto"** para guardarla y publicarla más tarde.

**3 — Validar**: el Player pulsa **"3. Ya la he publicado"** y llega a la pantalla *"Valida tu publicación pegando el enlace aquí"*. Pega el enlace con el botón **"Pegar"** y lo envía con la flecha. Si se ha equivocado, **"← Volver a compartir"** le devuelve al paso anterior.

**4 — Continuar**: con **"4. Continuar"** cierra el Reto y recibe sus puntos.

![Pantalla de la Webapp donde el Player publica su foto en redes — instrucciones en 3 pasos, cuadro del texto y botones de compartir y descargar](/img/webapp-reto-subir-foto-rrss-publicar.png)

![Pantalla de validación donde el Player pega el enlace de su publicación](/img/webapp-reto-subir-foto-rrss-validar.png)

Al enviarlo, el Player ve la confirmación **"¡Enlace recibido! Publicación validada."** y las cuatro fases quedan completadas:

![Confirmación de enlace recibido con las cuatro fases del Reto completadas](/img/webapp-reto-subir-foto-rrss-validado.png)

### Revisar los enlaces publicados 👑

En el **Game Board**, dentro del bloque **Galería de Fotos y Vídeos** del Reto, aparece la tabla **"Enlaces publicados en RRSS"**: quién ha publicado, el enlace clicable a su publicación y el estado de verificación. Puedes **verificar (✓)** o **rechazar (✗)** cada enlace con un clic desde la propia fila.

| Estado | Qué significa |
|---|---|
| **Verificado** | El enlace se ha dado por bueno — automáticamente en X/Twitter, o manualmente por ti. |
| **Pendiente de revisión** | El enlace está recibido pero nadie lo ha comprobado todavía. Es el estado normal de Instagram y Facebook. |
| **Rechazado** | Lo has descartado (enlace roto, publicación que no corresponde, cuenta privada…). |

Los detalles del panel están en [Game Board](../metricas/game-board.md).

### Limitaciones que conviene conocer

:::warning Antes de montar un sorteo con esto, léelo
- **Solo X/Twitter se verifica automáticamente.** AdventuriQ comprueba que el post existe. En Instagram y Facebook no es posible sin permisos especiales de Meta, así que esos enlaces quedan siempre en "Pendiente de revisión" hasta que alguien los mira.
- **Instagram y Facebook no admiten texto pre-rellenado.** Por eso la Webapp copia el texto al portapapeles y el Player tiene que pegarlo. X/Twitter y WhatsApp sí lo aceptan directamente.
- **Ninguna red avisa a AdventuriQ de que se ha publicado.** La validación por enlace es el único mecanismo fiable — de ahí que exista el paso 3.
- **Cuentas privadas**: si el Player tiene la cuenta privada, su publicación solo la ven sus seguidores y tú verás una pantalla de login al abrir el enlace. Si hay premio de por medio, pide cuentas públicas en el enunciado del Reto.
- **En ordenador** el panel nativo de compartir con archivos no suele estar disponible: el Player puede descargar la foto y publicarla a mano.
- La foto **siempre** queda en la Galería de la Aventura, se comparta o no en redes.
:::

## Cuándo usar este Reto 💡

Subir Foto es perfecto en estos escenarios: team-building donde los equipos documentan pruebas físicas o creativas, gincanas presenciales donde la foto es la evidencia de haber completado una misión y eventos donde se quiere generar un álbum colectivo de recuerdos accesible por todos.

Cuándo **no** es la mejor elección: si necesitas que el Player responda una pregunta, usa **[Pregunta / Respuesta](./pregunta-respuesta.md)** o **[Respuesta Libre](./respuesta-libre.md)**; si quieres una acción que no implique subir contenido multimedia, usa **[Llamada a la Acción](./llamada-a-la-accion.md)**.

:::tip 💡 Consejo de diseño
Usa instrucciones muy concretas y divertidas en el enunciado del Reto. "Sube una foto" es genérico y aburrido. "Hazte un selfie con alguien de otro equipo mientras ambos hacéis la pose del ganador" genera risas, fotos memorables y una Galería que todos querrán ver.
:::

## Continúa aprendiendo

- Catálogo completo de tipos en [Retos — los 10 tipos disponibles](./index.md).
- Acción sin validación automática: [Llamada a la Acción](./llamada-a-la-accion.md).
- Recoger texto libre del Player: [Respuesta Libre](./respuesta-libre.md).
- Revisar las fotos y los enlaces publicados: [Game Board](../metricas/game-board.md).
- Preparar el texto del post en varios idiomas: [Idiomas y traducciones](../aventuras/idiomas-traducciones.md).
