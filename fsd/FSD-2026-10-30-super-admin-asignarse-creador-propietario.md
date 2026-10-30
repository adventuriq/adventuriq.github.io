---
feature_name: El Super Admin puede asignarse como Creador o Propietario de una Aventura
date: 2026-10-30
components: [GAMIFIER]
publicar: no   # Afecta solo al Super Admin = interno, ver aviso bajo el frontmatter
docusaurus_path: ninguno   # No se publica; no hay página destino
---

> ## ⛔ NO PUBLICAR — documentación interna
>
> **Este cambio solo afecta al Super Admin.** Siguiendo la decisión de Mike
> (2026-09-25) de no documentar las herramientas internas del Super Admin en
> el manual público, este FSD se conserva solo como especificación interna.
> **Cowork no debe generar ni modificar ninguna página a partir de él.** Un
> Game Master no nota ninguna diferencia.


## 1. RESUMEN DE LA FEATURE

- **Nombre:** El Super Admin aparece en los selectores de Creador y Propietario
- **Descripción:** Al cambiar el Creador o el Propietario de una Aventura desde el listado de Aventuras, el Super Admin sale ahora el primero de la lista y puede asignársela a sí mismo.
- **Componentes afectados:** Gamifier (v4.71.2, fix). La API y la Webapp no cambian.
- **Fecha de despliegue:** 2026-10-30

Es una corrección (fix) de las acciones **Asignar Game Designer** (cambia el
Creador) y **Asignar Propietario** del listado de Aventuras. No añade pantallas
nuevas.

## 2. QUÉ PUEDE HACER EL USUARIO AHORA

### Desde el punto de vista del Super Admin (Gamifier)

- Asignarse a sí mismo como **Creador** de cualquier Aventura. Antes aparecía en
  la lista, pero en la última página (la lista se ordena por fecha de alta, de
  más reciente a más antigua), así que en la práctica no se encontraba.
- Asignarse a sí mismo como **Propietario** de cualquier Aventura. Antes no
  aparecía nunca: la lista solo incluye Game Masters.
- En los dos selectores ya no salen usuarios repetidos (antes un usuario con
  varios roles aparecía una vez por cada rol).

### Desde el punto de vista del Game Master (Gamifier)

- Sin cambios. Su lista de Creadores sigue siendo la de sus propios Game
  Designers.

### Desde el punto de vista del Player (Webapp)

- Sin cambios.

## 3. PREREQUISITOS DEL USUARIO

- Iniciar sesión en el Gamifier como Super Admin.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier

1. Ir al listado de Aventuras (`#/eventos`).
2. En la Aventura deseada, pulsar el botón de intercambio junto a **Creador**
   (o junto a **Propietario**).
3. En la ventana que se abre, el Super Admin aparece en la **primera fila**.
4. Seleccionarlo (clic + **Seleccionar**, o doble clic).
5. El listado se actualiza y la Aventura muestra al Super Admin como Creador
   (o Propietario).

## 5. PANTALLAS PARA CAPTURAR

Ninguna (no se publica).

## 6. UBICACIÓN EN DOCUSAURUS

- **Carpeta destino:** ninguna
- **Nombre del archivo:** ninguno
- **sidebar_position sugerido:** n/a
- **Tags sugeridos:** n/a
- **¿Es página nueva o actualización?** Ninguna: no se publica

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)

- Una Aventura cuyo Propietario es el Super Admin queda **exenta del cobro de
  Tokens y del cron de despublicación** (el Propietario es quien paga). Usarlo
  solo para Aventuras internas o de demostración.
- El cambio es solo de interfaz: los endpoints de la API ya aceptaban a un Admin
  como destino de ambas asignaciones.
