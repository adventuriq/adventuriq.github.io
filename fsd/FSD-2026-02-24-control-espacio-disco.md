---
feature_name: Control de espacio de almacenamiento por Aventura
date: 2026-02-24
components: [API] [GAMIFIER]
docusaurus_path: docs/aventuras/almacenamiento-aventura.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Límite de almacenamiento por Aventura según Licencia
- **Descripción:** Cada Aventura tiene ahora un límite de espacio de almacenamiento (en MB) asociado a su Licencia. Cuando un Game Master intenta subir una imagen, un audio o un vídeo desde cualquier formulario del Gamifier (Aventura, Misión, Reto, Objeto Digital, POI, Clan, Biblioteca de Medios), se comprueba antes si la Aventura ha alcanzado el límite. Si está lleno, la subida se bloquea y se muestra un aviso explicativo.
- **Componentes afectados:** API, Gamifier
- **Fecha de despliegue:** 2026-02-24

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Tener la tranquilidad de que no podrá superar accidentalmente el espacio contratado con la Licencia de la Aventura.
- Recibir un aviso claro ("Has alcanzado el límite de almacenamiento de tu Licencia") cuando la Aventura esté llena y no pueda aceptar más archivos.
- Saber inmediatamente qué Aventura está llena: el aviso aparece en el mismo formulario desde el que se intenta la subida (Aventura, Misión, Reto, Objeto Digital, POI, Clan o Biblioteca de Medios).

## 3. PREREQUISITOS DEL USUARIO

- Tener una Licencia de Aventura asignada. El límite se toma de la Licencia más reciente.
- Los Admin no están sujetos a este límite.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier — Subir un archivo dentro del límite

1. Abre la Aventura (o la Misión/Reto/Objeto/POI/Clan/Biblioteca de Medios).
2. Selecciona un archivo para subir en cualquier campo de imagen, audio o vídeo.
3. Si el espacio ocupado + el del nuevo archivo no supera el límite, la subida continúa normalmente.
4. Tras la subida exitosa, el espacio ocupado se recalcula para las siguientes subidas.

### Flujo Gamifier — Intentar subir cuando el espacio está lleno

1. Abre la Aventura (o cualquier formulario con campos de subida).
2. Selecciona un archivo.
3. En lugar de iniciarse la subida, aparece un aviso con:
   - Título: **"Límite de almacenamiento alcanzado"**.
   - Mensaje: "Has alcanzado el límite de almacenamiento de tu Licencia. Elimina archivos de esta Aventura o amplía tu Licencia para continuar."
4. Libera espacio borrando archivos antiguos o contacta para ampliar tu Licencia.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Aviso "Límite de almacenamiento alcanzado" al intentar subir un archivo → Nombre: `aventuras/almacenamiento-lleno-aviso.png`
- [GAMIFIER] Edición de Aventura con campos de subida de imagen/audio/vídeo → Nombre: `aventuras/campos-subida-aventura.png`
- [GAMIFIER] Biblioteca de Medios al intentar subir un archivo cuando la Aventura está llena → Nombre: `aventuras/biblioteca-medios-lleno.png`

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `almacenamiento-aventura.md`
- **sidebar_position sugerido:** cerca de las páginas de Licencias y Tokens.
- **Tags sugeridos:** `aventuras`, `licencias`, `almacenamiento`, `limites`
- **¿Es página nueva o actualización?** Nueva. Enlazar desde la página de "Licencias" y desde la de "Biblioteca de Medios".

## 7. NOTAS TÉCNICAS

- Formularios cubiertos por la comprobación: Aventura, Misión, Reto (cualquier tipo), Objeto Digital (de Misión y de Reto), POI, Clan y Biblioteca de Medios.
- Tras liberar espacio (eliminando archivos o aumentando el límite de tu Licencia), recarga la pantalla para que la nueva medición surta efecto en las siguientes subidas.
- La comprobación se hace en el navegador y en el servidor para mayor seguridad; incluso si se intenta forzar desde el navegador, el servidor también protege el límite.
