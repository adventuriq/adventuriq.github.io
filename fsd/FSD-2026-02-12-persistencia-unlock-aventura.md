---
feature_name: Persistencia del desbloqueo de Aventura
date: 2026-02-12
components: [API] [WEBAPP]
docusaurus_path: docs/aventuras/persistencia-desbloqueo.md
---

## 1. RESUMEN DE LA FEATURE

- **Nombre:** Persistencia del desbloqueo de Aventura
- **Descripcion:** Cuando un Player desbloquea una Aventura (sea por codigo de acceso, codigo QR o Token de acceso unico), el sistema recuerda ese desbloqueo. En visitas posteriores entra directamente al listado de Misiones sin volver a pedirle el codigo o Token. Antes, cada sesion volvia a exigir la validacion desde cero, lo que resultaba molesto en Aventuras largas que se juegan en varios momentos.
- **Componentes afectados:** API y Webapp
- **Fecha de despliegue:** 2026-02-12

## 2. QUE PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Player (Webapp)

- Introducir **una sola vez** el codigo de acceso, el codigo QR o el Token de una Aventura. A partir de ese momento, puede cerrar la app, apagar el movil, volver dias despues y entrar directo a las Misiones.
- Si cambia de dispositivo o vuelve a iniciar sesion con otro usuario, el desbloqueo no se transfiere: cada cuenta guarda su propio historial.

### Desde el punto de vista del Game Master (Gamifier)

- No hay cambios en el Gamifier. La proteccion de acceso funciona igual que antes desde su lado.
- En el Game Board se sigue viendo cuando un Player valido su codigo/Token por primera vez (fecha de desbloqueo).

## 3. PREREQUISITOS DEL USUARIO

- Ser un **Player** con cuenta en AdventuriQ.
- Jugar una Aventura protegida por **Codigo de acceso**, **QR** o **Token de acceso unico**.

## 4. FLUJOS PASO A PASO

### Flujo Webapp - Primera vez en una Aventura bloqueada

1. Abrir AdventuriQ y seleccionar la Aventura.
2. Pulsar **"Adelante"**.
3. El sistema pide el codigo, el QR o el Token.
4. Introducirlo. Si es correcto, se entra al listado de Misiones.
5. El desbloqueo queda **guardado automaticamente** en ese momento (el Player no hace nada extra).

### Flujo Webapp - Siguientes veces

1. Abrir AdventuriQ y seleccionar la misma Aventura.
2. Pulsar **"Adelante"**.
3. **No se pide ningun codigo**: entra directo al listado de Misiones.

## 5. PANTALLAS PARA CAPTURAR

- [WEBAPP] Primera entrada - pantalla de codigo/Token visible - Nombre: `webapp/desbloqueo-primera-vez.png`
- [WEBAPP] Entrada posterior - directa al listado de Misiones sin pedir codigo - Nombre: `webapp/desbloqueo-siguientes-veces.png`

## 6. UBICACION EN DOCUSAURUS

- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `persistencia-desbloqueo.md` o bien integrar como seccion dentro de las paginas existentes de "Codigo de acceso" y "Token de acceso unico".
- **sidebar_position sugerido:** inmediatamente despues de las paginas de metodos de acceso.
- **Tags sugeridos:** `aventura`, `acceso`, `player`, `desbloqueo`, `persistencia`
- **Es pagina nueva o actualizacion?** Preferentemente **actualizacion** de las paginas de acceso (incluir una nota "Una vez desbloqueada, no se vuelve a pedir" en cada metodo), o pagina corta dedicada si Cowork lo prefiere.

## 7. NOTAS TECNICAS

- El desbloqueo se guarda **por Player y por Aventura**. Cambiar de dispositivo manteniendo la misma cuenta no obliga a repetir el proceso (los datos viven en el servidor).
- Si el Game Master desactiva la proteccion de acceso y la vuelve a activar, los Players que ya entraron una vez siguen sin verse pedir el codigo/Token.
- La feature se apoya en un campo de fecha de desbloqueo ya existente en la base de datos que hasta ahora no se rellenaba.
