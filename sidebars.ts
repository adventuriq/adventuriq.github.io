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
      label: '⚔️ Retos',
      items: [
        'retos/index',
        'retos/respuesta-exacta',
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
