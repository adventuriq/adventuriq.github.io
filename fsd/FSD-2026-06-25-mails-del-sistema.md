---
feature_name: Mails del Sistema
date: 2026-06-25
components: [API] [GAMIFIER]
docusaurus_path: docs/super-admin/mails-del-sistema.md
---

## 1. RESUMEN DE LA FEATURE
- **Nombre:** Mails del Sistema
- **Descripción:** Permite editar el contenido de los correos automáticos de la plataforma (asunto y cuerpo), en varios idiomas, sin tocar código.
- **Componentes afectados:** API, Gamifier
- **Fecha de despliegue:** 2026-06-25

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Super Admin (Gamifier)
- Acceder a una nueva herramienta **"Mails del Sistema"** dentro de Super Admin Tools.
- Ver el catálogo de correos automáticos editables (en esta primera entrega, los avisos de **despublicación de Aventuras**).
- Editar el **asunto** y el **cuerpo** de cada correo en **español e inglés**, con la opción de **añadir más idiomas** (francés, alemán, italiano, etc.) mediante el botón "Nueva Traducción".
- Redactar el cuerpo con un **editor visual (WYSIWYG)** que incluye modo "Fuente HTML" para editar el código directamente.
- Insertar **variables** que se sustituyen automáticamente al enviar el correo (p. ej. el número y el título de la Aventura, el email del destinatario). Las variables se muestran como etiquetas que se copian al portapapeles con un clic.
- En el aviso de despublicación, editar también los **motivos** (sin tokens, sin licencia, licencia caducada, espacio superado), que se insertan en el correo según las causas reales de cada Aventura y en el idioma del destinatario.
- Usar el botón **"Previsualizar despublicación"**: simula el proceso con datos reales y muestra los correos tal y como se enviarían, **sin despublicar ni enviar nada**.

### Desde el punto de vista del Player (Webapp)
- No aplica (herramienta interna de Super Admin). El propietario de la Aventura sí recibe el correo de despublicación ya en su idioma y con los motivos reales.

## 3. PREREQUISITOS DEL USUARIO
- Ser **Super Admin** (la herramienta solo es visible para ese rol).

## 4. FLUJOS PASO A PASO

### Flujo Gamifier
1. Entrar en **Super Admin Tools** → pulsar la pastilla **"Mails del Sistema"**.
2. En el listado, pulsar **"Editar"** en el correo deseado (p. ej. "Despublicación — aviso al propietario").
3. Seleccionar la pestaña del idioma (ES / EN) o pulsar **"Nueva Traducción"** para añadir otro idioma.
4. Editar el **Asunto** y el **Cuerpo** (editor visual; botón "Fuente HTML" para el código). Pulsar una **variable** para copiarla y pegarla donde se quiera.
5. (Opcional, solo despublicación) Editar los textos de los **Motivos** por idioma.
6. Pulsar **"Guardar"**.
7. (Opcional) Pulsar **"Previsualizar despublicación"** para ver, en una simulación segura, cómo quedarían los correos con los cambios.

## 5. PANTALLAS PARA CAPTURAR
- [GAMIFIER] Panel de Super Admin con la pastilla "Mails del Sistema" → Nombre: super-admin/mails-sistema-pastilla.png
- [GAMIFIER] Listado de correos del sistema → Nombre: super-admin/mails-sistema-listado.png
- [GAMIFIER] Editor de correo con pestañas de idioma + variables + editor WYSIWYG → Nombre: super-admin/mails-sistema-editor.png
- [GAMIFIER] Botón "Nueva Traducción" desplegado con el selector de idioma → Nombre: super-admin/mails-sistema-nueva-traduccion.png
- [GAMIFIER] Modal de "Previsualizar despublicación" (dry-run) → Nombre: super-admin/mails-sistema-previsualizar.png

## 6. UBICACIÓN EN DOCUSAURUS
- **Carpeta destino:** `docs/super-admin/`
- **Nombre del archivo:** `mails-del-sistema.md`
- **sidebar_position sugerido:** (a continuación de las demás herramientas de Super Admin)
- **Tags sugeridos:** super-admin, correos, plantillas, idiomas, despublicacion
- **¿Es página nueva o actualización?** Nueva

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)
- En esta primera entrega solo está disponible la categoría de **despublicación de Aventuras** (3 correos: aviso al propietario, listado interno y aviso "sin despublicaciones"). El sistema está preparado para ir incorporando el resto de correos automáticos.
- Si un idioma no tiene traducción, el correo se envía en el **idioma por defecto** (español) o, en su defecto, en el primer idioma disponible.
- La variable de motivos solo aplica al correo de aviso al propietario.
- La previsualización ("dry-run") nunca despublica Aventuras ni envía correos: es totalmente segura para usar sobre datos reales.
