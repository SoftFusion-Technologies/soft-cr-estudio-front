import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/*
 * Programador: Benjamin Orellana
 * Fecha Creación: 24 / 03 / 2026
 * Versión: 1.0
 *
 * Descripción:
 * Footer principal de CR - Estudio Creativo.
 * Presenta navegación resumida del sitio, agrupación de servicios,
 * acceso a contacto y cierre institucional con estética sobria,
 * minimalista y responsive alineada a la identidad visual de CR.
 *
 * Tema: Footer sitio público
 * Capa: Frontend
 */

const NAV_GROUPS = [
  {
    key: 'cm',
    label: 'CM & Marca',
    items: [
      { label: 'Community Manager', href: '#community-manager' },
      { label: 'Marketing para redes sociales', href: '#marketing-redes' },
      { label: 'Branding y rebranding', href: '#branding' }
    ]
  },
  {
    key: 'foto-video',
    label: 'Foto & Video',
    items: [
      { label: 'Creación y edición de videos', href: '#edicion-video' },
      { label: 'Video y Fotografía profesional', href: '#video-profesional' },
      { label: 'Producción completa', href: '#produccion-completa' },
      { label: 'Diseño y animación 3D', href: '#animacion-3d' }
    ]
  }
];

const QUICK_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' }
];

export default function FooterCR() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#171614] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute left-[-10%] top-[-20%] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,_rgba(166,156,144,0.16)_0%,_rgba(23,22,20,0)_72%)]" />
        <div className="absolute bottom-[-25%] right-[-8%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,_rgba(97,87,75,0.20)_0%,_rgba(23,22,20,0)_72%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.7fr_1fr_1fr]">
          <div className="max-w-md">
            <a
              href="#inicio"
              className="inline-flex items-center"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              <span className="text-[1.25rem] font-semibold tracking-[-0.03em] text-[#E5E0D7]">
                CR
              </span>
              <span className="ml-2 text-sm uppercase tracking-[0.28em] text-white/58">
                Estudio Creativo
              </span>
            </a>

            <h3
              className="mt-6 text-[2rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-[2.35rem]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Marcas con estética,
              <span
                className="ml-2 text-[#A69C90]"
                style={{ fontFamily: 'var(--font-secondary)' }}
              >
                estrategia
              </span>
              <br />y presencia real.
            </h3>

            <p
              className="mt-5 max-w-[30rem] text-[0.98rem] leading-7 text-white/68"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Contenido, branding y producción visual para proyectos que buscan
              una imagen más sólida, una comunicación más clara y una presencia
              digital coherente.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-white px-5 py-3 text-sm font-semibold text-[#171614] shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#E5E0D7] hover:bg-[#E5E0D7]"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                Quiero trabajar con vos
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/5 px-5 py-3 text-sm font-semibold text-white/88 transition-all duration-300 hover:-translate-y-[1px] hover:border-white/22 hover:bg-white/10"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                Ver servicios
              </a>
            </div>
          </div>

          <div>
            <span
              className="block text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#A69C90]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Navegación
            </span>

            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[0.98rem] text-white/74 transition-colors duration-300 hover:text-white"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {NAV_GROUPS.map((group) => (
            <div key={group.key}>
              <span
                className="block text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#A69C90]"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                {group.label}
              </span>

              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[0.98rem] leading-6 text-white/74 transition-colors duration-300 hover:text-white"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
          <p style={{ fontFamily: 'var(--font-primary)' }}>
            © {year} CR - Estudio Creativo. Todos los derechos reservados.
          </p>

          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-2"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            <a
              href="#inicio"
              className="transition-colors duration-300 hover:text-white/80"
            >
              Volver arriba
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:inline-block" />
            <a
              href="#contacto"
              className="transition-colors duration-300 hover:text-white/80"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
