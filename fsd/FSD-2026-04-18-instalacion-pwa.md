---
feature_name: Instalación de la Webapp como App
date: 2026-04-18
components: [WEBAPP] [GAMIFIER]
docusaurus_path: docs/instalar-la-app.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Instalación de la Webapp en el dispositivo del Player
- **Descripción:** Los Players ahora pueden instalar AdventuriQ en su móvil, tablet o escritorio con un clic, añadiendo un icono directo y jugando sin la barra del navegador.
- **Componentes afectados:** WEBAPP (UI del prompt + flujo) y GAMIFIER (solo actualización de changelog y versión de webapp mostrada).
- **Fecha de despliegue:** 2026-04-18

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Player (Webapp)

- Instalar AdventuriQ como aplicación en su dispositivo (Android, iPhone, iPad, Windows, Mac) desde la propia webapp, sin pasar por App Store ni Google Play.
- Al instalarla, obtiene un icono en la pantalla de inicio (móvil) o en el escritorio/menú inicio (desktop). Al abrirla se lanza **sin barra del navegador**: toda la pantalla es el juego.
- El primer diálogo aparece automáticamente al entrar a una Aventura (hasta ese momento el Player no ha invertido tiempo; al estar ya dentro, el contexto es de juego y la invitación es evidente).
- Si el Player pulsa "Ahora no", el diálogo no vuelve a aparecer automáticamente durante 7 días, pero puede abrirlo cuando quiera desde el menú lateral → "Instalar la App".
- Si pulsa "No volver a preguntar", el diálogo proactivo no volverá a aparecer nunca; el menú sigue disponible.
- En **iPhone/iPad** (Safari no permite instalación automática) el mismo diálogo se transforma en una mini-guía ilustrada con los 3 pasos exactos: tocar Compartir → Añadir a pantalla de inicio → Añadir.

### Desde el punto de vista del Game Master (Gamifier)

- Nada nuevo que configurar. La feature está activada por defecto para todas las Aventuras y todos los Players.
- El Game Master puede recomendar la instalación a sus Players para mejorar la experiencia (pantalla completa, arranque más rápido).

## 3. PREREQUISITOS DEL USUARIO

- Usar un navegador moderno compatible con PWA:
  - **Recomendado**: Chrome, Edge, Samsung Internet (Android/Desktop) o Safari (iPhone/iPad).
  - Firefox desktop también es compatible pero la experiencia nativa es menos integrada.
- Conexión a internet en el momento de la instalación (luego funciona en buena parte offline).
- No requiere cuenta ni privilegios especiales: cualquier Player puede instalar la app.

## 4. FLUJOS PASO A PASO

### Flujo Player — Android / Windows / Mac (Chrome, Edge)

1. Entrar a AdventuriQ por el método habitual (QR, enlace del Game Master, acceso directo).
2. Seleccionar una Aventura en la lista de Aventuras.
3. Tras unos segundos dentro de la Aventura, aparece el diálogo **"Instala la App en tu dispositivo"** con 3 beneficios: icono en la pantalla de inicio, más espacio de juego sin barra del navegador, carga más rápida y uso offline.
4. Pulsar **"Instalar"**.
5. El navegador muestra su propio prompt de confirmación ("¿Instalar AdventuriQ?").
6. Confirmar. El icono aparece en:
   - Android → pantalla de inicio o cajón de apps.
   - Windows → escritorio y menú Inicio.
   - Mac → Launchpad y carpeta Aplicaciones.
7. Al abrir la app desde el icono instalado, arranca sin la barra del navegador.

### Flujo Player — iPhone / iPad (Safari)

1. Entrar a AdventuriQ con **Safari** (otros navegadores iOS no permiten instalar PWAs).
2. Seleccionar una Aventura.
3. Aparece el diálogo **"Instala la App en tu dispositivo"**. Pulsar **"Instalar"**.
4. El diálogo se transforma en una mini-guía con 3 pasos y una flecha animada:
   - Paso 1: tocar el botón **Compartir** del navegador (icono con flecha hacia arriba).
   - Paso 2: elegir **"Añadir a pantalla de inicio"** en el menú.
   - Paso 3: tocar **"Añadir"** en la esquina superior derecha para confirmar.
