import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Palm Hills Gulf Company Limited | شركة بالم هيلز جلف المحدودة',
    short_name: 'Palm Hills Gulf',
    description: 'Premier General Contractor, Heavy Civil Engineering, Infrastructure & MEP in Saudi Arabia & Egypt.',
    start_url: '/',
    display: 'standalone',
    background_color: '#060c18',
    theme_color: '#0284c7',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
