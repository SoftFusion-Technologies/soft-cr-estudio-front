import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

/*
 * Programador: Benjamin Orellana
 * Fecha Creación: 14 / 02 / 2026
 * Fecha Modificación: 23 / 03 / 2026
 * Versión: 2.0
 *
 * Descripción:
 * Intro visual no-skip adaptada a la identidad de CR - Estudio Creativo.
 * - Letras del claim ingresan con stagger y luego se reemplazan por la marca.
 * - La secuencia utiliza la paleta oficial de CR.
 * - Se elimina la lógica heredada de tonos "lila" y colores ajenos a la marca.
 * - onDone se ejecuta únicamente al finalizar el fade-out completo del overlay.
 *
 * Tema: Intro de marca
 * Capa: Frontend
 */

function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

const DEFAULT_ACCENT = '#61574B';
const DEFAULT_INK = '#171614';
const DEFAULT_BG = '#E5E0D7';

export default function BrandIntro({
  open,
  onDone,
  claim = 'Creamos identidad, contenido y presencia',
  brand = 'CR · ESTUDIO CREATIVO',

  accentHex = DEFAULT_ACCENT,
  inkHex = DEFAULT_INK,
  bgHex = DEFAULT_BG,

  brandColorCycle = true,
  brandColors = null,

  baseDelayMs = 140,
  staggerMs = 42,
  settleHoldMs = 520,
  swapDelayMs = 140,
  brandHoldMs = 1800,
  exitMs = 520
}) {
  const reducedMotion = useReducedMotion();
  const doneRef = useRef(false);

  const [showOverlay, setShowOverlay] = useState(false);
  const [phase, setPhase] = useState('claim'); // 'claim' | 'brand'

  useBodyScrollLock(Boolean(open && showOverlay));

  const letters = useMemo(() => Array.from(claim || ''), [claim]);

  const cycleColors = useMemo(() => {
    if (!brandColorCycle) return null;

    return (
      brandColors || ['#171614', '#61574B', '#A69C90', '#61574B', '#171614']
    );
  }, [brandColorCycle, brandColors]);

  const cycleTimes = useMemo(() => {
    if (!cycleColors || cycleColors.length < 2) return null;
    const n = cycleColors.length;
    return Array.from({ length: n }, (_, i) => i / (n - 1));
  }, [cycleColors]);

  const accent = useMemo(() => accentHex || DEFAULT_ACCENT, [accentHex]);

  const totalDropMs = useMemo(() => {
    if (reducedMotion) return 320;
    const n = Math.max(1, letters.length);
    return baseDelayMs + (n - 1) * staggerMs + settleHoldMs;
  }, [reducedMotion, letters.length, baseDelayMs, staggerMs, settleHoldMs]);

  useEffect(() => {
    if (!open) return;

    doneRef.current = false;
    setShowOverlay(true);
    setPhase('claim');

    const timers = [];

    timers.push(
      window.setTimeout(() => {
        setPhase('brand');
      }, totalDropMs + swapDelayMs)
    );

    timers.push(
      window.setTimeout(
        () => {
          setShowOverlay(false);
        },
        totalDropMs + swapDelayMs + brandHoldMs
      )
    );

    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [open, totalDropMs, swapDelayMs, brandHoldMs]);

  const containerVariants = reducedMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.2 } }
      }
    : {
        hidden: {},
        show: {
          transition: {
            delayChildren: baseDelayMs / 1000,
            staggerChildren: staggerMs / 1000
          }
        }
      };

  const letterVariants = reducedMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.2 } }
      }
    : {
        hidden: {
          y: -84,
          opacity: 0,
          rotate: -1.5,
          filter: 'blur(8px)'
        },
        show: {
          y: 0,
          opacity: 1,
          rotate: 0,
          filter: 'blur(0px)',
          transition: {
            type: 'spring',
            stiffness: 420,
            damping: 24,
            mass: 0.75
          }
        }
      };

  const claimWrap = {
    initial: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: 10, filter: 'blur(6px)' },
    transition: { duration: 0.26, ease: 'easeOut' }
  };

  const brandWrap = {
    initial: { opacity: 0, y: 10, filter: 'blur(8px)', scale: 0.995 },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 },
    exit: { opacity: 0, y: -6, filter: 'blur(6px)' },
    transition: { duration: 0.34, ease: 'easeOut' }
  };

  const overlayWrap = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 0, filter: 'blur(3px)' },
    transition: { duration: exitMs / 1000, ease: 'easeOut' }
  };

  const claimWords = useMemo(() => {
    return String(claim || '')
      .trim()
      .split(/\s+/)
      .filter(Boolean);
  }, [claim]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (doneRef.current) return;
        doneRef.current = true;
        onDone?.();
      }}
    >
      {open && showOverlay && (
        <motion.div
          key="cr-brand-intro"
          className="fixed inset-0 z-[9999] overflow-hidden bg-[color:var(--intro-bg)]"
          style={{
            '--intro-ink': inkHex,
            '--intro-accent': accent,
            '--intro-bg': bgHex
          }}
          initial={overlayWrap.initial}
          animate={overlayWrap.animate}
          exit={overlayWrap.exit}
          transition={overlayWrap.transition}
          role="dialog"
          aria-modal="true"
          aria-label="Brand Intro"
        >
          {/* Benjamin Orellana - 23/03/2026 - Fondos sutiles alineados a la paleta de CR, sin efectos estridentes */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[52rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(166,156,144,0.14)_0%,_rgba(229,224,215,0)_68%)]" />
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(23,22,20,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,22,20,0.16)_1px,transparent_1px)] [background-size:44px_44px]" />
          </div>

          <div className="relative flex h-full w-full items-center justify-center px-6">
            <div className="w-full max-w-5xl select-none px-2 text-center sm:px-0">
              <AnimatePresence mode="wait">
                {phase === 'claim' ? (
                  <motion.h1
                    key="claim"
                    {...claimWrap}
                    className="leading-[1.05] tracking-tight text-[color:var(--intro-ink)] text-5xl sm:text-5xl lg:text-6xl"
                    style={{ fontFamily: 'var(--font-primary)' }}
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {claimWords.map((word, wIdx) => (
                      <React.Fragment key={`w-${wIdx}`}>
                        <span className="inline-block whitespace-nowrap">
                          {Array.from(word).map((ch, lIdx) => (
                            <motion.span
                              key={`lt-${wIdx}-${lIdx}`}
                              variants={letterVariants}
                              className="inline-block"
                            >
                              {ch}
                            </motion.span>
                          ))}
                        </span>

                        {wIdx !== claimWords.length - 1 && (
                          <span className="inline-block w-[0.35em]">
                            {'\u00A0'}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </motion.h1>
                ) : (
                  <motion.div
                    key="brand"
                    initial={brandWrap.initial}
                    animate={brandWrap.animate}
                    exit={brandWrap.exit}
                    transition={brandWrap.transition}
                    className="text-[color:var(--intro-ink)] text-3xl font-extrabold sm:text-4xl lg:text-5xl"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    <motion.span
                      className="tracking-[0.22em]"
                      initial={{
                        color: cycleColors?.[0] ?? 'var(--intro-ink)'
                      }}
                      animate={
                        cycleColors
                          ? { color: cycleColors }
                          : { color: 'var(--intro-ink)' }
                      }
                      transition={
                        cycleColors && cycleTimes
                          ? {
                              duration: Math.max(
                                0.2,
                                (brandHoldMs - 120) / 1000
                              ),
                              times: cycleTimes,
                              ease: 'easeInOut'
                            }
                          : { duration: 0.01 }
                      }
                    >
                      {brand}
                    </motion.span>

                    <div className="mx-auto mt-5 h-[2px] w-24 rounded-full bg-[color:var(--intro-accent)] opacity-35" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
