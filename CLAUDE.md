# CLAUDE.md — Repositorio de Documentación AdventuriQ

## Propósito de este repositorio

Este repo contiene el manual de usuario final de AdventuriQ, construido con
Docusaurus y publicado en https://docs.adventuriq.com.

Es el cuarto repo del proyecto AdventuriQ (los otros tres son API, Gamifier
y Webapp). **Este repo NO contiene código de producto, solo documentación.**

## Stack técnico

- Docusaurus v3.9.2 con TypeScript
- Node.js 20+ requerido
- GitHub Actions para build y deploy automático
- Rama `source` = código fuente (aquí trabajamos)
- Rama `main` = sitio compilado (automática, no tocar)

## Qué NO hacer en este repo

- NO desarrollar funcionalidad de producto aquí.
- NO modificar directamente la rama `main`.
- NO publicar info técnica de la API en el manual de usuario.
- NO inventar términos nuevos — usar la taxonomía oficial (ver DOCS_STRUCTURE.md).

## Qué SÍ hacer en este repo

- Generar y mantener Feature Spec Documents (FSDs) en `fsd/`.
- Trabajar sobre la rama `source` y pushear para desplegar.
- Respetar las convenciones de DOCS_STRUCTURE.md.

## Workflow de documentación — TU ROL

Cuando termines de desarrollar y desplegar una funcionalidad en los repos
de API, Gamifier o Webapp, tu trabajo NO acaba ahí. Debes generar un
Feature Spec Document (FSD) que servirá de input para que Cowork genere
el manual de usuario.

### Dónde guardar el FSD

Guarda el archivo en: `fsd/FSD-{YYYY-MM-DD}-{nombre-feature}.md`

(Desde la raíz de este repo de documentación)

### Estructura obligatoria del FSD

```markdown
---
feature_name: [Nombre corto de la feature]
date: YYYY-MM-DD
components: [API] [GAMIFIER] [WEBAPP]   # Marca los que apliquen
docusaurus_path: docs/[carpeta]/[nombre-feature].md
---

## 1. RESUMEN DE LA FEATURE
- **Nombre:** [nombre funcional, no técnico]
- **Descripción:** [una frase orientada al usuario, no técnica]
- **Componentes afectados:** [lista]
- **Fecha de despliegue:** YYYY-MM-DD

## 2. QUÉ PUEDE HACER EL USUARIO AHORA
### Desde el punto de vista del Game Master (Gamifier)
- [Capacidad 1]
- [Capacidad 2]

### Desde el punto de vista del Player (Webapp) — si aplica
- [Capacidad 1]

## 3. PREREQUISITOS DEL USUARIO
- [Ej: "necesitas tener al menos una Aventura creada"]
- [Ej: "necesitas tokens disponibles"]

## 4. FLUJOS PASO A PASO

### Flujo Gamifier (si aplica)
1. Ir a [URL/ruta concreta dentro del Gamifier]
2. [Acción]
3. [Resultado esperado]

### Flujo Webapp (si aplica)
1. [Paso concreto]
2. [...]

## 5. PANTALLAS PARA CAPTURAR
Lista explícita que Cowork usará para tomar capturas:
- [GAMIFIER] Pantalla X → Nombre sugerido: seccion/nombre-descriptivo.png
- [GAMIFIER] Pantalla Y (tras acción Z) → Nombre: seccion/otro-nombre.png
- [WEBAPP] Pantalla del Player → Nombre: seccion/webapp-nombre.png

## 6. UBICACIÓN EN DOCUSAURUS
- **Carpeta destino:** `docs/[carpeta-correspondiente]/`
- **Nombre del archivo:** `[nombre-feature].md`
- **sidebar_position sugerido:** [número]
- **Tags sugeridos:** [lista]
- **¿Es página nueva o actualización?** [Nueva | Actualización]

## 7. NOTAS TÉCNICAS (solo si relevante para el manual)
- [Limitaciones conocidas]
- [Dependencias de configuración]
- [Edge cases que el usuario debe conocer]
```

## Contexto adicional

- **DOCS_STRUCTURE.md** — Contiene la taxonomía oficial y convenciones.
  Consúltalo antes de generar FSDs para asegurar que usas los términos correctos.

- **COWORK_PROMPT.md** — Es el prompt que el humano usa con Cowork.
  No necesitas modificarlo, pero te da idea de qué hará Cowork con tu FSD.

## Comandos útiles

```bash
# Levantar el sitio en local para previsualizar
npm start

# Compilar para verificar que no hay errores antes de pushear
npm run build

# Ver la rama activa
git branch

# Push al deploy (rama source)
git push origin source
```