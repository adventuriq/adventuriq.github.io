---
feature_name: Idioma preferido del Player
date: 2026-09-25
components: [API] [WEBAPP]
docusaurus_path: docs/webapp/perfil.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Idioma preferido del Player
- **Descripción:** El idioma que el Player elige en su perfil ahora le acompaña
  en cualquier dispositivo, y cuando una Aventura no está traducida a ese
  idioma se muestra en el idioma por defecto de la Aventura.
- **Componentes afectados:** API (v4.62.1), Webapp (v2.49.2)
- **Fecha de despliegue:** 2026-09-25

:::warning Aviso importante para Cowork
**Esto es un FIX, no una funcionalidad nueva.** El manual YA describe los dos
comportamientos de abajo, y hasta hoy ninguno de los dos era cierto del todo:

- `docs/webapp/perfil.md`, sección **Pestaña Preferencias**: *"La selección se
  guarda en el servidor, así que el idioma que elijas se mantiene aunque
  cambies de dispositivo."* → La selección **sí** se guardaba en el servidor,
  pero al entrar desde otro dispositivo la Webapp no la leía y usaba el idioma
  del navegador. Ahora la afirmación es correcta.
- `docs/aventuras/idiomas-traducciones.md`, sección de selección de idioma del
  Player: *"Si un contenido concreto no tiene traducción en el idioma del
  Player, se muestra en el idioma por defecto de la Aventura."* → Era cierto
  para casi todo el contenido, pero el **título y la descripción de Misiones y
  Retos** podían salir en cualquier otro idioma de la Aventura en vez de en el
  idioma por defecto. Ahora la afirmación es correcta.

**Por tanto lo más probable es que NO haya que reescribir esas frases**, sino
como mucho reforzarlas y, si procede, añadir la aclaración de la sección 7
sobre el idioma de la interfaz. Si se detecta alguna frase que contradiga lo
descrito aquí, esa sí hay que corregirla.
:::

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Nada nuevo. El Game Master no interviene: no hay pantallas ni opciones nuevas
  en el Gamifier.
- Lo único que cambia para él es indirecto: si crea una Aventura en varios
  idiomas, ahora puede confiar en que cada Player la verá en el idioma que tiene
  elegido en su perfil, entre desde donde entre.

### Desde el punto de vista del Player (Webapp)

- Elegir un idioma en **Perfil → Preferencias** y encontrárselo aplicado al
  entrar con la misma cuenta desde otro móvil, otro ordenador u otro navegador.
  Antes había que volver a elegirlo en cada dispositivo (y ni siquiera eso
  bastaba: el idioma se perdía de nuevo al cerrar y volver a iniciar sesión).
- Jugar en un idioma al que la Aventura no está traducida y ver **todos** los
  textos en el idioma por defecto de esa Aventura, de forma coherente. Antes el
  título y la descripción de las Misiones y los Retos podían aparecer en un
  tercer idioma.

## 3. PREREQUISITOS DEL USUARIO

- Tener una cuenta de Player y haber iniciado sesión (el idioma se guarda en la
  cuenta; un invitado que juega sin registro usa el idioma con el que entró).
- Para que el cambio de idioma se note, la Aventura debe estar traducida a ese
  idioma. Si no lo está, se verá en el idioma por defecto de la Aventura — que
  es el comportamiento correcto, no un error.

## 4. FLUJOS PASO A PASO

### Flujo Webapp — cambiar el idioma y comprobar que viaja con la cuenta

1. Entrar en la Webapp (`play.adventuriq.com`) e iniciar sesión.
2. Pulsar el **avatar** de la esquina superior derecha para abrir el Perfil.
3. Ir a la pestaña **Preferencias**.
4. Desplegar **Idioma de las Aventuras** y elegir un idioma (por ejemplo,
   Català).
5. Aparece la confirmación de que el idioma se ha guardado.
6. Abrir una Aventura traducida a ese idioma: títulos, descripciones, Misiones y
   Retos se muestran en él.
7. **La comprobación del fix**: entrar con esa misma cuenta desde otro
   dispositivo o desde una ventana privada del navegador. La Aventura aparece
   directamente en el idioma elegido, sin tocar nada.

### Flujo Webapp — contenido no traducido

1. Con el idioma del Player puesto en uno al que la Aventura NO está traducida.
2. Abrir esa Aventura.
3. Todo el contenido (Aventura, Misiones, Retos) se muestra en el **idioma por
   defecto de la Aventura**, el que se eligió al crearla.

## 5. PANTALLAS PARA CAPTURAR

Las capturas útiles aquí ya deberían existir para la pestaña Preferencias. Solo
haría falta rehacerlas si han cambiado visualmente (no es el caso: no se ha
tocado ninguna pantalla).

- [WEBAPP] Perfil → pestaña **Preferencias**, con el desplegable *Idioma de las
  Aventuras* abierto → Nombre sugerido: `webapp/perfil-preferencias-idioma.png`
- [WEBAPP] Misma Aventura vista en dos idiomas distintos, lado a lado, para
  ilustrar la sección de idiomas → Nombre sugerido:
  `aventuras/idiomas-player-dos-idiomas.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/webapp/`
- **Nombre del archivo:** `perfil.md` (página existente)
- **sidebar_position sugerido:** sin cambios (1)
- **Tags sugeridos:** los que ya tiene (`perfil`, `player`, `preferencias`,
  `webapp`) — como mucho añadir `idioma`
- **¿Es página nueva o actualización?** **Actualización**, de dos páginas:
  - `docs/webapp/perfil.md` → sección **Pestaña Preferencias** (principal)
  - `docs/aventuras/idiomas-traducciones.md` → sección donde se explica cómo el
    Player selecciona su idioma y qué pasa con el contenido sin traducir

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

Tres matices que conviene que el manual deje claros, porque generan dudas
razonables en los Players:

- **El idioma de la interfaz de la app NO cambia con esta opción.** *Idioma de
  las Aventuras* afecta al contenido: títulos, descripciones, Misiones, Retos,
  premios. Los textos propios de la app (botones, menús, mensajes) siguen el
  idioma del navegador o del dispositivo, y la app solo está traducida a
  Español, Inglés, Català y Francés. La página `perfil.md` ya lo menciona en la
  pestaña *Acerca de*; merece la pena que la pestaña *Preferencias* lo diga
  también, porque es ahí donde el Player elige.
- **Los premios del Baúl conservan el idioma en el que se ganaron.** Si un
  Player gana un premio jugando en castellano y después cambia a català, ese
  premio se seguirá mostrando en castellano. Es deliberado: el premio es el
  recuerdo de cómo se consiguió. No es un fallo.
- **El idioma se decide por Aventura, no elemento a elemento.** Si una Aventura
  está traducida a un idioma pero alguna Misión concreta se quedó sin traducir,
  esa Misión puede aparecer sin texto. La recomendación para el Game Master es
  completar las traducciones de todos los elementos antes de publicar, o no
  ofrecer ese idioma en la Aventura.

**Al cerrar sesión, el idioma se olvida en ese dispositivo.** Es intencionado:
evita que el siguiente Player que use ese mismo navegador herede el idioma del
anterior. Al volver a iniciar sesión, se recupera el de la cuenta.
