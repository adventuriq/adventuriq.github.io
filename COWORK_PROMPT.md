# COWORK_PROMPT.md — Prompt Maestro para generar documentación de AdventuriQ

> Este archivo contiene el prompt completo que se debe copiar y pegar en Cowork
> cada vez que se necesite documentar una nueva funcionalidad de AdventuriQ.
> Rellenar los campos entre [CORCHETES] antes de lanzar.

---

## Cómo usar este prompt

1. Claude Code termina una feature y genera el FSD (Feature Spec Document).
2. Abre Cowork en Claude Desktop.
3. Apunta Cowork a la carpeta del proyecto Docusaurus local.
4. Copia el prompt de abajo, rellena los campos entre [CORCHETES] y pégalo.
5. Deja que Cowork trabaje. Revisa el resultado antes de pushear.

---

## PROMPT (copiar desde aquí)

```
# TAREA: Documentar una funcionalidad de AdventuriQ para el manual de usuario

## FASE 0 — ENTENDER EL CONTEXTO (OBLIGATORIO ANTES DE HACER NADA)

Lee los siguientes archivos antes de cualquier otra acción. NO te los saltes:

1. `DOCS_STRUCTURE.md` — Es la biblia del manual. Contiene la taxonomía oficial
   de AdventuriQ, las convenciones de escritura, la estructura de carpetas,
   y las reglas que DEBES seguir al generar contenido.

2. `sidebars.ts` — Contiene la estructura real de navegación del manual.
   Úsalo para saber exactamente dónde insertar el nuevo contenido y qué
   sidebar_position usar sin colisionar con páginas existentes.

3. Explora la carpeta `docs/` — Lista su contenido para conocer las páginas
   que ya existen. NUNCA dupliques contenido que ya esté documentado.

Una vez hayas leído los tres, confirma que los has entendido resumiendo:
- Cuántas secciones principales tiene el manual
- Qué convenciones de escritura aplican
- Dónde va a ir el nuevo contenido según el FSD

## REGLAS ABSOLUTAS (no negociables)

Antes de hacer cualquier captura o generar cualquier contenido, graba
estas reglas en tu comportamiento para toda la sesión:

### Regla 1: Entorno de test SIEMPRE

- SOLO trabajas sobre URLs que contengan 'test' o 'staging'.
- Si la URL proporcionada parece de producción, DETENTE y pide confirmación.
- Nunca crees, edites o elimines datos en producción.

### Regla 2: No-destrucción del contenido existente

- NUNCA reescribas un archivo .md existente por completo.
- SOLO añade secciones nuevas, completa secciones vacías, o reemplaza
  imágenes genéricas por capturas específicas.
- Si detectas información obsoleta, marca con comentario HTML:
  <!-- REVISAR: contenido posiblemente obsoleto -->
  y déjalo para que el humano decida.

### Regla 3: Traducción UI → manual

La UI del Gamifier puede mostrar términos técnicos que NO se usan en el
manual. Usa el glosario de DOCS_STRUCTURE.md sección 6 para traducir:

- Si la UI dice 'evento', en el manual escribe 'Aventura'.
- Si la UI dice 'prueba', en el manual escribe 'Reto'.
- Si la UI dice 'itinerario', en el manual escribe 'Misión'.
- Etc.

### Regla 4: Indicador de rol obligatorio

Cada página nueva o actualizada DEBE tener al principio un admonition
:::info con el icono de rol correspondiente y la lista de quién puede
hacer esa acción. Ver DOCS_STRUCTURE.md sección 4 para la convención.

### Regla 5: Tipos de Reto deprecados

Si encuentras en el Gamifier referencias a los tipos con ID 3, 5, 6 o 7,
IGNÓRALOS. Están deprecados y no se documentan. Los tipos vigentes son
exactamente 10: 1, 2, 4, 8, 9, 10, 11, 12, 13, 14.

### Regla 6: Consultar el manual histórico como referencia pedagógica

El repo tiene un archivo `reference/manual-original-v2.md` que es la conversión 
a Markdown del PDF histórico del manual de AdventuriQ (versión 2.0.2, circa 2022).

Cuando documentes una página, consulta ese archivo para extraer:

- **Orden pedagógico**: cómo se explicaba la funcionalidad originalmente.
- **Lenguaje y tono**: expresiones, analogías, forma de dirigirse al usuario.
- **Conceptos clave**: qué elementos se consideraban fundamentales explicar.
- **Diagramas y metáforas**: qué se usaba para ilustrar conceptos.

REGLAS ESTRICTAS sobre el uso del manual histórico:

- **NUNCA** asumas que lo que dice el manual histórico es lo que hay en el 
  Gamifier actual. El manual está desactualizado.
- **NUNCA** copies texto literal del manual histórico. Úsalo como inspiración, 
  pero redacta siempre con las convenciones actuales del manual nuevo (tuteo, 
  admonitions, emojis en títulos, etc.).
- **NUNCA** documentes los 4 tipos de Reto deprecados (ni los 5 nuevos que no 
  aparecen en el PDF sin capturas reales previas).
- **SIEMPRE** cruza la información del manual histórico con capturas REALES 
  del Gamifier actual. Si hay discrepancia, manda lo que ves en la plataforma.
- Si detectas que una funcionalidad del manual histórico **ya no existe**, NO la 
  documentes. Si detectas que existe **pero ha cambiado**, documenta la versión 
  actual.

### Regla 7: Archivos de configuración críticos

Los siguientes archivos NO deben ser modificados por Cowork salvo 
autorización EXPLÍCITA en cada caso:

- docusaurus.config.ts
- sidebars.ts  
- package.json
- tsconfig.json
- .github/workflows/*.yml

Si detectas que alguno parece "roto" o "truncado":
1. NO intentes repararlo.
2. Pausa y pregúntale al humano.
3. Muéstrale exactamente qué viste y qué te hace pensar que está 
   roto.

Los falsos positivos son frecuentes y las consecuencias de 
"reparar" mal estos archivos son graves.

Solo después de este resumen, pasa a la Fase 1.


## FASE 1 — LEER EL FSD (Feature Spec Document)

Lee el archivo FSD en: [RUTA_AL_FSD]

Ejemplo: docs/fsd/FSD-2026-04-16-duplicar-aventura.md

Después de leerlo, identifica:
- ¿Qué componentes están afectados? [API] [GAMIFIER] [WEBAPP]
- ¿Cuántas pantallas hay que capturar?
- ¿En qué carpeta de docs/ va el contenido final?
- ¿Es una página nueva o una actualización de una existente?


## FASE 2 — CAPTURAS DEL GAMIFIER (solo si el FSD indica [GAMIFIER])

Credenciales del Gamifier:
- URL: [URL_GAMIFIER]
- Usuario: [USUARIO_TEST]
- Contraseña: [CONTRASEÑA_TEST]

Instrucciones:
1. Abre el navegador y navega a la URL del Gamifier.
2. Inicia sesión con las credenciales proporcionadas.
3. Para cada pantalla listada en la sección "PANTALLAS PARA CAPTURAR" del FSD
   con etiqueta [GAMIFIER]:
   a. Navega hasta la pantalla indicada siguiendo los pasos del FSD.
   b. Si el FSD indica una acción previa (ej. "crear una Aventura de prueba"),
      realízala primero.
   c. Toma una captura de pantalla limpia (sin barras de navegador si es posible).
   d. Guarda la captura en: static/img/gamifier/[seccion]/[nombre-sugerido-en-FSD].png

IMPORTANTE sobre las capturas:
- Resolución consistente: usa siempre la misma ventana de navegador.
- Sin datos sensibles: verifica que no aparezcan datos de clientes reales.
- Nombres descriptivos en minúsculas con guiones: crear-aventura-formulario.png


## FASE 3 — CAPTURAS DE LA WEBAPP (solo si el FSD indica [WEBAPP])

URL de la Webapp: [URL_WEBAPP]
Token/código de acceso: [TOKEN_TEST] (si aplica)

⚠️  IMPORTANTE: La Webapp está hecha en Flutter y NECESITA JavaScript al 100%.
    DEBES usar un navegador completo con JavaScript habilitado.
    NO uses modo headless para la Webapp.

Instrucciones:
1. Abre la URL de la Webapp en un navegador con JavaScript habilitado.
2. Si necesitas acceder a una Aventura específica, usa el token/código de test.
3. Para cada pantalla del FSD con etiqueta [WEBAPP]:
   a. Navega por el flujo indicado.
   b. Toma capturas preferiblemente en formato móvil (viewport de ~400px de ancho),
      ya que la Webapp se usa mayoritariamente desde móvil.
   c. Guarda en: static/img/webapp/[seccion]/[nombre-sugerido-en-FSD].png


## FASE 4 — GENERAR EL DOCUMENTO .MD

Con las capturas tomadas y el FSD como referencia funcional, genera el archivo
.md final. Sigue ESTRICTAMENTE estas reglas (todas vienen de DOCS_STRUCTURE.md):

### Frontmatter

```yaml
---
sidebar_position: [número que no colisione con los existentes en la carpeta]
title: '[Título orientado al usuario, no técnico]'
description: '[Una frase descriptiva]'
tags: [gamifier|webapp, sección, nivel]
last_updated: [YYYY-MM-DD de hoy]
---
```

### Tono y estilo

- TUTEO siempre (tú, tu, contigo).
- Dirigido al Game Master (salvo si es contenido de Webapp para Player).
- DIRECTO y ACCIONABLE: "Haz clic en...", "Escribe...", "Selecciona...".
- NUNCA uses jerga técnica: nada de API, endpoints, JSON, backend, deploy.
- Si hay limitaciones, explícalas como notas prácticas, no como bugs.

### Estructura del documento

1. Título principal H1 (coincide con title del frontmatter).
2. Introducción: 1-2 frases explicando qué es y para qué sirve.
3. Pasos numerados con capturas intercaladas justo después del paso que ilustran.
4. Admonitions donde aplique:
   - `:::tip` para consejos útiles
   - `:::note` para info complementaria
   - `:::caution` para advertencias
   - `:::danger` para avisos críticos irreversibles
5. Si hay prerequisitos, ponerlos al principio en un `:::note Antes de empezar`.

### Inserción de imágenes

Formato exacto:
```markdown
![Descripción alt clara y útil](/img/gamifier/seccion/nombre.png)
```

- La descripción alt DEBE ser descriptiva (no "imagen1" ni "captura").
- Bueno: "Formulario de creación de Aventura con campos obligatorios resaltados"
- Malo: "Captura del Gamifier"

### Vocabulario obligatorio

Usa SIEMPRE los términos oficiales de AdventuriQ tal como aparecen en
DOCS_STRUCTURE.md sección 2. Los más importantes:

- Aventura (no "experiencia", "juego" ni "actividad")
- Misión (no "módulo", "capítulo" ni "sección")
- Reto (no "prueba", "pregunta" ni "ejercicio", salvo en contexto descriptivo)
- Objeto Digital (no "item", "elemento" ni "asset")
- Game Master (no "administrador", "usuario" ni "creador")
- Player (no "jugador" ni "participante", salvo en contexto narrativo)
- Bitácora, Muro, Galería, Clasificación, Baúl (siempre con mayúscula inicial)
- Gamifier (no "panel de control", "admin" ni "backend")
- Webapp (no "app", "aplicación" ni "frontend")

### Guarda el archivo en:

[RUTA_DOCUSAURUS]/docs/[carpeta-indicada-en-FSD]/[nombre-feature].md


## FASE 5 — VERIFICACIÓN

Antes de dar por terminado:

1. ✅ Verifica que TODAS las imágenes referenciadas en el .md existen en static/img/.
2. ✅ Verifica que el frontmatter es YAML válido.
3. ✅ Verifica que sidebar_position no colisiona con otras páginas de la misma carpeta.
4. ✅ Verifica que los términos usados coinciden con la taxonomía oficial.
5. ✅ Verifica que no has incluido información técnica innecesaria.
6. ✅ Verifica que no hay datos sensibles en las capturas (nombres reales, emails, etc.).

Genera un resumen final con:
- Archivos creados (ruta completa)
- Número de capturas tomadas
- Sección del manual donde se integra
- sidebar_position usado
- Cualquier problema encontrado o decisión tomada
```

