---
feature_name: Traducciones multi-idioma en los Tipos de Voto
date: 2026-03-04
components: [API] [GAMIFIER] [WEBAPP]
docusaurus_path: docs/aventuras/votaciones.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Nombre del Tipo de Voto traducible por idioma
- **Descripción:** Los Tipos de Voto del sistema de Votaciones se pueden nombrar ahora en varios idiomas. Cuando un Player abre la Aventura en un idioma concreto, ve el nombre del voto traducido a ese idioma. El Game Master añade traducciones en el modal de edición del Tipo de Voto igual que en el resto de la plataforma (con pestañas por bandera de idioma).
- **Componentes afectados:** API, Gamifier, Webapp
- **Fecha de despliegue:** 2026-03-04

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- En el modal de edición de cada Tipo de Voto, añadir el nombre del voto en tantos idiomas como necesite: pestañas con banderas para cada idioma, igual que en Aventuras, Misiones o Retos.
- Añadir nuevas traducciones con el botón correspondiente y eliminar las que no quiera mantener.
- El idioma por defecto de la Aventura se crea automáticamente la primera vez que se edita un Tipo de Voto.

### Desde el punto de vista del Player (Webapp)

- Ver los nombres de los Tipos de Voto en su propio idioma si el Game Master ha cargado la traducción correspondiente.
- Si el Player tiene un idioma para el que no hay traducción cargada, ve el nombre en el idioma por defecto de la Aventura.

## 3. PREREQUISITOS DEL USUARIO

- Tener activadas las **Votaciones** en la Aventura (ver FSD-2026-03-03-sistema-votaciones).
- Conocer los idiomas de tu audiencia.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Añadir una traducción a un Tipo de Voto

1. Entra en Aventuras y abre la Aventura con Votaciones activadas.
2. En el bloque **"Tipos de Voto"**, pulsa el lápiz del Tipo que quieras traducir.
3. En el campo "Nombre del voto" verás una pestaña con la bandera del idioma por defecto. Escribe el nombre en ese idioma.
4. Pulsa **"+ Nueva traducción"** para añadir otro idioma. Selecciona la bandera del idioma y escribe el nombre traducido.
5. Repite para cada idioma. Guarda el Tipo de Voto.

### Flujo Gamifier — Eliminar una traducción

1. Abre el editor del Tipo de Voto.
2. Pulsa el botón de eliminar junto a la bandera del idioma que quieras retirar.
3. Guarda el Tipo de Voto. Los Players que jugaban en ese idioma pasarán a ver el nombre en el idioma por defecto de la Aventura.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Modal de edición de Tipo de Voto con pestañas de traducción (ES + EN + FR) → Nombre: `aventuras/votaciones-traducciones-tipos.png`
- [GAMIFIER] Modal tras pulsar "+ Nueva traducción" con selector de idioma → Nombre: `aventuras/votaciones-nueva-traduccion.png`
- [WEBAPP] Pantalla de votar con los nombres de los Tipos de Voto en inglés (ejemplo de idioma alternativo) → Nombre: `webapp/votaciones-nombres-idioma.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** añadir sección en la página principal `votaciones.md`.
- **sidebar_position sugerido:** dentro de la página de Votaciones.
- **Tags sugeridos:** `votaciones`, `traducciones`, `idiomas`, `i18n`
- **¿Es página nueva o actualización?** Actualización de la página de Votaciones (ver FSD-2026-03-03-sistema-votaciones).

## 7. NOTAS TÉCNICAS

- El orden en que se cargan las traducciones no importa; se decide por idioma del Player en tiempo de juego.
- Si un Tipo de Voto no tiene traducción en ningún idioma, el sistema usa el nombre base (primera traducción añadida).
- Los Tipos de Voto creados por defecto (al activar Votaciones por primera vez) arrancan sin traducciones adicionales; hay que entrar a editarlos para cargar los idiomas que se necesiten.
