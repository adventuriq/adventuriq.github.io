import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    'warnings',
    'conceptos-basicos',
    'tokens',
    {
      type: 'category',
      label: '🎮 Aventuras',
      items: [
        'aventuras/crear-aventura',
        'aventuras/configuracion',
        'aventuras/publicar-aventura',
        'aventuras/acceder-a-una-aventura',
        'aventuras/bitacora',
        'aventuras/publicacion-fechas',
        'aventuras/game-pin-bloqueos',
        'aventuras/visibilidad-controles',
        'aventuras/imagenes',
        'aventuras/idiomas-traducciones',
        'aventuras/contenido-descripcion',
        'aventuras/condiciones-finalizacion',
        'aventuras/mapas',
        'aventuras/equipos',
        'aventuras/retos-aventura',
        'aventuras/poi',
      ],
    },
    {
      type: 'category',
      label: '📋 Misiones',
      items: [
        'misiones/configuracion',
        'misiones/bloqueos-visibilidad',
        'misiones/contenido-imagenes',
        'misiones/descripcion',
        'misiones/mapas',
        'misiones/recompensas',
        'misiones/llamada',
        'misiones/enlazar-retos',
      ],
    },
    {
      type: 'category',
      label: '⚔️ Retos',
      items: [
        'retos/tipos-de-reto',
        'retos/estructura-comun',
        'retos/cabecera',
        'retos/bloqueos-mapa',
        'retos/recompensas',
        'retos/pregunta-respuesta',
        'retos/llamada-accion',
        'retos/respuesta-libre',
        'retos/compartir-foto',
        'retos/preguntas-encadenadas',
      ],
    },
    {
      type: 'category',
      label: '🎁 Recompensas',
      items: [
        'recompensas/nivel-mision',
        'recompensas/nivel-reto',
        'recompensas/configuracion-contenido',
      ],
    },
    {
      type: 'category',
      label: '📊 Métricas',
      items: [
        'metricas/clasificacion',
        'metricas/game-board',
      ],
    },
  ],
};

export default sidebars;
