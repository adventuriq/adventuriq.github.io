---
feature_name: Acceso directo "Manual de usuario" en el sidebar del Gamifier
date: 2026-05-20
components: [GAMIFIER]
docusaurus_path: docs/intro/manual-de-usuario.md
---

## 1. RESUMEN DE LA FEATURE
- **Nombre:** Acceso directo al Manual de usuario desde el sidebar del Gamifier
- **Descripción:** El Gamifier incluye ahora un acceso directo en la primera posición del menú lateral que abre el manual de usuario online (docs.adventuriq.com) en una pestaña nueva. Para destacar la novedad, se muestra un indicador "Novedad" pulsante tanto en la entrada del sidebar como en el botón Manual del menú superior. El indicador desaparece automáticamente la primera vez que el usuario hace clic en cualquiera de los dos accesos.
- **Componentes afectados:** Gamifier v4.43.0
- **Fecha de despliegue:** 2026-05-20

## 2. QUÉ PUEDE HACER EL USUARIO AHORA
### Desde el punto de vista del Game Master / Game Designer / Super Admin (Gamifier)
- Acceder al manual de usuario online desde un punto fijo y muy visible: la primera entrada del menú lateral izquierdo, llamada "Manual de usuario", con el icono "abrir en pestaña nueva".
- Identificar visualmente que el acceso al manual es una novedad, gracias a un indicador rojo pulsante (estilo notificación de WhatsApp/Telegram):
  - En el sidebar aparece como una píldora roja con el texto "Novedad" / "New".
  - En la navbar aparece como un pequeño punto rojo pulsante sobre el botón "Manual" existente.
- El indicador se oculta automáticamente y de forma permanente la primera vez que se hace clic en cualquiera de los dos enlaces (en el navegador actual).

## 3. PREREQUISITOS DEL USUARIO
- Tener acceso al Gamifier con cualquier rol (Game Master, Game Designer, Super Admin, Admin).
- Navegador con `localStorage` habilitado (cualquier navegador moderno por defecto). Si está deshabilitado, el indicador se mostrará en cada recarga, pero el enlace funciona igual.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier
1. Entra al Gamifier (`https://gamifier.adventuriq.com`) con tu usuario.
2. En el menú lateral izquierdo verás "Manual de usuario" como primera entrada, con el icono de "abrir en pestaña nueva" y una píldora roja "Novedad" parpadeante.
3. En el menú superior (navbar), el botón "Manual" existente muestra un punto rojo pulsante en la esquina superior derecha.
4. Pincha en "Manual de usuario" (sidebar) o en "Manual" (navbar): se abre `https://docs.adventuriq.com/` en una pestaña nueva del navegador.
5. Al volver al Gamifier, los indicadores "Novedad" han desaparecido tanto en el sidebar como en la navbar. Se mantendrán ocultos en futuras sesiones del mismo navegador.

## 5. PANTALLAS PARA CAPTURAR
- [GAMIFIER] Sidebar con la entrada "Manual de usuario" visible y la píldora "Novedad" en rojo → Nombre: manual-usuario/sidebar-novedad.png
- [GAMIFIER] Navbar con el botón "Manual" y el punto rojo pulsante en la esquina → Nombre: manual-usuario/navbar-novedad-dot.png
- [GAMIFIER] Vista combinada (sidebar + navbar) en la pantalla de Aventuras mostrando ambos indicadores → Nombre: manual-usuario/visión-conjunta.png
- [GAMIFIER] Mismo plano tras hacer clic una vez, sin los indicadores "Novedad" → Nombre: manual-usuario/sin-novedad.png
- [GAMIFIER] Pestaña nueva con `docs.adventuriq.com` abierta → Nombre: manual-usuario/manual-online.png

## 6. UBICACIÓN EN DOCUSAURUS
- **Carpeta destino:** `docs/intro/`
- **Nombre del archivo:** `manual-de-usuario.md`
- **sidebar_position sugerido:** 2
- **Tags sugeridos:** [`introducción`, `ayuda`, `documentación`]
- **¿Es página nueva o actualización?** Nueva (o actualización del bloque de bienvenida si ya existe una página de introducción que mencione el manual).

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)
- El indicador "Novedad" se guarda como flag dismisible por navegador (`localStorage.manual_badge_dismissed`). Por tanto, si el usuario abre el Gamifier en otro navegador o en modo incógnito, volverá a ver el indicador, lo cual es coherente con el comportamiento esperado de una notificación de novedad.
- El enlace siempre apunta a la raíz de la documentación (`https://docs.adventuriq.com/`), no a una página interna específica. Cowork puede sugerir que el manual incluya un breve párrafo "Cómo navegar la documentación" en la portada para que el usuario sepa qué hacer al llegar.
- El cambio convive con el enlace "Manual" del menú superior (introducido en Gamifier v4.42.8). Ambos puntos de entrada apuntan al mismo destino.
