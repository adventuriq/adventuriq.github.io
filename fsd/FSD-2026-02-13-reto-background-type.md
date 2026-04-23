---
feature_name: Tipo de fondo para Retos
date: 2026-02-13
components: [API] [GAMIFIER]
docusaurus_path: docs/retos/tipo-fondo-reto.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Tipo de fondo para Retos
- **Descripcion:** El Game Master puede elegir el tipo de fondo que se muestra detras de un Reto en la Webapp, igual que ya podia hacerlo en las Misiones. Tres opciones: **Color propio** (color elegible con paleta), **Imagen de cabecera del Reto** (usa la imagen del propio Reto) o **Color heredado de la Mision** (consistencia visual con la Mision contenedora). Se corrige ademas un bug que impedia guardar correctamente el tipo de fondo de la Mision.
- **Componentes afectados:** Gamifier (formulario del Reto) y API (persistencia)
- **Fecha de despliegue:** 2026-02-13

## 2. QUE PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- En el formulario de edicion de un **Reto** (cualquier tipo), ver y configurar el nuevo selector **"Tipo de fondo"** con tres opciones:
  - **Color propio**: aparece un color picker debajo para elegir el color exacto.
  - **Imagen de cabecera del Reto**: usa la imagen principal del Reto como fondo.
  - **Color heredado de la Mision**: hereda el color definido en la Mision padre.
- Cambiar de opcion en tiempo real: el color picker solo se muestra cuando la opcion es **Color propio**.
- Guardar el Reto y ver el fondo reflejado en la Webapp.
- En **Misiones**, guardar el tipo de fondo ya funciona correctamente (antes no se persistia un cambio).

## 3. PREREQUISITOS DEL USUARIO

- Tener una Aventura con al menos una Mision y un Reto.
- Conocer el comportamiento de tipos de fondo de la Mision (la de Reto replica ese mismo patron).

## 4. FLUJOS PASO A PASO

### Flujo Gamifier - Elegir color propio

1. Entrar a la edicion de un Reto.
2. Localizar el selector **"Tipo de fondo"** (justo antes de las imagenes del Reto).
3. Seleccionar **"Color propio"**.
4. Elegir el color con el color picker que aparece debajo.
5. Guardar.

### Flujo Gamifier - Usar la imagen de cabecera del Reto

1. Subir primero la imagen principal del Reto.
2. En el selector **"Tipo de fondo"**, elegir **"Imagen de cabecera del Reto"**.
3. Guardar.

### Flujo Gamifier - Heredar color de la Mision

1. Confirmar que la Mision contenedora tiene un color o fondo definido.
2. En el Reto, seleccionar **"Color heredado de la Mision"**.
3. Guardar.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Formulario del Reto con el selector "Tipo de fondo" desplegado mostrando las 3 opciones - Nombre: `retos/tipo-fondo-selector.png`
- [GAMIFIER] Opcion "Color propio" seleccionada con el color picker visible - Nombre: `retos/tipo-fondo-color-propio.png`
- [GAMIFIER] Opcion "Imagen de cabecera del Reto" seleccionada (color picker oculto) - Nombre: `retos/tipo-fondo-imagen.png`
- [WEBAPP] Reto renderizado con "Color propio" - Nombre: `retos/tipo-fondo-webapp-color.png`
- [WEBAPP] Reto renderizado con "Imagen de cabecera" - Nombre: `retos/tipo-fondo-webapp-imagen.png`

## 6. UBICACION EN DOCUSAURUS

- **Carpeta destino:** `docs/retos/`
- **Nombre del archivo:** integrar como seccion comun en las paginas de configuracion de Reto. Si existe una pagina "Configuracion comun del Reto", anadirlo alli.
- **sidebar_position sugerido:** no requiere entrada nueva.
- **Tags sugeridos:** `reto`, `estilo`, `fondo`, `color`, `mision`
- **Es pagina nueva o actualizacion?** **Actualizacion**. Anadir una seccion "Tipo de fondo" en la pagina de configuracion comun del Reto. Si ya existe la misma seccion en Misiones, duplicar el patron de documentacion.

## 7. NOTAS TECNICAS

- Esta opcion ya existia en Misiones; ahora se replica tal cual en Retos para coherencia.
- Bug corregido de camino: el tipo de fondo de la Mision ya se guarda correctamente al editar.
- Las tres opciones cubren los casos habituales: diseno muy personalizado (Color propio), reutilizar el arte del Reto (Imagen de cabecera) o mantener unidad visual con la Mision (Heredado).
