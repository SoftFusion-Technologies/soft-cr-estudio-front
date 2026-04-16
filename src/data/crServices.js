/* Benjamin Orellana - 2026/04/16 - Catálogo central de servicios CR con imagen de portada y datos para cards y páginas. */
import presentacion3 from '../assets/images/presentacion3.jpeg';
import presentacion5 from '../assets/images/presentacion5.jpeg';
import presentacion7 from '../assets/images/presentacion7.jpeg';
import presentacion9 from '../assets/images/presentacion9.jpeg';
import presentacion11 from '../assets/images/presentacion11.jpeg';
import presentacion13 from '../assets/images/presentacion13.jpeg';
import presentacion15 from '../assets/images/presentacion15.jpeg';

export const crServices = [
  {
    slug: 'community-manager',
    title: 'Community Manager',
    eyebrow: 'CM & Marca',
    shortDescription:
      'Gestión estratégica de comunidad, presencia digital y vínculo real con tu audiencia.',
    image: presentacion3
  },
  {
    slug: 'marketing-redes',
    title: 'Marketing para Redes',
    eyebrow: 'CM & Marca',
    shortDescription:
      'Planificación, campañas y contenido para crecer con intención y posicionamiento.',
    image: presentacion5
  },
  {
    slug: 'branding',
    title: 'Branding y Rebranding',
    eyebrow: 'CM & Marca',
    shortDescription:
      'Construcción de identidad visual y conceptual para marcas memorables.',
    image: presentacion7
  },
  {
    slug: 'edicion-video',
    title: 'Creación y Edición de Videos',
    eyebrow: 'Foto & Video',
    shortDescription:
      'Contenido audiovisual dinámico, actual y pensado para impacto digital.',
    image: presentacion9
  },
  {
    slug: 'video-profesional',
    title: 'Video y Fotografía Profesional',
    eyebrow: 'Foto & Video',
    shortDescription:
      'Producción visual profesional para mostrar tu marca con alto nivel estético.',
    image: presentacion11
  },
  {
    slug: 'produccion-completa',
    title: 'Producción Completa',
    eyebrow: 'Foto & Video',
    shortDescription:
      'Desarrollo integral de campañas y piezas visuales desde la idea hasta la entrega.',
    image: presentacion13
  },
  {
    slug: 'animacion-3d',
    title: 'Diseño y Animación 3D',
    eyebrow: 'Foto & Video',
    shortDescription:
      'Visuales diferenciales para elevar presentaciones, campañas y storytelling.',
    image: presentacion15
  }
];

export const crServicesBySlug = Object.fromEntries(
  crServices.map((item) => [item.slug, item])
);
