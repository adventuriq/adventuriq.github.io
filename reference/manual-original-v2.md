# Manual Original de Usuario del Gamifier (v2.0.2)

> **Archivo de referencia histórica.** Este documento es la conversión a Markdown del manual original de AdventuriQ en Power Point. Su propósito es servir como fuente pedagógica a Cowork y Claude Code cuando generan o enriquecen páginas del manual nuevo en Docusaurus.
>
> ⚠️ **IMPORTANTE**: Este manual está **desactualizado** respecto al estado actual del Gamifier. Úsalo como referencia de **contexto pedagógico** (orden, explicaciones, diagramas conceptuales) pero **NUNCA asumas que lo que dice aquí es lo que hay en el Gamifier actual**. Cruza siempre con capturas reales de la plataforma.
>
> Versión original: 2.0.2 — Año aproximado: 2022 — URL: www.adventuriq.com

---

## Índice del manual original

1. [¿Qué es AdventuriQ?](#1-qué-es-adventuriq)
2. [Warnings (advertencias)](#2-warnings)
3. [¿Cómo usar esta ayuda visual?](#3-cómo-usar-esta-ayuda-visual)
4. [Información Básica](#4-información-básica)
5. [Edición de una Aventura (Parte I)](#5-edición-de-una-aventura-parte-i)
6. [Edición de una Misión](#6-edición-de-una-misión)
7. [Edición de una Aventura (Parte II): Retos y POIs](#7-edición-de-una-aventura-parte-ii-retos-y-pois)
8. [Edición de un Reto](#8-edición-de-un-reto)
9. [Edición de una Recompensa](#9-edición-de-una-recompensa)
10. [Métricas de una Aventura](#10-métricas-de-una-aventura)

---

## 1. ¿Qué es AdventuriQ?

Es una **plataforma tecnológica de Gamificación** donde se crean **Aventuras** usando mecánicas y componentes de juego, y se juega desde un navegador web en los móviles, tablets y ordenadores de los participantes / jugadores.

### Las dos partes de AdventuriQ

AdventuriQ se compone de dos aplicaciones web conectadas a un servidor central:

| Componente | URL | Quién la usa | Para qué |
|---|---|---|---|
| **Gamifier** (Administrador de contenidos) | `gamifier.adventuriq.com` | Creador/a de la Aventura | Crear y configurar Aventuras |
| **Webapp** (Web App donde jugar) | `webapp.adventuriq.com` | Jugadores (clientes) | Jugar las Aventuras |

La Webapp es una Progressive Web App que se adapta a diferentes dispositivos: Vista Móvil, Vista Tablet y Vista Escritorio.

---

## 2. Warnings

### Avisos importantes a tener en cuenta

- Siempre hay que **"guardar"** las modificaciones.
- Todas las imágenes tienen que tener **nombres de archivo diferentes**.
- Los audios han de ser **.mp3**.
- Las imágenes han de ser **JPEG / PNG / GIF** y no deben pesar más de **100 KB** cada una.
- Los **passwords** no pueden contener caracteres extraños (tanto en Gamifier como en Webapp).
- Las **coordenadas LAT/LONG** se recomienda copiar y pegar desde Google Maps.
- En el Gamifier (Gestor de contenidos), el orden de los Retos dentro de una Misión responde a si están resueltos o no (igual que en la Webapp).
- Es de **vital importancia dar los permisos** a los navegadores sobre el acceso a la Cámara, GPS, etc.

### Avisos adicionales

- Los **Tokens no se gastan** si se juega con usuarios que tengan rol de Game Master o Game Designer de esa Aventura.
- Un jugador **gasta un Token por cada partida** que hace a una Aventura (incluso si repite una Aventura que ya había jugado y se han borrado sus estados de juego — Raze).
- Para que la Webapp funcione correctamente y cargue bien los contenidos, hay que asegurarse de tener **conexión a Internet con suficiente calidad**, tanto en Movilidad como en Wifi.
- Estamos jugando en un Navegador. Si el sistema reporta algún error de tipo conectividad, probablemente se solucione **moviéndonos unos metros y haciendo un reload** de la página en curso.
- **CUIDADO**: no usar nunca el control **"Atrás" del navegador**. Es probable que se corrompan los datos de ese jugador o que se visualice información incorrecta.

---

## 3. ¿Cómo usar esta ayuda visual?

- Siempre hay que hacer clic en el **botón Guardar** para grabar las últimas modificaciones, por cada sección modificada.
- Ten este documento a mano mientras navegas por las diferentes pantallas del Gamifier.
- Está diseñado para que entiendas las opciones de cada parte y las funcionalidades que te permite AdventuriQ (la relación entre los contenidos, el Gamifier y la Progressive Web App).
- **El diseño de tu Aventura es el principal motor** para generar el comportamiento deseado en tus jugadores/as.
- El documento original estaba basado en la Aventura: **¡Piratas! Origen**.

---

## 4. Información Básica

### 4.1 Aventuras, Misiones y Retos — ¿Qué son?

La jerarquía básica de AdventuriQ es:

```
Aventura
 └── Misiones (1..N)
      └── Retos (1..N)
           └── Objetos (entregados según condiciones)
                Puntos (otorgados por Retos)
```

- Las **Aventuras** se organizan en **Misiones** que contienen **Retos** a superar.
- Un **Reto** puede otorgar **Puntos** y entregar (de manera condicional) **Objetos**.

### 4.2 Sobre las Misiones y los Retos

- Las **Misiones** se pueden activar/desactivar automáticamente en una ventana temporal (Fecha/Hora) concreta.
- Las **Misiones y los Retos** se pueden bloquear con **códigos QR** y **códigos alfanuméricos**.

### 4.3 Los Retos se pueden bloquear

- Los Retos se pueden bloquear con códigos QR y códigos alfanuméricos.
- Los Retos se pueden **Geoposicionar** en Google Maps, donde se bloquean por distancia mínima a su posición (Latitud / Longitud).

### 4.4 Contenido mínimo de una Aventura

La **unidad mínima de elementos** que hay que crear en AdventuriQ es:

> Una **Aventura** que contiene una **Misión** que contiene al menos **un Reto** de cualquier tipo.

### 4.5 Configuración de una Aventura — Dinámicas

Según el diseño de la experiencia, se puede configurar la Aventura para que permita jugar diferentes dinámicas:

- **Aventura Competitiva** entre jugadores/as, con Puntos y Ranking visibles y con feedback de la obtención de Puntos.
- **Aventura Auto-competitiva**, con Puntos pero sin Ranking visible y con feedback de obtención de Puntos.
- **Aventura sin puntos visibles**, con entrega de Objetos y con Baúl (contenedor de objetos) visible.
- **Aventuras de otro tipo**, con diferentes combinaciones de Mecánicas de juego.

### 4.6 Componentes de una Aventura

| Componente | Descripción |
|---|---|
| **Misiones** | Se puede usar más de una Misión por Aventura. Comparten las posiciones en el mapa y la tabla de clasificación (ranking) de los usuarios jugadores. |
| **Retos** | Cada Aventura puede contener una larga lista de Retos, con su descripción y características, su ubicación y mecánica concreta. |
| **Objetos** | Son elementos entregables durante el juego, como consecuencia de un final de Misión o del resultado de un Reto: recompensa, premio, pista, código de descuento, etc. |

### 4.7 Detalles sobre las Misiones

- Usamos las Misiones para **organizar cómo presentamos los Retos** a las personas que juegan en la Aventura.
- Su **visibilidad es configurable** por fecha y hora.
- Se puede establecer una **ventana temporal de jugabilidad** de la Misión, donde la Misión es visible pero no jugable hasta que se cumple la fecha inicial definida por el Game Designer.
- Se pueden **bloquear** por códigos QR, códigos alfanuméricos y por distancia mínima a una posición geográfica (Latitud / Longitud).
- Permiten la **entrega de Objetos** cuando se finalizan.

### 4.8 Detalles sobre los Retos

- Los Retos permiten representar **Mecánicas básicas de juego**. Es donde los jugadores y jugadoras interaccionan con la Aventura.
- **No existe un límite de retos** ni dentro de una Aventura, ni dentro de una Misión.
- Se pueden bloquear por códigos QR, códigos alfanuméricos y por distancia mínima a una posición geográfica (Latitud / Longitud).
- Los **5 tipos de Retos originalmente disponibles** (en la versión del PDF): Pregunta/Respuesta, Preguntas Encadenadas, Respuesta Libre, Llamada a la Acción y Compartir Foto.

> ⚠️ **Nota importante**: En la versión actual del Gamifier existen **10 tipos de Reto vigentes** (los 5 anteriores + Respuesta Exacta, Pregunta/Respuesta con Audio, Pregunta/Respuesta con Vídeo, Ruleta de la Fortuna, Nube de Palabras). Consulta `DOCS_STRUCTURE.md` sección 2 para la lista actualizada.

### 4.9 Detalles de los Objetos

- Los Objetos son elementos que adquieren significado **según el diseño de una Aventura**.
- Pueden representar una **Recompensa, una Pista, una Felicitación, un Código de desbloqueo** de una Misión u otro Reto, etc.
- Su consecución se puede configurar a **nivel de Misión** (entrega directa siempre que se termine la Misión) y a **nivel de Reto** (se puede configurar su entrega según unas condiciones vinculadas con el Reto que lo entrega).
- **A nivel de Misión**, una Recompensa se puede asociar a una **simulación de llamada telefónica** (componente "Llamada").

### 4.10 ¿Cómo introducir los contenidos de una Aventura?

Existen **cuatro zonas** donde introducir los contenidos de una Aventura:

| Zona | Qué contiene |
|---|---|
| **Configurador de Aventura** | Organización del tipo de juego y visibilidad |
| **Misiones** | Organización de los Retos y visibilidad |
| **Retos** | Mecánicas de juego |
| **Objetos** | Vinculados a una Misión o a un Reto |

### 4.11 ¿Dónde puedes ver todas tus Aventuras?

Al acceder al Gamifier, aparece el **listado de Aventuras** del Game Master. El listado muestra para cada Aventura:

- #ID
- Imagen
- Nombre y Creador
- Botón "Asignar Game Designer"
- Tamaño de los recursos
- Game PIN
- Estado (Published / Draft)
- Privacidad
- Fechas de empieza y acaba
- Estado de jugabilidad
- Número de Jugadores
- Acciones (editar, eliminar, métricas)

Hay un botón **"+ Nueva Aventura"** para crear una nueva.

---

## 5. Edición de una Aventura (Parte I)

La configuración de una Aventura es la zona más extensa del Gamifier. En el PDF original ocupa 13 pantallas detalladas. Resumimos aquí los componentes principales:

### 5.1 Cabecera de la Aventura

Accesos rápidos desde la parte superior del editor:

| Botón/Acceso | Función |
|---|---|
| **Manual** | Acceso al manual de usuario |
| **Perfil de usuario** | Acceso al perfil del Administrador |
| **Raze** | **Borrado de todos los jugadores y sus estados de juego** — acción crítica, irreversible |
| **Eliminar mis jugadas** | Borrado de los estados de juego del Game Designer actual |
| **Eliminar mis recompensas** | Borrado de las recompensas obtenidas por el Game Designer actual |
| **Clasificación** | Acceso a métricas de la Aventura: listado de jugadores |
| **Game Board** | Acceso a métricas basadas en los Retos |
| **Ranking HTML** | Mejores 10 jugadores/as en formato HTML publicable |

### 5.2 Métricas rápidas de jugadores

En la parte superior se muestran 5 indicadores con porcentajes:

1. **Han añadido la Aventura**: Usuarios que se han añadido la Aventura con el Game Pin.
2. **Han iniciado Aventura (Tokens)**: Usuarios que han accedido a la Aventura haciendo clic/tap en el botón "Adelante".
3. **Han finalizado la Aventura**: Según las condiciones de finalización de la Aventura.
4. **Con Ranking**: Usuarios que han resuelto al menos un Reto y aún no han finalizado la Aventura.
5. **Sin Ranking**: Usuarios que han accedido a la Aventura pero aún no han resuelto ningún Reto.

### 5.3 Configuración general

Campos principales del editor:

| Campo | Descripción |
|---|---|
| **Empieza / Acaba** | Automatización de las fechas de juego. Los jugadores solo podrán acceder al juego dentro de este intervalo de tiempo. |
| **Estado** | Published (jugable por Players) o Draft (solo jugable por Administradores). |
| **Idioma por defecto** | Idioma principal de la Aventura. Se pueden incorporar hasta 9 traducciones más (10 idiomas en total). |
| **Zona Horaria** | Zona horaria de la Aventura. |
| **Licencia de Aventura** | Información sobre la Licencia y el número de Tokens restantes. Botón para asignar licencia. Botón "Ir a la Tienda" para comprar licencias/tokens. |

Idiomas disponibles: English, Español, Català, Euskara, Français, Deutsch, Italiano, Português, Nederlands, Galego.

### 5.4 Game PIN y bloqueos

- El **Game PIN** es el número que se genera **automáticamente** una vez se crea la Aventura, para que los/las jugadores/as puedan cargar la Aventura.
- **Bloqueo por código de acceso**: toggle que activa el requerimiento de código para entrar.
- **Códigos alfanuméricos**: pueden contener números y letras. Se pueden generar múltiples códigos (uno por línea).
- **Códigos QR**: se generan automáticamente a partir de los códigos alfanuméricos. Descargables en PNG haciendo clic sobre el QR.
- La Webapp incorpora un **lector de códigos QR** para que los Players puedan escanear.

### 5.5 Controles de visibilidad (Bitácora)

Cuatro toggles principales configuran qué ve el Player en su Bitácora:

| Control | Efecto si se desactiva |
|---|---|
| **Visualizar Puntos** | El Player no verá feedback de Puntos en la PWA. |
| **Visualizar Posición y Ranking** | El Player no verá información de posición ni clasificación. |
| **Visualizar Baúl** | El Player no tendrá acceso a las Recompensas (Baúl oculto). |
| **Visualizar Galería de imágenes** | El Player no verá la Galería de fotos compartidas. |

La Bitácora del Player muestra: Retos realizados, Puntos actuales, Posición, Baúl de Objetos, Galería de fotos, Clasificación (Ranking).

### 5.6 Imágenes de la Aventura

Tres imágenes configurables con tamaños recomendados:

| Imagen | Tamaño recomendado | Dónde aparece |
|---|---|---|
| **Imagen listado** | 725×490 px | Listado de Aventuras del Player |
| **Imagen cabecera** | 1200×640 px | Cabecera de la Aventura |
| **Logo del Patrocinador** | 400×125 px | Zonas promocionales |

Formatos permitidos: JPEG, PNG, GIF.

> Nota: Haciendo TAP encima de una imagen en la Webapp, se muestra al 100% de visibilidad.

### 5.7 Contenidos textuales y traducciones

Campos HTML enriquecidos (hasta 10 idiomas):

- **Título Aventura**
- **Resumen Aventura** — visible en el listado
- **Descripción visible** — descripción corta en la cabecera
- **Descripción Extendida** — descripción larga
- **Mensaje Final Aventura** — aparece al finalizar

Los campos permiten: Negritas, Subrayado, Colores, iFrames (YouTube, etc.), listas, tablas, caracteres especiales.

### 5.8 Condiciones de Finalización

La Aventura finaliza automáticamente según **6 tipos de condiciones posibles**:

1. Si ha finalizado todas las Misiones *(por defecto si no se configura nada)*
2. Si ha finalizado las siguientes Misiones *(seleccionables por ID)*
3. Si ha finalizado el siguiente número de Misiones
4. Si han transcurrido el siguiente número de segundos
5. Si el jugador ha conseguido un total de puntos igual o mayor a X
6. Si el Clan ha conseguido un total de puntos igual o mayor a X

Se pueden programar **múltiples condiciones simultáneamente**. A la primera que se cumpla, la Aventura finaliza.

### 5.9 Mapa de la Aventura

Un Mapa puede ser de dos tipos:

| Tipo | Descripción |
|---|---|
| **Geolocalización** | Mapa Google Maps con posición Latitud/Longitud. |
| **Mapa Imagen** | Recurso gráfico (tamaño recomendado 1200×1950). |

- A nivel Aventura, Misión y Reto, se **tiene que crear el Recurso Mapa** (aunque no se use como Mapa).
- A nivel Aventura y Misión, los Mapas **no se pueden bloquear** por Códigos Alfanuméricos ni Códigos QR.
- Los Recursos Gráficos en la zona del Componente Mapa pueden ser elementos del juego, como Pistas, Enigmas, etc.
- Los componentes Mapa a Nivel Aventura y Misión que tengan Retos Geoposicionados pueden **heredar los puntos Geoposicionados** y pintarlos en el Mapa de la Webapp.

### 5.10 Modo de Juego (Individual / Por Equipos)

Las Aventuras pueden ser jugadas de dos maneras diferentes:

| Modo | Característica |
|---|---|
| **Individual** | Cada Player compite por su cuenta. Solo existe Clasificación individual. |
| **Por Equipos** | La Puntuación Individual se suma a la Puntuación del Equipo. Aparecen dos Clasificaciones adicionales: Clasificación dentro del Equipo y Clasificación por Equipos (Ranking Global). |

### 5.11 Equipos (Clans)

Configuración por Equipo:

| Campo | Descripción |
|---|---|
| **Nombre del Equipo (Clan)** | Visible en la Webapp |
| **Descripción del Equipo** | No se visualiza en la Webapp; sirve para Storytelling y versiones customizadas |
| **Icono del Equipo** | Imagen 500×500 px |
| **Miembros** | Solo se pueden añadir jugadores que ya hayan añadido la Aventura con el Game PIN |

Acciones: Añadir miembro, Desvincular miembro, Guardar Clan, Eliminar Clan.

---

## 6. Edición de una Misión

### 6.1 Listado de Misiones

En el listado se muestra para cada Misión:

- **Orden** (arrastrable para reordenar)
- **Imagen** (miniatura)
- **Número de Retos** que componen la Misión
- **ID** (importante para las Condiciones de Final de Aventura)
- **Nombre** (y acceso a edición al hacer clic)
- **Fecha de creación** y **última modificación**
- **Botón eliminar** (no elimina los Retos, solo los desenlaza)

Botón "+ Nueva Misión" para crear.

### 6.2 Configuración general de una Misión

Las Misiones, como las Aventuras, tienen una **página única** donde se configura su comportamiento y sus contenidos. Difieren de la configuración de una Aventura en que:

- Se puede programar su **visibilidad**.
- Se pueden otorgar **Objetos** al finalizar la Misión.

Campos principales:

| Campo | Descripción |
|---|---|
| **Requiere código** | Toggle para activar el bloqueo. |
| **Código de acceso** | Códigos alfanuméricos (uno por línea). |
| **Tamaño imágenes QR** | Tamaño en píxeles para descargar los QR. |
| **Orden** | Posición de la Misión en el listado de la Webapp. |
| **Color** | Color asignado a la Misión; visible en los Puntos del Mapa Geoposicionado. |

### 6.3 Visibilidad y jugabilidad

Por defecto, las Misiones son **Visibles y Jugables**. Se pueden configurar:

- **La Misión es visible** (toggle) — si no, oculta para el Player.
- **La Misión es jugable** (toggle) — si no, visible pero bloqueada.
- **Fecha desde la cual será visible** — para activación temporal.
- **Ventana de jugabilidad** (desde/hasta) — para definir una franja de tiempo jugable.

### 6.4 Imágenes y audio

| Elemento | Tamaño | Dónde aparece |
|---|---|---|
| **Imagen en el listado** | 100×100 px | Listado de Misiones |
| **Imagen cabecera** | 1200×640 px | Cabecera de la Misión |
| **Audio descripción** | MP3 | Reproducible a nivel Misión |

### 6.5 Traducciones de la Misión

Misma estructura que en Aventura. Hasta 10 idiomas simultáneos. Campos:

- **Título**
- **Descripción** (HTML enriquecido)

### 6.6 Mapa de la Misión

Misma estructura que el Mapa de Aventura. Puede ser Geolocalización o Mapa Imagen.

### 6.7 Recompensas a nivel Misión

> Nota: En el PDF original se llaman "Recompensas". En la terminología actualizada son **Objetos Digitales**.

A nivel Misión, una Recompensa se entrega **siempre** que se termine la Misión (completar todos los Retos enlazados).

Se pueden crear **múltiples Recompensas** para entregar al final de la Misión.

### 6.8 Componente "Llamada" (exclusivo de nivel Misión)

A nivel Misión existe un componente singular llamado **"Llamada"**: simula una llamada telefónica usando el audio subido.

Campos:

| Campo | Descripción |
|---|---|
| **Tipo de Notificación** | Llamada |
| **Nombre del personaje o autor** | Nombre ficticio mostrado en la pantalla de "Llamada" |
| **Imagen** | Avatar del "llamante" |
| **Audio** | Mensaje que se reproduce al aceptar la llamada |

La Llamada se entrega **después** del Objeto asociado.

### 6.9 Retos de la Misión

Listado de Retos enlazados a esta Misión:

- Normalmente los Retos se **crean a Nivel Aventura** y se **enlazan a Nivel Misión**.
- Botón "+ Nuevo Reto" (atajo para crear) y "Enlazar Reto" (añadir existente).
- Botón para desenlazar un Reto de una Misión.
- Toggles **Es Inicio** y **Es Fin**: muestran banderitas en los Mapas Geolocalizados.
- Se puede **ordenar** cómo se visualizan los Retos dentro de una Misión (arrastrable).

---

## 7. Edición de una Aventura (Parte II): Retos y POIs

Esta sección vuelve a la Aventura para cubrir dos componentes que se crean a nivel Aventura pero se usan en Misiones.

### 7.1 Listado de Retos de la Aventura

- Los Retos se crean **a Nivel Aventura** (aunque su jugabilidad es a Nivel Misión).
- Un Reto **sin Misión asociada** se marca con un icono "Sin Misión" (no será jugable hasta que se enlace).
- No es un error: esta zona se usa como una **"gran bolsa de Retos"**, usados y sin usar.
- Un Reto puede estar enlazado a **más de una Misión**, pero solo se ejecutará una vez.

### 7.2 Tipos de Retos disponibles (5 en la versión del PDF)

| Tipo | Descripción (del PDF) |
|---|---|
| **Pregunta / Respuesta** | Reto en el que se enuncia una pregunta, y el participante debe seleccionar la(s) respuesta(s) correcta(s) de entre un conjunto de respuestas posibles. |
| **Preguntas Encadenadas** | Lista de "n" pruebas de tipo Pregunta/Respuesta, en la que se enuncian preguntas, y el participante debe seleccionar una o varias respuestas correctas posibles. |
| **Respuesta Libre** | Se enuncia una pregunta y el jugador debe contestar dentro de una caja de texto. Se puede dar puntos simplemente por contestar, pero se debe contrastar a posteriori la respuesta. Se envía un mail al jugador con un código único generado por la plataforma, y el texto de su respuesta. |
| **Compartir Foto** | El participante debe tomar una foto (selfie, pruebas pintar caras, ponerse un disfraz, un traje de seguridad, hacer una pirámide humana, etc.) y se comparte automáticamente en la Galería de fotos de la Aventura. La Galería de fotos es accesible por todos los Players. |
| **Llamada a la Acción** | Se enuncia una propuesta de acción que NO se valida automáticamente. Permite automatizar la propuesta de acción hacia el jugador o jugadora (dirígete a la salida Norte y consigue un globo de color rojo, pregunta el nombre a algún miembro de otro equipo, etc.). |

> ⚠️ **Actualización**: En la versión actual del Gamifier existen **10 tipos vigentes** (los 5 anteriores + 5 nuevos: Respuesta Exacta, PR con Audio, PR con Vídeo, Ruleta de la Fortuna, Nube de Palabras). También hay 4 tipos **deprecados** (IDs 3, 5, 6, 7) que no se deben documentar.

### 7.3 POIs (Puntos de Interés)

Un **POI** o **Punto de Interés** (Point of Interest) es información de interés que aparece en un Mapa Geolocalizado, **pero sin interacción con el Jugador**.

Comparte con el resto de elementos la opción de customizar:
- Título
- Descripción
- Imagen
- Mapa Geolocalizado

Campos:

- **Imagen en el listado** (100×100)
- **Imagen en el detalle** (1200×640)

---

## 8. Edición de un Reto

### 8.1 Estructura común de un Reto

Los Retos, como el resto de componentes principales, tienen una estructura muy definida:

1. **Cabecera** (común a todos los Retos): configuración del Reto, Imágenes y Audio.
2. **Apartado de Título y Descripción** (hasta en 10 idiomas).
3. **Apartado del Mapa** (Imagen o Google Maps).
4. **Apartado de Recompensas** (opcional).
5. **Mecánica específica de cada Reto** (varía según el tipo).

### 8.2 Cabecera del Reto (común a los 5 tipos)

| Campo | Descripción |
|---|---|
| **Código interno de localización del Reto** | Código para controlar la creación de Retos (uso interno del diseñador, p.ej. "PR-001"). |
| **Requiere localización** | Toggle + distancia mínima en metros (si el Mapa es Geoposicionado). |
| **Cuenta atrás (en segundos)** | Solo para Retos Pregunta/Respuesta. Valor positivo activa el cronómetro. Valor negativo o cero: sin cuenta atrás. |
| **Imagen listado** | 100×100 px |
| **Imagen cabecera (Detalle)** | 1200×640 px |
| **Audio descripción** | MP3 reproducible a nivel Reto |

### 8.3 Título y Descripción del Reto

Mismo componente narrativo que en Aventura y Misiones. Hasta 10 idiomas simultáneos. HTML enriquecido con incrustación de iFrames.

### 8.4 Mapa del Reto — Tipos de bloqueo

En los Retos, las opciones de Bloqueo se gestionan usando el componente Mapa. Hay **4 tipos disponibles**:

| Tipo de Mapa | Funcionalidad |
|---|---|
| **Geolocalización** | Google Maps con Lat/Long. Permite bloqueo por distancia. |
| **Geolocalización y QR** | Google Maps + Bloqueo automático por Código Alfanumérico/QR. |
| **Mapa Imagen (Indoor)** | Recurso gráfico (para interiores). |
| **Mapa Imagen y QR** | Recurso gráfico + Bloqueo automático por Código Alfanumérico/QR. |

Combinaciones posibles:

- Bloqueo por distancia mínima + Código Alfanumérico (ej. nombre de una estatua).
- Bloqueo por distancia mínima + Código QR (ej. escanear QR dentro de un local).

### 8.5 Recompensas a nivel Reto

Las Recompensas a Nivel Reto se diferencian de las de Nivel Misión en que:

- **Son configurables** (condiciones de entrega).
- **NO tienen la opción de "Llamada"**.

Igual que las Condiciones de final de Aventura: basta con que **se cumpla una opción** para entregar la Recompensa.

### 8.6 Condiciones de entrega de Recompensa a nivel Reto (11 opciones)

| Condición | Uso |
|---|---|
| **Siempre** | Activa por defecto. Se entrega siempre. |
| **Si ha acertado** | Se entrega si la respuesta es correcta. |
| **Si no ha acertado** | Se entrega si la respuesta es incorrecta. |
| **Si el #id de la respuesta es** | Se entrega según el ID específico de la respuesta. |
| **Si puntos obtenidos son =** | Según igualdad numérica. |
| **Si puntos obtenidos son <** | Menor que. |
| **Si puntos obtenidos son <=** | Menor o igual. |
| **Si puntos obtenidos son >** | Mayor que. |
| **Si puntos obtenidos son >=** | Mayor o igual. |
| **Si tiempo transcurrido >= (segundos)** | Tiempo mayor o igual. |
| **Si tiempo transcurrido <= (segundos)** | Tiempo menor o igual. |
| **Nunca** | Desactiva la Recompensa sin borrarla. |
| **Dar hasta un máximo de "n"** | Limita entregas (ej. "Solo 10 camisetas"). |

### 8.7 Mecánica — Pregunta / Respuesta

| Campo | Descripción |
|---|---|
| **Puntos si acierta** | Positivos o negativos. |
| **Puntos si falla** | Positivos o negativos. |
| **Mostrar la respuesta correcta si se falla** | Toggle (útil en proyectos educativos). |
| **Es Multirespuesta** | Toggle: si está activo, deben marcarse TODAS las respuestas correctas para considerar acertado. |
| **Mostrar las respuestas en orden aleatorio** | Toggle. |
| **Mostrar Correcto!/Incorrecto! en la pantalla de feedback** | Toggle (útil en Aventuras narrativas). |
| **Imagen en la cabecera** | 1200×640 px (puede ser diferente a la de la Cabecera del Reto). |

Respuestas:

- Se pueden añadir **tantas respuestas como se quiera**.
- Cada respuesta tiene un **#id** (importante para entregar Recompensas basadas en ID de Respuesta).
- Toggle **"Es correcta"** por respuesta.
- Botón para eliminar respuestas individuales.

### 8.8 Mecánica — Llamada a la Acción

| Campo | Descripción |
|---|---|
| **Puntos si hace la llamada a la acción** | Puntos otorgados al acceder al Reto. |
| **Imagen en la cabecera** | 1200×640 px |
| **Frase que leerá el jugador cuando desbloquee el Reto** | HTML enriquecido (hasta 10 idiomas). |

### 8.9 Mecánica — Respuesta Libre

| Campo | Descripción |
|---|---|
| **Puntos si responde** | Puntos si el Player escribe respuesta. |
| **Puntos si no responde** | Puntos si no escribe nada. |
| **Imagen en la cabecera** | 1200×640 px |
| **Enunciado pregunta** | HTML enriquecido (hasta 10 idiomas). |

El sistema envía una **copia al correo** del jugador. Luego en el Game Board se pueden recuperar todas las respuestas.

### 8.10 Mecánica — Compartir Foto

| Campo | Descripción |
|---|---|
| **Puntos si hace la foto** | Puntos otorgados al compartir la foto. |

El proceso de compartir la imagen es **completamente guiado en 3 fases**. Dependiendo del dispositivo, las opciones para conseguir la imagen son: Fototeca, Hacer foto/grabar vídeo, Seleccionar archivo.

### 8.11 Mecánica — Preguntas Encadenadas

Solo pueden **encadenar Retos de tipo Pregunta / Respuesta**.

Son los únicos Retos que pueden otorgar **puntos extra por rapidez** al responder.

| Campo | Descripción |
|---|---|
| **Porcentaje de puntos extra a sumar (solo si acierta)** | Slider 0-100%. Porcentaje del total de Puntos a sumar en función del tiempo de respuesta. |
| **Preguntas a mostrar** | Si es 0, se muestran todas las enlazadas. Si es N>0, se eligen N aleatoriamente. |
| **Orden de las preguntas** | Toggle: ordenadas (según el orden asignado) o aleatorias por jugador. |

Se pueden añadir tantos Retos Pregunta/Respuesta como se quiera. Solo se usa **la Mecánica** del Reto Pregunta/Respuesta (la cabecera del Reto PR no se usa).

> No tiene sentido usar Recompensas en Retos Pregunta/Respuesta que se vayan a usar dentro de Preguntas Encadenadas.

---

## 9. Edición de una Recompensa

> Nota terminológica: en el PDF se usa "Recompensa". En el manual nuevo usamos **"Objeto Digital"** como término canónico.

### 9.1 Listado de Recompensas

Dependiendo del nivel (Misión o Reto), el listado aparece en el editor correspondiente. Se pueden crear múltiples Recompensas.

### 9.2 Configuración común de una Recompensa

| Campo | Descripción |
|---|---|
| **Aventura asociada** | Informativo, no editable desde aquí. |
| **Genera código único** | Toggle: asigna código único a cada Player que consigue la Recompensa (útil para controlar unidades físicas). |
| **Tipo de Recompensa** | Imagen / Vídeo / Audio. |
| **Traducciones** | Hasta 10 idiomas. |

### 9.3 Tipos de contenido multimedia

| Tipo | Formato |
|---|---|
| **Imagen** | JPG / PNG / GIF |
| **Vídeo** | MP4 |
| **Audio** | MP3 |

### 9.4 Traducciones de la Recompensa

Cada traducción incluye:

- **Título**
- **Descripción** (HTML enriquecido)
- **Imagen** (300×300 px)

### 9.5 Acciones

- **Botón Atrás**: vuelve al listado de Recompensas.
- **Guardar cambios**: guarda la configuración.
- **Eliminar**: borra la Recompensa permanentemente.

### 9.6 Diferencia entre Recompensa a Nivel Misión vs Nivel Reto

| Característica | Nivel Misión | Nivel Reto |
|---|---|---|
| **Entrega** | Siempre al finalizar la Misión | Configurable según condiciones |
| **Componente Llamada** | SÍ disponible | NO disponible |
| **Condiciones de obtención** | Ninguna (entrega automática) | 11+ opciones configurables |

---

## 10. Métricas de una Aventura

### 10.1 Acciones disponibles (desde la cabecera de la Aventura)

| Botón | Función |
|---|---|
| **Raze** | Elimina todos los estados de juego. **CUIDADO**, irreversible. |
| **Eliminar mis jugadas** | Elimina solo las jugadas del Game Master/Designer actual. Útil para rejugar. |
| **Eliminar mis recompensas** | Elimina las recompensas obtenidas por el Game Master/Designer actual. |
| **Clasificación** | Vista basada en jugadores. Listado ordenado de Métricas por jugador. |
| **Game Board** | Vista basada en Retos. Acceso rápido a cada Reto y comportamiento de los jugadores. |
| **Ranking HTML** | Publica una URL con el Top 10 del juego en tiempo real. |

Antes de hacer Raze, **es recomendable descargar las Métricas** de la Aventura si hay datos de juego real.

### 10.2 Vista Clasificación

Listado de jugadores con:

- User ID, Acciones, Posición, Avatar, Nickname, Nombre, E-Mail.
- Fecha última jugada, Pruebas Realizadas, Puntos Pruebas, Puntos Totales.
- Filtros por columna.
- Botón **"Raze" particular** para cada jugador (elimina sus estados de juego individualmente).
- Botón **"Exportar a EXCEL"**.

Filtros rápidos: Solo Players, Han añadido la Aventura, No han jugado aún.

### 10.3 Vista Game Board

Vista basada en los Retos que componen la Aventura. Para cada Reto muestra:

- **Número de jugadores** que han participado.
- **% Participación**.
- **Detalles de la Mecánica** (desplegable).
- Para Retos de **Respuesta Libre**: listado de respuestas escritas por los jugadores, recuperable desde aquí.

Información en tiempo real (refrescar para actualizar). Descargable en formato tabulado.

---

## Fin del Manual Original

Este era el último bloque del PDF v2.0.2. A partir de esta base, el manual nuevo de Docusaurus añadirá:

- Los **5 nuevos tipos de Reto** (Respuesta Exacta, PR Audio, PR Vídeo, Ruleta, Nube de Palabras).
- La sección **🎮 Así lo verá el Player** al final de cada página donde aplique.
- Los **indicadores de rol** (👑 Solo Game Master / 🛠️ GM + GD / 🎮 Player / 🌐 Todos).
- Admonitions de Docusaurus (:::tip, :::warning, :::danger, :::info).
- Estructura de 4 roles oficiales (Admin, Game Master, Game Designer, Player).

---

*Conversión generada en abril 2026 a partir de `AdventuriQ_manual_uso_v2_0_2.pdf`*
