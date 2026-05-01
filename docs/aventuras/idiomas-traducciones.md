---
sidebar_position: 11
title: 🌍 Idiomas y Traducciones
description: Gestión de idiomas y traducciones de una Aventura en AdventuriQ — cómo configurar el contenido multiidioma y cómo el Player selecciona su idioma.
keywords: [aventura, idiomas, traducciones, multiidioma, bandera, contenido, gamifier, webapp, adventuriq]
---

# 🌍 Idiomas y Traducciones

AdventuriQ permite crear Aventuras con contenido en **hasta 10 idiomas** simultáneos. Los idiomas se configuran a nivel de Aventura y se aplican a todos los elementos que admiten traducción: Misiones, Retos, Objetos Digitales, Tipos de Voto y textos descriptivos. El Player elige su idioma desde el menú de perfil de la Webapp.

:::info 🎯 Vista combinada
Esta página combina la **vista del Game Master** (configuración en el Gamifier) y la **vista del Player** (experiencia en la Webapp). Cada sección está marcada con 👑 o 🎮 según corresponda.
:::

## Configuración de idiomas 👑

Los idiomas de la Aventura se gestionan desde el formulario de edición de la Aventura en el Gamifier. El idioma seleccionado al [crear la Aventura](./crear-aventura.md) se establece como **idioma por defecto**.

Para añadir idiomas adicionales, el Game Master utiliza el selector de idiomas disponible en el formulario de la Aventura. Los idiomas se identifican con **iconos de bandera** que aparecen en todas las cajas de contenido traducibles.

![Sección Traducciones en el Gamifier — bandera de idioma, campos Título, Resumen, Información, Descripción y botón + Nueva Traducción](/img/gamifier-aventura-traducciones.png)

### Contenido traducible

Una vez configurados los idiomas de la Aventura, el botón **"+ Nueva Traducción"** aparece en todas las cajas de contenido que soportan traducción. Cada traducción incluye:

| Elemento | Qué se traduce |
|---|---|
| **Aventura** | Título, descripción, mensaje final de Aventura. |
| **Misiones** | Título, descripción y contenido HTML enriquecido. |
| **Retos** | Enunciado, respuestas, textos auxiliares. |
| **Objetos Digitales** | Título, descripción. El contenido multimedia (imagen, vídeo, audio) puede ser diferente por idioma. |
| **Tipos de Voto** | Nombre del Tipo de Voto. |

El contenido textual se puede configurar con **HTML enriquecido**: negritas, subrayado, colores, iFrames y más, en cada idioma de forma independiente.

:::warning Las imágenes no se traducen automáticamente
Las imágenes de listado, cabecera y similares no tienen opciones por idioma. Solo el contenido textual y multimedia dentro de las cajas de traducción admite versiones por idioma.
:::

### Hasta 10 idiomas

AdventuriQ soporta hasta **10 idiomas diferentes** por Aventura. Los idiomas disponibles cubren las principales lenguas de uso en entornos formativos y corporativos internacionales.

## Cómo selecciona el idioma el Player 🎮

El Player selecciona el idioma con el que quiere jugar desde el menú **"Perfil"** de la Webapp. Cuando cambia de idioma, todos los contenidos traducidos de la Aventura se muestran en el idioma elegido.

Si un contenido concreto no tiene traducción en el idioma del Player, se muestra en el **idioma por defecto** de la Aventura (el que se eligió al crearla).

:::tip 👑 Para el Game Master
Si tu Aventura va dirigida a una audiencia internacional, configura los idiomas antes de empezar a crear Misiones y Retos. Así podrás ir añadiendo las traducciones a medida que creas el contenido, en lugar de tener que volver atrás para traducir todo al final. Valida siempre en la Webapp cómo quedan los textos en cada idioma, ya que la longitud de los campos varía y según el dispositivo pueden quedar cortados.
:::

## Continúa aprendiendo

- Traducciones en los Tipos de Voto: [Votaciones entre Players](./votaciones.md#traducciones-de-los-tipos-de-voto).
- Traducciones en Objetos Digitales: [Objetos Digitales de Misión](../misiones/objetos-digitales.md#editor-del-objeto-digital).
- Configuración general de la Aventura: [Configuración de una Aventura](./configuracion.md).
