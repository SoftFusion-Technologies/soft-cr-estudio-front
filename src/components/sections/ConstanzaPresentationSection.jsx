import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/* Benjamin Orellana - 2026/04/16 - Sección editorial de presentación para Constanza Romero con imágenes rotativas cargadas automáticamente desde assets. */
export default function ConstanzaPresentationSection({ autoRotateMs = 5000 }) {
  /* Benjamin Orellana - 2026/04/16 - Carga y ordena automáticamente las imágenes presentacion1..20 para evitar imports manuales repetitivos. */
  const slides = useMemo(() => {
    const modules = import.meta.glob('../../assets/images/presentacion*.jpeg', {
      eager: true,
      import: 'default'
    });

    return Object.entries(modules)
      .sort((a, b) => {
        const getNumber = (path) => {
          const match = path.match(/presentacion(\d+)\.jpeg$/i);
          return match ? Number(match[1]) : 0;
        };

        return getNumber(a[0]) - getNumber(b[0]);
      })
      .map(([path, src], index) => ({
        id: index + 1,
        src,
        alt: `Presentación Constanza Romero ${index + 1}`
      }));
  }, []);

  /* Benjamin Orellana - 2026/04/16 - La imagen inicial se elige aleatoriamente para que al recargar la sección se perciba más viva y variable. */
  const [activeIndex, setActiveIndex] = useState(() => {
    return 0;
  });

  useEffect(() => {
    if (!slides.length) return;

    setActiveIndex(Math.floor(Math.random() * slides.length));
  }, [slides]);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, autoRotateMs);

    return () => window.clearInterval(interval);
  }, [slides, autoRotateMs]);

  if (!slides.length) return null;

  const activeSlide = slides[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#F7F3ED] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(166,156,144,0.20),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(97,87,75,0.12),transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="max-w-[640px]"
          >
            <div className="mb-5 inline-flex items-center rounded-full border border-[#D8CDC1] bg-white/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.26em] text-[#61574B] backdrop-blur-sm">
              CR Estudio Creativo
            </div>

            <h2 className="text-[2.9rem] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#171614] sm:text-[4rem] lg:text-[5.1rem]">
              CONSTANZA
              <br />
              ROMERO
            </h2>

            <div className="mt-5 h-[2px] w-24 rounded-full bg-[#171614]" />

            <p className="mt-7 text-[1.04rem] leading-[1.95] text-[#171614]/85 sm:text-[1.12rem]">
              Descripción editable: aquí irá una presentación breve sobre
              Constanza Romero, su visión creativa, la identidad de CR Estudio
              Creativo, su enfoque de trabajo, experiencia y propuesta de valor.
              Este texto queda preparado para que luego lo reemplacen por la
              versión final definida por la clienta.
            </p>

            <p className="mt-6 text-[0.96rem] leading-[1.9] text-[#61574B] sm:text-[1rem]">
              Una sección pensada para comunicar presencia, estilo, dirección
              creativa y personalidad de marca con una estética editorial,
              limpia y actual.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {slides.slice(0, Math.min(slides.length, 8)).map((_, index) => {
                const realIndex = index;

                return (
                  <button
                    key={`dot-${realIndex}`}
                    type="button"
                    onClick={() => setActiveIndex(realIndex)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === realIndex
                        ? 'w-12 bg-[#171614]'
                        : 'w-2.5 bg-[#A69C90] hover:bg-[#61574B]'
                    }`}
                    aria-label={`Ir a imagen ${realIndex + 1}`}
                  />
                );
              })}
            </div>

            <div className="mt-8">
              <div className="text-[1.35rem] italic leading-none text-[#171614] sm:text-[1.55rem]">
                Constanza Romero
              </div>
              <div className="mt-2 text-sm uppercase tracking-[0.24em] text-[#61574B]">
                Dirección creativa · CR Estudio Creativo
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[34px] bg-[radial-gradient(circle,rgba(166,156,144,0.25),transparent_65%)] blur-2xl" />

            <div className="relative overflow-hidden rounded-[34px] border border-[#E3D8CD] bg-white shadow-[0_32px_90px_-28px_rgba(23,22,20,0.22)]">
              <div className="absolute left-4 top-4 z-20 rounded-full border border-white/80 bg-white/88 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#61574B] backdrop-blur-md">
                {String(activeIndex + 1).padStart(2, '0')} /{' '}
                {String(slides.length).padStart(2, '0')}
              </div>

              <div className="relative aspect-[4/5] w-full bg-[#EFE9E1] sm:aspect-[4/4.8] lg:aspect-[4/4.9]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSlide.src}
                    src={activeSlide.src}
                    alt={activeSlide.alt}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#171614]/70 via-[#171614]/24 to-transparent px-5 pb-5 pt-16 sm:px-6 sm:pb-6">
                  <div className="text-lg font-semibold text-white sm:text-xl">
                    CR Estudio Creativo
                  </div>
                  <div className="mt-1 text-sm text-white/82 sm:text-[15px]">
                    Identidad, contenido y dirección visual con impronta
                    editorial.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between px-1 text-sm text-[#61574B]">
              <span>Presentación institucional</span>
              <span>Constanza Romero</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
