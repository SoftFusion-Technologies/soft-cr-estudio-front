import React, { useEffect, useMemo, useRef, useState } from 'react';

/*
 * Programador: Benjamin Orellana
 * Fecha Creación: 23 / 03 / 2026
 * Versión: 1.0
 *
 * Descripción:
 * Navbar principal de CR - Estudio Creativo.
 * Incluye:
 * - Logo a la izquierda
 * - Navegación desktop con dropdowns
 * - Menú mobile responsive con acordeones
 * - CTA principal "Quiero trabajar con vos"
 * - Estética minimalista y alineada a la identidad visual de CR
 *
 * Tema: Navegación principal
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
      { label: 'Video y Fotografía   profesional', href: '#video-profesional' },
      { label: 'Producción completa', href: '#produccion-completa' },
      { label: 'Diseño y animación 3D', href: '#animacion-3d' }
    ]
  }
];

function Chevron({ open = false, className = '' }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform .25s ease'
      }}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ open = false }) {
  if (open) {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7H20M4 12H20M4 17H20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroupOpen, setMobileGroupOpen] = useState(null);
  const [desktopOpen, setDesktopOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const desktopCloseTimer = useRef(null);

  const logoSrc = useMemo(() => '/brand/logos/SECUNDARIA/1.png', []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(event.target)) {
        setDesktopOpen(null);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setDesktopOpen(null);
        setMobileOpen(false);
        setMobileGroupOpen(null);
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const handleDesktopEnter = (key) => {
    if (desktopCloseTimer.current) {
      window.clearTimeout(desktopCloseTimer.current);
      desktopCloseTimer.current = null;
    }
    setDesktopOpen(key);
  };

  const handleDesktopLeave = () => {
    desktopCloseTimer.current = window.setTimeout(() => {
      setDesktopOpen(null);
    }, 120);
  };

  const toggleMobileGroup = (key) => {
    setMobileGroupOpen((prev) => (prev === key ? null : key));
  };

  const closeAllMobile = () => {
    setMobileOpen(false);
    setMobileGroupOpen(null);
  };

  return (
    <header
      ref={navRef}
      className={[
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-[#A69C90]/20 bg-[#E5E0D7]/88 backdrop-blur-xl'
          : 'bg-transparent'
      ].join(' ')}
    >
      <div className="mx-auto flex h-[84px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-90"
          aria-label="Ir al inicio"
        >
          <img
            src={logoSrc}
            alt="CR - Estudio Creativo"
            className="h-11 w-auto object-contain sm:h-12"
          />

          <div className="hidden min-[430px]:block">
            <div
              className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[#61574B]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              CR
            </div>
            <div
              className="text-[12px] tracking-[0.18em] text-[#171614]/75"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              ESTUDIO CREATIVO
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-2 lg:flex"
          aria-label="Navegación principal"
        >
          <a
            href="#inicio"
            className="rounded-full px-4 py-2 text-[15px] font-medium text-[#171614] transition-colors duration-200 hover:text-[#61574B]"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            Inicio
          </a>

          {NAV_GROUPS.map((group) => {
            const isOpen = desktopOpen === group.key;

            return (
              <div
                key={group.key}
                className="relative"
                onMouseEnter={() => handleDesktopEnter(group.key)}
                onMouseLeave={handleDesktopLeave}
              >
                <button
                  type="button"
                  onClick={() =>
                    setDesktopOpen((prev) =>
                      prev === group.key ? null : group.key
                    )
                  }
                  className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium text-[#171614] transition-colors duration-200 hover:text-[#61574B]"
                  style={{ fontFamily: 'var(--font-primary)' }}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  {group.label}
                  <Chevron open={isOpen} className="text-[#61574B]" />
                </button>

                <div
                  className={[
                    'absolute left-1/2 top-[calc(100%+14px)] w-[320px] -translate-x-1/2 transition-all duration-200',
                    isOpen
                      ? 'pointer-events-auto translate-y-0 opacity-100'
                      : 'pointer-events-none -translate-y-1 opacity-0'
                  ].join(' ')}
                >
                  <div className="overflow-hidden rounded-[28px] border border-[#A69C90]/25 bg-[#FFFFFF]/92 p-3 shadow-[0_24px_80px_-28px_rgba(23,22,20,0.22)] backdrop-blur-xl">
                    <div className="mb-2 px-3 pt-2">
                      <span
                        className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#61574B]"
                        style={{ fontFamily: 'var(--font-primary)' }}
                      >
                        {group.label}
                      </span>
                    </div>

                    <div className="space-y-1">
                      {group.items.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block rounded-[20px] px-3 py-3 text-[14px] text-[#171614] transition-all duration-200 hover:bg-[#E5E0D7] hover:text-[#61574B]"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <a
            href="#contacto"
            className="ml-3 inline-flex items-center rounded-full border border-white bg-white px-5 py-2.5 text-[14px] font-semibold text-[#171614] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#E5E0D7] hover:bg-[#E5E0D7] hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            Quiero trabajar con vos
          </a>
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#A69C90]/35 bg-[#FFFFFF]/70 text-[#171614] backdrop-blur lg:hidden"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={[
          'lg:hidden transition-all duration-300 ease-out',
          mobileOpen
            ? 'pointer-events-auto max-h-[90dvh] opacity-100'
            : 'pointer-events-none max-h-0 opacity-0'
        ].join(' ')}
      >
        <div className="border-t border-[#A69C90]/20 bg-[#E5E0D7]/96 backdrop-blur-2xl">
          <div className="mx-auto max-w-7xl px-4 pb-6 pt-4 sm:px-6">
            <div className="overflow-hidden rounded-[28px] border border-[#A69C90]/20 bg-white/80 p-3 shadow-[0_24px_60px_-30px_rgba(23,22,20,0.18)]">
              <a
                href="#inicio"
                onClick={closeAllMobile}
                className="block rounded-[20px] px-4 py-3 text-[15px] font-medium text-[#171614] transition-colors duration-200 hover:bg-[#E5E0D7]"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                Inicio
              </a>

              {NAV_GROUPS.map((group) => {
                const isOpen = mobileGroupOpen === group.key;

                return (
                  <div
                    key={group.key}
                    className="mt-1 overflow-hidden rounded-[22px]"
                  >
                    <button
                      type="button"
                      onClick={() => toggleMobileGroup(group.key)}
                      className="flex w-full items-center justify-between rounded-[20px] px-4 py-3 text-left text-[15px] font-medium text-[#171614] transition-colors duration-200 hover:bg-[#E5E0D7]"
                      style={{ fontFamily: 'var(--font-primary)' }}
                      aria-expanded={isOpen}
                    >
                      <span>{group.label}</span>
                      <Chevron open={isOpen} className="text-[#61574B]" />
                    </button>

                    <div
                      className={[
                        'grid transition-all duration-300',
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-70'
                      ].join(' ')}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-1 px-2 pb-2">
                          {group.items.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              onClick={closeAllMobile}
                              className="block rounded-[18px] px-4 py-3 text-[14px] text-[#171614]/82 transition-colors duration-200 hover:bg-[#E5E0D7] hover:text-[#61574B]"
                              style={{ fontFamily: 'var(--font-primary)' }}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="mt-3 px-1">
                <a
                  href="#contacto"
                  onClick={closeAllMobile}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white bg-white px-5 py-2.5 text-[14px] font-semibold text-[#171614] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#E5E0D7] hover:bg-[#E5E0D7] hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Quiero trabajar con vos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
