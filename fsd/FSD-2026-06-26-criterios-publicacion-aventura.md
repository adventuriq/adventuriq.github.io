---
feature_name: Criterios para publicar una Aventura
date: 2026-06-26
components: [API] [GAMIFIER]
docusaurus_path: docs/aventuras/publicar-aventura.md
---

## 1. RESUMEN DE LA FEATURE
- **Nombre:** Criterios para publicar una Aventura
- **Descripción:** Al publicar una Aventura ahora se comprueban los mismos requisitos que provocan su despublicación; si no se cumplen, la Aventura no se publica y se explica el motivo.
- **Componentes afectados:** API (monolito v4.41.2), Gamifier (v4.52.2)
- **Fecha de despliegue:** 2026-06-26

## 2. QUÉ PUEDE HACER EL USUARIO AHORA
### Desde el punto de vista del Game Master (Gamifier)
- Al cambiar el estado de una Aventura de **Borrador** a **Publicada** y guardar, el sistema valida automáticamente tres requisitos:
  1. **Licencia vigente:** la Aventura debe tener una Licencia asignada y no caducada.
  2. **Espacio dentro de lo permitido:** el espacio ocupado por la Aventura no puede superar el límite de su Licencia (o del contrato de tarifa plana asociado).
  3. **Tokens suficientes:** debe haber Tokens disponibles para que jueguen los players. **Las Aventuras con tarifa plana (Luna/Mundo) quedan exentas** de este requisito, porque no consumen Tokens.
- Si **no** se cumple alguno de los requisitos, la Aventura **permanece en Borrador** y aparece un aviso con el **motivo concreto** (falta de Licencia, Licencia caducada, espacio excedido o falta de Tokens). El resto de cambios del formulario sí se guardan.
- Un usuario **Administrador** puede publicar saltándose estas restricciones.

### Desde el punto de vista del Player (Webapp) — si aplica
- No aplica. La publicación es una acción exclusiva del Gamifier. (Para el Player, el efecto indirecto es que solo verá Aventuras que cumplen los requisitos.)

## 3. PREREQUISITOS DEL USUARIO
- Tener al menos una Aventura creada en estado Borrador.
- Tener una Licencia válida y vigente asignada a la Aventura.
- Tener Tokens disponibles (salvo que la Aventura esté bajo un contrato de tarifa plana).
- Que el contenido multimedia de la Aventura no supere el espacio permitido por su Licencia.

## 4. FLUJOS PASO A PASO

### Flujo Gamifier (si aplica)
1. Entrar en el detalle de la Aventura (`/#/evento/{id}`).
2. Cambiar el selector de estado de **Borrador** a **Publicada**.
3. Pulsar **Guardar**.
4. Resultado esperado:
   - Si cumple los 3 requisitos → la Aventura queda **Publicada** y se muestra "Aventura actualizada correctamente".
   - Si NO los cumple (y no eres Administrador) → la Aventura **sigue en Borrador** y aparece un aviso "Estado de la Aventura" con el motivo (p. ej. "No se puede publicar una Aventura sin una Licencia válida", "...sin Tokens", "...que supera el espacio permitido por su Licencia").

## 5. PANTALLAS PARA CAPTURAR
Lista explícita que Cowork usará para tomar capturas:
- [GAMIFIER] Detalle de Aventura con el selector de estado Borrador/Publicada → Nombre sugerido: aventuras/publicar-selector-estado.png
- [GAMIFIER] Aviso de bloqueo al intentar publicar sin Licencia → Nombre: aventuras/publicar-aviso-licencia.png
- [GAMIFIER] Aviso de bloqueo al intentar publicar sin Tokens → Nombre: aventuras/publicar-aviso-tokens.png
- [GAMIFIER] Aviso de bloqueo al intentar publicar por espacio excedido → Nombre: aventuras/publicar-aviso-espacio.png

## 6. UBICACIÓN EN DOCUSAURUS
- **Carpeta destino:** `docs/aventuras/`
- **Nombre del archivo:** `publicar-aventura.md`
- **sidebar_position sugerido:** (junto a la gestión del ciclo de vida de la Aventura)
- **Tags sugeridos:** aventura, publicar, licencia, tokens, espacio
- **¿Es página nueva o actualización?** Actualización (ampliar la sección de publicación de Aventuras; relacionarla con la página de despublicación / Mails del Sistema)

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)
- Los criterios de publicación son **exactamente los mismos** que provocan la despublicación automática de una Aventura. Si una Aventura se despublicó por uno de estos motivos, no podrá volver a publicarse hasta resolverlo (renovar Licencia, liberar espacio o adquirir Tokens).
- Las Aventuras con **contrato de tarifa plana (Luna/Mundo)** activo no necesitan Tokens para publicarse.
- El rol **Administrador** puede publicar ignorando todas las restricciones (uso interno/soporte).
- Edge case: la validación de espacio para tarifa plana **Mundo** considera el espacio global de todas las Aventuras del contrato; para **Luna** o Licencia independiente, el de la propia Aventura.
