---
feature_name: Pantalla de descarga y Jugar sin descargar
date: 2026-10-30
components: [WEBAPP]
docusaurus_path: docs/webapp/jugar-sin-conexion.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Pantalla de descarga renovada y «Jugar sin descargar»
- **Descripción:** Al descargar una Aventura, el Player ve en tres pasos qué se
  está haciendo, una barra que siempre avanza, un tiempo estimado fiable y las
  imágenes de la Aventura según llegan; y puede ponerse a jugar con conexión
  mientras la descarga termina sola.
- **Componentes afectados:** Webapp (v3.1.0)
- **Fecha de despliegue:** 2026-10-30

:::warning Aviso importante para Cowork
Este FSD **completa** a `FSD-2026-10-30-jugar-sin-conexion.md` (Webapp 3.0.0),
que apunta a la misma página nueva `docs/webapp/jugar-sin-conexion.md` y que
todavía no se ha convertido en página. **Procésalos juntos**: la sección
«Descargar la Aventura» de esa página debe describir ya la pantalla de este FSD
(la captura `webapp/sin-conexion-descargando.png` del FSD anterior se toma de la
pantalla nueva).
:::

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)
- Nada nuevo que configurar.

### Desde el punto de vista del Player (Webapp)
- Ver el avance de la descarga en **tres pasos**, cada uno con su check al
  terminar:
  1. **Preparando Misiones y Retos** (indica cuántas Misiones y Retos tiene la
     Aventura).
  2. **Calculando el tamaño** (indica cuánto ocupa la descarga, p. ej. 83.5 MB).
  3. **Descargando imágenes, audios y vídeos** (p. ej. «26.8 MB de 83.5 MB»).
- Ver una **barra con el porcentaje que solo avanza** (nunca vuelve atrás).
- Ver un **tiempo estimado** en frases sencillas que no dan saltos: «Calculando
  el tiempo…», «Quedan unos 3 minutos», «Queda menos de 1 minuto», «Quedan
  menos de 30 segundos», «Casi listo».
- Ver un **mosaico con imágenes de la Aventura** que se van llenando según se
  descargan (un adelanto de lo que va a jugar).
- Pulsar **«Jugar sin descargar»** para entrar ya en las Misiones con conexión:
  la Aventura **sigue descargándose en segundo plano**. Un círculo con el
  porcentaje en la barra superior muestra el avance (al tocarlo vuelve a la
  pantalla de descarga) y, al terminar, un aviso dice que ya se puede jugar sin
  conexión.

## 3. PREREQUISITOS DEL USUARIO
- Los mismos que para descargar una Aventura (ver el FSD de Jugar sin conexión).
- «Jugar sin descargar» solo aparece con conexión.

## 4. FLUJOS PASO A PASO

### Flujo Webapp — descargar esperando
1. Ficha de la Aventura → **«Adelante»** (y código o Token si la Aventura lo pide).
2. Se abre la pantalla de descarga: se completan los tres pasos y la barra
   llega al 100 %.
3. La app entra sola en la lista de Misiones.

### Flujo Webapp — jugar mientras se descarga
1. En la pantalla de descarga, pulsar **«Jugar sin descargar»** (botón con
   borde, debajo del mosaico).
2. La app entra en la lista de Misiones; arriba a la derecha aparece un círculo
   con el porcentaje de la descarga.
3. Se juega con normalidad (hace falta conexión mientras no termine).
4. Al terminar aparece el aviso **«"Nombre de la Aventura" descargada: ya
   puedes jugarla sin conexión»** y el círculo desaparece.

### Flujo Webapp — cancelar
1. En la pantalla de descarga, **«Cancelar»** (enlace de texto al final).
2. Vuelve a la ficha de la Aventura. Lo ya descargado se conserva: al volver a
   entrar continúa donde se quedó.

## 5. PANTALLAS PARA CAPTURAR
Formato móvil (~400 px), Aventura con imágenes propias.
- [WEBAPP] Pantalla de descarga a mitad (tres pasos, barra, tiempo estimado y mosaico a medio llenar) → `webapp/sin-conexion-descargando.png`
- [WEBAPP] Lista de Misiones con el círculo de descarga en la barra superior → `webapp/sin-conexion-descarga-segundo-plano.png`
- [WEBAPP] Aviso de descarga terminada sobre la lista de Misiones → `webapp/sin-conexion-descarga-lista.png`

## 6. UBICACIÓN EN DOCUSAURUS
- **Carpeta destino:** `docs/webapp/`
- **Nombre del archivo:** `jugar-sin-conexion.md` (la misma página del FSD de Jugar sin conexión)
- **sidebar_position sugerido:** 2
- **Tags sugeridos:** sin-conexion, descargas, webapp, player
- **¿Es página nueva o actualización?** Nueva (se crea junto con el FSD de Jugar sin conexión)

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)
- El tiempo estimado se basa en la velocidad media de los últimos segundos, no
  en la del instante: puede tardar unos segundos en aparecer («Calculando el
  tiempo…»), sobre todo en iPhone.
- Si se juega con «Jugar sin descargar» y se pierde la conexión antes de que
  termine, la Aventura todavía no se puede jugar sin conexión; la descarga se
  reanuda al volver a entrar en la Aventura con conexión.
- Una Aventura grande con conexión lenta puede tardar varios minutos: es el
  caso típico para «Jugar sin descargar».