5. El icono aparece en la pantalla de inicio del iPhone/iPad.
6. Al abrirlo, arranca en pantalla completa sin Safari.

### Flujo Player — Posponer o rechazar

1. En el diálogo, pulsar **"Ahora no"** → el diálogo desaparece y no vuelve a aparecer automáticamente durante 7 días. Se puede volver a abrir desde el menú lateral.
2. O pulsar **"No volver a preguntar"** → el diálogo automático no vuelve a aparecer. El acceso desde el menú lateral sigue disponible.

### Flujo Player — Reabrir desde el menú

1. Abrir el menú lateral (icono de menú).
2. Pulsar **"Instalar la App"** (visible solo si la app no está ya instalada).
3. Se muestra el diálogo de instalación.

## 5. PANTALLAS PARA CAPTURAR

- [WEBAPP] Diálogo proactivo al entrar a una Aventura (Android, vista mobile) → Nombre: `instalar-app/dialogo-android.png`
- [WEBAPP] Diálogo proactivo versión desktop (Windows Chrome) → Nombre: `instalar-app/dialogo-desktop.png`
- [WEBAPP] Prompt nativo del navegador tras pulsar "Instalar" (Chrome Android) → Nombre: `instalar-app/prompt-nativo-android.png`
- [WEBAPP] Vista iOS — guía ilustrada con flecha hacia Share → Nombre: `instalar-app/guia-ios-paso1.png`
- [WEBAPP] Vista iOS — menú Safari con "Añadir a pantalla de inicio" resaltado → Nombre: `instalar-app/guia-ios-paso2.png`
- [WEBAPP] Icono instalado en la pantalla de inicio del móvil → Nombre: `instalar-app/icono-instalado-movil.png`
- [WEBAPP] Icono instalado en el escritorio Windows → Nombre: `instalar-app/icono-instalado-windows.png`
- [WEBAPP] App abierta desde el icono instalado (sin barra del navegador, pantalla completa) → Nombre: `instalar-app/app-pantalla-completa.png`
- [WEBAPP] Menú lateral con la entrada "Instalar la App" → Nombre: `instalar-app/menu-lateral-entrada.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** raíz de `docs/` (nueva página top-level) o dentro de una sección "primeros-pasos" si Cowork decide agruparla con `intro.md`/`conceptos-basicos.md`. Propuesta: página independiente en la raíz para darle visibilidad.
- **Nombre del archivo:** `instalar-la-app.md`
- **sidebar_position sugerido:** 3 (justo después de `intro.md` posición 1 y `conceptos-basicos.md` posición 2, antes de Aventuras)
- **Tags sugeridos:** `player`, `webapp`, `instalacion`, `primeros-pasos`
- **¿Es página nueva o actualización?** Nueva

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

- **Limitación iOS**: Safari no permite la instalación automática con un solo clic. Es una limitación de Apple, no de AdventuriQ. Por eso en iPhone/iPad aparece una guía manual. Chrome y Firefox en iOS **no soportan** la instalación de PWAs — solo Safari. Recomendar Safari a los Players iOS.
- **Limitación navegadores antiguos**: si el navegador del Player no soporta PWA (muy raro hoy), no verá el diálogo. No es un error, el botón del menú tampoco aparecerá.
- **Dismiss persistente**: la decisión del Player ("Ahora no" / "No volver a preguntar") se guarda en el almacenamiento local del navegador. Si el Player limpia el historial/cookies o cambia de dispositivo, el diálogo puede volver a aparecer.
- **App ya instalada**: si el Player abre AdventuriQ desde el icono instalado, el diálogo nunca aparece y la entrada del menú tampoco, porque la detección es automática.
- **No sustituye** una app nativa de App Store / Google Play. Es la misma webapp, simplemente se comporta como una app desde el punto de vista del usuario (icono, pantalla completa, arranque rápido).
