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
      ],
    },
    {
      type: 'category',
      label: '📋 Misiones',
      items: [
        'misiones/index',
        'misiones/configuracion-general',
        'misiones/bloqueos-visibilidad',
        'misiones/contenido-imagenes',
        'misiones/descripcion',
        'misiones/mapas',
        'misiones/objetos-digitales',
        'misiones/notificaciones',
        'misiones/condiciones-finalizacion',
      ],
    },
    {
      type: 'category',
      label: '⚔️ Retos',
      items: [
        'retos/index',
        'retos/pregunta-respuesta',
        'retos/preguntas-encadenadas',
        'retos/respuesta-libre',
        'retos/subir-foto',
        'retos/llamada-a-la-accion',
        'retos/respuesta-exacta',
        'retos/pregunta-respuesta-audio',
        'retos/pregunta-respuesta-video',
        'retos/ruleta-de-la-fortuna',
        'retos/nube-de-palabras',
      ],
    },
    {
      type: 'category',
      label: '🎁 Recompensas',
      items: [
        'recompensas/configuracion-contenido',
      ],
    },
  ],
};

export default sidebars;
