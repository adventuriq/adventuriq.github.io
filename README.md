# AdventuriQ Docs

Documentación web del Manual de Usuario del Gamifier de AdventuriQ, construida con [Docusaurus](https://docusaurus.io/).

## Desarrollo local

```bash
cd adventuriq-docs
npm install
npm start
```

Se abrirá en `http://localhost:3000`.

## Build para producción

```bash
npm run build
```

Los archivos estáticos se generan en `build/`.

## Despliegue

### Opción 1: Servidor estático (Nginx, Apache, etc.)

Copia el contenido de `build/` al directorio raíz de tu servidor web.

### Opción 2: GitHub Pages

```bash
GIT_USER=<tu-usuario> npm run deploy
```

### Opción 3: Vercel / Netlify

Conecta el repositorio y configura:
- **Build command**: `npm run build`
- **Output directory**: `build`

## Estructura

```
docs/
├── intro.md                    # Página principal
├── warnings.md                 # Advertencias
├── conceptos-basicos.md        # Conceptos básicos
├── aventuras/                  # Configuración de Aventuras (12 docs)
├── misiones/                   # Configuración de Misiones (8 docs)
├── retos/                      # Tipos y configuración de Retos (10 docs)
├── recompensas/                # Recompensas (3 docs)
├── metricas/                   # Métricas y Game Board (2 docs)
└── tokens.md                   # Tokens y Licencias
static/img/                     # Imágenes extraídas del PDF
```

## Colores de marca

- Naranja: `#FF6B35`
- Gris oscuro: `#4A5859`
