---
feature_name: Duplicar Aventura — copia completa y fiel
date: 2026-08-01
components: [API]
docusaurus_path: docs/aventuras/crear-aventura.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Duplicar Aventura — copia completa y fiel
- **Descripción:** Al duplicar una Aventura, la copia incluye ahora absolutamente todo su
  contenido de diseño. Antes había Retos que se copiaban vacíos y elementos que se perdían
  por el camino; además, la copia compartía los mapas y los puntos de localización con la
  Aventura original, así que editarlos en la copia modificaba también la original.
- **Componentes afectados:** API
- **Fecha de despliegue:** pendiente (aprobación de Mike tras validar en TEST)

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Duplicar una Aventura que use **cualquier tipo de Reto** y encontrar la copia completa:
  Realidad Aumentada, Ruleta de la Fortuna, Respuesta Exacta, Nube de Palabras,
  Pregunta/Respuesta con audio, Pregunta/Respuesta con vídeo y Encontrar objeto con tiempo
  ya no se copian vacíos.
- Encontrar en la copia los **objetos escondidos** del Reto "Encontrar objeto", los **códigos
  QR** del Reto "Interactiva" y las **redes sociales** configuradas en el Reto de "Subir Foto".
- Conservar los **Objetos digitales definidos a nivel de Aventura** (incluidas las Llaves
  digitales que bloquean Misiones o Retos desde ese nivel), que antes desaparecían.
- Conservar los **Tipos de voto** de las Votaciones y las **llamadas/notificaciones** de las
  Misiones.
- Conservar la **lógica de grupos Y/O** de las condiciones de finalización de Aventura y de
  Misión, y de las condiciones de entrega de Objetos digitales. Antes todas las condiciones
  se juntaban en un solo grupo y la lógica cambiaba de sentido.
- Conservar las opciones de la Aventura en **modo Arena** (cuenta atrás, puntos por tiempo,
  selección de Misiones) y los interruptores de Votaciones y Nube de Palabras.
- **Editar los mapas y los puntos de localización de la copia sin miedo**: ahora son propios
  de la copia. Mover un punto GPS o retocar el mapa indoor en la copia ya no afecta a la
  Aventura original (ni al revés).
- Recibir siempre la copia en estado **Borrador**, incluso si la Aventura original estaba
  publicada, para revisarla antes de abrirla a los Players.
- Si la duplicación falla por cualquier motivo, **no queda una Aventura a medias en el
  listado** y la Licencia elegida sigue disponible para volver a intentarlo.

### Desde el punto de vista del Player (Webapp)

No aplica: la funcionalidad es del Gamifier. El efecto indirecto es que una Aventura duplicada
se juega igual que la original, sin Retos rotos.

## 3. PREREQUISITOS DEL USUARIO

- Tener al menos una Aventura creada.
- Tener al menos una **Licencia de Aventura libre** (sin Aventura asignada) en la cuenta: la
  copia consume una Licencia, igual que antes.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier

El flujo de uso **no cambia**:

1. Ir al listado de Aventuras.
2. Pulsar el botón **"Duplicar"** (icono de copia) en la fila de la Aventura.
3. Seleccionar la Licencia destino en el modal **"Duplicar Aventura"** y pulsar **"Continuar"**.
4. Esperar a que termine la copia.
5. La nueva Aventura aparece en el listado con el título original + **"(Copia)"** y con la
   etiqueta **Borrador** (novedad: antes heredaba el estado de la original).
6. Abrir la copia y comprobar que Misiones, Retos, Objetos digitales, mapas y configuración
   están completos.

### Comprobación recomendada tras duplicar

1. Abrir un Reto de cada tipo usado en la Aventura y verificar que conserva su contenido.
2. Si la Aventura usa mapas indoor o puntos de localización, abrir uno en la copia y
   comprobar que se puede editar sin que cambie el de la Aventura original.
3. Revisar la copia y publicarla cuando esté lista.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Listado de Aventuras con la copia recién creada mostrando el sufijo "(Copia)" y
  la etiqueta **Borrador** → Nombre sugerido: `aventuras/duplicar-copia-borrador.png`
- [GAMIFIER] Modal "Duplicar Aventura" con las tarjetas de Licencia (ya existe como
  `gamifier-aventura-clonar-modal.png`; reutilizar si sigue vigente)
- [GAMIFIER] Detalle de un Reto de Realidad Aumentada dentro de la copia, con su objeto 3D y
  su marcador → Nombre sugerido: `aventuras/duplicar-reto-ar-copiado.png`
- [GAMIFIER] Pestaña de Objetos digitales de la copia, mostrando los objetos de nivel Aventura
  → Nombre sugerido: `aventuras/duplicar-objetos-aventura.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `crear-aventura.md`
- **Sección a actualizar:** "Clonar una Aventura existente" (líneas ~141-170), en concreto las
  subsecciones **"Qué se clona"** y **"Qué NO se clona"**, y añadir la nota del estado Borrador.
- **sidebar_position sugerido:** sin cambios (0)
- **Tags sugeridos:** aventura, duplicar, clonar, copia, licencia, borrador
- **¿Es página nueva o actualización?** Actualización

### Contenido sugerido para "Qué se clona"

Ampliar la lista para dejar explícito que se copian: Misiones y sus llamadas, todos los tipos
de Reto con su mecánica completa (incluidos objetos escondidos, códigos QR y redes sociales),
Objetos digitales de Reto, de Misión y **de Aventura** (incluidas las Llaves digitales, con su
bloqueo remapeado a la llave de la copia), condiciones de finalización **con sus grupos Y/O**,
Tipos de voto, Puntos de Interés, Clanes (sin miembros), Etiquetas, mapas y puntos de
localización **propios de la copia**, traducciones, archivos multimedia y las opciones de
Arena.

### Contenido sugerido para "Qué NO se clona"

Mantener la tabla actual (Players inscritos, estados de juego, fotos de Players) y añadir:

| Elemento | Motivo |
|---|---|
| **Llaves ya abiertas por los Players** | Es progreso de partida; en la copia todas las Llaves están por conseguir. |
| **Votos emitidos** | Los Tipos de voto sí se copian; los votos de los Players no. |
| **Códigos de premio de un solo uso** | Duplicarlos entregaría el mismo código en dos Aventuras. |
| **Tokens de acceso ya emitidos** | La copia parte de la Licencia nueva que se le asigna. |

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

- **Cambio de comportamiento visible:** la copia se crea siempre en **Borrador**. Si el Game
  Master duplicaba una Aventura publicada esperando que la copia también lo estuviera, ahora
  tendrá que publicarla explícitamente. Es deliberado: evita exponer a los Players una copia
  con títulos "(Copia)" sin revisar.
- Los archivos multimedia se copian a la carpeta de la nueva Aventura. Los audios y vídeos
  referenciados por nombre en las traducciones conservan su nombre de fichero.
- Si la Aventura original tenía una Misión o un Reto bloqueado por una Llave digital, la copia
  queda bloqueada por la **Llave clonada**, no por la original.
- Si una porción de la Ruleta entregaba un Objeto digital, en la copia entrega el objeto
  clonado. En el caso excepcional de que ese objeto no se pueda copiar, la porción pasa a dar
  puntos en vez de entregar un objeto ajeno.
- Las Aventuras duplicadas **antes** de este cambio no se corrigen retroactivamente: si una
  copia antigua tiene Retos vacíos, hay que rehacerla o completarla a mano.
