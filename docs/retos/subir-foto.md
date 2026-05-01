---
sidebar_position: 4
title: 📸 Subir Foto
description: Reto donde el Player toma o sube una foto o vídeo que se comparte automáticamente en la Galería de la Aventura. Proceso guiado en 3 fases.
keywords: [reto, subir-foto, compartir-foto, galería, imagen, vídeo, gamifier, webapp, adventuriq]
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