---

## VARIANTE: Documentar una página existente SIN FSD

Si no hay FSD (porque estamos documentando funcionalidad existente, no nueva),
usa este bloque en lugar de la Fase 1:

```
## FASE 1 (alternativa) — IDENTIFICAR QUÉ DOCUMENTAR

No hay FSD disponible. En su lugar:

1. Lee la página existente en docs/[ruta-de-la-pagina].md
2. Si la página está vacía o es un placeholder, necesitas:
   a. Identificar qué funcionalidad del Gamifier o Webapp corresponde a esta página.
   b. Explorar esa funcionalidad navegando por la plataforma.
   c. Documentarla de cero siguiendo las convenciones de DOCS_STRUCTURE.md.
3. Si la página tiene contenido parcial:
   a. Completa las secciones que falten.
   b. Añade capturas si no tiene.
   c. Verifica que el tono y formato cumplen las convenciones.

Continúa con la Fase 2 (capturas) y después Fase 4 (generar contenido).
```

---

## VARIANTE: Actualizar una página existente por cambio en feature

```
## FASE 1 (variante actualización) — ENTENDER QUÉ CAMBIÓ

1. Lee el FSD en: [RUTA_AL_FSD]
2. Lee la página existente en docs/[ruta-de-la-pagina].md
3. Identifica qué secciones de la página existente están afectadas por el cambio.
4. NO reescribas toda la página — solo actualiza lo que ha cambiado.
5. Si hay capturas que ya no reflejan la realidad:
   a. Toma capturas nuevas.
   b. Reemplaza las antiguas en static/img/ manteniendo el mismo nombre de archivo.
   c. Si cambias el nombre, actualiza todas las referencias en el .md.

Continúa con Fase 2, 3, 4 y 5 normalmente.
```

---

## Notas para Mike

### Primera vez: supervisar a Cowork

Las primeras 2-3 veces que uses este prompt, quédate mirando lo que hace Cowork.
Es probable que necesites intervenir si:
- El Gamifier tiene algún flujo complejo que Cowork no navega bien.
- Las capturas salen cortadas o con elementos no deseados.
- La Webapp tarda en cargar (Flutter + computer use puede ser lento).

Después de esas primeras veces, ya puedes confiar más en el modo autónomo.

### Mantener DOCS_STRUCTURE.md actualizado

Cada vez que añadas una nueva sección al manual, actualiza la sección 3
(Estructura de carpetas) del DOCS_STRUCTURE.md. Si no lo haces, Cowork
podría generar contenido en carpetas que ya no existen o que se renombraron.

### El FSD es el puente

Sin FSD, Cowork tiene que adivinar qué documentar. Con FSD, tiene instrucciones
precisas. Siempre que puedas, haz que Claude Code genere el FSD al terminar
una feature. Es la inversión de 2 minutos que ahorra 30 minutos de correcciones.

---

*Última actualización: 2026-04-16 — Versión 1.0*
