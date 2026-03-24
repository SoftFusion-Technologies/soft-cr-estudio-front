import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/*
 * Programador: Benjamin Orellana
 * Fecha Creación: 23 / 03 / 2026
 * Versión: 2.3
 *
 * Descripción:
 * Hero principal de CR - Estudio Creativo.
 * Se mantiene la composición visual original con una imagen principal al
 * centro y dos de apoyo detrás. Se incorpora una animación textual más
 * expresiva en el título principal para evitar una sensación plana, sin
 * alterar la lógica ni el comportamiento del bloque visual de imágenes.
 *
 * Tema: Hero Home
 * Capa: Frontend
 */

const VISUALS = [
  { id: 1, src: '/brand/graficos/5.png', alt: 'Elemento gráfico CR 1' },
  { id: 2, src: '/brand/graficos/6.png', alt: 'Elemento gráfico CR 2' },
  { id: 3, src: '/brand/graficos/7.png', alt: 'Elemento gráfico CR 3' },
  { id: 4, src: '/brand/graficos/8.png', alt: 'Elemento gráfico CR 4' }
];

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: 'blur(8px)' },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: 0.1 * i,
      duration: 0.62,
      ease: 'easeOut'
    }
  })
};

const textWrap = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08
    }
  }
};

const textItem = {
  hidden: { opacity: 0, y: 22, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

function RotatingAccentWord({ words = [], interval = 2400, className = '' }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words.length) return;

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [words, interval]);

  return (
    <span
      className={`relative inline-flex min-w-[1.2ch] items-center align-baseline ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{
            opacity: 0,
            y: 16,
            scale: 0.96,
            filter: 'blur(8px)'
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)'
          }}
          exit={{
            opacity: 0,
            y: -14,
            scale: 0.98,
            filter: 'blur(8px)'
          }}
          transition={{
            duration: 0.46,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="relative inline-block whitespace-nowrap px-2"
          style={{ fontFamily: 'var(--font-secondary)' }}
        >
          <span className="relative z-10 text-[#61574B]">{words[index]}</span>

          <motion.span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-[0.10em] z-0 h-[0.42em] rounded-full bg-[#E5E0D7]"
            initial={{ opacity: 0, scaleX: 0.7 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0.82 }}
            transition={{ duration: 0.34, ease: 'easeOut' }}
            style={{ transformOrigin: 'left center' }}
          />

          <motion.span
            aria-hidden="true"
            className="absolute bottom-[0.10em] left-0 z-20 h-[0.42em] w-10 rounded-full"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.72) 50%, transparent 100%)'
            }}
            animate={{ x: ['-30%', '170%'] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              repeatDelay: 1.1,
              ease: 'easeInOut'
            }}
          />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function HeroCR() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const activeVisual = useMemo(() => VISUALS[activeIndex], [activeIndex]);
  const prevVisual = useMemo(
    () => VISUALS[(activeIndex - 1 + VISUALS.length) % VISUALS.length],
    [activeIndex]
  );
  const nextVisual = useMemo(
    () => VISUALS[(activeIndex + 1) % VISUALS.length],
    [activeIndex]
  );

  useEffect(() => {
    if (paused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % VISUALS.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [paused]);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[var(--color-cream)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,rgba(23,22,20,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,22,20,0.16)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute left-[-8%] top-[-12%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(166,156,144,0.18)_0%,_rgba(229,224,215,0)_72%)]" />
        <div className="absolute bottom-[-18%] right-[-6%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,_rgba(97,87,75,0.12)_0%,_rgba(229,224,215,0)_72%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24 lg:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <motion.div
            initial="hidden"
            animate="show"
            variants={textWrap}
            className="max-w-2xl"
          >
            <motion.h1
              variants={textItem}
              className="title-brand text-[2.8rem] font-semibold leading-[0.97] tracking-[-0.045em] text-[var(--color-ink)] sm:text-[3.5rem] lg:text-[4.7rem]"
            >
              <motion.span variants={textItem} className="inline-block">
                Tu marca puede verse{' '}
              </motion.span>

              <RotatingAccentWord
                words={['clara', 'atractiva', 'elegante', 'fuerte']}
              />

              <motion.span variants={textItem} className="inline-block">
                 y crecer con más intención.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={textItem}
              className="mt-6 max-w-xl text-[1rem] leading-8 text-[#171614]/72 sm:text-[1.05rem]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Estrategia, contenido y producción visual para marcas que quieren
              presencia real en redes y una identidad más sólida.
            </motion.p>

            <motion.div
              variants={textItem}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-white px-6 py-3.5 text-sm font-semibold text-[#171614] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#E5E0D7] hover:bg-[#E5E0D7] hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                Quiero trabajar con vos
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border border-[#A69C90]/40 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#171614] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#61574B]/40 hover:bg-white"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                Ver servicios
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.18, duration: 0.8, ease: 'easeOut' }}
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative mx-auto flex min-h-[420px] w-full max-w-[680px] items-center justify-center sm:min-h-[520px] lg:min-h-[620px]">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(97,87,75,0.14)_0%,_rgba(229,224,215,0)_72%)] blur-md" />
              </div>

              <motion.img
                key={`prev-${prevVisual.src}`}
                src={prevVisual.src}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-[3%] top-[12%] z-0 h-[150px] w-auto select-none object-contain opacity-[0.18] blur-[1px] sm:h-[185px] lg:h-[220px]"
                animate={{
                  y: [0, -10, 0],
                  rotate: [-5, -8, -5]
                }}
                transition={{
                  duration: 5.8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />

              <motion.img
                key={`next-${nextVisual.src}`}
                src={nextVisual.src}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[8%] right-[2%] z-0 h-[150px] w-auto select-none object-contain opacity-[0.18] blur-[1px] sm:h-[185px] lg:h-[220px]"
                animate={{
                  y: [0, 10, 0],
                  rotate: [5, 8, 5]
                }}
                transition={{
                  duration: 6.2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />

              <div className="relative z-10 flex h-[260px] w-[260px] items-center justify-center sm:h-[340px] sm:w-[340px] lg:h-[430px] lg:w-[430px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVisual.src}
                    initial={{ opacity: 0, scale: 0.9, y: 26 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: -18 }}
                    transition={{ duration: 0.52, ease: 'easeOut' }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.img
                      src={activeVisual.src}
                      alt={activeVisual.alt}
                      className="max-h-full max-w-full select-none object-contain drop-shadow-[0_22px_50px_rgba(23,22,20,0.14)]"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, -1.4, 0]
                      }}
                      transition={{
                        duration: 5.2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2">
                {VISUALS.map((item, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={[
                        'h-2.5 rounded-full transition-all duration-300',
                        isActive
                          ? 'w-10 bg-[#171614]'
                          : 'w-2.5 bg-[#A69C90]/55 hover:bg-[#61574B]/65'
                      ].join(' ')}
                      aria-label={`Ver gráfico ${index + 1}`}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
