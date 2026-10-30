---
sidebar_position: 13
title: 📜 Términos y Condiciones
description: Pide a los Players que acepten tus Términos y Condiciones antes de entrar en una Aventura y pregúntales si quieren recibir comunicaciones comerciales. Las respuestas quedan registradas y se exportan con la Clasificación.
keywords: [términos y condiciones, consentimiento, privacidad, rgpd, comunicaciones comerciales, clasificación, exportar, idiomas, gamifier, webapp, adventuriq]
---

# 📜 Términos y Condiciones

:::info 🛠️ Quién puede hacer esto
**Game Master** y **Game Designer** (bajo supervisión del GM).
:::

Cada Aventura puede pedir a los Players que **acepten unos Términos y Condiciones** antes de entrar y preguntarles si quieren **recibir comunicaciones comerciales**. Las respuestas quedan registradas y las consultas y exportas desde la Clasificación.

## 🎯 Para qué sirve

- **Cumplir con tus obligaciones legales** cuando organizas una experiencia para un cliente, una marca o un evento: el Player acepta tus condiciones antes de jugar.
- **Recoger el consentimiento para comunicaciones comerciales**, de forma opcional y separada de la aceptación de los Términos.
- **Tener prueba de cuándo aceptó** cada Player: la fecha queda registrada y no se puede editar.

Si dejas el campo vacío, la Aventura funciona **exactamente igual que antes**: no se muestra ninguna ventana y no aparecen columnas nuevas en la Clasificación.

## 📍 Dónde se configura

En el editor de la Aventura, bloque **Traducciones**, pestaña de cada idioma. El campo **Términos y Condiciones** está justo debajo de **Mensaje al acabar la Aventura**.

![Campo Términos y Condiciones en el bloque Traducciones de la Aventura, con el editor de texto y el aviso de que es opcional](/img/gamifier-terminos-condiciones-editor.png)

## ⚙️ Escribir los Términos y Condiciones

1. Entra en **Aventuras** y abre la Aventura.
2. Baja hasta el bloque **Traducciones** y selecciona la pestaña del idioma.
3. En el campo **Términos y Condiciones**, escribe el texto legal. El editor es el habitual: negritas, listas y **enlaces**, por ejemplo a tu propia política de privacidad.
4. Repite en la pestaña de cada idioma de la Aventura.
5. Pulsa **Guardar Aventura**. Aparece el aviso «Aventura Actualizada».

:::tip 🛠️ El enlace a tu política de privacidad lo pones tú
AdventuriQ no añade ningún enlace por su cuenta. Inclúyelo dentro del propio texto: se abrirá en una pestaña nueva cuando el Player lo pulse.
:::

:::note Idiomas
El Player ve el texto **en su idioma**. Si no hay texto en su idioma, se usa el del idioma por defecto de la Aventura. Para añadir idiomas, consulta [Idiomas y Traducciones](./idiomas-traducciones.md).
:::

## 📊 Consultar y exportar el consentimiento

Cuando la Aventura tiene Términos y Condiciones en algún idioma, la **Clasificación** muestra dos columnas nuevas por Player:

- **Acepta Com. Comerciales**: si ha aceptado recibir comunicaciones comerciales.
- **Fecha Aceptación T&C**: cuándo aceptó los Términos y Condiciones.

1. Entra en la Aventura y abre **Clasificación**.
2. Desplaza la tabla hacia la derecha hasta ver las dos columnas.
3. Los interruptores de arriba (**Solo Players**, **Han añadido la Aventura**, **No han jugado aún**) muestran también estas columnas: así ves a quien aceptó pero todavía no ha jugado.
4. Para exportar, abre el menú de la tabla (icono de las tres líneas, arriba a la derecha) y elige la exportación a CSV o Excel. Las dos columnas se exportan con el resto de datos.

![Clasificación con las columnas Acepta Com. Comerciales y Fecha Aceptación T&C, la casilla de consentimiento y el icono de la goma en cada fila](/img/gamifier-metricas-clasificacion-consentimiento.png)

### Rectificar o restablecer el consentimiento de un Player

- **Cambiar el consentimiento de comunicaciones comerciales** (por si el Player cambia de opinión después de jugar): pulsa la **casilla** de la columna «Acepta Com. Comerciales». El cambio se guarda al momento. La casilla aparece desactivada en los Players que todavía no han aceptado los Términos: no hay nada que rectificar.
- **Restablecer el registro** de un Player: pulsa el **icono de la goma** a la derecha de la casilla y confirma. Se borra su aceptación completa y la próxima vez que entre en la Aventura se le volverán a pedir los Términos y Condiciones.

:::info La fecha de aceptación no se edita a mano
O es la fecha real en la que el Player aceptó, o no hay registro. Así sigue sirviendo como prueba.
:::

<!-- 📸 CAPTURA PENDIENTE: /img/gamifier-metricas-clasificacion-consentimiento-restablecer.png — Ventana de confirmación «Restablecer consentimiento» al pulsar la goma -->

## 🎮 Así lo verá el Player

1. El Player abre la Aventura y pulsa **Adelante**.
2. Aparece una ventana con el texto en su idioma, que puede desplazar para leerlo entero.
3. Marca **«He leído y acepto los términos y condiciones»**. Hasta que lo marca, el botón **Aceptar** está desactivado.
4. Si quiere, marca también **«Acepto recibir comunicaciones comerciales»** (es opcional).
5. Pulsa **Aceptar** y entra en la Aventura. Si la Aventura pide código de acceso o Token, se le pide después, como siempre. Con **Cancelar** no entra.

Solo se le pregunta **una vez por Aventura**.

<!-- 📸 CAPTURA PENDIENTE: /img/webapp-terminos-condiciones.png — Ventana de Términos y Condiciones en la Webapp con el texto, las dos casillas y el botón Aceptar desactivado -->
<!-- 📸 CAPTURA PENDIENTE: /img/webapp-terminos-condiciones-aceptar.png — La misma ventana con la casilla de Términos marcada y el botón Aceptar activo -->

:::tip 🛠️ Pruébalo tú mismo
Entra en la Webapp con un usuario que no haya jugado la Aventura y comprueba cómo se lee el texto en móvil antes de publicar.
:::

## ⚠️ Cosas que conviene saber

- **La aceptación no se pierde al reiniciar la partida** de un Player: se conserva aunque se borren sus estados de juego o vuelva a jugar. Solo desaparece si se elimina su cuenta o si la restableces a mano.
- **Al duplicar una Aventura** se copian los Términos y Condiciones, pero no las aceptaciones: los Players de la copia tienen que aceptarlos de nuevo.
- **Players que aceptaron pero aún no han jugado**: no aparecen en la vista «Solo Players» de la Clasificación, sino en «Han añadido la Aventura» y «No han jugado aún», que también muestran y exportan las columnas.
- **Hace falta conexión para aceptar.** Si tus Players van a jugar [sin conexión](../webapp/jugar-sin-conexion.md), que entren una vez con cobertura para aceptar los Términos antes de salir.

## 📚 Continúa aprendiendo

- La tabla de ranking y sus filtros: [Clasificación](../metricas/clasificacion.md).
- Cómo entra el Player en una Aventura: [Acceder a una Aventura](./acceder-a-una-aventura.md).
- Textos en varios idiomas: [Idiomas y Traducciones](./idiomas-traducciones.md).
