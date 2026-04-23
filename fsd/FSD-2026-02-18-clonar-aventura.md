---
feature_name: Clonar Aventura
date: 2026-02-18
components: [API] [GAMIFIER]
docusaurus_path: docs/aventuras/clonar-aventura.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Clonar Aventura
- **Descripcion:** El Game Master puede **duplicar** una Aventura existente con un clic desde el listado, eligiendo una de sus licencias disponibles como destino. El sistema crea una copia completa con todas sus Misiones, Retos, Recompensas, Puntos de Interes, Clanes y archivos multimedia. La copia aparece con el titulo original seguido del sufijo **"(Copia)"** y lista para editar, sin tocar la Aventura original.
- **Componentes afectados:** Gamifier (UI del listado y modal de duplicacion) y API (endpoint de clonado)
- **Fecha de despliegue:** 2026-02-18

## 2. QUE PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Game Master (Gamifier)

- Ver en el listado de Aventuras un nuevo boton **"Duplicar"** (junto a los botones de accion habituales) en cada fila.
- Pulsarlo para abrir un modal **"Duplicar Aventura"** que muestra las licencias disponibles en su cuenta.
- Cada licencia se representa con una tarjeta visual: icono segun tipo (Basica, Basica Equipo, Basica Anual, Basica Anual Equipo) y etiqueta de temporalidad (Mensual/Anual).
- Elegir la licencia a la que asignar la copia y confirmar.
- Durante el proceso, ver un popup de espera con un **gif animado** para que sea evidente que el sistema esta trabajando.
- Al terminar, recibir un mensaje de exito. La nueva Aventura aparece en el listado con el titulo `<titulo original> (Copia)` y sus Misiones, Retos, Recompensas, Puntos de Interes, Clanes y archivos multimedia listos.
- La Aventura original no cambia: puede seguir jugandose, editarse o archivarse.

**Que NO se copia (por diseno):**

- Los Players inscritos y sus estados de partida.
- Las imagenes que los Players habian compartido (carpeta `player_images/`).
- Los Tokens de acceso por Player (se deben generar nuevos para la copia si se usan).

## 3. PREREQUISITOS DEL USUARIO

- Ser Game Master.
- Disponer de **al menos una licencia libre** en la cuenta. Si no hay licencias libres, el modal aparecera vacio y no se podra clonar.
- Tener una Aventura origen creada.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier - Clonar una Aventura

1. Entrar al listado de Aventuras.
2. En la fila de la Aventura a duplicar, pulsar el boton **"Duplicar"**.
3. En el modal **"Duplicar Aventura"**, revisar las licencias disponibles mostradas como tarjetas.
4. Pulsar la tarjeta de la licencia deseada para seleccionarla y pulsar **"Continuar"**.
5. Esperar unos segundos mientras el sistema copia todos los contenidos (popup con gif animado).
6. Al terminar, aparece el mensaje **"Aventura duplicada correctamente"**.
7. La nueva Aventura `<titulo> (Copia)` esta disponible en el listado.
8. Entrar a editarla para renombrarla y personalizar lo que quieras.

### Flujo Gamifier - Sin licencias disponibles

1. Pulsar **"Duplicar"**.
2. El modal se abre vacio o con todas las licencias ya en uso.
3. Cerrar el modal y adquirir una licencia adicional antes de reintentar.

## 5. PANTALLAS PARA CAPTURAR

- [GAMIFIER] Listado de Aventuras mostrando el boton "Duplicar" en la fila - Nombre: `aventuras/clonar-boton-listado.png`
- [GAMIFIER] Modal "Duplicar Aventura" con tarjetas de licencias - Nombre: `aventuras/clonar-modal-licencias.png`
- [GAMIFIER] Tarjeta de licencia seleccionada (con icono segun tipo) - Nombre: `aventuras/clonar-licencia-seleccionada.png`
- [GAMIFIER] Popup de espera con gif animado mientras se clona - Nombre: `aventuras/clonar-espera.png`
- [GAMIFIER] Mensaje de exito tras clonar - Nombre: `aventuras/clonar-exito.png`
- [GAMIFIER] Listado de Aventuras con la nueva "(Copia)" visible - Nombre: `aventuras/clonar-resultado-listado.png`

## 6. UBICACION EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `clonar-aventura.md`
- **sidebar_position sugerido:** tras "crear-aventura" y antes de "editar-aventura", o como subseccion de "gestionar-aventuras".
- **Tags sugeridos:** `aventura`, `duplicar`, `clonar`, `licencia`, `gestion`
- **Es pagina nueva o actualizacion?** **Nueva**.

## 7. NOTAS TECNICAS

- La clonacion consume **una licencia** de la cuenta del Game Master (la que elige en el modal).
- Todos los idiomas (traducciones) de la Aventura original se copian. El sufijo **" (Copia)"** se anade solo al **titulo** en cada idioma, no a las descripciones ni al resto de textos.
- Las **Imagenes y medios** (carpeta `user_images/` de la Aventura) se copian integras, pero la subcarpeta `player_images/` (contribuciones de Players) se omite intencionadamente para que la copia empiece limpia.
- Tras clonar, **recordar actualizar cualquier configuracion sensible**: Tokens de acceso, codigos, fechas de vigencia, etc. La copia no hereda Tokens ni sesiones iniciadas.
- El proceso puede tardar segundos a decenas de segundos segun el tamano de la Aventura (numero de Misiones/Retos y volumen de archivos multimedia).
